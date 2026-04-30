import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center pt-20 overflow-hidden">

      {/* Background dark dungeon with fog */}
      <div className="absolute inset-0 bg-[#020005] z-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnPjxmaWx0ZXIgaWQ9J24nPjxmZVR1cmJ1bGVuY2UgdHlwZT0nZnJhY3RhbE5vaXNlJyBiYXNlRnJlcXVlbmN5PScwLjAxNScgbnVtT2N0YXZlcz0nMycgc3RpdGNoVGlsZXM9J3N0aXRjaCcvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnIGZpbHRlcj0ndXJsKCNuKScgb3BhY2l0eT0nMC4wNScvPjwvc3ZnPg==')] opacity-30 mix-blend-overlay"></div>
        {/* Fog layers */}
        <motion.div
          animate={{ x: [0, 50, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-1/4 w-[800px] h-[600px] bg-shadow-violet/20 blur-[150px] rounded-full pointer-events-none"
        ></motion.div>
        <motion.div
          animate={{ x: [0, -50, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-0 w-[600px] h-[500px] bg-shadow-deep/80 blur-[120px] rounded-full pointer-events-none"
        ></motion.div>
        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-[#020005] to-transparent z-10 pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center relative z-20">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 relative z-30"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-shadow-violet/30 bg-shadow-violet/10 mb-2 shadow-[0_0_15px_rgba(124,58,237,0.2)]">
            <div className="w-2 h-2 rounded-full bg-shadow-neon animate-pulse-glow"></div>
            <span className="font-orbitron text-[10px] uppercase tracking-widest text-shadow-neon drop-shadow-[0_0_5px_rgba(168,85,247,0.8)]">Player Awoken</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-rajdhani uppercase tracking-wide leading-tight drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
            Arise, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-shadow-neon via-purple-400 to-shadow-blue glow-text">
              Developer.
            </span>
          </h1>

          <p className="text-lg text-slate-300 max-w-lg font-light leading-relaxed border-l-2 border-shadow-violet/80 pl-4 bg-gradient-to-r from-shadow-violet/10 to-transparent py-2">
            Building modern web experiences through sheer leveling and grinding. Turning complex problems into shadow soldiers under my command.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button className="btn-solid relative overflow-hidden group" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              <span className="relative z-10">View Missions</span>
              <div className="absolute inset-0 bg-gradient-to-r from-shadow-neon to-shadow-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="btn-neon" onClick={() => document.getElementById('status')?.scrollIntoView({ behavior: 'smooth' })}>
              Check Status
            </button>
          </div>
        </motion.div>

        {/* Right Content - Character Art with Floating/Aura Animations */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative w-full flex justify-center items-center h-[600px] mt-10 lg:mt-0"
        >
          {/* Main aura pulsing behind character */}
          <motion.div
            animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            // className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[450px] bg-shadow-violet/40 blur-[60px] rounded-full z-0"
          ></motion.div>

          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            // className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[400px] bg-shadow-neon/30 blur-[40px] rounded-full z-0"
          ></motion.div>

          {/* Floating Character Container (Breathing effect) */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 w-full max-w-[400px] h-[550px] flex justify-center items-end"
          >
            {/* The Character Image Wrapper with Glowing Aura Filter */}
            <div className="relative w-full h-full flex justify-center items-end drop-shadow-[0_0_25px_rgba(168,85,247,0.6)]">
              {/* Dark fog overlay fading at the bottom to blend character */}
              <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-[#020005] via-[#020005]/80 to-transparent z-20 pointer-events-none"></div>

              <img
                src="/src/assets/Animeboy-2.png"
                alt="Shadow Monarch Player"
                className="relative z-10 max-h-[110%] w-auto object-contain pointer-events-none"
                style={{ filter: "drop-shadow(0 0 20px rgba(150,80,200,0.8))  drop-shadow(0 0 40px rgba(124,58,237,0.5)) contrast(1.15) brightness(0.9) saturate(1.2)" }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              {/* Fallback silhouette if image fails */}
              <div className="hidden absolute bottom-0 w-[200px] h-[400px] bg-black rounded-t-full shadow-[0_0_50px_rgba(168,85,247,0.8)] border border-shadow-violet/50 z-10 flex-col justify-center items-center text-center">
                <span className="font-orbitron text-shadow-neon text-xl font-bold tracking-widest drop-shadow-[0_0_8px_rgba(168,85,247,1)]">MONARCH</span>
              </div>

              {/* Status overlay attached to the character */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[85%] glass rounded-lg p-3 z-30 border border-shadow-neon/40 shadow-[0_0_20px_rgba(0,0,0,0.8)] backdrop-blur-md">
                <div className="flex justify-between items-center mb-1">
                  <span className="sys-label text-shadow-neon drop-shadow-[0_0_3px_rgba(168,85,247,0.8)]">HP</span>
                  <span className="font-orbitron text-xs text-white">100/100</span>
                </div>
                <div className="stat-bar-bg mb-2 bg-black/50">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-red-600 to-red-400 shadow-[0_0_12px_rgba(239,68,68,0.8)] relative"
                  >
                    <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/50 blur-[1px]"></div>
                  </motion.div>
                </div>
                <div className="flex justify-between items-center mb-1">
                  <span className="sys-label text-shadow-blue drop-shadow-[0_0_3px_rgba(96,165,250,0.8)]">MP</span>
                  <span className="font-orbitron text-xs text-white">65/100</span>
                </div>
                <div className="stat-bar-bg bg-black/50">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "65%" }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                    className="h-full bg-gradient-to-r from-blue-600 to-shadow-blue shadow-[0_0_12px_rgba(59,130,246,0.8)] relative"
                  >
                    <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/50 blur-[1px]"></div>
                  </motion.div>
                </div>
              </div>

            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
