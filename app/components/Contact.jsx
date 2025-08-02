'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Contact = () => {
  const contactMethods = [
    {
      icon: (
        <Image 
          src="/icons/email.svg" 
          alt="Email icon" 
          width={40} 
          height={40} 
          className="w-8 h-8 sm:w-10 sm:h-10 filter brightness-0 invert"
        />
      ),
      title: 'Email',
      value: 'samyambhattarai65@gmail.com',
      link: 'mailto:samyambhattarai65@gmail.com',
      description: 'Send me an email for professional inquiries',
      responseTime: 'Usually responds within 24 hours',
      color: 'from-purple-500 to-purple-600',
      category: 'primary'
    },
    {
      icon: (
        <Image 
          src="/icons/phone.svg" 
          alt="Phone icon" 
          width={40} 
          height={40} 
          className="w-8 h-8 sm:w-10 sm:h-10 filter brightness-0 invert"
        />
      ),
      title: 'Phone',
      value: '+1 (916) 842-9229',
      link: 'tel:+19168429229',
      description: 'Call me for urgent matters or quick discussions',
      responseTime: 'Usually responds within 1 hour',
      color: 'from-green-500 to-green-600',
      category: 'primary'
    },
    {
      icon: (
        <Image 
          src="/icons/linkedin-simple.svg" 
          alt="LinkedIn icon" 
          width={40} 
          height={40} 
          className="w-8 h-8 sm:w-10 sm:h-10 filter brightness-0 invert"
        />
      ),
      title: 'LinkedIn',
      value: 'linkedin.com/in/samyam-bhattarai',
      link: 'https://linkedin.com/in/samyam-bhattarai',
      description: 'Connect with me professionally on LinkedIn',
      responseTime: 'Usually responds within 48 hours',
      color: 'from-blue-500 to-blue-600',
      category: 'primary'
    }
  ];



  const availabilityInfo = {
    status: 'Open to Exciting Opportunities',
    description: 'Driven by innovation and passionate about creating impactful solutions. Seeking challenging roles where I can leverage my skills to build meaningful products and grow with forward-thinking teams.',
    highlights: [
      'Software Engineering Internships',
      'AI/ML Research Projects', 
      'Open Source Collaborations'
    ]
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass p-4 sm:p-6 md:p-8 lg:p-12 rounded-2xl shadow-lg">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              Let&apos;s Connect
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto px-2">
              Ready to collaborate? I&apos;m actively seeking internship opportunities, research collaborations, and exciting projects. Choose your preferred way to reach out.
            </p>
          </motion.div>

          {/* Contact Methods Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 lg:mb-16"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">
              Get In Touch
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative bg-white/5 rounded-xl p-8 sm:p-10 border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="text-blue-400 group-hover:text-white transition-colors duration-300">
                        {method.icon}
                      </div>
                      <div className="flex items-center space-x-3">
                        <h3 className="font-bold text-white text-xl sm:text-2xl">
                          {method.title}
                        </h3>
                        {method.title === 'Email' && (
                          <span className="px-2 py-1 bg-green-500/20 text-green-300 text-xs font-medium rounded-full border border-green-500/30">
                            Preferred
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300 text-base sm:text-lg font-medium mb-4">
                      {method.value}
                    </p>
                    <p className="text-gray-300 text-sm sm:text-base mb-4">
                      {method.description}
                    </p>
                    <p className="text-green-400 text-sm font-medium">
                      {method.responseTime}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>



          {/* Availability Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-8 sm:p-10"
          >
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                {availabilityInfo.status}
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-3xl mx-auto mb-6">
                {availabilityInfo.description}
              </p>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                {availabilityInfo.highlights.map((highlight, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs sm:text-sm rounded-full border border-blue-500/30"
                  >
                    {highlight}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 