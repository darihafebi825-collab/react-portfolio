import React from "react";

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

    // 🔥 fallback if ID does not exist
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
      <div className="max-w-7xl mx-auto px-6">
        <ul className="flex justify-center gap-8 py-4">
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
      </div>
    </nav>
  );
};

export default Navbar;


