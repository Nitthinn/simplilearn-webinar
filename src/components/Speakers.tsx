'use client';

import { useEffect, useState } from 'react';
import { Award, Briefcase, Globe, Linkedin, Twitter } from 'lucide-react';

const Speakers = () => {
  const [activeSpeaker, setActiveSpeaker] = useState(0);

  const speakers = [
    {
      name: 'Ravi Kumar',
      title: 'Founder & CEO, Simplilearn',
      bio: 'Former McKinsey Global Institute Fellow. Recognized as one of the world\'s most influential business leaders in AI and digital transformation.',
      achievements: [
        '20+ years in EdTech innovation',
        'Featured in Forbes 30 under 30',
        '100,000+ professionals trained globally'
      ],
      color: 'from-blue-600 to-cyan-500',
      imageColor: 'bg-blue-100'
    },
    {
      name: 'Naman Kumar',
      title: 'Partner, KPMG India',
      bio: 'Former McKinsey Global Institute Fellow. Expert in enterprise AI adoption and digital strategy with Fortune 500 experience.',
      achievements: [
        'Led 50+ digital transformations',
        'AI strategy consultant for global banks',
        'Published author on Future of Work'
      ],
      color: 'from-purple-600 to-pink-500',
      imageColor: 'bg-purple-100'
    },
    {
      name: 'Sudip Mitra',
      title: 'Partner, KPMG India',
      bio: 'Former McKinsey Global Institute Fellow. Specializes in AI governance, ethics, and scalable technology implementation.',
      achievements: [
        'Architected AI governance frameworks',
        'Advisor to government AI initiatives',
        'Speaker at 100+ international conferences'
      ],
      color: 'from-emerald-600 to-teal-500',
      imageColor: 'bg-emerald-100'
    }
  ];

  return (
    <section id="speakers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Featured <span className="gradient-text">Speakers</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Learn from industry pioneers shaping the future of AI and workforce transformation
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-hard overflow-hidden border-2 border-transparent hover:border-simplilearn-blue/30 hover-lift transition-all duration-300 ${
                activeSpeaker === index ? 'ring-2 ring-simplilearn-blue' : ''
              }`}
              onMouseEnter={() => setActiveSpeaker(index)}
            >
              {/* Speaker Image Placeholder */}
              <div className="relative h-48">
                <div className={`absolute inset-0 ${speaker.imageColor} flex items-center justify-center`}>
                  <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${speaker.color} flex items-center justify-center`}>
                    <span className="text-white text-4xl font-bold">
                      {speaker.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <Award className="w-5 h-5 text-yellow-500" />
                </div>
              </div>

              {/* Speaker Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{speaker.name}</h3>
                    <div className="flex items-center text-simplilearn-blue mt-1">
                      <Briefcase className="w-4 h-4 mr-2" />
                      <span className="font-semibold">{speaker.title}</span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-200 transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </button>
                    <button className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center hover:bg-sky-200 transition-colors">
                      <Twitter className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <p className="text-slate-600 mb-4">{speaker.bio}</p>

                <div className="space-y-2">
                  {speaker.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-simplilearn-blue mr-3"></div>
                      <span className="text-slate-700">{achievement}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-slate-200">
                  <div className="flex items-center text-sm text-slate-500">
                    <Globe className="w-4 h-4 mr-2" />
                    <span>Former McKinsey Global Institute Fellow</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Speaker Navigation Dots */}
        <div className="flex justify-center space-x-2">
          {speakers.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSpeaker(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSpeaker === index
                  ? 'bg-simplilearn-blue w-8'
                  : 'bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`View speaker ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;