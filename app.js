// Weather data
const weatherData = {
  location: {
    city: "Nashik",
    state: "Maharashtra",
    country: "India",
    full: "Nashik, Maharashtra, India"
  },
  current: {
    temperature: 28,
    feels_like: 30,
    condition: "Partly Cloudy",
    icon: "⛅",
    description: "Scattered clouds with mild temperature",
    max_temp: 32,
    min_temp: 24
  },
  metrics: [
    { icon: "🌡️", label: "Max Temperature", value: "32°C" },
    { icon: "🌡️", label: "Min Temperature", value: "24°C" },
    { icon: "💧", label: "Humidity", value: "65%" },
    { icon: "💧", label: "Dew Point", value: "21°C" },
    { icon: "🌪️", label: "Wind Speed", value: "15 km/h" },
    { icon: "🧭", label: "Wind Direction", value: "SW" },
    { icon: "☁️", label: "Cloud Cover", value: "45%" },
    { icon: "👁️", label: "Visibility", value: "10 km" },
    { icon: "🌧️", label: "Rainfall", value: "0.5 mm" },
    { icon: "🌡️", label: "Pressure", value: "1013 hPa" },
    { icon: "☀️", label: "UV Index", value: "6 (High)" },
    { icon: "☀️", label: "Sunshine", value: "7.5 hrs" }
  ],
  hourly: [
    { hour: "00:00", temp: 25, icon: "🌙", precip: "10%", humidity: 70, wind: 10 },
    { hour: "01:00", temp: 24, icon: "🌙", precip: "5%", humidity: 72, wind: 9 },
    { hour: "02:00", temp: 23, icon: "🌙", precip: "0%", humidity: 74, wind: 8 },
    { hour: "03:00", temp: 23, icon: "🌙", precip: "0%", humidity: 76, wind: 8 },
    { hour: "04:00", temp: 22, icon: "🌙", precip: "0%", humidity: 78, wind: 7 },
    { hour: "05:00", temp: 22, icon: "🌙", precip: "0%", humidity: 80, wind: 6 },
    { hour: "06:00", temp: 22, icon: "🌫️", precip: "0%", humidity: 85, wind: 5 },
    { hour: "07:00", temp: 23, icon: "🌤️", precip: "0%", humidity: 78, wind: 7 },
    { hour: "08:00", temp: 25, icon: "🌤️", precip: "0%", humidity: 68, wind: 10 },
    { hour: "09:00", temp: 26, icon: "☀️", precip: "5%", humidity: 55, wind: 12 },
    { hour: "10:00", temp: 28, icon: "☀️", precip: "5%", humidity: 50, wind: 14 },
    { hour: "11:00", temp: 30, icon: "☀️", precip: "0%", humidity: 48, wind: 16 },
    { hour: "12:00", temp: 31, icon: "☀️", precip: "0%", humidity: 45, wind: 18 },
    { hour: "13:00", temp: 32, icon: "☀️", precip: "10%", humidity: 46, wind: 19 },
    { hour: "14:00", temp: 32, icon: "⛅", precip: "15%", humidity: 50, wind: 20 },
    { hour: "15:00", temp: 31, icon: "⛅", precip: "20%", humidity: 52, wind: 19 },
    { hour: "16:00", temp: 30, icon: "⛅", precip: "30%", humidity: 58, wind: 17 },
    { hour: "17:00", temp: 28, icon: "☁️", precip: "35%", humidity: 62, wind: 15 },
    { hour: "18:00", temp: 26, icon: "☁️", precip: "25%", humidity: 68, wind: 12 },
    { hour: "19:00", temp: 24, icon: "🌙", precip: "10%", humidity: 72, wind: 10 },
    { hour: "20:00", temp: 23, icon: "🌙", precip: "5%", humidity: 75, wind: 8 },
    { hour: "21:00", temp: 22, icon: "🌙", precip: "0%", humidity: 78, wind: 7 },
    { hour: "22:00", temp: 22, icon: "🌙", precip: "0%", humidity: 79, wind: 6 },
    { hour: "23:00", temp: 21, icon: "🌙", precip: "0%", humidity: 80, wind: 6 }
  ],
  fiveDay: [
    { day: "Tomorrow", date: "2025-11-13", icon: "🌧️", condition: "Rainy", max: 30, min: 23, rain: "70%", humidity: 75, wind: 18 },
    { day: "Friday", date: "2025-11-14", icon: "☁️", condition: "Cloudy", max: 29, min: 22, rain: "40%", humidity: 65, wind: 16 },
    { day: "Saturday", date: "2025-11-15", icon: "☀️", condition: "Sunny", max: 33, min: 25, rain: "5%", humidity: 50, wind: 12 },
    { day: "Sunday", date: "2025-11-16", icon: "☀️", condition: "Sunny", max: 34, min: 26, rain: "0%", humidity: 48, wind: 10 },
    { day: "Monday", date: "2025-11-17", icon: "⛅", condition: "Partly Cloudy", max: 31, min: 24, rain: "15%", humidity: 60, wind: 15 }
  ],
  extended: [
    { date: "2025-11-18", icon: "☁️", condition: "Cloudy", max: 28, min: 22, rain: "35%" },
    { date: "2025-11-19", icon: "🌧️", condition: "Rainy", max: 26, min: 20, rain: "75%" },
    { date: "2025-11-20", icon: "🌧️", condition: "Rainy", max: 25, min: 19, rain: "80%" },
    { date: "2025-11-21", icon: "⛅", condition: "Partly Cloudy", max: 27, min: 21, rain: "30%" }
  ],
  weekTrend: {
    labels: ["Today", "Tomorrow", "Fri", "Sat", "Sun", "Mon", "Tue"],
    maxTemps: [32, 30, 29, 33, 34, 31, 28],
    minTemps: [24, 23, 22, 25, 26, 24, 22],
    avgTemps: [28, 26.5, 25.5, 29, 30, 27.5, 25]
  },
  alerts: [
    { type: "Heavy Rain", severity: "warning", message: "Heavy rain expected from 15:00 to 18:00 today", icon: "⚠️" },
    { type: "Wind Advisory", severity: "info", message: "Gusty winds expected tomorrow morning, up to 25 km/h", icon: "ℹ️" }
  ],
  sun: {
    sunrise: "06:30",
    sunset: "17:45",
    dayLength: "11h 15m"
  },
  moon: {
    phase: "Waxing Gibbous",
    illumination: 78,
    icon: "🌔",
    moonrise: "18:30",
    moonset: "07:15"
  },
  details: {
    wind: {
      speed: 15,
      gusts: 25,
      direction: 210,
      directionText: "SW (210°)"
    },
    precipitation: {
      current: 0.5,
      probability: 35,
      expected24h: 2.5,
      humidity: 65
    },
    pressure: {
      current: 1013,
      trend: "Rising",
      change: "+2 hPa/h",
      visibility: 10
    },
    air: {
      aqi: 45,
      category: "Good",
      pm25: 12,
      pm10: 25,
      o3: 45,
      no2: 15,
      so2: 5
    },
    uv: {
      index: 6,
      category: "High",
      recommendation: "Use SPF 30+ sunscreen",
      solar: 650,
      sunshine: 7.5
    }
  }
};

// ThingSpeak runtime configuration loaded from localStorage (can be set from Settings)
// Default to the user-provided credentials unless localStorage has an override
let THINGSPEAK_CHANNEL_ID = localStorage.getItem('thingspeak_channel') || '1234567'; // user supplied default
let THINGSPEAK_READ_API_KEY = localStorage.getItem('thingspeak_api_key') || 'ABCDEFGH12345678'; // user supplied default
let THINGSPEAK_ENABLED = localStorage.getItem('thingspeak_enabled') === 'true';
let thingSpeakIntervalId = null;

