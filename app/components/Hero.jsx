'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-10 sm:pt-24 sm:pb-10">
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Hero Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-start">
          {/* Right Side - Profile Image (first on mobile) */}
          <motion.div 
            className="order-1 lg:order-2 flex justify-center lg:justify-center mt-8 sm:mt-12"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Profile image */}
              <motion.div 
                className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-60 md:h-60 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/myImage.jpg"
                  alt="Samyam Bhattarai"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              {/* Floating elements */}
              <motion.div
                className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-blue-500/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  y: [0, -10, 0]
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.8,
                  y: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                whileHover={{ scale: 1.2, rotate: 360 }}
              >
                <span className="text-sm sm:text-lg md:text-xl">⚛️</span>
              </motion.div>
              <motion.div
                className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-blue-500/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  y: [0, 10, 0]
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: 1.0,
                  y: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                whileHover={{ scale: 1.2, rotate: -360 }}
              >
                <span className="text-sm sm:text-lg md:text-xl">🚀</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Left Side - Text Content (second on mobile) */}
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Greeting */}
            <motion.div 
              className="flex items-center space-x-2 mb-4 sm:mb-3 justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <motion.div 
                className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"
                whileHover={{ scale: 1.5 }}
                transition={{ duration: 0.2 }}
              ></motion.div>
              <span className="text-blue-400 font-medium text-sm sm:text-base">Hello, I'm</span>
            </motion.div>

            {/* Centered Content on Small Screens, Left on Large */}
            <div className="text-center lg:text-left">
              {/* Name */}
              <motion.h1 
                className="block text-5xl sm:text-6xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight w-full"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Samyam<br />
                <motion.span 
                  className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 text-5xl sm:text-6xl md:text-5xl lg:text-6xl xl:text-7xl font-bold w-full block"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  Bhattarai
                </motion.span>
              </motion.h1>

              {/* Title */}
              <motion.div 
                className="text-xl sm:text-2xl md:text-xl lg:text-2xl text-gray-300 mb-4 sm:mb-5 h-10 sm:h-12 min-h-[2.5rem] sm:min-h-[3rem]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
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
              </motion.div>

              {/* Description */}
              <motion.p 
                className="text-base sm:text-lg md:text-base lg:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Crafting digital experiences with modern technologies. 
                Passionate about creating innovative solutions that make a difference in people's lives.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center lg:justify-start mb-6 sm:mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <motion.button
                  onClick={() => {
                    document.getElementById('projects')?.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }}
                  className="px-4 sm:px-6 md:px-5 lg:px-6 py-2 sm:py-3 md:py-2 lg:py-3 rounded-lg bg-blue-600 text-white font-semibold shadow-md border border-blue-700 hover:bg-blue-700 hover:shadow-lg transition-all duration-150 flex items-center justify-center space-x-2 text-sm sm:text-base md:text-sm lg:text-base cursor-pointer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <span>Explore Projects</span>
                  <motion.svg 
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-4 md:h-4 lg:w-5 lg:h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </motion.button>
                <motion.a
                  href="/Samyam_Bhattarai.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-6 md:px-5 lg:px-6 py-2 sm:py-3 md:py-2 lg:py-3 rounded-lg bg-purple-600 text-white font-semibold shadow-md border border-purple-700 hover:bg-purple-700 hover:shadow-lg transition-all duration-150 flex items-center justify-center space-x-2 text-sm sm:text-base md:text-sm lg:text-base cursor-pointer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <span>View Resume</span>
                  <motion.svg 
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-4 md:h-4 lg:w-5 lg:h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </motion.svg>
                </motion.a>
              </motion.div>
              
              {/* Professional Social Links - modern pill style */}
              <motion.div 
                className="flex flex-row items-center justify-center gap-4 sm:gap-6 mt-6 sm:mt-8 mb-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <motion.a
                  href="https://linkedin.com/in/samyam-bhattarai"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="rounded-full bg-blue-600 hover:bg-blue-700 p-2 sm:p-3 md:p-2 lg:p-3 text-white shadow transition-all duration-300 cursor-pointer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-6 md:h-6 lg:w-7 lg:h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.29h-3v-4.5c0-1.1-.9-2-2-2s-2 .9-2 2v4.5h-3v-9h3v1.22c.41-.72 1.39-1.22 2.5-1.22 1.93 0 3.5 1.57 3.5 3.5v5.5z" />
                  </svg>
                </motion.a>
                <motion.a
                  href="https://github.com/Samyam03"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="rounded-full bg-white hover:bg-gray-200 p-2 sm:p-3 md:p-2 lg:p-3 text-black shadow transition-all duration-300 cursor-pointer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-6 md:h-6 lg:w-7 lg:h-7" fill="black" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.304-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.984-.399 3.003-.404 1.019.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.625-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.373-12-12-12z" />
                  </svg>
                </motion.a>
                <motion.a
                  href="mailto:samyambhattarai65@gmail.com"
                  aria-label="Email"
                  className="rounded-full bg-purple-600 hover:bg-purple-700 p-2 sm:p-3 md:p-2 lg:p-3 text-white shadow transition-all duration-300 cursor-pointer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-6 md:h-6 lg:w-7 lg:h-7" fill="white" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4V8.99l8 6.99 8-6.99V18z" />
                  </svg>
                </motion.a>
              </motion.div>
              
              {/* Add vertical space after CTA buttons for balance */}
              <div className="mt-8 sm:mt-12" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 