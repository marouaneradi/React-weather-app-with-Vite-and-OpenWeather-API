import styles from './ErrorMessage.module.css'

const MESSAGES = {
  CITY_NOT_FOUND: { title: 'City not found', text: 'Check the spelling or try a different city name.' },
  API_KEY_MISSING: { title: 'API key missing', text: 'Add your OpenWeather API key to the .env file. See README for instructions.' },
  INVALID_API_KEY: { title: 'Invalid API key', text: 'Your API key is not valid. Check it in your .env file.' },
  FETCH_FAILED: { title: 'Connection failed', text: 'Could not reach the weather service. Try again later.' },
}

export default function ErrorMessage({ error }) {
  const msg = MESSAGES[error] || { title: 'Something went wrong', text: error || 'Unknown error occurred.' }

  return (
    <div className={styles.box} role="alert">
      <span className={styles.emoji}>⚠️</span>
      <div>
        <p className={styles.title}>{msg.title}</p>
        <p className={styles.text}>{msg.text}</p>
      </div>
    </div>
  )
}
