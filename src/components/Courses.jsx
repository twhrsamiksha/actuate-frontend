import React from "react";

const courses = [
  { title: "Skills", img: "/assets/course1.jpg" },
  { title: "Leadership Skills", img: "/assets/course2.jpg" },
  { title: "Technical Skills", img: "/assets/course3.jpg" },
  { title: "Cognitive Skills", img: "/assets/course4.jpg" },
];

export default function Courses(){
  return (
    <section className="bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h3 className="text-center text-2xl font-bold mb-8">Find the Perfect Course for Your Goals</h3>

        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">
          {courses.map((c,i)=>(
            <div key={i} className="min-w-[260px] snap-start card-rounded p-4">
              <div className="h-40 rounded-lg overflow-hidden">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover"/>
              </div>
              <h4 className="mt-4 font-semibold text-secondary-dark">{c.title}</h4>
              <button className="mt-3 bg-primary text-white px-3 py-1 rounded">Explore now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
