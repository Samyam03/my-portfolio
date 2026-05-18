'use client';

import { useState } from 'react';
import Image from 'next/image';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('languages');

  const skillCategories = [
    { id: 'languages', name: 'Languages & Databases' },
    { id: 'frameworks', name: 'Frameworks & Libraries' },
    { id: 'tools', name: 'Tools & Platforms' },
  ];

  const skills = {
    languages: [
      { name: 'JavaScript', logo: '/logos/javascript.svg' },
      { name: 'TypeScript', logo: '/logos/typescript.svg' },
      { name: 'Python', logo: '/logos/python.svg' },
      { name: 'Java', logo: '/logos/java.svg' },
      { name: 'HTML', logo: '/logos/html5.svg' },
      { name: 'CSS', logo: '/logos/css3.svg' },
      { name: 'SQL', logo: '/logos/mysql.svg' },
      { name: 'MongoDB', logo: '/logos/mongodb.svg' },
    ],
    frameworks: [
      { name: 'React.js', logo: '/logos/react.svg' },
      { name: 'Next.js', logo: '/logos/nextjs.svg' },
      { name: 'Node.js', logo: '/logos/nodejs.svg' },
      { name: 'Express.js', logo: '/logos/express.svg' },
      { name: 'PyTorch', logo: '/logos/pytorch.svg' },
    ],
    tools: [
      { name: 'Git', logo: '/logos/git.svg' },
      { name: 'GitHub', logo: '/logos/github.svg' },
      { name: 'Linux', logo: '/logos/linux.svg' },
      { name: 'Postman', logo: '/logos/postman.svg' },
      { name: 'Figma', logo: '/logos/figma.svg' },
      { name: 'Docker', logo: '/logos/docker.svg' },
      { name: 'AWS', logo: '/logos/aws.svg' },
    ],
  };

  const cardClass =
    activeCategory === 'languages'
      ? 'bg-linear-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20 hover:border-blue-500/50'
      : activeCategory === 'frameworks'
        ? 'bg-linear-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20 hover:border-purple-500/50'
        : 'bg-linear-to-br from-green-500/10 to-emerald-500/10 border-green-500/20 hover:border-green-500/50';

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass p-4 sm:p-6 md:p-8 lg:p-12 rounded-2xl shadow-lg">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
              Technical Skills
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-2">
              A comprehensive overview of my technical expertise
            </p>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center justify-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium cursor-pointer text-sm sm:text-base ${
                  activeCategory === category.id
                    ? category.id === 'languages'
                      ? 'bg-linear-to-r from-blue-500/20 to-cyan-500/20 border-2 border-blue-500/50 text-white shadow-lg shadow-blue-500/20'
                      : category.id === 'frameworks'
                        ? 'bg-linear-to-r from-purple-500/20 to-pink-500/20 border-2 border-purple-500/50 text-white shadow-lg shadow-purple-500/20'
                        : 'bg-linear-to-r from-green-500/20 to-emerald-500/20 border-2 border-green-500/50 text-white shadow-lg shadow-green-500/20'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white border border-transparent'
                }`}
              >
                <span className="whitespace-nowrap">{category.name}</span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
            {skills[activeCategory].map((skill) => (
              <div
                key={skill.name}
                className={`rounded-xl p-3 sm:p-4 lg:p-6 border ${cardClass}`}
              >
                <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 relative shrink-0 flex items-center justify-center">
                    <Image
                      src={skill.logo}
                      alt={skill.name}
                      width={32}
                      height={32}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white">
                    {skill.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-12 lg:mt-16 bg-linear-to-r from-orange-500/20 to-red-600/20 rounded-xl p-4 sm:p-6 lg:p-8 border border-orange-500/30">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">
              Always Learning & Growing
            </h3>
            <p className="text-sm sm:text-base text-gray-300 text-center max-w-2xl mx-auto leading-relaxed">
              Technology evolves rapidly, and I&apos;m committed to continuous learning.
              I stay updated with the latest trends and best practices in web development,
              always exploring new technologies and frameworks to enhance my skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

