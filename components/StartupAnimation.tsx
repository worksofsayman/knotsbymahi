'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface StartupAnimationProps {
  onComplete: () => void;
}

export default function StartupAnimation({ onComplete }: StartupAnimationProps) {
  const [showMahi, setShowMahi] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3
    }));
    setParticles(newParticles);

    const timer = setTimeout(() => {
      setShowMahi(true);
    }, 2000);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 5500);

    return () => {
      clearTimeout(timer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-rose-100 via-amber-100 to-orange-100 overflow-hidden">
      {/* Animated Background Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-2 h-2 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            y: [-20, -100, -200]
          }}
          transition={{
            duration: 4,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />
      ))}

      {/* Morphing Background Shapes */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-orange-200 to-pink-200 opacity-20 morph-shape"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-amber-200 to-rose-200 opacity-15 morph-shape" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-gradient-to-r from-yellow-200 to-orange-200 opacity-10 morph-shape" style={{ animationDelay: '4s' }}></div>

      <div className="text-center relative z-10">
        {/* Main Logo Animation */}
        <motion.div
          initial={{ opacity: 0, filter: 'blur(20px)', scale: 0.8 }}
          animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
          transition={{ duration: 2.5, ease: 'easeOut' }}
          className="mb-6"
        >
          <motion.h1 
            className="text-6xl sm:text-7xl md:text-9xl font-bold cursive-font text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600"
            initial={{ letterSpacing: '0.5em' }}
            animate={{ letterSpacing: '0.1em' }}
            transition={{ duration: 2, ease: 'easeOut' }}
          >
            knots
          </motion.h1>
        </motion.div>
        
        {/* Typing Animation for "by mahi" */}
        {showMahi && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative"
          >
            <motion.div
              className="text-2xl sm:text-3xl md:text-4xl font-medium text-orange-700 elegant-font overflow-hidden"
              initial={{ width: 0 }}
              animate={{ width: 'auto' }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1 }}
                className="inline-block"
              >
                b
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.1 }}
                className="inline-block"
              >
                y
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.2 }}
                className="inline-block"
              >
                &nbsp;
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.3 }}
                className="inline-block"
              >
                m
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.4 }}
                className="inline-block"
              >
                a
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.5 }}
                className="inline-block"
              >
                h
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.6 }}
                className="inline-block"
              >
                i
              </motion.span>
              <motion.span
                className="inline-block border-r-2 border-orange-500 ml-1"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                &nbsp;
              </motion.span>
            </motion.div>
            
            {/* Decorative Elements */}
            <motion.div
              className="absolute -top-4 -right-8 text-xl sm:text-2xl"
              initial={{ opacity: 0, rotate: 0 }}
              animate={{ opacity: 1, rotate: 360 }}
              transition={{ duration: 2, delay: 1 }}
            >
              ✨
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-8 text-xl sm:text-2xl"
              initial={{ opacity: 0, rotate: 0 }}
              animate={{ opacity: 1, rotate: -360 }}
              transition={{ duration: 2, delay: 1.5 }}
            >
              🌸
            </motion.div>
          </motion.div>
        )}

        {/* Loading Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="mt-12"
        >
          <div className="flex justify-center space-x-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