// Map semantic fields to ThingSpeak field names (field1..field8)
// Adjust this mapping to match how your sensors are stored in ThingSpeak
const THINGSPEAK_FIELD_MAP = {
  temperature: 'field1',
  humidity: 'field2',
  pressure: 'field3',
  wind_speed: 'field4',
  rainfall: 'field5'
};

// Polling interval (ms) for ThingSpeak updates
const THINGSPEAK_POLL_INTERVAL = 2 * 60 * 1000; // 2 minutes

// Build ThingSpeak feed URL for latest entry
function buildThingSpeakUrl(results = 10) {
  // Use the canonical ThingSpeak feed URL format with api_key and results.
  // Example: https://api.thingspeak.com/channels/CHANNEL_ID/feeds.json?api_key=READ_API_KEY&results=10
  const base = `https://api.thingspeak.com/channels/${THINGSPEAK_CHANNEL_ID}/feeds.json`;
  const params = new URLSearchParams();
  params.set('results', String(results));
  // Always include api_key parameter when provided (some channels are public and don't need it)
  if (THINGSPEAK_READ_API_KEY && THINGSPEAK_READ_API_KEY !== 'REPLACE_WITH_READ_API_KEY') {
    params.set('api_key', THINGSPEAK_READ_API_KEY);
  }
  return `${base}?${params.toString()}`;
}

// Parse latest ThingSpeak feed entry into semantic values
function parseThingSpeakEntry(entry) {
  if (!entry) return null;
  const get = (key) => {
    const field = THINGSPEAK_FIELD_MAP[key];
    if (!field) return null;
    const raw = entry[field];
    if (raw === null || raw === undefined) return null;
    const n = Number(raw);
    return Number.isNaN(n) ? raw : n;
  };

  return {
    temperature: get('temperature'),
    humidity: get('humidity'),
    pressure: get('pressure'),
    wind_speed: get('wind_speed'),
    rainfall: get('rainfall'),
    created_at: entry.created_at || null
  };
}

// Fetch latest data from ThingSpeak and update UI + prediction
async function fetchThingSpeakAndUpdate() {
  if (!THINGSPEAK_ENABLED) {
    // ThingSpeak disabled in settings
    return;
  }

  if (!THINGSPEAK_CHANNEL_ID || THINGSPEAK_CHANNEL_ID === 'REPLACE_WITH_CHANNEL_ID') {
    // Not configured; skip
    return;
  }

  // Request the last 10 entries by default so we can pick the most recent and have history if needed
  const url = buildThingSpeakUrl(10);
  try {
    const resp = await fetch(url);
    if (!resp.ok) {
      console.error('ThingSpeak fetch failed', resp.status);
      return;
    }
    const data = await resp.json();
    const feeds = data.feeds || [];
    if (feeds.length === 0) {
      console.warn('No feeds returned from ThingSpeak');
      return;
    }

    // When requesting multiple results, use the last entry as the most recent
    const latest = feeds[feeds.length - 1];
    const parsed = parseThingSpeakEntry(latest);
    if (!parsed) return;

    // Update UI elements where available
    if (parsed.temperature !== null && parsed.temperature !== undefined) {
      document.getElementById('currentTemp').textContent = parsed.temperature;
      weatherData.current.temperature = parsed.temperature;
    }
    if (parsed.humidity !== null && parsed.humidity !== undefined) {
      weatherData.details.precipitation.humidity = parsed.humidity;
      document.getElementById('humidityDetail').textContent = parsed.humidity + '%';
    }
    if (parsed.pressure !== null && parsed.pressure !== undefined) {
      weatherData.details.pressure.current = parsed.pressure;
      document.getElementById('pressure').textContent = parsed.pressure + ' hPa';
    }
    if (parsed.wind_speed !== null && parsed.wind_speed !== undefined) {
      weatherData.details.wind.speed = parsed.wind_speed;
      document.getElementById('windSpeed').textContent = parsed.wind_speed + ' km/h';
    }
    if (parsed.rainfall !== null && parsed.rainfall !== undefined) {
      weatherData.details.precipitation.current = parsed.rainfall;
      document.getElementById('rainfall').textContent = parsed.rainfall + ' mm';
    }

    // Update last updated timestamp from ThingSpeak created_at if provided
    if (parsed.created_at) {
      const dt = new Date(parsed.created_at);
      document.getElementById('lastUpdated').textContent = `Last updated: ${dt.toLocaleString()}`;
      document.getElementById('footerUpdate').textContent = dt.toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'});
    }

    // Call prediction using live sensor values (if available)
    const t = parsed.temperature !== null ? parsed.temperature : weatherData.current.temperature;
    const h = parsed.humidity !== null ? parsed.humidity : weatherData.details.precipitation.humidity;
    const p = parsed.pressure !== null ? parsed.pressure : weatherData.details.pressure.current;
    const w = parsed.wind_speed !== null ? parsed.wind_speed : weatherData.details.wind.speed;
    getRainPrediction(t, h, p, w);
  } catch (err) {
    console.error('Error fetching ThingSpeak data', err);
  }
}

// Start ThingSpeak polling
function startThingSpeakPolling() {
  // Clear any existing interval
  if (thingSpeakIntervalId) {
    clearInterval(thingSpeakIntervalId);
    thingSpeakIntervalId = null;
  }

  if (!THINGSPEAK_ENABLED) return;
  // Run immediately once
  fetchThingSpeakAndUpdate();
  // Poll periodically
  thingSpeakIntervalId = setInterval(fetchThingSpeakAndUpdate, THINGSPEAK_POLL_INTERVAL);
}

function stopThingSpeakPolling() {
  if (thingSpeakIntervalId) {
    clearInterval(thingSpeakIntervalId);
    thingSpeakIntervalId = null;
  }
}

function applyThingSpeakSettings(channel, apiKey, enabled) {
  THINGSPEAK_CHANNEL_ID = channel || 'REPLACE_WITH_CHANNEL_ID';
  THINGSPEAK_READ_API_KEY = apiKey || 'REPLACE_WITH_READ_API_KEY';
  THINGSPEAK_ENABLED = !!enabled;
  localStorage.setItem('thingspeak_channel', THINGSPEAK_CHANNEL_ID);
  localStorage.setItem('thingspeak_api_key', THINGSPEAK_READ_API_KEY);
  localStorage.setItem('thingspeak_enabled', THINGSPEAK_ENABLED ? 'true' : 'false');

  if (THINGSPEAK_ENABLED) {
    startThingSpeakPolling();
  } else {
    stopThingSpeakPolling();
  }
}

// Location detection state
const locationState = {
  isDetecting: false,
  currentLocation: {
    city: "Nashik",
    state: "Maharashtra",
    country: "India",
    latitude: 19.9975,
    longitude: 73.7898,
    accuracy: 50,
    timezone: "IST (UTC+5:30)",
    detectedAt: null
  },
  permissionStatus: "prompt"
};

// Alternate locations data
const alternateLocations = {
  "Mumbai": { city: "Mumbai", state: "Maharashtra", country: "India", lat: 19.0760, lon: 72.8777 },
  "Pune": { city: "Pune", state: "Maharashtra", country: "India", lat: 18.5204, lon: 73.8567 },
  "Bengaluru": { city: "Bengaluru", state: "Karnataka", country: "India", lat: 12.9716, lon: 77.5946 },
  "Delhi": { city: "Delhi", state: "Delhi", country: "India", lat: 28.7041, lon: 77.1025 },
  "Hyderabad": { city: "Hyderabad", state: "Telangana", country: "India", lat: 17.3850, lon: 78.4867 },
  "Nashik": { city: "Nashik", state: "Maharashtra", country: "India", lat: 19.9975, lon: 73.7898 }
};

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
  initializeNavigation();
  initializeDashboard();
  initializeSettings();
  initializeLocationDetection();
  updateLastUpdated();
});

