import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const clientsBySector = {
  Pharmaceuticals: [
    "/app/assets/pharma1.png",
    "/app/assets/pharma2.png",
    "/app/assets/pharma3.png",
    "/app/assets/pharma4.png",
    "/app/assets/pharma5.png",
    "/app/assets/pharma6.png",
    "/app/assets/pharma7.png",
  ],

  "Automotive, Manufacturing": [  // ✅ Fixed - added quotes
    "/app/assets/auto1.png",
    "/app/assets/auto2.png",
    "/app/assets/auto3.png",
    "/app/assets/auto4.png",
    "/app/assets/auto5.png",
    "/app/assets/auto6.png",
    "/app/assets/auto7.png",
  ],

  "Consumer Goods, Durables": [  // ✅ Fixed - added quotes
    "/app/assets/goods1.png",
    "/app/assets/goods2.png",
    "/app/assets/goods3.png",
    "/app/assets/goods4.png",
    "/app/assets/goods5.png",
    "/app/assets/goods6.png",
    "/app/assets/goods7.png",
  ],

  "IT, ITES, eCommerce, Retail": [  // ✅ Fixed - added quotes
    "/app/assets/IT1.png",
    "/app/assets/IT2.png",
    "/app/assets/IT3.png",
    "/app/assets/IT4.png",
    "/app/assets/IT5.png",
    "/app/assets/IT6.png",
    "/app/assets/IT7.png",
  ],

  "Public Sector, Petrochemical, Infra": [  // ✅ Fixed - added quotes
    "/app/assets/public1.png",
    "/app/assets/public2.png",
    "/app/assets/public3.png",
    "/app/assets/public4.png",
    "/app/assets/public5.png",
  ],

  Others: [
    "/app/assets/others1.png",
    "/app/assets/others2.png",
    "/app/assets/others3.png",
    "/app/assets/others4.png",
    "/app/assets/others5.png",
    "/app/assets/others6.png",
    "/app/assets/others7.png",
    "/app/assets/others8.png",
    "/app/assets/others9.png",
    "/app/assets/others10.png",
    "/app/assets/others11.png",
  ],
};

export default function Clients() {
  const [activeSector, setActiveSector] = useState("Pharmaceuticals");
  const sectors = Object.keys(clientsBySector);

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-gray-800 text-center mb-2">
          Our Growing Client Network
        </h3>
        <p className="text-sm text-gray-500 text-center mb-10">
          Trusted by leading organizations across industries
        </p>

   {/* Sector Tabs */}
<div className="flex flex-wrap justify-center gap-3 mb-10">
  {sectors.map((sector) => (
    <button
      key={sector}
      onClick={() => setActiveSector(sector)}
      className={`px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 ${
        activeSector === sector
          ? "bg-primary text-white shadow-lg scale-105"
          : "bg-white text-gray-600 border-2 border-gray-200 hover:border-primary hover:text-primary hover:shadow-md"
      }`}
    >
      {sector}
    </button>
  ))}
</div>

        {/* Logo Slider for Active Sector */}
        <div className="relative">
          <Swiper
            key={activeSector}
            modules={[Autoplay]}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            loop={true}
            spaceBetween={40}
            slidesPerView={2}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
            className="py-8"
          >
            {clientsBySector[activeSector].map((logo, i) => (
              <SwiperSlide key={i}>
                <div className="flex items-center justify-center h-24 px-4">
                  <img
                    src={logo}
                    alt={`${activeSector} client ${i + 1}`}
                    className="max-h-16 max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        </div>

        {/* Client count badge */}
        <div className="text-center mt-8">
          <div className="inline-block bg-gray-100 px-6 py-3 rounded-full">
            <span className="text-gray-600 text-sm">
              Serving <span className="font-bold text-red-500">{clientsBySector[activeSector].length}+</span> leading {activeSector.toLowerCase()} companies
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
