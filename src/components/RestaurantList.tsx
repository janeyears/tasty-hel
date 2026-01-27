import React from "react";
import type { Restaurant } from "../types";
import { RestaurantCard } from "./RestaurantCard";

interface RestaurantListProps {
  restaurants: Restaurant[];
}

export const RestaurantList: React.FC<RestaurantListProps> = ({ restaurants }) => {
  return (
    <section className="restaurant-list">
      <h2 className="section-title">Recommended this week</h2>
      <div className="restaurant-list__grid">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </section>
  );
};

