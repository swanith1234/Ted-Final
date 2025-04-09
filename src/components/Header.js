import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Speakers', path: '/speakers' },
  { name: 'Schedule', path: '/schedule' },
  { name: 'Partners', path: '/partners' },
  { name: 'Contact', path: '/contact' },
];

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const mobileMenuVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: 'auto', transition: { duration: 0.3 } },
};

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  return (
    <motion.header
      className="bg-black text-white fixed top-0 left-0 w-full z-50 shadow-lg"
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo and Tagline */}
        <Link to="/" className="flex flex-col">
          <div className="flex items-center space-x-2">
            <span className="text-red-600 font-bold text-xl">TEDx</span>
            <span className="text-white font-bold text-xl">SriVenkateswaraU</span>
          </div>
          <span className="text-sm text-gray-400">Ideas Worth Spreading</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-lg">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              to={link.path}
              className="hover:text-red-500 transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle Mobile Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu with AnimatePresence */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            className="md:hidden bg-black text-white shadow-lg"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
          >
            <ul className="flex flex-col space-y-4 p-4">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="hover:text-red-500 transition-colors duration-300"
                    onClick={toggleMobileMenu}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
