import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between">
        {/* Branding */}
        <div className="mb-6 md:mb-0">
          <h2 className="script-font text-4xl">Brand Minimal</h2>
          <p className="uppercase tracking-widest text-xs">S T U D I O</p>
        </div>
        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#about" className="nav-link uppercase tracking-wider hover:text-gray-400 transition-colors">ABOUT</a>
            </li>
            <li>
              <a href="#services" className="nav-link uppercase tracking-wider hover:text-gray-400 transition-colors">SERVICES</a>
            </li>
            <li>
              <a href="#work" className="nav-link uppercase tracking-wider hover:text-gray-400 transition-colors">WORK</a>
            </li>
            <li>
              <a href="#blog" className="nav-link uppercase tracking-wider hover:text-gray-400 transition-colors">BLOG</a>
            </li>
            <li>
              <a href="#contact" className="nav-link uppercase tracking-wider hover:text-gray-400 transition-colors">CONTACT</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4">
        <p className="text-center text-sm text-gray-400">© 2025 Brand Minimal. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
