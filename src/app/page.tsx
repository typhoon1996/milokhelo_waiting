'use client';
import React, { useState, useEffect, useRef } from 'react';
import FeatureCard from '@/components/FeatureCard';
import { supabase } from '@/lib/supabase';

interface StatItem {
  value: string;
  label: string;
  icon: string;
  color: string;
}

interface TestimonialItem {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

const MiloKhelo = () => {
  const waitlistRef = useRef<HTMLElement>(null);
  const working = useRef<HTMLElement>(null);

  const [theme, setTheme] = useState('dark');
  // Initialize mousePosition and scrollY safely, or with default values
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [waitlistForm, setWaitlistForm] = useState({ name: '', email: '', sport: '' });

  // State to safely store window.innerWidth
  const [browserWidth, setBrowserWidth] = useState(0);

  useEffect(() => {
    // This code only runs in the browser after the initial render
    setIsLoaded(true);

    // Initialize browserWidth here
    setBrowserWidth(window.innerWidth);

    const handleMouseMove = (e: MouseEvent) => setMousePosition({ x: e.clientX, y: e.clientY });
    const handleScroll = () => setScrollY(window.scrollY);
    const handleResize = () => setBrowserWidth(window.innerWidth); // Update width on resize

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize); // Listen for resize events

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleWaitlistSubmit = async () => {
    const { name, email, sport } = waitlistForm;
    if (!name || !email || !sport) return alert('Please fill in all fields.');
    const { error } = await supabase.from('waitlist').insert([{ name, email, sport }]);
    if (error) alert('Something went wrong. Try again.');
    else {
      alert(`Thanks ${name}! You're on the waitlist.`);
      setWaitlistForm({ name: '', email: '', sport: '' });
    }
  };

  const scrollToWorking = () => {
    working.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToWaitlist = () => {
    waitlistRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');
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

  const StatCard = ({ value, label, icon, color }: StatItem) => (
    <div className="relative group">
      <div className={`absolute inset-0 bg-gradient-to-r ${color}/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500`} />
      <div className={`relative backdrop-blur-xl rounded-2xl p-6 border transition-all duration-500 ${theme === 'dark'
        ? 'bg-white/5 border-white/10 group-hover:border-white/20'
        : 'bg-black/5 border-black/10 group-hover:border-black/20'
        }`}>
        <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-500">{icon}</div>
        <div className={`text-3xl font-bold mb-1 transition-colors duration-500 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>{value}</div>
        <div className={`text-sm transition-colors duration-500 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>{label}</div>
      </div>
    </div>
  );

  const TestimonialCard = ({ name, role, content, rating, avatar }: TestimonialItem) => (
    <div className={`relative p-6 rounded-2xl backdrop-blur-xl border transition-all duration-500 hover:scale-105 ${theme === 'dark'
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
    <div className={`min-h-screen transition-all duration-1000 ${theme === 'dark'
      ? 'bg-gradient-to-br from-gray-900 via-black to-gray-800'
      : 'bg-gradient-to-br from-blue-50 via-white to-emerald-50'
      }`}>
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Only apply dynamic styles if browserWidth is known (i.e., client-side) */}
        {browserWidth > 0 && (
          <>
            <div
              className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl animate-pulse"
              style={{
                left: mousePosition.x - (browserWidth < 640 ? 144 : 192),
                top: mousePosition.y - (browserWidth < 640 ? 144 : 192),
                transition: 'left 0.3s ease-out, top 0.3s ease-out'
              }}
            />
            <div
              className="absolute w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-gradient-to-r from-emerald-500/5 to-teal-500/5 blur-2xl animate-ping"
              style={{
                animationDuration: '4s',
                left: '10%', // Adjusted for mobile
                top: `${25 + scrollY * 0.1}%`
              }}
            />
            <div
              className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-r from-yellow-500/5 to-orange-500/5 blur-2xl animate-ping"
              style={{
                animationDuration: '6s',
                right: '10%', // Adjusted for mobile
                bottom: `${25 + scrollY * 0.05}%`
              }}
            />
          </>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 py-8 sm:px-6 sm:py-10">
        {/* Enhanced Theme Toggle */}
        <button
          onClick={toggleTheme}
          className={`fixed top-4 right-4 z-50 p-3 rounded-full backdrop-blur-xl border transition-all duration-300 hover:scale-110 sm:top-6 sm:right-6 sm:p-4 ${theme === 'dark'
            ? 'bg-white/10 border-white/20 hover:bg-white/20'
            : 'bg-black/10 border-black/20 hover:bg-black/20'
            }`}
        >
          <span className="text-xl sm:text-2xl">{theme === 'dark' ? '☀️' : '🌙'}</span>
        </button>

        {/* Enhanced Header */}
        <header className={`max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 mb-16 sm:gap-8 sm:mb-20 ${isLoaded ? 'animate-fadeIn' : 'opacity-0'}`}>
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
              <div className="relative w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <span className="text-white font-bold text-xl sm:text-2xl">M</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
              MiloKhelo
            </h1>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mt-4 sm:mt-0">
            <button  onClick={scrollToWorking} className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 text-sm sm:text-base ${theme === 'dark'
              ? 'text-white hover:bg-white/10'
              : 'text-gray-900 hover:bg-black/10'
              }`}>
              How it Works
            </button>
            <button
              onClick={scrollToWaitlist}
              className="group relative px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-bold overflow-hidden hover:scale-105 transition-all duration-300 text-sm sm:text-base"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative flex items-center gap-2">
                Join Beta
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          </div>
        </header>

        {/* Enhanced Hero Section */}
        <section className="max-w-6xl mx-auto text-center space-y-8 mb-24 sm:space-y-12 sm:mb-32">
          <div className="space-y-6 sm:space-y-8">
            <div className={`inline-flex items-center px-4 py-2 backdrop-blur-xl rounded-full border text-sm sm:px-6 sm:py-3 ${theme === 'dark'
              ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-white/20'
              : 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20'
              }`}>
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-2 animate-pulse sm:w-3 sm:h-3 sm:mr-3" />
              <span className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Sports Community • Real Players • Launching Soon
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-8xl font-black leading-tight">
              <span className={`block bg-gradient-to-r bg-clip-text text-transparent ${theme === 'dark'
                ? 'from-white via-blue-200 to-white'
                : 'from-gray-900 via-blue-600 to-gray-900'
                }`}>
                Where Every Player
              </span>
              <span className="block bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Finds Their Game
              </span>
            </h2>

            <p className={`text-base md:text-xl max-w-4xl mx-auto leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
              Connect with local athletes and casual players in your area. Join pick-up games, form teams, and build lasting sports communities through our
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text font-semibold"> trusted platform.</span>
            </p>
          </div>

          {/* Enhanced Quick Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 sm:mt-16 sm:gap-8">
            {[
              { icon: '🎯', title: 'Smart Discovery', desc: 'AI-powered game matching' },
              { icon: '⚡', title: 'Instant Join', desc: 'One-tap game participation' },
              { icon: '🏆', title: 'Build Reputation', desc: 'Earn trust and badges' }
            ].map((item, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className={`relative backdrop-blur-xl rounded-3xl p-6 border transition-all duration-500 hover:scale-105 ${theme === 'dark'
                  ? 'bg-white/5 border-white/10 group-hover:border-white/20'
                  : 'bg-black/5 border-black/10 group-hover:border-black/20'
                  }`}>
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-500 sm:text-5xl">{item.icon}</div>
                  <h3 className={`text-lg font-bold mb-1 sm:text-xl ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{item.title}</h3>
                  <p className={`text-sm sm:text-base ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Enhanced Features Section */}
        <section ref={working} className="max-w-7xl mx-auto mb-24 sm:mb-32">
          <div className="text-center mb-16 sm:mb-20">
            <div className={`inline-flex items-center px-4 py-2 backdrop-blur-xl rounded-full border mb-6 text-sm sm:px-6 sm:py-3 sm:mb-8 ${theme === 'dark'
              ? 'bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border-white/20'
              : 'bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border-emerald-500/20'
              }`}>
              <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mr-2 animate-pulse sm:w-3 sm:h-3 sm:mr-3" />
              <span className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Verified Players • Trusted Community • Smart Matching
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 sm:mb-6">
              <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>The Complete</span>
              <span className="block bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">Sports Ecosystem</span>
            </h2>
            <p className={`text-base max-w-3xl mx-auto leading-relaxed sm:text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
              Everything you need to discover games, connect with players, and build your local sports community. From casual pick-up games to competitive tournaments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </section>

        {/* Enhanced Stats Section */}
        <section className="max-w-6xl mx-auto mb-24 sm:mb-32">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </section>

        {/* New Testimonials Section */}
        <section className="max-w-6xl mx-auto mb-24 sm:mb-32">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className={`text-3xl md:text-5xl font-black mb-4 sm:mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
              What Players Are Saying
            </h2>
            <p className={`text-base sm:text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Join thousands of athletes who&apos;ve found their perfect game
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="max-w-5xl mx-auto mb-24 sm:mb-32">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-emerald-500/20 rounded-3xl blur-2xl" />
            <div className={`relative backdrop-blur-xl rounded-3xl p-8 sm:p-12 border ${theme === 'dark'
              ? 'bg-white/5 border-white/10'
              : 'bg-black/5 border-black/10'
              }`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
                <div className="space-y-4 sm:space-y-6">
                  <h2 className={`text-3xl sm:text-4xl font-black ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Ready to Transform Your Game?
                  </h2>
                  <div className="space-y-3 sm:space-y-4">
                    {[
                      'Join games instantly with smart matching',
                      'Build your network with verified players',
                      'Track progress with detailed analytics',
                      'Experience the future of social sports'
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3 sm:gap-4">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full animate-pulse sm:w-2 sm:h-2" />
                        <span className={`text-sm sm:text-base ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-emerald-500/30 rounded-3xl blur-xl" />
                  <div className={`relative backdrop-blur-xl rounded-3xl p-6 sm:p-8 border text-center ${theme === 'dark'
                    ? 'bg-white/10 border-white/20'
                    : 'bg-black/10 border-black/20'
                    }`}>
                    <div className="text-5xl mb-3 sm:text-6xl sm:mb-4">🏟️</div>
                    <h3 className={`text-xl sm:text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      Launching Soon
                    </h3>
                    <p className={`mb-4 text-sm sm:text-base ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                      Be the first to join your local sports community
                    </p>
                    <div className="flex justify-center gap-1 sm:gap-2">
                      {[0, 1, 2].map((i) => (
                        <div
                          key={i}
                          className="w-3 h-3 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full animate-bounce sm:w-4 sm:h-4"
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
        <section ref={waitlistRef} className="max-w-2xl mx-auto mb-24 sm:mb-32">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-3xl blur-2xl" />
            <div className={`relative backdrop-blur-xl rounded-3xl p-8 sm:p-12 border ${theme === 'dark'
              ? 'bg-white/10 border-white/20'
              : 'bg-black/10 border-black/20'
              }`}>
              <div className="text-center mb-6 sm:mb-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <span className="text-xl sm:text-3xl text-white font-bold">✨</span>
                </div>
                <h3 className={`text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Join the Sports Revolution
                </h3>
                <p className={`text-base sm:text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  Be among the first to connect with local players and discover amazing games in your area.
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="space-y-3 sm:space-y-4">
                  <input
                    type="text"
                    placeholder="Your full name"
                    value={waitlistForm.name}
                    onChange={(e) => setWaitlistForm({ ...waitlistForm, name: e.target.value })}
                    className={`w-full px-4 py-3 rounded-2xl border backdrop-blur-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:px-6 sm:py-4 ${theme === 'dark'
                      ? 'bg-white/5 border-white/20 text-white placeholder-gray-400'
                      : 'bg-black/5 border-black/20 text-gray-900 placeholder-gray-500'
                      }`}
                  />

                  <input
                    type="email"
                    placeholder="Your email address"
                    value={waitlistForm.email}
                    onChange={(e) => setWaitlistForm({ ...waitlistForm, email: e.target.value })}
                    className={`w-full px-4 py-3 rounded-2xl border backdrop-blur-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:px-6 sm:py-4 ${theme === 'dark'
                      ? 'bg-white/5 border-white/20 text-white placeholder-gray-400'
                      : 'bg-black/5 border-black/20 text-gray-900 placeholder-gray-500'
                      }`}
                  />

                  <select
                    value={waitlistForm.sport}
                    onChange={(e) => setWaitlistForm({ ...waitlistForm, sport: e.target.value })}
                    className={`w-full px-4 py-3 rounded-2xl border backdrop-blur-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:px-6 sm:py-4 ${theme === 'dark'
                      ? 'bg-white/5 border-white/20 text-white'
                      : 'bg-black/5 border-black/20 text-gray-900'
                      }`}
                  >
                    <option value="" disabled>Select your primary sport</option>
                    <option value="football">Football</option>
                    <option value="cricket">Cricket</option>
                    <option value="basketball">Basketball</option>
                    <option value="tennis">Tennis</option>
                    <option value="badminton">Badminton</option>
                    <option value="volleyball">Volleyball</option>
                    <option value="other">Other</option>
                  </select>

                </div>

                <button
                  onClick={handleWaitlistSubmit}
                  className="w-full group relative px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-bold overflow-hidden hover:scale-105 transition-all duration-300 text-base sm:px-8 sm:py-4"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative flex items-center justify-center gap-2">
                    Secure Your Spot
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-8 sm:py-12 border-t border-white/10">
          <p className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            &copy; {new Date().getFullYear()} MiloKhelo. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default MiloKhelo;