import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';


// Lucide-react icons
import {
  Code,
  Database,
  Cpu,
  Wrench,
  X as CloseIcon,  // Only declare once
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Menu,
  Briefcase,
  Code2,
  GraduationCap,
  Award,
  Calendar,
  User,
  MessageSquare,
  Send,
  ChevronRight,
  Star
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

  return (
    <section id="skills" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,0,0,0.05) 35px, rgba(0,0,0,0.05) 36px)',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <h2 className="text-5xl font-black text-[#1a1f2e] mb-3">TECH STACK</h2>
          <p className="text-gray-600">Click to explore each category</p>
        </motion.div>

        {/* Stack Boxes Horizontal */}
        <div className="flex gap-6 overflow-x-auto pb-4 relative z-10">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            const isActive = activeSkill === idx;

            return (
              <motion.div key={idx} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                <motion.button
                  onClick={() => setActiveSkill(isActive ? null : idx)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-[200px] h-[200px] bg-[#1a1f2e] border-2 border-[#1a1f2e] rounded-2xl p-6 flex flex-col items-center justify-center gap-4 transition-all relative overflow-hidden group shadow-xl hover:border-gray-500"
                >
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity" />

                  <motion.div animate={isActive ? { scale: 0.8, rotate: 360 } : { scale: 1, rotate: 0 }} transition={{ duration: 0.3 }} className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg">
                    <Icon size={32} className="text-[#1a1f2e]" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-white">{category.title}</h3>

                  <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs text-gray-400 font-medium">
                    CLICK
                  </motion.div>
                </motion.button>
              </motion.div>
            );
          })}
        </div>

        {/* Modal & Backdrop */}
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

              {/* Modal */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                className="fixed right-6 top-1/2 -translate-y-1/2 w-[90%] max-w-sm bg-[#1a1f2e] border-2 border-gray-600 rounded-2xl p-8 z-50 shadow-2xl"
              >
                {/* Close button */}
                <button
                  onClick={() => setActiveSkill(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors"
                >
                  <CloseIcon size={20} className="text-[#1a1f2e]" />
                </button>

                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    {React.createElement(skillCategories[activeSkill].icon, { size: 40, className: 'text-[#1a1f2e]' })}
                  </div>
                  <h3 className="text-3xl font-black text-white mb-2">{skillCategories[activeSkill].title}</h3>
                  <p className="text-gray-400 text-sm">{skillCategories[activeSkill].description}</p>
                </div>

                <div className="space-y-2">
                  {skillCategories[activeSkill].skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center gap-3 bg-[#252b3b] rounded-lg p-3 border border-gray-700"
                    >
                      <div className="w-2 h-2 bg-white rounded-full" />
                      <span className="text-white font-medium">{skill}</span>
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



