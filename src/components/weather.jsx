import React, { useState, useEffect } from "react";
import axios from "axios";
import { RiCelsiusFill } from "react-icons/ri";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Map from "./Map";
import WeeklyForecast from "./WeeklyForecast";
import LocationButton from "./LocationButton";
import Favorites from "./Favorites";
import WeatherAnimation from "./WeatherAnimation";
import ThemeToggle from "./ThemeToggle";
import UnitToggle from "./UnitToggle";
import WeatherCharts from "./WeatherCharts";
import LanguageToggle from "./LanguageToggle";
import WeatherAlerts from "./WeatherAlerts";
import { translations } from "../utils/translations";

export default function Weather() {
  const [city, setCity] = useState("");
  const [info, setInfo] = useState({});
  const [forecast, setForecast] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [unit, setUnit] = useState("metric");
  const [language, setLanguage] = useState("tr");
  const [showCharts, setShowCharts] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState(""); // Default background

  // API key from environment variables
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

  const handleChange = (e) => {
    setCity(e.target.value);
    setError(""); // Clear error when user types
  };

  const t = translations[language] || translations.tr;

  // Şehir fotoğrafını Unsplash API'den çek
  const fetchCityImage = async (cityName) => {
    try {
      const unsplashAccessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
      console.log("Unsplash API Key:", unsplashAccessKey ? "Mevcut" : "Yok");

      // Eğer Unsplash API key yoksa, default background kullan
      if (!unsplashAccessKey) {
        console.log(
          "Unsplash API key bulunamadı. Default background kullanılıyor."
        );
        return null;
      }
      console.log("Unsplash API çağrısı yapılıyor...");
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
          cityName
        )}&orientation=landscape&per_page=1`,
        {
          headers: {
            Authorization: `Client-ID ${unsplashAccessKey}`,
          },
        }
      );
      console.log("Unsplash API yanıtı:", response.data);

      if (response.data.results && response.data.results.length > 0) {
        return response.data.results[0].urls.regular;
      }
    } catch (error) {
      console.log("Unsplash API hatası:", error);
    }
    return null; // Fotoğraf bulunamazsa null döndür
  };

  // Sıcaklık dönüşüm fonksiyonları
  const convertTemperature = (temp, fromUnit, toUnit) => {
    if (fromUnit === toUnit) return temp;

    if (fromUnit === "metric" && toUnit === "imperial") {
      // Celsius to Fahrenheit
      return (temp * 9) / 5 + 32;
    } else if (fromUnit === "imperial" && toUnit === "metric") {
      // Fahrenheit to Celsius
      return ((temp - 32) * 5) / 9;
    }
    return temp;
  };

  const convertWindSpeed = (speed, fromUnit, toUnit) => {
    if (fromUnit === toUnit) return speed;

    if (fromUnit === "metric" && toUnit === "imperial") {
      // m/s to mph
      return speed * 2.237;
    } else if (fromUnit === "imperial" && toUnit === "metric") {
      // mph to m/s
      return speed / 2.237;
    }
    return speed;
  };

  const handleClick = async () => {
    if (!city.trim()) {
      setError(t.enterCityError);
      return;
    }

    if (!API_KEY) {
      setError("API anahtarı bulunamadı. Lütfen .env dosyasını kontrol edin.");
      return;
    }

    setLoading(true);
    setError("");
    setIsActive(false);

    try {
      // API'den her zaman metric veri al, sonra dönüştür
      const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        city
      )}&lang=${language}&appid=${API_KEY}&units=metric`;

      // 5 günlük tahmin
      const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(
        city
      )}&lang=${language}&appid=${API_KEY}&units=metric`;

      console.log("API çağrıları yapılıyor...");

      const [weatherResponse, forecastResponse] = await Promise.all([
        axios.get(weatherURL),
        axios.get(forecastURL),
      ]);

      // API'den gelen veriyi seçilen birime göre dönüştür
      const convertedWeatherData = {
        ...weatherResponse.data,
        main: {
          ...weatherResponse.data.main,
          temp: convertTemperature(
            weatherResponse.data.main.temp,
            "metric",
            unit
          ),
          feels_like: convertTemperature(
            weatherResponse.data.main.feels_like,
            "metric",
            unit
          ),
          temp_min: convertTemperature(
            weatherResponse.data.main.temp_min,
            "metric",
            unit
          ),
          temp_max: convertTemperature(
            weatherResponse.data.main.temp_max,
            "metric",
            unit
          ),
        },
        wind: {
          ...weatherResponse.data.wind,
          speed: convertWindSpeed(
            weatherResponse.data.wind.speed,
            "metric",
            unit
          ),
        },
      };
      setInfo(convertedWeatherData);

      // 5 günlük tahmin verilerini günlük olarak grupla ve dönüştür
      const dailyForecast = forecastResponse.data.list
        .filter((item, index) => index % 8 === 0) // Her 8. veri (24 saatlik aralık)
        .slice(0, 5) // Sadece 5 gün al
        .map((day, index) => ({
          ...day,
          main: {
            ...day.main,
            temp: convertTemperature(day.main.temp, "metric", unit),
            feels_like: convertTemperature(day.main.feels_like, "metric", unit),
            temp_min: convertTemperature(day.main.temp_min, "metric", unit),
            temp_max: convertTemperature(day.main.temp_max, "metric", unit),
          },
          wind: {
            ...day.wind,
            speed: convertWindSpeed(day.wind.speed, "metric", unit),
          },
        }));
      setForecast(dailyForecast);

      setIsActive(true);
      checkIfFavorite(weatherResponse.data.name);

      // Şehir fotoğrafını çek ve arka planı güncelle
      console.log("Şehir fotoğrafı aranıyor:", city);
      const cityImageUrl = await fetchCityImage(city);
      console.log("Bulunan fotoğraf URL:", cityImageUrl);
      if (cityImageUrl) {
        setBackgroundImage(cityImageUrl);
        console.log("Arka plan güncellendi:", cityImageUrl);
      } else {
        setBackgroundImage(""); // Default background'a geri dön
        console.log("Default background kullanılıyor");
      }
    } catch (err) {
      console.log("API Hatası:", err);
      if (err.response?.status === 404) {
        setError(t.cityNotFoundError);
      } else if (err.response?.status === 401) {
        setError(t.apiKeyError);
      } else {
        setError(t.generalError);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  const handleLocationFound = async (lat, lon) => {
    setLoading(true);
    setError("");
    setIsActive(false);

    try {
      const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=${language}&appid=${API_KEY}&units=metric`;
      const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&lang=${language}&appid=${API_KEY}&units=metric`;

      const [weatherResponse, forecastResponse] = await Promise.all([
        axios.get(weatherURL),
        axios.get(forecastURL),
      ]);

      // API'den gelen veriyi seçilen birime göre dönüştür
      const convertedWeatherData = {
        ...weatherResponse.data,
        main: {
          ...weatherResponse.data.main,
          temp: convertTemperature(
            weatherResponse.data.main.temp,
            "metric",
            unit
          ),
          feels_like: convertTemperature(
            weatherResponse.data.main.feels_like,
            "metric",
            unit
          ),
          temp_min: convertTemperature(
            weatherResponse.data.main.temp_min,
            "metric",
            unit
          ),
          temp_max: convertTemperature(
            weatherResponse.data.main.temp_max,
            "metric",
            unit
          ),
        },
        wind: {
          ...weatherResponse.data.wind,
          speed: convertWindSpeed(
            weatherResponse.data.wind.speed,
            "metric",
            unit
          ),
        },
      };
      setInfo(convertedWeatherData);
      setCity(weatherResponse.data.name);

      // 5 günlük tahmin verilerini günlük olarak grupla ve dönüştür
      const dailyForecast = forecastResponse.data.list
        .filter((item, index) => index % 8 === 0) // Her 8. veri (24 saatlik aralık)
        .slice(0, 5) // Sadece 5 gün al
        .map((day, index) => ({
          ...day,
          main: {
            ...day.main,
            temp: convertTemperature(day.main.temp, "metric", unit),
            feels_like: convertTemperature(day.main.feels_like, "metric", unit),
            temp_min: convertTemperature(day.main.temp_min, "metric", unit),
            temp_max: convertTemperature(day.main.temp_max, "metric", unit),
          },
          wind: {
            ...day.wind,
            speed: convertWindSpeed(day.wind.speed, "metric", unit),
          },
        }));
      setForecast(dailyForecast);

      setIsActive(true);
      checkIfFavorite(weatherResponse.data.name);

      // Şehir fotoğrafını çek ve arka planı güncelle
      const cityImageUrl = await fetchCityImage(weatherResponse.data.name);
      if (cityImageUrl) {
        setBackgroundImage(cityImageUrl);
      } else {
        setBackgroundImage(""); // Default background'a geri dön
      }
    } catch (err) {
      setError(t.locationError);
    } finally {
      setLoading(false);
    }
  };

  const toggleFavorite = () => {
    if (!info.name) return;

    const newFavorites = isFavorite
      ? favorites.filter((fav) => fav !== info.name)
      : [...favorites, info.name];

    setFavorites(newFavorites);
    setIsFavorite(!isFavorite);
    localStorage.setItem("weatherFavorites", JSON.stringify(newFavorites));
  };

  const checkIfFavorite = (cityName) => {
    setIsFavorite(favorites.includes(cityName));
  };

  const handleFavoriteClick = (favoriteCity) => {
    setCity(favoriteCity);
    // handleClick fonksiyonu zaten şehir fotoğrafını çekecek
    handleClick();
  };

  const handleRemoveFavorite = (favoriteCity) => {
    const newFavorites = favorites.filter((fav) => fav !== favoriteCity);
    setFavorites(newFavorites);
    localStorage.setItem("weatherFavorites", JSON.stringify(newFavorites));
    if (info.name === favoriteCity) {
      setIsFavorite(false);
    }
  };

  const handleThemeToggle = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem("weatherTheme", newTheme ? "dark" : "light");
  };

  const handleUnitToggle = (newUnit) => {
    setUnit(newUnit);
    localStorage.setItem("weatherUnit", newUnit);
  };

  // Birim değişikliğinde mevcut verileri dönüştür
  useEffect(() => {
    if (info && Object.keys(info).length > 0) {
      const convertedWeatherData = {
        ...info,
        main: {
          ...info.main,
          temp: convertTemperature(
            info.main.temp,
            unit === "metric" ? "imperial" : "metric",
            unit
          ),
          feels_like: convertTemperature(
            info.main.feels_like,
            unit === "metric" ? "imperial" : "metric",
            unit
          ),
          temp_min: convertTemperature(
            info.main.temp_min,
            unit === "metric" ? "imperial" : "metric",
            unit
          ),
          temp_max: convertTemperature(
            info.main.temp_max,
            unit === "metric" ? "imperial" : "metric",
            unit
          ),
        },
        wind: {
          ...info.wind,
          speed: convertWindSpeed(
            info.wind.speed,
            unit === "metric" ? "imperial" : "metric",
            unit
          ),
        },
      };
      setInfo(convertedWeatherData);
    }

    if (forecast && forecast.length > 0) {
      const convertedForecast = forecast.map((day) => ({
        ...day,
        main: {
          ...day.main,
          temp: convertTemperature(
            day.main.temp,
            unit === "metric" ? "imperial" : "metric",
            unit
          ),
          feels_like: convertTemperature(
            day.main.feels_like,
            unit === "metric" ? "imperial" : "metric",
            unit
          ),
          temp_min: convertTemperature(
            day.main.temp_min,
            unit === "metric" ? "imperial" : "metric",
            unit
          ),
          temp_max: convertTemperature(
            day.main.temp_max,
            unit === "metric" ? "imperial" : "metric",
            unit
          ),
        },
        wind: {
          ...day.wind,
          speed: convertWindSpeed(
            day.wind.speed,
            unit === "metric" ? "imperial" : "metric",
            unit
          ),
        },
      }));
      setForecast(convertedForecast);
    }
  }, [unit]);

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem("weatherLanguage", newLanguage);
  };

  const toggleCharts = () => {
    setShowCharts(!showCharts);
  };

  // Load favorites from localStorage on component mount
  useEffect(() => {
    const savedFavorites = localStorage.getItem("weatherFavorites");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }

    // Load theme preference
    const savedTheme = localStorage.getItem("weatherTheme");
    if (savedTheme) {
      setIsDark(savedTheme === "dark");
    }

    // Load unit preference
    const savedUnit = localStorage.getItem("weatherUnit");
    if (savedUnit) {
      setUnit(savedUnit);
    }

    // Load language preference
    const savedLanguage = localStorage.getItem("weatherLanguage");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  return (
    <div
      className={isDark ? "dark-theme" : "light-theme"}
      style={{
        "--background-image": backgroundImage
          ? `url(${backgroundImage})`
          : "url(../assets/img.jpg)",
      }}
    >
      <div className="header-controls">
        <ThemeToggle isDark={isDark} onToggle={handleThemeToggle} />
        <UnitToggle unit={unit} onToggle={handleUnitToggle} />
        <LanguageToggle
          language={language}
          onLanguageChange={handleLanguageChange}
        />
      </div>

      <h1>{t.title}</h1>
      <div className="form">
        <input
          value={city}
          className="input-text"
          type="text"
          placeholder={t.cityPlaceholder}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          disabled={loading}
        />
      </div>
      <div className="button-container">
        <button onClick={handleClick} className="btn" disabled={loading}>
          {loading ? t.loading : t.getData}
        </button>
        <LocationButton
          onLocationFound={handleLocationFound}
          loading={loading}
          useLocationText={t.useLocation}
        />
      </div>
      {error && (
        <div className="error">
          <p>{error}</p>
        </div>
      )}
      <Favorites
        favorites={favorites}
        onFavoriteClick={handleFavoriteClick}
        onRemoveFavorite={handleRemoveFavorite}
        language={language}
      />

      {isActive && info && (
        <div className="info">
          <div className="city-header">
            <p id="city">
              {info.name}, {info.sys?.country}
            </p>
            <button
              className="favorite-toggle-btn"
              onClick={toggleFavorite}
              title={isFavorite ? "Favorilerden kaldır" : "Favorilere ekle"}
            >
              {isFavorite ? <FaHeart /> : <FaRegHeart />}
            </button>
          </div>

          <WeatherAnimation
            weatherCode={info.weather?.[0]?.id}
            description={info.weather?.[0]?.description}
          />
          <div className="temperature-container">
            <p id="temperature">
              {Math.round(info.main?.temp)}
              {unit === "metric" ? "°C" : "°F"}
            </p>
            {unit === "metric" ? (
              <RiCelsiusFill className="fa-c" />
            ) : (
              <span className="fa-f">°F</span>
            )}
          </div>
          <p id="weather-description">{info.weather?.[0]?.description}</p>
          <div className="feels-like">
            <p id="feels-like-temp">
              {t.feelsLike}: {Math.round(info.main?.feels_like)}
              {unit === "metric" ? "°C" : "°F"}
            </p>
            {unit === "metric" ? (
              <RiCelsiusFill className="fa-circle" />
            ) : (
              <span>°F</span>
            )}
          </div>
          <div className="details">
            <p>
              {t.humidity}: {info.main?.humidity}%
            </p>
            <p>
              {t.wind}: {info.wind?.speed} {unit === "metric" ? "m/s" : "mph"}
            </p>
            <p>
              {t.pressure}: {info.main?.pressure} hPa
            </p>
          </div>

          <WeatherAlerts
            weatherInfo={info}
            forecast={forecast}
            language={language}
            unit={unit}
          />

          <WeeklyForecast forecast={forecast} language={language} unit={unit} />

          <div className="charts-toggle">
            <button className="charts-btn" onClick={toggleCharts}>
              {showCharts ? t.hideCharts : t.showCharts}
            </button>
          </div>

          {showCharts && (
            <WeatherCharts
              forecast={forecast}
              unit={unit}
              language={language}
            />
          )}

          <div className="map-section">
            <h3>{t.cityMap}</h3>
            <Map
              city={info.name}
              coordinates={info.coord}
              weatherInfo={info}
              unit={unit}
            />
          </div>
        </div>
      )}
    </div>
  );
}
