import React from "react";

const clients = ["/assets/logo-alembic.png","/assets/logo-biocon.png","/assets/logo-glenmark.png","/assets/logo-emcure.png","/assets/logo-zydus.png"];

export default function Clients(){
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12 text-center">
        <h3 className="text-xl font-bold mb-6">Our Growing Client Network</h3>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {clients.map((c,i)=>(
            <img key={i} src={c} alt={`client-${i}`} className="h-12 object-contain"/>
          ))}
        </div>
      </div>
    </section>
  );
}
