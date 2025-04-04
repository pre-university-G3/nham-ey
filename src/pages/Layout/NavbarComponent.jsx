import React from 'react';
import { NavLink } from 'react-router';
import { Search } from 'lucide-react';

export default function NavbarComponent() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <NavLink to="/" className="flex items-center gap-2">
            <div className="w-20 h-20 relative">
              <img
                src="/Assets/Nham-Ey_Png.png?height=40&width=40"
                alt="Logo"
                className="object-cover w-full h-full rounded-full"
               
              />
            </div>
            
          </NavLink>

          <nav className="hidden md:flex items-center gap-8 text-2xl font-semibold">
            <NavLink to="/" className={({ isActive }) => isActive ? "text-primary  " : "text-gray-700  hover:text-primary"}>
              Home
            </NavLink>
            <NavLink to="/food" className={({ isActive }) => isActive ? "text-primary " : "text-gray-700  hover:text-primary"}>
              Food
            </NavLink>
            <NavLink to="/restaurant" className={({ isActive }) => isActive ? "text-primary  " : "text-gray-700  hover:text-primary"}>
              Restaurant
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "text-primary " : "text-gray-700  hover:text-primary"}>
              About Us
            </NavLink>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-1 focus:ring-hover-primary focus:border-hover-primary"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          </div>

          {/* <NavLink to="/wishlist" 
          className="bg-primary text-white px-5 py-2 rounded-lg hover:bg-primary-dark transition-colors">
            Wishlist
          </NavLink> */}

        </div>
      </div>
    </header>
  );
}
