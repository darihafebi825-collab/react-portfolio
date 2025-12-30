import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Twitter, Menu, X as CloseIcon } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    "Home",
    "About",
    "Experience",
    "Projects",
    "Skills",
    "Education",
    "Contact",
  ];

  const socialLinks = [
    { icon: Linkedin, url: "#" },
    { icon: Github, url: "#" },
    { icon: Twitter, url: "#" },
  ];

  // Helper: convert label to valid id
  const getIdFromLabel = (label) => label.toLowerCase().replace(/\s+/g, "");

  const scrollToSection = (label) => {
    const id = getIdFromLabel(label);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="text-5xl font-bold font-calligraphy bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent"
          >
            DS
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10 text-lg font-semibold">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="relative group text-gray-700 hover:text-gray-900 transition-colors"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-6">
            {socialLinks.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.url}
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.8 }}
                className="text-gray-700 hover:text-gray-900"
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden"
          >
            {isMobileMenuOpen ? <CloseIcon size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-4 space-y-2"
          >
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  scrollToSection(item);
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left py-3 text-lg font-medium text-gray-700 hover:text-gray-900"
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
