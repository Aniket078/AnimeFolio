import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fetchPlayerData, fetchSkillsData } from '../api/systemApi';

const About = () => {
  const [player, setPlayer] = useState(null);
  const [skillsList, setSkillsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSystemData = async () => {
      try {
        const [playerData, skillsData] = await Promise.all([
          fetchPlayerData(),
          fetchSkillsData()
        ]);
        
        if (playerData) setPlayer(playerData);
        if (skillsData) setSkillsList(skillsData);
      } catch (error) {
        console.error("System Error: Failed to synchronize data", error);
      } finally {
        setLoading(false);
      }
    };

    loadSystemData();
  }, []);

  return (
    <section id="status" className="relative w-full py-24 px-6 overflow-hidden min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-2">
            <div className="section-divider"></div>
            <span className="sys-label text-shadow-blue">System Notification</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-rajdhani uppercase text-white glow-text">
            Status Window
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8">

          {/* Main Info Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 dungeon-card p-8 flex flex-col justify-between group hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:border-shadow-neon/50 transition-all duration-500"
          >
            <div>
              <div className="flex justify-between items-start mb-8 border-b border-shadow-violet/20 pb-4">
                <div>
                  <h3 className="font-orbitron text-2xl font-bold text-slate-100 mb-1">
                    {loading ? 'Loading...' : (player?.name || 'Unknown')}
                  </h3>
                  <p className="sys-label text-shadow-neon">Class: Developer</p>
                </div>
                <div className="text-right">
                  <p className="font-orbitron text-sm text-slate-400">Level</p>
                  <p className="font-orbitron text-3xl font-bold text-shadow-neon">
                    {loading ? '--' : (player?.level || '0')}
                  </p>
                </div>
              </div>

              <div className="space-y-4 font-rajdhani text-lg text-slate-300">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="opacity-60">Title</span>
                  <span className="font-semibold text-shadow-blue">
                    {loading ? 'Analyzing...' : (player?.title || 'None')}
                  </span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="opacity-60">HP</span>
                  <span className="font-semibold text-red-400">
                    {loading ? '-- / --' : `${player?.hp || 100} / 100`}
                  </span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="opacity-60">MP</span>
                  <span className="font-semibold text-blue-400">
                    {loading ? '-- / --' : `${player?.mp || 65} / 100`}
                  </span>
                </div>
                <div className="flex justify-between pb-2">
                  <span className="opacity-60">Fatigue</span>
                  <span className="font-semibold text-green-400">0</span>
                </div>
              </div>
            </div>

            <p className="mt-8 text-sm text-slate-400 leading-relaxed font-light border-l-2 border-shadow-blue/50 pl-4">
              "The system has chosen you. Keep leveling up, learning new frameworks, and building scalable applications."
            </p>
          </motion.div>

          {/* Skills / Stats Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 dungeon-card p-8 group hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:border-shadow-neon/50 transition-all duration-500"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-orbitron text-xl font-bold text-white">Skills Acquired</h3>
              <span className="sys-label border border-shadow-violet/30 px-2 py-1 rounded bg-shadow-violet/10">Passive / Active</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {loading ? (
                <div className="col-span-2 text-center text-slate-400 font-rajdhani py-8">
                  Synchronizing Skills...
                </div>
              ) : skillsList && skillsList.length > 0 ? (
                skillsList.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-end">
                      <div>
                        <span className="text-xs font-orbitron text-shadow-neon opacity-80 block mb-1">{skill.type}</span>
                        <span className="font-rajdhani font-semibold text-lg text-slate-200">{skill.name}</span>
                      </div>
                      <span className="font-orbitron text-sm text-shadow-blue block mb-1">Lv.{Math.floor((skill.level || 0) / 10)}</span>
                    </div>
                    <div className="stat-bar-bg h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level || 0}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 + (index * 0.1) }}
                        className="h-full bg-gradient-to-r from-shadow-violet to-shadow-neon relative"
                      >
                        <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/40 blur-[1px]"></div>
                      </motion.div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-2 text-center text-slate-400 font-rajdhani py-8">
                  No skills data found in system.
                </div>
              )}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
