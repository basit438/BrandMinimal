import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ theme = 'dark' }) => {
  const textColor = theme === 'dark' ? 'text-white' : 'text-black';
  
  return (
    <nav className="absolute top-5 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-8">
        <ul className="flex justify-end space-x-8">
          <li>
            <a href="#about" className={`nav-link uppercase tracking-wider ${textColor}`}>
              ABOUT
            </a>
          </li>
          <li>
            <a href="#services" className={`nav-link uppercase tracking-wider ${textColor}`}>
              SERVICES
            </a>
          </li>
          <li>
            <a href="#work" className={`nav-link uppercase tracking-wider ${textColor}`}>
              WORK
            </a>
          </li>
          <li>
            <a href="#blog" className={`nav-link uppercase tracking-wider ${textColor}`}>
              BLOG
            </a>
          </li>
          <li>
            <a href="#contact" className={`nav-link uppercase tracking-wider ${textColor}`}>
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;