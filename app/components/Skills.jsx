'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('languages');

  const skillCategories = [
    {
      id: 'languages',
      name: 'Languages & Databases',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'frameworks',
      name: 'Frameworks & Libraries',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'tools',
      name: 'Tools & Platforms',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const skills = {
    languages: [
      { name: 'JavaScript', logo: '/logos/javascript.svg' },
      { name: 'TypeScript', logo: '/logos/typescript.svg' },
      { name: 'Python', logo: '/logos/python.svg' },
      { name: 'Java', logo: '/logos/java.svg' },
      { name: 'HTML', logo: '/logos/html5.svg' },
      { name: 'CSS', logo: '/logos/css3.svg' },
      { name: 'SQL', logo: '/logos/mysql.svg' },
      { name: 'MongoDB', logo: '/logos/mongodb.svg' }
    ],
    frameworks: [
      { name: 'React.js', logo: '/logos/react.svg' },
      { name: 'Next.js', logo: '/logos/nextjs.svg' },
      { name: 'Node.js', logo: '/logos/nodejs.svg' },
      { name: 'Express.js', logo: '/logos/express.svg' },
      { name: 'PyTorch', logo: '/logos/pytorch.svg' }
    ],
    tools: [
      { name: 'Git', logo: '/logos/git.svg' },
      { name: 'GitHub', logo: '/logos/github.svg' },
      { name: 'Linux', logo: '/logos/linux.svg' },
      { name: 'Postman', logo: '/logos/postman.svg' },
      { name: 'Figma', logo: '/logos/figma.svg' },
      { name: 'Docker', logo: '/logos/docker.svg' }
    ]
  };

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass p-4 sm:p-6 md:p-8 lg:p-12 rounded-2xl shadow-lg">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
              Technical Skills
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-2">
              A comprehensive overview of my technical expertise
            </p>
          </motion.div>

          {/* Skill Categories */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12"
          >
            {skillCategories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center justify-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 cursor-pointer text-sm sm:text-base ${
                  activeCategory === category.id
                    ? category.id === 'languages'
                      ? 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-2 border-blue-500/50 text-white shadow-lg shadow-blue-500/20'
                      : category.id === 'frameworks'
                      ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-2 border-purple-500/50 text-white shadow-lg shadow-purple-500/20'
                      : 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-2 border-green-500/50 text-white shadow-lg shadow-green-500/20'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                <span className="whitespace-nowrap">{category.name}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6"
          >
            <AnimatePresence>
              {skills[activeCategory].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className={`rounded-xl p-3 sm:p-4 lg:p-6 border transition-all duration-300 ${
                    activeCategory === 'languages'
                      ? 'bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20 hover:border-blue-500/50'
                      : activeCategory === 'frameworks'
                      ? 'bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20 hover:border-purple-500/50'
                      : 'bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/20 hover:border-green-500/50'
                  }`}
                >
                  <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 relative flex-shrink-0 flex items-center justify-center">
                      {typeof skill.logo === 'string' && skill.logo.startsWith('/') ? (
                      <Image
                        src={skill.logo}
                        alt={skill.name}
                        width={32}
                        height={32}
                        className="w-full h-full object-contain"
                      />
                      ) : (
                        <span className="text-xl sm:text-2xl">{skill.logo}</span>
                      )}
                    </div>
                    <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white">
                      {skill.name}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Learning Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-8 sm:mt-12 lg:mt-16 bg-gradient-to-r from-orange-500/20 to-red-600/20 rounded-xl p-4 sm:p-6 lg:p-8 border border-orange-500/30"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">
              Always Learning & Growing
            </h3>
            <p className="text-sm sm:text-base text-gray-300 text-center max-w-2xl mx-auto leading-relaxed">
              Technology evolves rapidly, and I&apos;m committed to continuous learning. 
              I stay updated with the latest trends and best practices in web development, 
              always exploring new technologies and frameworks to enhance my skills.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 