// Navigation
function initializeNavigation() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  const viewForecastBtn = document.getElementById('viewForecastBtn');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });

  viewForecastBtn.addEventListener('click', () => {
    document.getElementById('forecast').scrollIntoView({ behavior: 'smooth' });
  });

  // Settings link
  const settingsLink = document.querySelector('a[href="#settings"]');
  if (settingsLink) {
    settingsLink.addEventListener('click', (e) => {
      e.preventDefault();
      document.getElementById('settingsModal').classList.add('show');
    });
  }
}

// Dashboard initialization
function initializeDashboard() {
  populateCurrentWeather();
  populateMetrics();
  populateHourlyForecast();
  populateFiveDayForecast();
  populateExtendedForecast();
  populateAlerts();
  populateDetails();
  populateSunMoon();
  initializeCharts();
  initializeTabs();
  initializeRefresh();
  // Start ThingSpeak polling for live sensor data (if configured)
  try {
    startThingSpeakPolling();
  } catch (e) {
    console.error('ThingSpeak polling init error:', e);
  }
}

// Current weather
function populateCurrentWeather() {
  document.getElementById('locationText').textContent = weatherData.location.full;
  document.getElementById('weatherIconLarge').textContent = weatherData.current.icon;
  document.getElementById('currentTemp').textContent = weatherData.current.temperature;
  document.getElementById('weatherCondition').textContent = weatherData.current.condition;
  document.getElementById('weatherDescription').textContent = weatherData.current.description;
  document.getElementById('feelsLike').textContent = weatherData.current.feels_like + '°C';
}

// Metrics grid
function populateMetrics() {
  const metricsGrid = document.getElementById('metricsGrid');
  weatherData.metrics.forEach((metric, index) => {
    const card = document.createElement('div');
    card.className = 'metric-card';
    card.style.animationDelay = (index * 0.05) + 's';
    card.innerHTML = `
      <div class="metric-header">
        <span class="metric-icon">${metric.icon}</span>
        <span class="metric-label">${metric.label}</span>
      </div>
      <div class="metric-value">${metric.value}</div>
    `;
    metricsGrid.appendChild(card);
  });
}

// Hourly forecast
function populateHourlyForecast() {
  const hourlyScroll = document.getElementById('hourlyScroll');
  const currentHour = new Date().getHours();
  
  weatherData.hourly.forEach((hour, index) => {
    const hourNum = parseInt(hour.hour.split(':')[0]);
    const card = document.createElement('div');
    card.className = 'hourly-card';
    if (hourNum === currentHour) {
      card.classList.add('current');
    }
    
    card.innerHTML = `
      <div class="hour-time">${hour.hour}</div>
      <div class="hour-icon">${hour.icon}</div>
      <div class="hour-temp">${hour.temp}°C</div>
      <div class="hour-precip">💧 ${hour.precip}</div>
      <div class="hour-wind">🌬️ ${hour.wind} km/h</div>
    `;
    hourlyScroll.appendChild(card);
  });
  
  // Scroll to current hour
  setTimeout(() => {
    const currentCard = hourlyScroll.querySelector('.current');
    if (currentCard) {
      currentCard.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }, 500);
}

// 5-day forecast
function populateFiveDayForecast() {
  const fiveDayForecast = document.getElementById('fiveDayForecast');
  // Clear existing entries so this can be re-run (e.g., at midnight)
  fiveDayForecast.innerHTML = '';

  // Build dynamic dates for the next 5 days starting tomorrow
  const today = new Date();
  weatherData.fiveDay.forEach((dayData, idx) => {
    // compute date for (idx + 1) days ahead
    const d = new Date(today);
    d.setDate(today.getDate() + idx + 1);
    const isoDate = d.toISOString().split('T')[0]; // YYYY-MM-DD

    // Friendly day label: Tomorrow for first, else weekday name
    let dayLabel;
    if (idx === 0) {
      dayLabel = 'Tomorrow';
    } else {
      dayLabel = d.toLocaleDateString(undefined, { weekday: 'long' });
    }

    const card = document.createElement('div');
    card.className = 'day-card';
    card.innerHTML = `
      <div class="day-name">${dayLabel}</div>
      <div class="day-date">${formatDate(isoDate)}</div>
      <div class="day-icon">${dayData.icon}</div>
      <div class="day-temp-range">
        <span class="temp-max-day">${dayData.max}°</span>
        <span>/</span>
        <span class="temp-min-day">${dayData.min}°</span>
      </div>
      <div class="day-condition">${dayData.condition}</div>
      <div class="day-rain-chance">💧 ${dayData.rain}</div>
    `;
    fiveDayForecast.appendChild(card);
  });
}

// Extended forecast
function populateExtendedForecast() {
  const extendedForecast = document.getElementById('extendedForecast');
  // Clear existing entries so this can be re-run daily
  extendedForecast.innerHTML = '';

  // Start extended forecast after the 5-day window (i.e., day + 6)
  const today = new Date();
  weatherData.extended.forEach((item, idx) => {
    const d = new Date(today);
    d.setDate(today.getDate() + 6 + idx); // start 6 days ahead
    const isoDate = d.toISOString().split('T')[0];

    const div = document.createElement('div');
    div.className = 'extended-item';
    div.innerHTML = `
      <div class="extended-date">${formatDate(isoDate)}</div>
      <div class="extended-icon">${item.icon}</div>
      <div class="extended-condition">${item.condition}</div>
      <div class="extended-temps">
        <span>${item.max}°</span>
        <span>/</span>
        <span>${item.min}°</span>
      </div>
      <div class="extended-rain">💧 ${item.rain}</div>
    `;
    extendedForecast.appendChild(div);
  });
}

// Schedule a daily refresh of date-sensitive UI at next midnight
function scheduleDailyRefresh() {
  const now = new Date();
  const nextMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 2);
  const msUntil = nextMidnight - now;
  setTimeout(() => {
    // Re-render any date-sensitive components
    const fiveDayForecast = document.getElementById('fiveDayForecast');
    if (fiveDayForecast) populateFiveDayForecast();
    const extendedForecast = document.getElementById('extendedForecast');
    if (extendedForecast) populateExtendedForecast();
    // Update last-updated timestamps as well
    updateLastUpdated();
    // Schedule next run
    scheduleDailyRefresh();
  }, msUntil);
}

// Alerts
function populateAlerts() {
  const alertsContainer = document.getElementById('alertsContainer');
  weatherData.alerts.forEach(alert => {
    const card = document.createElement('div');
    card.className = `alert-card ${alert.severity}`;
    card.innerHTML = `
      <div class="alert-icon">${alert.icon}</div>
      <div class="alert-content">
        <div class="alert-type">${alert.type}</div>
        <div class="alert-message">${alert.message}</div>
      </div>
    `;
    alertsContainer.appendChild(card);
  });
}

