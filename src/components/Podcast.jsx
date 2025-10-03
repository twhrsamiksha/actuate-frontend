import React from "react";
import { BookOpen, Clock, Sparkles, ArrowRight, Calendar } from "lucide-react";

const blogs = [
  {
    title: "Leadership in the Digital Age",
    readTime: "8 min read",
    description: "Learn how modern leaders are adapting to digital transformation.",
    image: "/assets/podcast1.png",
    date: "Oct 15, 2025"
  },
  {
    title: "Building High-Performance Teams",
    readTime: "12 min read",
    description: "Strategies to create and manage successful teams in any industry.",
    image: "/assets/podcast2.jpg",
    date: "Oct 10, 2025"
  },
  {
    title: "The Art of Effective Communication",
    readTime: "6 min read",
    description: "Master the skills that drive meaningful workplace conversations.",
    image: "/assets/podcast3.png",
    date: "Oct 5, 2025"
  },
  {
    title: "Innovation & Creative Thinking",
    readTime: "10 min read",
    description: "Unlock your creative potential and drive innovation at work.",
    image: "/assets/podcast4.jpg",
    date: "Sep 28, 2025"
  }
];

export default function Blogs() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-3">
            <BookOpen className="w-4 h-4" />
            <span>Insights & Articles</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              Discover Our <span className="text-primary">Blogs</span>
          </h2>
          
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-4"></div>
          
          <p className="text-gray-600 text-base max-w-2xl mx-auto">
            Explore our blogs to elevate your learning and development journey.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {blogs.map((blog, i) => (
            <div 
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-gray-100"
            >
              <div className="flex flex-col sm:flex-row">
                {/* Image Section */}
                <div className="sm:w-48 h-48 sm:h-auto relative overflow-hidden flex-shrink-0">
                  <img 
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Read Time Badge */}
                  <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-primary" />
                    <span className="text-xs font-semibold text-gray-800">{blog.readTime}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 p-6">
                  {/* Date */}
                  <div className="flex items-center gap-1.5 text-gray-500 text-xs mb-2">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{blog.date}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors duration-300">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {blog.description}
                  </p>
                  
                  <button className="text-primary font-semibold text-sm flex items-center gap-2 group/btn">
                    <span>Read More</span>
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
            <span>View All Blogs</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}
