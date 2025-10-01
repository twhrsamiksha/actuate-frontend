import React from "react";
import { Play, Mic, Clock, Sparkles, ArrowRight } from "lucide-react";

const podcasts = [
  {
    title: "Leadership in the Digital Age",
    duration: "28 min",
    description: "Learn how modern leaders are adapting to digital transformation.",
    image: "/assets/podcast1.png"
  },
  {
    title: "Building High-Performance Teams",
    duration: "35 min",
    description: "Strategies to create and manage successful teams in any industry.",
    image: "/assets/podcast2.jpg"
  },
  {
    title: "The Art of Effective Communication",
    duration: "22 min",
    description: "Master the skills that drive meaningful workplace conversations.",
    image: "/assets/podcast3.png"
  },
  {
    title: "Innovation & Creative Thinking",
    duration: "31 min",
    description: "Unlock your creative potential and drive innovation at work.",
    image: "/assets/podcast4.jpg"
  }
];

export default function Podcast() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-3">
            <Mic className="w-4 h-4" />
            <span>Audio Learning</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Discover Our <span className="text-primary">Podcasts</span>
          </h2>
          
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-4"></div>
          
          <p className="text-gray-600 text-base max-w-2xl mx-auto">
            Learn on the go with expert insights, industry trends, and practical tips delivered through engaging audio content.
          </p>
        </div>

        {/* Podcast Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {podcasts.map((podcast, i) => (
            <div 
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-gray-100"
            >
              <div className="flex flex-col sm:flex-row">
                {/* Image Section */}
                <div className="sm:w-48 h-48 sm:h-auto relative overflow-hidden flex-shrink-0">
                  <img 
                    src={podcast.image}
                    alt={podcast.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-primary rounded-full p-4 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <Play className="w-6 h-6 text-white fill-white" />
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-primary" />
                    <span className="text-xs font-semibold text-gray-800">{podcast.duration}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors duration-300">
                    {podcast.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {podcast.description}
                  </p>
                  
                  <button className="text-primary font-semibold text-sm flex items-center gap-2 group/btn">
                    <span>Listen Now</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="bg-white text-primary font-semibold px-8 py-3 rounded-lg border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300 flex items-center gap-2 mx-auto group shadow-lg hover:shadow-xl">
            <Sparkles className="w-5 h-5" />
            <span>View All Podcasts</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}
