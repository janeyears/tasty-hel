import React from 'react';

interface RestaurantCardProps {
  name: string;
  image: string;
}

export function RestaurantCard({ name, image }: RestaurantCardProps) {
  return (
    <article>
      <img
        src={image}
        alt={name}
        className=" aspect-square w-full rounded-3xl border-2 border-primary object-cover"
      />
      <a href="#" className="mt-4 inline-flex items-center gap-2 font-semibold underline">
        {name} →
      </a>
    </article>
  );
}
