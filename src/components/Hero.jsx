import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Hero = () => {
  return (
  <section className="relative w-full h-[90vh]">
   <Swiper
     modules={[Navigation, Pagination, Autoplay]}
     autoplay={{ delay: 4000 }}
     loop
     className="w-full h-full"
   >
     <SwiperSlide>
       <div className="relative w-full h-full">
         <img
           src="/images/hero-bg1.jpg"
           alt="Hero"
           className="w-full h-full object-cover"
         />
         <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-6">
           <h1 className="text-5xl font-bold mb-4 animate-fade-in">
             Empowering <span className="text-gold">Learning</span>
           </h1>
           <p className="text-lg max-w-2xl mb-6">
             We build engaging and scalable LMS solutions.
           </p>
           <a
             href="#courses"
             className="bg-gold text-dark px-6 py-3 rounded-lg font-semibold hover:bg-burgundy hover:text-white transition"
           >
             Get Started
           </a>
         </div>
       </div>
     </SwiperSlide>
   </Swiper>
</section>

  );
};

export default Hero;
