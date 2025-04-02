import React from 'react';
import { NavLink } from 'react-router';

import { Navbar, NavbarBrand, NavbarToggle, NavbarCollapse } from 'flowbite-react';

export default function NavbarComponent() {
  return (
    <header className="bg-white shadow-sm mx-auto">
      <div className=" px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <NavLink to="/">
            <img src="/final-project-pug3/public/Assets/Nham-Ey_Png.png" alt="Logo" width={40} height={40} className="rounded-full" />
          </NavLink>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/" className="text-gray-700 hover:text-green-500">
            Home
          </NavLink>
          <NavLink to="/food" className="text-gray-700 hover:text-green-500">
            Food
          </NavLink>
          <NavLink to ="/restaurant" className="text-gray-700 hover:text-green-500">
            Restaurant
          </NavLink>
          <NavLink to ="/about" className="text-gray-700 hover:text-green-500">
            About Us
          </NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="pl-8 pr-3 py-1 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
            />
            <svg
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <NavLink to="/login" className="text-sm text-gray-700 hover:text-green-500">
            Log In
          </NavLink>

          <NavLink to="/register" className="text-sm bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600">
            Register
          </NavLink>
        </div>
      </div>
    </header>
  );
}
