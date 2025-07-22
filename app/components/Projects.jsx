'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'design', label: 'UI/UX Design' },
    { id: 'fullstack', label: 'Full Stack' },
  ];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'fullstack',
      image: '/api/placeholder/400/300',
      description: 'A modern e-commerce platform built with Next.js, featuring real-time inventory, payment processing, and admin dashboard.',
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'MongoDB', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
      features: [
        'Real-time inventory management',
        'Secure payment processing with Stripe',
        'Admin dashboard with analytics',
        'Responsive design for all devices',
        'SEO optimized with Next.js'
      ]
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'web',
      image: '/api/placeholder/400/300',
      description: 'A collaborative task management application with real-time updates, team collaboration, and progress tracking.',
      technologies: ['React', 'Node.js', 'Socket.io', 'PostgreSQL', 'Material-UI'],
      liveUrl: '#',
      githubUrl: '#',
      features: [
        'Real-time collaboration',
        'Task assignment and tracking',
        'Progress visualization',
        'Team management',
        'Mobile responsive design'
      ]
    },
    {
      id: 3,
      title: 'Fitness Tracking Mobile App',
      category: 'mobile',
      image: '/api/placeholder/400/300',
      description: 'A comprehensive fitness tracking app with workout plans, nutrition tracking, and social features.',
      technologies: ['React Native', 'Firebase', 'Redux', 'Expo', 'Chart.js'],
      liveUrl: '#',
      githubUrl: '#',
      features: [
        'Workout plan generation',
        'Nutrition tracking',
        'Progress analytics',
        'Social features',
        'Offline functionality'
      ]
    },
    {
      id: 4,
      title: 'Design System Library',
      category: 'design',
      image: '/api/placeholder/400/300',
      description: 'A comprehensive design system with reusable components, documentation, and accessibility guidelines.',
      technologies: ['Storybook', 'React', 'TypeScript', 'Figma', 'Styled Components'],
      liveUrl: '#',
      githubUrl: '#',
      features: [
        'Reusable component library',
        'Interactive documentation',
        'Accessibility compliance',
        'Design tokens system',
        'Version control integration'
      ]
    },
    {
      id: 5,
      title: 'AI Chat Application',
      category: 'fullstack',
      image: '/api/placeholder/400/300',
      description: 'An AI-powered chat application with natural language processing and intelligent responses.',
      technologies: ['Next.js', 'OpenAI API', 'WebSocket', 'Redis', 'TypeScript'],
      liveUrl: '#',
      githubUrl: '#',
      features: [
        'AI-powered conversations',
        'Real-time messaging',
        'Context awareness',
        'Multi-language support',
        'Conversation history'
      ]
    },
    {
      id: 6,
      title: 'Portfolio Website',
      category: 'web',
      image: '/api/placeholder/400/300',
      description: 'A modern, responsive portfolio website with smooth animations and interactive elements.',
      technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript', 'Vercel'],
      liveUrl: '#',
      githubUrl: '#',
      features: [
        'Smooth animations',
        'Responsive design',
        'Performance optimized',
        'SEO friendly',
        'Interactive elements'
      ]
    }
  ];

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' ? true : project.category === activeFilter
  );

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my latest work and creative solutions
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects List */}
        <motion.div
          layout
          className="space-y-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row">
                    {/* Project Image */}
                    <div className="lg:w-1/3 relative h-48 lg:h-auto bg-gradient-to-br from-blue-500/20 to-purple-500/20 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-purple-600/30 flex items-center justify-center">
                        <span className="text-6xl opacity-50">🚀</span>
                      </div>
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white font-semibold">View Details</span>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="lg:w-2/3 p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">
                            {project.title}
                          </h3>
                          <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full mb-3">
                            {filters.find(f => f.id === project.category)?.label}
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full border border-white/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Key Features */}
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {project.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-gray-300 text-sm">
                              <span className="text-blue-400 mr-2">•</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <motion.a
                          href={project.liveUrl}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-300"
                        >
                          Live Demo
                        </motion.a>
                        <motion.a
                          href={project.githubUrl}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-white/10 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-white/20 transition-colors duration-300"
                        >
                          GitHub
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-slate-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <h2 className="text-3xl font-bold text-white">{selectedProject.title}</h2>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="text-gray-400 hover:text-white text-2xl"
                    >
                      ×
                    </button>
                  </div>
                  
                  <div className="space-y-6">
                    <p className="text-gray-300 leading-relaxed">{selectedProject.description}</p>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">Features</h3>
                      <ul className="space-y-2">
                        {selectedProject.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-gray-300">
                            <span className="text-blue-400 mr-2 mt-1">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex gap-4 pt-4">
                      <a
                        href={selectedProject.liveUrl}
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
                      >
                        View Live Demo
                      </a>
                      <a
                        href={selectedProject.githubUrl}
                        className="bg-white/10 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition-colors duration-300"
                      >
                        View on GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects; 