"use client";
import React, { useState } from "react";

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#introduction", label: "Introduction" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
    { href: "#experience", label: "Experience" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <nav className="bg-gradient-to-r from-[#15307a] to-[#540f8b] shadow-md relative">
      <div className="container mx-auto px-4 py-3">

        <div className="flex md:hidden justify-start">

          <button className="text-white text-2xl focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>

        </div>

        <div className="hidden md:flex justify-center items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}
              className="text-xl font-bold text-white hover:text-[#9494f8] transition-colors duration-300 hover:scale-110">
              {link.label}
            </a>
          ))}
        </div>

        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-gradient-to-r from-[#15307a] to-[#540f8b] shadow-lg md:hidden z-50">

            <div className="flex flex-col space-y-4 py-4">

              {navLinks.map((link) => (

                <a key={link.href} href={link.href}
                  className="text-xl font-bold text-white hover:text-[#9494f8] transition-colors duration-300 text-center"
                  onClick={() => setIsMobileMenuOpen(false)}>
                  {link.label}
                </a>
                
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}