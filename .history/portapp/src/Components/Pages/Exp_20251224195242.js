import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

// Experiences data
const experiences = [
  { period: "2020 - 2021", title: "Marketing - Designer", company: "Shristi Innovative" },
  { period: "2021 - 2022", title: "Freelancer", company: "Bangalore, Namic Conglob" },
  { period: "2022 - 2024", title: "Graphic Designer", company: "SAMC Agency" },
];

// Skills data
const skills = [
  { name: "ML", icon: "/Images/ml.png" },
  { name: "DataScience", icon: "/Images/datascience.png" },
  { name: "Django", icon: "/Images/django.png" },
  { name: "Python", icon: "/Images/python.png" },
  { name: "JS", icon: "/Images/js.png" },
  { name: "CSS", icon: "/Images/css.png" },
  { name: "HTML", icon: "/Images/html.png" },
  { name: "Bootstrap", icon: "/Images/bootstrap.png" },
  { name: "SQLite", icon: "/Images/sqlite.png" },
];

const Exp = () => {
  return (
    <section className="min-h-screen bg-[#eef1f5] py-20 px-6">

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">

        {/* LEFT – NEUMORPHIC EXPERIENCE */}
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="
                bg-[#eef1f5] p-6 rounded-2xl
                shadow-[8px_8px_16px_#cfd3d8,-8px_-8px_16px_#ffffff]
                hover:shadow-[inset_6px_6px_12px_#cfd3d8,inset_-6px_-6px_12px_#ffffff]
                transition
              "
            >
              <span className="text-xs font-semibold text-gray-500">
                {exp.period}
              </span>

              <h3 className="text-lg font-bold text-gray-800 mt-1">
                {exp.title}
              </h3>

              <p className="flex items-center gap-1 text-sm text-gray-500 mt-2">
                <MapPin size={14} /> {exp.company}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CENTER – PROFILE (NEUMORPHIC FRAME) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            mx-auto p-6 rounded-full
            bg-[#eef1f5]
            shadow-[12px_12px_24px_#cfd3d8,-12px_-12px_24px_#ffffff]
          "
        >
          <img
            src="/Images/dari.png"
            alt="Profile"
            className="w-72 h-72 object-cover rounded-full"
          />
        </motion.div>

        {/* RIGHT – NEUMORPHIC SKILLS */}
        <div className="grid grid-cols-3 gap-6 justify-items-center">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              whileHover={{ scale: 1.15 }}
              className="
                w-20 h-20 rounded-2xl flex flex-col items-center justify-center gap-1
                bg-[#eef1f5]
                shadow-[6px_6px_12px_#cfd3d8,-6px_-6px_12px_#ffffff]
              "
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-8 h-8 object-contain"
              />
              <span className="text-[10px] text-gray-600 font-medium">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Exp;


