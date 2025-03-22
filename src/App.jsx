import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import WorkSection from './components/WorkSection';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CursorBall from './components/CursorBall';

function App() {
  const [scrollOpacity, setScrollOpacity] = useState(1);

  // Function to handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      // Calculate opacity based on scroll position
      const opacity = Math.max(0, 1 - window.scrollY / 400);
      setScrollOpacity(opacity);
      
      // Fade in elements when scrolled into view
      const fadeElements = document.querySelectorAll('.fade-in');
      fadeElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
          element.classList.add('visible');
        }
      });
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initialize fade elements on page load
    window.dispatchEvent(new Event('scroll'));
    
    // Cleanup on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <CursorBall />
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection opacity={scrollOpacity} />
              <AboutSection />
              <ServicesSection />
              <WorkSection />
              <BlogSection />
              <ContactSection />
              <Footer />
            </>
          } />
          <Route path="/work" element={<WorkSection detailed />} />
          <Route path="/blog" element={<BlogSection expanded />} />
          <Route path="/contact" element={<ContactSection standalone />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;