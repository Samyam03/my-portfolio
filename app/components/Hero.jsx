'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { RESUME_URL } from '../lib/site';
import Image from 'next/image';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-16 sm:pt-24 sm:pb-20"
    >
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Profile image */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <motion.div className="relative" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden border-4 border-blue-500/40 shadow-2xl shadow-blue-500/10">
                <Image
                  src="/myImage.jpg"
                  alt="Samyam Bhattarai"
                  width={320}
                  height={320}
                  priority
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <motion.span
                className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-9 h-9 sm:w-11 sm:h-11 bg-blue-500/25 rounded-full flex items-center justify-center backdrop-blur-sm border border-blue-400/30 text-base sm:text-lg"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                aria-hidden
              >
                ⚛️
              </motion.span>
              <motion.span
                className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-9 h-9 sm:w-11 sm:h-11 bg-blue-500/25 rounded-full flex items-center justify-center backdrop-blur-sm border border-blue-400/30 text-base sm:text-lg"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                aria-hidden
              >
                🚀
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Text content */}
          <motion.div
            className="order-2 lg:order-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center justify-center lg:justify-start gap-2 mb-4"
            >
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse shrink-0" />
              <span className="text-blue-400 font-medium text-sm sm:text-base">Hello, I&apos;m</span>
            </motion.div>

            <motion.h1
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-4"
            >
              Samyam
              <span className="block mt-1 text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-cyan-400 to-blue-600">
                Bhattarai
              </span>
            </motion.h1>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-5 min-h-8 sm:min-h-10 flex items-center justify-center lg:justify-start"
            >
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'Critical Thinker',
                  2000,
                  'Problem Solver',
                  2000,
                  'Tech Enthusiast',
                  2000,
                  'Lifelong Learner',
                  2000,
                ]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
                className="inline-block text-blue-300"
              />
            </motion.div>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              Crafting digital experiences with modern technologies. Passionate about creating
              innovative solutions that make a difference in people&apos;s lives.
            </motion.p>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.button
                type="button"
                onClick={() => {
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold border border-blue-500 hover:bg-blue-500 shadow-lg shadow-blue-600/20 transition-colors duration-200 cursor-pointer text-sm sm:text-base"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                Explore Projects
                <Image src="/icons/arrow-right.svg" alt="" width={18} height={18} className="w-4 h-4 invert" />
              </motion.button>
              <motion.a
                href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-purple-600 text-white font-semibold border border-purple-500 hover:bg-purple-500 shadow-lg shadow-purple-600/20 transition-colors duration-200 cursor-pointer text-sm sm:text-base"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                View Resume
                <Image src="/icons/document.svg" alt="" width={18} height={18} className="w-4 h-4 invert" />
              </motion.a>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex items-center justify-center lg:justify-start gap-4"
            >
              <motion.a
                href="https://linkedin.com/in/samyam-bhattarai"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-full bg-[#0A66C2] hover:bg-[#004182] p-3 shadow-lg transition-colors duration-200"
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src="/icons/linkedin-simple.svg"
                  alt=""
                  width={28}
                  height={28}
                  className="w-7 h-7"
                />
              </motion.a>
              <motion.a
                href="https://github.com/Samyam03"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-full bg-white hover:bg-gray-100 p-3 shadow-lg transition-colors duration-200"
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image src="/icons/github.svg" alt="" width={24} height={24} className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="mailto:samyambhattarai65@gmail.com"
                aria-label="Email"
                className="rounded-full bg-purple-500 hover:bg-purple-600 p-3 border border-purple-400/50 shadow-lg transition-colors duration-200"
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image src="/icons/email.svg" alt="" width={24} height={24} className="w-6 h-6 invert" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