// Details tabs
function populateDetails() {
  const details = weatherData.details;
  
  // Wind
  document.getElementById('windSpeed').textContent = details.wind.speed + ' km/h';
  document.getElementById('windDirection').textContent = details.wind.directionText;
  document.getElementById('windGusts').textContent = details.wind.gusts + ' km/h';
  
  // Compass
  const compassArrow = document.getElementById('compassArrow');
  compassArrow.style.transform = `rotate(${details.wind.direction}deg)`;
  
  // Precipitation
  document.getElementById('rainfall').textContent = details.precipitation.current + ' mm';
  document.getElementById('rainProb').textContent = details.precipitation.probability + '%';
  document.getElementById('expected24h').textContent = details.precipitation.expected24h + ' mm';
  document.getElementById('humidityDetail').textContent = details.precipitation.humidity + '%';
  
  // Pressure
  document.getElementById('pressure').textContent = details.pressure.current + ' hPa';
  document.getElementById('pressureTrend').textContent = details.pressure.trend;
  document.getElementById('pressureChange').textContent = details.pressure.change;
  document.getElementById('visibility').textContent = details.pressure.visibility + ' km';
  
  // Air quality
  document.getElementById('aqi').textContent = `${details.air.aqi} - ${details.air.category}`;
  document.getElementById('pm25').textContent = details.air.pm25 + ' µg/m³';
  document.getElementById('pm10').textContent = details.air.pm10 + ' µg/m³';
  document.getElementById('gases').textContent = `${details.air.o3} / ${details.air.no2} / ${details.air.so2}`;
  
  // UV
  document.getElementById('uvIndex').textContent = `${details.uv.index} - ${details.uv.category}`;
  document.getElementById('uvRec').textContent = details.uv.recommendation;
  document.getElementById('solarRad').textContent = details.uv.solar + ' W/m²';
  document.getElementById('sunshineDur').textContent = details.uv.sunshine + ' hours';
}

// Sun and Moon
function populateSunMoon() {
  // Use SunCalc (if available) to compute live sunrise/sunset and moon details using current location
  const loc = locationState.currentLocation || {};
  const lat = loc.latitude || 19.9975;
  const lon = loc.longitude || 73.7898;
  const now = new Date();

  // helpers
  function fmtTime(t) {
    if (!t) return '—';
    try {
      return t.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } catch (e) {
      return t.toTimeString().slice(0,5);
    }
  }

  function msToHMS(ms) {
    if (!ms || ms <= 0) return '0h 0m';
    const totalMin = Math.round(ms / 60000);
    const h = Math.floor(totalMin / 60);
    const m = totalMin % 60;
    return `${h}h ${m}m`;
  }

  function moonPhaseName(phase) {
    // phase: 0..1 (0 new, 0.25 first quarter, 0.5 full, 0.75 last quarter)
    if (phase < 0.0625 || phase >= 0.9375) return 'New Moon';
    if (phase < 0.1875) return 'Waxing Crescent';
    if (phase < 0.3125) return 'First Quarter';
    if (phase < 0.4375) return 'Waxing Gibbous';
    if (phase < 0.5625) return 'Full Moon';
    if (phase < 0.6875) return 'Waning Gibbous';
    if (phase < 0.8125) return 'Last Quarter';
    return 'Waning Crescent';
  }

  function moonPhaseIcon(phase) {
    if (phase < 0.0625 || phase >= 0.9375) return '🌑';
    if (phase < 0.1875) return '🌒';
    if (phase < 0.3125) return '🌓';
    if (phase < 0.4375) return '🌔';
    if (phase < 0.5625) return '🌕';
    if (phase < 0.6875) return '🌖';
    if (phase < 0.8125) return '🌗';
    return '🌘';
  }

  if (typeof SunCalc !== 'undefined') {
    try {
      const times = SunCalc.getTimes(now, lat, lon);
      const moonTimes = SunCalc.getMoonTimes(now, lat, lon);
      const moonIll = SunCalc.getMoonIllumination(now);

      const sunrise = times.sunrise;
      const sunset = times.sunset;
      const dayLengthMs = sunset && sunrise ? (sunset - sunrise) : null;

      document.getElementById('sunrise').textContent = fmtTime(sunrise);
      document.getElementById('sunset').textContent = fmtTime(sunset);
      document.getElementById('dayLength').textContent = dayLengthMs ? msToHMS(dayLengthMs) : '—';

      // sun progress
      if (sunrise && sunset) {
        const progress = ((now - sunrise) / (sunset - sunrise)) * 100;
        document.getElementById('sunProgressBar').style.width = Math.max(0, Math.min(100, progress)) + '%';
      }

      // Moon
      document.getElementById('moonIcon').textContent = moonPhaseIcon(moonIll.phase);
      document.getElementById('moonPhase').textContent = moonPhaseName(moonIll.phase);
      document.getElementById('moonIllumination').textContent = Math.round(moonIll.fraction * 100) + '% Illuminated';
      document.getElementById('moonrise').textContent = moonTimes.rise ? fmtTime(moonTimes.rise) : '—';
      document.getElementById('moonset').textContent = moonTimes.set ? fmtTime(moonTimes.set) : '—';
    } catch (e) {
      console.error('SunCalc error:', e);
      // fallback to static data
      document.getElementById('sunrise').textContent = weatherData.sun.sunrise + ' AM';
      document.getElementById('sunset').textContent = weatherData.sun.sunset + ' PM';
      document.getElementById('dayLength').textContent = weatherData.sun.dayLength;
      document.getElementById('moonIcon').textContent = weatherData.moon.icon;
      document.getElementById('moonPhase').textContent = weatherData.moon.phase;
      document.getElementById('moonIllumination').textContent = weatherData.moon.illumination + '% Illuminated';
      document.getElementById('moonrise').textContent = weatherData.moon.moonrise;
      document.getElementById('moonset').textContent = weatherData.moon.moonset;
    }
  } else {
    // SunCalc not available: keep existing static values
    document.getElementById('sunrise').textContent = weatherData.sun.sunrise + ' AM';
    document.getElementById('sunset').textContent = weatherData.sun.sunset + ' PM';
    document.getElementById('dayLength').textContent = weatherData.sun.dayLength;
    document.getElementById('moonIcon').textContent = weatherData.moon.icon;
    document.getElementById('moonPhase').textContent = weatherData.moon.phase;
    document.getElementById('moonIllumination').textContent = weatherData.moon.illumination + '% Illuminated';
    document.getElementById('moonrise').textContent = weatherData.moon.moonrise;
    document.getElementById('moonset').textContent = weatherData.moon.moonset;
  }
}

// Charts
function initializeCharts() {
  initTempPrecipChart();
  initWeekTrendChart();
}

function initTempPrecipChart() {
  const ctx = document.getElementById('tempPrecipChart').getContext('2d');
  
  const hours = weatherData.hourly.map(h => h.hour);
  const temps = weatherData.hourly.map(h => h.temp);
  const precips = weatherData.hourly.map(h => parseInt(h.precip));
  
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: hours,
      datasets: [
        {
          label: 'Temperature (°C)',
          data: temps,
          type: 'line',
          borderColor: '#FF6384',
          backgroundColor: 'rgba(255, 99, 132, 0.1)',
          tension: 0.4,
          yAxisID: 'y'
        },
        {
          label: 'Precipitation (%)',
          data: precips,
          backgroundColor: '#4A90E2',
          yAxisID: 'y1'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: 'top'
        }
      },
      scales: {
        y: {
          type: 'linear',
          position: 'left',
          title: {
            display: true,
            text: 'Temperature (°C)'
          }
        },
        y1: {
          type: 'linear',
          position: 'right',
          title: {
            display: true,
            text: 'Precipitation (%)'
          },
          grid: {
            drawOnChartArea: false
          }
        }
      }
    }
  });
}

function initWeekTrendChart() {
  const ctx = document.getElementById('weekTrendChart').getContext('2d');
  
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: weatherData.weekTrend.labels,
      datasets: [
        {
          label: 'Max Temperature',
          data: weatherData.weekTrend.maxTemps,
          borderColor: '#FF6384',
          backgroundColor: 'rgba(255, 99, 132, 0.1)',
          tension: 0.4,
          fill: true
        },
        {
          label: 'Avg Temperature',
          data: weatherData.weekTrend.avgTemps,
          borderColor: '#4A90E2',
          backgroundColor: 'rgba(74, 144, 226, 0.1)',
          tension: 0.4,
          fill: true
        },
        {
          label: 'Min Temperature',
          data: weatherData.weekTrend.minTemps,
          borderColor: '#36A2EB',
          backgroundColor: 'rgba(54, 162, 235, 0.1)',
          tension: 0.4,
          fill: true
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: 'top'
        }
      },
      scales: {
        y: {
          ticks: {
            callback: function(value) {
              return value + '°C';
            }
          }
        }
      }
    }
  });
}

