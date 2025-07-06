'use client';

import { motion } from 'framer-motion';
import { Heart, ShoppingBag, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    category: string;
    isNew?: boolean;
    colors: string[];
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {product.isNew && (
          <Badge className="absolute top-3 left-3 bg-orange-500 text-white">
            New
          </Badge>
        )}

        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            size="sm"
            variant="outline"
            className="bg-white/80 backdrop-blur-sm border-none hover:bg-white/90 p-2 rounded-full"
          >
            <Heart className="w-4 h-4" />
          </Button>
        </div>

        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex gap-2">
            <Button
              size="sm"
              className="bg-white/90 text-gray-800 hover:bg-white backdrop-blur-sm"
            >
              <Eye className="w-4 h-4 mr-1" />
              Quick View
            </Button>
            <Button
              size="sm"
              className="bg-orange-500 hover:bg-orange-600 text-white"
            >
              <ShoppingBag className="w-4 h-4 mr-1" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-2">
          <span className="text-sm text-orange-600 font-medium">{product.category}</span>
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
          {product.name}
        </h3>
        
        <div className="flex items-center mb-3">
          <span className="text-2xl font-bold text-gray-800">₹{product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through ml-2">₹{product.originalPrice}</span>
          )}
        </div>

        <div className="flex items-center mb-4">
          <span className="text-sm text-gray-600 mr-2">Colors:</span>
          <div className="flex gap-1">
            {product.colors.map((color, index) => (
              <div
                key={index}
                className="w-4 h-4 rounded-full border-2 border-gray-300"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>

        <Button
          className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg"
        >
          Add to Cart
        </Button>
      </div>
    </motion.div>
  );
}