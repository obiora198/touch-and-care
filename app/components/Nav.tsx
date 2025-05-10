'use client'

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const path = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      
      // Detect active section based on scroll position
      const sections = ['hero', 'about', 'services', 'booking'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper function to determine link style
  const getLinkStyle = (linkPath: string, section?: string) => {
    const isActive = path === linkPath || (section && activeSection === section);
    if (isActive) return "text-indigo-600";
    if (scrolled) return "text-gray-900 hover:text-indigo-600";
    return "text-white hover:text-indigo-200";
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-sm" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Touch & Care Logo" width={50} height={50} className="rounded-xl" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`text-sm font-medium transition ${getLinkStyle("/#hero", "hero")}`}>
              Home
            </Link>
            <Link href="#about" className={`text-sm font-medium transition ${getLinkStyle("#about", "about")}`}>
              About
            </Link>
            <Link href="#services" className={`text-sm font-medium transition ${getLinkStyle("#services", "services")}`}>
              Services
            </Link>
            <Link href="#booking" className={`text-sm font-medium transition ${getLinkStyle("#booking", "booking")}`}>
              Booking
            </Link>
            <Link 
              href="#booking" 
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${scrolled ? "bg-indigo-600 text-white hover:bg-indigo-700" : "bg-white text-indigo-600 hover:bg-gray-100"}`}
            >
              Book Now
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
              aria-label="Main menu"
            >
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className={`px-2 pt-2 pb-3 space-y-1 ${scrolled ? 'bg-white' : ''}`}>
          <Link 
            href="/" 
            className={`block px-3 py-2 rounded-md text-base font-medium ${getLinkStyle("/")}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="#about" 
            className={`block px-3 py-2 rounded-md text-base font-medium ${getLinkStyle("#about", "about")}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            href="#services" 
            className={`block px-3 py-2 rounded-md text-base font-medium ${getLinkStyle("#services", "services")}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Services
          </Link>
          <Link 
            href="#booking" 
            className={`block px-3 py-2 rounded-md text-base font-medium ${getLinkStyle("#booking", "booking")}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Booking
          </Link>
          <Link 
            href="#booking" 
            className={`block px-3 py-2 rounded-md text-base font-medium ${scrolled ? "bg-indigo-600 text-white hover:bg-indigo-700" : "bg-white text-indigo-600 hover:bg-gray-100"}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
}