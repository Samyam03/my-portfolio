'use client';

import { useState, useEffect, useCallback, memo, useMemo } from 'react';
import { SpaceLogo } from '../effects/Background';
import Image from 'next/image';

// Throttle utility for scroll events
const throttle = (fn, delay) => {
  let lastCall = 0;
  return (...args) => {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      fn(...args);
    }
  };
};

const Navigation = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Throttled scroll handler - fires at most every 100ms
    const handleScroll = throttle(() => {
      setScrolled(window.scrollY > 50);
    }, 100);

    // Check initial scroll position
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Memoize navItems to prevent recreation on each render
  const navItems = useMemo(() => [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ], []);

  // Memoize toggle handler
  const toggleMenu = useCallback(() => setIsOpen(prev => !prev), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  return (
    <nav
      className={`w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-900/95 backdrop-blur-md border-b border-white/20 shadow-lg' 
          : 'bg-linear-to-b from-slate-900/90 to-transparent backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <div className="shrink-0">
            <a href="#home">
              <SpaceLogo size="md" className="w-10! h-10! sm:w-12! sm:h-12!" />
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
                href="/Samyam_Bhattarai_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-lg bg-purple-600 text-white font-semibold shadow-md border border-purple-700 hover:bg-purple-700 hover:shadow-lg transition-all duration-150 flex items-center space-x-2 text-sm"
              >
                <span>Resume</span>
                <Image 
                  src="/icons/document.svg" 
                  alt="Document" 
                  width={18} 
                  height={18} 
                  className="w-4 h-4 filter brightness-0 invert"
                />
              </a>
            </div>
          )}

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white p-2 rounded-md"
              aria-label="Toggle navigation menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`w-6 h-0.5 bg-current transform transition-all duration-300 origin-center ${isOpen ? 'rotate-45 translate-y-[9px]' : ''}`}
                />
                <span
                  className={`w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0 scale-0' : ''}`}
                />
                <span
                  className={`w-6 h-0.5 bg-current transform transition-all duration-300 origin-center ${isOpen ? '-rotate-45 -translate-y-[9px]' : ''}`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden fixed top-14 sm:top-16 left-0 w-full bg-slate-900/95 backdrop-blur-md border-t border-white/20 shadow-lg z-9999">
          <div className="px-4 py-4 space-y-2 flex flex-col">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className="text-gray-300 hover:text-white hover:bg-white/10 block px-4 py-3 rounded-md text-base font-medium transition-colors duration-200 w-full text-center"
              >
                {item.name}
              </a>
            ))}
            <a
              href="/Samyam_Bhattarai_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 px-5 py-3 rounded-lg bg-purple-600 text-white font-semibold shadow-md border border-purple-700 hover:bg-purple-700 hover:shadow-lg transition-colors duration-200 flex items-center justify-center gap-2 text-sm w-full"
              onClick={closeMenu}
            >
              <span>Resume</span>
              <Image 
                src="/icons/document.svg" 
                alt="Document" 
                width={18} 
                height={18} 
                className="w-4 h-4 filter brightness-0 invert"
              />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
});
Navigation.displayName = 'Navigation';

export default Navigation; 