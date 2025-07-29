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
          { name: 'Home', href: '#home' },
          { name: 'About', href: '#about' },
          { name: 'Projects', href: '#projects' },
          { name: 'Experience', href: '#experience' },
          { name: 'Contact', href: '#contact' },
        ]
      },
      {
        title: 'Services',
        links: [
          { name: 'Web Development', href: '#' },
          { name: 'Mobile Apps', href: '#' },
          { name: 'UI/UX Design', href: '#' },
          { name: 'Consulting', href: '#' },
          { name: 'Training', href: '#' },
        ]
      },
      {
        title: 'Resources',
        links: [
          { name: 'Blog', href: '#' },
          { name: 'Portfolio', href: '#' },
          { name: 'Resume', href: '/Samyam_Bhattarai.pdf' },
          { name: 'GitHub', href: '#' },
          { name: 'LinkedIn', href: '#' },
        ]
      }
    ]
  };

  const socialLinks = [
    { name: 'GitHub', icon: '🐙', url: 'https://github.com/samyam' },
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/in/samyam' },
    { name: 'Twitter', icon: '🐦', url: 'https://twitter.com/samyam' },
    { name: 'Instagram', icon: '📷', url: 'https://instagram.com/samyam' },
    { name: 'YouTube', icon: '📺', url: 'https://youtube.com/@samyam' },
  ];

  return (
    <footer className="relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="glass p-4 md:p-6 rounded-2xl shadow-lg">
          <div className="grid w-full md:grid-cols-2 lg:grid-cols-4 gap-4 gap-x-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="min-w-0 flex-1 flex flex-col h-full"
            >
              <div className="flex items-center space-x-2 mb-2">
                <SpaceLogo size="xl" />
                <span className="text-xl font-bold text-white">Samyam Bhattarai</span>
              </div>
              <p className="text-gray-400 mb-3 leading-relaxed text-sm">
                Full-stack developer passionate about creating innovative digital experiences 
                that make a difference in people's lives.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-2xl hover:text-blue-400 transition-colors duration-300"
                    title={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Footer Links */}
            {footerLinks.sections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                viewport={{ once: true }}
                className="min-w-0 flex-1 flex flex-col h-full"
              >
                <h3 className="text-base font-semibold text-white mb-2">
                  {section.title}
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
                        className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                      >
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>



          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-6 pt-4 border-t border-white/10"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © {currentYear} Samyam Bhattarai. All rights reserved.
              </div>
              <div className="flex space-x-6 text-sm">
                {/* Removed Privacy Policy, Terms of Service, Cookie Policy links */}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 