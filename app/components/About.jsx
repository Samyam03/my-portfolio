'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const About = () => {
  const [activeTab, setActiveTab] = useState('background');

  const tabs = [
    { id: 'background', label: 'Background' },
    { id: 'philosophy', label: 'Philosophy' },
    { id: 'goals', label: 'Goals' },
  ];

  const aboutContent = {
    description: "I am a committed student currently pursuing my undergraduate degree in Computer Science at the University of Louisiana at Monroe(ULM), with a solid foundation in computer science and practical experience in web development, acquired through both academic and personal projects. My primary expertise lies in full-stack web technologies, and I have recently started exploring the fundamentals of machine learning, with a strong desire to expand my knowledge in this domain.",
    background: [
      "Bachelor's degree in Computer Science at University of Louisiana at Monroe (ULM)",
      "Completed core CS courses: Calculus, Data Structures & Algorithms, Computer Architecture",
      "Studied programming fundamentals: Assembly Language, Object-Oriented Programming, Internet Programming",
      "Advanced topics: Operating Systems, Statistics, Linear Algebra",
      "Built web applications using React, Node.js, and modern frameworks",
      "Developed full-stack projects combining frontend and backend technologies"
    ],
    philosophy: [
      "Solving complex problems through innovative technological solutions",
      "Writing code that is readable, well-documented, and easily maintainable",
      "Creating interfaces that are intuitive and accessible to all users",
      "Embracing new technologies and staying current with industry trends",
      "Sharing knowledge and collaborating with fellow developers",
      "Maintaining high standards of code quality and best practices"
    ],
    goals: [
      "Master advanced full-stack development patterns and architectures",
      "Complete machine learning courses and build ML-powered applications",
      "Integrate AI/ML features into web applications for enhanced user experience",
      "Work on projects that address real societal challenges",
      "Contribute to open-source projects and build a strong portfolio",
      "Stay updated with emerging technologies and industry best practices"
      ]
  };



  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 relative">
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
              About Me
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-2">
              Get to know the person behind the code
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Main Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-8 sm:mb-12"
            >
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg max-w-4xl mx-auto px-2">
                {aboutContent.description}
              </p>
            </motion.div>

            {/* Tab Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 mb-8 sm:mb-12"
            >
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center justify-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 cursor-pointer text-sm sm:text-base w-full sm:w-24 lg:w-32 ${
                    activeTab === tab.id
                      ? tab.id === 'background'
                        ? 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-2 border-blue-500/50 text-white shadow-lg shadow-blue-500/20'
                        : tab.id === 'philosophy'
                        ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-2 border-purple-500/50 text-white shadow-lg shadow-purple-500/20'
                        : 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-2 border-green-500/50 text-white shadow-lg shadow-green-500/20'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  <span className="whitespace-nowrap">{tab.label}</span>
                </motion.button>
              ))}
            </motion.div>

            {/* Tab Content */}
            <AnimatePresence>
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4 sm:space-y-6 lg:space-y-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                  {aboutContent[activeTab].map((item, index) => (
                      <motion.div
                        key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      className={`flex items-start space-x-2 sm:space-x-3 text-gray-300 rounded-lg p-3 sm:p-4 border ${
                        activeTab === 'background' 
                          ? 'bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20' 
                          : activeTab === 'philosophy'
                          ? 'bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20'
                          : 'bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/20'
                      }`}
                      >
                      <span className={`mt-0.5 sm:mt-1 text-base sm:text-lg ${
                        activeTab === 'background' 
                          ? 'text-blue-400' 
                          : activeTab === 'philosophy'
                          ? 'text-purple-400'
                          : 'text-green-400'
                      }`}>•</span>
                      <span className="text-xs sm:text-sm lg:text-base leading-relaxed">{item}</span>
                      </motion.div>
                    ))}
                </div>
              </motion.div>
            </AnimatePresence>


          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 