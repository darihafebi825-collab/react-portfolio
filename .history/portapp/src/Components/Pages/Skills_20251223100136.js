import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import {
  Code,
  Database,
  Cpu,
  Wrench,
  X as CloseIcon
} from 'lucide-react';

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);

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
      title: 'ML / AI',
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

  return (
    <section id="skills" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-5xl font-black text-gray-900 mb-3">
            TECH STACK
          </h2>
          <p className="text-gray-600">
            Click to explore each category
          </p>
        </motion.div>

        {/* Skill cards */}
        <div className="flex gap-6 overflow-x-auto pb-4">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            const isActive = activeSkill === idx;

            return (
              <motion.button
                key={idx}
                onClick={() => setActiveSkill(isActive ? null : idx)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-[200px] h-[200px] bg-gray-900 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 shadow-xl"
              >
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center">
                  <Icon size={32} className="text-gray-900" />
                </div>

                <h3 className="text-xl font-bold text-white">
                  {category.title}
                </h3>
              </motion.button>
            );
          })}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {activeSkill !== null && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveSkill(null)}
                className="fixed inset-0 bg-black/50 z-40"
              />

              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                className="fixed right-6 top-1/2 -translate-y-1/2 w-[90%] max-w-sm bg-gray-900 rounded-2xl p-8 z-50"
              >
                <button
                  onClick={() => setActiveSkill(null)}
                  className="absolute top-4 right-4 bg-white rounded-lg p-2"
                >
                  <CloseIcon size={18} />
                </button>

                <h3 className="text-3xl font-bold text-white mb-4 text-center">
                  {skillCategories[activeSkill].title}
                </h3>

                <div className="space-y-2">
                  {skillCategories[activeSkill].skills.map((skill, i) => (
                    <div
                      key={i}
                      className="bg-gray-800 text-white rounded-lg p-3"
                    >
                      {skill}
                    </div>
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



