import React from "react";
import { Users, TrendingUp, MessageCircle, FileText, Clock, CheckCircle, Phone, Calendar, ArrowRight, Target } from "lucide-react";
import { Link } from "react-router-dom";

export default function ROIPage() {
  
  const services = [
    {
      icon: TrendingUp,
      title: "Year-Round Engagement Initiatives",
      description: "Run a slew of initiatives – year-round – to ensure greater user engagement with our courses"
    },
    {
      icon: MessageCircle,
      title: "Complete Communication Management",
      description: "Manage all communication with users, keeping them informed and engaged"
    },
    {
      icon: FileText,
      title: "Reports & Dashboards",
      description: "Create comprehensive reports and dashboards related to our courses for actionable insights"
    },
    {
      icon: Clock,
      title: "24-Hour Grievance Resolution",
      description: "Resolve any employee grievances related to our courses within 24 hours"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-white to-primary/5 py-20 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Target className="w-4 h-4" />
            <span>Partnership Model</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight mb-6">
            How Actuate Helps You Drive <span className="text-primary">eLearning Investment RoI</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            More than a course provider – a true partner committed to your success
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* Problem Statement */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary mb-6">
              You Need More Than Just Courses
            </h2>
            
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              You don't want an e-learning course provider who simply <span className="font-semibold text-secondary">'dumps the courses on you and then disappears'</span>.
            </p>
            
            <p className="text-gray-700 leading-relaxed text-lg">
              Rather, you want an <span className="font-semibold text-primary">eLearning partner</span> who will do the heavy lifting required to help your e-learning strategy succeed.
            </p>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gray-200"></div>
            <div className="mx-4 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gray-200"></div>
          </div>

          {/* Our Approach */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-4">
              In the Trenches with You
            </h2>
            <p className="text-lg text-primary font-semibold mb-6">Driving eLearning Investment RoI</p>

            <p className="text-gray-700 leading-relaxed text-lg">
              At Actuate, we don't just give you gorgeous micro video courses that users love. With us, you get a partner who will be <span className="font-semibold text-secondary">in the trenches with you</span>, helping ensure your e-learning initiatives succeed.
            </p>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gray-200"></div>
            <div className="mx-4 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gray-200"></div>
          </div>

          {/* How We Help */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary mb-4 text-center">
              How We Help Your Strategy Succeed
            </h2>
            
            <p className="text-gray-600 text-center mb-12">Specifically, we:</p>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {services.map((service, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-secondary mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Line */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 text-center border-2 border-primary/20">
              <CheckCircle className="w-10 h-10 text-primary mx-auto mb-4" />
              <p className="text-xl font-bold text-secondary mb-2">
                Bottom Line
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Offload all the hard work required to help your e-learning strategy bear fruit.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-primary/90 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 text-white">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto">
              <Calendar className="w-8 h-8" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold">
              Would You Like to Explore This Further?
            </h2>
            
            <p className="text-lg text-white/90 leading-relaxed max-w-2xl mx-auto">
              If you could spare <span className="font-semibold">twenty minutes</span> from your schedule, we could explore how Actuate can be the right e-learning partner for you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/contact">
                <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all shadow-lg flex items-center justify-center gap-3 w-full sm:w-auto">
                  <Phone className="w-5 h-5" />
                  <span>Schedule a Demo</span>
                </button>
              </Link>
              
              <Link to="/why-actuate">
                <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold border-2 border-white/20 hover:bg-white/20 transition-all flex items-center justify-center gap-3 w-full sm:w-auto">
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
