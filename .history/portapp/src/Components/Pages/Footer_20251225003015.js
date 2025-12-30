import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Twitter, Instagram, ChevronRight } from "lucide-react";

const Footer = () => {
  const quickLinks = ["Home", "About", "Experience", "Projects", "Skills", "Education", "Contact"];
  const socialIcons = [Linkedin, Github, Twitter, Instagram];

  const scrollToSection = (id) => {
    const section = document.getElementById(id.toLowerCase());
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Dariha Suresh</h3>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              Full Stack Developer passionate about creating innovative digital solutions and beautiful user experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollToSection(link)}
                  className="text-gray-400 hover:text-white text-left text-sm transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex gap-3 mb-4">
              {socialIcons.map((Icon, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.8 }}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
            <p className="text-gray-400 text-sm">darihafebi825@gmail.com</p>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">© 2025 Dariha Suresh. All rights reserved.</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-gray-400 hover:text-white text-sm flex items-center gap-2 transition-colors"
          >
            Back to top <ChevronRight size={16} className="rotate-[-90deg]" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
