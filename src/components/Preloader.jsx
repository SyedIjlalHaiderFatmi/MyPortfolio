import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [bootText, setBootText] = useState([]);
  
  const bootSequence = [
    "> LOADING SYSTEM...",
    "> INITIALIZING SECURITY PROTOCOLS...",
    "> DECRYPTING DATA...",
    "> ACCESS GRANTED"
  ];

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < bootSequence.length) {
        setBootText(prev => [...prev, bootSequence[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
      }
    }, 400);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);
    
    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 w-full h-screen bg-gradient-to-br from-[#050510] via-[#12102A] to-[#050510] z-[100000] flex flex-col items-center justify-center relative overflow-hidden"
        >
          {/* Scanline background */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-10" 
            style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #00FF41 2px, #00FF41 4px)' }} 
          />

          {/* Terminal Boot Sequence */}
          <div className="absolute top-1/4 left-10 md:left-24 font-jetbrains text-[#00FF41] text-sm md:text-base flex flex-col gap-2">
            {bootText.map((line, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="opacity-80"
              >
                {line}
              </motion.div>
            ))}
          </div>

          {/* Logo Container */}
          <motion.div 
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative text-5xl md:text-7xl font-black tracking-tighter z-10"
          >
            {/* Background text (empty state) */}
            <div className="text-white/10">
              {personalInfo.brandName}<span className="text-white/10">.</span>
            </div>

            {/* Foreground text (water fill state) */}
            <motion.div 
              className="absolute top-0 left-0 text-white overflow-hidden whitespace-nowrap"
              initial={{ clipPath: 'inset(100% 0 0 0)' }}
              animate={{ clipPath: 'inset(0% 0 0 0)' }}
              transition={{ duration: 1.6, ease: "easeInOut", delay: 0.2 }}
            >
              {personalInfo.brandName}<span className="neon-green">.</span>
            </motion.div>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
