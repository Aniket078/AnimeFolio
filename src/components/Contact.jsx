import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="relative w-full py-24 px-6 min-h-[80vh] flex items-center justify-center">
      
      {/* Portal Background Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-dungeon opacity-30 rounded-full pointer-events-none blur-[50px] z-0"></div>

      <div className="max-w-3xl mx-auto w-full relative z-10">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="dungeon-card p-10 md:p-14 relative overflow-hidden text-center hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] hover:border-shadow-neon/40 transition-all duration-700"
        >
          {/* Portal rings */}
          <div className="absolute top-0 left-0 w-full h-full border border-shadow-violet/10 rounded-2xl animate-[spin_60s_linear_infinite] pointer-events-none"></div>
          <div className="absolute top-2 left-2 w-[calc(100%-16px)] h-[calc(100%-16px)] border border-shadow-blue/5 rounded-2xl animate-[spin_40s_linear_infinite_reverse] pointer-events-none"></div>

          <div className="mb-8">
            <span className="sys-label text-shadow-neon block mb-4">Gate Detected</span>
            <h2 className="text-4xl md:text-5xl font-bold font-rajdhani uppercase text-white glow-text mb-6">
              Open Communication Portal
            </h2>
            <p className="text-slate-400 font-light max-w-md mx-auto">
              Ready to clear the next dungeon together? Send a message to initiate the raid.
            </p>
          </div>

          <form className="space-y-6 text-left max-w-lg mx-auto relative z-20">
            <div>
              <label className="block sys-label mb-2 text-shadow-blue">Sender ID</label>
              <input 
                type="text" 
                className="w-full bg-shadow-black/50 border border-shadow-violet/30 rounded px-4 py-3 text-white font-inter focus:outline-none focus:border-shadow-neon focus:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block sys-label mb-2 text-shadow-blue">Mana Frequency (Email)</label>
              <input 
                type="email" 
                className="w-full bg-shadow-black/50 border border-shadow-violet/30 rounded px-4 py-3 text-white font-inter focus:outline-none focus:border-shadow-neon focus:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block sys-label mb-2 text-shadow-blue">Message Payload</label>
              <textarea 
                rows="4"
                className="w-full bg-shadow-black/50 border border-shadow-violet/30 rounded px-4 py-3 text-white font-inter focus:outline-none focus:border-shadow-neon focus:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all resize-none"
                placeholder="Detail the mission..."
              ></textarea>
            </div>
            <div className="text-center pt-4">
              <button type="button" className="btn-solid w-full sm:w-auto">
                Transmit Message
              </button>
            </div>
          </form>

        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
