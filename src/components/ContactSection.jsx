import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="min-h-screen bg-gray-50 py-20 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Logo / Heading */}
        <div className="mb-24">
          <h1 className="script-font text-black text-4xl mb-1">Brand Minimal</h1>
          <p className="text-black uppercase tracking-widest text-xs">S T U D I O</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
          {/* Contact Form / Info */}
          <div className="lg:w-2/3">
            <h2 className="text-2xl uppercase tracking-wider mb-8">Contact Us</h2>
            <p className="mb-6">
              Have a question or want to discuss a project? We’d love to hear from you. Fill out the form below or 
              drop us an email at <strong>info@brandminimal.com</strong> and we’ll get back to you soon.
            </p>

            {/* Contact Form */}
            <form action="#" method="POST" className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-black"
                  placeholder="Your Name" 
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-black"
                  placeholder="you@example.com" 
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-black"
                  placeholder="Tell us about your project..."
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="bg-black text-white px-6 py-2 uppercase tracking-wider hover:bg-gray-800 transition-colors"
              >
                Send
              </button>
            </form>
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

export default ContactSection;
