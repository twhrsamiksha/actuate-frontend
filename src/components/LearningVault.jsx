import React from "react";
import { BookOpen, Video, Presentation, BarChart3, Mic, CreditCard, Sparkles, ArrowRight } from "lucide-react";

const contentTypes = [
  { 
    icon: BookOpen, 
    label: "eBooks",
    link: "https://actuatemicrolearning.com/ebooks" 
  },
  { 
    icon: Video, 
    label: "Videos",
    link: "https://actuatemicrolearning.com/videos" 
  },
  { 
    icon: Presentation, 
    label: "Slideshows",
    link: "https://actuatemicrolearning.com/slideshows" 
  },
  { 
    icon: BarChart3, 
    label: "Infographics",
    link: "https://actuatemicrolearning.com/infographics" 
  },
  { 
    icon: Mic, 
    label: "Podcasts",
    link: "https://actuatemicrolearning.com/podcasts" 
  },
  { 
    icon: CreditCard, 
    label: "Flashcards",
    link: "https://actuatemicrolearning.com/flashcards" 
  },
];

export default function LearningVault() {
  return (
    <section className="bg-white py-20 relative overflow-hidden">
      {/* Subtle decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header with Badge */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Content Library</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            The <span className="text-primary">Learning Vault</span>
          </h2>
          
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-4"></div>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Dive into knowledge — anytime, anywhere. Access diverse content formats designed for your learning style.
          </p>
        </div>

        {/* Icon Grid - Premium Vibrant Cards with Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mb-10">
          {contentTypes.map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 group cursor-pointer relative overflow-hidden"
            >
              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 mb-3 group-hover:bg-white/30 transition-all duration-300">
                  <item.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>
                <span className="text-sm font-bold text-white text-center leading-tight">
                  {item.label}
                </span>
              </div>

              {/* Decorative circle */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
            </a>
          ))}
        </div>

        {/* View All Button
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Explore more learning content and resources
          </p>
          <a 
            href="https://actuatemicrolearning.com/resources" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-white text-primary font-semibold px-8 py-3 rounded-lg border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300 flex items-center gap-2 mx-auto group shadow-lg hover:shadow-xl">
              <span>View All Resources</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </a>
        </div> */}
      </div>
    </section>
  );
}
