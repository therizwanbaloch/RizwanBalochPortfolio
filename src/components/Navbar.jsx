import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 bg-black text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold text-orange-500">Rizwan Baloch</h1>

        {/* Hamburger Button*/}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          {/* Hamburger*/}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Nav navigation navbar here */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-orange-500 transition duration-200">Home</Link>
          <Link to="/projects" className="hover:text-orange-500 transition duration-200">Projects</Link>
          <Link to="/contact" className="hover:text-orange-500 transition duration-200">Contact Us</Link>
          <Link to="/reviews" className="hover:text-orange-500 transition duration-200">Testimonials</Link>
          <Link
            to="/hireme"
            className="bg-orange-500 text-black px-4 py-2 rounded hover:bg-white hover:text-orange-500 transition duration-200"
          >
            Hire Me
          </Link>
        </div>
      </div>

      {/* mobile view hamburger option */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-black">
          <Link to="/" onClick={toggleMenu} className="block hover:text-orange-500 transition duration-200">Home</Link>
          <Link to="/projects" onClick={toggleMenu} className="block hover:text-orange-500 transition duration-200">Projects</Link>
          <Link to="/contact" onClick={toggleMenu} className="block hover:text-orange-500 transition duration-200">Contact Us</Link>
          <Link to="/reviews" onClick={toggleMenu} className="block hover:text-orange-500 transition duration-200">Testimonials</Link>
          <Link
            to="/hireme"
            onClick={toggleMenu}
            className="block bg-orange-500 text-black px-4 py-2 rounded hover:bg-white hover:text-orange-500 transition duration-200"
          >
            Hire Me
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
