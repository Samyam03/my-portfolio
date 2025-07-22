'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    // Set initial window size
    handleResize();

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">

      {/* Static Space Background: Stars and Planets, no animation */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Static Stars */}
        {[...Array(40)].map((_, i) => {
          const seed = i * 137.5;
          const left = ((seed * 7) % 100) + '%';
          const top = ((seed * 11) % 100) + '%';
          const size = 1 + (i % 4);
          const opacity = 0.2 + (i % 3) * 0.2;
          return (
            <div
              key={`star-${i}`}
              className="absolute bg-blue-400 rounded-full"
              style={{
                left,
                top,
                width: `${size}px`,
                height: `${size}px`,
                opacity,
              }}
            />
          );
        })}
        {/* Static Planets */}
        {[...Array(3)].map((_, i) => {
          const seed = i * 97.3;
          const left = ((seed * 13) % 80) + 10 + '%';
          const top = ((seed * 17) % 80) + 10 + '%';
          const size = 20 + (i * 12);
          const colors = [
            'from-purple-400 to-purple-600',
            'from-blue-400 to-blue-600',
            'from-green-400 to-green-600',
          ];
          const color = colors[i % colors.length];
          return (
            <div
              key={`planet-${i}`}
              className={`absolute rounded-full bg-gradient-to-br ${color} shadow-lg opacity-30`}
              style={{
                left,
                top,
                width: `${size}px`,
                height: `${size}px`,
              }}
            />
          );
        })}
      </div>

      <div className="relative z-10 px-4 max-w-6xl mx-auto">
        {/* Hero Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center lg:ml-24">
          {/* Left Side - Text Content */}
          <div className="text-left">
            {/* Greeting */}
            <div className="flex items-center space-x-3 mb-6 justify-start">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-blue-400 font-medium">Hello, I'm</span>
            </div>

            {/* Name */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
              Samyam
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                Bhattarai
              </span>
            </h1>

            {/* Title */}
            <div className="text-xl md:text-2xl text-gray-300 mb-6 h-8">
              Full Stack Developer
            </div>

            {/* Description */}
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Crafting digital experiences with modern technologies. 
              Passionate about creating innovative solutions that make a difference in people's lives.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-start">
              <button
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-500/30 flex items-center justify-center space-x-2"
              >
                <span>View My Work</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button
                className="px-8 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Download Resume</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </button>
            </div>

            {/* Social links */}
            <div className="flex space-x-6 mt-8 justify-start">
              {[
                { name: 'GitHub', icon: '🐙', url: '#' },
                { name: 'LinkedIn', icon: '💼', url: '#' },
                { name: 'Twitter', icon: '🐦', url: '#' },
                { name: 'Email', icon: '✉️', url: '#' },
              ].map((social, index) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="text-2xl hover:text-blue-500 transition-colors duration-300"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="flex justify-center lg:justify-end lg:-mt-40">
            <div className="relative">
              {/* Outer ring */}
              <div className="absolute inset-0 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/20 to-blue-600/20 animate-spin-slow"></div>
              
              {/* Profile image */}
              <div className="relative w-88 h-88 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl">
                <img
                  src="/myImage.jpeg"
                  alt="Samyam Bhattarai"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating elements */}
              <div
                className="absolute -top-6 -right-6 w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center backdrop-blur-sm"
              >
                <span className="text-xl">⚛️</span>
              </div>
              <div
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center backdrop-blur-sm"
              >
                <span className="text-xl">🚀</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 