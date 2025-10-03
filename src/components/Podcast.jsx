import React from "react";
import { Mic, Download, Sparkles, ArrowRight } from "lucide-react";

export default function Podcast() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-3">
            <Mic className="w-4 h-4" />
            <span>Latest Podcast</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Download Our <span className="text-primary">Latest Podcast</span>
          </h2>
          
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-4"></div>
        </div>

        {/* Podcast Featured Card */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500">
            <div className="grid md:grid-cols-2 gap-0">
              
              {/* Image/Audio Visual */}
              <div className="relative bg-gradient-to-br from-primary/20 to-primary/5 p-12 flex items-center justify-center">
                <div className="text-center space-y-6">
                  {/* Podcast Icon */}
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-2xl shadow-lg">
                    <Mic className="w-12 h-12 text-primary" />
                  </div>
                  
                  {/* Audio Waves Animation (Optional visual) */}
                  <div className="flex items-center justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div 
                        key={i}
                        className="w-1.5 bg-primary rounded-full animate-pulse"
                        style={{
                          height: `${Math.random() * 40 + 20}px`,
                          animationDelay: `${i * 0.1}s`
                        }}
                      ></div>
                    ))}
                  </div>
                  
                  <p className="text-gray-600 font-semibold">
                    Listen & Learn
                  </p>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-primary/20 rounded-full blur-xl"></div>
              </div>

              {/* Content */}
              <div className="p-8 sm:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-primary mb-4">
                  <Sparkles className="w-5 h-5" />
                  <span className="text-sm font-semibold">Featured Episode</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-secondary mb-4 leading-tight">
                  Harnessing Stress to Boost Team Member Productivity
                </h3>

                <p className="text-primary font-semibold mb-4 text-lg">
                  Lessons from Neuroscience
                </p>

                <p className="text-gray-600 leading-relaxed mb-6">
                  In this podcast, we explore what neuroscience teaches us about the kind of stress that can aid performance, and how managers can use this knowledge to help their team members climb the productivity curve.
                </p>

                <a 
                  href="https://actuatemicrolearning.com/harnessing-stress-to-boost-team-member-productivity/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <button className="bg-primary text-white px-6 py-3.5 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 flex items-center gap-3 shadow-md hover:shadow-lg group">
                    <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                    <span>Download Podcast</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
