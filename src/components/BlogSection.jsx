import React from 'react';

const BlogSection = () => {
  return (
    <section id="blog" className="min-h-screen bg-gray-50 py-20 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Logo / Heading */}
        <div className="mb-24">
          <h1 className="script-font text-black text-4xl mb-1">Brand Minimal</h1>
          <p className="text-black uppercase tracking-widest text-xs">S T U D I O</p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
          {/* Blog Content */}
          <div className="lg:w-2/3">
            <h2 className="text-2xl uppercase tracking-wider mb-8">Blog Title</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              It has survived not only five centuries, but also the leap into electronic typesetting, 
              remaining essentially unchanged. 
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
    </section>
  );
};

export default BlogSection;