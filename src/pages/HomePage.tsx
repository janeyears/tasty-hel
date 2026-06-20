import React from 'react';
import { Hero } from '../components/layout/Hero';
import { PlaceList } from '../components/features/places/PlaceList';

const HomePage = () => {
  return (
    <div>
      <Hero title="my personal recommendations from places where I’ve been" image="src/assets/main-hero.jpg" imageAlt="Main page image" />
	  <PlaceList />
    </div>
  );
};

export default HomePage;
