import React from 'react';

const ServicesSection = () => {
  return (
    <section id="services" className="min-h-screen bg-gray-50 py-20 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Logo / Heading */}
        <div className="mb-24">
          <h1 className="script-font text-black text-4xl mb-1">Brand Minimal</h1>
          <p className="text-black uppercase tracking-widest text-xs">S T U D I O</p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
          {/* Main Content (Services) */}
          <div className="lg:w-2/3">
            <h2 className="text-2xl uppercase tracking-wider mb-8">Services</h2>
            
            {/* Two-column list of services */}
            <div className="flex flex-col md:flex-row gap-10">
              {/* Left column */}
              <div className="space-y-2">
                <p>Branding & Design</p>
                <p>Website Design & Development</p>
                <p>Social Media & Marketing</p>
              </div>
              
              {/* Right column */}
              <div className="space-y-2">
                <p>Brand Strategy & Identity</p>
                <p>Rebranding</p>
                <p>Logo & Visual Identity Design</p>
                <p>Packaging Design</p>
                <p>Brand Guidelines</p>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="lg:w-1/3 lg:text-right mt-10 lg:mt-0">
            <nav>
              <ul className="space-y-4">
                <li><a href="#about" className="nav-link uppercase tracking-wider">ABOUT</a></li>
                <li><a href="#services" className="nav-link uppercase tracking-wider">SERVICES</a></li>
                <li><a href="#work" className="nav-link uppercase tracking-wider">WORK</a></li>
                <li><a href="#blog" className="nav-link uppercase tracking-wider">BLOG</a></li>
                <li><a href="#contact" className="nav-link uppercase tracking-wider">CONTACT</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;