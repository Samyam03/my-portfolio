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
      logo: '💻'
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
      logo: '🌐'
    }
  ];

  return (
    <section id="leadership" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Leadership
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My leadership roles in student organizations and technical communities
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Organization Tabs */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="space-y-4">
              {leadershipRoles.map((role, index) => (
                <motion.button
                  key={index}
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab(index)}
                  className={`w-full text-left p-6 rounded-lg transition-all duration-300 ${
                    activeTab === index
                      ? 'bg-blue-600/20 border border-blue-500/50'
                      : 'bg-white/5 border border-white/10 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">{role.logo}</div>
                    <div>
                      <h3 className="font-semibold text-white">
                        {role.company}
                      </h3>
                      <p className="text-sm text-gray-300">
                        {role.position}
                      </p>
                      <p className="text-xs text-gray-400">
                        {role.duration}
                      </p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Leadership Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <AnimatePresence>
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white/5 rounded-xl p-8 border border-white/10"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {leadershipRoles[activeTab].position}
                    </h3>
                    <p className="text-xl text-blue-400 mb-1">
                      {leadershipRoles[activeTab].company}
                    </p>
                    <p className="text-gray-400">
                      {leadershipRoles[activeTab].duration} • {leadershipRoles[activeTab].location}
                    </p>
                  </div>
                  <div className="text-4xl">
                    {leadershipRoles[activeTab].logo}
                  </div>
                </div>

                <p className="text-gray-300 mb-8 leading-relaxed">
                  {leadershipRoles[activeTab].description}
                </p>

                <div className="space-y-6">
                  {/* Key Achievements */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">
                      Key Achievements
                    </h4>
                    <ul className="space-y-3">
                      {leadershipRoles[activeTab].achievements.map((achievement, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start space-x-3 text-gray-300"
                        >
                          <span className="text-blue-400 mt-1">•</span>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Leadership Skills */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">
                      Leadership Skills Developed
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {leadershipRoles[activeTab].transferableSkills.map((skill, index) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30"
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

        {/* Leadership Impact Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl p-8 border border-purple-500/30"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Leadership Impact & Community Building
          </h3>
          <p className="text-gray-300 text-center max-w-3xl mx-auto mb-8">
            Through my leadership roles, I've developed strong organizational and technical skills while fostering innovation and community engagement in the computing field.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/5 rounded-lg p-6 border border-white/10 text-center">
              <h4 className="text-lg font-semibold text-white mb-3">Event Management</h4>
              <p className="text-gray-300 text-sm">
                Successfully coordinated hackathons and workshops for 60+ students
              </p>
            </div>
            <div className="bg-white/5 rounded-lg p-6 border border-white/10 text-center">
              <h4 className="text-lg font-semibold text-white mb-3">Technical Leadership</h4>
              <p className="text-gray-300 text-sm">
                Led web development workshops and career readiness programs
              </p>
            </div>
            <div className="bg-white/5 rounded-lg p-6 border border-white/10 text-center">
              <h4 className="text-lg font-semibold text-white mb-3">Community Building</h4>
              <p className="text-gray-300 text-sm">
                Fostered inclusive environments and cross-organizational collaboration
              </p>
            </div>
            <div className="bg-white/5 rounded-lg p-6 border border-white/10 text-center">
              <h4 className="text-lg font-semibold text-white mb-3">Financial Management</h4>
              <p className="text-gray-300 text-sm">
                Managed budgets and secured sponsor support for major events
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Leadership; 