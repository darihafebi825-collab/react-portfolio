import React from "react";
import "./Home.css";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="home-container">
      {/* Floating circles */}
      <div className="floating-circle small" style={{ top: "10%", left: "20%" }}></div>
      <div className="floating-circle medium" style={{ top: "30%", left: "70%" }}></div>
      <div className="floating-circle large" style={{ top: "50%", left: "40%" }}></div>
      <div className="floating-circle small" style={{ top: "70%", left: "80%" }}></div>
      <div className="floating-circle medium" style={{ top: "20%", left: "50%" }}></div>

      {/* Hero Section */}
      <motion.section
        className="hero"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Welcome to UI/UX Component Library</h1>
        <p>50+ reusable components for React apps, free & premium, with modern animations.</p>
        <button className="cta-btn">Explore Components</button>
      </motion.section>

      {/* Components Showcase */}
      <section className="components-showcase">
        <motion.div whileHover={{ scale: 1.05 }} className="component-card">
          <h3>Navigation</h3>
          <p>Navbar, Sidebar, Tabs with animations</p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="component-card">
          <h3>Buttons</h3>
          <p>Primary, Secondary, Toggle, Floating Action Buttons</p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="component-card">
          <h3>Cards</h3>
          <p>Info Cards, Product Cards, Profile Cards</p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="component-card">
          <h3>Modals & Popups</h3>
          <p>Simple, Confirmation, Tooltip, Toast Notifications</p>
        </motion.div>
      </section>

      {/* CTA Footer */}
      <motion.section
        className="cta-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h2>Start Using Our Components Today</h2>
        <button className="cta-btn">Get Started</button>
      </motion.section>
    </div>
  );
};

export default Home;

