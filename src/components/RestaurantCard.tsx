import React from "react";
import type { Restaurant } from "../types";

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant }) => {
  return (
    <article className="restaurant-card">
      <header className="restaurant-card__header">
        <h3>{restaurant.name}</h3>
        <span className="restaurant-card__rating">
          ⭐ {restaurant.rating.toFixed(1)}
        </span>
      </header>
      <p className="restaurant-card__meta">
        <span>{restaurant.cuisine}</span>
        <span>·</span>
        <span>{restaurant.location}</span>
        <span>·</span>
        <span>{restaurant.priceLevel}</span>
      </p>
      <p className="restaurant-card__description">{restaurant.description}</p>
      <div className="restaurant-card__tags">
        {restaurant.tags.map((tag) => (
          <span key={tag} className="tag-chip">
            {tag}
          </span>
        ))}
      </div>
      {restaurant.website && (
        <a
          className="restaurant-card__link"
          href={restaurant.website}
          target="_blank"
          rel="noreferrer"
        >
          View details
        </a>
      )}
    </article>
  );
};

