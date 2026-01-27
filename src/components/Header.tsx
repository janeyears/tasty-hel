import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="app-header">
      <div className="app-brand">
        <span className="app-logo">🥐</span>
        <div>
          <h1 className="app-title">TastyHel</h1>
          <p className="app-subtitle">Handpicked restaurants, zero overwhelm.</p>
        </div>
      </div>
      <nav className="app-nav">
        <button className="pill-button pill-button--ghost">All</button>
        <button className="pill-button pill-button--ghost">Date night</button>
        <button className="pill-button pill-button--ghost">Casual</button>
        <button className="pill-button pill-button--ghost">Coffee</button>
      </nav>
    </header>
  );
};

