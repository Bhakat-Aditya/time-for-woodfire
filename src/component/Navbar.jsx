// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="hover:text-orange-400 px-3 py-2 rounded-md text-lg font-medium transition-colors"
  >
    {children}
  </Link>
);

const MobileLink = ({ to, children, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="block hover:text-orange-400 px-3 py-2 text-lg font-medium"
  >
    {children}
  </Link>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md text-white border-b border-orange-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            to="/"
            className="flex-shrink-0 font-bold text-2xl tracking-tighter text-orange-500"
          >
            TIME FOR WOODFIRE
          </Link>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/menu">Menu</NavLink>
              <NavLink to="/gallery">Gallery</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-orange-500 font-bold"
            >
              MENU
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-black text-center py-4 space-y-4 border-b border-orange-800/30">
          <MobileLink to="/" onClick={() => setIsOpen(false)}>
            Home
          </MobileLink>
          <MobileLink to="/menu" onClick={() => setIsOpen(false)}>
            Menu
          </MobileLink>
          <MobileLink to="/gallery" onClick={() => setIsOpen(false)}>
            Gallery
          </MobileLink>
          <MobileLink to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </MobileLink>
        </div>
      )}
    </nav>
  );
}
