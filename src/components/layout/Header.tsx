import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import profileIcon from '../../assets/profile.svg';

export function Header() {
  return (
    <header className="border-b-2 border-primary bg-background">
      <div className="flex flex-col gap-3 px-4 py-4 sm:px-6 md:h-20 md:flex-row md:items-center md:gap-0 md:px-8">
        {/* LOGO */}
        <Link
          to="/"
          className="font-sans text-3xl font-bold text-primary tracking-tighter text-center md:text-left md:text-5xl md:ml-10 md:mr-16"
        >
          Tasty Hel
        </Link>

        {/* NAV */}
        <nav className="flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-2 font-sans font-extrabold text-sm text-primary uppercase tracking-normal sm:text-base md:flex-1 md:justify-around">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? 'underline underline-offset-4' : 'hover:underline underline-offset-4'
            }
          >
            100% recommendation
          </NavLink>
          <NavLink
            to="/explore"
            className={({ isActive }) =>
              isActive ? 'underline underline-offset-4' : 'hover:underline underline-offset-4'
            }
          >
            Let&apos;s explore
          </NavLink>

          <NavLink
            to="/map"
            className={({ isActive }) =>
              isActive ? 'underline underline-offset-4' : 'hover:underline underline-offset-4'
            }
          >
            Map
          </NavLink>

          <NavLink
            to="/saved"
            className={({ isActive }) =>
              isActive ? 'underline underline-offset-4' : 'hover:underline underline-offset-4'
            }
          >
            Your favourites
          </NavLink>
        </nav>

        {/* PROFILE ICON - LOGIN BUTTON */}
        <Link
          to="/login"
          className="self-center transition-opacity hover:opacity-70 md:ml-16 md:mr-10"
          aria-label="Login"
        >
          <img src={profileIcon} alt="Profile" className="h-7 w-7 md:h-8 md:w-8" />
        </Link>
      </div>
    </header>
  );
}
