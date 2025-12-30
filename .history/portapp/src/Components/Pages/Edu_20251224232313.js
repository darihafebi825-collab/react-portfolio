import React from "react";
import { motion } from "framer-motion";
import { Calendar, GraduationCap } from "lucide-react";

const education = [
  {
    year: "2012",
    title: "High School",
    place: "City High School",
    period: "2010 – 2012",
    icon: "🏫",
  },
  {
    year: "2016",
    title: "B.E Software Engineering",
    place: "Engineering College",
    period: "2012 – 2016",
    icon: "📘",
  },
  {
    year: "2018",
    title: "M.Sc Computer Science",
    place: "Tech University",
    period: "2016 – 2018",
    icon: "🎓",
  },
];

const EducationTimeline = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-100 via-white to-slate-200">

      {/* ===== 3D Outer Box Border Wrapper ===== */}
      <div className="max-w-[95%] mx-auto p-1
        rounded-3xl
        border-4 border-gray-900
        shadow-[10px_10px_30px_rgba(0,0,0,0.3), -10px_-10px_30px_rgba(255,255,255,0.2)]
        bg-white/10"
      >

        {/* ===== Existing Content ===== */}
        <div className="rounded-2xl p-6">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold flex justify-center items-center gap-3">
              <GraduationCap /> Education Journey
            </h2>
            <p className="text-gray-600 mt-2">
              Visual academic milestones
            </p>
          </div>

          {/* Orbit Path */}
          <div className="relative flex justify-between items-center">
            {/* Curved path background */}
            <svg className="absolute inset-0 w-full h-48" viewBox="0 0 1000 200">
              <path
                d="M0 100 C250 20 750 180 1000 100"
                stroke="rgba(0,0,0,0.15)"
                strokeWidth="4"
                strokeDasharray="8 8"
                fill="none"
              />
            </svg>

            {education.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className={`relative flex flex-col items-center ${
                  idx % 2 === 0 ? "-translate-y-16" : "translate-y-16"
                }`}
              >
                {/* Glow Orb */}
                <div className="w-14 h-14 rounded-full bg-white/60 backdrop-blur-xl
                  border border-white/40
                  shadow-[0_0_30px_rgba(0,0,0,0.2)]
                  flex items-center justify-center text-xl">
                  {item.icon}
                </div>

                {/* Year */}
                <div className="mt-3 text-sm font-semibold text-gray-700">
                  {item.year}
                </div>

                {/* Glass Card */}
                <motion.div
                  whileHover={{ y: -10 }}
                  className="mt-6 w-56 p-4 rounded-xl text-center
                    bg-white/35 backdrop-blur-xl
                    border border-white/40
                    shadow-[0_20px_45px_rgba(0,0,0,0.25)]"
                >
                  <h3 className="text-sm font-bold">{item.title}</h3>
                  <p className="text-xs text-gray-600">{item.place}</p>
                  <div className="flex justify-center items-center gap-1 text-xs text-gray-500 mt-2">
                    <Calendar size={12} /> {item.period}
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
