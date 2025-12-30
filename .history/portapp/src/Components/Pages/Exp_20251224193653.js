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
    <section className="min-h-screen bg-gray-50 relative py-20 px-6 overflow-hidden">

      {/* 3D Background */}
      <div className="absolute inset-0 flex justify-center items-center -z-10">
        <div className="w-[95%] h-[90%] bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.2)]"></div>
      </div>

      {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

        {/* LEFT – EXPERIENCE */}
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-white p-5 rounded-xl border shadow-sm hover:shadow-lg transition"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-gray-900">
                  {exp.period}
                </span>
                <span className="flex items-center text-gray-400 text-sm gap-1">
                  <MapPin size={12} /> {exp.company}
                </span>
              </div>
              <h3 className="font-bold text-gray-900 text-lg">
                {exp.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* CENTER – SKILLS SEPARATOR BOX */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="bg-white rounded-2xl shadow-lg border px-6 py-8 space-y-6">
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.15 }}
                className="flex flex-col items-center gap-1"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-10 h-10 object-contain"
                />
                <span className="text-[10px] text-gray-500 font-medium">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT – PROFILE IMAGE */}
        <div className="flex justify-center">
          <motion.img
            src="/Images/dari.png"
            alt="Profile"
            className="w-80 h-80 object-cover rounded-2xl shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          />
        </div>

      </div>
    </section>
  );
};

export default Exp;


