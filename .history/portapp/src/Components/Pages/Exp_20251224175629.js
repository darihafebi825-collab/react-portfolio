import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

// Experiences data
const experiences = [
  { period: "2020 - 2021", title: "Marketing - Designer", company: "Shristi Innovative" },
  { period: "2021 - 2022", title: "Freelancer", company: "Bangalore, Namic Conglob" },
  { period: "2022 - 2024", title: "Graphic Designer", company: "SAMC Agency" },
];

// Skills with corresponding icon paths
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
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

        {/* Left Side: Roadmap + Experience Cards */}
        <div className="space-y-12">

          {/* Horizontal Roadmap */}
          <div className="overflow-x-auto">
            <div className="flex items-center gap-12 min-w-max">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2, duration: 0.6 }}
                  className="flex flex-col items-center relative"
                >
                  <div className="w-8 h-8 rounded-full bg-gray-900 border-4 border-white shadow-lg"></div>
                  {idx < experiences.length - 1 && (
                    <div className="absolute top-3 left-full w-24 h-1 bg-gray-300"></div>
                  )}
                  <span className="mt-3 text-gray-700 font-medium text-sm text-center">
                    {exp.period}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience Cards */}
          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, boxShadow: "0 15px 25px rgba(0,0,0,0.2)" }}
                transition={{ type: "spring", stiffness: 120, damping: 15 }}
                className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm cursor-pointer"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-gray-900">{exp.period}</span>
                  <span className="flex items-center text-gray-400 text-sm gap-1">
                    <MapPin size={12} /> {exp.company}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">{exp.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side: Big Image + Floating Skill Icons */}
        <div className="relative flex justify-center items-center min-h-[600px]">

          {/* Big Profile Image: background-less, raw image */}
          <motion.img
            src="/Images/dari.png"
            alt="Profile"
            className="w-96 h-96 object-cover" // removed rounded-full, border, shadow
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />

          {/* Floating Skill Icons: scattered outside image */}
          {skills.map((skill, idx) => {
            const radius = 200 + Math.random() * 100;
            const angle = Math.random() * 2 * Math.PI;
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);

            return (
              <motion.img
                key={idx}
                src={skill.icon}
                alt={skill.name}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, x, y }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.5 + idx * 0.1 }}
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="absolute w-12 h-12 object-contain cursor-pointer"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Exp;






