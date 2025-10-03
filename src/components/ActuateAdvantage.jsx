import React from "react";
import { ArrowRight, Video, Globe, MessageCircle, BookOpen, Volume2, ThumbsUp, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const advantages = [
  { 
    icon: BookOpen, 
    title: "We help your eLearning strategy succeed",
    description: "We partner with you year-round, running multiple interventions to ensure eLearning content offtake."
  },
  { 
    icon: Video, 
    title: "Video-first microlessons",
    description: "Video, because it's the format of choice for the modern-day learner. Microlessons, because of shrinking attention spans."
  },
  { 
    icon: Volume2, 
    title: "Sound content",
    description: "Content created by people with the relevant business/ job experience."
  },
  { 
    icon: MessageCircle, 
    title: "Local content (made for India)",
    description: "Our content uses Indian narrators, actors, situations, making it relevant and relatable for the Indian learner."
  },
  { 
    icon: Globe, 
    title: "Global orientation",
    description: "Our content has a global orientation, drawing upon research and case studies from the best sources across the world."
  },
  { 
    icon: ThumbsUp, 
    title: "Rated by our clients as being the best",
    description: "Our clients rate as the best eLearning solutions provider in India."
  },
];

export default function ActuateAdvantage() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header with Badge */}
        <div className="text-center mb-10">
          {/* <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-3">
            <Sparkles className="w-4 h-4" />
            <span>It's where it counts</span>
          </div> */}
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            The <span className="text-primary">Actuate Advantage</span>
          </h2>
          
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-3"></div>
          
          <p className="text-gray-600 text-base max-w-2xl mx-auto">
            Discover what makes our microlearning platform stand out from the rest
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((item, i) => (
            <div
              key={i}
              className="relative h-52 cursor-pointer group perspective"
            >
              {/* Card Container with 3D Flip */}
              <div className="relative w-full h-full transition-all duration-700 transform-style-3d group-hover:rotate-y-180">
                
                {/* Front Side */}
                <div className="absolute inset-0 backface-hidden bg-primary text-white p-6 rounded-2xl shadow-xl flex flex-col justify-between overflow-hidden group-hover:shadow-2xl transition-all duration-300">
                  
                  {/* Decorative circles */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full"></div>
                  <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-white/10 rounded-full"></div>
                  
                  <div className="relative z-10">
                    <div className="bg-white/20 backdrop-blur-sm w-12 h-12 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <item.icon className="w-6 h-6" strokeWidth={2} />
                    </div>
                    <h3 className="text-base font-bold leading-tight">
                      {item.title}
                    </h3>
                  </div>
                  
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-xs font-semibold opacity-90">Hover to learn more</span>
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 group-hover:translate-x-1 transition-transform duration-300">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 backface-hidden bg-white p-6 rounded-2xl shadow-2xl border-2 border-primary/20 rotate-y-180 flex flex-col justify-center relative overflow-hidden">
                  
                  {/* Primary color accent stripe */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-primary"></div>
                  
                  {/* Icon watermark */}
                  <div className="absolute bottom-4 right-4 opacity-5">
                    <item.icon className="w-24 h-24" strokeWidth={1} />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="inline-block bg-primary p-2 rounded-lg mb-3">
                      <item.icon className="w-5 h-5 text-white" strokeWidth={2} />
                    </div>
                    <p className="text-sm leading-relaxed text-gray-700">
                      {item.description}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/why-actuate">
  <button className="bg-white text-primary font-semibold px-6 py-2.5 rounded-lg border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300 flex items-center gap-2 mx-auto group shadow-lg hover:shadow-xl">
    <span>Know More</span>
    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
  </button>
</Link>
        </div>
      </div>

      {/* Custom CSS for 3D Flip */}
      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        
        .backface-hidden {
          backface-visibility: hidden;
        }
        
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        
        .group:hover .group-hover\\:rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
}
