'use client';

import { useState } from 'react';
import { Check, AlertCircle, Loader2 } from 'lucide-react';

const RSVPForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    attendees: '1'
  });
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    // Simulate API call
    setTimeout(() => {
      if (formData.email && formData.name) {
        setStatus('success');
        setMessage('Registration successful! Check your email for confirmation.');
        setFormData({ name: '', email: '', company: '', role: '', attendees: '1' });
        
        // In real implementation, submit to Airtable
        // await submitToAirtable(formData);
      } else {
        setStatus('error');
        setMessage('Please fill in all required fields.');
      }
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="register" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl shadow-hard overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-simplilearn-blue to-simplilearn-purple p-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Reserve Your Seat
            </h2>
            <p className="text-blue-100 text-lg">
              Limited spots available. Register now to secure your place.
            </p>
          </div>

          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Event Details */}
              <div>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Event Details</h3>
                  <div className="space-y-6">
                    <div className="flex items-center p-4 bg-white rounded-xl shadow-sm">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-blue-600 font-bold">📅</span>
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">Date & Time</div>
                        <div className="text-slate-600">11 February 2025 • 11:00 AM IST</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-4 bg-white rounded-xl shadow-sm">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-purple-600 font-bold">📍</span>
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">Location</div>
                        <div className="text-slate-600">Online & Chambers Street, NY</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-4 bg-white rounded-xl shadow-sm">
                      <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-emerald-600 font-bold">🎁</span>
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">Free Registration</div>
                        <div className="text-slate-600">Includes certificate & resources</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                    <div className="text-2xl font-bold text-simplilearn-blue">85%</div>
                    <div className="text-sm text-slate-600">Filled</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                    <div className="text-2xl font-bold text-simplilearn-purple">24</div>
                    <div className="text-sm text-slate-600">Hours Left</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                    <div className="text-2xl font-bold text-emerald-600">500+</div>
                    <div className="text-sm text-slate-600">Attending</div>
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-simplilearn-blue focus:ring-2 focus:ring-simplilearn-blue/20 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-simplilearn-blue focus:ring-2 focus:ring-simplilearn-blue/20 outline-none transition-all"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-simplilearn-blue focus:ring-2 focus:ring-simplilearn-blue/20 outline-none transition-all"
                        placeholder="Your company"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Role
                      </label>
                      <input
                        type="text"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-simplilearn-blue focus:ring-2 focus:ring-simplilearn-blue/20 outline-none transition-all"
                        placeholder="Your position"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Number of Attendees
                    </label>
                    <select
                      name="attendees"
                      value={formData.attendees}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-simplilearn-blue focus:ring-2 focus:ring-simplilearn-blue/20 outline-none transition-all"
                    >
                      {[1, 2, 3, 4, 5].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'person' : 'people'}</option>
                      ))}
                    </select>
                  </div>

                  {/* Status Message */}
                  {message && (
                    <div className={`p-4 rounded-xl flex items-center space-x-3 ${
                      status === 'success' ? 'bg-emerald-50 text-emerald-800' : 'bg-red-50 text-red-800'
                    }`}>
                      {status === 'success' ? (
                        <Check className="w-5 h-5" />
                      ) : (
                        <AlertCircle className="w-5 h-5" />
                      )}
                      <span>{message}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-gradient-to-r from-simplilearn-blue to-simplilearn-purple text-white py-4 rounded-xl font-semibold text-lg hover:shadow-hard hover-lift disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      'Register Now'
                    )}
                  </button>

                  <p className="text-center text-slate-500 text-sm">
                    By registering, you agree to our{' '}
                    <a href="#" className="text-simplilearn-blue hover:underline">Terms</a>
                    {' '}and{' '}
                    <a href="#" className="text-simplilearn-blue hover:underline">Privacy Policy</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RSVPForm;