import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Send, ChevronRight } from "lucide-react";

const Home = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-white to-pink-100 relative overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-pink-900/5"
          style={{
            width: Math.random() * 300 + 50,
            height: Math.random() * 300 + 50,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * 50 - 25],
            x: [0, Math.random() * 50 - 25],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6">
            <div className="w-32 h-32 mx-auto bg-pink-800 rounded-full flex items-center justify-center overflow-hidden shadow-xl">
              <img
                src="/Images/dari.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-pink-800 via-pink-600 to-pink-800 bg-clip-text text-transparent">
              Dariha Suresh
            </span>
          </h1>

          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {[
              "Full Stack Developer",
              "Machine Learning Engineer",
              "Problem Solver",
            ].map((role, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                className="px-4 py-2 bg-white shadow-md rounded-full text-sm font-medium text-pink-700"
              >
                {role}
              </motion.span>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl text-pink-600 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            Passionate about creating elegant solutions to complex problems.
            Specialized in building scalable web applications with modern
            technologies and beautiful user experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 bg-pink-900 text-white rounded-full font-semibold shadow-lg flex items-center gap-2"
            >
              Let's Connect <Send size={18} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 bg-white text-pink-900 rounded-full font-semibold shadow-lg border-2 border-pink-200 flex items-center gap-2"
            >
              View Projects <ChevronRight size={18} />
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;


