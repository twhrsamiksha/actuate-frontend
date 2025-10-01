import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Sparkles, Quote } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    text: "The content I feel was really impactful, didn't beat about the bush and got straight to the point. The scenarios were relatable and very applicable.",
    author: "John Smith, Senior VP",
    company: "Alembic Pharmaceuticals"
  },
  {
    text: "Using lessons I learned I managed to nail a presentation that was given to me on very short notice, which I personally managed to convince management to use lessons learned and apply new processes resulting in 2% and significant cost reductions within thirty days.",
    author: "Ritu Sharma",
    company: "Biocon Limited"
  },
  {
    text: "Lessons learned...have become a part of my team's playbook. The bite-sized nature was perfect for our busy schedules while staying relevant and easy to use.",
    author: "Amit Shukla",
    company: "Glenmark"
  },
  {
    text: "The microlearning format was perfect for our team. We could complete modules during breaks and the knowledge retention was significantly higher than traditional training.",
    author: "Priya Desai, HR Director",
    company: "Sun Pharma"
  },
  {
    text: "Real-world scenarios and practical examples made the training immediately applicable. Our team saw measurable improvements in performance within weeks.",
    author: "Rajesh Kumar",
    company: "Dr. Reddy's Laboratories"
  },
  {
    text: "The video-first approach kept our team engaged. The production quality and relatable content made learning enjoyable rather than a chore.",
    author: "Sneha Patel, Learning Manager",
    company: "Cipla"
  },
  {
    text: "We've tried multiple eLearning platforms, but Actuate's focus on bite-sized, actionable content has delivered the best ROI for our training budget.",
    author: "Vikram Singh, COO",
    company: "Lupin Pharmaceuticals"
  },
  {
    text: "The mobile-first design meant our field teams could learn on-the-go. Completion rates increased by 85% compared to our previous training program.",
    author: "Meera Iyer, Sales Director",
    company: "Torrent Pharmaceuticals"
  }
];

export default function Testimonials() {
  const [expandedCard, setExpandedCard] = useState(null);
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
                          {/* Avatar circle */}
                          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-all duration-300 shadow-lg flex-shrink-0">
                            {item.author[0]}
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
