from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import pickle
import traceback
import numpy as np
import requests
from datetime import datetime, timedelta, timezone

try:
    from zoneinfo import ZoneInfo  # Python 3.9+
except Exception:
    ZoneInfo = None

app = Flask(__name__, static_folder='.', static_url_path='')
CORS(app)

# Consolidated model loading (file-relative default, but can override via MODEL_PATH env)
MODEL_PATH = os.environ.get('MODEL_PATH') or os.path.join(os.path.dirname(__file__), "rainfall_prediction_model.pkl")
MODEL = None
FEATURE_NAMES = None

try:
    with open(MODEL_PATH, "rb") as f:
        loaded = pickle.load(f)
    if isinstance(loaded, dict):
        # support {'model': estimator, 'feature_names': [...]}
        if 'model' in loaded:
            MODEL = loaded.get('model')
            FEATURE_NAMES = loaded.get('feature_names')
        else:
            # find first value that looks like an estimator
            for v in loaded.values():
                if hasattr(v, 'predict'):
                    MODEL = v
                    break
    else:
        MODEL = loaded
    print(f"Model loaded from {MODEL_PATH}: {type(MODEL)} feature_names={FEATURE_NAMES}")
except FileNotFoundError:
    print(f"Model file not found at: {MODEL_PATH}. Predictions will return an error until the file is added.")
except Exception as e:
    print(f"Failed to load model ({MODEL_PATH}): {e}")
    traceback.print_exc()

# ThingSpeak config (can be overridden via env vars)
THINGSPEAK_CHANNEL_ID = os.environ.get('THINGSPEAK_CHANNEL_ID', '')
THINGSPEAK_READ_API_KEY = os.environ.get('THINGSPEAK_READ_API_KEY', '')
THINGSPEAK_RESULTS = int(os.environ.get('THINGSPEAK_RESULTS', '10'))

# Map semantic names to ThingSpeak field names (adjust if your channel uses different fields)
THINGSPEAK_FIELD_MAP = {
    'temperature': 'field1',
    'humidity': 'field2',
    'pressure': 'field3',
    'wind_speed': 'field4',
    'rainfall': 'field5'
}

def build_thingspeak_url(channel_id=None, api_key=None, results=10):
	# channel_id is required to build a valid URL
	cid = (channel_id or THINGSPEAK_CHANNEL_ID or '').strip()
	if not cid:
		raise ValueError("ThingSpeak channel id is missing")
	base = f'https://api.thingspeak.com/channels/{cid}/feeds.json'
	params = {'results': str(results)}
	if api_key:
		params['api_key'] = api_key
	# safe-quote only values, convert to str to avoid None issues
	return base + '?' + '&'.join(f'{k}={requests.utils.quote(str(v))}' for k, v in params.items())

def fetch_thingspeak_latest(results=THINGSPEAK_RESULTS, channel_id=None, api_key=None):
	# allow overrides via function args; validate channel id before making request
	cid = channel_id or THINGSPEAK_CHANNEL_ID
	if not cid:
		return None, 'no-channel-id'
	try:
		url = build_thingspeak_url(channel_id=cid, api_key=(api_key or THINGSPEAK_READ_API_KEY), results=results)
	except ValueError:
		return None, 'no-channel-id'
	try:
		resp = requests.get(url, timeout=6)
		# map HTTP status to friendly error tokens instead of raising and leaking details
		status = getattr(resp, "status_code", None)
		if status is not None and not (200 <= status < 300):
			if status == 404:
				return None, f'http-404: channel {cid} not found'
			if status in (401, 403):
				return None, f'http-auth-error: status={status}'
			return None, f'http-error: status={status}'
		# parse payload only for successful responses
		payload = resp.json()
		feeds = payload.get('feeds', [])
		if not feeds:
			return None, 'no-feeds'
		latest = feeds[-1]
		parsed = {}
		for semantic, ts_field in THINGSPEAK_FIELD_MAP.items():
			raw = latest.get(ts_field)
			if raw is None or raw == '':
				parsed[semantic] = None
			else:
				try:
					parsed[semantic] = float(raw)
				except Exception:
					parsed[semantic] = None
		parsed['created_at'] = latest.get('created_at')
		return parsed, None
	except requests.RequestException as e:
		# classify as network error
		return None, f'network-error: {str(e)}'
	except ValueError:
		return None, 'invalid-json'

def assemble_feature_vector(source_vals: dict):
    """
    Build feature vector (shape (1, n)) in correct order for the model.
    If FEATURE_NAMES provided, uses that order and attempts aliases.
    Missing numeric values are filled with 0.0 to avoid crashes (change if strict).
    """
    aliases = {
        'temperature': ['temperature', 'temp', 't'],
        'humidity': ['humidity', 'hum'],
        'pressure': ['pressure', 'press'],
        'wind_speed': ['wind_speed', 'wind', 'windspeed'],
        'rainfall': ['rainfall', 'rain']
    }
    if FEATURE_NAMES:
        vec = []
        for fname in FEATURE_NAMES:
            val = source_vals.get(fname)
            if val is None:
                for alias in aliases.get(fname, [fname]):
                    if alias in source_vals and source_vals[alias] is not None:
                        val = source_vals[alias]
                        break
            if val is None:
                vec.append(0.0)
            else:
                vec.append(float(val))
        return np.array([vec])
    else:
        # default order
        try:
            arr = [
                float(source_vals.get('temperature', 0.0)),
                float(source_vals.get('humidity', 0.0)),
                float(source_vals.get('pressure', 0.0)),
                float(source_vals.get('wind_speed', 0.0))
            ]
            return np.array([arr])
        except Exception as e:
            raise ValueError('Invalid numeric inputs') from e

