import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Navbar - Red Background with Logo */}
      <div
        className={`bg-primary text-white transition-all duration-300 ${
          isScrolled ? "h-0 opacity-0 overflow-hidden" : "h-auto opacity-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-center items-center">
          <Link to="/">
            <img 
              src="/assets/logo.png" 
              alt="ACTUATE" 
              className="h-12 drop-shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </Link>
        </div>
      </div>

      {/* Bottom Navbar - White Background with Navigation */}
      <nav
        className={`bg-white shadow-md transition-all duration-300 ${
          isScrolled ? "fixed top-0 left-0 right-0 z-50" : "relative"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* Show ACTUATE logo when scrolled */}
          {isScrolled && (
            <Link to="/">
              <img 
                src="/assets/red-logo.png" 
                alt="ACTUATE" 
                className="h-8 hover:scale-105 transition-transform duration-300"
              />
            </Link>
          )}

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex gap-8 text-gray-700 font-medium">
            <a href="#catalogue" className="hover:text-primary transition-colors">
              Catalogue
            </a>
            <Link to="/contact" className="hover:text-primary transition-colors">
              Contact Us
            </Link>
          </div>

          {/* Desktop Request Demo Button */}
          <Link to="/contact">
            <button className="hidden md:block bg-primary text-white px-6 py-2 rounded-md font-semibold text-sm hover:bg-red-600 transition">
              Request Demo
            </button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-64 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-4 py-4 border-t border-gray-200">
            <a 
              href="#catalogue" 
              className="text-gray-700 font-medium hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Catalogue
            </a>
            <Link 
              to="/contact" 
              className="text-gray-700 font-medium hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Link to="/contact">
              <button 
                className="bg-primary text-white px-6 py-2 rounded-md font-semibold text-sm hover:bg-red-600 transition w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Request Demo
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
