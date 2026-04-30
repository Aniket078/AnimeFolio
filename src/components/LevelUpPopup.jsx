import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LevelUpPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup after a delay to simulate leveling up
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Auto-hide after 4 seconds
      setTimeout(() => setIsVisible(false), 4000);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="fixed top-24 left-1/2 -translate-x-1/2 z-[60] pointer-events-none"
        >
          <div className="glass px-8 py-4 rounded-xl border-t-2 border-shadow-neon shadow-[0_0_40px_rgba(168,85,247,0.5)] flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-shadow-violet/20 border border-shadow-neon flex items-center justify-center animate-pulse">
              <span className="text-xl">⏫</span>
            </div>
            <div>
              <p className="font-orbitron text-shadow-neon text-xs tracking-widest uppercase mb-1">System Alert</p>
              <h3 className="font-rajdhani font-bold text-2xl text-white drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">LEVEL UP!</h3>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LevelUpPopup;
