import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { SiXing } from "react-icons/si";

const navLinks = ["Home", "About", "Projects", "Contact"];

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 left-0 bg-white/20 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-900 font-sans cursor-pointer">
          MyLogo
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-8 font-sans text-gray-900">
          {navLinks.map((link) => (
            <motion.li
              key={link}
              className="cursor-pointer relative"
              whileHover={{ scale: 1.1, rotateX: 15 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="relative z-10">{link}</span>
              <motion.div
                className="absolute bottom-0 left-0 w-full h-1 bg-gray-900 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="flex space-x-4 text-gray-900 text-xl">
          <motion.a
            href="https://github.com"
            target="_blank"
            whileHover={{ scale: 1.2, rotateY: 180 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://instagram.com"
            target="_blank"
            whileHover={{ scale: 1.2, rotateY: 180 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaInstagram />
          </motion.a>
          <motion.a
            href="https://xing.com"
            target="_blank"
            whileHover={{ scale: 1.2, rotateY: 180 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <SiXing />
          </motion.a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
