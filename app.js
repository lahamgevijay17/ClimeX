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
  weatherData.fiveDay.forEach(day => {
    const card = document.createElement('div');
    card.className = 'day-card';
    card.innerHTML = `
      <div class="day-name">${day.day}</div>
      <div class="day-date">${formatDate(day.date)}</div>
      <div class="day-icon">${day.icon}</div>
      <div class="day-temp-range">
        <span class="temp-max-day">${day.max}°</span>
        <span>/</span>
        <span class="temp-min-day">${day.min}°</span>
      </div>
      <div class="day-condition">${day.condition}</div>
      <div class="day-rain-chance">💧 ${day.rain}</div>
    `;
    fiveDayForecast.appendChild(card);
  });
}

// Extended forecast
function populateExtendedForecast() {
  const extendedForecast = document.getElementById('extendedForecast');
  weatherData.extended.forEach(item => {
    const div = document.createElement('div');
    div.className = 'extended-item';
    div.innerHTML = `
      <div class="extended-date">${formatDate(item.date)}</div>
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
  document.getElementById('sunrise').textContent = weatherData.sun.sunrise + ' AM';
  document.getElementById('sunset').textContent = weatherData.sun.sunset + ' PM';
  document.getElementById('dayLength').textContent = weatherData.sun.dayLength;
  
  // Calculate sun progress (simplified)
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const sunriseMinutes = 6 * 60 + 30;
  const sunsetMinutes = 17 * 60 + 45;
  const progress = ((currentMinutes - sunriseMinutes) / (sunsetMinutes - sunriseMinutes)) * 100;
  document.getElementById('sunProgressBar').style.width = Math.max(0, Math.min(100, progress)) + '%';
  
  // Moon
  document.getElementById('moonIcon').textContent = weatherData.moon.icon;
  document.getElementById('moonPhase').textContent = weatherData.moon.phase;
  document.getElementById('moonIllumination').textContent = weatherData.moon.illumination + '% Illuminated';
  document.getElementById('moonrise').textContent = weatherData.moon.moonrise;
  document.getElementById('moonset').textContent = weatherData.moon.moonset;
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
  
  saveSettings.addEventListener('click', () => {
    settingsModal.classList.remove('show');
    alert('Settings saved! (Demo mode)');
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