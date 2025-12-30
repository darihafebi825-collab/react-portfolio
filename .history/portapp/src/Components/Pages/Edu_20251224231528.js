import React from "react";
import { motion } from "framer-motion";
import { Calendar, GraduationCap } from "lucide-react";

const education = [
  {
    year: "2012",
    degree: "High School",
    institution: "City High School",
    period: "2010 – 2012",
    icon: "🏫",
  },
  {
    year: "2016",
    degree: "B.E Software Engineering",
    institution: "Engineering College",
    period: "2012 – 2016",
    icon: "📚",
  },
  {
    year: "2018",
    degree: "M.Sc Computer Science",
    institution: "Tech University",
    period: "2016 – 2018",
    icon: "🎓",
  },
];

const EducationTimeline = () => {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold text-gray-900 flex justify-center items-center gap-3">
            <GraduationCap size={34} /> Education
          </h2>
          <p className="text-gray-600 mt-2">
            Academic journey timeline
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative flex items-center gap-10 overflow-x-auto pb-10">
          {/* Line */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-300 -translate-y-1/2" />

          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="relative z-10 flex-shrink-0"
            >
              {/* Year marker */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1 rounded-full">
                {edu.year}
              </div>

              {/* Dot */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gray-900 rounded-full z-20" />

              {/* Card */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="mt-10 w-56 bg-white rounded-xl p-4 shadow-md border border-gray-100 text-center"
              >
                <div className="text-3xl mb-2">{edu.icon}</div>
                <h3 className="text-sm font-bold text-gray-800">
                  {edu.degree}
                </h3>
                <p className="text-xs text-gray-500">
                  {edu.institution}
                </p>
                <div className="flex items-center justify-center gap-1 text-xs text-gray-400 mt-2">
                  <Calendar size={12} /> {edu.period}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationTimeline;



