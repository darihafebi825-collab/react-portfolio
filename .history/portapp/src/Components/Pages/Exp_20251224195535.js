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
    <section className="min-h-screen bg-[#eef1f5] py-16 px-6">
      <div className="max-w-4xl mx-auto relative">

        {/* BROKEN TITLE BOX */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="
            mb-16 px-6 py-3
            flex items-center justify-between
            border-2 border-dashed border-gray-400
            rounded-xl
            bg-[#eef1f5]
            shadow-[5px_5px_12px_#cfd3d8,-5px_-5px_12px_#ffffff]
          "
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Experience
          </h2>
          <Briefcase size={22} className="text-gray-700" />
        </motion.div>

        {/* Timeline vertical line */}
        <div className="absolute left-1/2 top-28 bottom-16 w-1 bg-gray-300 -translate-x-1/2 rounded-full"></div>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className={`relative flex ${
                idx % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              {/* Timeline dot */}
              <span
                className="
                  absolute left-1/2 top-6 w-4 h-4
                  bg-[#eef1f5]
                  rounded-full
                  shadow-[inset_2px_2px_4px_#cfd3d8,inset_-2px_-2px_4px_#ffffff]
                  -translate-x-1/2
                "
              />

              {/* Timeline card */}
              <div
                className="
                  w-full sm:w-[42%]
                  bg-[#eef1f5] px-4 py-3 rounded-xl
                  shadow-[8px_8px_16px_#cfd3d8,-8px_-8px_16px_#ffffff]
                "
              >
                <span className="text-[11px] font-semibold text-gray-500">
                  {exp.period}
                </span>

                <h3 className="text-sm font-bold text-gray-800 leading-tight mt-0.5">
                  {exp.title}
                </h3>

                <p className="flex items-center gap-1 text-[11px] text-gray-500 mt-1">
                  <MapPin size={12} />
                  {exp.company}
                </p>
              </div>
            </motion.div>
          ))}

          {/* END – COMPACT BROKEN BOARD */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="relative flex justify-center pt-6"
          >
            {/* End dot */}
            <span
              className="
                absolute left-1/2 -top-3 w-4 h-4
                bg-[#eef1f5]
                rounded-full
                shadow-[inset_2px_2px_4px_#cfd3d8,inset_-2px_-2px_4px_#ffffff]
                -translate-x-1/2
              "
            />

            {/* Broken board */}
            <motion.div
              whileHover={{ y: -4 }}
              className="
                px-8 py-3
                border-2 border-dashed border-gray-400
                rounded-xl
                bg-[#eef1f5]
                shadow-[10px_10px_20px_#cfd3d8,-10px_-10px_20px_#ffffff]
              "
            >
              <span className="text-xs uppercase tracking-widest font-bold text-gray-700">
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


