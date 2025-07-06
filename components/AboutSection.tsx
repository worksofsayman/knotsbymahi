'use client';

import { motion } from 'framer-motion';
import { Award, Users, Heart, Scissors } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Interactive Background */}
      <div className="interactive-bg">
        {/* Morphing Bubbles */}
        <div className="morph-bubble morph-bubble-1"></div>
        <div className="morph-bubble morph-bubble-2"></div>
        <div className="morph-bubble morph-bubble-3"></div>
        <div className="morph-bubble morph-bubble-4"></div>
        <div className="morph-bubble morph-bubble-5"></div>
        
        {/* Floating Flowers */}
        <div className="bg-flower bg-flower-1">🌸</div>
        <div className="bg-flower bg-flower-2">🌺</div>
        <div className="bg-flower bg-flower-3">🌻</div>
        <div className="bg-flower bg-flower-4">🌷</div>
        <div className="bg-flower bg-flower-5">🌹</div>
        <div className="bg-flower bg-flower-6">🌼</div>
        <div className="bg-flower bg-flower-7">🌿</div>
        <div className="bg-flower bg-flower-8">🌾</div>
        <div className="bg-flower bg-flower-9">🌵</div>
        <div className="bg-flower bg-flower-10">🌱</div>
        
        {/* Particles */}
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
        <div className="particle particle-6"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold elegant-font text-gray-800 mb-6">
              About Mahi
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With a passion for traditional craftsmanship and modern aesthetics, Mahi creates beautiful handmade accessories using premium wool and time-honored knitting techniques. Every piece tells a story of dedication, creativity, and love for the craft.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From delicate flower kletchers to intricate wool brooches, each creation is unique and crafted with meticulous attention to detail. The journey began with a simple love for knitting and has evolved into a celebration of handmade beauty.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <Award className="w-8 h-8" />, title: 'Premium Quality', desc: 'Only the finest materials' },
                { icon: <Users className="w-8 h-8" />, title: '500+ Happy Customers', desc: 'Spreading joy worldwide' },
                { icon: <Heart className="w-8 h-8" />, title: 'Made with Love', desc: 'Every stitch tells a story' },
                { icon: <Scissors className="w-8 h-8" />, title: 'Handcrafted', desc: 'Traditional techniques' }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-orange-500 mb-2 flex justify-center">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/6412925/pexels-photo-6412925.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Crafting process"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 glass-effect p-6 rounded-2xl">
              <p className="text-2xl font-bold cursive-font text-orange-600 mb-1">
                "Every knot tells a story"
              </p>
              <p className="text-sm text-gray-600">- Mahi</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}