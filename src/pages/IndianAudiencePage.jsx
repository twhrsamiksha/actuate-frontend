import React, { useState } from "react";
import { Globe, MapPin, Download, Phone, Play, CheckCircle, ArrowRight, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function IndianAudiencePage() {
  const [activeVideo, setActiveVideo] = useState(null);

  const openVideo = (videoSrc) => {
    setActiveVideo(videoSrc);
  };

  const closeVideo = () => {
    setActiveVideo(null);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-white to-primary/5 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <MapPin className="w-4 h-4" />
            <span>Made for India</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight mb-6">
            Why Our Content is Best Suited for an <span className="text-primary">Indian Audience</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Content with a global orientation but rooted in Indian context - the perfect blend for effective learning.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* Global Orientation Section */}
          <div>
            <div className="max-w-4xl mx-auto mb-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center">
                  <Globe className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary">
                    Content with a Global Orientation
                  </h2>
                  <p className="text-lg text-primary font-semibold">Based on the Soundest Research</p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                You want your employees to learn from the best, worldwide.
              </p>

              <p className="text-gray-700 leading-relaxed text-lg mb-8">
                That is why Actuate's content draws upon case studies and research from the best sources from across the world. See the video below as a case in point.
              </p>

              {/* Video 1 - Global Content - Shows Video Preview */}
              <div 
                onClick={() => openVideo("/assets/india1.mp4")}
                className="relative rounded-2xl overflow-hidden shadow-xl aspect-video mb-8 group cursor-pointer"
              >
                <video
                  className="w-full h-full object-cover"
                  muted
                  loop
                  autoPlay
                  playsInline
                >
                  <source src="/assets/india1.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:from-black/60 transition-all"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="relative">
                    <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
                    <div className="relative bg-white rounded-full p-8 shadow-2xl group-hover:scale-110 transition-all duration-300">
                      <Play className="w-14 h-14 text-primary" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Line Box */}
              <div className="bg-gradient-to-r from-primary/10 to-transparent rounded-xl p-6 border-l-4 border-primary">
                <p className="text-lg font-bold text-secondary flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>The bottom line: Equip your employees with content that's on par with any available, globally.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gray-200"></div>
            <div className="mx-4 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gray-200"></div>
          </div>

          {/* Made in India Section */}
          <div>
            <div className="max-w-4xl mx-auto mb-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary">
                    Content Made in India, for India
                  </h2>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed text-lg mb-8">
                Now, while our content is on par with what's available globally, we recognise that if the Indian learner is to relate to and be able to learn from it, it must be local in its content. It must be contextualised to the Indian workplace scenario.
              </p>

              {/* Features Grid */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 shadow-sm mb-8">
                <h3 className="text-xl font-bold text-secondary mb-6">All our content has been:</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      <span className="font-semibold text-secondary">Created in India</span>
                    </p>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Uses <span className="font-semibold text-secondary">Indian scenarios and actors</span> making the lessons comprehensible and relatable
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed text-lg mb-8">
                Watch the video clips below as an illustration:
              </p>

              {/* Video 2 - Indian Content - Shows Video Preview */}
              <div 
                onClick={() => openVideo("/assets/india2.mp4")}
                className="relative rounded-2xl overflow-hidden shadow-xl aspect-video mb-8 group cursor-pointer"
              >
                <video
                  className="w-full h-full object-cover"
                  muted
                  loop
                  autoPlay
                  playsInline
                >
                  <source src="/assets/india2.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:from-black/60 transition-all"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="relative">
                    <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
                    <div className="relative bg-white rounded-full p-8 shadow-2xl group-hover:scale-110 transition-all duration-300">
                      <Play className="w-14 h-14 text-primary" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Line Box */}
              <div className="bg-gradient-to-r from-primary/10 to-transparent rounded-xl p-6 border-l-4 border-primary">
                <p className="text-lg font-bold text-secondary flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>The bottom line: Eliminate the complaint that learners have about foreign content being unrelatable and incomprehensible.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Catalogue CTA Section */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-4">
                Explore Our Course Catalogue
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg max-w-3xl mx-auto">
                Our courses are the product of the many years of highly successful, customised classroom workshops that we have delivered to our clients. We've now packaged this content as video-based, micro e-learning offerings.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              
              {/* Download Card */}
              <div className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                    <Download className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">
                    Download Catalogue
                  </h3>
                  <p className="text-white/90 mb-6 leading-relaxed">
                    Get detailed information about all our courses and see how they're perfect for Indian learners.
                  </p>
                  <a 
                    href="https://actuatemicrolearning.com/wp-content/uploads/2020/03/Actuate_Micro_Learning_Brochure_v2.pdf"
                    download
                    className="inline-block"
                  >
                    <button className="bg-white text-primary px-6 py-3.5 rounded-lg font-semibold hover:bg-gray-50 transition-all shadow-lg flex items-center gap-3 group">
                      <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                      <span>Download Now</span>
                    </button>
                  </a>
                </div>
              </div>

              {/* Call Back Card */}
              <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-primary/50 transition-all shadow-sm hover:shadow-xl">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Phone className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-3">
                  Need Assistance?
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our team is ready to help you understand how our India-focused content can benefit your organization.
                </p>
                <Link to="/contact">
                  <button className="bg-primary text-white px-6 py-3.5 rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-md flex items-center gap-3 group">
                    <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    <span>Request a Call Back</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Video Modal */}
      {activeVideo && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeVideo}
        >
          <div className="relative max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={closeVideo}
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Video Player */}
            <video
              className="w-full rounded-2xl shadow-2xl"
              controls
              autoPlay
            >
              <source src={activeVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  );
}