// Tabs functionality
function initializeTabs() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');
  
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const tabName = button.getAttribute('data-tab');
      
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabPanels.forEach(panel => panel.classList.remove('active'));
      
      button.classList.add('active');
      document.getElementById(tabName + '-panel').classList.add('active');
    });
  });
}

// Refresh functionality
function initializeRefresh() {
  const refreshBtn = document.getElementById('refreshBtn');
  refreshBtn.addEventListener('click', () => {
    refreshBtn.style.transform = 'rotate(360deg)';
    refreshBtn.style.transition = 'transform 0.5s ease';
    
    setTimeout(() => {
      refreshBtn.style.transform = 'rotate(0deg)';
      updateLastUpdated();
    }, 500);
  });
}

// Location Detection Initialization
function initializeLocationDetection() {
  const usePreciseLocationBtn = document.getElementById('usePreciseLocationBtn');
  const searchLocationBtn = document.getElementById('searchLocationBtn');
  const searchLocationModal = document.getElementById('searchLocationModal');
  const searchLocationClose = document.getElementById('searchLocationClose');
  const searchLocationOverlay = document.getElementById('searchLocationOverlay');
  const quickLocationBtns = document.querySelectorAll('.quick-location-btn');
  
  // Use Precise Location button
  usePreciseLocationBtn.addEventListener('click', handleUsePreciseLocation);
  
  // Search Location button
  searchLocationBtn.addEventListener('click', () => {
    searchLocationModal.classList.add('show');
  });
  
  // Close search modal
  searchLocationClose.addEventListener('click', () => {
    searchLocationModal.classList.remove('show');
  });
  
  searchLocationOverlay.addEventListener('click', () => {
    searchLocationModal.classList.remove('show');
  });
  
  // Quick location buttons
  quickLocationBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const city = btn.getAttribute('data-city');
      const lat = parseFloat(btn.getAttribute('data-lat'));
      const lon = parseFloat(btn.getAttribute('data-lon'));
      selectLocation(city, lat, lon);
      searchLocationModal.classList.remove('show');
    });
  });
  
  // City search with autocomplete
  const citySearchInput = document.getElementById('citySearchInput');
  let searchTimeout;
  
  citySearchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim();
    
    // Clear previous timeout
    clearTimeout(searchTimeout);
    
    // Hide results if query too short
    const searchResults = document.getElementById('searchResults');
    if (query.length < 2) {
      if (searchResults) {
        searchResults.style.display = 'none';
      }
      return;
    }
    
    // Debounce search - wait 300ms after user stops typing
    searchTimeout = setTimeout(() => {
      searchLocations(query);
    }, 300);
  });
  
  citySearchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const query = e.target.value.trim();
      if (query.length >= 2) {
        searchLocations(query);
      }
    }
  });
  
  // Initialize location display
  updateLocationDisplay();
}

// Handle Use Precise Location
function handleUsePreciseLocation() {
  if (locationState.isDetecting) return;
  
  // Check if geolocation is supported
  if (!navigator.geolocation) {
    showLocationStatus('error', '❌', 'Geolocation is not supported by your browser');
    return;
  }
  
  // Start detection
  locationState.isDetecting = true;
  showLocationStatus('loading', '🔍', 'Detecting your precise location...');
  
  const btn = document.getElementById('usePreciseLocationBtn');
  btn.disabled = true;
  btn.classList.add('loading');
  document.getElementById('locationBtnText').textContent = 'Detecting...';
  
  // Get current position with high accuracy
  navigator.geolocation.getCurrentPosition(
    handleGeolocationSuccess,
    handleGeolocationError,
    {
      enableHighAccuracy: true,
      timeout: 15000,
      maximumAge: 0
    }
  );
}

// Geolocation success handler
function handleGeolocationSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const accuracy = Math.round(position.coords.accuracy);
  
  locationState.currentLocation.latitude = lat;
  locationState.currentLocation.longitude = lon;
  locationState.currentLocation.accuracy = accuracy;
  locationState.currentLocation.detectedAt = new Date();
  
  // Determine accuracy level
  let accuracyLevel = 'High Accuracy';
  if (accuracy > 5000) {
    accuracyLevel = 'City Level';
  } else if (accuracy > 500) {
    accuracyLevel = 'Approximate';
  } else if (accuracy > 50) {
    accuracyLevel = 'WiFi/Network';
  } else {
    accuracyLevel = 'GPS Location';
  }
  
  // Real reverse geocoding with Nominatim API
  reverseGeocode(lat, lon, (cityData) => {
    locationState.currentLocation.city = cityData.city;
    locationState.currentLocation.state = cityData.state;
    locationState.currentLocation.country = cityData.country;
    locationState.currentLocation.district = cityData.district;
    locationState.currentLocation.postcode = cityData.postcode;
    
    // Update display with proper hierarchy
    updateLocationDisplay();
    
    // Show success message with accuracy
    const displayText = cityData.displayName || `${cityData.city}, ${cityData.state}`;
    showLocationStatus('success', '✅', `${accuracyLevel}: ${displayText}`);
    
    // Update weather data for new location
    setTimeout(() => {
      updateWeatherForLocation();
    }, 1000);
    
    // Reset button
    const btn = document.getElementById('usePreciseLocationBtn');
    btn.disabled = false;
    btn.classList.remove('loading');
    document.getElementById('locationBtnText').textContent = 'Update Location';
    document.getElementById('locationBtnIcon').textContent = '📍';
    
    locationState.isDetecting = false;
  });
}

// Geolocation error handler
function handleGeolocationError(error) {
  locationState.isDetecting = false;
  
  let errorMessage = '';
  switch(error.code) {
    case error.PERMISSION_DENIED:
      errorMessage = '❌ Location access denied. Please enable location permissions in your browser settings.';
      locationState.permissionStatus = 'denied';
      break;
    case error.POSITION_UNAVAILABLE:
      errorMessage = '❌ Location information unavailable. Please try again.';
      break;
    case error.TIMEOUT:
      errorMessage = '❌ Location detection timed out. Please try again.';
      break;
    default:
      errorMessage = '❌ An unknown error occurred. Please try again.';
  }
  
  showLocationStatus('error', '❌', errorMessage);
  
  // Reset button
  const btn = document.getElementById('usePreciseLocationBtn');
  btn.disabled = false;
  btn.classList.remove('loading');
  document.getElementById('locationBtnText').textContent = 'Use Precise Location';
  document.getElementById('locationBtnIcon').textContent = '📍';
}

