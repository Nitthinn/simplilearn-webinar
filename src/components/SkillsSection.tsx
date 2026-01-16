'use client';

import { useEffect, useState } from 'react';
import { Database, Cpu, Monitor, Users, Target, TrendingUp } from 'lucide-react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById('skills');
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Skills Needed for Success',
      subtitle: 'Future Workplace Essentials',
      icon: Target,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        {
          icon: Database,
          title: 'Data Literacy',
          description: 'Understand data and its implications for decision making',
          points: ['Statistical Analysis', 'Data Visualization', 'Metrics Interpretation']
        },
        {
          icon: Cpu,
          title: 'AI Literacy',
          description: 'Master AI concepts and practical applications',
          points: ['Machine Learning', 'Prompt Engineering', 'AI Ethics']
        },
        {
          icon: Monitor,
          title: 'Digital Literacy',
          description: 'Leverage digital tools for maximum productivity',
          points: ['Cloud Platforms', 'Collaboration Tools', 'Automation']
        }
      ]
    },
    {
      title: 'Building High-Performing Teams',
      subtitle: 'Leadership & Collaboration',
      icon: Users,
      color: 'from-purple-500 to-pink-500',
      skills: [
        {
          icon: Users,
          title: 'Team Building',
          description: 'Understand team dynamics and leadership styles',
          points: ['Conflict Resolution', 'Agile Methodologies', 'Remote Collaboration']
        },
        {
          icon: Target,
          title: 'Leadership Development',
          description: 'Develop leadership skills through coaching and feedback',
          points: ['Mentorship Programs', 'Feedback Culture', 'Strategic Thinking']
        }
      ]
    },
    {
      title: 'Technology in Work',
      subtitle: 'Adoption & Trends',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500',
      skills: [
        {
          icon: TrendingUp,
          title: 'Technology Adoption',
          description: 'Understand how technology is transforming work',
          points: ['Change Management', 'Digital Transformation', 'ROI Measurement']
        },
        {
          icon: Cpu,
          title: 'Tech Trends',
          description: 'Stay updated with the latest innovations',
          points: ['Generative AI', 'Web3', 'Quantum Computing']
        }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            What <span className="gradient-text">We'll Explore</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive insights into building scalable, AI-ready teams and organizations
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`bg-white rounded-2xl shadow-soft overflow-hidden hover-lift transition-all duration-500 ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              {/* Category Header */}
              <div className={`bg-gradient-to-r ${category.color} p-6`}>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                    <p className="text-white/80 text-sm">{category.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Skills List */}
              <div className="p-6">
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="group p-4 rounded-xl border border-slate-200 hover:border-simplilearn-blue/30 hover:bg-blue-50/50 transition-all duration-300"
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center flex-shrink-0`}>
                          <skill.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-slate-800 group-hover:text-simplilearn-blue transition-colors">
                            {skill.title}
                          </h4>
                          <p className="text-slate-600 text-sm mt-1 mb-3">
                            {skill.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {skill.points.map((point, pointIndex) => (
                              <span
                                key={pointIndex}
                                className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium group-hover:bg-blue-100 group-hover:text-simplilearn-blue transition-colors"
                              >
                                {point}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;