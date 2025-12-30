import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const Exp = () => {
  // Timeline dots info
  const timeline = [
    { label: "2020 - 2021" },
    { label: "2021 - 2022" },
    { label: "2022 - 2024" },
  ];

  return (
    <section className="min-h-screen bg-[#eef1f5] py-20 px-6 relative">
      <div className="max-w-4xl mx-auto relative z-10">

        {/* Title with icon */}
        <div className="flex justify-between items-start mb-12">
          {/* Left end: Title */}
          <div>
            <h2 className="text-5xl font-extrabold text-gray-800 mb-2">
              Experience
            </h2>
            <p className="text-gray-500 font-medium">
              A journey through my professional life
            </p>
          </div>

          {/* Right end: Icon */}
          <motion.div
            className="p-4 rounded-full bg-[#eef1f5] shadow-[12px_12px_24px_#cfd3d8,-12px_-12px_24px_#ffffff]"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95, boxShadow: "inset 6px 6px 12px #cfd3d8, inset -6px -6px 12px #ffffff" }}
          >
            <Briefcase size={40} className="text-gray-700" />
          </motion.div>
        </div>

        {/* Timeline vertical line */}
        <motion.div
          className="absolute left-1/2 top-28 bottom-20 w-1 bg-gray-300 -translate-x-1/2 rounded-full"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />

        {/* Timeline dots */}
        <div className="relative space-y-28">
          {timeline.map((dot, idx) => (
            <motion.span
              key={idx}
              className="absolute left-1/2 w-6 h-6 bg-[#eef1f5] rounded-full shadow-[inset_8px_8px_16px_#cfd3d8,inset_-8px_-8px_16px_#ffffff] -translate-x-1/2 flex items-center justify-center text-xs font-bold text-gray-500"
              style={{ top: `${idx * 120}px` }}
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, delay: idx * 0.2 }}
            >
              {dot.label.split("-")[0]}{/* Optional: show year */}
            </motion.span>
          ))}

          {/* End – Fallen board on right */}
          <motion.div
            animate={{ rotate: [-5, -3, -5] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute right-0 top-[380px] px-6 py-3 border-2 border-dashed border-gray-400 rounded-2xl bg-[#eef1f5] shadow-[18px_18px_36px_#cfd3d8,-18px_-18px_36px_#ffffff] transform origin-bottom-right"
          >
            <span className="text-sm uppercase tracking-widest font-bold text-gray-700">
              Adventure Awaits
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Exp;









