import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Make sure it's from react-router-dom
import { Menu, X } from 'lucide-react';

export default function NavbarComponent() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 relative">
      <div className="container mx-auto px-4 py-1 flex items-center justify-between relative">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 z-20">
          <div className="w-14 h-14 sm:w-20 sm:h-20 relative">
            <img
              src="/Assets/Nham-Ey_Png.png?height=40&width=40"
              alt="Logo"
              className="object-cover w-full h-full rounded-full"
            />
          </div>
        </NavLink>

        {/* Centered nav */}
        <nav className="hidden md:flex gap-10 text-lg font-semibold absolute left-1/2 transform -translate-x-1/2">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-primary dark:text-[#03dac6]" : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-[#03dac6]"}>
            Home
          </NavLink>
          <NavLink to="/food" className={({ isActive }) => isActive ? "text-primary dark:text-[#03dac6]" : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-[#03dac6]"}>
            Food
          </NavLink>
          <NavLink to="/restaurant" className={({ isActive }) => isActive ? "text-primary dark:text-[#03dac6]" : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-[#03dac6]"}>
            Restaurant
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "text-primary dark:text-[#03dac6]" : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-[#03dac6]"}>
            About Us
          </NavLink>
        </nav>

        {/* Mobile Menu*/}
        <div className="md:hidden z-20">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 dark:text-gray-300 focus:outline-none"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 px-5 pb-4">
          <nav className="flex flex-col gap-3 text-lg font-medium text-left">
            <NavLink to="/" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "text-primary dark:text-[#03dac6]" : "text-gray-700 dark:text-gray-300 hover:text-primary  dark:hover:text-[#03dac6]"}>
              Home
            </NavLink>
            <NavLink to="/food" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "text-primary dark:text-[#03dac6]" : "text-gray-700 dark:text-gray-300 hover:text-primary  dark:hover:text-[#03dac6]"}>
              Food
            </NavLink>
            <NavLink to="/restaurant" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "text-primary dark:text-[#03dac6]" : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-[#03dac6]"}>
              Restaurant
            </NavLink>
            <NavLink to="/about" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "text-primary dark:text-[#03dac6]" : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-[#03dac6]"}>
              About Us
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}
