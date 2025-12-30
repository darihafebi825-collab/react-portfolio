import React from "react";
import { motion } from "framer-motion";
import { User, Briefcase, Award, Star, Code2 } from "lucide-react";

const statsData = [
  { icon: Briefcase, label: "Fresher", desc: "Experience", delay: 0.9 },
  { icon: Award, label: "11+ Projects", desc: "Completed", delay: 1.0 },
  { icon: Star, label: "Growing", desc: "Portfolio", delay: 1.1 },
  { icon: Code2, label: "10+ Tech", desc: "Stacks", delay: 1.2 },
];

const Abo = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
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

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left card */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl p-10 shadow-2xl border border-gray-200 relative overflow-hidden"
          >
            <div className="space-y-6 relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm font-semibold rounded-full mb-4"
              >
                <span className="text-lg">👋</span> Hello, I'm
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-4xl font-bold text-gray-900 mb-2 tracking-tight"
              >
                Dariha
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-gray-600 text-xl mb-4 font-medium"
              >
                Full Stack Developer
              </motion.p>

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="h-1 bg-gradient-to-r from-gray-900 to-gray-600 mb-6"
              />

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-gray-700 leading-relaxed text-base"
              >
                I'm a passionate fresher who has completed{" "}
                <span className="font-bold text-gray-900">11+ academic projects</span>{" "}
                across web development and machine learning. I enjoy building intelligent,
                well-designed applications.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-gray-700 leading-relaxed text-base"
              >
                I specialize in{" "}
                <span className="font-bold text-gray-900">full-stack development</span>, with
                expertise in React and modern web technologies.
              </motion.p>
            </div>
          </motion.div>

          {/* Right stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {statsData.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: stat.delay, type: "spring", stiffness: 200, damping: 15 }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  boxShadow: "0 20px 40px -10px rgba(0,0,0,0.3)",
                }}
                className="bg-white p-6 rounded-xl text-center shadow-lg border border-gray-200 relative overflow-hidden group cursor-pointer"
              >
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="bg-gray-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-white transition-colors"
                  >
                    <stat.icon className="text-gray-900" size={24} />
                  </motion.div>
                  <div className="font-bold text-gray-900 text-base mb-1 group-hover:text-white transition-colors">
                    {stat.label}
                  </div>
                  <div className="text-xs text-gray-600 group-hover:text-gray-300 transition-colors">
                    {stat.desc}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Abo;
