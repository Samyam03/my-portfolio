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
      icon: '💻',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'frameworks',
      name: 'Frameworks & Libraries',
      icon: '⚛️',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'tools',
      name: 'Tools & Platforms',
      icon: '🛠️',
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
      { name: 'Angular', logo: '/logos/angular.svg' },
      { name: 'Vue', logo: '/logos/vue.svg' }
    ],
    tools: [
      { name: 'Git', logo: '/logos/git.svg' },
      { name: 'GitHub', logo: '/logos/github.svg' },
      { name: 'Linux', logo: '/logos/linux.svg' },
      { name: 'Postman', logo: '/logos/postman.svg' },
      { name: 'Figma', logo: '/logos/figma.svg' }
    ]
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise
          </p>
        </motion.div>

        {/* Skill Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {skillCategories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="wait">
            {skills[activeCategory].map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 relative flex-shrink-0">
                    <Image
                      src={skill.logo}
                      alt={skill.name}
                      width={32}
                      height={32}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
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
          className="mt-16 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-xl p-8 border border-blue-500/30"
        >
          <h3 className="text-2xl font-bold text-white mb-4 text-center">
            Always Learning & Growing
          </h3>
          <p className="text-gray-300 text-center max-w-2xl mx-auto">
            Technology evolves rapidly, and I'm committed to continuous learning. 
            I stay updated with the latest trends and best practices in web development, 
            always exploring new technologies and frameworks to enhance my skills.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 