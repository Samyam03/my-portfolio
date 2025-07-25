'use client';

import { useState, useEffect, useRef } from 'react';
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
      <div className="relative z-10 px-4 max-w-6xl mx-auto">
        {/* Hero Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-center lg:ml-16">
          {/* Right Side - Profile Image (first on mobile) */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end lg:-mt-40 mt-8 sm:mt-0">
            <div className="relative">
              {/* Outer ring */}
              <div className="absolute inset-0 w-40 h-40 sm:w-60 sm:h-60 md:w-88 md:h-88 lg:w-96 lg:h-96 rounded-full bg-gradient-to-r from-blue-500/20 to-blue-600/20 animate-spin-slow"></div>
              {/* Profile image */}
              <div className="relative w-36 h-36 sm:w-52 sm:h-52 md:w-80 md:h-80 lg:w-88 lg:h-88 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl">
                <img
                  src="/myImage.jpeg"
                  alt="Samyam Bhattarai"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating elements */}
              <div
                className="absolute -top-3 -right-3 w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 rounded-full flex items-center justify-center backdrop-blur-sm"
              >
                <span className="text-lg sm:text-xl">⚛️</span>
              </div>
              <div
                className="absolute -bottom-3 -left-3 w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 rounded-full flex items-center justify-center backdrop-blur-sm"
              >
                <span className="text-lg sm:text-xl">🚀</span>
              </div>
            </div>
          </div>

          {/* Left Side - Text Content (second on mobile) */}
          <div className="order-2 lg:order-1 text-left">
            {/* Greeting */}
            <div className="flex items-center space-x-2 mb-0 justify-start">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-blue-400 font-medium text-base">Hello, I'm</span>
            </div>

            {/* Name */}
            <h1 className="block text-6xl md:text-8xl font-bold text-white mb-6 leading-tight w-full">
              Samyam<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 md:text-8xl text-6xl font-bold w-full block">Bhattarai</span>
            </h1>

            {/* Title */}
            <div className="text-xl md:text-3xl text-gray-300 mb-7 h-10 min-h-[2.5rem]">
              <TypeAnimation
                sequence={[
                  'Full Stack Developer', 2000,
                  'Critical Thinker', 2000,
                  'Problem Solver', 2000,
                  'Tech Enthusiast', 2000,
                  'Lifelong Learner', 2000,
                ]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
                className="inline-block"
              />
            </div>

            {/* Description */}
            <p className="text-base text-gray-300 mb-10 leading-relaxed">
              Crafting digital experiences with modern technologies. 
              Passionate about creating innovative solutions that make a difference in people's lives.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-start mb-7">
              <button
                className="px-7 py-2 rounded-lg bg-blue-600 text-white font-semibold shadow-md border border-blue-700 hover:bg-blue-700 hover:shadow-lg transition-all duration-150 flex items-center space-x-2 text-base"
              >
                <span>Explore Projects</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-2 rounded-lg bg-purple-600 text-white font-semibold shadow-md border border-purple-700 hover:bg-purple-700 hover:shadow-lg transition-all duration-150 flex items-center space-x-2 text-base"
                download
              >
                <span>View Resume</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
            </div>
            {/* Professional Social Links - modern pill style */}
            <div className="flex flex-row items-center justify-center gap-5 mt-10 mb-0">
              <a
                href="https://linkedin.com/in/your-linkedin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-full bg-blue-600 hover:bg-blue-700 p-2 text-white shadow transition-all duration-300"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.29h-3v-4.5c0-1.1-.9-2-2-2s-2 .9-2 2v4.5h-3v-9h3v1.22c.41-.72 1.39-1.22 2.5-1.22 1.93 0 3.5 1.57 3.5 3.5v5.5z" />
                </svg>
              </a>
              <a
                href="https://github.com/your-github"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-full bg-white hover:bg-gray-200 p-2 text-black shadow transition-all duration-300"
              >
                <svg className="w-8 h-8" fill="black" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.304-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.984-.399 3.003-.404 1.019.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.625-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="mailto:your@email.com"
                aria-label="Email"
                className="rounded-full bg-purple-600 hover:bg-purple-700 p-2 text-white shadow transition-all duration-300"
              >
                <svg className="w-8 h-8" fill="white" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4V8.99l8 6.99 8-6.99V18z" />
                </svg>
              </a>
            </div>
            {/* Add vertical space after CTA buttons for balance */}
            <div className="mt-16" />

            {/* Social links */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 