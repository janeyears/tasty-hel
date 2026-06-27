import React from 'react';

interface RestaurantCardProps {
  href: string;
  name: string;
  image: string;
}

export function RestaurantCard({ href, name, image }: RestaurantCardProps) {
  return (
    <article>
      <a href={href} className="block">
        <img
          src={image}
          alt={name}
          className="aspect-square w-full rounded-3xl border-2 border-primary object-cover"
        />
        <span className="mt-4 inline-flex items-center gap-2 font-semibold underline">
          {name} →
        </span>
      </a>
    </article>
  );
}