// Real reverse geocoding using Nominatim API
function reverseGeocode(lat, lon, callback) {
  showLocationStatus('loading', '🔍', 'Finding location name...');
  
  // Use Nominatim OpenStreetMap API for accurate reverse geocoding
  const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=18&addressdetails=1`;
  
  fetch(url, {
    headers: {
      'User-Agent': 'ClimeX Weather App'
    }
  })
    .then(response => response.json())
    .then(data => {
      if (data && data.address) {
        const address = data.address;
        
        // Extract location details with priority for small towns
        const city = address.city || address.town || address.village || 
                    address.municipality || address.suburb || 
                    address.hamlet || address.locality || 
                    address.county || address.state_district || 'Unknown';
        
        const district = address.state_district || address.county || '';
        const state = address.state || address.region || '';
        const country = address.country || 'India';
        const postcode = address.postcode || '';
        
        // Format display name with proper hierarchy
        let displayName = city;
        if (district && district !== city) {
          displayName += `, ${district}`;
        }
        if (state) {
          displayName += `, ${state}`;
        }
        
        callback({
          city: city,
          district: district,
          state: state,
          country: country,
          postcode: postcode,
          displayName: displayName,
          fullAddress: data.display_name
        });
      } else {
        // Fallback to IP geolocation
        fallbackToIPGeolocation(callback);
      }
    })
    .catch(error => {
      console.error('Nominatim API error:', error);
      // Fallback to IP geolocation
      fallbackToIPGeolocation(callback);
    });
}

// Fallback to IP-based geolocation
function fallbackToIPGeolocation(callback) {
  showLocationStatus('loading', '🔍', 'Using IP-based location...');
  
  fetch('https://ipapi.co/json/')
    .then(response => response.json())
    .then(data => {
      callback({
        city: data.city || 'Nashik',
        district: data.region || '',
        state: data.region || 'Maharashtra',
        country: data.country_name || 'India',
        postcode: data.postal || '',
        displayName: `${data.city}, ${data.region}`,
        fullAddress: `${data.city}, ${data.region}, ${data.country_name}`
      });
    })
    .catch(error => {
      console.error('IP geolocation error:', error);
      // Final fallback to default
      callback({
        city: 'Nashik',
        district: 'Nashik',
        state: 'Maharashtra',
        country: 'India',
        postcode: '422001',
        displayName: 'Nashik, Maharashtra',
        fullAddress: 'Nashik, Maharashtra, India'
      });
    });
}

// Search locations with Nominatim API and display autocomplete results
function searchLocations(query) {
  // Get or create search results container
  let searchResults = document.getElementById('searchResults');
  if (!searchResults) {
    searchResults = document.createElement('div');
    searchResults.id = 'searchResults';
    searchResults.className = 'search-results';
    const searchForm = document.querySelector('.search-location-form');
    searchForm.appendChild(searchResults);
  }
  
  // Show loading state
  searchResults.innerHTML = `
    <div class="search-loading">
      <span class="search-loading-icon">🔍</span>
      <span>Searching for "${query}"...</span>
    </div>
  `;
  searchResults.style.display = 'block';
  
  // Use Nominatim search API
  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&countrycodes=in&limit=10&addressdetails=1`;
  
  fetch(url, {
    headers: {
      'User-Agent': 'ClimeX Weather App'
    }
  })
    .then(response => response.json())
    .then(data => {
      if (data && data.length > 0) {
        // Display search results
        displaySearchResults(data, searchResults);
      } else {
        searchResults.innerHTML = `
          <div class="no-results">
            <p>❌ No results found for "${query}"</p>
            <p style="font-size: var(--font-size-sm); margin-top: var(--space-8);">Try searching for a city, town, or village name</p>
          </div>
        `;
      }
    })
    .catch(error => {
      console.error('Location search error:', error);
      searchResults.innerHTML = `
        <div class="no-results">
          <p>❌ Search failed. Please try again.</p>
        </div>
      `;
    });
}

// Display search results with autocomplete
function displaySearchResults(results, container) {
  container.innerHTML = '';
  
  results.forEach(result => {
    const address = result.address || {};
    const city = address.city || address.town || address.village || 
                address.municipality || address.suburb || address.hamlet || 'Unknown';
    const state = address.state || '';
    const district = address.state_district || address.county || '';
    const country = address.country || 'India';
    
    // Determine location type icon
    let icon = '🏙️'; // city
    if (address.village || address.hamlet) {
      icon = '🏞️'; // village
    } else if (address.town) {
      icon = '🏘️'; // town
    }
    
    // Format display name
    let displayName = city;
    if (district && district !== city) {
      displayName += `, ${district}`;
    }
    if (state) {
      displayName += `, ${state}`;
    }
    
    const resultItem = document.createElement('div');
    resultItem.className = 'search-result-item';
    resultItem.innerHTML = `
      <span class="search-result-icon">${icon}</span>
      <div class="search-result-info">
        <div class="search-result-name">${city}</div>
        <div class="search-result-details">${displayName}</div>
      </div>
    `;
    
    resultItem.addEventListener('click', () => {
      const lat = parseFloat(result.lat);
      const lon = parseFloat(result.lon);
      selectLocationFromSearch(lat, lon, displayName);
      document.getElementById('searchLocationModal').classList.remove('show');
    });
    
    container.appendChild(resultItem);
  });
}

// Select location from search results
function selectLocationFromSearch(lat, lon, displayName) {
  showLocationStatus('loading', '🔍', `Loading ${displayName}...`);
  
  // Use reverse geocoding for complete details
  reverseGeocode(lat, lon, (cityData) => {
    locationState.currentLocation.city = cityData.city;
    locationState.currentLocation.state = cityData.state;
    locationState.currentLocation.country = cityData.country;
    locationState.currentLocation.district = cityData.district;
    locationState.currentLocation.latitude = lat;
    locationState.currentLocation.longitude = lon;
    locationState.currentLocation.accuracy = 100;
    locationState.currentLocation.detectedAt = new Date();
    
    updateLocationDisplay();
    
    const displayText = cityData.displayName || displayName;
    showLocationStatus('success', '✅', `Location: ${displayText}`);
    
    setTimeout(() => {
      updateWeatherForLocation();
    }, 500);
  });
}

// Select location manually
function selectLocation(city, lat, lon) {
  showLocationStatus('loading', '🔍', `Loading ${city}...`);
  
  // Use reverse geocoding for accurate location details
  reverseGeocode(lat, lon, (cityData) => {
    locationState.currentLocation.city = cityData.city;
    locationState.currentLocation.state = cityData.state;
    locationState.currentLocation.country = cityData.country;
    locationState.currentLocation.district = cityData.district;
    locationState.currentLocation.latitude = lat;
    locationState.currentLocation.longitude = lon;
    locationState.currentLocation.accuracy = 100;
    locationState.currentLocation.detectedAt = new Date();
    
    updateLocationDisplay();
    
    const displayText = cityData.displayName || `${cityData.city}, ${cityData.state}`;
    showLocationStatus('success', '✅', `Location: ${displayText}`);
    
    setTimeout(() => {
      updateWeatherForLocation();
    }, 500);
  });
}

// Update location display
function updateLocationDisplay() {
  const loc = locationState.currentLocation;
  
  // Format location name with proper hierarchy
  let locationName = loc.city;
  if (loc.district && loc.district !== loc.city) {
    locationName += `, ${loc.district}`;
  }
  if (loc.state) {
    locationName += `, ${loc.state}`;
  }
  if (loc.country && loc.country !== 'India') {
    locationName += `, ${loc.country}`;
  } else {
    locationName += ', India';
  }
  
  document.getElementById('locationName').textContent = locationName;
  document.getElementById('locationText').textContent = locationName;
  document.getElementById('locationCoordinates').innerHTML = 
    `<span>${loc.latitude.toFixed(4)}°${loc.latitude >= 0 ? 'N' : 'S'}, ${loc.longitude.toFixed(4)}°${loc.longitude >= 0 ? 'E' : 'W'}</span>`;
  
  // Format accuracy display
  let accuracyText = `±${loc.accuracy} meters`;
  if (loc.accuracy >= 1000) {
    accuracyText = `±${(loc.accuracy / 1000).toFixed(1)} km`;
  }
  document.getElementById('locationAccuracy').textContent = accuracyText;
  
  weatherData.location.city = loc.city;
  weatherData.location.state = loc.state;
  weatherData.location.country = loc.country;
  weatherData.location.full = locationName;
}

