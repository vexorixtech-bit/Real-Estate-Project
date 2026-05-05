import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-[#0A1F44] text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-[#C9A227] text-3xl font-bold">Real</span>
            <span className="text-white text-3xl font-light">Estate</span>
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link to="/" className={`hover:text-[#C9A227] transition ${isActive('/') ? 'text-[#C9A227]' : ''}`}>
              Home
            </Link>
            <Link to="/properties" className={`hover:text-[#C9A227] transition ${isActive('/properties') ? 'text-[#C9A227]' : ''}`}>
              Properties
            </Link>
            <Link to="/contact" className={`hover:text-[#C9A227] transition ${isActive('/contact') ? 'text-[#C9A227]' : ''}`}>
              Contact
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 animate-fadeInDown">
            <Link to="/" className="block py-2 hover:text-[#C9A227] transition-all duration-300 hover:pl-2" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/properties" className="block py-2 hover:text-[#C9A227] transition-all duration-300 hover:pl-2" onClick={() => setIsOpen(false)}>Properties</Link>
            <Link to="/contact" className="block py-2 hover:text-[#C9A227] transition-all duration-300 hover:pl-2" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
