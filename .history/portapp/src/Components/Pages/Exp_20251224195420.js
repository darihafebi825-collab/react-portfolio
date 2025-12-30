import React from "react";
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
  return (
    <section className="min-h-screen bg-[#eef1f5] py-24 px-6">
      <div className="max-w-4xl mx-auto relative">

        {/* BROKEN TITLE BOX */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            mb-28 px-8 py-5
            flex items-center justify-between
            border-2 border-dashed border-gray-400
            rounded-xl
            bg-[#eef1f5]
            shadow-[6px_6px_14px_#cfd3d8,-6px_-6px_14px_#ffffff]
          "
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Experience
          </h2>
          <Briefcase size={28} className="text-gray-700" />
        </motion.div>

        {/* Timeline vertical line */}
        <div className="absolute left-1/2 top-40 bottom-20 w-1 bg-gray-300 -translate-x-1/2 rounded-full"></div>

        <div className="space-y-20">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`relative flex ${
                idx % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              {/* Timeline dot */}
              <span
                className="
                  absolute left-1/2 top-8 w-5 h-5
                  bg-[#eef1f5]
                  rounded-full
                  shadow-[inset_3px_3px_6px_#cfd3d8,inset_-3px_-3px_6px_#ffffff]
                  -translate-x-1/2
                "
              />

              {/* Timeline card */}
              <div
                className="
                  w-full sm:w-[45%]
                  bg-[#eef1f5] p-6 rounded-2xl
                  shadow-[10px_10px_20px_#cfd3d8,-10px_-10px_20px_#ffffff]
                "
              >
                <span className="text-xs font-semibold text-gray-500">
                  {exp.period}
                </span>

                <h3 className="text-lg font-bold text-gray-800 mt-1">
                  {exp.title}
                </h3>

                <p className="flex items-center gap-1 text-sm text-gray-500 mt-2">
                  <MapPin size={14} />
                  {exp.company}
                </p>
              </div>
            </motion.div>
          ))}

          {/* END – 3D BROKEN BOARD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center pt-12"
          >
            {/* End dot */}
            <span
              className="
                absolute left-1/2 -top-4 w-6 h-6
                bg-[#eef1f5]
                rounded-full
                shadow-[inset_3px_3px_6px_#cfd3d8,inset_-3px_-3px_6px_#ffffff]
                -translate-x-1/2
              "
            />

            {/* 3D Broken Board */}
            <motion.div
              whileHover={{ y: -6, rotate: -1 }}
              className="
                relative px-12 py-5
                border-2 border-dashed border-gray-400
                rounded-2xl
                bg-[#eef1f5]
                shadow-[12px_12px_24px_#cfd3d8,-12px_-12px_24px_#ffffff]
                before:absolute before:inset-0 before:rounded-2xl
                before:shadow-[inset_4px_4px_8px_#cfd3d8,inset_-4px_-4px_8px_#ffffff]
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

