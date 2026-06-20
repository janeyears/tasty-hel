import React from 'react';

interface HeroProps {
  title: string;
  image: string;
  imageAlt?: string;
};


export function Hero({ title, image, imageAlt }: HeroProps) {
  return (
    <section className="border-b-2 border-primary">
      <div className="mx-auto max-w-7xl px-8 py-12">
        <div className="grid grid-cols-2 items-center gap-12">
          <h1 className="text-7xl italic font-regular text-primary">
            {title}
          </h1>

          <img
            src={image}
            alt={imageAlt}
            className="w-full rounded-3xl object-cover border-2 border-primary"
          />
        </div>
      </div>
    </section>
  );
}
