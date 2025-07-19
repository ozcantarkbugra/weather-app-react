import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Leaflet marker icon sorunu için düzeltme
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const Map = ({ city, coordinates, weatherInfo, unit = "metric" }) => {
  if (!coordinates || !coordinates.lat || !coordinates.lon) {
    return (
      <div className="map-container">
        <p>Harita yükleniyor...</p>
      </div>
    );
  }

  return (
    <div className="map-container">
      <MapContainer
        center={[coordinates.lat, coordinates.lon]}
        zoom={10}
        style={{ height: "300px", width: "100%", borderRadius: "10px" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[coordinates.lat, coordinates.lon]}>
          <Popup>
            <div className="map-popup">
              <strong>{city}</strong>
              <br />
              <span>
                Koordinatlar: {coordinates.lat.toFixed(4)},{" "}
                {coordinates.lon.toFixed(4)}
              </span>
              {weatherInfo && (
                <>
                  <br />
                  <span>
                    Sıcaklık: {Math.round(weatherInfo.main?.temp)}
                    {unit === "metric" ? "°C" : "°F"}
                  </span>
                  <br />
                  <span>Nem: {weatherInfo.main?.humidity}%</span>
                  <br />
                  <span>
                    Rüzgar: {weatherInfo.wind?.speed}{" "}
                    {unit === "metric" ? "m/s" : "mph"}
                  </span>
                  <br />
                  <span>Hava: {weatherInfo.weather?.[0]?.description}</span>
                </>
              )}
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
