import React from "react";
import { motion } from "framer-motion";
import { Star, Code2, Github, ExternalLink } from "lucide-react";

const projects = [
  // ... your projects data
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-gray-100 flex justify-center">
      <div className="max-w-7xl mx-auto px-6 w-full">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 flex justify-between items-center gap-3 skeuo-header p-6 rounded-xl">
            <span className="flex items-center gap-3 text-black">
              <Code2 size={40} /> Featured Projects
            </span>
            <span className="text-right text-xl md:text-2xl text-gray-900 font-semibold">Projects</span>
          </h2>
          <p className="text-gray-700 max-w-2xl mt-4 skeuo-card p-4 rounded-xl">
            A collection of projects showcasing my skills in design, development, and problem-solving
          </p>
        </motion.div>

        {/* Horizontal Scroll */}
        <div className="flex gap-6 overflow-x-auto scrollbar-hide py-4">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5, scale: 1.03 }}
              className="w-80 flex-shrink-0 rounded-2xl skeuo-card overflow-hidden flex flex-col border border-gray-400"
            >
              {/* Project Image/Icon */}
              <div className="h-36 flex items-center justify-center text-6xl rounded-t-2xl skeuo-inner">
                {project.image}
              </div>

              {/* Project Info */}
              <div className="p-4 flex flex-col flex-grow skeuo-inner">
                <div className="text-sm text-gray-900 uppercase tracking-wider mb-1 font-semibold">
                  {project.category}
                </div>
                <h3 className="text-lg font-bold text-black mb-2 text-right line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 text-sm mb-3 leading-relaxed line-clamp-3">{project.description}</p>

                {/* Key Features */}
                <div className="mb-3">
                  <div className="text-sm text-gray-900 uppercase tracking-wider mb-1 font-semibold">Key Features</div>
                  <div className="grid grid-cols-1 gap-1">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <div key={i} className="text-sm text-gray-700 flex items-center gap-2">
                        <Star size={12} className="text-black flex-shrink-0" />
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.slice(0, 3).map((t, i) => (
                    <span key={i} className="px-2 py-1 text-black text-sm rounded skeuo-inner">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-2 mt-auto">
                  <motion.a whileHover={{ scale: 1.05 }} href="#"
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded skeuo-inner border border-gray-400 font-medium bg-gray-100">
                    <Github size={16} /> Code
                  </motion.a>
                  <motion.a whileHover={{ scale: 1.05, backgroundColor: '#111', color: '#fff' }} href="#"
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded skeuo-inner border-2 border-gray-400 font-medium bg-gray-100">
                    <ExternalLink size={16} /> Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Skeuomorphic Styles */}
      <style>
        {`
          .skeuo-card {
            background: linear-gradient(145deg, #e0e0e0, #ffffff);
            border-radius: 16px;
            box-shadow: 6px 6px 20px rgba(0,0,0,0.25), -6px -6px 20px rgba(255,255,255,0.9);
            transition: all 0.3s ease;
          }

          .skeuo-inner {
            background: linear-gradient(145deg, #f0f0f0, #d9d9d9);
            box-shadow: inset 4px 4px 10px rgba(0,0,0,0.2), inset -4px -4px 10px rgba(255,255,255,0.8);
          }

          .skeuo-header {
            background: linear-gradient(145deg, #e0e0e0, #ffffff);
            box-shadow: 8px 8px 25px rgba(0,0,0,0.3), -8px -8px 25px rgba(255,255,255,0.95);
          }

          .skeuo-card:hover {
            box-shadow: 4px 4px 15px rgba(0,0,0,0.3), -4px -4px 15px rgba(255,255,255,0.9);
          }
        `}
      </style>
    </section>
  );
};

export default Projects;

