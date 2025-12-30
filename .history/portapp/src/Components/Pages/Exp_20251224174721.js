import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const experiences = [
  { period: "2020 - 2021", title: "Marketing - Designer", company: "Shristi Innovative" },
  { period: "2021 - 2022", title: "Freelancer", company: "Bangalore, Namic Conglob" },
  { period: "2022 - 2024", title: "Graphic Designer", company: "SAMC Agency" },
];

const skills = ["Ps", "Ai", "Lr", "Figma", "Ae", "Sketch"];

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
                  {/* Circle Marker */}
                  <div className="w-8 h-8 rounded-full bg-gray-900 border-4 border-white shadow-lg"></div>
                  {/* Connector Line */}
                  {idx < experiences.length - 1 && (
                    <div className="absolute top-3 left-full w-24 h-1 bg-gray-300"></div>
                  )}
                  {/* Label */}
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

        {/* Right Side: Plain Image + Floating Skill Icons */}
        <div className="relative flex justify-center items-center min-h-[500px]">
          {/* Plain Image */}
          <motion.img
            src="/path-to-your-image.jpg"  // <-- replace with your image path
            alt="Profile"
            className="w-64 h-64 rounded-full object-cover"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />

          {/* Floating Skill Icons */}
          {skills.map((skill, idx) => {
            const angle = (idx / skills.length) * 360;
            const radius = 150;
            const radians = (angle * Math.PI) / 180;
            const x = radius * Math.cos(radians);
            const y = radius * Math.sin(radians);
            return (
              <motion.div
                key={idx}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, x, y }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.5 + idx * 0.2 }}
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="absolute bg-gray-900 text-white px-5 py-3 rounded-xl font-bold text-lg shadow-lg cursor-pointer"
              >
                {skill}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Exp;

