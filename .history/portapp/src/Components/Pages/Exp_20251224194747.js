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
    <section className="min-h-screen bg-[#eef1f5] py-20 px-6">
      <div className="max-w-4xl mx-auto relative">

        {/* Timeline vertical line */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-300 -translate-x-1/2"></div>

        <div className="space-y-16">
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
              <span className="absolute left-1/2 top-6 w-5 h-5 bg-gray-800 rounded-full -translate-x-1/2 border-4 border-[#eef1f5]"></span>

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
        </div>
      </div>
    </section>
  );
};

export default Exp;



