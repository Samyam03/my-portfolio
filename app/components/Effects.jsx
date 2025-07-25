"use client";

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Space Logo Component
const SpaceLogo = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-lg',
    lg: 'w-12 h-12 text-xl',
    xl: 'w-16 h-16 text-2xl'
  };

  return (
    <motion.div
      className={`relative ${sizeClasses[size]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Outer nebula ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20"
      />
      {/* Inner nebula ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute inset-1 rounded-full bg-gradient-to-r from-purple-500/15 via-blue-500/15 to-purple-500/15"
      />
      {/* Main logo background */}
      <div className="relative w-full h-full rounded-full bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 border border-blue-500/30 shadow-lg flex items-center justify-center overflow-hidden">
        {/* Inner glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 rounded-full" />
        {/* Floating stars inside */}
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => {
            const positions = [
              { left: '20%', top: '25%' },
              { left: '70%', top: '30%' },
              { left: '45%', top: '70%' }
            ];
            const pos = positions[i];
            return (
              <motion.div
                key={i}
                className="absolute w-0.5 h-0.5 bg-blue-400 rounded-full"
                style={pos}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            );
          })}
        </div>
        {/* SB Text */}
        <motion.span
          className="relative z-10 font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-purple-400"
          animate={{
            textShadow: [
              "0 0 5px rgba(59, 130, 246, 0.5)",
              "0 0 10px rgba(147, 51, 234, 0.5)",
              "0 0 5px rgba(59, 130, 246, 0.5)"
            ]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          SB
        </motion.span>
      </div>
      {/* Outer glow effect */}
      <motion.div
        animate={{
          boxShadow: [
            "0 0 10px rgba(59, 130, 246, 0.3)",
            "0 0 20px rgba(147, 51, 234, 0.3)",
            "0 0 10px rgba(59, 130, 246, 0.3)"
          ]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 rounded-full pointer-events-none"
      />
    </motion.div>
  );
};

// Space Divider Component
const SpaceDivider = ({ className = '' }) => {
  return (
    <div className={`relative h-16 overflow-hidden ${className}`}>
      {/* Very subtle nebula gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/3 to-transparent"></div>
      {/* Minimal light particles */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => {
          const seed = i * 45.7;
          const left = ((seed * 13) % 100) + '%';
          const delay = i * 0.5;
          return (
            <motion.div
              key={`light-${i}`}
              className="absolute w-0.5 h-0.5 bg-blue-400/40 rounded-full"
              style={{
                left,
                top: '50%',
                transform: 'translateY(-50%)',
              }}
              animate={{
                opacity: [0, 0.4, 0],
                scale: [0.5, 1, 0.5],
                y: [-5, 5, -5],
              }}
              transition={{
                duration: 6,
                delay,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          );
        })}
      </div>
      {/* Very subtle center line */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-blue-400/10 to-transparent"></div>
      </div>
      {/* Subtle glow at edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/2 to-transparent"></div>
    </div>
  );
};

// Global Mouse Torch
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

// Back To Top Button
const BackToTopButton = () => (
  <motion.button
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay: 0.6 }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    className="fixed bottom-8 right-8 w-12 h-12 bg-purple-600 text-white rounded-full shadow-lg border border-purple-700 hover:bg-purple-700 hover:shadow-xl transition-all duration-300 z-50 flex items-center justify-center"
    title="Back to top"
  >
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
    </svg>
  </motion.button>
);

// Starfield Canvas
const PLANET_COLORS = [
  ["#a78bfa", "#7c3aed"], // purple
  ["#60a5fa", "#2563eb"], // blue
  ["#6ee7b7", "#059669"], // green
];
const PLANET_EMOJIS = ["🌍", "🚀", "⚛️"];

const StarfieldCanvas = ({ starCount = 80, planetCount = 3, showPlanets = true, showEmojis = true, showMouseTorch = true }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef();
  const stars = useRef([]);
  const planets = useRef([]);
  const emojis = useRef([]);
  const mouse = useRef({ x: null, y: null });
  const torch = useRef({ x: null, y: null }); // for smooth interpolation

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    // Mouse torch event
    function handleMouseMove(e) {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
      if (torch.current.x === null || torch.current.y === null) {
        torch.current.x = mouse.current.x;
        torch.current.y = mouse.current.y;
      }
    }
    if (showMouseTorch) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    // Generate stars
    stars.current = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.2 + 0.3,
      speed: Math.random() * 0.15 + 0.05,
      twinkle: Math.random() * Math.PI * 2,
    }));

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

    function drawMouseTorch(ctx) {
      if (!showMouseTorch || torch.current.x === null || torch.current.y === null) return;
      const grad = ctx.createRadialGradient(
        torch.current.x,
        torch.current.y,
        0,
        torch.current.x,
        torch.current.y,
        0.5 // reduced from 1 to 0.5
      );
      grad.addColorStop(0, "rgba(59, 130, 246, 0.0075)"); // was 0.015
      grad.addColorStop(1, "rgba(59, 130, 246, 0)");
      ctx.save();
      ctx.globalAlpha = 1;
      ctx.beginPath();
      ctx.arc(torch.current.x, torch.current.y, 0.5, 0, 2 * Math.PI); // reduced from 1 to 0.5
      ctx.closePath();
      ctx.fillStyle = grad;
      ctx.fill();
      ctx.restore();
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      const t = Date.now();
      // Smoothly interpolate torch position toward mouse
      if (mouse.current.x !== null && mouse.current.y !== null) {
        torch.current.x += (mouse.current.x - torch.current.x) * 0.15;
        torch.current.y += (mouse.current.y - torch.current.y) * 0.15;
      }
      // Draw mouse torch first
      drawMouseTorch(ctx);
      // Draw stars
      for (let star of stars.current) {
        // Gentle twinkle and slow drift
        const twinkle = 0.6 + 0.4 * Math.sin(star.twinkle + t * 0.0015); // gentle, visible twinkle
        ctx.globalAlpha = twinkle;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, 2 * Math.PI);
        ctx.fillStyle = '#60a5fa';
        ctx.fill();
        ctx.shadowBlur = 0;
        // Gentle downward drift
        star.y += star.speed * 0.5;
        if (star.y > height) {
          star.y = 0;
          star.x = Math.random() * width;
        }
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
      if (showMouseTorch) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [starCount, planetCount, showPlanets, showEmojis, showMouseTorch]);
          
          return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ display: 'block' }}
    />
  );
};

// Main Effects Component
const Effects = ({ 
  children, 
  className = '',
  showSpaceDivider = false,
  showSpaceLogo = false,
  logoSize = 'md'
}) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Space Divider */}
      {showSpaceDivider && <SpaceDivider />}
      {/* Space Logo */}
      {showSpaceLogo && (
        <div className="absolute top-4 right-4 z-20">
          <SpaceLogo size={logoSize} />
        </div>
      )}
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Effects;
export { SpaceLogo, SpaceDivider, GlobalMouseTorch, BackToTopButton, StarfieldCanvas }; 