def build_sun_api_url(lat, lng, date='today', formatted=0):
    return f'https://api.sunrise-sunset.org/json?lat={lat}&lng={lng}&date={date}&formatted={formatted}'

def call_sun_api(lat, lng, date='today'):
    """Call sunrise-sunset API and return parsed results or (None, error)."""
    url = build_sun_api_url(lat, lng, date=date, formatted=0)
    try:
        resp = requests.get(url, timeout=6)
        resp.raise_for_status()
        payload = resp.json()
        if payload.get('status') != 'OK':
            return None, payload.get('status') or 'api-error'
        results = payload.get('results', {})
        return results, None
    except requests.RequestException as e:
        return None, str(e)
    except ValueError:
        return None, 'invalid-json'

def parse_iso_to_dt(iso_str):
    """Parse ISO string returned by sunrise-sunset (ensure timezone aware UTC)."""
    if iso_str is None:
        return None
    try:
        return datetime.fromisoformat(iso_str.replace('Z', '+00:00'))
    except Exception:
        return None

def convert_dt_to_tz(dt_utc, tz_name=None, tz_offset_minutes=None):
    """Return ISO string for local time given either tz_name (IANA) or tz_offset_minutes."""
    if dt_utc is None:
        return None
    try:
        if tz_name and ZoneInfo is not None:
            local_dt = dt_utc.astimezone(ZoneInfo(tz_name))
        elif tz_offset_minutes is not None:
            local_tz = timezone(timedelta(minutes=int(tz_offset_minutes)))
            local_dt = dt_utc.astimezone(local_tz)
        else:
            return None
        return local_dt.isoformat()
    except Exception:
        return None

@app.route('/sun_times', methods=['GET', 'POST'])
def sun_times():
    """
    Return sunrise, sunset and day_length for provided latitude/longitude.
    Accepts query params (GET) or JSON body (POST):
      - latitude (required)
      - longitude (required)
      - date (optional, default 'today', format YYYY-MM-DD or 'today')
      - tz (optional, IANA timezone name) OR tz_offset_minutes (optional, int)
    """
    payload = request.get_json(silent=True) or {}
    if request.method == 'GET':
        payload.update(request.args.to_dict())

    try:
        lat = float(payload.get('latitude') or payload.get('lat'))
        lng = float(payload.get('longitude') or payload.get('lng') or payload.get('lon'))
    except Exception:
        return jsonify({"error": "Missing or invalid latitude/longitude"}), 400

    date = payload.get('date', 'today')
    tz_name = payload.get('tz')
    tz_offset = payload.get('tz_offset_minutes')
    if tz_offset is not None:
        try:
            tz_offset = int(tz_offset)
        except Exception:
            tz_offset = None

    results, err = call_sun_api(lat, lng, date=date)
    if results is None:
        return jsonify({"error": f"Sun API fetch failed: {err}"}), 502

    sunrise_utc = parse_iso_to_dt(results.get('sunrise'))
    sunset_utc = parse_iso_to_dt(results.get('sunset'))
    day_length = results.get('day_length')

    # compute tz_used safely (avoid invalid format specifiers)
    tz_used = None
    if tz_name:
        tz_used = tz_name
    elif tz_offset is not None:
        try:
            tz_hours = float(tz_offset) / 60.0
            tz_used = f"UTC{tz_hours:+.2f}"
        except Exception:
            tz_used = None

    resp = {
        "sunrise_utc": sunrise_utc.isoformat() if sunrise_utc else None,
        "sunset_utc": sunset_utc.isoformat() if sunset_utc else None,
        "day_length_seconds": int(day_length) if day_length is not None else None,
        "raw_api": results
    }

    if tz_name or tz_offset is not None:
        resp.update({
            "sunrise_local": convert_dt_to_tz(sunrise_utc, tz_name=tz_name, tz_offset_minutes=tz_offset),
            "sunset_local": convert_dt_to_tz(sunset_utc, tz_name=tz_name, tz_offset_minutes=tz_offset),
            "tz_used": tz_used
        })

    return jsonify(resp)

