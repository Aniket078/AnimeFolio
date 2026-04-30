import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Diet Planner System",
    rank: "S-Rank",
    description: "A comprehensive health tracking system that generates personalized meal plans and monitors nutrition.",
    image: "/src/assets/Diet_planner.png",
    tags: ["Python", "Django", "JavaScript"],
    link: "#"
  },
  {
    title: "Shopiket E-Commerce",
    rank: "A-Rank",
    description: "A full-scale merchant platform allowing seamless transactions, cart management, and product browsing.",
    image: "/src/assets/webpage.png",
    tags: ["Python", "Django", "JavaScript", "Tailwind"],
    link: "#"
  }
];

const Projects = () => {
  return (
    <section id="missions" className="relative w-full py-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center justify-center gap-4 mb-2">
            <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-shadow-blue"></div>
            <span className="sys-label text-shadow-blue">System Quest Log</span>
            <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-shadow-blue"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-rajdhani uppercase text-white glow-text">
            Completed Missions
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="dungeon-card overflow-hidden group relative hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] hover:border-shadow-neon/40 transition-all duration-500"
            >
              {/* Scan line effect on hover */}
              <div className="absolute w-full h-[2px] bg-shadow-neon/50 shadow-[0_0_10px_rgba(168,85,247,0.8)] -top-[2px] group-hover:animate-scan z-20 pointer-events-none hidden group-hover:block"></div>

              <div className="relative h-64 overflow-hidden border-b border-shadow-violet/20">
                <div className="absolute inset-0 bg-shadow-deep/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter grayscale-[30%] group-hover:grayscale-0"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback */}
                <div className="hidden absolute inset-0 bg-shadow-mid flex-col items-center justify-center text-shadow-violet/50 font-orbitron">
                  No Image Data
                </div>

                <div className="absolute top-4 right-4 z-20">
                  <span className={`rank-badge ${project.rank === 'S-Rank' ? 'border-red-500/50 text-red-400 bg-red-500/10 shadow-[0_0_8px_rgba(239,68,68,0.3)]' : ''}`}>
                    {project.rank}
                  </span>
                </div>
              </div>

              <div className="p-8 relative bg-shadow-dark">
                <h3 className="font-rajdhani text-2xl font-bold text-white mb-3 group-hover:text-shadow-neon transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-6 font-light leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded border border-shadow-blue/20 bg-shadow-blue/5 text-shadow-blue text-xs font-orbitron tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a href={project.link} className="inline-flex items-center gap-2 font-rajdhani font-bold text-shadow-violet hover:text-shadow-neon transition-colors uppercase tracking-widest text-sm">
                  View Record <span className="text-lg leading-none">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
