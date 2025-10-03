import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Play } from "lucide-react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";

const Hero = () => {
  return (
    <section className="relative w-full bg-accent">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ 
          clickable: true,
          bulletClass: 'swiper-pagination-bullet !bg-primary/40',
          bulletActiveClass: 'swiper-pagination-bullet-active !bg-primary'
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="w-full h-[40vh] md:h-[30vh] lg:h-[45vh]"
      >
        {/* Slide 1 - Banner Image with Text Overlay */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img 
              src="/assets/banner1.png" 
              alt="Actuate Microlearning Banner" 
              className="w-full h-full object-cover"
            />
            
            {/* Subtle Light Overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-black/30 via-black/15 to-transparent"></div>
            
            {/* Content Container - Right Aligned */}
            <div className="absolute inset-0 flex items-center justify-end">
              <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
                <div className="max-w-xl ml-auto space-y-3 md:space-y-4 animate-fade-in text-right pr-4 md:pr-8">
                  
                  {/* Main Title */}
                  <div className="space-y-1">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight drop-shadow-sm">
                      Actuate Microlearning
                    </h1>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary leading-tight drop-shadow-sm">
                      The Legacy Effect
                    </h2>
                  </div>
                  
                  {/* Description */}
                  <p className="text-xs md:text-sm lg:text-base text-gray-700 leading-relaxed drop-shadow-sm">
                    Transform learning into lasting impact with bite-sized modules 
                    designed to create meaningful change.
                  </p>
                  
                  {/* CTA Button - Matching About Section */}
                  <div className="pt-2 flex justify-end">
                    <Link to="/legacy-effect">
  <button className="bg-primary text-white px-5 py-2.5 md:px-7 md:py-3.5 rounded-lg font-semibold hover:bg-primary/90 hover:shadow-xl transition-all duration-300 flex items-center gap-2 group text-sm md:text-base">
    <Play size={18} className="group-hover:scale-110 transition-transform md:w-5 md:h-5" />
    <span>View Video</span>
  </button>
</Link>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Add more slides here if needed */}
      </Swiper>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;
