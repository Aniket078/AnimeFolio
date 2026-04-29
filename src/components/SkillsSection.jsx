import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Python', level: 90, color: 'from-cyan-400 to-blue-500', shadow: 'rgba(56,189,248,0.6)' },
  { name: 'Django', level: 95, color: 'from-purple-400 to-pink-500', shadow: 'rgba(236,72,153,0.6)' },
  { name: 'React', level: 85, color: 'from-yellow-400 to-orange-500', shadow: 'rgba(250,204,21,0.6)' },
  { name: 'JavaScript', level: 85, color: 'from-yellow-400 to-orange-500', shadow: 'rgba(250,204,21,0.6)' },
  { name: 'UI / UX-Design', level: 80, color: 'from-green-400 to-emerald-500', shadow: 'rgba(52,211,153,0.6)' },
];

const SkillsSection = () => {
  return (
    <section className="w-full py-24 px-6 relative overflow-hidden">
      <div className="absolute w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full bottom-0 right-0 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]">
            Tech Arsenal
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mt-4 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
        </motion.div>

        <div className="space-y-8 glass p-8 md:p-12 rounded-3xl border border-purple-500/20 shadow-[0_0_30px_rgba(168,85,247,0.15)]">
          {skills.map((skill, index) => (
            <div key={index} className="w-full">
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-semibold text-gray-200 tracking-wide">{skill.name}</span>
                <span className="text-purple-300 font-bold drop-shadow-[0_0_5px_rgba(168,85,247,0.8)]">{skill.level}%</span>
              </div>
              <div className="h-4 w-full bg-gray-800/50 rounded-full overflow-hidden border border-gray-700/50 relative">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color} relative`}
                  style={{ boxShadow: `0 0 15px ${skill.shadow}` }}
                >
                  {/* Glowing tip */}
                  <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/50 blur-[2px] rounded-full" />
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
