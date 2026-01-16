'use client';

import { useEffect, useState } from 'react';
import { Calendar, MapPin, Clock, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const eventDetails = [
    {
      icon: Calendar,
      text: '11 February 2025',
      subtext: 'Thursday'
    },
    {
      icon: MapPin,
      text: 'Chambers Street, New York',
      subtext: 'Online & In-person'
    },
    {
      icon: Clock,
      text: '11:00 AM IST',
      subtext: '9:30 PM EST (10 Feb)'
    }
  ];

  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float delay-1000" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Title */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-100 text-simplilearn-blue font-semibold text-sm mb-6">
              <span className="w-2 h-2 bg-simplilearn-blue rounded-full mr-2 animate-pulse"></span>
              Dallas Round Table
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              The Skills That{' '}
              <span className="gradient-text">Matter Next</span>
            </h1>
            
            <h2 className="text-2xl md:text-4xl font-semibold text-slate-800 mb-8">
              Preparing Your Workforce & Leaders for the{' '}
              <span className="relative">
                <span className="text-simplilearn-blue">AI Era</span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-simplilearn-blue to-transparent rounded-full"></span>
              </span>
            </h2>
          </div>

          {/* Description */}
          <div
            className={`max-w-3xl mx-auto mb-12 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              This exclusive webinar unveils transformative insights from our latest research 
              on scaling AI-ready teams and future-proofing your organization.
            </p>
          </div>

          {/* Event Details Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto">
            {eventDetails.map((detail, index) => (
              <div
                key={index}
                className={`glass-effect rounded-xl p-6 shadow-soft hover-lift transition-all duration-500 delay-${(index + 1) * 200} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-simplilearn-blue to-simplilearn-purple rounded-lg flex items-center justify-center mb-4">
                    <detail.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="font-bold text-slate-800 text-lg">{detail.text}</div>
                  <div className="text-slate-500 text-sm mt-1">{detail.subtext}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <a
              href="#register"
              className="bg-gradient-to-r from-simplilearn-blue to-simplilearn-purple text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-hard hover-lift animate-pulse-glow transition-all duration-300"
            >
              Reserve Your Seat
            </a>
            <a
              href="#speakers"
              className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-simplilearn-blue hover:text-simplilearn-blue hover-lift transition-all duration-300"
            >
              Meet Our Speakers
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 animate-bounce">
            <a
              href="#skills"
              className="inline-flex flex-col items-center text-slate-500 hover:text-simplilearn-blue transition-colors"
            >
              <span className="text-sm font-medium mb-2">Explore More</span>
              <ChevronDown className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;