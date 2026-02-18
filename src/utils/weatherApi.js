const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY
const BASE_URL = 'https://api.openweathermap.org/data/2.5'

export async function fetchWeather(city) {
  if (!API_KEY || API_KEY === 'your_api_key_here') {
    throw new Error('API_KEY_MISSING')
  }

  const res = await fetch(
    `${BASE_URL}/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
  )

  if (!res.ok) {
    if (res.status === 404) throw new Error('CITY_NOT_FOUND')
    if (res.status === 401) throw new Error('INVALID_API_KEY')
    throw new Error('FETCH_FAILED')
  }

  return res.json()
}

export async function fetchForecast(city) {
  if (!API_KEY || API_KEY === 'your_api_key_here') return null

  const res = await fetch(
    `${BASE_URL}/forecast?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric&cnt=5`
  )

  if (!res.ok) return null
  return res.json()
}

export function getWeatherIcon(code) {
  const strCode = String(code)
  if (strCode === '800') return '☀️'
  if (strCode.startsWith('80')) return '⛅'
  const map = { '2': '⛈️', '3': '🌦️', '5': '🌧️', '6': '❄️', '7': '🌫️' }
  return map[strCode[0]] || '🌡️'
}

export function getWindDirection(deg) {
  const dirs = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']
  return dirs[Math.round(deg / 45) % 8]
}

export function formatTime(unix, timezone) {
  return new Date((unix + timezone) * 1000).toUTCString().slice(17, 22)
}