// Show location status
function showLocationStatus(type, icon, message) {
  const statusEl = document.getElementById('locationStatus');
  const statusIcon = document.getElementById('statusIcon');
  const statusMessage = document.getElementById('statusMessage');
  
  statusEl.style.display = 'flex';
  statusEl.className = `location-status ${type}`;
  statusIcon.textContent = icon;
  statusMessage.textContent = message;
  
  if (type === 'loading') {
    statusIcon.classList.add('pulse');
  } else {
    statusIcon.classList.remove('pulse');
  }
  
  // Auto-hide success/error messages after 5 seconds
  if (type === 'success' || type === 'error') {
    setTimeout(() => {
      statusEl.style.display = 'none';
    }, 5000);
  }
}

// Update weather data for new location
function updateWeatherForLocation() {
  // Show loading animation on weather card
  const currentWeatherCard = document.querySelector('.current-weather-card');
  currentWeatherCard.style.opacity = '0.5';
  
  // Simulate weather data update (in real app, fetch from API)
  setTimeout(() => {
    // Simulate temperature variation based on location
    const tempVariation = Math.floor(Math.random() * 10) - 5;
    weatherData.current.temperature = 28 + tempVariation;
    weatherData.current.feels_like = weatherData.current.temperature + 2;
    weatherData.current.max_temp = weatherData.current.temperature + 4;
    weatherData.current.min_temp = weatherData.current.temperature - 4;
    
    // Update displays
    document.getElementById('currentTemp').textContent = weatherData.current.temperature;
    document.getElementById('feelsLike').textContent = weatherData.current.feels_like + '°C';
    
    // Update metrics
    weatherData.metrics[0].value = weatherData.current.max_temp + '°C';
    weatherData.metrics[1].value = weatherData.current.min_temp + '°C';
    
    // Refresh metrics grid
    const metricsGrid = document.getElementById('metricsGrid');
    metricsGrid.innerHTML = '';
    populateMetrics();
    
    currentWeatherCard.style.opacity = '1';
    updateLastUpdated();
    // Update astronomy (sun/moon) for the new location
    try {
      populateSunMoon();
    } catch (e) {
      console.error('populateSunMoon error:', e);
    }
    
    // Add alert about location detection
    const alertsContainer = document.getElementById('alertsContainer');
    const existingAlert = alertsContainer.querySelector('.location-detected-alert');
    if (!existingAlert) {
      const alertCard = document.createElement('div');
      alertCard.className = 'alert-card info location-detected-alert';
      alertCard.innerHTML = `
        <div class="alert-icon">✅</div>
        <div class="alert-content">
          <div class="alert-type">Precise Location Detected</div>
          <div class="alert-message">Your precise location has been detected and weather data updated for ${locationState.currentLocation.city}</div>
        </div>
      `;
      alertsContainer.insertBefore(alertCard, alertsContainer.firstChild);
    }
  }, 1500);
}

// Settings
function initializeSettings() {
  const settingsModal = document.getElementById('settingsModal');
  const settingsClose = document.getElementById('settingsClose');
  const settingsOverlay = document.getElementById('settingsOverlay');
  const saveSettings = document.getElementById('saveSettings');
  
  settingsClose.addEventListener('click', () => {
    settingsModal.classList.remove('show');
  });
  
  settingsOverlay.addEventListener('click', () => {
    settingsModal.classList.remove('show');
  });
  
  // Populate settings inputs from localStorage
  try {
    const channelInput = document.getElementById('thingspeakChannel');
    const apiKeyInput = document.getElementById('thingspeakApiKey');
    const enableCheckbox = document.getElementById('enableThingSpeak');

    if (channelInput) channelInput.value = localStorage.getItem('thingspeak_channel') || '';
    if (apiKeyInput) apiKeyInput.value = localStorage.getItem('thingspeak_api_key') || '';
    if (enableCheckbox) enableCheckbox.checked = localStorage.getItem('thingspeak_enabled') === 'true';
  } catch (e) {
    console.error('Error populating ThingSpeak settings:', e);
  }

  saveSettings.addEventListener('click', () => {
    // Read settings and persist
    try {
      const channelInput = document.getElementById('thingspeakChannel');
      const apiKeyInput = document.getElementById('thingspeakApiKey');
      const enableCheckbox = document.getElementById('enableThingSpeak');

      const channel = channelInput ? channelInput.value.trim() : '';
      const apiKey = apiKeyInput ? apiKeyInput.value.trim() : '';
      const enabled = enableCheckbox ? enableCheckbox.checked : false;

      applyThingSpeakSettings(channel || 'REPLACE_WITH_CHANNEL_ID', apiKey || 'REPLACE_WITH_READ_API_KEY', enabled);

      // Update other settings (temperature unit, time format, location input) as before
      const tempUnit = document.getElementById('tempUnit').value;
      const timeFormat = document.getElementById('timeFormat').value;
      const locationInput = document.getElementById('locationInput').value;
      localStorage.setItem('climex_temp_unit', tempUnit);
      localStorage.setItem('climex_time_format', timeFormat);
      localStorage.setItem('climex_location_input', locationInput);

      settingsModal.classList.remove('show');
      // gentle feedback
      alert('Settings saved locally. ThingSpeak ' + (enabled ? 'enabled' : 'disabled') + '.');
    } catch (err) {
      console.error('Failed to save settings:', err);
      alert('Failed to save settings. See console for details.');
    }
  });
}

// Utility functions
function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { month: 'short', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

function updateLastUpdated() {
  const now = new Date();
  const timeString = now.toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: true 
  });
  document.getElementById('lastUpdated').textContent = `Last updated: ${timeString}`;
  document.getElementById('footerUpdate').textContent = timeString;
}

// Update time every minute
setInterval(updateLastUpdated, 60000);



// Request rain prediction from server. If values are supplied use them; otherwise fall back to UI data.
async function getRainPrediction(temp, humidity, pressure, wind_speed) {
  const t = temp !== undefined ? temp : weatherData.current.temperature;
  const h = humidity !== undefined ? humidity : weatherData.details.precipitation.humidity;
  const p = pressure !== undefined ? pressure : weatherData.details.pressure.current;
  const w = wind_speed !== undefined ? wind_speed : weatherData.details.wind.speed;

  try {
    // Use a relative URL so the request works when the page is served by the Flask app
    const response = await fetch('/predict_rain', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ temperature: Number(t), humidity: Number(h), pressure: Number(p), wind_speed: Number(w) })
    });

    if (!response.ok) {
      console.error('Predict API returned', response.status);
      document.getElementById('rainfall').innerText = 'Prediction unavailable';
      return;
    }

    const data = await response.json();
    if (data.error) {
      console.error('Prediction error from server:', data.error);
      document.getElementById('rainfall').innerText = 'Prediction unavailable';
      return;
    }

    // Show probability if provided, otherwise fall back to binary label
    if (data.rain_probability !== undefined && data.rain_probability !== null) {
      const pct = Number(data.rain_probability);
      // Display with 0 or 1 decimal place depending on fractional part
      const displayPct = (Math.round(pct * 10) / 10).toFixed(pct % 1 === 0 ? 0 : 1);
      const icon = pct >= 50 ? '🌧️' : '☀️';
      document.getElementById('rainfall').innerText = `${icon} ${data.rain_prediction} (${displayPct}%)`;
    } else if (data.rain_prediction !== undefined) {
      document.getElementById('rainfall').innerText = data.rain_prediction === 'Yes' ? '🌧️ Rain Expected' : '☀️ No Rain';
    } else {
      document.getElementById('rainfall').innerText = 'Prediction unavailable';
    }
  } catch (err) {
    console.error('Failed to call predict_rain:', err);
    document.getElementById('rainfall').innerText = 'Prediction unavailable';
  }
}

// Initial prediction on load using default/static values
getRainPrediction();


// Sun and Moon Data
const API_KEY = "77f2b39f546e68f1521c6071dfe35e80";

async function fetchWeatherByCity(city) {

    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );

    const data = await response.json();

    const lat = data.coord.lat;
    const lon = data.coord.lon;

    updateSunData(data);
    fetchMoonData(lat, lon);

}

