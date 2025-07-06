'use client';

import { motion } from 'framer-motion';
import { Gift, Heart, Star, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';

const hampers = [
  {
    id: 1,
    name: 'Bridal Bliss Hamper',
    price: 4999,
    image: 'https://images.pexels.com/photos/6412925/pexels-photo-6412925.jpeg?auto=compress&cs=tinysrgb&w=500',
    items: ['Rose Kletcher', 'Flower Brooch', 'Hair Clip Set', 'Custom Box'],
    description: 'Perfect for brides and special occasions',
    icon: <Heart className="w-6 h-6" />
  },
  {
    id: 2,
    name: 'Festive Collection',
    price: 3499,
    image: 'https://images.pexels.com/photos/6412940/pexels-photo-6412940.jpeg?auto=compress&cs=tinysrgb&w=500',
    items: ['Daisy Headband', 'Wool Flowers', 'Decorative Pieces', 'Gift Card'],
    description: 'Celebrate festivals with handmade beauty',
    icon: <Star className="w-6 h-6" />
  },
  {
    id: 3,
    name: 'Premium Gift Box',
    price: 6999,
    image: 'https://images.pexels.com/photos/6412928/pexels-photo-6412928.jpeg?auto=compress&cs=tinysrgb&w=500',
    items: ['5 Kletchers', 'Flower Bouquet', 'Brooches', 'Luxury Packaging'],
    description: 'Ultimate luxury hamper for special someone',
    icon: <Package className="w-6 h-6" />
  }
];

export default function GiftHampers() {
  return (
    <section id="gift-hampers" className="py-20 bg-gradient-to-br from-orange-50 to-amber-50 relative overflow-hidden">
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
          <div className="flex items-center justify-center mb-4">
            <Gift className="w-8 h-8 text-orange-500 mr-2" />
            <span className="text-orange-600 font-semibold tracking-wide uppercase">Special Collections</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold elegant-font text-gray-800 mb-6">
            Gift Hampers
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Thoughtfully curated collections perfect for gifting. Each hamper comes with premium packaging and a personal touch.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hampers.map((hamper, index) => (
            <motion.div
              key={hamper.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={hamper.image}
                  alt={hamper.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 glass-effect p-2 rounded-full text-orange-600">
                  {hamper.icon}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold elegant-font text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
                  {hamper.name}
                </h3>
                <p className="text-gray-600 mb-4">{hamper.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Includes:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {hamper.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-bold text-gray-800">₹{hamper.price.toLocaleString()}</span>
                  <span className="text-sm text-green-600 font-medium">Free Delivery</span>
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg"
                >
                  <Gift className="w-4 h-4 mr-2" />
                  Order Hamper
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-12"
        >
          <div className="glass-effect p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold elegant-font text-gray-800 mb-4">
              Custom Hampers Available
            </h3>
            <p className="text-gray-600 mb-6">
              Want to create your own perfect gift? We can customize any hamper according to your preferences and budget.
            </p>
            <Button
              variant="outline"
              className="border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white font-semibold px-8 py-3 rounded-full"
            >
              Create Custom Hamper
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}