@app.route("/", methods=["POST"])
def predict_rain():
    if MODEL is None:
        return jsonify({"error": "Model not loaded on server"}), 500

    req = request.get_json(silent=True) or {}
    use_thingspeak = req.get('use_thingspeak', False)
    source = 'payload'

    # decide whether to fetch ThingSpeak (if requested or if payload lacks known sensor keys)
    # allow per-request override of channel/api key via request body
    override_ts_cid = req.get('thingspeak_channel_id') or req.get('ts_channel_id')
    override_ts_key = req.get('thingspeak_api_key') or req.get('ts_api_key')
    payload_keys = set(req.keys())
    expected_keys = set(FEATURE_NAMES or ['temperature','humidity','pressure','wind_speed'])
    want_thingspeak = use_thingspeak or not (payload_keys & expected_keys)

    if want_thingspeak:
        parsed, err = fetch_thingspeak_latest(results=THINGSPEAK_RESULTS, channel_id=override_ts_cid, api_key=override_ts_key)
        if parsed is None:
            # Provide clearer errors when ThingSpeak is not configured
            if err == 'no-channel-id':
                # if payload provided sensor data, fall back to payload; otherwise return instructive error
                if payload_keys & expected_keys:
                    payload_vals = req
                    source = 'payload'
                else:
                    return jsonify({"error": "ThingSpeak channel id not configured (THINGSPEAK_CHANNEL_ID) and no sensor data provided in request. Provide sensor fields or a valid thingspeak_channel_id."}), 400
            else:
                # other ThingSpeak failures: if payload present, fall back; else propagate 502
                if payload_keys & expected_keys:
                    payload_vals = req
                    source = 'payload'
                else:
                    return jsonify({"error": f"ThingSpeak fetch failed: {err}"}), 502
        else:
            payload_vals = parsed
            source = 'thingspeak'
    else:
        payload_vals = req

    try:
        X = assemble_feature_vector(payload_vals)
    except ValueError as e:
        return jsonify({"error": str(e)}), 400

    # build response dict so we can append sun-times later
    response = {}
    try:
        if hasattr(MODEL, 'predict_proba'):
            proba = MODEL.predict_proba(X)[0]
            if len(proba) == 1:
                prob_pos = float(proba[0])
            else:
                prob_pos = float(proba[-1])
            rain_prob_percent = round(prob_pos * 100.0, 2)
            rain_prediction = "Yes" if prob_pos >= 0.5 else "No"
            response.update({
                "rain_prediction": rain_prediction,
                "rain_probability": rain_prob_percent,
            })
        else:
            pred = MODEL.predict(X)[0]
            label = "Yes" if int(pred) == 1 else "No"
            response.update({
                "rain_prediction": label,
            })
        response.update({
            "source": source,
            "used_features": FEATURE_NAMES or ['temperature','humidity','pressure','wind_speed']
        })
    except Exception as e:
        print("Error during model prediction:")
        traceback.print_exc()
        return jsonify({"error": "Model inference failed: " + str(e)}), 500

    # If lat/lon provided in request payload, include sun times (client may also send tz/tz_offset_minutes)
    try:
        lat = req.get('latitude') or req.get('lat')
        lng = req.get('longitude') or req.get('lon') or req.get('lng')
        if lat is not None and lng is not None:
            try:
                lat_f = float(lat); lng_f = float(lng)
                date = req.get('date', 'today')
                tz_name = req.get('tz')
                tz_offset = req.get('tz_offset_minutes')
                if tz_offset is not None:
                    try:
                        tz_offset = int(tz_offset)
                    except Exception:
                        tz_offset = None
                sun_res, sun_err = call_sun_api(lat_f, lng_f, date=date)
                if sun_res:
                    sr = parse_iso_to_dt(sun_res.get('sunrise'))
                    ss = parse_iso_to_dt(sun_res.get('sunset'))
                    # Safely set day_length_seconds
                    dl = sun_res.get('day_length')
                    response['day_length_seconds'] = int(dl) if (dl is not None and str(dl).strip() != '') else None
                    response['sunrise_utc'] = sr.isoformat() if sr else None
                    response['sunset_utc'] = ss.isoformat() if ss else None

                    # compute tz_used safely for predict_rain response
                    tz_used = None
                    if tz_name:
                        tz_used = tz_name
                    elif tz_offset is not None:
                        try:
                            tz_hours = float(tz_offset) / 60.0
                            tz_used = f"UTC{tz_hours:+.2f}"
                        except Exception:
                            tz_used = None

                    if tz_name or tz_offset is not None:
                        response['sunrise_local'] = convert_dt_to_tz(sr, tz_name=tz_name, tz_offset_minutes=tz_offset)
                        response['sunset_local'] = convert_dt_to_tz(ss, tz_name=tz_name, tz_offset_minutes=tz_offset)
                        response['tz_used'] = tz_used
                else:
                    response['sun_times_error'] = sun_err
            except Exception:
                # ignore sun-times if invalid lat/lon or conversion fails
                response['sun_times_error'] = 'invalid-lat-lon-or-conversion'
    except Exception:
        # swallow unexpected issues adding sun times
        pass

    return jsonify(response)

@app.route('/', methods=['GET'])
def index():
	# Serve index.html from repo root (static_folder='.' configured on app)
	return app.send_static_file('index.html')

if __name__ == "__main__":
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)