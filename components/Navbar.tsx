// components/Navbar.tsx
"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerButtonRef = useRef<HTMLButtonElement>(null); // Ref for the hamburger button

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

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node) &&
        hamburgerButtonRef.current && !hamburgerButtonRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  }

  return (
    <nav 
        className={`fixed top-0 left-0 w-full max-w-[100vw] z-50 transition-all duration-300 ease-in-out overflow-x-hidden ${
            scrolled 
                ? 'bg-gradient-to-r from-[#10245acc] to-[#3c0a63cc] shadow-xl py-2 backdrop-blur-md' 
                : 'bg-gradient-to-r from-[#15307a] to-[#540f8b] py-3'
        }`}
    >
      {/* Main navbar container */}
      <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8 w-full"> {/* This w-full now refers to a parent explicitly constrained to viewport width */}
          {/* Logo Section */}
          <div className="flex-shrink-0 z-10">
            <Link href="#home" className="flex items-baseline group" onClick={closeMobileMenu}>
              <span className="text-3xl font-extrabold tracking-tight text-white group-hover:text-blue-300 transition-colors duration-300">H</span>
              <span className="text-3xl font-extrabold text-blue-400 group-hover:text-white transition-colors duration-300">F</span>
            </Link>
          </div>
          
          {/* Desktop Menu - Hidden on mobile, centered on desktop */}
          <div className="hidden md:flex absolute inset-x-0 justify-center items-center">
            <div className="flex space-x-4 lg:space-x-6">
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
          </div>

          {/* Mobile Menu Button - Shown only on mobile */}
          <div className="md:hidden z-10">
            <button 
              ref={hamburgerButtonRef} // Assign ref
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
              )}
            </button>
          </div>
      </div>

      {/* Mobile Menu - Dropdown */}
      <div
        ref={mobileMenuRef}
        id="mobile-menu"
        className={`md:hidden absolute top-full left-0 w-full bg-gradient-to-r from-[#10245ae6] to-[#3c0a63e6] backdrop-blur-md shadow-lg transition-all duration-300 ease-in-out transform origin-top overflow-hidden
          ${ isMobileMenuOpen
            ? 'max-h-[calc(100vh-4rem)] opacity-100 scale-y-100 py-3 visible'
            : 'max-h-0 opacity-0 scale-y-95 py-0 invisible pointer-events-none' // Added pointer-events-none
          }`}
      >
        {/* Content only rendered if menu is open to ensure no layout impact when closed */}
        {isMobileMenuOpen && (
          <div className="px-2 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href}
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-200 hover:bg-white/10 hover:text-white transition-all duration-200 text-center"
                onClick={closeMobileMenu} 
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}