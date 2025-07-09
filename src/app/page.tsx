'use client'
import React, { useState, useEffect } from 'react';

const MiloKhelo = () => {
  const [theme, setTheme] = useState('dark');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const features = [
    {
      icon: '🎯',
      title: 'Smart Match Discovery',
      description: 'AI-powered game recommendations based on your skill level, location, and preferences. Find the perfect match in seconds.',
      color: 'from-blue-500 to-purple-600',
      delay: '0ms'
    },
    {
      icon: '⚡',
      title: 'Instant Join System',
      description: 'One-tap RSVP with real-time availability updates. Smart notifications keep you in the loop without the spam.',
      color: 'from-emerald-500 to-teal-600',
      delay: '100ms'
    },
    {
      icon: '🏆',
      title: 'Reputation Engine',
      description: 'Build trust through verified ratings and achievements. Unlock exclusive games and become a community leader.',
      color: 'from-yellow-500 to-orange-600',
      delay: '200ms'
    },
    {
      icon: '💬',
      title: 'Team Hub',
      description: 'Dedicated spaces for team coordination with rich media sharing, polls, and integrated calendar management.',
      color: 'from-purple-500 to-pink-600',
      delay: '300ms'
    },
    {
      icon: '📍',
      title: 'Location Intelligence',
      description: 'Hyper-local game discovery with venue insights, weather integration, and real-time traffic updates.',
      color: 'from-red-500 to-rose-600',
      delay: '400ms'
    },
    {
      icon: '🔔',
      title: 'Smart Alerts',
      description: 'Contextual notifications that learn your preferences. Get reminded of what matters, when it matters.',
      color: 'from-indigo-500 to-blue-600',
      delay: '500ms'
    }
  ];

  const stats = [
    { value: '25K+', label: 'Active Players', icon: '👥', color: 'from-blue-500 to-purple-500' },
    { value: '1.2K+', label: 'Games Weekly', icon: '🎮', color: 'from-emerald-500 to-teal-500' },
    { value: '97%', label: 'Match Success', icon: '✨', color: 'from-yellow-500 to-orange-500' },
    { value: '75+', label: 'Sports Covered', icon: '🏆', color: 'from-purple-500 to-pink-500' }
  ];

  const testimonials = [
    {
      name: 'Arjun Sharma',
      role: 'Cricket Captain',
      content: 'Found my regular cricket team through MiloKhelo. The skill matching is spot-on!',
      rating: 5,
      avatar: '🏏'
    },
    {
      name: 'Priya Patel',
      role: 'Football Enthusiast',
      content: 'Never struggled to find weekend football games again. The community is amazing.',
      rating: 5,
      avatar: '⚽'
    },
    {
      name: 'Rohan Kumar',
      role: 'Basketball Player',
      content: 'The rating system helped me find players at my level. Game-changer!',
      rating: 5,
      avatar: '🏀'
    }
  ];

  const FeatureCard = ({ icon, title, description, color, delay }) => (
    <div 
      className={`group relative overflow-hidden rounded-3xl transition-all duration-700 hover:scale-105 hover:-translate-y-2 ${
        theme === 'dark' 
          ? 'bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20' 
          : 'bg-black/5 backdrop-blur-xl border border-black/10 hover:border-black/20'
      }`}
      style={{ animationDelay: delay }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
      <div className="relative p-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="text-4xl group-hover:scale-110 transition-transform duration-500">
            {icon}
          </div>
          <div className={`w-12 h-1 bg-gradient-to-r ${color} rounded-full group-hover:w-16 transition-all duration-500`} />
        </div>
        <h3 className={`text-xl font-bold mb-3 transition-all duration-500 ${
          theme === 'dark' 
            ? 'text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text' 
            : 'text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 group-hover:bg-clip-text'
        }`}>
          {title}
        </h3>
        <p className={`leading-relaxed transition-colors duration-500 ${
          theme === 'dark' 
            ? 'text-gray-400 group-hover:text-gray-300' 
            : 'text-gray-600 group-hover:text-gray-700'
        }`}>
          {description}
        </p>
        <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${color} w-0 group-hover:w-full transition-all duration-700`} />
      </div>
    </div>
  );

  const StatCard = ({ value, label, icon, color }) => (
    <div className="relative group">
      <div className={`absolute inset-0 bg-gradient-to-r ${color}/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500`} />
      <div className={`relative backdrop-blur-xl rounded-2xl p-6 border transition-all duration-500 ${
        theme === 'dark' 
          ? 'bg-white/5 border-white/10 group-hover:border-white/20' 
          : 'bg-black/5 border-black/10 group-hover:border-black/20'
      }`}>
        <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-500">{icon}</div>
        <div className={`text-3xl font-bold mb-1 transition-colors duration-500 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>{value}</div>
        <div className={`text-sm transition-colors duration-500 ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
        }`}>{label}</div>
      </div>
    </div>
  );

  const TestimonialCard = ({ name, role, content, rating, avatar }) => (
    <div className={`relative p-6 rounded-2xl backdrop-blur-xl border transition-all duration-500 hover:scale-105 ${
      theme === 'dark' 
        ? 'bg-white/5 border-white/10 hover:border-white/20' 
        : 'bg-black/5 border-black/10 hover:border-black/20'
    }`}>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center text-xl">
          {avatar}
        </div>
        <div>
          <h4 className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{name}</h4>
          <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{role}</p>
        </div>
      </div>
      <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{content}</p>
      <div className="flex gap-1">
        {[...Array(rating)].map((_, i) => (
          <span key={i} className="text-yellow-400">⭐</span>
        ))}
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen transition-all duration-1000 ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-gray-900 via-black to-gray-800' 
        : 'bg-gradient-to-br from-blue-50 via-white to-emerald-50'
    }`}>
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl animate-pulse"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: 'left 0.3s ease-out, top 0.3s ease-out'
          }}
        />
        <div 
          className="absolute w-72 h-72 rounded-full bg-gradient-to-r from-emerald-500/5 to-teal-500/5 blur-2xl animate-ping" 
          style={{ 
            animationDuration: '4s',
            left: '25%',
            top: `${25 + scrollY * 0.1}%`
          }} 
        />
        <div 
          className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-yellow-500/5 to-orange-500/5 blur-2xl animate-ping" 
          style={{ 
            animationDuration: '6s',
            right: '25%',
            bottom: `${25 + scrollY * 0.05}%`
          }} 
        />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 py-10">
        {/* Enhanced Theme Toggle */}
        <button
          onClick={toggleTheme}
          className={`fixed top-6 right-6 z-50 p-4 rounded-full backdrop-blur-xl border transition-all duration-300 hover:scale-110 ${
            theme === 'dark' 
              ? 'bg-white/10 border-white/20 hover:bg-white/20' 
              : 'bg-black/10 border-black/20 hover:bg-black/20'
          }`}
        >
          <span className="text-2xl">{theme === 'dark' ? '☀️' : '🌙'}</span>
        </button>

        {/* Enhanced Header */}
        <header className={`max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 mb-20 ${isLoaded ? 'animate-fadeIn' : 'opacity-0'}`}>
          <div className="flex items-center gap-4 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
              <div className="relative w-16 h-16 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <span className="text-white font-bold text-2xl">M</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
              MiloKhelo
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <button className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
              theme === 'dark' 
                ? 'text-white hover:bg-white/10' 
                : 'text-gray-900 hover:bg-black/10'
            }`}>
              How it Works
            </button>
            <button className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-bold overflow-hidden hover:scale-105 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative flex items-center gap-2">
                Join Beta
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          </div>
        </header>

        {/* Enhanced Hero Section */}
        <section className="max-w-6xl mx-auto text-center space-y-12 mb-32">
          <div className="space-y-8">
            <div className={`inline-flex items-center px-6 py-3 backdrop-blur-xl rounded-full border ${
              theme === 'dark' 
                ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-white/20' 
                : 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20'
            }`}>
              <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 animate-pulse" />
              <span className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Sports Community • Real Players • Launching Soon
              </span>
            </div>
            
            <h2 className="text-6xl md:text-8xl font-black leading-tight">
              <span className={`block bg-gradient-to-r bg-clip-text text-transparent ${
                theme === 'dark' 
                  ? 'from-white via-blue-200 to-white' 
                  : 'from-gray-900 via-blue-600 to-gray-900'
              }`}>
                Where Every Player
              </span>
              <span className="block bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Finds Their Game
              </span>
            </h2>
            
            <p className={`text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Connect with local athletes and casual players in your area. Join pick-up games, form teams, and build lasting sports communities through our 
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text font-semibold"> trusted platform.</span>
            </p>
          </div>

          {/* Enhanced Quick Features */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              { icon: '🎯', title: 'Smart Discovery', desc: 'AI-powered game matching' },
              { icon: '⚡', title: 'Instant Join', desc: 'One-tap game participation' },
              { icon: '🏆', title: 'Build Reputation', desc: 'Earn trust and badges' }
            ].map((item, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className={`relative backdrop-blur-xl rounded-3xl p-8 border transition-all duration-500 hover:scale-105 ${
                  theme === 'dark' 
                    ? 'bg-white/5 border-white/10 group-hover:border-white/20' 
                    : 'bg-black/5 border-black/10 group-hover:border-black/20'
                }`}>
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                  <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{item.title}</h3>
                  <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Enhanced Features Section */}
        <section className="max-w-7xl mx-auto mb-32">
          <div className="text-center mb-20">
            <div className={`inline-flex items-center px-6 py-3 backdrop-blur-xl rounded-full border mb-8 ${
              theme === 'dark' 
                ? 'bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border-white/20' 
                : 'bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border-emerald-500/20'
            }`}>
              <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mr-3 animate-pulse" />
              <span className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Verified Players • Trusted Community • Smart Matching
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>The Complete</span>
              <span className="block bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">Sports Ecosystem</span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Everything you need to discover games, connect with players, and build your local sports community. From casual pick-up games to competitive tournaments.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </section>

        {/* Enhanced Stats Section */}
        <section className="max-w-6xl mx-auto mb-32">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </section>

        {/* New Testimonials Section */}
        <section className="max-w-6xl mx-auto mb-32">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-black mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              What Players Are Saying
            </h2>
            <p className={`text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Join thousands of athletes who've found their perfect game
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="max-w-5xl mx-auto mb-32">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-emerald-500/20 rounded-3xl blur-2xl" />
            <div className={`relative backdrop-blur-xl rounded-3xl p-12 border ${
              theme === 'dark' 
                ? 'bg-white/5 border-white/10' 
                : 'bg-black/5 border-black/10'
            }`}>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className={`text-4xl font-black ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Ready to Transform Your Game?
                  </h2>
                  <div className="space-y-4">
                    {[
                      'Join games instantly with smart matching',
                      'Build your network with verified players',
                      'Track progress with detailed analytics',
                      'Experience the future of social sports'
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full animate-pulse" />
                        <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-emerald-500/30 rounded-3xl blur-xl" />
                  <div className={`relative backdrop-blur-xl rounded-3xl p-8 border text-center ${
                    theme === 'dark' 
                      ? 'bg-white/10 border-white/20' 
                      : 'bg-black/10 border-black/20'
                  }`}>
                    <div className="text-6xl mb-4">🏟️</div>
                    <h3 className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      Launching Soon
                    </h3>
                    <p className={`mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                      Be the first to join your local sports community
                    </p>
                    <div className="flex justify-center gap-2">
                      {[0, 1, 2].map((i) => (
                        <div 
                          key={i}
                          className="w-4 h-4 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full animate-bounce"
                          style={{ animationDelay: `${i * 0.2}s` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Waitlist Section */}
        <section className="max-w-2xl mx-auto mb-32">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-3xl blur-2xl" />
            <div className={`relative backdrop-blur-xl rounded-3xl p-12 border ${
              theme === 'dark' 
                ? 'bg-white/10 border-white/20' 
                : 'bg-black/10 border-black/20'
            }`}>
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-3xl">✨</span>
                </div>
                <h3 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Join the Sports Revolution
                </h3>
                <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  Be among the first to connect with local players and discover amazing games in your area.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your full name"
                    className={`w-full px-6 py-4 rounded-2xl border backdrop-blur-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      theme === 'dark' 
                        ? 'bg-white/5 border-white/20 text-white placeholder-gray-400' 
                        : 'bg-black/5 border-black/20 text-gray-900 placeholder-gray-500'
                    }`}
                  />
                  <input
                    type="email"
                    placeholder="Your email address"
                    className={`w-full px-6 py-4 rounded-2xl border backdrop-blur-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      theme === 'dark' 
                        ? 'bg-white/5 border-white/20 text-white placeholder-gray-400' 
                        : 'bg-black/5 border-black/20 text-gray-900 placeholder-gray-500'
                    }`}
                  />
                  <select className={`w-full px-6 py-4 rounded-2xl border backdrop-blur-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    theme === 'dark' 
                      ? 'bg-white/5 border-white/20 text-white' 
                      : 'bg-black/5 border-black/20 text-gray-900'
                  }`}>
                    <option value="" className={theme === 'dark' ? 'bg-gray-800' : 'bg-white'}>Select your primary sport</option>
                    <option value="football" className={theme === 'dark' ? 'bg-gray-800' : 'bg-white'}>Football</option>
                    <option value="cricket" className={theme === 'dark' ? 'bg-gray-800' : 'bg-white'}>Cricket</option>
                    <option value="basketball" className={theme === 'dark' ? 'bg-gray-800' : 'bg-white'}>Basketball</option>
                    <option value="tennis" className={theme === 'dark' ? 'bg-gray-800' : 'bg-white'}>Tennis</option>
                    <option value="badminton" className={theme === 'dark' ? 'bg-gray-800' : 'bg-white'}>Badminton</option>
                    <option value="volleyball" className={theme === 'dark' ? 'bg-gray-800' : 'bg-white'}>Volleyball</option>
                    <option value="other" className={theme === 'dark' ? 'bg-gray-800' : 'bg-white'}>Other</option>
                  </select>
                </div>
                
                <button
                  onClick={() => alert('Thanks for your interest! We\'ll notify you when we launch.')}
                  className="w-full group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-bold overflow-hidden hover:scale-105 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative flex items-center justify-center gap-2">
                    Secure Your Spot
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-12 border-t border-white/10">
          <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            &copy; {new Date().getFullYear()} MiloKhelo. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default MiloKhelo;
