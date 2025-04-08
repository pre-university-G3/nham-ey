import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router';
import { Menu, X } from 'lucide-react';

export default function NavbarComponent() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setMenuOpen(false);
  };

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-lime-600 font-semibold transition-colors duration-200"
      : "text-gray-700 hover:text-lime-600 transition-colors duration-200";

  return (
    <header className="bg-white shadow-sm h-16 sticky top-0 z-50 p-10">
      <div className="mx-auto flex h-full max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo - Left aligned */}
        <div className="flex-shrink-0">
          <NavLink to="/" className="block">
            <img
              src="./src/images/Nham-Ey.png"
              alt="nham ey logo"
              className="h-20 w-auto"
            />
          </NavLink>
        </div>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden md:flex mx-8 flex-1 justify-center">
          <ul className="flex items-center space-x-8 text-lg font-medium">
            <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
            <li><NavLink to="/food" className={navLinkClass}>Food</NavLink></li>
            <li><NavLink to="/restaurant" className={navLinkClass}>Restaurant</NavLink></li>
            <li><NavLink to="/about" className={navLinkClass}>About Us</NavLink></li>
          </ul>
        </nav>

        {/* Auth Buttons - Right aligned */}
        <div className="hidden md:flex items-center space-x-4">
          {isAuthenticated ? (
            <div className="flex items-center space-x-4">
              <NavLink to="/profile" className="px-4 py-2 text-gray-700 hover:text-lime-600 transition-colors duration-200">
                Profile
              </NavLink>
              <NavLink to="/wishlist" className="px-4 py-2 bg-lime-600 text-white rounded-md hover:bg-lime-700 transition-colors duration-200">
                Wishlist
              </NavLink>
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-red-600 hover:text-white hover:bg-red-600 rounded-md transition-colors duration-200"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <NavLink to="/login" className="px-4 py-2 text-gray-700 hover:text-lime-600 transition-colors duration-200">
                Login
              </NavLink>
              <NavLink to="/register" className="px-4 py-2 bg-lime-600 text-white rounded-md hover:bg-lime-700 transition-colors duration-200">
                Register
              </NavLink>
            </div>
          )}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-lime-600 focus:outline-none"
          >
            <span className="sr-only">Open menu</span>
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg py-4 px-6">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/" className={navLinkClass} onClick={() => setMenuOpen(false)}>Home</NavLink>
            <NavLink to="/food" className={navLinkClass} onClick={() => setMenuOpen(false)}>Food</NavLink>
            <NavLink to="/restaurant" className={navLinkClass} onClick={() => setMenuOpen(false)}>Restaurant</NavLink>
            <NavLink to="/about" className={navLinkClass} onClick={() => setMenuOpen(false)}>About Us</NavLink>
          </div>

          <div className="pt-4 pb-2 border-t border-gray-200">
            {isAuthenticated ? (
              <div className="space-y-3">
                <NavLink to="/profile" className="block w-full px-4 py-2 text-base font-medium text-gray-700 hover:text-lime-600" onClick={() => setMenuOpen(false)}>
                  Profile
                </NavLink>
                <NavLink to="/wishlist" className="block w-full px-4 py-2 text-center text-base font-medium text-white bg-lime-600 rounded-md hover:bg-lime-700" onClick={() => setMenuOpen(false)}>
                  Wishlist
                </NavLink>
                <button
                  onClick={handleLogout}
                  className="block w-full px-4 py-2 text-base font-medium text-red-600 hover:text-white hover:bg-red-600 rounded-md"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                <NavLink to="/login" className="block w-full px-4 py-2 text-base font-medium text-gray-700 hover:text-lime-600" onClick={() => setMenuOpen(false)}>
                  Login
                </NavLink>
                <NavLink to="/register" className="block w-full px-4 py-2 text-center text-base font-medium text-white bg-lime-600 rounded-md hover:bg-lime-700" onClick={() => setMenuOpen(false)}>
                  Register
                </NavLink>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
