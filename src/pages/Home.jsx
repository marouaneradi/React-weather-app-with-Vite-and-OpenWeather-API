import { useWeather } from '../hooks/useWeather'
import SearchBar from '../components/SearchBar'
import WeatherCard from '../components/WeatherCard'
import ForecastBar from '../components/ForecastBar'
import LoadingSpinner from '../components/LoadingSpinner'
import ErrorMessage from '../components/ErrorMessage'
import styles from './Home.module.css'

export default function Home() {
  const { weather, forecast, loading, error, search } = useWeather()

  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <p className={styles.tagline}>Real-time weather, beautifully simple.</p>
        <SearchBar onSearch={search} loading={loading} />
      </div>

      <div className={styles.results}>
        {loading && <LoadingSpinner />}
        {error && !loading && <ErrorMessage error={error} />}
        {weather && !loading && (
          <>
            <WeatherCard weather={weather} />
            <ForecastBar forecast={forecast} />
          </>
        )}
        {!weather && !loading && !error && <EmptyState />}
      </div>
    </main>
  )
}

function EmptyState() {
  const cities = ['New York', 'London', 'Tokyo', 'Sydney', 'Paris']
  return (
    <div className={styles.empty}>
      <span className={styles.emptyIcon}>🌍</span>
      <p className={styles.emptyText}>Try searching for a city</p>
      <div className={styles.suggestions}>
        {cities.map(city => (
          <span key={city} className={styles.chip}>{city}</span>
        ))}
      </div>
    </div>
  )
}
