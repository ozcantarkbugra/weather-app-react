import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = ({ isDark, onToggle }) => {
  return (
    <div className="theme-toggle">
      <button
        className="theme-btn"
        onClick={onToggle}
        title={isDark ? "Açık temaya geç" : "Koyu temaya geç"}
      >
        {isDark ? <FaSun /> : <FaMoon />}
      </button>
    </div>
  );
};

export default ThemeToggle;
