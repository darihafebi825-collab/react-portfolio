import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Briefcase } from "lucide-react";

// Timeline data
const experiences = [
  {
    period: "2020 - 2021",
    title: "Marketing – Designer",
    company: "Shristi Innovative",
  },
  {
    period: "2021 - 2022",
    title: "Freelancer",
    company: "Bangalore, Namic Conglob",
  },
  {
    period: "2022 - 2024",
    title: "Graphic Designer",
    company: "SAMC Agency",
  },
];

const Exp = () => {
  const [pressedCard, setPressedCard] = useState(null);

  return (
    <section className="min-h-screen bg-[#eef1f5] py-16 px-6">
      <div className="max-w-4xl mx-auto relative">

        {/* BIG TITLE WITH NEUMORPHIC ICON */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 px-10 py-5 flex items-center justify-between rounded-2xl bg-[#eef1f5]"
          style={{
            boxShadow:
              "12px 12px 24px #cfd3d8, -12px -12px 24px #ffffff",
          }}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-800">
            Experience
          </h2>

          {/* 3D Icon */}
          <motion.div
            whileTap={{ scale: 0.85, boxShadow: "inset 6px 6px 12px #cfd3d8, inset -6px -6px 12px #ffffff" }}
            className="p-4 rounded-full bg-[#eef1f5] cursor-pointer shadow-[12px_12px_24px_#cfd3d8,-12px_-12px_24px_#ffffff]"
          >
            <Briefcase size={40} className="text-gray-700" />
          </motion.div>
        </motion.div>

        {/* Timeline vertical line */}
        <div className="absolute left-1/2 top-28 bottom-16 w-1 bg-gray-300 -translate-x-1/2 rounded-full"></div>

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
              {/* Timeline dot */}
              <span
                className="
                  absolute left-1/2 top-5 w-5 h-5
                  bg-[#eef1f5]
                  rounded-full
                  shadow-[inset_3px_3px_6px_#cfd3d8,inset_-3px_-3px_6px_#ffffff]
                  -translate-x-1/2
                "
              />

              {/* Pressable Timeline card */}
              <motion.div
                onClick={() => setPressedCard(idx === pressedCard ? null : idx)}
                animate={{
                  boxShadow:
                    pressedCard === idx
                      ? "inset 6px 6px 12px #cfd3d8, inset -6px -6px 12px #ffffff"
                      : "8px 8px 16px #cfd3d8,-8px_-8px_16px #ffffff",
                }}
                whileTap={{
                  scale: 0.97,
                  boxShadow:
                    "inset 6px 6px 12px #cfd3d8, inset -6px -6px 12px #ffffff",
                }}
                className="
                  w-full sm:w-[45%]
                  bg-[#eef1f5] px-5 py-3 rounded-2xl
                  cursor-pointer
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

          {/* END – Fallen / Broken board on right */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative flex justify-end pt-2"
          >
            {/* End dot */}
            <span
              className="
                absolute left-1/2 -top-3 w-5 h-5
                bg-[#eef1f5]
                rounded-full
                shadow-[inset_3px_3px_6px_#cfd3d8,inset_-3px_-3px_6px_#ffffff]
                -translate-x-1/2
              "
            />

            {/* Fallen board */}
            <motion.div
              whileHover={{ rotate: -1, y: -2, scale: 1.02 }}
              className="
                px-8 py-2
                border-2 border-dashed border-gray-400
                rounded-2xl
                bg-[#eef1f5]
                shadow-[12px_12px_24px_#cfd3d8,-12px_-12px_24px_#ffffff]
                transform rotate-[-5deg] origin-bottom-right
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






