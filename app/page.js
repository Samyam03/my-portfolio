'use client';

import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background from './effects/Background';

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  const handleBackgroundReady = () => {
    setShowContent(true);
  };

  return (
    <main className="min-h-screen">
      {/* Background loads first */}
      <Background 
        intensity="medium" 
        planetCount={2} 
        starCount={20} 
        showMouseTorch={false}
        onBackgroundReady={handleBackgroundReady}
      >
        {/* Navigation appears after background is ready but stays fixed at top */}
        <div className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Navigation />
        </div>
        
        {/* Content appears after background is ready */}
        <div className={`transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Leadership />
          <Contact />
          <Footer />
        </div>
      </Background>
    </main>
  );
}
