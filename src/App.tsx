import React from "react";
import { Header } from "./components/Header";
import { RestaurantList } from "./components/RestaurantList";
import type { Restaurant } from "./types";

const MOCK_RESTAURANTS: Restaurant[] = [
  {
    id: "fika-hub",
    name: "Fika Hub",
    cuisine: "Café · Nordic",
    rating: 4.7,
    priceLevel: "$$",
    location: "Downtown",
    tags: ["cozy", "specialty coffee", "brunch"],
    description: "Light, airy café with Nordic pastries, excellent espresso and a relaxed vibe.",
    website: "#"
  },
  {
    id: "ember-kitchen",
    name: "Ember Kitchen",
    cuisine: "Modern European",
    rating: 4.8,
    priceLevel: "$$$",
    location: "Waterfront",
    tags: ["date night", "tasting menu", "wine"],
    description: "Fire-focused kitchen doing seasonal plates and a chef's tasting menu.",
    website: "#"
  },
  {
    id: "noodle-street",
    name: "Noodle Street",
    cuisine: "Asian Fusion",
    rating: 4.5,
    priceLevel: "$$",
    location: "Market District",
    tags: ["casual", "groups", "late night"],
    description: "Bustling noodle bar with hand-pulled noodles, bao and shareable plates.",
    website: "#"
  }
];

export const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <main className="app-main">
        <section className="app-intro">
          <h2>Curated, not crowded.</h2>
          <p>
            TastyHel is your short list of restaurants actually worth crossing town for.
            Fewer places, better meals.
          </p>
        </section>
        <RestaurantList restaurants={MOCK_RESTAURANTS} />
      </main>
      <footer className="app-footer">
        <small>Made with React &amp; TypeScript · Draft data</small>
      </footer>
    </div>
  );
};

