import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { SiXing } from "react-icons/si";
import "./Nav.css"; // Make sure this CSS file is created

const Navbar = () => {
  const navLinks = ["Home", "About", "Projects", "Contact",""];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">MyLogo</div>

        {/* Nav Links */}
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link} className="nav-item">
              <a href={`#${link.toLowerCase()}`} className="nav-link">
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="social-icons">
          <a href="https://github.com" target="_blank" className="icon">
            <FaGithub />
          </a>
          <a href="https://instagram.com" target="_blank" className="icon">
            <FaInstagram />
          </a>
          <a href="https://xing.com" target="_blank" className="icon">
            <SiXing />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
