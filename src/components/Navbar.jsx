import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isCatalogueOpen, setIsCatalogueOpen] = useState(false);

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

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setIsResourcesOpen(false);
    setIsCatalogueOpen(false);
  };

  // Catalogue dropdown items
  const catalogueItems = [
    { label: "Soft Skills", link: "https://actuatemicrolearning.com/soft-skills" },
    { label: "Managerial and Leadership Skills", link: "https://actuatemicrolearning.com/leadership-skills" },
    { label: "Cognitive Skills", link: "https://actuatemicrolearning.com/cognitive-skills" },
    { label: "Technical Skills", link: "https://actuatemicrolearning.com/technical-skills" },
    { label: "HR & Compliance", link: "https://actuatemicrolearning.com/hr-compliance" }
  ];

  // Resources dropdown organized by category
  const resourcesCategories = {
    subjects: {
      title: "Blog Subjects",
      items: [
        { label: "Leadership & Management", link: "https://actuatemicrolearning.com/leadership-management" },
        { label: "Productivity", link: "https://actuatemicrolearning.com/productivity" },
        { label: "Business Presentations", link: "https://actuatemicrolearning.com/business-presentations" },
        { label: "Learning and Development", link: "https://actuatemicrolearning.com/learning-development" },
        { label: "Sales", link: "https://actuatemicrolearning.com/sales" }
      ]
    },
    formats: {
      title: "Blog Formats",
      items: [
        { label: "Videos", link: "https://actuatemicrolearning.com/videos" },
        { label: "Slideshows", link: "https://actuatemicrolearning.com/slideshows" },
        { label: "Infographics", link: "https://actuatemicrolearning.com/infographics" },
        { label: "Flashcards", link: "https://actuatemicrolearning.com/flashcards" },
        { label: "Podcasts", link: "https://actuatemicrolearning.com/podcasts" },
        { label: "Audiobook", link: "https://actuatemicrolearning.com/audiobooks" },
        { label: "eBooks", link: "https://actuatemicrolearning.com/ebooks" }
      ]
    },
    download: {
      title: "Download",
      items: [
        { label: "Flash Card", link: "https://actuatemicrolearning.com/flashcard-download" },
        { label: "Audiobook", link: "https://actuatemicrolearning.com/audiobook-download" }
      ]
    }
  };

  return (
    <>
      {/* Top Navbar - Red Background with Logo */}
      <div
        className={`bg-primary text-white transition-all duration-300 z-50 relative ${
          isScrolled ? "h-0 opacity-0 overflow-hidden" : "h-auto opacity-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-center items-center">
          <Link to="/">
            <img 
              src="/assets/logo.png" 
              alt="ACTUATE" 
              className="h-10 sm:h-12 drop-shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </Link>
        </div>
      </div>

      {/* Bottom Navbar - White Background with Navigation */}
      <nav
        className={`bg-white shadow-md transition-all duration-300 z-50 ${
          isScrolled ? "fixed top-0 left-0 right-0" : "relative"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className={`flex items-center ${isScrolled ? 'justify-between' : 'justify-end'}`}>
            
            {/* Show ACTUATE logo when scrolled */}
            {isScrolled && (
              <Link to="/">
                <img 
                  src="/assets/red-logo.png" 
                  alt="ACTUATE" 
                  className="h-7 sm:h-8 hover:scale-105 transition-transform duration-300"
                />
              </Link>
            )}

            {/* Desktop Navigation Links */}
            <div className={`hidden md:flex gap-6 lg:gap-8 text-gray-700 font-medium text-sm lg:text-base items-center ${
              isScrolled ? '' : 'mr-auto'
            }`}>
              
              {/* Catalogue Dropdown */}
              <div 
                className="relative group z-50"
                onMouseEnter={() => setIsCatalogueOpen(true)}
                onMouseLeave={() => setIsCatalogueOpen(false)}
              >
                <button className="hover:text-primary transition-colors flex items-center gap-1">
                  Catalogue
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isCatalogueOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Catalogue Dropdown Menu */}
                <div className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 z-[100] ${
                  isCatalogueOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}>
                  {catalogueItems.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-5 py-3 text-gray-700 hover:bg-primary hover:text-white transition-all duration-200 border-b border-gray-50 last:border-0"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Resources Mega Dropdown */}
              <div 
                className="relative group z-50"
                onMouseEnter={() => setIsResourcesOpen(true)}
                onMouseLeave={() => setIsResourcesOpen(false)}
              >
                <button className="hover:text-primary transition-colors flex items-center gap-1">
                  Resources
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isResourcesOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Mega Dropdown Menu - 3 Columns */}
                <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[720px] bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 z-[100] ${
                  isResourcesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}>
                  <div className="grid grid-cols-3 divide-x divide-gray-100">
                    
                    {/* Blog Subjects Column */}
                    <div className="p-5">
                      <h3 className="text-sm font-bold text-gray-800 mb-3 pb-2 border-b-2 border-primary">
                        {resourcesCategories.subjects.title}
                      </h3>
                      <div className="space-y-1">
                        {resourcesCategories.subjects.items.map((item, idx) => (
                          <a
                            key={idx}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-3 py-2 text-sm text-gray-600 hover:bg-primary hover:text-white rounded-lg transition-all duration-200"
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Blog Formats Column */}
                    <div className="p-5">
                      <h3 className="text-sm font-bold text-primary mb-3 pb-2 border-b-2 border-primary">
                        {resourcesCategories.formats.title}
                      </h3>
                      <div className="space-y-1">
                        {resourcesCategories.formats.items.map((item, idx) => (
                          <a
                            key={idx}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-3 py-2 text-sm text-gray-600 hover:bg-primary hover:text-white rounded-lg transition-all duration-200"
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Download Column */}
                    <div className="p-5">
                      <h3 className="text-sm font-bold text-gray-800 mb-3 pb-2 border-b-2 border-primary">
                        {resourcesCategories.download.title}
                      </h3>
                      <div className="space-y-1">
                        {resourcesCategories.download.items.map((item, idx) => (
                          <a
                            key={idx}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-3 py-2 text-sm text-gray-600 hover:bg-primary hover:text-white rounded-lg transition-all duration-200"
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              <Link to="/actuate-about" className="hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/contact" className="hover:text-primary transition-colors">
                Contact Us
              </Link>
            </div>

            {/* Desktop Request Demo Button */}
            <Link to="/contact" className="hidden md:block">
              <button className="bg-primary text-white px-5 lg:px-6 py-2 rounded-md font-semibold text-sm hover:bg-red-600 transition-all hover:shadow-lg">
                Request Demo
              </button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-gray-700 ml-4"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-4 px-4 py-6 border-t border-gray-200 bg-gray-50 max-h-[700px] overflow-y-auto">
            
            {/* Mobile Catalogue Accordion */}
            <div>
              <button 
                onClick={() => setIsCatalogueOpen(!isCatalogueOpen)}
                className="text-gray-700 font-medium hover:text-primary transition-colors py-2 flex items-center justify-between w-full"
              >
                Catalogue
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isCatalogueOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                isCatalogueOpen ? 'max-h-96 mt-2' : 'max-h-0'
              }`}>
                <div className="bg-white rounded-lg shadow-inner p-2">
                  {catalogueItems.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeMenu}
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Resources Accordion */}
            <div>
              <button 
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                className="text-gray-700 font-medium hover:text-primary transition-colors py-2 flex items-center justify-between w-full"
              >
                Resources
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isResourcesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                isResourcesOpen ? 'max-h-[600px] mt-2' : 'max-h-0'
              }`}>
                <div className="bg-white rounded-lg shadow-inner p-3 space-y-4">
                  
                  {/* Mobile Blog Subjects */}
                  <div>
                    <h4 className="text-xs font-bold text-gray-800 mb-2 uppercase">{resourcesCategories.subjects.title}</h4>
                    {resourcesCategories.subjects.items.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeMenu}
                        className="block px-3 py-2 text-sm text-gray-600 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>

                  {/* Mobile Blog Formats */}
                  <div>
                    <h4 className="text-xs font-bold text-primary mb-2 uppercase">{resourcesCategories.formats.title}</h4>
                    {resourcesCategories.formats.items.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeMenu}
                        className="block px-3 py-2 text-sm text-gray-600 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>

                  {/* Mobile Download */}
                  <div>
                    <h4 className="text-xs font-bold text-gray-800 mb-2 uppercase">{resourcesCategories.download.title}</h4>
                    {resourcesCategories.download.items.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeMenu}
                        className="block px-3 py-2 text-sm text-gray-600 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>

                </div>
              </div>
            </div>

            <Link 
              to="/actuate-about" 
              className="text-gray-700 font-medium hover:text-primary transition-colors py-2"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-700 font-medium hover:text-primary transition-colors py-2"
              onClick={closeMenu}
            >
              Contact Us
            </Link>
            <Link to="/contact" onClick={closeMenu}>
              <button className="bg-primary text-white px-6 py-3 rounded-md font-semibold text-sm hover:bg-red-600 transition w-full mt-2">
                Request Demo
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
