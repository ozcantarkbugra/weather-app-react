import React from "react";
import { FaLocationArrow } from "react-icons/fa";

const LocationButton = ({
  onLocationFound,
  loading,
  useLocationText = "Konumumu Kullan",
}) => {
  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Tarayıcınız konum özelliğini desteklemiyor.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        onLocationFound(latitude, longitude);
      },
      (error) => {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            alert(
              "Konum erişimi reddedildi. Lütfen tarayıcı ayarlarından konum iznini verin."
            );
            break;
          case error.POSITION_UNAVAILABLE:
            alert("Konum bilgisi mevcut değil.");
            break;
          case error.TIMEOUT:
            alert("Konum alma zaman aşımına uğradı.");
            break;
          default:
            alert("Konum alınırken bir hata oluştu.");
        }
      }
    );
  };

  return (
    <button
      className="location-btn"
      onClick={getCurrentLocation}
      disabled={loading}
      title="Mevcut konumumu kullan"
    >
      <FaLocationArrow />
      {loading ? "Konum alınıyor..." : useLocationText}
    </button>
  );
};

export default LocationButton;
