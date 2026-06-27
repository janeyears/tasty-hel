import React from 'react';
import { RestaurantCard } from './PlaceCard';
import {restaurants} from '../../../types/staticData';
import { ROUTES } from '../../../routes';

export function PlaceList() {
	return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-8 flex justify-end">
          <button className="text-3xl text-primary">
            SHOW MORE →
          </button>
        </div>

        <div className="grid grid-cols-4 gap-8">
          {restaurants.map((restaurants) => (
            <RestaurantCard
              key={restaurants.id}
              href={ROUTES.place(String(restaurants.id))}
              name={restaurants.name}
              image={restaurants.image}
            />
          ))}
        </div>
		<div className="grid grid-cols-4 gap-8 py-8">
          {restaurants.map((restaurants) => (
            <RestaurantCard
              key={restaurants.id}
              href={ROUTES.place(String(restaurants.id))}
              name={restaurants.name}
              image={restaurants.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}