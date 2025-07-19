import React from "react";
import { FaGlobe } from "react-icons/fa";

const LanguageToggle = ({ language, onLanguageChange }) => {
  const languages = [
    { code: "tr", name: "Türkçe", flag: "🇹🇷" },
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "es", name: "Español", flag: "🇪🇸" },
  ];

  const currentLang = languages.find((lang) => lang.code === language);

  return (
    <div className="language-toggle">
      <div className="language-dropdown">
        <button className="language-btn">
          <FaGlobe />
          <span>
            {currentLang?.flag} {currentLang?.name}
          </span>
        </button>
        <div className="language-options">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`language-option ${
                language === lang.code ? "active" : ""
              }`}
              onClick={() => onLanguageChange(lang.code)}
            >
              {lang.flag} {lang.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageToggle;
