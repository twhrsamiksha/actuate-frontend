import React from "react";
const cards = [
  "We help your elearning strategy succeed",
  "Video-format micro-sessions",
  "Sound content",
  "Local content (made for India)",
  "Global orientation",
  "Rated by our clients as the best",
];

export default function Advantage(){
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h3 className="text-primary text-2xl font-bold mb-8">The Actuate Advantage</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c,i)=>(
            <div key={i} className="bg-primary text-white p-6 rounded-lg flex items-center justify-center">
              <span className="text-sm">{c}</span>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <button className="bg-gray-100 px-4 py-2 rounded border">Know More</button>
        </div>
      </div>
    </section>
  );
}
