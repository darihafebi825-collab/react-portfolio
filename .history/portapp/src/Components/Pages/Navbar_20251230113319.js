import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Education", id: "education" },
    { label: "Contact", id: "contact" },
  ];

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
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">

        {/* 🔥 LOGO */}
        <div className="text-3xl font-bold tracking-wide select-none">
          <span className="font-[cursive] text-gray-900">DS</span>
        </div>

        {/* 🔗 NAV LINKS */}
        <ul className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <button
                onClick={() => scrollToSection(item.id, item.label)}
                className="font-medium text-gray-700 hover:text-black transition"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* 🌐 SOCIAL ICONS */}
        <div className="flex items-center gap-5">
          <a
            href="https://www.linkedin.com/in/YOUR_LINKEDIN"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600 transition text-xl"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/darihafebi825-collab"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-black transition text-xl"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



