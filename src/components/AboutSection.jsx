import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen bg-gray-50 py-20 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Logo in About section */}
        <div className="mb-24">
          <h1 className="script-font text-black text-4xl mb-1">Brand Minimal</h1>
          <p className="text-black uppercase tracking-widest text-xs">S T U D I O</p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
          {/* About content */}
          <div className="lg:w-2/3">
            <h2 className="text-2xl uppercase tracking-wider mb-8">ABOUT US</h2>
            <div className="space-y-6">
              <p className="fade-in">
                With seven years of experience in helping brands build strong identities and a powerful
                online presence, we believe great design goes beyond aesthetics—it should tell a story, create
                connections, and drive growth.
              </p>
              <p className="fade-in">
                We don't just offer services—we create tailored solutions that help your brand grow and
                thrive. Every project is built on strategy, creativity, and a deep understanding of your
                business needs. Whether it's branding, web design, or social media management, we focus
                on results that go beyond aesthetics ensuring your brand connects, engages, and leaves a
                lasting impact. Through collaboration and a refined process, we make sure every detail
                aligns with your vision, delivering work that not only looks great but also drives real success.
              </p>
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
        
        {/* Navigation arrows */}
        <div className="flex justify-end mt-16">
          <button className="mx-2 text-gray-400 hover:text-black transition-colors">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className="mx-2 text-gray-400 hover:text-black transition-colors">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;