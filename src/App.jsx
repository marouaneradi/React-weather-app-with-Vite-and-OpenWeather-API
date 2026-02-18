import { useTheme } from './hooks/useTheme'
import ThemeToggle from './components/ThemeToggle'
import Home from './pages/Home'
import styles from './App.module.css'

export default function App() {
  const { theme, toggle } = useTheme()

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <div className={styles.brand}>
          <span className={styles.logo}>☁</span>
          <span className={styles.name}>Nimbus</span>
        </div>
        <ThemeToggle theme={theme} onToggle={toggle} />
      </header>
      <Home />
      <footer className={styles.footer}>
        <p>Powered by <a href="https://openweathermap.org" target="_blank" rel="noopener noreferrer">OpenWeather</a></p>
      </footer>
    </div>
  )
}
