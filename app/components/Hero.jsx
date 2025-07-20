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

      
      {/* Enhanced Space Background */}
      <div className="absolute inset-0">
        {/* Stars */}
        {[...Array(100)].map((_, i) => {
          const seed = i * 137.5;
          const left = ((seed * 7) % 100) + '%';
          const top = ((seed * 11) % 100) + '%';
          const duration = 15 + (i % 10) * 2;
          const delay = (i % 5) * 2;
          const size = 1 + (i % 4); // More size variation
          const opacity = 0.3 + (i % 3) * 0.2; // More opacity variation
          
          return (
            <motion.div
              key={i}
              className={`absolute bg-blue-400 rounded-full`}
              style={{
                left,
                top,
                width: `${size}px`,
                height: `${size}px`,
                opacity: opacity,
              }}
              animate={{
                x: [0, (i * 23) % (windowSize.width || 1000)],
                y: [0, (i * 17) % (windowSize.height || 1000)],
                opacity: [opacity, opacity * 0.5, opacity],
              }}
              transition={{
                duration,
                delay,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          );
        })}
        
        {/* Additional Twinkling Stars */}
        {[...Array(30)].map((_, i) => {
          const seed = i * 89.3;
          const left = ((seed * 13) % 100) + '%';
          const top = ((seed * 19) % 100) + '%';
          
          return (
            <motion.div
              key={`twinkle-${i}`}
              className="absolute bg-white rounded-full"
              style={{
                left,
                top,
                width: '2px',
                height: '2px',
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration: 3 + (i % 4),
                delay: i * 0.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          );
        })}
        
        {/* Planets */}
        {[...Array(5)].map((_, i) => {
          const seed = i * 97.3;
          const left = ((seed * 13) % 80) + 10 + '%';
          const top = ((seed * 17) % 80) + 10 + '%';
          const size = 15 + (i * 8);
          const colors = [
            'from-purple-400 to-purple-600',
            'from-blue-400 to-blue-600', 
            'from-green-400 to-green-600',
            'from-orange-400 to-orange-600',
            'from-pink-400 to-pink-600'
          ];
          const color = colors[i % colors.length];
          
          return (
            <motion.div
              key={`planet-${i}`}
              className={`absolute rounded-full bg-gradient-to-br ${color} shadow-lg opacity-30`}
              style={{
                left,
                top,
                width: `${size}px`,
                height: `${size}px`,
              }}
              animate={{
                y: [0, -15, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: 25 + i * 5,
                delay: i * 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          );
        })}
        
        {/* Floating Space Elements */}
        {['🌍', '🚀', '⚛️', '🛸', '⭐', '🌙'].map((emoji, i) => {
          const seed = i * 89.7;
          const left = ((seed * 19) % 90) + 5 + '%';
          const top = ((seed * 23) % 90) + 5 + '%';
          
          return (
            <motion.div
              key={`element-${i}`}
              className="absolute text-xl opacity-20"
              style={{
                left,
                top,
              }}
              animate={{
                y: [0, -25, 0],
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 30 + i * 3,
                delay: i * 1.5,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {emoji}
            </motion.div>
          );
        })}
      </div>

      <div className="relative z-10 px-4 max-w-6xl mx-auto">
        {/* Hero Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center lg:ml-24">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            {/* Greeting */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center space-x-3 mb-6 justify-start"
            >
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-blue-400 font-medium">Hello, I'm</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight"
            >
              Samyam
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                Bhattarai
              </span>
            </motion.h1>

            {/* Title */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-6 h-8"
            >
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'Problem Solver',
                  2000,
                  'Creative Thinker',
                  2000,
                  'Tech Enthusiast',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg text-gray-300 mb-8 leading-relaxed"
            >
              Crafting digital experiences with modern technologies. 
              Passionate about creating innovative solutions that make a difference in people's lives.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-500/30 flex items-center justify-center space-x-2"
              >
                <span>View My Work</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Download Resume</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </motion.button>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex space-x-6 mt-8 justify-start"
            >
              {[
                { name: 'GitHub', icon: '🐙', url: '#' },
                { name: 'LinkedIn', icon: '💼', url: '#' },
                { name: 'Twitter', icon: '🐦', url: '#' },
                { name: 'Email', icon: '✉️', url: '#' },
              ].map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-2xl hover:text-blue-500 transition-colors duration-300"
                  title={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end lg:-mt-40"
          >
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="relative"
            >
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
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-6 -right-6 w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center backdrop-blur-sm"
              >
                <span className="text-xl">⚛️</span>
              </motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center backdrop-blur-sm"
              >
                <span className="text-xl">🚀</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 