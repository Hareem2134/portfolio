"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link"; // Import Link for the logo

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
    { href: "#experience", label: "Experience" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contact", label: "Contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  }

  return (
    <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
            scrolled 
                ? 'bg-gradient-to-r from-[#10245acc] to-[#3c0a63cc] shadow-xl py-2 backdrop-blur-md' 
                : 'bg-gradient-to-r from-[#15307a] to-[#540f8b] py-3'
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link href="#home" className="flex items-baseline group" onClick={closeMobileMenu}>
              <span className="text-3xl font-extrabold tracking-tight text-white group-hover:text-blue-300 transition-colors duration-300">
                H
              </span>
              <span className="text-3xl font-extrabold text-blue-400 group-hover:text-white transition-colors duration-300">
                F
              </span>
              {/* If you have an image logo: 
              <Image src="/logo.png" alt="Logo" width={40} height={40} /> 
              */}
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-5 lg:space-x-7">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href}
                className="text-md lg:text-lg font-medium text-gray-200 hover:text-white transition-colors duration-300 relative group"
                onClick={closeMobileMenu}
              >
                {link.label}
                <span className="absolute bottom-[-2px] left-0 w-full h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              type="button"
              className="text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 p-2 rounded-md"
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        id="mobile-menu"
        className={`md:hidden absolute top-full left-0 w-full bg-gradient-to-r from-[#10245ae6] to-[#3c0a63e6] backdrop-blur-md shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100 py-2' : 'max-h-0 opacity-0 py-0'}`}
        style={{ transformOrigin: 'top' }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href}
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-200 hover:bg-white/10 hover:text-white transition-all duration-200"
              onClick={toggleMobileMenu} // Close menu on link click
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}