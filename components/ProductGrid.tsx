'use client';

import { motion } from 'framer-motion';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: 'Rose Flower Kletcher',
    price: 899,
    originalPrice: 1299,
    image: 'https://images.pexels.com/photos/6412925/pexels-photo-6412925.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Hair Accessories',
    isNew: true,
    colors: ['#ff6b6b', '#feca57', '#ff9ff3']
  },
  {
    id: 2,
    name: 'Wool Flower Brooch',
    price: 599,
    image: 'https://images.pexels.com/photos/6588616/pexels-photo-6588616.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Brooches',
    colors: ['#48dbfb', '#ff6b6b', '#feca57']
  },
  {
    id: 3,
    name: 'Lavender Hair Clip Set',
    price: 1199,
    image: 'https://images.pexels.com/photos/6412933/pexels-photo-6412933.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Hair Accessories',
    colors: ['#a55eea', '#26de81', '#feca57']
  },
  {
    id: 4,
    name: 'Daisy Chain Headband',
    price: 1499,
    image: 'https://images.pexels.com/photos/6412940/pexels-photo-6412940.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Headbands',
    isNew: true,
    colors: ['#ffffff', '#feca57', '#ff6b6b']
  },
  {
    id: 5,
    name: 'Sunflower Kletcher',
    price: 799,
    image: 'https://images.pexels.com/photos/6412938/pexels-photo-6412938.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Hair Accessories',
    colors: ['#feca57', '#ff6b6b', '#26de81']
  },
  {
    id: 6,
    name: 'Wool Flower Bouquet',
    price: 1999,
    originalPrice: 2499,
    image: 'https://images.pexels.com/photos/6412928/pexels-photo-6412928.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Decorative',
    colors: ['#ff6b6b', '#feca57', '#ff9ff3', '#48dbfb']
  }
];

export default function ProductGrid() {
  return (
    <section id="products" className="py-20 bg-white relative overflow-hidden">
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
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold elegant-font text-gray-800 mb-6">
            Featured Products
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our handcrafted collection of wool accessories, each piece uniquely designed and lovingly made.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-12"
        >
          <button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            View All Products
          </button>
        </motion.div>
      </div>
    </section>
  );
}