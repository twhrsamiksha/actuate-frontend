import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const clientsBySector = {
  Pharmaceuticals: [
    "/assets/logo-alembic.png",
    "/assets/logo-biocon.png",
    "/assets/logo-glenmark.png",
    "/assets/logo-emcure.png",
    "/assets/logo-zydus.png",
    "/assets/logo-sunpharma.png",
    "/assets/logo-cipla.png",
    "/assets/logo-lupin.png"
  ],
  Banking: [
    "/assets/logo-hdfc.png",
    "/assets/logo-icici.png",
    "/assets/logo-axis.png",
    "/assets/logo-sbi.png",
    "/assets/logo-kotak.png",
    "/assets/logo-yes.png"
  ],
  IT: [
    "/assets/logo-tcs.png",
    "/assets/logo-infosys.png",
    "/assets/logo-wipro.png",
    "/assets/logo-hcl.png",
    "/assets/logo-techm.png"
  ],
  Manufacturing: [
    "/assets/logo-tata.png",
    "/assets/logo-mahindra.png",
    "/assets/logo-reliance.png",
    "/assets/logo-larsen.png",
    "/assets/logo-godrej.png"
  ]
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
              className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeSector === sector
                  ? "bg-primary text-white shadow-lg scale-105"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {sector}
            </button>
          ))}
        </div>

        {/* Logo Slider for Active Sector */}
        <div className="relative">
          <Swiper
            key={activeSector} // Re-initialize on sector change
            modules={[Autoplay]}
            autoplay={{
              delay: 2500,
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
              Serving <span className="font-bold text-primary">{clientsBySector[activeSector].length}+</span> leading {activeSector.toLowerCase()} companies
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
