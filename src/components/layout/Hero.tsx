import React from 'react';

export function Hero() {
  return (
    <section className="border-b-2 border-primary">
      <div className="mx-auto max-w-7xl px-8 py-12">
        <div className="grid grid-cols-2 items-center gap-12">
          <h1 className="text-7xl italic font-regular text-primary">
            my personal recommendations from places where I’ve been
          </h1>

          <img
            src="src/assets/main-hero.jpg"
            alt="Main page image"
            className="w-full rounded-3xl object-cover border-2 border-primary"
          />
        </div>
      </div>
    </section>
  );
}
