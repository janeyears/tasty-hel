import React from 'react';
import { PlaceCard } from './PlaceCard';
import { restaurants } from '../../../types/staticData';
import { ROUTES } from '../../../routes';

export function PlaceList() {
  return (
    <div className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex justify-center sm:mb-8 sm:justify-end">
          <button type="button" className="text-xl text-primary sm:text-2xl lg:text-3xl">
            SHOW MORE →
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-8">
          {restaurants.map((restaurant) => (
            <PlaceCard
              key={restaurant.id}
              href={ROUTES.place(String(restaurant.id))}
              name={restaurant.name}
              image={restaurant.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
