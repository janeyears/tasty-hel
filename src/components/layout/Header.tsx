import React from "react";
import { Link, NavLink  } from "react-router-dom";
import profileIcon from "../../assets/profile.svg";

export function Header() {
  return (
    <header className="border-b-2 border-primary bg-background">
      <div className="flex items-center h-20 px-8">
        {/* LOGO */}
        <Link
          to="/"
          className="font-sans text-5xl font-bold text-primary ml-10 mr-16 tracking-tighter"
        >
          Tasty Hel
        </Link>

        {/* NAV */}
        <nav className="flex flex-1 items-center justify-around font-sans font-extrabold text-primary uppercase tracking-normal">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "underline underline-offset-4"
                : "hover:underline underline-offset-4"
            }
          >
            100% recommendation
          </NavLink>
          <NavLink
            to="/explore"
            className={({ isActive }) =>
              isActive
                ? "underline underline-offset-4"
                : "hover:underline underline-offset-4"
            }
          >
            Let&apos;s explore
          </NavLink>

          <NavLink
            to="/map"
            className={({ isActive }) =>
              isActive
                ? "underline underline-offset-4"
                : "hover:underline underline-offset-4"
            }
          >
            Map
          </NavLink>

          <NavLink
            to="/saved"
            className={({ isActive }) =>
              isActive
                ? "underline underline-offset-4"
                : "hover:underline underline-offset-4"
            }
          >
            Your favourites
          </NavLink>
        </nav>

        {/* PROFILE ICON - LOGIN BUTTON */}
        <Link
          to="/login"
          className="ml-16 mr-10 hover:opacity-70 transition-opacity"
          aria-label="Login"
        >
          <img src={profileIcon} alt="Profile" className="w-8 h-8" />
        </Link>
      </div>
    </header>
  );
}
