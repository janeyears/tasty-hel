import React from 'react';
import { Hero } from '../components/layout/Hero';
import { PlaceList } from '../components/features/places/PlaceList';

const HomePage = () => {
  return (
    <div>
      <Hero
        title="my personal recommendations from places where I’ve been"
        image={new URL('../assets/main-hero.jpg', import.meta.url).toString()}
        imageAlt="Main page image"
      />
      <PlaceList />
    </div>
  );
};

export default HomePage;
