'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Leadership = () => {
  const [activeTab, setActiveTab] = useState(0);

  const leadershipRoles = [
    {
      company: 'Association for Computing Machinery',
      position: 'Treasurer',
      duration: 'September 2023 - Present',
      location: 'Monroe, LA',
      description: 'Leading financial management and event coordination for the university\'s premier computing organization, fostering technical innovation and student engagement.',
      achievements: [
        'Coordinated a two-day hackathon, engaging 60+ students in ideation and project development',
        'Oversaw logistics, solicited sponsor support, and cultivated an environment for creative exploration',
        'Spearheaded multiple events for 40+ students, conducting web development and career readiness workshops',
        'Provided practical training, strengthening technical skills and boosting industry readiness',
        'Managed organization finances and budget allocation for events and activities',
        'Collaborated with faculty and industry partners to enhance student learning opportunities'
      ],
      transferableSkills: [
        'Leadership',
        'Event Planning',
        'Financial Management',
        'Project Coordination',
        'Public Speaking',
        'Team Management',
        'Networking',
        'Strategic Planning'
      ],

    },
    {
      company: 'Google Developer Student Club',
      position: 'Community Lead',
      duration: 'January 2023 - August 2023',
      location: 'Monroe, LA',
      description: 'Fostered community engagement and technical learning within the Google Developer Student Club.',
      achievements: [
        'Nurtured relationships with student organizations and promoted cross-collaboration',
        'Fostered a culture of inclusion and diversity for all university members'
      ],
      transferableSkills: [
        'Community Building',
        'Networking',
        'Inclusion',
        'Collaboration'
      ],

    }
  ];

  return (
    <section id="leadership" className="py-12 sm:py-16 lg:py-20 relative">
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
              Leadership
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-2">
              My leadership roles in student organizations and technical communities
            </p>
          </motion.div>

          {/* Organization Tabs - Horizontal */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 sm:mb-16"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full">
              {leadershipRoles.map((role, index) => (
                <motion.button
                  key={index}
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 rounded-xl transition-all duration-300 cursor-pointer text-left ${
                    activeTab === index
                      ? 'bg-blue-600/20 border-2 border-blue-500/50 text-white shadow-lg shadow-blue-500/20'
                      : 'bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-gray-300 hover:text-white'
                  }`}
                >
                  <div className="space-y-2">
                    <h3 className="font-bold text-sm sm:text-base text-white">
                      {role.company}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 font-medium">
                      {role.position}
                    </p>
                    <p className="text-xs text-gray-400">
                      {role.duration}
                    </p>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Leadership Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
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
                                                        <div className="mb-8 sm:mb-10">
                    <div className="space-y-4">
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        {leadershipRoles[activeTab].position}
                      </h3>
                      <p className="text-lg sm:text-xl text-blue-400">
                        {leadershipRoles[activeTab].company}
                      </p>
                      <p className="text-sm sm:text-base text-gray-400">
                        {leadershipRoles[activeTab].duration} • {leadershipRoles[activeTab].location}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-gray-300 mb-10 sm:mb-12 leading-relaxed">
                    {leadershipRoles[activeTab].description}
                  </p>

                  <div className="space-y-8 sm:space-y-10">
                    {/* Key Achievements */}
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-white mb-5 sm:mb-6">
                        Key Achievements
                      </h4>
                      <ul className="space-y-4 sm:space-y-5">
                        {leadershipRoles[activeTab].achievements.map((achievement, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start space-x-5 sm:space-x-6 text-gray-300 text-sm sm:text-base leading-relaxed pl-6 sm:pl-8"
                          >
                            <span className="text-blue-400 mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Leadership Skills */}
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-white mb-5 sm:mb-6">
                        Leadership Skills Developed
                      </h4>
                      <div className="flex flex-wrap gap-3 sm:gap-4">
                        {leadershipRoles[activeTab].transferableSkills.map((skill, index) => (
                          <motion.span
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="px-3 sm:px-4 py-2 bg-purple-500/20 text-purple-300 text-xs sm:text-sm rounded-full border border-purple-500/30"
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

          {/* Leadership Impact Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-8 sm:mt-12 lg:mt-16 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl p-4 sm:p-6 lg:p-8 border border-purple-500/30"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center">
              Leadership Impact & Community Building
            </h3>
            <p className="text-sm sm:text-base text-gray-300 text-center max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed">
              Through my leadership roles, I&apos;ve developed strong organizational and technical skills while fostering innovation and community engagement in the computing field.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="bg-white/5 rounded-lg p-4 sm:p-6 border border-white/10 text-center">
                <h4 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Event Management</h4>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  Successfully coordinated hackathons and workshops for 60+ students
                </p>
              </div>
              <div className="bg-white/5 rounded-lg p-4 sm:p-6 border border-white/10 text-center">
                <h4 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Technical Leadership</h4>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  Led web development workshops and career readiness programs
                </p>
              </div>
              <div className="bg-white/5 rounded-lg p-4 sm:p-6 border border-white/10 text-center">
                <h4 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Community Building</h4>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  Fostered inclusive environments and cross-organizational collaboration
                </p>
              </div>
              <div className="bg-white/5 rounded-lg p-4 sm:p-6 border border-white/10 text-center">
                <h4 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Financial Management</h4>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  Managed budgets and secured sponsor support for major events
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Leadership; 