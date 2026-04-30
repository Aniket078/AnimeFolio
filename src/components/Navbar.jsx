import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // Offset for navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full z-50 top-0 left-0 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className={`max-w-7xl mx-auto px-6 transition-all duration-300`}>
        <div className={`flex items-center justify-between rounded-2xl px-6 py-3 transition-all duration-300 ${
          scrolled ? 'glass border-shadow-violet/30 shadow-[0_0_20px_rgba(124,58,237,0.15)]' : 'bg-transparent border-transparent'
        } border`}>
          
          {/* Logo / System Status */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="w-8 h-8 rounded-sm bg-shadow-deep border border-shadow-violet flex items-center justify-center shadow-[0_0_10px_rgba(124,58,237,0.3)] relative overflow-hidden group">
              <div className="absolute inset-0 bg-shadow-violet/20 group-hover:bg-shadow-violet/40 transition-colors"></div>
              <span className="font-orbitron font-bold text-shadow-violet text-sm">S</span>
            </div>
            <div className="flex flex-col">
              <span className="font-orbitron font-bold text-sm tracking-widest text-slate-200">SYSTEM</span>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-rajdhani text-shadow-neon tracking-widest uppercase opacity-80">Online</span>
                <span className="text-[9px] font-orbitron bg-shadow-violet/20 border border-shadow-violet/50 text-shadow-neon px-1.5 py-0.5 rounded shadow-[0_0_5px_rgba(168,85,247,0.3)]">LV. 26</span>
              </div>
            </div>
          </div>

          {/* Nav Links */}
          <ul className="hidden md:flex items-center gap-8 font-rajdhani font-semibold tracking-wider text-slate-400">
            {['Status', 'Missions', 'Contact'].map((item) => (
              <li 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="hover:text-shadow-neon hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] cursor-pointer transition-all uppercase"
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Action Button */}
          <button 
            onClick={() => scrollToSection('contact')}
            className="btn-neon text-sm py-2 px-5 hidden sm:block"
          >
            Connect
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;