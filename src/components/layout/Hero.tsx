import React from 'react';

interface HeroProps {
  title: string;
  image: string;
  imageAlt?: string;
}

export function Hero({ title, image, imageAlt }: HeroProps) {
  return (
    <section className="border-b-2 border-primary">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <div className="grid items-center gap-6 xl:grid-cols-2 xl:gap-12">
          <h1 className="text-4xl font-normal italic text-primary sm:text-5xl lg:text-7xl">
            {title}
          </h1>

          <img
            src={image}
            alt={imageAlt}
            className="w-full rounded-2xl border-2 border-primary object-cover sm:rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
}
