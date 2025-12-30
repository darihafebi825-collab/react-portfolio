import React from "react";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Blob with floating React icon */}
      <motion.div
        className="blob-container"
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 1, rotate: 15 }}
        transition={{ type: "spring", stiffness: 50, duration: 1 }}
      >
        <motion.div
          className="blob"
          animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
        >
          <motion.div
            className="react-icon"
            whileHover={{ rotate: 360, scale: 1.3 }}
            transition={{ duration: 1 }}
          >
            <FaReact />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Profile Image from public folder */}
      <motion.img
        src="/images/dari.png" // public/images/dari.png
        alt="Profile"
        className="home-pic"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, type: "spring" }}
      />

      {/* Text Content */}
      <motion.div
        className="home-text"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <h1>Hello, I’m Dari 👋</h1>
        <p>
          I build <span className="highlight">modern React applications</span> with
          animations and clean Swiss-style design.
        </p>
      </motion.div>

      {/* Unique CTA */}
      <motion.div
        className="cta"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95, rotate: -5 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <span className="cta-text">🚀 Explore My Projects</span>
      </motion.div>
    </div>
  );
};

export default Home;
