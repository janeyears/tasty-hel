import React from 'react';
import { Link } from 'react-router-dom';

interface PlaceCardProps {
  href: string;
  name: string;
  image: string;
}

export function PlaceCard({ href, name, image }: PlaceCardProps) {
  return (
    <article>
      <Link to={href} className="block">
        <img
          src={image}
          alt={name}
          className="aspect-square w-full rounded-3xl border-2 border-primary object-cover"
        />
        <span className="mt-4 inline-flex items-center gap-2 font-semibold underline">
          {name} →
        </span>
      </Link>
    </article>
  );
}
