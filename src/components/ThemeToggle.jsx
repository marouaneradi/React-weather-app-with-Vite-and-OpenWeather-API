import styles from './ThemeToggle.module.css'

export default function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      className={styles.toggle}
      onClick={onToggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <span className={styles.icon}>{theme === 'dark' ? '☀️' : '🌙'}</span>
    </button>
  )
}
