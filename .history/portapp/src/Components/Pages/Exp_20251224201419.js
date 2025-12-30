import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  { label: "2020 - 2021" },
  { label: "2021 - 2022" },
  { label: "2022 - 2024" },
];

const Exp = () => {
  return (
    <section className="min-h-screen bg-[#eef1f5] py-16 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10 flex">

        {/* LEFT END – Title and rotating icon */}
        <div className="flex flex-col items-start mr-12">
          <motion.div
            className="p-6 rounded-full bg-[#eef1f5] shadow-[18px_18px_36px_#cfd3d8,-18px_-18px_36px_#ffffff] mb-6"
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          >
            <Briefcase size={60} className="text-gray-700" />
          </motion.div>
          <h2 className="text-5xl font-extrabold text-gray-800 mb-2">
            Experience
          </h2>
          <p className="text-gray-500 font-medium max-w-xs">
            A journey through my professional life showcasing key milestones
          </p>
        </div>

        {/* Timeline vertical line */}
        <div className="relative flex-1">
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-300 -translate-x-1/2 rounded-full"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />

          {/* Timeline dots */}
          <div className="relative space-y-28">
            {experiences.map((dot, idx) => (
              <motion.span
                key={idx}
                className="absolute left-1/2 w-6 h-6 bg-[#eef1f5] rounded-full shadow-[inset_8px_8px_16px_#cfd3d8,inset_-8px_-8px_16px_#ffffff] -translate-x-1/2 flex items-center justify-center text-xs font-bold text-gray-500"
                style={{ top: `${idx * 120}px` }}
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, delay: idx * 0.2 }}
              >
                {dot.label.split("-")[0]}
              </motion.span>
            ))}

            {/* End – Fallen / Broken board */}
            <motion.div
              animate={{ rotate: [-5, -3, -5] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="absolute right-0 top-[380px] px-8 py-3 border-2 border-dashed border-gray-400 rounded-2xl bg-[#eef1f5] shadow-[18px_18px_36px_#cfd3d8,-18px_-18px_36px_#ffffff, 2px_2px_6px_rgba(0,0,0,0.1), -2px_-2px_6px_rgba(255,255,255,0.5)] transform origin-bottom-right"
            >
              <span className="text-sm md:text-base uppercase tracking-widest font-bold text-gray-700">
                Adventure Awaits
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exp;









