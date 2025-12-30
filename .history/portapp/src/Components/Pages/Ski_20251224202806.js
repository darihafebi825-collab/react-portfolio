import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Database, Cpu, Wrench, X as CloseIcon } from "lucide-react";

const skillCategories = [
  {
    title: 'Frontend',
    icon: Code,
    skills: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind', 'TypeScript', 'Redux'],
    description: 'Building responsive and interactive user interfaces',
  },
  {
    title: 'Backend',
    icon: Database,
    skills: ['Python', 'Django', 'Node.js', 'PostgreSQL', 'REST APIs', 'MongoDB'],
    description: 'Developing robust server-side applications',
  },
  {
    title: 'ML/AI',
    icon: Cpu,
    skills: ['TensorFlow', 'Scikit-learn', 'OpenCV', 'Keras', 'NumPy', 'Pandas'],
    description: 'Creating intelligent systems and models',
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: ['Git', 'Docker', 'VS Code', 'Figma', 'Postman', 'Linux'],
    description: 'Essential development and design tools',
  },
];

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <section id="skills" className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">
            TECH STACK
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Click on a category to explore skills
          </p>
        </motion.div>

        {/* Skill Cards Horizontal */}
        <div className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide pb-4">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            const isActive = activeSkill === idx;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <motion.button
                  onClick={() => setActiveSkill(isActive ? null : idx)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-40 sm:w-44 md:w-48 h-40 sm:h-44 md:h-48 bg-gray-900 rounded-2xl p-4 flex flex-col items-center justify-center gap-3 cursor-pointer shadow-[8px_8px_16px_#b0b8c1,-8px_-8px_16px_#ffffff] transition-all"
                >
                  <motion.div
                    animate={isActive ? { rotate: 360, scale: 0.9 } : { rotate: 0, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white rounded-xl flex items-center justify-center shadow-md"
                  >
                    <Icon size={32} className="text-gray-900" />
                  </motion.div>

                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-white">
                    {category.title}
                  </h3>

                  <motion.div
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-2 text-xs sm:text-sm text-gray-400 font-medium"
                  >
                    CLICK
                  </motion.div>
                </motion.button>
              </motion.div>
            );
          })}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {activeSkill !== null && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveSkill(null)}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              />

              {/* Modal content */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 w-[90%] max-w-sm bg-gray-900 rounded-2xl p-6 sm:p-8 z-50 shadow-2xl"
              >
                <button
                  onClick={() => setActiveSkill(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors"
                >
                  <CloseIcon size={20} className="text-gray-900" />
                </button>

                <div className="text-center mb-6">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                    {React.createElement(skillCategories[activeSkill].icon, { size: 36, className: 'text-gray-900' })}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    {skillCategories[activeSkill].title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base">
                    {skillCategories[activeSkill].description}
                  </p>
                </div>

                <div className="space-y-2">
                  {skillCategories[activeSkill].skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center gap-3 bg-gray-800 rounded-lg p-3 border border-gray-700"
                    >
                      <div className="w-2 h-2 bg-white rounded-full" />
                      <span className="text-white font-medium text-sm sm:text-base">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;
