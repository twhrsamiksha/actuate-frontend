import React from "react";
import { BookOpen, Video, Presentation, BarChart3, Mic, CreditCard, Sparkles } from "lucide-react";

const contentTypes = [
  { icon: BookOpen, label: "eBooks" },
  { icon: Video, label: "Videos" },
  { icon: Presentation, label: "Slideshows" },
  { icon: BarChart3, label: "Infographics" },
  { icon: Mic, label: "Podcasts" },
  { icon: CreditCard, label: "Flashcards" },
];

export default function LearningVault() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header with Badge */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-3">
            <Sparkles className="w-4 h-4" />
            <span>Content Library</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            The <span className="text-primary">Learning Vault</span>
          </h2>
          
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-4"></div>
          
          <p className="text-gray-600 text-base max-w-2xl mx-auto">
            Dive into knowledge — anytime, anywhere. Access diverse content formats designed for your learning style.
          </p>
        </div>

        {/* Red Border Frame */}
        <div className="bg-primary rounded-3xl p-2 shadow-2xl">
          
          {/* Inner Container */}
          <div 
            className="rounded-2xl p-10 md:p-12 relative overflow-hidden"
            style={{
              backgroundImage: 'url(/assets/learning-vault-bg.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-primary/85"></div>
            
            <div className="relative z-10">
              {/* Icon Grid - Premium Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {contentTypes.map((item, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-5 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 group cursor-pointer"
                  >
                    <div className="bg-primary/10 rounded-full p-3 mb-3 group-hover:bg-primary transition-all duration-300">
                      <item.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" strokeWidth={2} />
                    </div>
                    <span className="text-sm font-bold text-gray-800 text-center leading-tight">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
