import React, { useState, useRef } from "react";
import { Play, Sparkles, X, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalVideoRef = useRef(null);

  const openModal = () => {
    setIsModalOpen(true);
    setTimeout(() => {
      if (modalVideoRef.current) {
        modalVideoRef.current.currentTime = 0;
        modalVideoRef.current.play();
      }
    }, 100);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
    }
  };

  return (
    <>
      <section className="bg-gradient-to-b from-white to-gray-50 py-24 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="md:flex items-center gap-16">

            {/* Left Content */}
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                Actuate <span className="text-primary">Microlearning</span>
              </h2>

              <p className="text-2xl md:text-2xl text-lg text-gray-600 mt-3 font-medium">
                India's First Live-Action Video Microlearning
              </p>

              {/* Decorative line */}
              <div className="w-20 h-1 bg-primary rounded-full mt-4"></div>

              <p className="mt-6 text-gray-700 leading-relaxed text-lg">
                Because we connect best with <span className="font-semibold text-gray-900">human</span> — rather than animated — characters
                and facilitators in our learning content.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={openModal}
                  className="bg-primary text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-primary/90 hover:shadow-xl transition-all duration-300 flex items-center gap-2 group"
                >
                  <Play size={20} className="group-hover:scale-110 transition-transform" />
                  <span>View Video</span>
                </button>

                {/* Premium Know More Button with Link */}
                <Link to="/why-actuate">
                  <button className="bg-white text-primary font-semibold px-7 py-3.5 rounded-lg border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300 flex items-center gap-2 group shadow-md hover:shadow-xl">
                    <span>Know More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </Link>
              </div>

              {/* Stats */}
              <div className="mt-10 flex gap-8">
                <div className="shrink min-w-0">
                  <div className="text-3xl font-bold text-primary">430+</div>
                  <div className="text-sm text-gray-600 mt-1">Courses</div>
                </div>
                <div className="border-l-2 border-gray-200"></div>
                <div className="shrink min-w-0">
                  <div className="text-3xl font-bold text-primary">1800+</div>
                  <div className="text-sm text-gray-600 mt-1">Micro videos</div>
                </div>
                <div className="border-l-2 border-gray-200"></div>
                <div className="shrink min-w-0">
                  <div className="text-3xl font-bold text-primary">150+</div>
                  <div className="text-sm text-gray-600 mt-1">Hours of Content</div>
                </div>
              </div>
            </div>

            {/* Right GIF Section */}
            <div className="md:w-1/2 mt-12 md:mt-0 relative group">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-300"></div>

              {/* GIF container */}
              <div className="relative cursor-pointer" onClick={openModal}>
                {/* GIF IMAGE */}
                <img
                  src="https://citruslearningsystems.s3.ap-south-1.amazonaws.com/Actuate-frontend/about.gif"
                  alt="Actuate Microlearning Preview"
                  className="rounded-2xl shadow-2xl w-full aspect-video object-cover relative z-10 group-hover:scale-[1.02] transition-transform duration-300"
                />

                {/* Play button overlay - Only visible on hover */}
                <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-6 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-primary fill-primary" />
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 z-20">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 rounded-full p-3">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-800">Live Action</div>
                    <div className="text-xs text-gray-500">Real People, Real Impact</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            {/* FULL VIDEO - Plays from beginning (0:00) */}
            <video
              ref={modalVideoRef}
              className="w-full rounded-2xl shadow-2xl"
              controls
              autoPlay
            >
              <source src="https://citruslearningsystems.s3.ap-south-1.amazonaws.com/Actuate-frontend/Videos/about-video2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  );
}
