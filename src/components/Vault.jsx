import React from "react";

const items = ["eBooks","Videos","Slideshows","Infographics","Podcasts","Flashcards"];

export default function Vault(){
  return (
    <section className="bg-primary text-white">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold">The Learning Vault</h3>
            <p className="mt-2 opacity-90">Dive into knowledge – anytime, anywhere!</p>
          </div>
          <div className="flex gap-4">
            {items.map((it,i)=>(
              <div key={i} className="bg-white text-primary px-3 py-2 rounded shadow font-medium">{it}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
