import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price, oldPrice }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link onClick={() => scrollTo(0, 0)} className="cursor-pointer" to={`/product/${id}`}>
      {/* Motion Wrapper for Entry Animations */}
      <motion.div
        className="bg-white rounded-xl shadow-md p-4 relative flex flex-col justify-between h-full"
        whileHover={{ scale: 1.05, boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.1)' }} // Hover effect with scale and shadow
        whileTap={{ scale: 0.95 }} // Tap effect
        initial={{ opacity: 0, y: 20 }} // Initial position for entry animation
        animate={{ opacity: 1, y: 0 }} // Final state on mount
        transition={{ type: 'spring', stiffness: 200, damping: 20 }} // Smooth spring animation
      >
        {/* Sale Badge */}
        {oldPrice && (
          <span className="absolute top-2 left-2 bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1 rounded">
            Sale
          </span>
        )}

        
        {/* Product Image */}
        <motion.div
  className="overflow-hidden rounded-lg w-full relative group" // Add 'group' to apply hover styles to child elements
  transition={{ duration: 0.3 }} // Smoother transition
>
  {/* Image 1 (default) */}
  <img
    className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0" // Smooth fade-out on hover
    src={image[0]}
    alt={name}
    style={{ aspectRatio: '4 / 5' }} // Maintain aspect ratio
  />

  {/* Image 2 (on hover) */}
  <img
    className="w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100" // Smooth fade-in on hover
    src={image[1]}
    alt={name}
    style={{ aspectRatio: '4 / 5' }}
  />

</motion.div>


        {/* Product Name */}
        <p className="pt-3 pb-1 text-sm font-semibold text-gray-700">{name}</p>
        {/* Price Section */}
        <div className="flex items-center space-x-2 text-sm font-medium text-gray-800">
          {oldPrice && (
            <span className="line-through text-gray-400">
              {currency}{oldPrice}
            </span>
          )}
          <span className="text-black">
            {currency}{price}
          </span>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProductItem;
