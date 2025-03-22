import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const projects = [
  {
    id: 1,
    title: "Elegance Redefined",
    description: "A comprehensive branding project for a luxury fashion label, focused on minimalist design principles while maintaining a sense of sophistication and exclusivity.",
    services: "Brand Strategy, Visual Identity, Packaging Design",
    imageUrl: "https://mir-s3-cdn-cf.behance.net/02d521d1652a868e2efbca9e86c3c8af/1e411eaa-9bd3-454a-8643-db10ba465767_rwc_0x-922x4961x8858x720.jpg?h=bd020c5454f4646f704bd2868775dfa0"
  },
  {
    id: 2,
    title: "Urban Digest",
    description: "A digital magazine platform that brings together urban culture, design, and sustainability, featuring an intuitive reading experience and bold visual direction.",
    services: "UX/UI Design, Web Development, Content Strategy",
    imageUrl: "https://mir-s3-cdn-cf.behance.net/a0a3a7c926cd365e4ee48dd8d0bf9e00/655d006d-ad59-4cae-84b6-c9ba99439cce_rwc_0x-6x1080x1928x720.jpg?h=200c5633767f59afbcbc2ecd2040aff7"
  },
  {
    id: 3,
    title: "Botanical Essence",
    description: "A complete brand identity system for an eco-conscious skincare line, emphasizing natural ingredients and sustainable packaging through a clean, organic visual language.",
    services: "Branding, Packaging Design, Photography Direction",
    imageUrl: "https://mir-s3-cdn-cf.behance.net/0164728935026f0083c95182f88181ca/f692ab75-82d2-459c-ae33-2e1ef4f5b6cb_rwc_483x-388x1612x2879x720.jpg?h=2db567375c737ee0f1e57da9a6b59e76"
  }
];

const WorkSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrollingLocked, setIsScrollingLocked] = useState(false);
  const [isInWorkSection, setIsInWorkSection] = useState(false);
  const workSectionRef = useRef(null);
  const scrollDelay = 800; // ms
  
  const totalProjects = projects.length;
  
  // Format current project number with leading zero
  const formattedCurrentProject = (currentIndex + 1).toString().padStart(2, '0');
  const formattedTotalProjects = totalProjects.toString().padStart(2, '0');
  
  useEffect(() => {
    const updateSectionStatus = () => {
      if (!workSectionRef.current) return;
      
      const rect = workSectionRef.current.getBoundingClientRect();
      const thresholdTop = 200;
      const thresholdBottom = window.innerHeight / 2;
      
      setIsInWorkSection(
        rect.top <= thresholdTop && 
        rect.bottom >= thresholdBottom
      );
    };
    
    const handleWheel = (event) => {
      updateSectionStatus();
      
      if (isInWorkSection && !isScrollingLocked) {
        // Check if we're at the last project and trying to go forward
        if (currentIndex === totalProjects - 1 && event.deltaY > 0) {
          return; // Allow regular scrolling to continue
        }
        
        // Check if we're at the first project and trying to go backward
        if (currentIndex === 0 && event.deltaY < 0) {
          return; // Allow regular scrolling to previous section
        }
        
        // Prevent default vertical scrolling
        event.preventDefault();
        
        // Lock scrolling during transition
        setIsScrollingLocked(true);
        
        // Determine scroll direction and move
        if (event.deltaY > 0) {
          // Scrolling down, go to next project
          setCurrentIndex(prev => Math.min(prev + 1, totalProjects - 1));
        } else {
          // Scrolling up, go to previous project
          setCurrentIndex(prev => Math.max(prev - 1, 0));
        }
        
        // Unlock scrolling after transition
        setTimeout(() => {
          setIsScrollingLocked(false);
        }, scrollDelay);
      }
    };
    
    // Keyboard navigation
    const handleKeyDown = (e) => {
      updateSectionStatus();
      
      if (isInWorkSection && !isScrollingLocked) {
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
          if (currentIndex < totalProjects - 1) {
            e.preventDefault();
            setIsScrollingLocked(true);
            setCurrentIndex(prev => Math.min(prev + 1, totalProjects - 1));
            setTimeout(() => setIsScrollingLocked(false), scrollDelay);
          }
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
          if (currentIndex > 0) {
            e.preventDefault();
            setIsScrollingLocked(true);
            setCurrentIndex(prev => Math.max(prev - 1, 0));
            setTimeout(() => setIsScrollingLocked(false), scrollDelay);
          }
        }
      }
    };
    
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', updateSectionStatus);
    document.addEventListener('keydown', handleKeyDown);
    
    // Initial check
    updateSectionStatus();
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', updateSectionStatus);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, isInWorkSection, isScrollingLocked, totalProjects]);
  
  const goToProject = (index) => {
    if (isScrollingLocked) return;
    
    setIsScrollingLocked(true);
    setCurrentIndex(Math.min(Math.max(0, index), totalProjects - 1));
    setTimeout(() => setIsScrollingLocked(false), scrollDelay);
  };
  
  return (
    <section id="work" ref={workSectionRef} className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
        {/* Logo / Heading */}
        <div className="mb-16">
          <h1 className="script-font text-black text-4xl mb-1">Brand Minimal</h1>
          <p className="text-black uppercase tracking-widest text-xs">S T U D I O</p>
        </div>
  
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
          {/* Work Heading */}
          <div className="lg:w-2/3">
            <h2 className="text-2xl uppercase tracking-wider mb-8">Our Work</h2>
            <p className="mb-6">
              Explore some of our favorite projects that showcase our approach to design, branding, 
              and digital experiences. From strategy to execution, we help bring brands to life with 
              thoughtful creativity and a focus on results.
            </p>
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
  
      {/* Full width horizontal scrolling project container */}
      <div className="relative overflow-hidden mt-16">
        {/* Project Navigation Controls */}
        <div className="absolute top-1/2 left-8 z-10 transform -translate-y-1/2">
          <button 
            onClick={() => goToProject(currentIndex - 1)}
            className="text-2xl bg-white bg-opacity-70 w-12 h-12 rounded-full flex items-center justify-center focus:outline-none hover:bg-opacity-100 transition-all"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
        </div>
        
        <div className="absolute top-1/2 right-8 z-10 transform -translate-y-1/2">
          <button 
            onClick={() => goToProject(currentIndex + 1)}
            className="text-2xl bg-white bg-opacity-70 w-12 h-12 rounded-full flex items-center justify-center focus:outline-none hover:bg-opacity-100 transition-all"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
  
        {/* Project Counter */}
        <div className="absolute bottom-8 left-8 z-10">
          <div className="text-xl font-light">
            <span>{formattedCurrentProject}</span> / <span>{formattedTotalProjects}</span>
          </div>
        </div>
  
        {/* Horizontal Scrolling Projects Container */}
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {projects.map((project) => (
            <div key={project.id} className="project-slide px-8 md:px-16 lg:px-24 py-12 flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
                <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 pl-0 md:pl-8">
                <h3 className="text-4xl mb-4">{project.title}</h3>
                <p className="text-lg text-gray-600 mb-6">
                  {project.description}
                </p>
                <div className="mb-8">
                  <h4 className="text-sm uppercase tracking-wider mb-2">Services</h4>
                  <p className="text-gray-600">{project.services}</p>
                </div>
                <a href="#" className="inline-block border-b border-black pb-1 hover:border-gray-500 transition-colors">
                  View Case Study
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;