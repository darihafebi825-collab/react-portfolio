import React from "react";
import { motion } from "framer-motion";
import { Calendar, GraduationCap } from "lucide-react";

const education = [
  {
    year: "2012",
    title: "High School",
    place: "City High School",
    period: "2010 – 2012",
  },
  {
    year: "2016",
    title: "B.E Software Engineering",
    place: "Engineering College",
    period: "2012 – 2016",
  },
  {
    year: "2018",
    title: "M.Sc Computer Science",
    place: "Tech University",
    period: "2016 – 2018",
  },
];

const EducationTimeline = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold flex justify-center items-center gap-3">
            <GraduationCap /> Education
          </h2>
          <p className="text-gray-600 mt-2">
            Minimal 3D outline timeline
          </p>
        </div>

        {/* Timeline */}
        <div className="relative flex justify-center gap-20">
          {/* Line */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-300" />

          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="relative z-10"
            >
              {/* Year */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2
                px-4 py-1 text-xs font-semibold
                bg-gray-50 border border-gray-900 rounded-full">
                {edu.year}
              </div>

              {/* Dot */}
              <div className="absolute top-1/2 left-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2
                bg-gray-900 rounded-full" />

              {/* Card */}
              <motion.div
                whileHover={{ y: -10 }}
                className="
                  mt-14 w-60 p-5 rounded-xl
                  border-2 border-gray-900 bg-gray-50
                  shadow-[6px_6px_0_0_rgba(0,0,0,1)]
                "
              >
                <h3 className="text-sm font-bold">{edu.title}</h3>
                <p className="text-xs text-gray-600">{edu.place}</p>
                <div className="flex items-center gap-1 text-xs text-gray-500 mt-2">
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






