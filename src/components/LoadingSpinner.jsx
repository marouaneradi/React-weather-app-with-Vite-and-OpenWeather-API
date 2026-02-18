import styles from './LoadingSpinner.module.css'

export default function LoadingSpinner() {
  return (
    <div className={styles.wrapper} role="status" aria-label="Loading weather data">
      <div className={styles.ring}>
        <div /><div /><div /><div />
      </div>
      <p className={styles.label}>Fetching weather…</p>
    </div>
  )
}
