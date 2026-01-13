import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Education", id: "education" },
    { label: "Contact", id: "contact" },
  ];

  // Scroll listener for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const findSectionByHeading = (text) => {
    const headings = document.querySelectorAll("h1, h2, h3");
    for (let h of headings) {
      if (h.textContent.trim().toLowerCase() === text.toLowerCase()) {
        return h.closest("section") || h.closest("div");
      }
    }
    return null;
  };

  const scrollToSection = (id, label) => {
    let section = document.getElementById(id);

    if (!section) {
      section = findSectionByHeading(label);
    }

    if (!section) return;

    const navbarOffset = 90;
    const y =
      section.getBoundingClientRect().top +
      window.pageYOffset -
      navbarOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
    
    // Close mobile menu on click
    setIsOpen(false);
  };

  // Close mobile menu on outside click
  useEffect(() => {
    const closeMenu = () => {
      setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener("click", closeMenu);
    }

    return () => document.removeEventListener("click", closeMenu);
  }, [isOpen]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white shadow-md'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* 🔥 LOGO */}
        <div className="text-3xl font-bold tracking-wide select-none">
          <span className="font-[cursive] text-gray-900">DS</span>
        </div>

        {/* 🔗 DESKTOP NAV LINKS */}
        <ul className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <button
                onClick={() => scrollToSection(item.id, item.label)}
                className="font-medium text-gray-700 hover:text-black transition-all duration-200 hover:scale-105"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* 🌐 SOCIAL ICONS & MOBILE TOGGLE */}
        <div className="flex items-center gap-5">
          <a
            href="https://www.linkedin.com/in/dariha-suresh-262a933a0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600 transition-all duration-200 hover:scale-110 text-xl"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/darihafebi825-collab"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-black transition-all duration-200 hover:scale-110 text-xl"
          >
            <FaGithub />
          </a>

          {/* 📱 MOBILE TOGGLE BUTTON */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(!isOpen);
            }}
            className="md:hidden text-gray-700 hover:text-black transition-all duration-200 text-2xl p-1"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* 📱 MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-96 opacity-100 visible"
            : "max-h-0 opacity-0 invisible"
        }`}
      >
        <ul className="bg-white/95 backdrop-blur-md border-t border-gray-200 py-4 px-6 space-y-3">
          {navItems.map((item) => (
            <li key={item.label}>
              <button
                onClick={() => scrollToSection(item.id, item.label)}
                className="w-full text-left font-medium text-gray-700 hover:text-black py-2 px-4 rounded-lg hover:bg-gray-100 transition-all duration-200 text-lg"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
