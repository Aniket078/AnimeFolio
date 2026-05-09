import React from 'react';
import { motion } from 'framer-motion';
import dietPlannerImg from "../assets/Diet_planner.png";
import webpageImg from "../assets/webpage.png";

const projects = [
  {
    title: "Diet Planner",
    description:
      "A diet planner that helps users create personalized meal plans, track nutrition, and maintain a healthy lifestyle.",
    image: { dietPlannerImg },
    tags: ["Python", "Django-Framework", "JavaScript"],
    link: "#",
  },
  {
    title: "Shopiket E-Commerce",
    description:
      "A simple eCommerce website that allows users to browse products, view details, and add items to a shopping cart.",
    image: { webpageImg },
    tags: ["Python", "Django-Framework", "JavaScript"],
    link: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section className="w-full py-24 px-6 relative">
      <div className="absolute w-[400px] h-[400px] bg-pink-600/10 blur-[120px] rounded-full top-10 left-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full shadow-[0_0_10px_rgba(236,72,153,0.8)]" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass rounded-3xl overflow-hidden group hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] transition-all duration-500 border border-purple-500/20"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-purple-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-100 mb-3 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-4 py-1.5 rounded-full text-sm font-medium bg-purple-900/40 text-purple-200 border border-purple-500/30 shadow-[0_0_10px_rgba(168,85,247,0.1)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
