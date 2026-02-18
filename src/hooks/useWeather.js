import { useState, useCallback } from 'react'
import { fetchWeather, fetchForecast } from '../utils/weatherApi'

export function useWeather() {
  const [weather, setWeather] = useState(null)
  const [forecast, setForecast] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const search = useCallback(async (city) => {
    if (!city.trim()) return
    setLoading(true)
    setError(null)
    setWeather(null)
    setForecast(null)

    try {
      const [weatherData, forecastData] = await Promise.all([
        fetchWeather(city),
        fetchForecast(city),
      ])
      setWeather(weatherData)
      setForecast(forecastData)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [])

  return { weather, forecast, loading, error, search }
}
