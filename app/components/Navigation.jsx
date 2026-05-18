'use client';

import { useState, useEffect, useCallback, memo } from 'react';
import { SpaceLogo } from '../effects/Background';
import { RESUME_URL } from '../lib/site';
import { throttle } from '../lib/utils';
import Image from 'next/image';

const NAV_ITEMS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const NAV_LINK_CLASS =
  'relative group whitespace-nowrap rounded-md px-2 py-2 text-xs font-medium text-gray-300 transition-colors duration-200 hover:text-white lg:px-2.5 lg:text-sm';

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
          className="h-4 w-4 shrink-0 invert"
        />
      )}
    </a>
  );
}

function NavLink({ item, onClick, className = NAV_LINK_CLASS }) {
  return (
    <a href={item.href} onClick={onClick} className={className}>
      {item.name}
      <span className="absolute bottom-1 left-2 right-2 h-0.5 origin-left scale-x-0 bg-blue-500 transition-transform duration-300 group-hover:scale-x-100" />
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
      className={`relative z-50 w-full transition-colors duration-300 ${
        scrolled
          ? 'border-b border-white/20 bg-slate-900/95 shadow-lg backdrop-blur-md'
          : 'border-b border-transparent bg-linear-to-b from-slate-900/90 to-transparent backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-2 px-4 sm:h-16 sm:gap-3 sm:px-6 lg:px-8">
        <div className="shrink-0">
          <a href="#home" className="block" onClick={closeMenu}>
            <SpaceLogo size="nav" />
          </a>
        </div>

        <div className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 lg:flex lg:gap-1">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.name} item={item} />
          ))}
        </div>

        <div className="hidden shrink-0 lg:flex">
          <ResumeLink className="flex items-center gap-2 whitespace-nowrap rounded-lg border border-purple-700 bg-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition-colors duration-200 hover:bg-purple-700" />
        </div>

        <div className="flex shrink-0 items-center gap-2 lg:hidden">
          {scrolled && (
            <ResumeLink
              className="hidden items-center gap-1.5 rounded-lg border border-purple-700 bg-purple-600 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-purple-700 sm:flex"
              iconSize={0}
            />
          )}
          <button
            type="button"
            onClick={toggleMenu}
            className="relative flex h-10 w-10 items-center justify-center rounded-md text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            <span
              className={`absolute left-1/2 top-[11px] h-0.5 w-5 -translate-x-1/2 bg-current transition-all duration-300 ${
                isOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : ''
              }`}
            />
            <span
              className={`absolute left-1/2 top-1/2 h-0.5 w-5 -translate-x-1/2 -translate-y-1/2 bg-current transition-all duration-300 ${
                isOpen ? 'scale-0 opacity-0' : ''
              }`}
            />
            <span
              className={`absolute bottom-[11px] left-1/2 h-0.5 w-5 -translate-x-1/2 bg-current transition-all duration-300 ${
                isOpen ? 'bottom-1/2 translate-y-1/2 -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="absolute left-0 right-0 top-full z-50 border-b border-white/20 bg-slate-900/98 shadow-xl backdrop-blur-md lg:hidden">
          <div className="flex max-h-[calc(100dvh-3.5rem)] flex-col gap-1 overflow-y-auto px-4 py-4 sm:max-h-[calc(100dvh-4rem)]">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.name}
                item={item}
                onClick={closeMenu}
                className="block rounded-md px-4 py-3 text-center text-base font-medium text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
              />
            ))}
            <ResumeLink
              onClick={closeMenu}
              className="mt-2 flex items-center justify-center gap-2 rounded-lg border border-purple-700 bg-purple-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-purple-700"
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
