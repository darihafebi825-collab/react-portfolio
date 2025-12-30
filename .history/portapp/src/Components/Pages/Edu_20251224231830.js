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
    <section id="education" className="py-24 bg-gradient-to-br from-gray-100 via-white to-gray-200">
      {/* OUTER GLASS FRAME */}
      <div className="max-w-[95%] mx-auto rounded-[32px] p-[2px] bg-gradient-to-br from-white/40 to-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.25)]">

        <div className="rounded-[30px] border border-white/30 bg-white/20 backdrop-blur-xl p-10">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 flex justify-center items-center gap-3 drop-shadow-sm">
              <GraduationCap size={34} /> Education
            </h2>
            <p className="text-gray-700 mt-2">
              Academic journey in glass timeline
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative flex items-center gap-14 overflow-x-auto pb-14">
            {/* Glass line */}
            <div className="absolute top-1/2 left-0 w-full h-[3px] bg-white/40 backdrop-blur-md rounded-full -translate-y-1/2" />

            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="relative z-10 flex-shrink-0"
              >
                {/* Year bubble */}
                <div className="absolute -top-9 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-semibold rounded-full
                  bg-white/60 backdrop-blur-md border border-white/40 shadow-md">
                  {edu.year}
                </div>

                {/* Center dot */}
                <div className="absolute top-1/2 left-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 rounded-full
                  bg-white shadow-[0_0_0_6px_rgba(255,255,255,0.4)]" />

                {/* 3D Glass Card */}
                <motion.div
                  whileHover={{ y: -12, rotateX: 6, rotateY: -6 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="
                    mt-14 w-60 rounded-2xl p-5 text-center
                    bg-white/35 backdrop-blur-xl
                    border border-white/40
                    shadow-[0_25px_50px_rgba(0,0,0,0.25)]
                  "
                >
                  <div className="text-3xl mb-2 drop-shadow-sm">{edu.icon}</div>
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
    </section>
  );
};

export default EducationTimeline;




