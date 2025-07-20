'use client';

import { useState, useEffect } from 'react';

const GlobalMouseTorch = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const gradientStyle = {
    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.25), transparent 40%)`,
    pointerEvents: 'none',
  };

  return (
    <div 
      className="fixed inset-0 z-10 transition-opacity duration-300"
      style={gradientStyle}
    />
  );
};

export default GlobalMouseTorch; 