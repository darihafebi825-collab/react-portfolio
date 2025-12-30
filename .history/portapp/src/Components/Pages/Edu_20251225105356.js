import React from "react";
import { motion } from "framer-motion";
import { Calendar, GraduationCap } from "lucide-react";

const education = [
  {
    year: "2021",
    title: "Higher Secondary (12th)",
    place: "Victory Matric Higher Secondary School",
    period: "2020 – 2021",
    score: "CGPA: 86%",
    image: "/Images/vic.png",
  },
  {
    year: "2025",
    title: "B.E – Computer Science & Engineering",
    place: "Arunachala College of Engineering for Women, Anna University",
    period: "2021 – 2025",
    score: "CGPA: 80.90%",
    image: "/Images/arun.png",
  },
  {
    year: "2025",
    title: "B.A – English (Correspondence)",
    place: "Alagappa University",
    period: "2022 – 2025",
    score: "CGPA: 67.8%",
    image: "/Images/alagappa.png",
  },
];

const EducationTimeline = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-100 via-white to-slate-200">
      <div className="max-w-[95%] mx-auto p-1 rounded-3xl bg-white border border-gray-200 shadow-[0_15px_30px_rgba(0,0,0,0.3),0_10px_20px_rgba(0,0,0,0.2)]">
        <div className="rounded-2xl p-6 bg-white/10 backdrop-blur-md">

          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold flex justify-center items-center gap-3">
              <GraduationCap size={40} /> Education Journey
            </h2>
            <p className="text-gray-600 mt-2 text-sm md:text-lg">
              Academic milestones & achievements
            </p>
          </div>

          {/* Timeline */}
          <div className="relative flex flex-wrap justify-center gap-x-12 gap-y-16">
            <svg className="hidden md:block absolute inset-0 w-full h-64 pointer-events-none" viewBox="0 0 1000 200">
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
                className="flex flex-col items-center w-full sm:w-64 md:w-72"
              >
                {/* Image Orb */}
                <div className="w-20 h-20 rounded-full bg-white/60 backdrop-blur-xl border-2 border-white/40 shadow-[0_0_40px_rgba(0,0,0,0.3)] flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-12 h-12 object-contain"
                  />
                </div>

                {/* Year */}
                <div className="mt-4 text-lg font-semibold text-gray-700">
                  {item.year}
                </div>

                {/* Glass Card */}
                <motion.div
                  whileHover={{ y: -12 }}
                  className="mt-6 p-6 w-full rounded-2xl text-center bg-white/35 backdrop-blur-xl border border-white/40 shadow-[0_25px_55px_rgba(0,0,0,0.25)]"
                >
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{item.place}</p>
                  <p className="text-sm font-medium text-gray-700 mt-2">
                    {item.score}
                  </p>
                  <div className="flex justify-center items-center gap-2 text-sm text-gray-500 mt-3">
                    <Calendar size={16} /> {item.period}
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
