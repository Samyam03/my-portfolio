'use client';

import { useState, useEffect } from 'react';
import { SpaceLogo } from '../effects/Background';
import Image from 'next/image';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-900/95 backdrop-blur-md border-b border-white/20 shadow-lg' 
          : 'bg-gradient-to-b from-slate-900/90 to-transparent backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home">
              <SpaceLogo size="md" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-6 lg:ml-10 flex items-baseline space-x-4 lg:space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white px-2 sm:px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 relative group hover:bg-white/10"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Resume Button (desktop, only when scrolled) */}
          {scrolled && (
            <div className="hidden md:block ml-2 lg:ml-4">
              <a
                href="/Samyam_Bhattarai.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 sm:px-7 py-2 rounded-lg bg-purple-600 text-white font-semibold shadow-md border border-purple-700 hover:bg-purple-700 hover:shadow-lg transition-all duration-150 flex items-center space-x-2 text-sm sm:text-base"
              >
                <span>Resume</span>
                <Image 
                  src="/icons/document.svg" 
                  alt="Document" 
                  width={20} 
                  height={20} 
                  className="w-4 h-4 sm:w-5 sm:h-5 filter brightness-0 invert"
                />
              </a>
            </div>
          )}

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white p-1 sm:p-2 rounded-md"
              aria-label="Toggle navigation menu"
            >
              <div className="w-6 h-6 sm:w-7 sm:h-7 flex flex-col justify-center items-center">
                <span
                  className={`w-6 sm:w-7 h-0.5 bg-current transform transition-all duration-300${isOpen ? ' rotate-45 translate-y-1 sm:translate-y-2' : ''}`}
                />
                <span
                  className={`w-6 sm:w-7 h-0.5 bg-current transform transition-all duration-300 mt-1${isOpen ? ' opacity-0' : ''}`}
                />
                <span
                  className={`w-6 sm:w-7 h-0.5 bg-current transform transition-all duration-300 mt-1${isOpen ? ' -rotate-45 -translate-y-1 sm:-translate-y-2' : ''}`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
        {isOpen && (
        <div className="md:hidden fixed top-14 sm:top-16 left-0 w-full bg-slate-900/95 backdrop-blur-md border-t border-white/20 shadow-lg z-[9999]">
            <div className="px-3 sm:px-4 pt-3 sm:pt-4 pb-4 sm:pb-6 space-y-1 sm:space-y-2 flex flex-col">
            {navItems.map((item) => (
              <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-white block px-3 sm:px-4 py-2 sm:py-3 rounded-md text-base sm:text-lg font-medium transition-colors duration-300 w-full text-center"
                >
                  {item.name}
              </a>
              ))}
            <a
              href="/Samyam_Bhattarai.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 sm:mt-2 px-4 sm:px-7 py-2 rounded-lg bg-purple-600 text-white font-semibold shadow-md border border-purple-700 hover:bg-purple-700 hover:shadow-lg transition-all duration-150 flex items-center justify-center space-x-2 text-sm sm:text-base w-full"
              onClick={() => setIsOpen(false)}
            >
              <span>Resume</span>
              <Image 
                src="/icons/document.svg" 
                alt="Document" 
                width={20} 
                height={20} 
                className="w-4 h-4 sm:w-5 sm:h-5 filter brightness-0 invert"
              />
            </a>
            </div>
        </div>
        )}
    </nav>
  );
};

export default Navigation; 