import React from "react";
import { Users, Target, TrendingUp, Award, Calendar, Building, Layers, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function ActuateAbout() {

  return (
    <>
      {/* Hero Section - Simple */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6 leading-tight">
            Helping People Be the <span className="text-primary">Best Versions of Themselves</span>
          </h1>
          <p className="text-xl text-gray-600">
            A mission born from compassion, driven by purpose
          </p>
        </div>
      </section>

      {/* Story - Clean Layout */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          
          <h2 className="text-3xl font-bold text-secondary mb-8">
            "Why are so many people unsuccessful?"
          </h2>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              <strong>Jerson James</strong>, CEO of Actuate Microlearning, clearly remembers the day when he heard of a manager at a bank committing suicide because of work-related failures. There were countless other people unable to rise above an invisible glass ceiling, stuck in their careers.
            </p>
            
            <p>
              In his teenage years, Jerson had been part of Junior Chamber International, whose creed stated: <em>"Earth's greatest treasure lies in human potential."</em>
            </p>

            <p>
              When he observed professionals struggling, he wondered how he could help them realize their God-given potential. <strong>Thus, was born Actuate Microlearning.</strong>
            </p>
          </div>

        </div>
      </section>

      {/* Mission - Bold Statement */}
      <section className="py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-6 text-center text-white">
          <p className="text-sm uppercase tracking-wider mb-4 opacity-90">Our Mission</p>
          <h2 className="text-3xl md:text-4xl font-bold leading-relaxed">
            "To help people, organisations and society be the best possible versions of themselves."
          </h2>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-12">
            What Makes Us Different
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-secondary mb-2">Created by Experts</h3>
              <p className="text-gray-600">Built by people with real business experience</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-secondary mb-2">Field-Tested</h3>
              <p className="text-gray-600">Perfected with people who use these skills</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Layers className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-secondary mb-2">Microlearning</h3>
              <p className="text-gray-600">Bite-sized video and infographic formats</p>
            </div>
          </div>

        </div>
      </section>

      {/* Stats - Clean Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="grid sm:grid-cols-3 gap-12 text-center">
            <div>
              <Calendar className="w-10 h-10 text-primary mx-auto mb-3" />
              <div className="text-5xl font-bold text-primary mb-1">2010</div>
              <div className="text-gray-600">Founded</div>
            </div>

            <div>
              <Building className="w-10 h-10 text-primary mx-auto mb-3" />
              <div className="text-5xl font-bold text-primary mb-1">150+</div>
              <div className="text-gray-600">Organizations Served</div>
            </div>

            <div>
              <Award className="w-10 h-10 text-primary mx-auto mb-3" />
              <div className="text-5xl font-bold text-primary mb-1">14+</div>
              <div className="text-gray-600">Industry Sectors</div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA - Simple */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Let us help your employees reach their full potential
          </p>
          <Link to="/contact">
            <button className="bg-primary text-white px-10 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all inline-flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>Get in Touch</span>
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
