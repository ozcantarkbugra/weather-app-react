import React from "react";
import { FaHeart, FaTrash } from "react-icons/fa";
import { translations } from "../utils/translations";

const Favorites = ({
  favorites,
  onFavoriteClick,
  onRemoveFavorite,
  language = "tr",
}) => {
  const t = translations[language] || translations.tr;

  if (favorites.length === 0) {
    return null;
  }

  return (
    <div className="favorites-section">
      <h3>{t.favoriteCities}</h3>
      <div className="favorites-container">
        {favorites.map((favorite, index) => (
          <div key={index} className="favorite-item">
            <button
              className="favorite-btn"
              onClick={() => onFavoriteClick(favorite)}
              title={`${favorite} hava durumunu göster`}
            >
              <FaHeart className="heart-icon" />
              {favorite}
            </button>
            <button
              className="remove-favorite-btn"
              onClick={() => onRemoveFavorite(favorite)}
              title="Favorilerden kaldır"
            >
              <FaTrash />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
