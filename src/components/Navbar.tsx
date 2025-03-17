
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4",
        scrolled ? "bg-pearl/95 shadow-sm backdrop-blur-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-2xl font-arabic text-teal">
            <span className="text-gold">ر</span>فق
          </span>
          <span className="ml-2 text-xl font-semibold">Reefq</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-teal hover:text-gold transition-colors">Home</a>
          <a href="#about" className="text-teal hover:text-gold transition-colors">About</a>
          <a href="#services" className="text-teal hover:text-gold transition-colors">Services</a>
          <a href="#contact" className="text-teal hover:text-gold transition-colors">Contact</a>
          <button className="bg-teal text-pearl px-6 py-2 rounded-md hover:bg-gold transition-colors">
            Connect
          </button>
        </div>
        
        {/* Mobile Navigation Button */}
        <div className="md:hidden">
          <button 
            className="text-teal focus:outline-none" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div 
        className={cn(
          "md:hidden bg-pearl/95 backdrop-blur-sm absolute w-full left-0 transition-all duration-300 ease-in-out",
          mobileMenuOpen ? "opacity-100 max-h-[300px]" : "opacity-0 max-h-0 invisible"
        )}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <a href="#home" className="text-teal hover:text-gold transition-colors py-2 border-b border-gray-100">Home</a>
          <a href="#about" className="text-teal hover:text-gold transition-colors py-2 border-b border-gray-100">About</a>
          <a href="#services" className="text-teal hover:text-gold transition-colors py-2 border-b border-gray-100">Services</a>
          <a href="#contact" className="text-teal hover:text-gold transition-colors py-2">Contact</a>
          <button className="bg-teal text-pearl px-6 py-2 rounded-md hover:bg-gold transition-colors w-full">
            Connect
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
