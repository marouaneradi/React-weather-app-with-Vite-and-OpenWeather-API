import { getWeatherIcon } from '../utils/weatherApi'
import styles from './ForecastBar.module.css'

export default function ForecastBar({ forecast }) {
  if (!forecast?.list) return null

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Next Few Hours</h3>
      <div className={styles.list}>
        {forecast.list.map((item, i) => {
          const time = new Date(item.dt * 1000)
          const hour = time.getHours().toString().padStart(2, '0') + ':00'
          const icon = getWeatherIcon(item.weather[0].id)
          const temp = Math.round(item.main.temp)
          return (
            <div key={i} className={styles.item}>
              <span className={styles.hour}>{i === 0 ? 'Now' : hour}</span>
              <span className={styles.icon}>{icon}</span>
              <span className={styles.temp}>{temp}°</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
