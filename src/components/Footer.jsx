import React from "react";
import { Linkedin, Instagram, Facebook, X, Youtube, Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-gray-300 py-12 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          
          {/* Stay Ahead Section */}
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs font-semibold mb-3">
              <Sparkles className="w-3 h-3" />
              <span>Learning</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
              Stay Ahead with
            </h3>
            <h3 className="text-2xl font-bold text-white leading-tight mb-3">
              Continuous Learning!
            </h3>
            <div className="w-20 h-1 bg-primary rounded-full"></div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 flex items-center gap-2">
              <div className="w-1 h-5 bg-primary rounded-full"></div>
              Resources
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#" className="hover:text-primary hover:translate-x-1 inline-block transition-all duration-200">Videos</a></li>
              <li><a href="#" className="hover:text-primary hover:translate-x-1 inline-block transition-all duration-200">Slide Shows</a></li>
              <li><a href="#" className="hover:text-primary hover:translate-x-1 inline-block transition-all duration-200">Infographics</a></li>
              <li><a href="#" className="hover:text-primary hover:translate-x-1 inline-block transition-all duration-200">Flashcards</a></li>
              <li><a href="#" className="hover:text-primary hover:translate-x-1 inline-block transition-all duration-200">Podcasts</a></li>
              <li><a href="#" className="hover:text-primary hover:translate-x-1 inline-block transition-all duration-200">Audio Books</a></li>
            </ul>
          </div>

          {/* Catalogue */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 flex items-center gap-2">
              <div className="w-1 h-5 bg-primary rounded-full"></div>
              Catalogue
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#" className="hover:text-primary hover:translate-x-1 inline-block transition-all duration-200">Soft Skills</a></li>
              <li><a href="#" className="hover:text-primary hover:translate-x-1 inline-block transition-all duration-200">Managerial & Leadership</a></li>
              <li><a href="#" className="hover:text-primary hover:translate-x-1 inline-block transition-all duration-200">Cognitive Skills</a></li>
              <li><a href="#" className="hover:text-primary hover:translate-x-1 inline-block transition-all duration-200">Technical Skills</a></li>
              <li><a href="#" className="hover:text-primary hover:translate-x-1 inline-block transition-all duration-200">HR & Compliance</a></li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 flex items-center gap-2">
              <div className="w-1 h-5 bg-primary rounded-full"></div>
              About Us
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#" className="hover:text-primary hover:translate-x-1 inline-block transition-all duration-200">About</a></li>
              <li><a href="#" className="hover:text-primary hover:translate-x-1 inline-block transition-all duration-200">Testimonials</a></li>
              <li><a href="#" className="hover:text-primary hover:translate-x-1 inline-block transition-all duration-200">Demo</a></li>
            </ul>
          </div>
        </div>

        {/* Contact & Social Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            
            {/* Contact Us */}
            <div className="flex-1">
              <h4 className="text-white font-bold text-base mb-3 flex items-center gap-2">
                <div className="w-1 h-5 bg-primary rounded-full"></div>
                Contact Us
              </h4>
              <div className="text-sm text-gray-400 space-y-1">
                <p>B-203, Shivai Industrial Estate, Saki Naka,</p>
                <p>Andheri (E), Mumbai, Maharashtra - 400072</p>
                <div className="flex flex-wrap gap-4 mt-3">
                  <a href="tel:+919167077114" className="hover:text-primary transition-colors font-semibold">+91 9167077114</a>
                  <a href="mailto:joslita@actuatemicrolearn.com" className="hover:text-primary transition-colors font-semibold">joslita@actuatemicrolearn.com</a>
                </div>
              </div>
            </div>

            {/* Social Icons - Premium Style */}
            <div className="flex gap-3">
              <a href="#" className="bg-gray-700 hover:bg-primary rounded-xl p-3 transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-lg">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-primary rounded-xl p-3 transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-lg">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-primary rounded-xl p-3 transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-lg">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-primary rounded-xl p-3 transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-lg">
                <X className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-primary rounded-xl p-3 transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-lg">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-xs text-gray-500">
          <p>(c) Thomas WordsWorth HR Systems Pvt. Ltd. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
