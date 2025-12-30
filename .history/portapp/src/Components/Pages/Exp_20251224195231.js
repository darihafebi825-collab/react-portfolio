import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

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

        {/* Timeline vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-300 -translate-x-1/2 rounded-full"></div>

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
                  shadow-[inset_2px_2px_4px_#cfd3d8,inset_-2px_-2px_4px_#ffffff]
                  -translate-x-1/2
                "
              />

              {/* Timeline card */}
              <div
                className="
                  w-full sm:w-[45%]
                  bg-[#eef1f5] p-6 rounded-2xl
                  shadow-[8px_8px_16px_#cfd3d8,-8px_-8px_16px_#ffffff]
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

          {/* END BROKEN BOARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center pt-10"
          >
            {/* End dot */}
            <span
              className="
                absolute left-1/2 -top-3 w-5 h-5
                bg-[#eef1f5]
                rounded-full
                shadow-[inset_2px_2px_4px_#cfd3d8,inset_-2px_-2px_4px_#ffffff]
                -translate-x-1/2
              "
            />

            {/* Broken board */}
            <div
              className="
                px-10 py-4
                border-2 border-dashed border-gray-400
                rounded-xl
                bg-[#eef1f5]
                shadow-[6px_6px_12px_#cfd3d8,-6px_-6px_12px_#ffffff]
              "
            >
              <span className="text-sm uppercase tracking-widest text-gray-600 font-semibold">
                Adventure Awaits
              </span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Exp;



