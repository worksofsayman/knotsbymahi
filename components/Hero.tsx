'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

export default function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);
  const y = useTransform(scrollY, [0, 300], [0, -50]);

  const [flowers, setFlowers] = useState<Array<{ id: number; x: number; y: number; size: number; rotation: number; delay: number }>>([]);

  useEffect(() => {
    const newFlowers = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 40 + 20,
      rotation: Math.random() * 360,
      delay: Math.random() * 5
    }));
    setFlowers(newFlowers);
  }, []);

  return (
    <motion.section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden scroll-fade pt-20"
      style={{ opacity, scale, y }}
    >
      {/* Animated Background Flowers */}
      {flowers.map((flower) => (
        <motion.div
          key={flower.id}
          className="absolute opacity-10"
          style={{
            left: `${flower.x}%`,
            top: `${flower.y}%`,
            fontSize: `${flower.size}px`,
          }}
          initial={{ opacity: 0, rotate: flower.rotation, scale: 0 }}
          animate={{ 
            opacity: [0, 0.1, 0],
            rotate: flower.rotation + 360,
            scale: [0, 1, 0],
            y: [-20, -100, -200]
          }}
          transition={{
            duration: 20,
            delay: flower.delay,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {['🌸', '🌺', '🌻', '🌷', '🌹'][Math.floor(Math.random() * 5)]}
        </motion.div>
      ))}

      {/* Morphing Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-10 w-32 sm:w-64 h-32 sm:h-64 bg-gradient-to-r from-orange-200 to-pink-200 opacity-20 morph-shape"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-40 sm:w-80 h-40 sm:h-80 bg-gradient-to-r from-amber-200 to-rose-200 opacity-15 morph-shape" 
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-r from-yellow-200 to-orange-200 opacity-10 morph-shape"
          animate={{ rotate: 180 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
          className="mb-8"
        >
          <motion.div 
            className="flex items-center justify-center mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-6 sm:w-8 h-6 sm:h-8 text-orange-500 mr-2 sm:mr-3" />
            </motion.div>
            <span className="text-orange-600 font-semibold tracking-wide uppercase text-sm sm:text-base">Handcrafted with Love</span>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-6 sm:w-8 h-6 sm:h-8 text-orange-500 ml-2 sm:ml-3" />
            </motion.div>
          </motion.div>
          
          <motion.h1 
            className="text-4xl sm:text-6xl md:text-8xl font-bold elegant-font text-gray-800 mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            Beautiful{' '}
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Handmade
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              Wool Creations
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
          >
            Discover unique flower kletchers, accessories, and custom pieces crafted with premium wool and traditional knitting techniques.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.1, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4"
        >
          <motion.div
            whileHover={{ scale: 1.05, rotateZ: 1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-amber-500 text-opacity-200  hover:text-white font-semibold px-8 sm:px-10 py-4 sm:py-5 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 group apple-glass"
            >
              Shop Collection
              <motion.div
                className="ml-3"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05, rotateZ: -1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-2 border-orange-500 text-amber-500 text-opacity-200 hover:bg-orange-500 hover:text-white font-semibold px-8 sm:px-10 py-4 sm:py-5 rounded-full transition-all duration-300 apple-glass"
            >
              Gift Hampers
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.4, ease: 'easeOut' }}
          className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto px-4"
        >
          {[
            { title: 'Premium Wool', description: 'Soft, durable materials', icon: '🧶' },
            { title: 'Handcrafted', description: 'Each piece is unique', icon: '✋' },
            { title: 'Custom Orders', description: 'Made to your specifications', icon: '🎨' }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20, rotateY: -30 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 2.7 + index * 0.2 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
              className="apple-glass p-6 sm:p-8 rounded-2xl text-center transition-all duration-300 transform-3d card-3d group"
            >
              <motion.div 
                className="text-3xl sm:text-4xl mb-4"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}