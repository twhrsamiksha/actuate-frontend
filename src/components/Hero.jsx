import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Hero = () => {
  return (
    <section className="relative w-full bg-gradient-to-r from-gray-50 to-white">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="w-full h-[40vh] md:h-[55vh]"
      >
        {/* Slide 1 - Banner Image */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img 
              src="/assets/banner1.png" 
              alt="Actuate Microlearning Banner" 
              className="w-full h-full object-cover"
            />
            {/* Optional overlay for better text readability */}
            <div className="absolute inset-0 "></div>
          </div>
        </SwiperSlide>

        {/* Slide 2 - Banner Image */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img 
              src="/assets/banner2.png" 
              alt="Learning Solutions Banner" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 "></div>
          </div>
        </SwiperSlide>

        {/* Slide 3 - Banner Image */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img 
              src="/assets/banner3.png" 
              alt="Corporate Training Banner" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 "></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
