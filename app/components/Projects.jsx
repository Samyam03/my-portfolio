'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Projects = () => {
  // Removed dialog/modal logic

  const projects = [
    {
      id: 1,
      title: 'Splitz – Expense Splitting Application',
      image: '/api/placeholder/400/300',
      description: 'Splitz is a full-stack, real-time expense splitting web application that enables users to split bills, track debts, and manage settlements with friends and groups. Built with modern web technologies and deployed on cloud infrastructure.',
      technologies: [
        'Next.js 15', 'React 19', 'TypeScript', 'Convex', 'Clerk', 'Tailwind CSS', 'Recharts'
      ],
      liveUrl: '#',
      githubUrl: '#',
      features: [
        'User authentication system',
        'Real-time expense tracking',
        'Group management (create/join/manage)',
        '3 split types (equal, exact, percentage)',
        'Balance calculation engine',
        'Settlement management',
        'Email notification system',
        'Responsive dashboard',
        'Data visualization charts',
        'Cloud-native deployment on Vercel'
      ]
    },
    {
      id: 2,
      title: 'ShopSphere – E-commerce Website',
      image: '/api/placeholder/400/300',
      description: 'A full-stack E-commerce platform with a customer-facing web app, admin dashboard, and robust backend. Features product browsing, cart, order management, admin controls, and secure authentication. Built with React, Node.js, Express, and MongoDB, and deployed on Vercel.',
      technologies: [
        'React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'Cloudinary'
      ],
      liveUrl: '#',
      githubUrl: '#',
      features: [
        'Customer-facing web app (product browsing, cart, checkout, account management)',
        'Admin dashboard for product, order, and user management',
        'RESTful API with Express.js',
        'MongoDB database with Mongoose models',
        'Secure authentication (custom middleware)',
        'File uploads with Multer and Cloudinary',
        'Responsive design',
        'Deployed on Vercel'
      ]
    },
    {
      id: 3,
      title: 'ElevatePath – AI-Powered Career Development Platform',
      image: '/api/placeholder/400/300',
      description: 'ElevatePath is a comprehensive AI-powered career development platform that helps users build professional resumes, generate personalized cover letters, prepare for technical interviews, and gain industry-specific insights. Built with modern web technologies and AI integration, it serves as a complete career management suite.',
      technologies: [
        'Next.js 15', 'React 19', 'Tailwind CSS', 'Prisma ORM', 'PostgreSQL', 'Clerk', 'Google Gemini AI'
      ],
      liveUrl: '#',
      githubUrl: '#',
      features: [
        'AI-powered resume and cover letter generation',
        'Technical interview preparation and quizzes',
        'Industry insights dashboard',
        'Responsive design with dark mode',
        'Secure authentication with Clerk and OAuth',
        'Real-time form validation and feedback',
        'Data visualization and analytics',
        'Export to PDF and Markdown',
        'Scalable, production-ready deployment'
      ]
    },
    {
      id: 4,
      title: 'NoteGenius – AI-Powered Study Assistant',
      image: '/api/placeholder/400/300',
      description: 'NoteGenius is an AI-powered study assistant that transforms PDF documents into interactive, intelligent study materials. It combines advanced document processing, semantic search, AI-powered Q&A, and real-time note-taking in a modern, responsive web interface.',
      technologies: [
        'Next.js 15', 'React 19', 'Tailwind CSS', 'Convex', 'Google Gemini 2.0 Flash', 'LangChain', 'Clerk'
      ],
      liveUrl: '#',
      githubUrl: '#',
      features: [
        'Upload and process PDF documents',
        'AI-powered Q&A and instant note generation',
        'Semantic search with vector embeddings',
        'Real-time note-taking and editing',
        'Responsive dashboard with 7 breakpoints',
        'Secure authentication with Clerk',
        'Rich text editing with TipTap',
        'File storage and management',
        'Optimistic UI updates and real-time database',
        'Accessible, mobile-first design'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
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
            My Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my latest work and creative solutions
          </p>
        </motion.div>

        {/* Projects List */}
        <motion.div
          layout
          className="space-y-8"
        >
          <AnimatePresence>
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className="group"
              >
                <div className="bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-300 min-h-[340px] flex flex-col justify-between">
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
                        {/* Special case for ShopSphere: show both Live Demo and Admin Demo */}
                        {project.title.includes('ShopSphere') ? (
                          <>
                            <motion.a
                              href="https://your-frontend-url.com"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-300"
                            >
                              Live Demo
                            </motion.a>
                            <motion.a
                              href="https://your-admin-url.com"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="bg-purple-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors duration-300"
                            >
                              Admin Demo
                            </motion.a>
                            <motion.a
                              href="https://github.com/your-repo"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="bg-white/10 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-white/20 transition-colors duration-300"
                            >
                              GitHub
                            </motion.a>
                          </>
                        ) : (
                          <>
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
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 