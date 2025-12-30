import React from "react";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import "./Home.css";
import samplePic from ".//dari.png"; // replace with your image

const Home = () => {
  return (
    <div className="home-container">
      {/* Blob with scattered React icons */}
      <div className="blob-container">
        <motion.div
          className="blob"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          {/* Top-right scattered React icons */}
          <motion.div
            className="react-icon"
            whileHover={{ rotate: 360, scale: 1.3 }}
            transition={{ duration: 1 }}
          >
            <FaReact />
          </motion.div>
        </motion.div>
      </div>

      {/* Image */}
      <motion.img
        src={dari}
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
