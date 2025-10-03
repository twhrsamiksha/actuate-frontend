import React from "react";
import { Globe, MapPin, Smartphone, Users, Award, ArrowRight, Play, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const WhyActuatePage = () => {
  const features = [
    {
      icon: Globe,
      title: "Content that's on par with any available globally",
      description: "Our content has a global orientation, drawing upon research and case studies from the best sources across the world. Your employees get content that has a global orientation, is based on sound research and can help them 'be the best possible version of themselves'.",
      bottomLine: "Provide your employees with world-class content that will earn you their gratitude and praise.",
      action: { text: "Know More", link: "#", type: "secondary" },
      image: "/assets/global-content.jpg"
    },
    {
      icon: MapPin,
      title: "Made for India Content",
      description: "eLearning content must be global in its orientation but local in its context to be effective.",
      features: ["Indian scenarios", "Indian narrators/actors", "Indian accents"],
      bottomLine: "eLearning that is relatable, relevant and will thus be rated highly by your employees.",
      action: { text: "Preview Content", link: "#", type: "secondary" },
      image: "/assets/india-content.jpg"
    },
    {
      icon: Smartphone,
      title: "Video-format microlessons; optimised for phone-based learning",
      description: "The modern-day learner wants content that is bite-sized, in video-format, optimized for the phone, relatable, sound, and practical.",
      bottomLine: "Obtain content that is optimized for the modern-day learner!",
      action: { text: "Request a Demo", link: "#", type: "primary" },
      secondaryAction: { text: "Preview", link: "#" },
      image: "/assets/mobile-learning.jpg"
    },
    {
      icon: Users,
      title: "We Partner with You in Ensuring eLearning Investment RoI",
      description: "Great content is just the start. We handle the marketing aspect for you, year-round, helping ensure that your learners are consistently engaging with the content we provide.",
      bottomLine: "Your eLearning investment deserves a high RoI. We help you deliver it.",
      action: { text: "Know More", link: "#", type: "secondary" },
      image: "/assets/partnership.jpg"
    },
    {
      icon: Award,
      title: "Rated by clients as the best they've seen in India",
      description: "Our clients say that we are the best that they've seen in India. We'll never stop trying to get better than what we were yesterday.",
      bottomLine: "It's a relatively fail-safe investment for you.",
      action: { text: "Request a Call Back", link: "#", type: "primary" },
      image: "/assets/testimonials.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-white to-primary/5 py-16 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight">
              Why Actuate's Courses and Services Best Ensure Your 
              <span className="text-primary block mt-2">eLearning Investment RoI</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 font-light max-w-3xl mx-auto">
              Discover how our globally-oriented, locally-contextualized microlearning solutions 
              deliver measurable results for your organization.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/contact">
                <button className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/95 transition-all duration-300 flex items-center justify-center gap-3 shadow-sm hover:shadow-md">
                  <Phone className="w-5 h-5" />
                  <span>Request a Call Back</span>
                </button>
              </Link>
              
              <button className="bg-white text-secondary px-8 py-4 rounded-lg font-semibold border border-gray-200 hover:border-primary hover:text-primary transition-all duration-300 flex items-center justify-center gap-3">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20 md:space-y-32">
            
            {features.map((feature, index) => (
              <div key={index} className={`grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  
                  {/* Icon & Title */}
                  <div className="space-y-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl">
                      <feature.icon className="w-8 h-8 text-primary" />
                    </div>
                    
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary leading-tight">
                      {feature.title}
                    </h2>
                  </div>
                  
                  {/* Description */}
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                    {feature.description}
                  </p>
                  
                  {/* Features List (for India content) */}
                  {feature.features && (
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-900 mb-3">
                        That's why Actuate's courses utilize:
                      </p>
                      <ul className="space-y-2">
                        {feature.features.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-gray-700">
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {/* Bottom Line */}
                  <div className="bg-accent/50 rounded-lg p-4 border-l-4 border-primary">
                    <p className="text-sm font-medium text-secondary">
                      <span className="text-primary font-semibold">Bottom Line: </span>
                      {feature.bottomLine}
                    </p>
                  </div>
                  
                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <Link to={feature.action.link}>
                      <button className={`${
                        feature.action.type === 'primary' 
                          ? 'bg-primary text-white hover:bg-primary/95' 
                          : 'bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white'
                      } px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 group w-full sm:w-auto`}>
                        <span>{feature.action.text}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </Link>
                    
                    {feature.secondaryAction && (
                      <Link to={feature.secondaryAction.link}>
                        <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2 group w-full sm:w-auto">
                          <span>{feature.secondaryAction.text}</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </Link>
                    )}
                  </div>
                </div>
                
                {/* Image/Visual */}
                <div className={`relative ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="relative overflow-hidden rounded-2xl shadow-xl">
                    <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                      <feature.icon className="w-24 h-24 text-primary/30" />
                    </div>
                    
                    {/* Overlay with decorative elements */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                        <p className="text-sm font-semibold text-secondary">
                          {feature.title.split(' ').slice(0, 3).join(' ')}...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            ))}
            
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-primary/90 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6 text-white">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Ready to Transform Your eLearning Investment?
            </h2>
            
            <p className="text-lg sm:text-xl opacity-90 font-light">
              Join leading organizations across India who trust Actuate for their learning needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link to="/contact">
                <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg w-full sm:w-auto">
                  <Phone className="w-5 h-5" />
                  <span>Request a Call Back</span>
                </button>
              </Link>
              
              <button className="bg-primary/20 text-white px-8 py-4 rounded-lg font-semibold border-2 border-white/30 hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto">
                <Play className="w-5 h-5" />
                <span>Preview Content</span>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default WhyActuatePage;
