'use client';

import { motion } from 'framer-motion';
import { SpaceLogo } from './Effects';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    sections: [
      {
        title: 'Navigation',
        links: [
          { name: 'About', href: '#about' },
          { name: 'Skills', href: '#skills' },
          { name: 'Projects', href: '#projects' },
          { name: 'Experience', href: '#experience' },
          { name: 'Leadership', href: '#leadership' },
          { name: 'Contact', href: '#contact' },
        ]
      },
      {
        title: 'Resources',
        links: [
          { name: 'Resume', href: '/Samyam_Bhattarai.pdf', external: true },
          { name: 'GitHub', href: 'https://github.com/samyam', external: true },
          { name: 'LinkedIn', href: 'https://linkedin.com/in/samyam', external: true },
          { name: 'Portfolio', href: '#', external: false },
        ]
      },
      {
        title: 'Connect',
        links: [
          { name: 'Email', href: 'mailto:samyam@example.com', external: true },
          { name: 'Facebook', href: 'https://facebook.com/samyam', external: true },
          { name: 'Instagram', href: 'https://instagram.com/samyam', external: true },
        ]
      }
    ]
  };



  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };



  return (
    <footer className="relative border-t border-white/10 bg-gradient-to-b from-transparent to-slate-900/20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-8">
        <motion.div 
          className="glass p-4 md:p-6 lg:p-8 rounded-3xl shadow-2xl border border-white/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6 xl:gap-8">
            {/* Brand Section */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-1 xl:col-span-1 space-y-4"
            >
              <div className="flex items-center space-x-3 mb-3">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <SpaceLogo size="xl" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-white">Samyam Bhattarai</h3>
                  <p className="text-sm text-gray-400">Full-Stack Developer</p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed text-sm">
                Passionate about creating innovative digital experiences that make a difference 
                in people's lives.
              </p>
            </motion.div>

            {/* Footer Links */}
            {footerLinks.sections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                variants={itemVariants}
                className="space-y-4"
              >
                <h3 className="text-base font-semibold text-white mb-3 relative">
                  {section.title}
                  <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: (sectionIndex * 0.1) + (linkIndex * 0.05) }}
                      viewport={{ once: true }}
                    >
                      <a
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className="group flex items-center text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1"
                      >
                        <span className="relative">
                          {link.name}
                          <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full" />
                        </span>
                        {link.external && (
                          <svg className="ml-1 w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        )}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>



          {/* Bottom Bar */}
          <motion.div
            variants={itemVariants}
            className="mt-6 pt-4 border-t border-white/10"
          >
            <div className="flex justify-center items-center">
              <div className="text-gray-400 text-sm text-center">
                © {currentYear} Samyam Bhattarai. All rights reserved.
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 