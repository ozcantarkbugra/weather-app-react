import React from "react";
import { translations } from "../utils/translations";

const WeatherCharts = ({ forecast, unit, language = "tr" }) => {
  if (!forecast || forecast.length === 0) return null;

  const t = translations[language] || translations.tr;

  const getUnitSymbol = () => (unit === "metric" ? "°C" : "°F");

  const maxTemps = forecast.map((day) => Math.round(day.main.temp_max));
  const minTemps = forecast.map((day) => Math.round(day.main.temp_min));
  const days = forecast.map((day) => {
    const date = new Date(day.dt_txt);
    const dayNames = ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"];
    return dayNames[date.getDay()];
  });

  const maxTemp = Math.max(...maxTemps);
  const minTemp = Math.min(...minTemps);
  const tempRange = maxTemp - minTemp;

  return (
    <div className="weather-charts">
      <h3>{t.weatherCharts}</h3>

      {/* Sıcaklık Grafiği */}
      <div className="chart-container">
        <h4>{t.temperatureChange}</h4>
        <div className="temperature-chart">
          {forecast.map((day, index) => {
            const maxHeight = ((day.main.temp_max - minTemp) / tempRange) * 100;
            const minHeight = ((day.main.temp_min - minTemp) / tempRange) * 100;

            return (
              <div key={index} className="temp-bar">
                <div className="temp-label">{days[index]}</div>
                <div className="temp-bars">
                  <div
                    className="max-temp-bar"
                    style={{ height: `${maxHeight}%` }}
                    title={`Maksimum: ${Math.round(
                      day.main.temp_max
                    )}${getUnitSymbol()}`}
                  ></div>
                  <div
                    className="min-temp-bar"
                    style={{ height: `${minHeight}%` }}
                    title={`Minimum: ${Math.round(
                      day.main.temp_min
                    )}${getUnitSymbol()}`}
                  ></div>
                </div>
                <div className="temp-values">
                  <div className="max-temp-value">
                    {Math.round(day.main.temp_max)}
                    {getUnitSymbol()}
                  </div>
                  <div className="min-temp-value">
                    {Math.round(day.main.temp_min)}
                    {getUnitSymbol()}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Nem Grafiği */}
      <div className="chart-container">
        <h4>{t.humidityRates}</h4>
        <div className="humidity-chart">
          {forecast.map((day, index) => (
            <div key={index} className="humidity-bar">
              <div className="humidity-label">{days[index]}</div>
              <div className="humidity-container">
                <div
                  className="humidity-fill"
                  style={{ height: `${day.main.humidity}%` }}
                  title={`Nem: ${day.main.humidity}%`}
                ></div>
              </div>
              <div className="humidity-value-display">{day.main.humidity}%</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherCharts;
