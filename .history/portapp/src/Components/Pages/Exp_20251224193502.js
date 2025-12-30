import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

// Experience Data
const experiences = [
  {
    period: "2020 - 2021",
    title: "Marketing - Designer",
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

// Skills Data
const skills = [
  { name: "ML", icon: "/Images/ml.png" },
  { name: "Data Science", icon: "/Images/datascience.png" },
  { name: "Django", icon: "/Images/django.png" },
  { name: "Python", icon: "/Images/python.png" },
  { name: "JavaScript", icon: "/Images/js.png" },
  { name: "CSS", icon: "/Images/css.png" },
  { name: "HTML", icon: "/Images/html.png" },
  { name: "Bootstrap", icon: "/Images/bootstrap.png" },
  { name: "SQLite", icon: "/Images/sqlite.png" },
];

const Exp = () => {
  return (
    <section className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">

        {/* LEFT SIDE – EXPERIENCE TIMELINE */}
        <div className="lg:col-span-2 relative border-l-2 border-gray-300 pl-10 space-y-10">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative"
            >
              {/* Timeline Dot */}
              <span className="absolute -left-[52px] top-2 w-4 h-4 rounded-full bg-gray-900"></span>

              <div className="bg-white p-6 rounded-xl border shadow-sm hover:shadow-lg transition">
                <span className="text-xs font-semibold text-gray-500">
                  {exp.period}
                </span>

                <h3 className="text-lg font-bold text-gray-900 mt-1">
                  {exp.title}
                </h3>

                <p className="flex items-center gap-1 text-sm text-gray-400 mt-2">
                  <MapPin size={14} /> {exp.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* RIGHT SIDE – PROFILE + SKILLS */}
        <div className="relative">
          <div className="sticky top-24 space-y-10">

            {/* Profile Image */}
            <motion.img
              src="/Images/dari.png"
              alt="Profile"
              className="w-72 h-72 mx-auto object-cover rounded-2xl shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            />

            {/* Skills Section */}
            <div>
              <h3 className="text-center text-lg font-bold mb-6">
                Skills & Tools
              </h3>

              <div className="grid grid-cols-3 gap-6 place-items-center">
                {skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.15 }}
                    className="flex flex-col items-center gap-2"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-12 h-12 object-contain"
                    />
                    <span className="text-xs text-gray-600 font-medium">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Exp;


