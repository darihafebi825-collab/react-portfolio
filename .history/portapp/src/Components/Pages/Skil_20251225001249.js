import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Cpu } from "lucide-react";

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  const skillCards = [
    {
      title: "Web Development",
      icon: Code,
      skills: {
        React: 85,
        HTML: 90,
        CSS: 88,
        Django: 70,
        JavaScript: 80,
      },
    },
    {
      title: "AI / ML",
      icon: Cpu,
      skills: {
        Python: 90,
        TensorFlow: 75,
        ScikitLearn: 80,
        OpenCV: 70,
        Keras: 65,
      },
    },
  ];

  return (
    <section className="py-20 bg-gray-50 relative">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-black mb-4 text-gray-800">TECH STACK</h2>
        <p className="text-gray-600 mb-10">Click a card to see skill chart</p>

        <div className="flex justify-center gap-8 flex-wrap">
          {skillCards.map((card, idx) => {
            const Icon = card.icon;
            const isActive = activeSkill === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white shadow-lg rounded-2xl p-8 w-64 cursor-pointer border border-gray-200"
                onClick={() => setActiveSkill(isActive ? null : idx)}
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center shadow">
                    <Icon size={32} className="text-gray-800" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{card.title}</h3>
                  <p className="text-gray-500 text-sm">Click to view skills</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Modal / Chart */}
        <AnimatePresence>
          {activeSkill !== null && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/50 z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveSkill(null)}
              />

              <motion.div
                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-2xl shadow-2xl w-[90%] max-w-lg z-50"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
              >
                <button
                  className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
                  onClick={() => setActiveSkill(null)}
                >
                  ✕
                </button>

                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  {skillCards[activeSkill].title} Skills
                </h3>

                <Bar
                  data={{
                    labels: Object.keys(skillCards[activeSkill].skills),
                    datasets: [
                      {
                        label: "Proficiency (%)",
                        data: Object.values(skillCards[activeSkill].skills),
                        backgroundColor: "rgba(203, 213, 225, 0.6)", // pale color
                        borderColor: "rgba(203, 213, 225, 1)",
                        borderWidth: 1,
                      },
                    ],
                  }}
                  options={{
                    scales: {
                      y: {
                        beginAtZero: true,
                        max: 100,
                      },
                    },
                    plugins: {
                      legend: {
                        display: false,
                      },
                    },
                    responsive: true,
                    maintainAspectRatio: false,
                  }}
                  height={300}
                />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;
