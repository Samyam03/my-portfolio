'use client';

import { useState, useEffect } from 'react';
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

// Main Effects Component
const Effects = ({ 
  children, 
  className = '',
  intensity = 'medium',
  planetCount = 3,
  starCount = 50,
  showMouseTorch = true,
  showSpaceDivider = false,
  showSpaceLogo = false,
  logoSize = 'md'
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    handleResize();
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getIntensityConfig = () => {
    switch (intensity) {
      case 'low':
        return { opacity: 0.1, scale: 0.8 };
      case 'medium':
        return { opacity: 0.2, scale: 1 };
      case 'high':
        return { opacity: 0.3, scale: 1.2 };
      default:
        return { opacity: 0.2, scale: 1 };
    }
  };

  const config = getIntensityConfig();

  const gradientStyle = {
    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.25), transparent 40%)`,
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Mouse Torch Effect */}
      {showMouseTorch && (
        <div 
          className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
          style={gradientStyle}
        />
      )}

      {/* Stars */}
      <div className="absolute inset-0">
        {[...Array(Math.min(starCount, 30))].map((_, i) => {
          const seed = i * 137.5;
          const left = ((seed * 7) % 100) + '%';
          const top = ((seed * 11) % 100) + '%';
          const duration = 20 + (i % 5) * 3;
          const delay = (i % 3) * 2;
          const size = 1 + (i % 3);
          const opacity = 0.4 + (i % 2) * 0.3;
          
          return (
            <motion.div
              key={`star-${i}`}
              className={`absolute bg-blue-400 rounded-full`}
              style={{
                left,
                top,
                width: `${size}px`,
                height: `${size}px`,
                opacity: opacity,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [opacity, opacity * 0.3, opacity],
              }}
              transition={{
                duration,
                delay,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          );
        })}
        
        {/* Simplified Twinkling Stars */}
        {[...Array(Math.min(Math.floor(starCount * 0.2), 10))].map((_, i) => {
          const seed = i * 89.3;
          const left = ((seed * 13) % 100) + '%';
          const top = ((seed * 19) % 100) + '%';
          
          return (
            <motion.div
              key={`twinkle-${i}`}
              className="absolute bg-white rounded-full"
              style={{
                left,
                top,
                width: '2px',
                height: '2px',
              }}
              animate={{
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 4 + (i % 3),
                delay: i * 1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          );
        })}
      </div>

      {/* Planets */}
      <div className="absolute inset-0">
        {[...Array(Math.min(planetCount, 3))].map((_, i) => {
          const seed = i * 97.3;
          
          // Position planets in corners and edges, avoiding center content area
          let left, top;
          if (i % 3 === 0) {
            // Top-left corner
            left = '5%';
            top = '5%';
          } else if (i % 3 === 1) {
            // Top-right corner
            left = '85%';
            top = '5%';
          } else {
            // Bottom-right corner
            left = '85%';
            top = '85%';
          }
          
          // Add some variation to avoid exact corners
          const variation = (seed * 7) % 10;
          left = `calc(${left} + ${variation}%)`;
          top = `calc(${top} + ${variation}%)`;
          
          const size = 15 + (i * 10); // Smaller planet sizes
          const colors = [
            'from-purple-400 to-purple-600',
            'from-blue-400 to-blue-600', 
            'from-green-400 to-green-600'
          ];
          const color = colors[i % colors.length];
          
          return (
            <motion.div
              key={`planet-${i}`}
              className={`absolute rounded-full bg-gradient-to-br ${color} shadow-lg`}
              style={{
                left,
                top,
                width: `${size}px`,
                height: `${size}px`,
              }}
              animate={{
                y: [0, -15, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: 25 + i * 3,
                delay: i * 1,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          );
        })}
      </div>

      {/* Floating Space Elements */}
      <div className="absolute inset-0">
        {['🌍', '🚀', '⚛️'].map((emoji, i) => {
          const seed = i * 89.7;
          
          // Position elements in corners, avoiding center content
          let left, top;
          if (i % 3 === 0) {
            // Top-left area
            left = '8%';
            top = '8%';
          } else if (i % 3 === 1) {
            // Top-right area
            left = '82%';
            top = '8%';
          } else {
            // Bottom-right area
            left = '82%';
            top = '82%';
          }
          
          // Add some variation
          const variationX = (seed * 11) % 8;
          const variationY = (seed * 13) % 8;
          left = `calc(${left} + ${variationX}%)`;
          top = `calc(${top} + ${variationY}%)`;
          
          return (
            <motion.div
              key={`element-${i}`}
              className="absolute text-lg opacity-15"
              style={{
                left,
                top,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: 35 + i * 2,
                delay: i * 2,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {emoji}
            </motion.div>
          );
        })}
      </div>

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

// Export both the main Effects component and the individual components
export default Effects;
export { SpaceLogo, SpaceDivider }; 