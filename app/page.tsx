'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import StartupAnimation from '@/components/StartupAnimation';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import GiftHampers from '@/components/GiftHampers';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

export default function Home() {
  const [showStartup, setShowStartup] = useState(true);
  const { scrollY } = useScroll();
  
  // Transform for the main content based on scroll
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0.2]);
  const contentY = useTransform(scrollY, [300, 600], [100, 0]);
  const contentOpacity = useTransform(scrollY, [200, 400], [0, 1]);

  const handleAnimationComplete = () => {
    setShowStartup(false);
  };

  return (
    <div className="relative">
      {showStartup && <StartupAnimation onComplete={handleAnimationComplete} />}
      
      <motion.div 
        className={`transition-opacity duration-1000 ${showStartup ? 'opacity-0' : 'opacity-100'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: showStartup ? 0 : 1 }}
        transition={{ duration: 1 }}
      >
        <Navbar />
        
        {/* Hero Section with Scroll Effects */}
        <motion.div style={{ opacity: heroOpacity }}>
          <Hero />
        </motion.div>
        
        {/* Main Content with Scroll-based Reveal */}
        <motion.div 
          style={{ y: contentY, opacity: contentOpacity }}
          className="relative z-10 bg-white"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ProductGrid />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <GiftHampers />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <AboutSection />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Footer />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}