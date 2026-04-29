import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import StorySection from '../components/StorySection';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="min-h-screen pt-32 pb-16 px-6 flex items-center max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center w-full">

          {/* Left Side: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-block glass px-4 py-2 rounded-full text-sm font-semibold text-purple-300 mb-2 border border-purple-500/50 shadow-[0_0_10px_rgba(168,85,247,0.3)]">
              Welcome to my world ✨
            </div>

            <p className="text-xl text-gray-300 leading-relaxed max-w-lg font-light tracking-wide">
              Hi, I’m a developer who loves blending technology with creativity. I build modern web experiences with a touch of anime-inspired design and smooth user interactions.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed max-w-lg font-light tracking-wide">
              I enjoy turning ideas into clean, functional interfaces while constantly learning and improving my skills. Whether it’s crafting responsive layouts or experimenting with new animations, I focus on creating experiences that feel both aesthetic and meaningful.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed max-w-lg font-light tracking-wide">
              Outside of coding, I’m into anime, games, and exploring new design styles that inspire my work.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-6">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-bold shadow-[0_0_15px_rgba(168,85,247,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.8)] hover:scale-105 transition-all duration-300">
                Learn More
              </button>
              <div className="flex items-center gap-3 cursor-pointer group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center shadow-[0_0_15px_rgba(236,72,153,0.2)] group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(236,72,153,0.6)] transition-all duration-300 border border-pink-500/30">
                  <Play className="w-5 h-5 text-pink-400 ml-1 drop-shadow-[0_0_5px_rgba(236,72,153,0.8)]" />
                </div>
                <span className="font-semibold text-gray-300 group-hover:text-pink-400 group-hover:drop-shadow-[0_0_8px_rgba(236,72,153,0.8)] transition-all">
                  Watch my story
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Single Anime Image */}
          <div className="relative w-full flex justify-center items-center">
            {/* Neon background glow */}
            <div className="absolute w-[350px] h-[350px] bg-purple-600/30 blur-[100px] rounded-full"></div>
            <div className="absolute w-[250px] h-[250px] bg-blue-500/20 blur-[80px] rounded-full translate-x-10 translate-y-10"></div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10 max-w-[420px] w-full"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="relative glass p-2 rounded-[2rem] shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_50px_rgba(59,130,246,0.6)] hover:scale-[1.03] transition-all duration-500"
              >
                <img
                  src="/src/assets/Animeboy-2.png"
                  alt="Anime-profile-pic"
                  className="w-full h-auto rounded-[1.8rem] object-cover border border-purple-500/20"
                />
              </motion.div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Additional Sections */}
      <StorySection />
      <ProjectsSection />
      <SkillsSection />
      
      {/* Footer / Spacing at the bottom */}
      <div className="py-12 text-center text-gray-500 text-sm">
        <p>© 2026 AnimeFolio. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Home;