import React, { useState, useRef } from "react";
import { Play, Calendar, User, MessageCircle, X, Sparkles } from "lucide-react";
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
      <section className="bg-gradient-to-b from-primary/5 to-white py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Decision Making</span>
          </div>
          
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary leading-tight mb-4">
            The <span className="text-primary">Legacy Effect</span>
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 pb-6 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-primary" />
              <span className="font-medium">Joe Augustine</span>
            </div>
            <span className="text-gray-300">•</span>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" />
              <span>October 10, 2021</span>
            </div>
            <span className="text-gray-300">•</span>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-primary" />
              <span>1 Comment</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Introduction Card */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              In this video, one lesson a <span className="font-semibold text-secondary">cat</span> can teach us in L&D about a huge mistake we commit when making decisions and a simple tip to make our decisions more objective.
            </p>
            
            <div className="border-l-4 border-primary pl-6 space-y-3">
              <p className="text-gray-900 font-semibold text-base">Specifically, you'll learn:</p>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <p className="text-gray-700">
                    A parable that illustrates the problem of the <span className="font-semibold text-secondary">Legacy Effect</span> and how it impairs decision making
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <p className="text-gray-700">
                    Two simple questions to ask to overcome this and make your decisions more <span className="font-semibold text-secondary">objective</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Video Player - Preview from S3 */}
          <div>
            <div 
              onClick={openVideoModal}
              className="relative overflow-hidden rounded-2xl shadow-xl aspect-video cursor-pointer group"
            >
              <video
                className="w-full h-full object-cover"
                muted
                loop
                autoPlay
                playsInline
              >
                <source src="https://citruslearningsystems.s3.ap-south-1.amazonaws.com/Actuate-frontend/Videos/Legacy.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent group-hover:from-black/70 transition-all"></div>
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="text-center">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
                    <div className="relative bg-white rounded-full p-8 shadow-2xl group-hover:scale-110 transition-all duration-300">
                      <Play className="w-14 h-14 text-primary" />
                    </div>
                  </div>
                  <p className="text-white font-semibold mt-4 text-lg">Watch the Full Video</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="bg-gradient-to-br from-primary via-primary to-primary/90 rounded-2xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold">
                  Ready to Explore More?
                </h3>
              </div>
              <p className="text-white/90 mb-6 text-lg">
                Access 430+ expertly crafted microlearning courses to enhance decision-making, leadership, and professional skills.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/contact">
                  <button className="bg-white text-primary px-8 py-3.5 rounded-lg font-semibold hover:bg-gray-50 transition-all shadow-lg w-full sm:w-auto">
                    Request a Demo
                  </button>
                </Link>
                <Link to="/why-actuate">
                  <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-3.5 rounded-lg font-semibold border-2 border-white/20 hover:bg-white/20 transition-all w-full sm:w-auto">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Comments Section */}
          <div className="pt-8 border-t-2 border-gray-100">
            <div className="flex items-center gap-3 mb-8">
              <MessageCircle className="w-7 h-7 text-primary" />
              <h3 className="text-2xl font-bold text-secondary">
                Discussion <span className="text-gray-400 text-xl">(1)</span>
              </h3>
            </div>

            {/* Comment Card */}
            <div className="bg-gray-50 rounded-xl p-6 mb-6 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-bold text-secondary">Mukesh Kumar</span>
                    <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded">Oct 10, 2021 • 1:05 PM</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Pareto analysis is a very good method of problem solving.
                  </p>
                  <button className="text-sm text-primary hover:text-primary/80 font-semibold flex items-center gap-2">
                    <MessageCircle className="w-3.5 h-3.5" />
                    Reply
                  </button>
                </div>
              </div>
            </div>

            {/* Comment Form */}
            <div className="bg-white rounded-xl p-6 border-2 border-gray-100">
              <h4 className="font-bold text-secondary mb-4 text-lg">Add Your Comment</h4>
              <form onSubmit={handleSubmit} className="space-y-4">
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  required
                  rows="4"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none resize-none text-gray-700"
                  placeholder="What are your thoughts on the Legacy Effect?"
                ></textarea>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="text-sm text-gray-600">
                    Logged in as <span className="font-semibold text-secondary">Joe Augustine</span>
                  </p>
                  <button
                    type="submit"
                    className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
                  >
                    Post Comment
                  </button>
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
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeVideoModal}
              className="absolute -top-12 right-0 text-white/80 hover:text-white transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <video
                ref={videoRef}
                className="w-full aspect-video"
                controls
                autoPlay
              >
                <source src="https://citruslearningsystems.s3.ap-south-1.amazonaws.com/Actuate-frontend/Videos/Legacy.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
