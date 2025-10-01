import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Sparkles, Quote } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    text: "Actuate's content is 100 times better than other Indian companies' content. Foreign companies' content do not allow personalization for Indian learners.",
    author: "Supriya Kamble",
    company: "Corporate HR Manager",
    image: "/assets/testimonials/01. Supriya Kamble.png"
  },
  {
    text: "...international standards... fun filled and entertaining... keep learners hooked... wonderful... innovative.",
    author: "Amitabh Bhagchandani",
    company: "eLearning Specialist",
    image: "/assets/testimonials/02. Amitabh Bhagchandani.png"
  },
  {
    text: "There have been many service provider today into this space but Actuate offerings stand apart in terms of their repository and their innovative presentation of their content.",
    author: "Anil Nair",
    company: "Head Talent Management",
    image: "/assets/testimonials/03. Anil Nair.png"
  },
  {
    text: "Among the other players... national and international... the relevance of courses and approach... eased our decision making.",
    author: "Ajitha S",
    company: "HR Corporate",
    image: "/assets/testimonials/04. Ajitha S.png"
  }
];

export default function Testimonials() {
  const [expandedCard, setExpandedCard] = useState(null);
  const [imageErrors, setImageErrors] = useState({});
  const swiperRef = useRef(null);

  const handleCardClick = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.stop();
    }
  };

  const handleMouseEnter = () => {
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current && swiperRef.current.autoplay && expandedCard === null) {
      swiperRef.current.autoplay.start();
    }
  };

  const handleImageError = (index) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header with Badge */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-3">
            <Sparkles className="w-4 h-4" />
            <span>What Our Clients Say</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Client <span className="text-primary">Testimonials</span>
          </h2>
          
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-4"></div>
          
          <p className="text-gray-600 text-base max-w-2xl mx-auto">
            Hear from organizations that have transformed their learning experience with Actuate Microlearning.
          </p>
        </div>

        {/* Background Container */}
        <div 
          className="rounded-3xl p-10 md:p-12 relative shadow-2xl"
          style={{
            backgroundImage: 'url(/assets/testimonials-bg.png)',
            backgroundRepeat: 'repeat',
            backgroundSize: 'auto',
            backgroundColor: '#f9fafb',
          }}
        >
          
          <div 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ 
                delay: 3000, 
                disableOnInteraction: false,
                pauseOnMouseEnter: true 
              }}
              spaceBetween={24}
              slidesPerView={1}
              centeredSlides={true}
              breakpoints={{
                640: { slidesPerView: 1.5 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 2.5 },
              }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              className="pb-12"
            >
              {testimonials.map((item, i) => (
                <SwiperSlide key={i}>
                  {({ isActive }) => (
                    <div 
                      className={`bg-white rounded-2xl p-6 border border-gray-100 flex flex-col group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer relative overflow-hidden
                        ${isActive ? 'scale-105 shadow-xl' : 'scale-95 opacity-90'}
                        ${expandedCard === i ? 'h-auto' : 'h-80'}
                      `}
                      onClick={() => handleCardClick(i)}
                    >
                      
                      <div className="relative z-10 flex flex-col h-full">
                        {/* Quote icon */}
                        <div className="bg-primary/10 rounded-xl p-3 w-fit mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                          <Quote className="w-6 h-6 text-primary" />
                        </div>
                        
                        <div className="flex-grow overflow-hidden">
                          <p className={`text-gray-700 text-sm leading-relaxed group-hover:text-gray-900 transition-colors duration-300
                            ${expandedCard === i ? '' : 'line-clamp-6'}
                          `}>
                            {item.text}
                          </p>
                        </div>
                        
                        {/* Read more indicator */}
                        {expandedCard !== i && item.text.length > 200 && (
                          <div className="text-primary text-xs font-semibold mt-2">
                            Click to read more...
                          </div>
                        )}
                        
                        <div className="mt-6 flex items-center gap-3 pt-4 border-t border-gray-100">
                          {/* Avatar with fallback */}
                          <div className="w-12 h-12 rounded-full overflow-hidden group-hover:scale-110 transition-all duration-300 shadow-lg flex-shrink-0 ring-2 ring-primary/20 group-hover:ring-primary">
                            {item.image && !imageErrors[i] ? (
                              <img 
                                src={item.image} 
                                alt={item.author}
                                className="w-full h-full object-cover"
                                onError={() => handleImageError(i)}
                              />
                            ) : (
                              <div className="w-full h-full bg-primary flex items-center justify-center text-white font-bold text-lg">
                                {item.author[0]}
                              </div>
                            )}
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-800 text-sm group-hover:text-primary transition-colors duration-300">{item.author}</h4>
                            <p className="text-xs text-gray-500">{item.company}</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Decorative corner accent */}
                      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          
        </div>
        
      </div>
    </section>
  );
}
