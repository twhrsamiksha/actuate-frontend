import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-12 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-primary rounded-3xl p-8 shadow-2xl">
          <div className="bg-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-800 mb-6 md:mb-0">
              <img src="/app/assets/red-logo.png" alt="ACTUATE" className="h-10 mb-3" />
              <p className="text-lg font-bold">Have questions? We're here to help!</p>
            </div>
            <Link to="/contact">
              <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 group">
                <span>Request a demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
