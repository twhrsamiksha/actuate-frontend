import React from "react";
import { Ruler, Video, Smartphone, Volume2, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const modernFeatures = [
  { 
    icon: Ruler, 
    title: "Bite-sized Lessons", 
    text: "Quick, bite-sized learning sessions perfectly designed for quick, impactful learning without overwhelming the user."
  },
  { 
    icon: Video, 
    title: "Engaging Video Formats", 
    text: "We incorporate real narration and videos that keep learners hooked and motivated."
  },
  { 
    icon: Smartphone, 
    title: "Mobile Optimized", 
    text: "Our platform is anywhere with content built specifically for mobile-first experiences."
  },
  { 
    icon: Volume2, 
    title: "Relatable, Sound Content", 
    text: "Clear, relevant microlearning paired with narrations with lessons from all backgrounds."
  },
];

export default function ModernLearner() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header with Badge */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-3">
            <Sparkles className="w-4 h-4" />
            <span>Why us</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Content the <span className="text-primary">Modern-Day Learner</span> Loves
          </h2>
          
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-3"></div>
          
          <p className="text-gray-600 text-base max-w-3xl mx-auto">
            Empowering today's learners with content that fits seamlessly into their fast-paced, digital-first lives.
          </p>
        </div>

        <div className="md:flex items-start gap-16">
          {/* Left - Image with Button */}
          <div className="md:w-1/2 mb-8 md:mb-0 mt-12">
            <div className="relative flex justify-center">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl scale-75"></div>
              
              <img 
                src="/assets/modern-learner.png" 
                alt="Modern learner illustration" 
                className="w-full max-w-md object-contain relative z-10 drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Know More Button - Center aligned below image */}
            <div className="flex justify-center mt-20">
              <Link to="/why-actuate">
                  <button className="bg-white text-primary font-semibold px-7 py-3.5 rounded-lg border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300 flex items-center gap-2 group shadow-md hover:shadow-xl">
                    <span>Know More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </Link>
            </div>
          </div>

          {/* Right - Features with Timeline */}
          <div className="md:w-1/2 relative">
            {/* Gradient Vertical Line */}
            <div className="absolute left-5 top-6 bottom-6 w-1 bg-gradient-to-b from-primary/20 via-primary to-primary/20 rounded-full"></div>

            {/* Features */}
            <div className="space-y-6">
              {modernFeatures.map((feature, i) => (
                <div 
                  key={i} 
                  className="flex items-start gap-5 relative group"
                >
                  {/* Icon Circle with Primary Color */}
                  <div className="bg-primary rounded-full p-3 shadow-lg flex-shrink-0 z-10 relative group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <feature.icon className="w-5 h-5 text-white" strokeWidth={2.5} />
                  </div>
                  
                  {/* Content Card */}
                  <div className="flex-1 bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 border border-gray-100">
                    <h4 className="font-bold text-primary text-base mb-1.5">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.text}
                    </p>
                  </div>

                  {/* Connector dot */}
                  <div className="absolute left-5 top-5 w-2.5 h-2.5 bg-white border-2 border-primary rounded-full z-20"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
