import React from 'react';
import { motion } from 'framer-motion';

const StorySection = () => {
  return (
    <section className="relative w-full py-24 min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/src/assets/anime_city_bg.png')" }}
      />
      {/* Gradient Overlay for blending */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#050014] via-transparent to-[#090014] opacity-90" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="glass p-10 rounded-[2rem] shadow-[0_0_30px_rgba(168,85,247,0.2)] border border-purple-500/20 backdrop-blur-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]">
            My Story
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
            My journey into development started with curiosity. What Begin as exploring how websites work quickly turned into a passion for building them.

            Over time, I’ve focused on creating clean, responsive, and visually engaging web experiences. I enjoy turning ideas into real products, experimenting with new technologies, and constantly improving my skills.

            Today, I’m focused on building projects that combine performance, design, and creativity—while continuing to learn and grow every day.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default StorySection;
