import React from "react";
import { Play, Film, Smartphone, Users } from "lucide-react";

const items = [
  { icon: Play, title: "Bite-sized Lessons", text: "Quick, impactful lessons" },
  { icon: Film, title: "Engaging Video Formats", text: "Keeps learners hooked" },
  { icon: Smartphone, title: "Mobile Optimized", text: "Perfect for phones" },
  { icon: Users, title: "Relatable Content", text: "Connects with learners" },
];

export default function Features(){
  return (
    <section className="bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h3 className="text-primary text-2xl font-bold text-center mb-8">Content the Modern-Day Learner Loves</h3>
        <div className="grid md:grid-cols-4 gap-6">
          {items.map((it,i)=>(
            <div key={i} className="card-rounded p-6 text-center">
              <it.icon className="mx-auto w-10 h-10 text-primary"/>
              <h4 className="mt-4 font-semibold text-secondary-dark">{it.title}</h4>
              <p className="mt-2 text-gray-600">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
