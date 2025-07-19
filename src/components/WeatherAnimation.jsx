import React from "react";

const WeatherAnimation = ({ weatherCode, description }) => {
  const getAnimation = () => {
    // Hava durumu kodlarına göre animasyon
    if (weatherCode >= 200 && weatherCode < 300) {
      return (
        <div className="weather-animation thunderstorm">
          <div className="lightning"></div>
          <div className="rain"></div>
        </div>
      );
    }
    if (weatherCode >= 300 && weatherCode < 600) {
      return (
        <div className="weather-animation rain">
          <div className="rain-drop"></div>
          <div className="rain-drop"></div>
          <div className="rain-drop"></div>
          <div className="rain-drop"></div>
          <div className="rain-drop"></div>
        </div>
      );
    }
    if (weatherCode >= 600 && weatherCode < 700) {
      return (
        <div className="weather-animation snow">
          <div className="snowflake">❄</div>
          <div className="snowflake">❄</div>
          <div className="snowflake">❄</div>
        </div>
      );
    }
    if (weatherCode >= 700 && weatherCode < 800) {
      return (
        <div className="weather-animation fog">
          <div className="fog-cloud"></div>
          <div className="fog-cloud"></div>
        </div>
      );
    }
    if (weatherCode === 800) {
      return (
        <div className="weather-animation clear">
          <div className="sun">☀️</div>
        </div>
      );
    }
    if (weatherCode >= 801 && weatherCode < 900) {
      return (
        <div className="weather-animation cloudy">
          <div className="cloud">☁️</div>
          <div className="cloud">☁️</div>
        </div>
      );
    }
    return null;
  };

  return <div className="weather-animation-container">{getAnimation()}</div>;
};

export default WeatherAnimation;
