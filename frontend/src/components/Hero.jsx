import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import { motion, useScroll, useTransform } from 'framer-motion';

const images = [
  assets.hero_img,
  assets.hero_img1,
  assets.hero_img2,
  assets.hero_img3,
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { scrollY } = useScroll(); // Get the scroll position

  // Scale the image based on scroll position
  const scale = useTransform(scrollY, [0, 300], [1, 1.2]); // Adjust to control zoom

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);

  return (
    <div className="relative w-full h-[860px] overflow-hidden">
      {/* Hero Images Carousel */}
      {images.map((image, index) => {
        const isActive = currentIndex === index; // Check if the image is currently active
        return (
          <motion.img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={`absolute top-0 left-0 w-full h-full object-cover ${isActive ? 'z-10' : 'z-0'}`}
            initial={{ opacity: 0 }} // Initial opacity
            animate={{ 
              opacity: isActive ? 1 : 0, // Change opacity based on active state
              scale: isActive ? scale : 1, // Apply zoom only to the active image
            }}
            transition={{ duration: 0.5 }} // Transition duration
            style={{ scale: isActive ? scale : 1 }} // Apply the scale style
          />
        );
      })}

      {/* Dots Navigation */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-4 z-20">
        {images.map((_, index) => (
          <div key={index} className="relative group">
            {/* Permanent Dot */}
            <div
              className={`w-2 h-2 rounded-full ${
                currentIndex === index ? 'bg-white opacity-100' : 'bg-gray-400 opacity-70'
              } transition-opacity duration-300`}
            />

            {/* Animated Outline for Active Dot with Progress */}
            {currentIndex === index && (
              <svg className="absolute top-[-6px] left-[-6px] w-5 h-5" viewBox="0 0 36 36">
                <motion.circle
                  cx="18"
                  cy="18"
                  r="16"
                  stroke="white"
                  strokeWidth="3"
                  fill="transparent"
                  strokeDasharray="100"
                  strokeDashoffset="0"
                  initial={{ strokeDashoffset: 100 }} // Starts full
                  animate={{ strokeDashoffset: 0 }} // Ends empty
                  transition={{
                    duration: 5, // Matches the carousel image interval (5 seconds)
                    ease: 'linear',
                    repeat: Infinity, // Keep repeating for each image
                  }}
                />
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
