'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: 'University Research Program',
      position: 'Emerging Scholar for Spring 2023',
      duration: 'Spring 2023',
      location: 'Monroe, LA',
      description: 'Helped in conducting research on the importance of management principles in the computer science field as part of the Emerging Scholars Program.',
      achievements: [
        'Investigated how management principles apply to software development and IT projects',
        'Analyzed the role of project management methodologies in computer science',
        'Researched team dynamics and leadership in technology organizations',
        'Collected and analyzed data on management practices in tech companies',
        'Contributed to research methodology and experimental design',
        'Presented findings on computer science management principles'
      ],
      transferableSkills: [
        'Research Methods',
        'Data Analysis',
        'Critical Thinking',
        'Academic Writing',
        'Project Management',
        'Analytical Skills',
        'Presentation Skills',
        'Industry Research'
      ],
      logo: '💼'
    },
    {
      company: 'University Research Program',
      position: 'Emerging Scholar for Fall 2022',
      duration: 'Fall 2022',
      location: 'Monroe, LA',
      description: 'Helped in conducting research on how computers enhance Spanish language learning methodologies as part of the Emerging Scholars Program.',
      achievements: [
        'Investigated the effectiveness of computer-assisted language learning (CALL)',
        'Analyzed how technology integration improves Spanish language acquisition',
        'Researched digital tools and platforms for language education',
        'Collected data on student engagement with technology-based learning',
        'Contributed to research methodology and experimental design',
        'Presented findings on technology integration in language education'
      ],
      transferableSkills: [
        'Research Methods',
        'Data Analysis',
        'Critical Thinking',
        'Academic Writing',
        'Educational Technology',
        'Analytical Skills',
        'Presentation Skills',
        'User Experience Research'
      ],
      logo: '🎓'
    },
    {
      company: 'Office of Student and Professional Affairs',
      position: 'Student Administrative Assistant',
      duration: 'February 2023 - August 2023',
      location: 'College of Pharmacy, Monroe, LA',
      description: 'Provided essential administrative support in a professional academic environment, managing student services and facilitating communication between students, faculty, and staff.',
      achievements: [
        'Handled incoming calls and provided professional customer service to students, faculty, and staff',
        'Managed confidential student records and maintained organized filing systems ensuring data integrity',
        'Coordinated communication between students and faculty advisors, facilitating academic planning and support',
        'Developed strong organizational skills while handling multiple priorities in a fast-paced academic environment'
      ],
      transferableSkills: [
        'Customer Service',
        'Data Management',
        'Communication',
        'Organization',
        'Problem Solving',
        'Time Management',
        'Professionalism',
        'Confidentiality'
      ],
      logo: '🏢'
    }
  ];

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 relative">
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
              Experience & Research
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-2">
              My professional experience and academic research contributions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Company Tabs */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-1 order-1"
            >
              <div className="space-y-3 sm:space-y-4">
                {experiences.map((exp, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveTab(index)}
                    className={`w-full text-left p-4 sm:p-6 rounded-lg transition-all duration-300 cursor-pointer ${
                      activeTab === index
                        ? 'bg-blue-600/20 border border-blue-500/50'
                        : 'bg-white/5 border border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="text-2xl sm:text-3xl">{exp.logo}</div>
                      <div>
                        <h3 className="font-semibold text-white text-sm sm:text-base">
                          {exp.company}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-300">
                          {exp.position}
                        </p>
                        <p className="text-xs text-gray-400">
                          {exp.duration}
                        </p>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Experience Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2 order-2"
            >
              <AnimatePresence>
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/5 rounded-xl p-4 sm:p-6 lg:p-8 border border-white/10"
                >
                  <div className="flex items-start justify-between mb-4 sm:mb-6">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                        {experiences[activeTab].position}
                      </h3>
                      <p className="text-lg sm:text-xl text-blue-400 mb-1">
                        {experiences[activeTab].company}
                      </p>
                      <p className="text-sm sm:text-base text-gray-400">
                        {experiences[activeTab].duration} • {experiences[activeTab].location}
                      </p>
                    </div>
                    <div className="text-3xl sm:text-4xl">
                      {experiences[activeTab].logo}
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                    {experiences[activeTab].description}
                  </p>

                  <div className="space-y-4 sm:space-y-6">
                    {/* Key Responsibilities */}
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-2 sm:space-y-3">
                        {experiences[activeTab].achievements.map((achievement, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start space-x-2 sm:space-x-3 text-gray-300 text-sm sm:text-base leading-relaxed"
                          >
                            <span className="text-blue-400 mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills Developed */}
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">
                        Skills Developed
                      </h4>
                      <div className="flex flex-wrap gap-2 sm:gap-3">
                        {experiences[activeTab].transferableSkills.map((skill, index) => (
                          <motion.span
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="px-2 sm:px-3 py-1 bg-green-500/20 text-green-300 text-xs sm:text-sm rounded-full border border-green-500/30"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Professional Growth Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-8 sm:mt-12 lg:mt-16 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-xl p-4 sm:p-6 lg:p-8 border border-blue-500/30"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center">
              Professional Growth & Skill Development
            </h3>
            <p className="text-sm sm:text-base text-gray-300 text-center max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed">
              Through my diverse experience in research and administration, I've developed a comprehensive skill set that combines analytical thinking with strong professional capabilities.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="bg-white/5 rounded-lg p-4 sm:p-6 border border-white/10 text-center">
                <h4 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Research & Analysis</h4>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  Conducted academic research on technology integration and computer science management
                </p>
              </div>
              <div className="bg-white/5 rounded-lg p-4 sm:p-6 border border-white/10 text-center">
                <h4 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Administrative Excellence</h4>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  Managed schedules, documentation, and office operations with attention to detail
                </p>
              </div>
              <div className="bg-white/5 rounded-lg p-4 sm:p-6 border border-white/10 text-center">
                <h4 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Data Management</h4>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  Handled confidential records and maintained organized filing systems
                </p>
              </div>
              <div className="bg-white/5 rounded-lg p-4 sm:p-6 border border-white/10 text-center">
                <h4 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Professional Communication</h4>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  Coordinated communication between diverse stakeholders and provided excellent service
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 