# ☁ Nimbus — Weather App

A clean, modern weather application built with React and Vite. Search any city in the world and get real-time weather data with a beautiful, responsive UI that supports dark and light mode.

---

## ✨ Features

- 🔍 **Search by city name** — instant results for any city worldwide
- 🌡️ **Current conditions** — temperature, feels-like, min/max
- 💧 **Detailed stats** — humidity, wind speed & direction, pressure, visibility
- 🌅 **Sunrise & sunset** times
- ⏱️ **Hourly forecast** — next few hours at a glance
- 🌙 **Dark / Light mode** — toggles and persists preference
- ⚡ **Loading spinner** with smooth animations
- ⚠️ **Friendly error messages** for invalid city, bad API key, or network failures
- 📱 **Fully responsive** — mobile, tablet, and desktop
- 🎨 **Production-grade UI** using CSS Modules and Google Fonts

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI components & state |
| Vite 4 | Build tool & dev server |
| CSS Modules | Scoped component styles |
| OpenWeather API | Weather data source |
| Custom Hooks | `useWeather`, `useTheme` |

---

## 📁 Project Structure

```
weather-app/
├── public/
├── src/
│   ├── components/
│   │   ├── SearchBar.jsx / .module.css
│   │   ├── WeatherCard.jsx / .module.css
│   │   ├── ForecastBar.jsx / .module.css
│   │   ├── LoadingSpinner.jsx / .module.css
│   │   ├── ErrorMessage.jsx / .module.css
│   │   └── ThemeToggle.jsx / .module.css
│   ├── hooks/
│   │   ├── useWeather.js    ← fetching logic
│   │   └── useTheme.js      ← dark/light mode
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── Home.module.css
│   ├── utils/
│   │   └── weatherApi.js    ← API calls & helpers
│   ├── App.jsx
│   ├── App.module.css
│   ├── index.css
│   └── main.jsx
├── .env                  ← (you create this)
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v16 or higher
- **npm** v7 or higher
- A free [OpenWeather API key](https://openweathermap.org/api)

---

### 1. Clone the repository

```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add your API key

Create a `.env` file in the project root:

```bash
cp .env.example .env
```

Open `.env` and replace the placeholder with your real key:

```env
VITE_OPENWEATHER_API_KEY=your_actual_api_key_here
```

> 🔑 **Get a free API key** at [openweathermap.org/api](https://openweathermap.org/api). After registering, keys activate within a few minutes.

### 4. Run locally

```bash
npm run dev
```

Open your browser at **http://localhost:5173**

### 5. Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

---

## 🔑 Environment Variables

| Variable | Required | Description |
|---|---|---|
| `VITE_OPENWEATHER_API_KEY` | ✅ Yes | Your OpenWeather API key |

> **Security note:** Never commit your `.env` file. It is listed in `.gitignore` by default.

---

## 📸 Screenshots

> _Coming soon — add screenshots of light mode, dark mode, and mobile views here._

| Light Mode | Dark Mode |
|---|---|
| ![Light]() | ![Dark]() |

---

## 🔮 Future Improvements

- [ ] **5-day daily forecast** with day-by-day breakdown
- [ ] **Geolocation** — auto-detect user's current city on load
- [ ] **Search history** — remember recent searches (localStorage)
- [ ] **Favorite cities** — pin cities and switch between them
- [ ] **Weather maps** — radar/satellite layer integration
- [ ] **PWA support** — installable app with offline caching
- [ ] **Unit toggle** — switch between °C and °F
- [ ] **Air quality index** — add AQI via OpenWeather Air Pollution API
- [ ] **Animated weather backgrounds** — dynamic gradients based on conditions

---

## 📄 License

MIT © 2025 — feel free to use and adapt for your projects.
