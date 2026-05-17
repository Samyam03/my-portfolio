'use client';

import { useState, useEffect, useCallback, memo } from 'react';
import { SpaceLogo } from '../effects/Background';
import { RESUME_URL } from '../lib/site';
import { throttle } from '../lib/utils';
import Image from 'next/image';

const NAV_ITEMS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Certs', href: '#certifications', label: 'Certifications' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const NAV_LINK_CLASS =
  'text-gray-300 hover:text-white px-2 lg:px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 relative group whitespace-nowrap';

function ResumeLink({ className, onClick, children = 'Resume', iconSize = 16 }) {
  return (
    <a
      href={RESUME_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={className}
    >
      {children}
      {iconSize > 0 && (
        <Image
          src="/icons/document.svg"
          alt=""
          width={iconSize}
          height={iconSize}
          className="w-4 h-4 invert"
        />
      )}
    </a>
  );
}

const Navigation = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      setScrolled(window.scrollY > 50);
    }, 100);

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  return (
    <nav
      className={`relative w-full transition-colors duration-300 ${
        scrolled
          ? 'bg-slate-900/95 backdrop-blur-md border-b border-white/20 shadow-lg'
          : 'bg-linear-to-b from-slate-900/90 to-transparent backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 gap-3">
          <div className="shrink-0">
            <a href="#home" className="block" onClick={closeMenu}>
              <SpaceLogo size="nav" />
            </a>
          </div>

          <div className="hidden lg:flex flex-1 items-center justify-center gap-1 xl:gap-2 min-w-0 px-2">
            {NAV_ITEMS.map((item) => (
              <a key={item.name} href={item.href} className={NAV_LINK_CLASS}>
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center shrink-0">
            <ResumeLink className="px-4 py-2 rounded-lg bg-purple-600 text-white font-semibold shadow-md border border-purple-700 hover:bg-purple-700 transition-colors duration-200 flex items-center gap-2 text-sm whitespace-nowrap" />
          </div>

          <div className="flex lg:hidden items-center gap-2 shrink-0 ml-auto">
            {scrolled && (
              <ResumeLink
                className="hidden sm:flex px-3 py-1.5 rounded-lg bg-purple-600 text-white text-xs font-semibold border border-purple-700 hover:bg-purple-700 transition-colors items-center gap-1.5"
                iconSize={0}
              />
            )}
            <button
              type="button"
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white p-2 rounded-md"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`block w-6 h-0.5 bg-current transition-all duration-300 origin-center ${
                    isOpen ? 'rotate-45 translate-y-[9px]' : ''
                  }`}
                />
                <span
                  className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                    isOpen ? 'opacity-0 scale-0' : ''
                  }`}
                />
                <span
                  className={`block w-6 h-0.5 bg-current transition-all duration-300 origin-center ${
                    isOpen ? '-rotate-45 -translate-y-[9px]' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-slate-900/98 backdrop-blur-md border-b border-white/20 shadow-xl z-50">
          <div className="px-4 py-4 flex flex-col gap-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className="text-gray-300 hover:text-white hover:bg-white/10 block px-4 py-3 rounded-md text-base font-medium transition-colors text-center"
              >
                {item.label ?? item.name}
              </a>
            ))}
            <ResumeLink
              onClick={closeMenu}
              className="mt-2 px-5 py-3 rounded-lg bg-purple-600 text-white font-semibold border border-purple-700 hover:bg-purple-700 transition-colors flex items-center justify-center gap-2 text-sm"
              iconSize={18}
            />
          </div>
        </div>
      )}
    </nav>
  );
});
Navigation.displayName = 'Navigation';

export default Navigation;
