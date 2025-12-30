import React from "react";
import { motion } from "framer-motion";
import { MapPin, Briefcase } from "lucide-react";

// Timeline data
const experiences = [
  {
    period: "April-2024",
    title: "React-Developer",
    company: "Shristi Innovative",
  },
  {
    period: "Mar-Jun 2025",
    title: "AI-Engineer",
    company: "M , ",
  },
  {
    period: "Dec-2025",
    title: "ML-Engineer",
    company: "Zaalima Development pvt ltd,Bangalore",
  },
];

const Exp = () => {
  return (
    <section className="min-h-screen bg-[#eef1f5] py-16 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">

        {/* BIG TITLE WITH NEUMORPHIC ICON */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 px-10 py-5 flex items-center justify-between rounded-2xl bg-[#eef1f5]"
          style={{
            boxShadow:
              "18px 18px 36px #cfd3d8, -18px -18px 36px #ffffff",
          }}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-800">
            Experience
          </h2>

          <motion.div
            className="p-4 rounded-full bg-[#eef1f5] shadow-[18px_18px_36px_#cfd3d8,-18px_-18px_36px_#ffffff]"
          >
            <Briefcase size={40} className="text-gray-700" />
          </motion.div>
        </motion.div>

        {/* Timeline vertical line with pulse animation */}
        <motion.div
          className="absolute left-1/2 top-28 bottom-16 w-1 bg-gray-300 -translate-x-1/2 rounded-full"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />

        {/* Timeline cards */}
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`relative flex ${
                idx % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              {/* Timeline dot with bounce */}
              <motion.span
                className="
                  absolute left-1/2 top-5 w-5 h-5
                  bg-[#eef1f5]
                  rounded-full
                  shadow-[inset_6px_6px_12px_#cfd3d8,inset_-6px_-6px_12px_#ffffff]
                  -translate-x-1/2
                "
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, delay: idx * 0.3 }}
              />

              {/* Timeline card – stronger permanent inset neuromorphism */}
              <motion.div
                animate={{
                  boxShadow:
                    "inset 8px 8px 16px #cfd3d8, inset -8px -8px 16px #ffffff, inset 2px 2px 6px rgba(0,0,0,0.1), inset -2px -2px 6px rgba(255,255,255,0.5)",
                  y: [0, -3, 0],
                }}
                transition={{ repeat: Infinity, duration: 3, delay: idx * 0.2 }}
                className="
                  w-full sm:w-[45%]
                  bg-[#eef1f5] px-5 py-3 rounded-2xl
                  cursor-default
                  transition-all duration-200
                "
              >
                <span className="text-xs font-semibold text-gray-500">
                  {exp.period}
                </span>

                <h3 className="text-lg font-bold text-gray-800 mt-1">
                  {exp.title}
                </h3>

                <p className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                  <MapPin size={14} />
                  {exp.company}
                </p>
              </motion.div>
            </motion.div>
          ))}

          {/* END – Fallen / Broken board with gentle sway */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative flex justify-end pt-2"
          >
            {/* End dot */}
            <motion.span
              className="
                absolute left-1/2 -top-3 w-5 h-5
                bg-[#eef1f5]
                rounded-full
                shadow-[inset_6px_6px_12px_#cfd3d8,inset_-6px_-6px_12px_#ffffff]
                -translate-x-1/2
              "
              animate={{ y: [0, -4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />

            {/* Fallen board */}
            <motion.div
              animate={{ rotate: [-5, -3, -5] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              whileHover={{ scale: 1.02 }}
              className="
                px-8 py-2
                border-2 border-dashed border-gray-400
                rounded-2xl
                bg-[#eef1f5]
                shadow-[18px_18px_36px_#cfd3d8,-18px_-18px_36px_#ffffff, 2px_2px_6px_rgba(0,0,0,0.1), -2px_-2px_6px_rgba(255,255,255,0.5)]
                transform origin-bottom-right
              "
            >
              <span className="text-sm md:text-base uppercase tracking-widest font-bold text-gray-700">
                Adventure Awaits
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Exp;








