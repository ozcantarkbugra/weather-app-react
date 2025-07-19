import React from "react";
import {
  FaExclamationTriangle,
  FaThermometerHalf,
  FaUmbrella,
  FaWind,
} from "react-icons/fa";
import { translations } from "../utils/translations";

const WeatherAlerts = ({
  weatherInfo,
  forecast,
  language = "tr",
  unit = "metric",
}) => {
  const t = translations[language] || translations.tr;

  const getAlerts = () => {
    const alerts = [];

    if (!weatherInfo) return alerts;

    // Birime göre sıcaklık eşikleri
    const highTempThreshold = unit === "metric" ? 35 : 95; // 35°C = 95°F
    const lowTempThreshold = unit === "metric" ? 0 : 32; // 0°C = 32°F
    const extremeHighThreshold = unit === "metric" ? 35 : 95; // 35°C = 95°F
    const extremeLowThreshold = unit === "metric" ? -5 : 23; // -5°C = 23°F

    // Yüksek sıcaklık uyarısı
    if (weatherInfo.main?.temp > highTempThreshold) {
      alerts.push({
        type: "high-temp",
        icon: <FaThermometerHalf />,
        message: t.highTempWarning,
        severity: "warning",
      });
    }

    // Düşük sıcaklık uyarısı
    if (weatherInfo.main?.temp < lowTempThreshold) {
      alerts.push({
        type: "low-temp",
        icon: <FaThermometerHalf />,
        message: t.lowTempWarning,
        severity: "info",
      });
    }

    // Yağmur uyarısı
    if (weatherInfo.weather?.[0]?.main === "Rain") {
      alerts.push({
        type: "rain",
        icon: <FaUmbrella />,
        message: t.rainWarning,
        severity: "info",
      });
    }

    // Güçlü rüzgar uyarısı
    const windThreshold = unit === "metric" ? 10 : 22; // 10 m/s = 22 mph
    if (weatherInfo.wind?.speed > windThreshold) {
      alerts.push({
        type: "wind",
        icon: <FaWind />,
        message: t.windWarning,
        severity: "warning",
      });
    }

    // 5 günlük tahmin uyarıları
    if (forecast && forecast.length > 0) {
      const extremeTemps = forecast.filter(
        (day) =>
          day.main.temp_max > extremeHighThreshold ||
          day.main.temp_min < extremeLowThreshold
      );

      if (extremeTemps.length > 0) {
        alerts.push({
          type: "forecast",
          icon: <FaExclamationTriangle />,
          message: t.extremeTempWarning,
          severity: "warning",
        });
      }
    }

    return alerts;
  };

  const alerts = getAlerts();

  if (alerts.length === 0) return null;

  return (
    <div className="weather-alerts">
      <h3>{t.weatherWarnings}</h3>
      <div className="alerts-container">
        {alerts.map((alert, index) => (
          <div key={index} className={`alert-item ${alert.severity}`}>
            <div className="alert-icon">{alert.icon}</div>
            <div className="alert-message">{alert.message}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherAlerts;
