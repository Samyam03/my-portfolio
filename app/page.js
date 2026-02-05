'use client';

import { useState, useEffect, useCallback, memo } from 'react';
import dynamic from 'next/dynamic';
import Hero from './components/Hero';
import Navigation from './components/Navigation';

// Dynamic imports for below-the-fold components - reduces initial bundle size
const About = dynamic(() => import('./components/About'), { ssr: true });
const Skills = dynamic(() => import('./components/Skills'), { ssr: true });
const Projects = dynamic(() => import('./components/Projects'), { ssr: true });
const Experience = dynamic(() => import('./components/Experience'), { ssr: true });
const Leadership = dynamic(() => import('./components/Leadership'), { ssr: true });
const Contact = dynamic(() => import('./components/Contact'), { ssr: true });
const Footer = dynamic(() => import('./components/Footer'), { ssr: true });

export default function Home() {
  const [showMainContent, setShowMainContent] = useState(false);
  const [showNavigation, setShowNavigation] = useState(false);

  // Trigger content visibility after mount
  useEffect(() => {
    // Priority 1: Main content loads first (heavy content)
    setShowMainContent(true);
    
    // Priority 2: Navigation appears after main content starts rendering
    const timerId = setTimeout(() => {
      setShowNavigation(true);
    }, 150);
    
    return () => clearTimeout(timerId);
  }, []);

  return (
    <main className="min-h-screen">
      {/* Navigation appears after main content starts loading - lower priority */}
      <div className={`fixed top-0 left-0 right-0 z-9999 transition-all duration-700 ease-out ${showNavigation ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
        <Navigation />
      </div>
      
      {/* Main content has highest priority - loads first */}
      <div className={`transition-all duration-1000 ease-out ${showMainContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Leadership />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
