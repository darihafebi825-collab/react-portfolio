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
    <section
      id="education"
      className="py-24 bg-gradient-to-br from-gray-100 via-white to-gray-200"
    >
      {/* OUTER GLASS FRAME */}
      <div className="max-w-[95%] mx-auto rounded-[32px] p-[2px]
        bg-gradient-to-br from-white/50 to-white/10
        shadow-[0_40px_90px_rgba(0,0,0,0.3)]">

        <div className="rounded-[30px] bg-white/25 backdrop-blur-2xl border border-white/40 p-12">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-bold text-gray-900 flex justify-center items-center gap-3">
              <GraduationCap size={36} /> Education Timeline
            </h2>
            <p className="text-gray-700 mt-3">
              Academic journey mapped over time
            </p>
          </motion.div>

          {/* TIMELINE */}
          <div className="relative overflow-x-auto pb-16">
            {/* Main timeline line */}
            <div className="absolute top-1/2 left-0 w-full h-[4px]
              bg-white/60 backdrop-blur-md rounded-full
              shadow-inner" />

            <div className="relative flex items-center gap-24 min-w-max px-8">
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="relative flex flex-col items-center"
                >
                  {/* Year */}
                  <div className="mb-6 px-5 py-1.5 text-sm font-semibold rounded-full
                    bg-white/70 backdrop-blur-md border border-white/50
                    shadow-md">
                    {edu.year}
                  </div>

                  {/* Dot */}
                  <div className="relative z-10 w-5 h-5 rounded-full
                    bg-white shadow-[0_0_0_6px_rgba(255,255,255,0.45)]" />

                  {/* Connector */}
                  <div className="w-[2px] h-10 bg-white/60" />

                  {/* Card */}
                  <motion.div
                    whileHover={{ y: -14, rotateX: 6 }}
                    transition={{ type: "spring", stiffness: 180 }}
                    className="w-64 p-5 rounded-2xl text-center
                      bg-white/35 backdrop-blur-xl
                      border border-white/40
                      shadow-[0_25px_55px_rgba(0,0,0,0.25)]"
                  >
                    <div className="text-3xl mb-2">{edu.icon}</div>
                    <h3 className="text-sm font-bold text-gray-900">
                      {edu.degree}
                    </h3>
                    <p className="text-xs text-gray-700">
                      {edu.institution}
                    </p>
                    <div className="flex items-center justify-center gap-1 text-xs text-gray-600 mt-3">
                      <Calendar size={12} /> {edu.period}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EducationTimeline;