document.getElementById("citySearchInput")
.addEventListener("keypress", function(e) {

    if (e.key === "Enter") {

        const city = e.target.value;
        fetchWeatherByCity(city);

    }
});

//sunrise / sunset
function updateSunData(data) {

    const sunrise = new Date(data.sys.sunrise * 1000);
    const sunset = new Date(data.sys.sunset * 1000);

    document.getElementById("sunrise").textContent =
        sunrise.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    document.getElementById("sunset").textContent =
        sunset.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const diff = sunset - sunrise;

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("dayLength").textContent =
        `${hours}h ${minutes}m`;

    updateSunProgress(sunrise, sunset);
}

function updateSunProgress(sunrise, sunset) {

    const now = new Date();

    const total = sunset - sunrise;
    const current = now - sunrise;

    let percent = (current / total) * 100;

    percent = Math.max(0, Math.min(percent, 100));

    document.getElementById("sunProgressBar").style.width =
        percent + "%";
}

//moonrise / moonset
function fetchMoonData(lat, lon) {

    const today = new Date();

    const moonTimes = SunCalc.getMoonTimes(today, lat, lon);
    const moonIllum = SunCalc.getMoonIllumination(today);

    if (moonTimes.rise)
        document.getElementById("moonrise").textContent =
            moonTimes.rise.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    if (moonTimes.set)
        document.getElementById("moonset").textContent =
            moonTimes.set.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const illum = Math.round(moonIllum.fraction * 100);

    document.getElementById("moonIllumination").textContent =
        illum + "% Illuminated";

    updateMoonPhase(moonIllum.phase);
}
function updateMoonPhase(phase) {

    let text = "";
    let icon = "";

    if (phase < 0.25) {
        text = "Waxing Crescent";
        icon = "🌒";
    }
    else if (phase < 0.5) {
        text = "Waxing Gibbous";
        icon = "🌔";
    }
    else if (phase < 0.75) {
        text = "Waning Gibbous";
        icon = "🌖";
    }
    else {
        text = "Waning Crescent";
        icon = "🌘";
    }

    document.getElementById("moonPhase").textContent = text;
    document.getElementById("moonIcon").textContent = icon;
}

window.onload = () => {
    fetchWeatherByCity("Nashik");
};

document.querySelectorAll(".quick-location-btn")
.forEach(btn => {

    btn.addEventListener("click", () => {

        const city = btn.dataset.city;
        fetchWeatherByCity(city);

    });

});


//forcast data



async function fetchExtendedForecast(lat, lon) {

    try {

        const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto`
        );

        const data = await response.json();

        updateExtendedForecast(data.daily);

    } catch (error) {

        console.error("Extended forecast error:", error);

    }
}
async function fetchExtendedForecast(lat, lon) {

    try {

        const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto`
        );

        const data = await response.json();

        updateExtendedForecast(data.daily);

    } catch (error) {

        console.error("Extended forecast error:", error);

    }
}
function getWeatherText(code) {

    if (code === 0) return "☀️ Clear Sky";
    if (code <= 3) return "⛅ Partly Cloudy";
    if (code <= 48) return "🌫 Fog";
    if (code <= 67) return "🌧 Rain";
    if (code <= 77) return "❄️ Snow";
    if (code <= 99) return "⛈ Storm";

    return "Unknown";
}
function updateExtendedForecast(daily) {

    const container = document.getElementById("extendedForecast");

    container.innerHTML = "";

    const days = Math.min(10, daily.time.length);

    for (let i = 0; i < days; i++) {

        const date = new Date(daily.time[i]);

        const maxTemp = Math.round(daily.temperature_2m_max[i]);
        const minTemp = Math.round(daily.temperature_2m_min[i]);

        const weather = getWeatherText(daily.weathercode[i]);

        container.innerHTML += `
            <div class="extended-card">
                <h4>${date.toDateString()}</h4>
                <p>${weather}</p>
                <p>🌡 ${maxTemp}° / ${minTemp}°</p>
            </div>
        `;
    }
}
async function fetchWeatherByCity(city) {

    try {

        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
        );

        const data = await res.json();

        if (data.cod !== 200) {
            alert("City not found");
            return;
        }

        const lat = data.coord.lat;
        const lon = data.coord.lon;

        fetchExtendedForecast(lat, lon);

    } catch (error) {

        console.error("City fetch error:", error);

    }
}

document.getElementById("citySearchInput")
.addEventListener("keypress", function(e) {

    if (e.key === "Enter") {

        const city = e.target.value.trim();

        if (city) {
            fetchWeatherByCity(city);
        }

    }
});

//air quality data

/* =====================================================
   AIR QUALITY API
===================================================== */

async function loadEnvironmentData(city) {

    try {

        // Get coordinates from OpenWeather
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        );

        const data = await res.json();

        if (data.cod !== 200) {
            alert("City not found");
            return;
        }

        const lat = data.coord.lat;
        const lon = data.coord.lon;

        fetchAirQuality(lat, lon);
        fetchUVSolar(lat, lon);

    } catch (error) {
        console.error("Environment fetch error:", error);
    }
}
async function fetchAirQuality(lat, lon) {

    try {

        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
        );

        const data = await res.json();

        const air = data.list[0];

        updateAirQualityUI(air);

    } catch (error) {
        console.error("Air quality fetch error:", error);
    }
}
function updateAirQualityUI(air) {

    const aqiMap = {
        1: "Good",
        2: "Fair",
        3: "Moderate",
        4: "Poor",
        5: "Very Poor"
    };

    const aqi = air.main.aqi;

    document.getElementById("aqi").textContent =
        `${aqi} - ${aqiMap[aqi]}`;

    document.getElementById("pm25").textContent =
        air.components.pm2_5 + " µg/m³";

    document.getElementById("pm10").textContent =
        air.components.pm10 + " µg/m³";

    document.getElementById("gases").textContent =
        `${air.components.o3} / ${air.components.no2} / ${air.components.so2}`;
}
async function fetchUVSolar(lat, lon) {

    try {

        const res = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=uv_index_max,sunshine_duration&hourly=shortwave_radiation&timezone=auto`
        );

        const data = await res.json();

        updateUVSolarUI(data);

    } catch (error) {
        console.error("UV solar fetch error:", error);
    }
}
function updateUVSolarUI(data) {

    const uv = Math.round(data.daily.uv_index_max[0]);

    const sunshine =
        (data.daily.sunshine_duration[0] / 3600).toFixed(1);

    // UV Category + Recommendation
    let category = "Low";
    let rec = "Safe exposure";

    if (uv >= 3 && uv <= 5) {
        category = "Moderate";
        rec = "Use sunglasses";
    }
    else if (uv >= 6 && uv <= 7) {
        category = "High";
        rec = "Use SPF 30+ sunscreen";
    }
    else if (uv >= 8) {
        category = "Very High";
        rec = "Avoid sunlight";
    }

    document.getElementById("uvIndex").textContent =
        `${uv} - ${category}`;

    document.getElementById("uvRec").textContent = rec;

    document.getElementById("sunshineDur").textContent =
        sunshine + " hours";

    // Solar Radiation
    const radiation =
        data.hourly.shortwave_radiation.slice(-1)[0];

    document.getElementById("solarRad").textContent =
        radiation + " W/m²";
}
document.getElementById("citySearchInput")
.addEventListener("keypress", (e) => {

    if (e.key === "Enter") {

        const city = e.target.value.trim();

        if (city) loadEnvironmentData(city);
    }
});
document.querySelectorAll(".quick-location-btn")
.forEach(btn => {

    btn.addEventListener("click", () => {
        loadEnvironmentData(btn.dataset.city);
    });

});
