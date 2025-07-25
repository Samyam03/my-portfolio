'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const About = () => {
  const [activeTab, setActiveTab] = useState('story');

  const tabs = [
    { id: 'story', label: 'My Story', icon: '📖' },
    { id: 'values', label: 'Values', icon: '💎' },
    { id: 'goals', label: 'Goals', icon: '🎯' },
  ];

  const content = {
    story: {
      title: "My Journey",
      description: "I'm a passionate developer who started coding at the age of 15. What began as curiosity has evolved into a deep love for creating digital experiences that make a difference. I believe in the power of technology to solve real-world problems and improve people's lives.",
      details: [
        "Started with HTML/CSS at 15, building simple websites",
        "Discovered JavaScript and fell in love with interactive development",
        "Learned React and modern web development practices",
        "Built full-stack applications and worked on real projects",
        "Continuously learning and staying updated with latest technologies"
      ]
    },
    values: {
      title: "What I Believe In",
      description: "My core values drive everything I do, from the code I write to the relationships I build with clients and team members.",
      details: [
        "Clean, maintainable code that others can understand and build upon",
        "User-centered design that prioritizes accessibility and usability",
        "Continuous learning and staying curious about new technologies",
        "Collaboration and knowledge sharing within the developer community",
        "Delivering value and exceeding expectations in every project"
      ]
    },
    goals: {
      title: "Where I'm Heading",
      description: "I have ambitious goals for my career and the impact I want to make in the tech world.",
      details: [
        "Build innovative products that solve real-world problems",
        "Contribute to open-source projects and give back to the community",
        "Mentor junior developers and help them grow in their careers",
        "Work on cutting-edge technologies like AI and machine learning",
        "Create a positive impact through technology and education"
      ]
    }
  };



  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass p-8 md:p-12 rounded-2xl shadow-lg">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About Me
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get to know the person behind the code
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Tab Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center space-x-1 mb-12 bg-white/10 rounded-lg p-1 max-w-md mx-auto"
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                </button>
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
                className="space-y-8"
              >
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-white mb-6">
                    {content[activeTab].title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg max-w-3xl mx-auto">
                    {content[activeTab].description}
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    {content[activeTab].details.slice(0, Math.ceil(content[activeTab].details.length / 2)).map((detail, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start space-x-3 text-gray-300 bg-white/5 rounded-lg p-4 border border-white/10"
                      >
                        <span className="text-blue-400 mt-1 text-lg">•</span>
                        <span>{detail}</span>
                      </motion.div>
                    ))}
                  </div>
                  <div className="space-y-4">
                    {content[activeTab].details.slice(Math.ceil(content[activeTab].details.length / 2)).map((detail, index) => (
                      <motion.div
                        key={index + Math.ceil(content[activeTab].details.length / 2)}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start space-x-3 text-gray-300 bg-white/5 rounded-lg p-4 border border-white/10"
                      >
                        <span className="text-blue-400 mt-1 text-lg">•</span>
                        <span>{detail}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {[
                { label: 'Projects Completed', value: '50+', icon: '🚀' },
                { label: 'Years Experience', value: '3+', icon: '⏰' },
                { label: 'Happy Clients', value: '25+', icon: '😊' },
                { label: 'Technologies', value: '15+', icon: '🛠️' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-300 text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 