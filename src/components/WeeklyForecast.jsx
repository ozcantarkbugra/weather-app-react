import React from "react";
import { translations } from "../utils/translations";

const WeeklyForecast = ({ forecast, language = "tr", unit = "metric" }) => {
  if (!forecast || forecast.length === 0) {
    return null;
  }

  const t = translations[language] || translations.tr;

  const getShortDayName = (dateString) => {
    const date = new Date(dateString);
    const days = ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"];
    return days[date.getDay()];
  };

  const getWeatherIcon = (weatherCode) => {
    // Basit hava durumu ikonları
    if (weatherCode >= 200 && weatherCode < 300) return "⛈️"; // Gök gürültülü
    if (weatherCode >= 300 && weatherCode < 400) return "🌧️"; // Hafif yağmur
    if (weatherCode >= 500 && weatherCode < 600) return "🌧️"; // Yağmur
    if (weatherCode >= 600 && weatherCode < 700) return "❄️"; // Kar
    if (weatherCode >= 700 && weatherCode < 800) return "🌫️"; // Sis
    if (weatherCode === 800) return "☀️"; // Açık
    if (weatherCode >= 801 && weatherCode < 900) return "☁️"; // Bulutlu
    return "🌤️";
  };

  return (
    <div className="weekly-forecast">
      <h3>{t.weeklyForecast}</h3>
      <div className="forecast-container">
        {forecast.map((day, index) => (
          <div key={index} className="forecast-day">
            <div className="day-name">{getShortDayName(day.dt_txt)}</div>
            <div className="weather-icon">
              {getWeatherIcon(day.weather[0].id)}
            </div>
            <div className="temperature">
              <span className="max-temp">
                {Math.round(day.main.temp_max)}
                {unit === "metric" ? "°C" : "°F"}
              </span>
              <span className="min-temp">
                {Math.round(day.main.temp_min)}
                {unit === "metric" ? "°C" : "°F"}
              </span>
            </div>
            <div className="weather-desc">{day.weather[0].description}</div>
            <div className="humidity">
              {t.humidity}: {day.main.humidity}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyForecast;
