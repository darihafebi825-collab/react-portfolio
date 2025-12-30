import React from 'react';
import { motion } from 'framer-motion';

// Lucide-react icons (ONLY USED ONES)
import {
  User,
  Briefcase,
  Award,
  Star,
  Code2
} from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Animated checkered line background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(90deg, #000 1px, transparent 1px),
              linear-gradient(0deg, #000 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Animated diagonal lines */}
      <motion.div
        className="absolute inset-0 opacity-5"
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #000 0, #000 2px, transparent 2px, transparent 10px)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <User size={40} /> About Me
          </h2>
          <div className="w-20 h-1 bg-gray-900 mx-auto mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Passionate developer crafting digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Card */}
          <motion.div className="bg-white rounded-2xl p-10 shadow-2xl border border-gray-200">
            <h3 className="text-3xl font-bold mb-4">Dariha</h3>
            <p className="text-gray-700">
              Full Stack Developer with 11+ academic projects.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {[ 
              { icon: Briefcase, label: 'Fresher' },
              { icon: Award, label: '11+ Projects' },
              { icon: Star, label: 'Growing' },
              { icon: Code2, label: '10+ Tech' },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow border text-center"
              >
                <item.icon className="mx-auto mb-2" />
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
