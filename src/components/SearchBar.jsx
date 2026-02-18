import { useState } from 'react'
import styles from './SearchBar.module.css'

export default function SearchBar({ onSearch, loading }) {
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (value.trim()) onSearch(value.trim())
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputWrapper}>
        <span className={styles.icon}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
        </span>
        <input
          className={styles.input}
          type="text"
          placeholder="Search city..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={loading}
          autoFocus
        />
        <button
          className={styles.button}
          type="submit"
          disabled={loading || !value.trim()}
          aria-label="Search"
        >
          {loading ? <Spinner /> : 'Go'}
        </button>
      </div>
    </form>
  )
}

function Spinner() {
  return (
    <span className="spinner" style={{
      display: 'inline-block',
      width: 16,
      height: 16,
      border: '2px solid transparent',
      borderTop: '2px solid currentColor',
      borderRadius: '50%',
      animation: 'spin 0.7s linear infinite',
    }} />
  )
}
