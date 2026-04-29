import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed w-full z-50 top-0 left-0 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto glass rounded-full px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative group">
            <div className="absolute inset-0 bg-purple-500 rounded-full blur-md opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <img
              src="/src/assets/gojoAnime.png"
              alt="Logo"
              className="relative w-10 h-10 rounded-full border border-purple-400 object-cover"
            />
          </div>
          <span className="font-bold text-xl tracking-tight text-white drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">
            AnimeFolio
          </span>
        </div>

        <ul className="hidden md:flex items-center gap-8 font-medium text-gray-300">
          <li className="hover:text-purple-400 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] cursor-pointer transition-all">About Me</li>
          <li className="hover:text-purple-400 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] cursor-pointer transition-all">projects</li>
          <li className="hover:text-purple-400 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] cursor-pointer transition-all">Skills</li>
          {/* <li className="hover:text-purple-400 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] cursor-pointer transition-all">Reviews</li> */}
        </ul>

        <button className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow-[0_0_15px_rgba(168,85,247,0.5)] hover:shadow-[0_0_25px_rgba(236,72,153,0.7)] hover:scale-105 transition-all">
          Contact Me
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;