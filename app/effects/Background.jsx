"use client";

import { useEffect, useRef, memo, useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { debounce } from '../lib/utils';

const PLANET_COLORS = [
  ["#a78bfa", "#7c3aed"],
  ["#60a5fa", "#2563eb"],
  ["#6ee7b7", "#059669"],
];
const PLANET_EMOJIS = ["🌍", "🚀", "⚛️"];
const TWO_PI = 2 * Math.PI;
const TARGET_FPS = 30;
const FRAME_INTERVAL = 1000 / TARGET_FPS;
const PLANET_MARGIN = 40;
const PLANET_SIZE = 100;

function getPlanetCorners(width, height, count) {
  return [
    { x: PLANET_MARGIN, y: PLANET_MARGIN },
    { x: width - PLANET_SIZE - PLANET_MARGIN, y: PLANET_MARGIN },
    { x: width - PLANET_SIZE - PLANET_MARGIN, y: height - PLANET_SIZE - PLANET_MARGIN },
  ].slice(0, count);
}

function updateEmojiPositions(emojis, width, height) {
  emojis.forEach((emojiObj, i) => {
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

const SpaceLogo = memo(({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8 sm:w-10 sm:h-10',
    md: 'w-12 h-12 sm:w-14 sm:h-14',
    lg: 'w-14 h-14 sm:w-16 sm:h-16',
    xl: 'w-16 h-16 sm:w-20 sm:h-20',
    nav: 'w-10 h-10 sm:w-11 sm:h-11',
  };

  return (
    <motion.div
      className={`relative flex items-center justify-center ${sizeClasses[size]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Image
        src="/SB.png"
        alt="SB Logo"
        width={48}
        height={48}
        className="w-full h-full object-contain"
        priority
      />
    </motion.div>
  );
});
SpaceLogo.displayName = 'SpaceLogo';

const BackToTopButton = memo(({ delay = 2000 }) => {
  const [show, setShow] = useState(false);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), delay);
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
      onClick={scrollToTop}
      className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 text-white rounded-full shadow-lg border border-purple-700 hover:bg-purple-700 hover:shadow-xl transition-all duration-300 z-50 flex items-center justify-center"
      title="Back to top"
    >
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </motion.button>
  );
});
BackToTopButton.displayName = 'BackToTopButton';

const StarfieldCanvas = memo(({ starCount = 80, planetCount = 3, showPlanets = true, showEmojis = true }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef();
  const lastFrameTime = useRef(0);
  const starsRef = useRef([]);
  const planetsRef = useRef([]);
  const emojisRef = useRef([]);
  const dimensionsRef = useRef({ width: 0, height: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;
    dimensionsRef.current = { width, height };

    starsRef.current = Array.from({ length: starCount }, () => {
      const angle = Math.random() * TWO_PI;
      const speed = Math.random() * 0.08 + 0.03;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.2 + 0.3,
        twinkle: Math.random() * TWO_PI,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
      };
    });

    if (showPlanets) {
      planetsRef.current = getPlanetCorners(width, height, planetCount).map((pos, i) => ({
        ...pos,
        size: PLANET_SIZE,
        color: PLANET_COLORS[i % PLANET_COLORS.length],
        floatSeed: Math.random() * TWO_PI,
        rotateSeed: Math.random() * TWO_PI,
      }));
    }

    if (showEmojis) {
      emojisRef.current = PLANET_EMOJIS.map((emoji, i) => {
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
          floatSeed: Math.random() * TWO_PI,
          rotateSeed: Math.random() * TWO_PI,
        };
      });
    }

    function animate(currentTime) {
      animationRef.current = requestAnimationFrame(animate);

      const delta = currentTime - lastFrameTime.current;
      if (delta < FRAME_INTERVAL) return;
      lastFrameTime.current = currentTime - (delta % FRAME_INTERVAL);

      const { width: w, height: h } = dimensionsRef.current;
      ctx.clearRect(0, 0, w, h);
      const t = currentTime;

      const stars = starsRef.current;
      ctx.fillStyle = '#60a5fa';

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        ctx.globalAlpha = 0.6 + 0.4 * Math.sin(star.twinkle + t * 0.0015);
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, TWO_PI);
        ctx.fill();

        star.x += star.vx;
        star.y += star.vy;

        if (star.x < 0) star.x += w;
        else if (star.x > w) star.x -= w;
        if (star.y < 0) star.y += h;
        else if (star.y > h) star.y -= h;
      }

      ctx.globalAlpha = 1;

      if (showPlanets) {
        const planets = planetsRef.current;
        for (let i = 0; i < planets.length; i++) {
          const planet = planets[i];
          const floatY = Math.sin(t / 3000 + planet.floatSeed) * 10;
          const rotate = (t / 15000 + planet.rotateSeed) % TWO_PI;

          ctx.save();
          ctx.translate(planet.x + planet.size / 2, planet.y + planet.size / 2 + floatY);
          ctx.rotate(rotate);

          const grad = ctx.createRadialGradient(0, 0, planet.size * 0.2, 0, 0, planet.size / 2);
          grad.addColorStop(0, planet.color[0]);
          grad.addColorStop(1, planet.color[1]);

          ctx.beginPath();
          ctx.arc(0, 0, planet.size / 2, 0, TWO_PI);
          ctx.fillStyle = grad;
          ctx.globalAlpha = 0.28;
          ctx.fill();
          ctx.restore();
        }
      }

      if (showEmojis) {
        const emojis = emojisRef.current;
        ctx.font = '32px serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.globalAlpha = 0.15;

        for (let i = 0; i < emojis.length; i++) {
          const emojiObj = emojis[i];
          const floatY = Math.sin(t / 1800 + emojiObj.floatSeed) * 20;
          const rotate = (t / 3500 + emojiObj.rotateSeed) % TWO_PI;

          ctx.save();
          ctx.translate(emojiObj.x, emojiObj.y + floatY);
          ctx.rotate(rotate);
          ctx.fillText(emojiObj.emoji, 0, 0);
          ctx.restore();
        }

        ctx.globalAlpha = 1;
      }
    }

    animationRef.current = requestAnimationFrame(animate);

    const handleResize = debounce(() => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      dimensionsRef.current = { width, height };

      starsRef.current.forEach((star) => {
        star.x = Math.random() * width;
        star.y = Math.random() * height;
      });

      if (showPlanets) {
        const corners = getPlanetCorners(width, height, planetCount);
        planetsRef.current.forEach((planet, i) => {
          if (corners[i]) {
            planet.x = corners[i].x;
            planet.y = corners[i].y;
            planet.size = PLANET_SIZE;
          }
        });
      }

      if (showEmojis) {
        updateEmojiPositions(emojisRef.current, width, height);
      }
    }, 150);

    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, [starCount, planetCount, showPlanets, showEmojis]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
});
StarfieldCanvas.displayName = 'StarfieldCanvas';

export { SpaceLogo, BackToTopButton, StarfieldCanvas };
