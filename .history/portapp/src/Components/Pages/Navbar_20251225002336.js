import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Controls for continuous rotation
  const controls = useAnimation();
  useEffect(() => {
    controls.start({
      rotateY: 360,
      transition: { repeat: Infinity, duration: 6, ease: "linear" },
    });
  }, [controls]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        {/* 3D Rotating Logo */}
        <motion.div
          animate={controls}
          className="text-5xl font-calligraphy font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent"
          style={{ perspective: 1000 }} // 3D perspective
        >
          DS
        </motion.div>

        {/* Placeholder for menu */}
        <div className="hidden md:flex space-x-6 font-semibold text-lg">
          <button className="text-gray-700 hover:text-gray-900">Home</button>
          <button className="text-gray-700 hover:text-gray-900">About</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

