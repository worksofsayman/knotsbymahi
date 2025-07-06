'use client';

import { motion } from 'framer-motion';
import { Instagram, Mail, Phone, MapPin, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Interactive Background */}
      <div className="interactive-bg">
        {/* Morphing Bubbles - Darker for footer */}
        <div className="morph-bubble morph-bubble-1" style={{ background: 'linear-gradient(45deg, rgba(255, 107, 107, 0.1), rgba(254, 202, 87, 0.1))' }}></div>
        <div className="morph-bubble morph-bubble-2" style={{ background: 'linear-gradient(45deg, rgba(72, 219, 251, 0.1), rgba(255, 159, 243, 0.1))' }}></div>
        <div className="morph-bubble morph-bubble-3" style={{ background: 'linear-gradient(45deg, rgba(254, 202, 87, 0.1), rgba(255, 107, 107, 0.1))' }}></div>
        <div className="morph-bubble morph-bubble-4" style={{ background: 'linear-gradient(45deg, rgba(38, 222, 129, 0.1), rgba(254, 202, 87, 0.1))' }}></div>
        <div className="morph-bubble morph-bubble-5" style={{ background: 'linear-gradient(45deg, rgba(165, 94, 234, 0.1), rgba(255, 107, 107, 0.1))' }}></div>
        
        {/* Floating Flowers - Dimmed for footer */}
        <div className="bg-flower bg-flower-1" style={{ opacity: 0.05 }}>🌸</div>
        <div className="bg-flower bg-flower-2" style={{ opacity: 0.05 }}>🌺</div>
        <div className="bg-flower bg-flower-3" style={{ opacity: 0.05 }}>🌻</div>
        <div className="bg-flower bg-flower-4" style={{ opacity: 0.05 }}>🌷</div>
        <div className="bg-flower bg-flower-5" style={{ opacity: 0.05 }}>🌹</div>
        <div className="bg-flower bg-flower-6" style={{ opacity: 0.05 }}>🌼</div>
        <div className="bg-flower bg-flower-7" style={{ opacity: 0.05 }}>🌿</div>
        <div className="bg-flower bg-flower-8" style={{ opacity: 0.05 }}>🌾</div>
        <div className="bg-flower bg-flower-9" style={{ opacity: 0.05 }}>🌵</div>
        <div className="bg-flower bg-flower-10" style={{ opacity: 0.05 }}>🌱</div>
        
        {/* Particles - Dimmed for footer */}
        <div className="particle particle-1" style={{ opacity: 0.2 }}></div>
        <div className="particle particle-2" style={{ opacity: 0.2 }}></div>
        <div className="particle particle-3" style={{ opacity: 0.2 }}></div>
        <div className="particle particle-4" style={{ opacity: 0.2 }}></div>
        <div className="particle particle-5" style={{ opacity: 0.2 }}></div>
        <div className="particle particle-6" style={{ opacity: 0.2 }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-3xl font-bold cursive-font text-orange-400">knots</span>
              <span className="text-xl font-medium elegant-font text-orange-300">by mahi</span>
            </div>
            <p className="text-gray-300 mb-4">
              Handcrafted wool accessories made with love and traditional techniques. Each piece is unique and tells its own story.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Phone className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Products', 'Gift Hampers', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-orange-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              {['Hair Accessories', 'Brooches', 'Headbands', 'Decorative', 'Custom Orders'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-orange-400" />
                <span className="text-gray-300">hello@knotsbymahi.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-orange-400" />
                <span className="text-gray-300">+91 88717 12907</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-orange-400" />
                <span className="text-gray-300">Jabalpur, India</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            Made by Sayman Lal © 2025
          </p>
        </div>
      </div>
    </footer>
  );
}