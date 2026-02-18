import { getWeatherIcon, getWindDirection, formatTime } from '../utils/weatherApi'
import styles from './WeatherCard.module.css'

export default function WeatherCard({ weather }) {
  const {
    name, sys, main, weather: conditions, wind, visibility, timezone
  } = weather

  const condition = conditions[0]
  const icon = getWeatherIcon(condition.id)
  const sunrise = formatTime(sys.sunrise, timezone)
  const sunset = formatTime(sys.sunset, timezone)
  const windDir = getWindDirection(wind.deg)
  const feelsLike = Math.round(main.feels_like)
  const temp = Math.round(main.temp)
  const tempMin = Math.round(main.temp_min)
  const tempMax = Math.round(main.temp_max)
  const visKm = visibility ? (visibility / 1000).toFixed(1) : '—'

  return (
    <div className={styles.card}>
      {/* Header */}
      <div className={styles.header}>
        <div>
          <h2 className={styles.city}>{name}, <span className={styles.country}>{sys.country}</span></h2>
          <p className={styles.condition}>{condition.description}</p>
        </div>
        <span className={styles.icon} role="img" aria-label={condition.description}>
          {icon}
        </span>
      </div>

      {/* Temperature */}
      <div className={styles.tempBlock}>
        <span className={styles.temp}>{temp}</span>
        <span className={styles.unit}>°C</span>
        <span className={styles.feelsLike}>Feels like {feelsLike}°</span>
      </div>

      <div className={styles.tempRange}>
        <span>↑ {tempMax}°</span>
        <span className={styles.divider}>|</span>
        <span>↓ {tempMin}°</span>
      </div>

      {/* Stats Grid */}
      <div className={styles.grid}>
        <Stat label="Humidity" value={`${main.humidity}%`} icon="💧" />
        <Stat label="Wind" value={`${Math.round(wind.speed)} m/s ${windDir}`} icon="🌬️" />
        <Stat label="Pressure" value={`${main.pressure} hPa`} icon="📊" />
        <Stat label="Visibility" value={`${visKm} km`} icon="👁️" />
        <Stat label="Sunrise" value={sunrise} icon="🌅" />
        <Stat label="Sunset" value={sunset} icon="🌇" />
      </div>
    </div>
  )
}

function Stat({ label, value, icon }) {
  return (
    <div className={styles.stat}>
      <span className={styles.statIcon}>{icon}</span>
      <span className={styles.statValue}>{value}</span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  )
}
