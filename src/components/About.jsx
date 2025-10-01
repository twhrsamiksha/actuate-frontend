import React from "react";

export default function About(){
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12 md:flex items-center gap-8">
        <div className="md:w-1/2">
          <h6 className="text-primary font-semibold uppercase">About Us</h6>
          <h3 className="text-2xl md:text-3xl font-bold mt-2">Actuate Microlearning</h3>
          <p className="italic mt-1 text-gray-600">India’s First Live-Action Video Microlearning</p>
          <p className="mt-4 text-gray-700">Because we connect best with human — rather than animated — characters and facilitators in our learning content.</p>
          <div className="mt-6 flex gap-4">
            <button className="bg-primary text-white px-4 py-2 rounded">Request Demo</button>
            <button className="bg-gray-100 px-4 py-2 rounded border">Know More</button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img src="/assets/about-thumb.jpg" alt="about" className="rounded-xl shadow-card w-full max-w-sm object-cover"/>
        </div>
      </div>
    </section>
  );
}
