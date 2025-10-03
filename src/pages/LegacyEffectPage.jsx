import React, { useState, useRef } from "react";
import { Play, Calendar, User, MessageCircle, ArrowLeft, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function LegacyEffectPage() {
  const [comment, setComment] = useState("");
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const videoRef = useRef(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Comment submitted:", comment);
    setComment("");
  };

  const openVideoModal = () => {
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-white to-primary/5 py-12 sm:py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Link to="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight mb-6">
            The <span className="text-primary">Legacy Effect</span>
          </h1>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-gray-600 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" />
              <span>October 10, 2021</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-primary" />
              <span>Joe Augustine</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-primary" />
              <span>1 Comment</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-0.5 bg-primary"></div>
            <div className="w-6 h-0.5 bg-primary/40"></div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Video Section */}
          <div className="mb-12 md:mb-16">
            <div 
              onClick={openVideoModal}
              className="relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-gray-900 to-gray-800 aspect-video group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-full p-8 shadow-2xl group-hover:scale-110 group-hover:bg-primary transition-all duration-300 inline-flex">
                    <Play className="w-16 h-16 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-white text-lg font-semibold drop-shadow-lg">
                    Watch The Legacy Effect
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="space-y-10">
            
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 border-l-4 border-primary rounded-r-2xl p-6 sm:p-8">
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg font-light">
                In this video, one lesson a cat can teach us in L&D about a <span className="font-semibold text-secondary">huge mistake we commit when making decisions</span> and a simple tip to make our decisions more objective.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
              <h2 className="text-2xl sm:text-3xl font-bold text-secondary mb-6 flex items-center gap-3">
                <div className="w-1 h-8 bg-primary rounded-full"></div>
                What You'll Learn
              </h2>
              
              <p className="text-gray-600 mb-6 font-light">Specifically:</p>
              
              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-xl flex items-center justify-center mt-0.5">
                    <div className="w-2.5 h-2.5 bg-primary rounded-full"></div>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg flex-1">
                    A parable that illustrates the problem of the <span className="font-semibold text-secondary">Legacy Effect</span> and how it impairs decision making
                  </p>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-xl flex items-center justify-center mt-0.5">
                    <div className="w-2.5 h-2.5 bg-primary rounded-full"></div>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg flex-1">
                    Two simple questions to ask to overcome this and make your decisions more <span className="font-semibold text-secondary">objective</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-8 sm:p-10 shadow-xl text-white">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Want to explore more microlearning content?
              </h3>
              <p className="text-white/90 mb-6 text-lg font-light">
                Discover our comprehensive library of 430+ courses designed to enhance decision-making, leadership, and professional skills.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <button className="bg-white text-primary px-8 py-3.5 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 shadow-md w-full sm:w-auto">
                    Request a Demo
                  </button>
                </Link>
                <Link to="/why-actuate">
                  <button className="bg-primary/20 text-white px-8 py-3.5 rounded-lg font-semibold border-2 border-white/30 hover:bg-white/10 transition-all duration-300 w-full sm:w-auto">
                    Why Actuate?
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Comments Section */}
          <div className="mt-16 md:mt-20 border-t-2 border-gray-200 pt-12 md:pt-16">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-8 flex items-center gap-3">
              <MessageCircle className="w-8 h-8 text-primary" />
              <span>Comments <span className="text-primary">(1)</span></span>
            </h3>

            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 mb-8 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                  <User className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
                    <h4 className="font-bold text-secondary text-lg">Mukesh Kumar</h4>
                    <span className="text-xs sm:text-sm text-gray-500">October 10, 2021 at 1:05 PM</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-base">
                    Pareto analysis is a very good method of problem solving.
                  </p>
                  <button className="text-sm text-primary hover:text-primary/80 font-semibold mt-4">
                    Reply
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-gray-200 shadow-sm">
              <h4 className="text-xl font-bold text-secondary mb-6">
                Leave a Comment
              </h4>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Your Comment <span className="text-primary">*</span>
                  </label>
                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none resize-none text-gray-700"
                    placeholder="Share your thoughts on the Legacy Effect..."
                  ></textarea>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                  <button
                    type="submit"
                    className="bg-primary text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-md"
                  >
                    Submit Comment
                  </button>
                  <p className="text-sm text-gray-600">
                    Logged in as <span className="font-semibold text-secondary">Joe Augustine</span>
                  </p>
                </div>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div 
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeVideoModal}
        >
          <div className="relative max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeVideoModal}
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            <div className="bg-black rounded-2xl overflow-hidden shadow-2xl">
              <video
                ref={videoRef}
                className="w-full aspect-video"
                controls
                autoPlay
              >
                <source src="/assets/legacy-effect-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
