import React from "react";
import { RiCelsiusFill } from "react-icons/ri";

const UnitToggle = ({ unit, onToggle }) => {
  return (
    <div className="unit-toggle">
      <button
        className={`unit-btn ${unit === "metric" ? "active" : ""}`}
        onClick={() => onToggle("metric")}
        title="Celsius"
      >
        <RiCelsiusFill />
      </button>
      <button
        className={`unit-btn ${unit === "imperial" ? "active" : ""}`}
        onClick={() => onToggle("imperial")}
        title="Fahrenheit"
      >
        °F
      </button>
    </div>
  );
};

export default UnitToggle;
