import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Home = () => {
  // Simple intersection observer to trigger "Level Up" style animations or just logic if we wanted.
  // For now, we use Framer Motion's whileInView inside components for a cleaner approach.
  
  return (
    <main className="flex flex-col w-full">
      <Hero />
      <About />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 text-center border-t border-shadow-violet/20 bg-shadow-dark relative z-10">
        <p className="font-orbitron text-xs text-slate-500 tracking-widest uppercase">
          System Initialized © 2026 Sung Niket. All rights reserved.
        </p>
      </footer>
    </main>
  );
};

export default Home;