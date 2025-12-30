import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, Award } from "lucide-react";

const expData = [
  {
    icon: Briefcase,
    title: "Full Stack Developer Intern",
    company: "ABC Company",
    duration: "Jan 2024 - Present",
    delay: 0.8,
  },
  {
    icon: Award,
    title: "Machine Learning Project",
    company: "XYZ Academy",
    duration: "Jul 2023 - Dec 2023",
    delay: 0.9,
  },
  {
    icon: Calendar,
    title: "Web Developer Bootcamp",
    company: "Online Course",
    duration: "Mar 2023 - Jun 2023",
    delay: 1.0,
  },
];

const Exp = () => {
  return (
    <section id="experience" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <Briefcase size={40} /> Experience
          </h2>
          <div className="w-20 h-1 bg-gray-900 mx-auto mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Some of my work and learning experiences
          </p>
        </motion.div>

        {/* Experience cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {expData.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: exp.delay, type: "spring", stiffness: 200, damping: 15 }}
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "0 20px 40px -10px rgba(0,0,0,0.3)",
              }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 text-center cursor-pointer group"
            >
              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="bg-gray-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white transition-colors"
                >
                  <exp.icon className="text-gray-900" size={24} />
                </motion.div>
                <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-gray-900 transition-colors">
                  {exp.title}
                </h3>
                <p className="text-gray-600 text-sm mb-1">{exp.company}</p>
                <p className="text-xs text-gray-500">{exp.duration}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Exp;

