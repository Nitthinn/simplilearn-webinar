'use client';

import { Cpu, Shield, Zap, TrendingUp } from 'lucide-react';

const FactsSection = () => {
  const facts = [
    {
      title: 'Artificial Intelligence (AI)',
      icon: Cpu,
      color: 'from-blue-500 to-cyan-500',
      facts: [
        'AI has the potential to revolutionize the way we work and live.',
        'AI-powered tools can help us automate repetitive tasks, analyze large datasets, and make better decisions.'
      ],
      stats: [
        { label: 'Market Size', value: '$1.3T', subtext: 'by 2030' },
        { label: 'Adoption Rate', value: '37%', subtext: 'annual growth' }
      ]
    },
    {
      title: 'Blockchain Technology',
      icon: Shield,
      color: 'from-purple-500 to-pink-500',
      facts: [
        'Blockchain technology can be used to create secure and transparent systems.',
        'It can be used to track the provenance of goods and services with immutable records.'
      ],
      stats: [
        { label: 'Transactions', value: '300M+', subtext: 'daily' },
        { label: 'Security', value: '99.99%', subtext: 'uptime' }
      ]
    }
  ];

  const trends = [
    {
      icon: Zap,
      title: 'Real-time Impact',
      description: 'AI implementations show 40% productivity boost within 6 months',
      color: 'text-amber-600 bg-amber-100'
    },
    {
      icon: TrendingUp,
      title: 'Exponential Growth',
      description: 'Blockchain market growing at 67% CAGR through 2030',
      color: 'text-emerald-600 bg-emerald-100'
    }
  ];

  return (
    <section id="facts" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Did You <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Know?</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Groundbreaking technologies that are reshaping industries and redefining possibilities
          </p>
        </div>

        {/* Main Facts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {facts.map((fact, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 hover-lift transition-all duration-300"
            >
              {/* Fact Header */}
              <div className="flex items-center mb-6">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${fact.color} flex items-center justify-center mr-4`}>
                  <fact.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold">{fact.title}</h3>
              </div>

              {/* Facts List */}
              <div className="space-y-4 mb-8">
                {fact.facts.map((item, i) => (
                  <div key={i} className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-slate-300">{item}</p>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {fact.stats.map((stat, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
                    <div className="text-xs text-slate-500">{stat.subtext}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Trends Section */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
          <h3 className="text-2xl font-bold mb-6 text-center">Current Market Trends</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trends.map((trend, index) => (
              <div key={index} className="bg-slate-800/30 rounded-xl p-6 hover-lift transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-lg ${trend.color.split(' ')[1]} flex items-center justify-center flex-shrink-0`}>
                    <trend.icon className={`w-6 h-6 ${trend.color.split(' ')[0]}`} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg mb-2">{trend.title}</h4>
                    <p className="text-slate-300">{trend.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-slate-300 text-lg mb-6">
            Ready to transform your organization with AI and emerging technologies?
          </p>
          <a
            href="#register"
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover-lift transition-all duration-300 group"
          >
            <span>Join the Revolution</span>
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FactsSection;