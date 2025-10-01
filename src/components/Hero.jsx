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
        className="w-full h-[70vh]"
      >
        <SwiperSlide>
          <div className="relative w-full h-full flex items-center justify-between px-16">
            <div className="max-w-lg z-10">
              <h1 className="text-5xl font-bold text-gray-800 leading-tight">
                Actuate Microlearning
              </h1>
              <h2 className="text-3xl font-semibold text-primary mt-3">
                Legacy Effect
              </h2>
              <p className="text-gray-600 mt-4 leading-relaxed">
                High-quality live-action microlearning videos designed to captivate 
                and educate learners at scale, with human-centered storytelling principles.
              </p>
              <button className="mt-6 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-red-600 transition">
                View Video
              </button>
            </div>

            <div className="relative">
              <img 
                src="/assets/hero-person.png" 
                alt="Presenter" 
                className="h-[60vh] object-contain"
              />
              <div className="absolute top-10 left-0 w-32 h-32 bg-primary rounded-full opacity-20"></div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-primary to-red-700">
            <div className="text-center text-white max-w-3xl px-6">
              <h1 className="text-5xl font-bold mb-4">Empowering Learning</h1>
              <p className="text-xl mb-6">Transform your workforce with engaging microlearning experiences</p>
              <button className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
                Get Started
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
