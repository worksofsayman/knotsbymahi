'use client';

import { motion, AnimatePresence, easeInOut } from 'framer-motion';
import { ShoppingBag, Heart, User, Search, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: easeInOut, // ✅ FIXED HERE
      },
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: easeInOut, // ✅ FIXED HERE
      },
    },
  };

  return (
    <>
      {/* Custom Cursor */}
      <div
        className="cursor pointer-events-none fixed w-5 h-5 rounded-full bg-white mix-blend-difference z-[100]"
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
        }}
      />

      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: easeInOut }} // ✅ FIXED HERE TOO
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'apple-glass shadow-2xl backdrop-blur-xl' : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-2 transform-3d"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <motion.span
                className="text-2xl font-bold cursive-font text-orange-600"
                whileHover={{ textShadow: '0 0 20px rgba(251, 146, 60, 0.5)' }}
              >
                knots
              </motion.span>
              <motion.span
                className="text-lg font-medium elegant-font text-orange-700"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                by mahi
              </motion.span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {['Home', 'Products', 'Hampers', 'About'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="relative px-3 py-2 text-sm text-gray-700 hover:text-orange-600 font-medium transition-all duration-300 rounded-full"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              ))}
              {/* Icons */}
              <div className="ml-4 flex items-center space-x-4 text-gray-700">
                <Search className="w-5 h-5 cursor-pointer hover:text-orange-600 transition" />
                <Heart className="w-5 h-5 cursor-pointer hover:text-orange-600 transition" />
                <ShoppingBag className="w-5 h-5 cursor-pointer hover:text-orange-600 transition" />
                <User className="w-5 h-5 cursor-pointer hover:text-orange-600 transition" />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-amber-500" />
                ) : (
                  <Menu className="w-6 h-6 text-amber-500" />
                )}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              key="mobile-menu"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="md:hidden bg-white px-4 py-4 shadow-lg rounded-b-lg"
            >
              {['Home', 'Products', 'Hampers', 'About'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="block px-3 py-2 text-sm text-gray-700 hover:text-orange-600 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
