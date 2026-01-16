'use client';

import { Target, Rocket, Users, BarChart } from 'lucide-react';

const Vision = () => {
  const visionPoints = [
    {
      icon: Target,
      title: 'Future-Ready Workforce',
      description: 'Equip your team with skills that transcend current market demands',
      color: 'text-blue-600 bg-blue-100'
    },
    {
      icon: Rocket,
      title: 'AI-First Strategy',
      description: 'Integrate artificial intelligence into your core business processes',
      color: 'text-purple-600 bg-purple-100'
    },
    {
      icon: Users,
      title: 'Inclusive Leadership',
      description: 'Develop leaders who can navigate diverse, distributed teams',
      color: 'text-emerald-600 bg-emerald-100'
    },
    {
      icon: BarChart,
      title: 'Data-Driven Decisions',
      description: 'Transform raw data into actionable business intelligence',
      color: 'text-amber-600 bg-amber-100'
    }
  ];

  return (
    <section id="vision" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our Vision for{' '}
              <span className="relative">
                Tomorrow
                <span className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full"></span>
              </span>
            </h2>
            
            <div className="space-y-6">
              <p className="text-xl text-slate-700 leading-relaxed">
                We believe that the future of work is not just about what we know today, 
                but also about what we can achieve tomorrow.
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                That's why we're committed to helping you stay ahead of the curve and 
                prepare for the challenges and opportunities of the future.
              </p>
              
              <div className="mt-8 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 shadow-soft">
                <h4 className="font-bold text-slate-800 text-lg mb-3">Transformative Impact</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-xl">
                    <div className="text-3xl font-bold text-simplilearn-blue">85%</div>
                    <div className="text-sm text-slate-600">Faster skill adoption</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-xl">
                    <div className="text-3xl font-bold text-simplilearn-purple">3x</div>
                    <div className="text-sm text-slate-600">ROI on training</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="grid grid-cols-2 gap-6">
            {visionPoints.map((point, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-soft hover-lift transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-12 h-12 rounded-xl ${point.color.split(' ')[1]} flex items-center justify-center mb-4`}>
                  <point.icon className={`w-6 h-6 ${point.color.split(' ')[0]}`} />
                </div>
                <h3 className="font-bold text-slate-800 text-lg mb-2">{point.title}</h3>
                <p className="text-slate-600 text-sm">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;