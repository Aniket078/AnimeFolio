import React from 'react';
import { motion } from 'framer-motion';

const ShadowParticles = () => {
  // Generate a small number of particles to avoid overloading
  const particles = Array.from({ length: 15 });

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {particles.map((_, i) => {
        // Randomize initial positions and animation properties
        const startX = Math.random() * 100; // vw
        const startY = Math.random() * 100; // vh
        
        // Randomize size between 3px and 12px
        const size = Math.random() * 9 + 3;
        
        // Randomize duration between 15s and 35s
        const duration = Math.random() * 20 + 15;
        
        // Randomize delay to stagger them
        const delay = Math.random() * 10;
        
        // Decide if this particle is more purple or more blue/black
        const isPurple = Math.random() > 0.5;

        return (
          <motion.div
            key={i}
            className={`absolute rounded-full ${isPurple ? 'bg-shadow-neon' : 'bg-shadow-violet'}`}
            style={{
              width: size,
              height: size,
              left: `${startX}vw`,
              top: `${startY}vh`,
              filter: `blur(${size / 2}px)`,
              boxShadow: isPurple ? '0 0 10px 2px rgba(168,85,247,0.4)' : '0 0 10px 2px rgba(124,58,237,0.3)'
            }}
            initial={{ 
              y: 0, 
              x: 0, 
              opacity: 0 
            }}
            animate={{ 
              y: [0, -100 - (Math.random() * 100)], 
              x: [0, (Math.random() * 100) - 50],
              opacity: [0, Math.random() * 0.5 + 0.2, 0] 
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              delay: delay,
              ease: "linear"
            }}
          />
        );
      })}
    </div>
  );
};

export default ShadowParticles;
