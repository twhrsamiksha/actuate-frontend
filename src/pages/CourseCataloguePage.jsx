import React from "react";
import { BookOpen, CheckCircle, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CourseCataloguePage() {
  
  const features = [
    {
      icon: CheckCircle,
      title: "Expert Created",
      description: "Crafted by trainers and instructional design experts with business and HR expertise"
    },
    {
      icon: CheckCircle,
      title: "Field Tested",
      description: "Proven to work in real classroom settings before being packaged for you"
    },
    {
      icon: CheckCircle,
      title: "Practical & Sound",
      description: "Content that's both theoretically sound and practically applicable"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-white to-primary/5 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <BookOpen className="w-4 h-4" />
              <span>Course Library</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight mb-6">
              Explore Our <span className="text-primary">Course Catalogue</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              430+ expertly designed microlearning courses, proven in the field and ready to transform your team's capabilities.
            </p>
          </div>

          {/* Hero Image */}
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/app/assets/catalogue.png" 
                alt="Course Catalogue" 
                className="w-full h-auto aspect-video object-cover"
              />
            </div>

            {/* Stats - Below Image */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 bg-white rounded-xl p-6 shadow-lg">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">430+</div>
                <div className="text-sm text-gray-600">Total Courses</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">1800+</div>
                <div className="text-sm text-gray-600">Micro Videos</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">150+</div>
                <div className="text-sm text-gray-600">Hours of Content</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">6</div>
                <div className="text-sm text-gray-600">Content Formats</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* About Content */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 sm:p-10 border border-gray-100 shadow-sm">
              <h2 className="text-2xl sm:text-3xl font-bold text-secondary mb-6">
                Content Born from Real Experience
              </h2>
              
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Our courses are largely the product of <span className="font-semibold text-secondary">classroom workshops</span> created and delivered by a team of trainers and instructional design experts that has business, HR and instructional design capabilities.
              </p>
              
              <div className="border-l-4 border-primary pl-6 bg-primary/5 rounded-r-xl p-6 mb-6">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Our content is <span className="font-semibold text-secondary">field tested</span>, proven to work and now packaged as video-format, microlearning offerings.
                </p>
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-transparent rounded-xl p-6">
                <p className="text-lg font-bold text-secondary flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  Bottom-line: Our content is sound, while being practical.
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all hover:border-primary/30 group">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-secondary mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Card - Call Back Only */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-primary/50 transition-all shadow-sm hover:shadow-xl">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-3 text-center">
                Need Personalized Guidance?
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-center">
                Our learning consultants are ready to help you find the perfect courses for your team's needs.
              </p>
              <Link to="/contact">
                <button className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-md flex items-center justify-center gap-3 group mx-auto">
                  <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  <span>Request a Call Back</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
