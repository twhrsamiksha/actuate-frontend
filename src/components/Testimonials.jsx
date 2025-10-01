import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section className="bg-light py-16">
  <h2 className="text-3xl font-bold text-center text-burgundy mb-12">
    What Our Clients Say
  </h2>
  <Swiper
    modules={[Pagination]}
    pagination={{ clickable: true }}
    spaceBetween={30}
    slidesPerView={1}
    loop
    className="max-w-4xl mx-auto"
  >
    <SwiperSlide>
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center border-t-4 border-gold">
        <p className="italic text-lg text-dark">
          "Actuate transformed our LMS experience completely."
        </p>
        <h4 className="mt-6 font-semibold text-burgundy">– John Doe</h4>
      </div>
    </SwiperSlide>
  </Swiper>
</section>

  );
};

export default Testimonials;
