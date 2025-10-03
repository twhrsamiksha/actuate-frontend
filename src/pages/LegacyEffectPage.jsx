import React, { useState, useRef } from "react";
import { Play, Calendar, User, MessageCircle, ArrowLeft, X, ChevronRight, Clock, Eye } from "lucide-react";
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
      {/* Hero Section with Breadcrumb */}
      <section className="relative bg-gradient-to-br from-primary/10 via-white to-primary/5 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/" className="hover:text-primary transition-colors">Learning Resources</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-primary font-medium">The Legacy Effect</span>
          </div>

          {/* Title Section */}
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Play className="w-4 h-4" />
              <span>Video Lesson</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight mb-6">
              The <span className="text-primary">Legacy Effect</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-6">
              Learn how a cat's lesson can transform your decision-making approach in L&D
            </p>

            {/* Meta Info Cards */}
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 shadow-sm border border-gray-100">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-gray-700">Oct 10, 2021</span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 shadow-sm border border-gray-100">
                <User className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-gray-700">Joe Augustine</span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 shadow-sm border border-gray-100">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-gray-700">5 min read</span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 shadow-sm border border-gray-100">
                <Eye className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-gray-700">1.2k views</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-10">
              
              {/* Video Section - Enhanced */}
              <div className="group">
                <div 
                  onClick={openVideoModal}
                  className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 aspect-video cursor-pointer transform transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl"
                >
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                  
                  {/* Center play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      {/* Pulsing ring */}
                      <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
                      {/* Play button */}
                      <div className="relative bg-white rounded-full p-8 shadow-2xl group-hover:bg-primary transition-all duration-300 group-hover:scale-110">
                        <Play className="w-16 h-16 text-primary group-hover:text-white fill-current transition-colors" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom overlay with title */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <div className="flex items-center gap-3 text-white">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Play className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-semibold text-lg">Watch Full Video</p>
                        <p className="text-sm text-white/80">Click to play</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Introduction Card */}
              <div className="bg-gradient-to-br from-primary/5 via-primary/3 to-transparent border-l-4 border-primary rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-secondary mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-primary" />
                  </div>
                  About This Lesson
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  In this video, discover one powerful lesson a <span className="font-semibold text-secondary">cat can teach us in L&D</span> about a huge mistake we often commit when making decisions, plus a simple tip to make your decisions more objective.
                </p>
              </div>

              {/* Key Takeaways Card */}
              <div className="bg-white rounded-2xl border-2 border-gray-100 p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-secondary mb-6 flex items-center gap-3">
                  <div className="w-1.5 h-10 bg-gradient-to-b from-primary to-primary/50 rounded-full"></div>
                  Key Takeaways
                </h2>
                
                <div className="space-y-6">
                  <div className="group flex gap-5 p-5 rounded-xl hover:bg-primary/5 transition-all duration-300 cursor-pointer border border-transparent hover:border-primary/20">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <span className="text-white font-bold text-lg">1</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-secondary text-lg mb-2">The Parable</h3>
                      <p className="text-gray-600 leading-relaxed">
                        A parable that illustrates the problem of the <span className="font-semibold text-secondary">Legacy Effect</span> and how it impairs decision making in learning and development.
                      </p>
                    </div>
                  </div>
                  
                  <div className="group flex gap-5 p-5 rounded-xl hover:bg-primary/5 transition-all duration-300 cursor-pointer border border-transparent hover:border-primary/20">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <span className="text-white font-bold text-lg">2</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-secondary text-lg mb-2">Practical Solutions</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Two simple yet powerful questions to ask yourself to overcome the Legacy Effect and make your decisions more <span className="font-semibold text-secondary">objective and effective</span>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comments Section */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-secondary mb-6 flex items-center gap-3">
                  <MessageCircle className="w-7 h-7 text-primary" />
                  <span>Discussion <span className="text-primary">(1)</span></span>
                </h3>

                {/* Existing Comment */}
                <div className="bg-white rounded-xl p-6 mb-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-bold text-secondary">Mukesh Kumar</h4>
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">Oct 10, 2021</span>
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-3">
                        Pareto analysis is a very good method of problem solving.
                      </p>
                      <button className="text-sm text-primary hover:text-primary/80 font-semibold flex items-center gap-2 group">
                        <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        Reply
                      </button>
                    </div>
                  </div>
                </div>

                {/* Comment Form */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <h4 className="text-lg font-bold text-secondary mb-4">
                    Share Your Thoughts
                  </h4>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <textarea
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      required
                      rows="4"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none resize-none text-gray-700"
                      placeholder="What are your thoughts on the Legacy Effect?"
                    ></textarea>
                    
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-gray-500">
                        Logged in as <span className="font-semibold text-secondary">Joe Augustine</span>
                      </p>
                      <button
                        type="submit"
                        className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg"
                      >
                        Post Comment
                      </button>
                    </div>
                  </form>
                </div>
              </div>

            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              
              {/* CTA Card */}
              <div className="sticky top-8 bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-6 shadow-xl text-white">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                  <Play className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Explore More Content
                </h3>
                <p className="text-white/90 text-sm mb-6 leading-relaxed">
                  Discover 430+ microlearning courses designed to enhance skills and drive results.
                </p>
                <div className="space-y-3">
                  <Link to="/contact" className="block">
                    <button className="w-full bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 shadow-md">
                      Request Demo
                    </button>
                  </Link>
                  <Link to="/why-actuate" className="block">
                    <button className="w-full bg-primary/20 text-white px-6 py-3 rounded-lg font-semibold border-2 border-white/30 hover:bg-white/10 transition-all duration-300">
                      Why Actuate?
                    </button>
                  </Link>
                </div>
              </div>

              {/* Related Topics */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h4 className="font-bold text-secondary mb-4 flex items-center gap-2">
                  <div className="w-1 h-5 bg-primary rounded-full"></div>
                  Related Topics
                </h4>
                <div className="space-y-3">
                  {['Decision Making', 'Cognitive Biases', 'Leadership Skills', 'Problem Solving'].map((topic, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors cursor-pointer group">
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div 
          className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={closeVideoModal}
        >
          <div className="relative max-w-6xl w-full animate-fadeIn" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeVideoModal}
              className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors group"
            >
              <div className="flex items-center gap-2">
                <span className="text-sm">Close</span>
                <X className="w-8 h-8 group-hover:rotate-90 transition-transform duration-300" />
              </div>
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
