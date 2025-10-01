import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { ArrowRight, Sparkles } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";

const courses = [
  { title: "Soft Skills", img: "/assets/course1.png" },
  { title: "Leadership Skills", img: "/assets/course2.jpg" },
  { title: "Technical Skills", img: "/assets/course3.jpg" },
  { title: "Cognitive Skills", img: "/assets/course4.jpg" },
];

export default function Courses() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header with Badge */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-3">
            <Sparkles className="w-4 h-4" />
            <span>Our Courses</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Find the Perfect <span className="text-primary">Course</span> for Your Goals
          </h2>
          
          <div className="w-20 h-1 bg-primary rounded-full mx-auto"></div>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {courses.map((course, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group relative">
                
                {/* Image Container */}
                <div className="relative h-72 overflow-hidden">
                  {/* Background Image */}
                  <img
                    src={course.img}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Title Badge - Top */}
                  <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-xl shadow-lg transform group-hover:scale-105 transition-all duration-300">
                    <h3 className="text-gray-800 text-base font-bold">
                      {course.title}
                    </h3>
                  </div>
                  
                  {/* Bottom Content - Always Visible */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-0 transition-all duration-300">
                    {/* Course Info */}
                    <div className="mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center gap-4 text-white text-sm mb-2">
                        <span>✓ 20+ Microlessons</span>
                        <span>✓ Video-First</span>
                      </div>
                    </div>
                    
                    {/* Explore Button */}
                    <button className="w-full bg-primary text-white px-5 py-3 rounded-lg font-semibold text-sm hover:bg-red-600 transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0">
                      <span>Explore Course</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                  
                  {/* Number Badge */}
                  <div className="absolute top-4 right-4 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                    {i + 1}
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* View All Button */}
        <div className="text-center mt-8">
          <button className="bg-white text-primary font-semibold px-8 py-3 rounded-lg border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300 flex items-center gap-2 mx-auto group shadow-lg hover:shadow-xl">
            <span>View All Courses</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}
