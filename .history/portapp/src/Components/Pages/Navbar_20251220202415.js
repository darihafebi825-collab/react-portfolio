import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Menu, X } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = ["Home", "About", "Experience", "Projects", "Skills", "Education", "Contact"];

  return (
    <motion.nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="logo">JD</div>

        <div className="nav-links">
          {navItems.map(item => (
            <button
              key={item}
              onClick={() =>
                document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {item}
            </button>
          ))}
        </div>

        <div className="socials">
          <Linkedin />
          <Github />
          <Twitter />
        </div>

        <button className="mobile-btn" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
