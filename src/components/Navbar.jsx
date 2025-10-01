import React from "react";
import { UserCircle } from "lucide-react";

export default function Navbar(){
  return (
    <header className="bg-primary text-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
        <div className="text-2xl font-bold tracking-wider">ACTUATE</div>

        <nav className="hidden md:flex gap-6 items-center">
          <a className="hover:opacity-90">Catalogue</a>
          <a className="hover:opacity-90">Resources</a>
          <a className="hover:opacity-90">About</a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="bg-white text-primary px-4 py-2 rounded-md font-semibold">Request Demo</button>
          <UserCircle size={28} />
        </div>
      </div>
    </header>
  );
}
