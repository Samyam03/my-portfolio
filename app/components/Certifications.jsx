'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const certifications = [
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    image: '/logos/aws-certified-cloud-practitioner.png',
    alt: 'AWS Certified Cloud Practitioner badge',
  },
  {
    name: 'AWS Certified AI Practitioner',
    issuer: 'Amazon Web Services',
    image: '/logos/aws-certified-ai-practitioner.png',
    alt: 'AWS Certified AI Practitioner badge',
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-12 sm:py-16 lg:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass p-4 sm:p-6 md:p-8 lg:p-12 rounded-2xl shadow-lg"
        >
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
              Certifications
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-2">
              Industry credentials validating cloud and AI fundamentals
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mx-auto"
          >
            {certifications.map((cert, index) => (
              <motion.article
                key={cert.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="bg-white/5 rounded-xl p-6 sm:p-8 border border-white/10 flex flex-col items-center text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.2 }}
                  className="relative w-40 h-40 sm:w-48 sm:h-48 mb-4 sm:mb-6"
                >
                  <Image
                    src={cert.image}
                    alt={cert.alt}
                    fill
                    sizes="(max-width: 640px) 160px, 192px"
                    className="object-contain"
                  />
                </motion.div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">
                  {cert.name}
                </h3>
                <p className="text-sm text-gray-400">{cert.issuer}</p>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
