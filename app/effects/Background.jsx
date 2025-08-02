"use client";

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Space Logo Component
const SpaceLogo = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8 sm:w-10 sm:h-10 text-sm',
    md: 'w-12 h-12 sm:w-14 sm:h-14 text-lg',
    lg: 'w-14 h-14 sm:w-16 sm:h-16 text-xl',
    xl: 'w-16 h-16 sm:w-20 sm:h-20 text-2xl'
  };

  return (
    <motion.div
      className={`relative ${sizeClasses[size]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* SB Logo Image */}
      <div className="relative w-full h-full flex items-center justify-center">
        <Image 
          src="/SB.png" 
          alt="SB Logo" 
          width={48}
          height={48}
          className="w-full h-full object-contain"
        />
      </div>
    </motion.div>
  );
};



// Back To Top Button
const BackToTopButton = ({ delay = 2000 }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  if (!show) return null;

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 text-white rounded-full shadow-lg border border-purple-700 hover:bg-purple-700 hover:shadow-xl transition-all duration-300 z-50 flex items-center justify-center"
      title="Back to top"
    >
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </motion.button>
  );
};

// Starfield Canvas
const PLANET_COLORS = [
  ["#a78bfa", "#7c3aed"], // purple
  ["#60a5fa", "#2563eb"], // blue
  ["#6ee7b7", "#059669"], // green
];
const PLANET_EMOJIS = ["🌍", "🚀", "⚛️"];

const StarfieldCanvas = ({ starCount = 80, planetCount = 3, showPlanets = true, showEmojis = true }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef();
  const stars = useRef([]);
  const planets = useRef([]);
  const emojis = useRef([]);
  // Removed mouse and torch refs

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;



    // Generate stars
    stars.current = Array.from({ length: starCount }, () => {
      const angle = Math.random() * 2 * Math.PI;
      const speed = (Math.random() * 0.08 + 0.03); // moderate speed for balanced movement
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.2 + 0.3,
        twinkle: Math.random() * Math.PI * 2,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
      };
    });

    // Generate planets with fixed corner positions
    if (showPlanets) {
      const margin = 40; // px from edge
      const size = 100; // fixed size for all planets
      const cornerPositions = [
        { x: margin, y: margin }, // top-left
        { x: width - size - margin, y: margin }, // top-right
        { x: width - size - margin, y: height - size - margin }, // bottom-right
        // If you want a fourth planet, add: { x: margin, y: height - size - margin } // bottom-left
      ];
      planets.current = cornerPositions.slice(0, planetCount).map((pos, i) => ({
        ...pos,
        size,
        color: PLANET_COLORS[i % PLANET_COLORS.length],
        floatSeed: Math.random() * Math.PI * 2,
        rotateSeed: Math.random() * Math.PI * 2,
      }));
    }

    // Generate emojis
    if (showEmojis) {
      emojis.current = PLANET_EMOJIS.map((emoji, i) => {
          let left, top;
          if (i % 3 === 0) {
          left = 0.15 * width;
          top = 0.15 * height;
          } else if (i % 3 === 1) {
          left = 0.8 * width;
          top = 0.15 * height;
          } else {
          left = 0.8 * width;
          top = 0.8 * height;
        }
        left += ((i * 89.7 * 11) % 0.08) * width;
        top += ((i * 89.7 * 13) % 0.08) * height;
        return {
          emoji,
          x: left,
          y: top,
          floatSeed: Math.random() * Math.PI * 2,
          rotateSeed: Math.random() * Math.PI * 2,
        };
      });
    }

    function drawPlanet(ctx, planet, t) {
      // Gentle floating and slow rotation
      const floatY = Math.sin(t / 3000 + planet.floatSeed) * 10; // gentle float
      const rotate = (t / 15000 + planet.rotateSeed) % (2 * Math.PI); // very slow rotation
      ctx.save();
      ctx.translate(planet.x + planet.size / 2, planet.y + planet.size / 2 + floatY);
      ctx.rotate(rotate);
      const grad = ctx.createRadialGradient(0, 0, planet.size * 0.2, 0, 0, planet.size / 2);
      grad.addColorStop(0, planet.color[0]);
      grad.addColorStop(1, planet.color[1]);
      ctx.beginPath();
      ctx.arc(0, 0, planet.size / 2, 0, 2 * Math.PI);
      ctx.fillStyle = grad;
      ctx.globalAlpha = 0.28;
      ctx.fill();
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
      ctx.restore();
    }

    function drawEmoji(ctx, emojiObj, t) {
      const floatY = Math.sin(t / 1800 + emojiObj.floatSeed) * 20;
      const rotate = (t / 3500 + emojiObj.rotateSeed) % (2 * Math.PI);
      ctx.save();
      ctx.translate(emojiObj.x, emojiObj.y + floatY);
      ctx.rotate(rotate);
      ctx.globalAlpha = 0.15;
      ctx.font = '32px serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(emojiObj.emoji, 0, 0);
      ctx.globalAlpha = 1;
      ctx.restore();
    }



    function animate() {
      ctx.clearRect(0, 0, width, height);
      const t = Date.now();

      // Draw stars
      for (let star of stars.current) {
        // Gentle twinkle
        const twinkle = 0.6 + 0.4 * Math.sin(star.twinkle + t * 0.0015);
        ctx.globalAlpha = twinkle;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, 2 * Math.PI);
        ctx.fillStyle = '#60a5fa';
        ctx.fill();
        ctx.shadowBlur = 0;
        // Gentle drifting movement
        star.x += star.vx;
        star.y += star.vy;
        // Wrap around edges
        if (star.x < 0) star.x += width;
        if (star.x > width) star.x -= width;
        if (star.y < 0) star.y += height;
        if (star.y > height) star.y -= height;
      }
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
      // Draw planets
      if (showPlanets) {
        for (let planet of planets.current) {
          drawPlanet(ctx, planet, t);
        }
      }
      // Draw emojis
      if (showEmojis) {
        for (let emojiObj of emojis.current) {
          drawEmoji(ctx, emojiObj, t);
        }
      }
      animationRef.current = requestAnimationFrame(animate);
    }
    animate();

    function handleResize() {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      stars.current.forEach(star => {
        star.x = Math.random() * width;
        star.y = Math.random() * height;
      });
      if (showPlanets) {
        // Keep planets in corners on resize
        const margin = 40;
        const size = 100;
        const cornerPositions = [
          { x: margin, y: margin },
          { x: width - size - margin, y: margin },
          { x: width - size - margin, y: height - size - margin },
        ];
        planets.current.forEach((planet, i) => {
          planet.x = cornerPositions[i].x;
          planet.y = cornerPositions[i].y;
          planet.size = size;
        });
      }
      if (showEmojis) {
        emojis.current.forEach((emojiObj, i) => {
          if (i % 3 === 0) {
            emojiObj.x = 0.15 * width;
            emojiObj.y = 0.15 * height;
          } else if (i % 3 === 1) {
            emojiObj.x = 0.8 * width;
            emojiObj.y = 0.15 * height;
          } else {
            emojiObj.x = 0.8 * width;
            emojiObj.y = 0.8 * height;
          }
        });
      }
    }
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, [starCount, planetCount, showPlanets, showEmojis]);
          
          return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ display: 'block' }}
    />
  );
};

// Main Background Component
const Background = ({ 
  children, 
  className = '',
  onBackgroundReady
}) => {
  const [isBackgroundReady, setIsBackgroundReady] = useState(false);

  useEffect(() => {
    // Content appears immediately when background is ready
    setIsBackgroundReady(true);
    if (onBackgroundReady) {
      onBackgroundReady();
    }
  }, [onBackgroundReady]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Content */}
      <div className={`relative z-10 transition-opacity duration-1000 ${isBackgroundReady ? 'opacity-100' : 'opacity-0'}`}>
        {children}
      </div>
    </div>
  );
};

export default Background;
export { SpaceLogo, BackToTopButton, StarfieldCanvas }; 