import React, { useEffect, useRef } from "react";
import "./Projects.css";
import portImg from "../../Images/port.png";
import resImg from "../../Images/res.png";
import interiorImg from "../../Images/interior.png";
import posterImg from "../../Images/poster.png";
import phishImg from "../../Images/phish.png";

// 🔗 LINKS
const CODE_LINK = "https://github.com/darihafebi825-collab/Portfolio.git";
const PREVIEW_LINK = "https://darihafebi825-collab.github.io/Portfolio/";

const projects = [
  {
    // src: "https://images.unsplash.com/photo-1610484826967-09c5720778d2?auto=format&fit=crop&w=800&q=80",
    title: "Figma Project 1",
    domain: "Mobile App",
  },
  {
    // src: "https://images.unsplash.com/photo-1605902711622-cfb43c443f82?auto=format&fit=crop&w=800&q=80",
    title: "Figma Project 2",
    domain: "Mobile App",
  },
  {
    // src: "https://images.unsplash.com/photo-1623051837466-55f6e79c8450?auto=format&fit=crop&w=800&q=80",
    title: "AI Project 1",
    domain: "AI / ML",
  },
  {
    // src: phishImg,
    title: "Phishx - Phishing Detector",
    domain: "Fullstack",
  },
  {
    src: posterImg,
    title: "Web Project-1 (HTML, CSS)",
    domain: "Frontend",
  },
  {
    src: interiorImg,
    title: "Web Project-2 (HTML, CSS)",
    domain: "Frontend",
  },
  {
    src: resImg,
    title: "Web Project-3 (HTML, CSS, JS)",
    domain: "Frontend",
  },
  {
    src: portImg,
    title: "React Project",
    domain: "Frontend",
  },
];

const Projects = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const rotation = useRef(0);
  const startX = useRef(0);
  const isDragging = useRef(false);

  useEffect(() => {
    const radius = 400;
    const total = projects.length;
    const angleStep = 360 / total;

    const updateRotation = () => {
      cardsRef.current.forEach((card, i) => {
        const angle = i * angleStep + rotation.current;
        const rad = (angle * Math.PI) / 180;
        const x = Math.sin(rad) * radius;
        const z = Math.cos(rad) * radius;

        const visible = z > -100;
        card.style.transform = `translate3d(${x}px, 0, ${z}px) rotateY(${angle}deg)`;
        card.style.opacity = visible ? "1" : "0";
        card.style.pointerEvents = visible ? "auto" : "none";
      });
    };

    updateRotation();

    const handleDown = (e) => {
      // 🔑 DO NOT START DRAG WHEN CLICKING BUTTON
      if (e.target.closest(".action-btn")) return;
      isDragging.current = true;
      startX.current = e.clientX || e.touches?.[0]?.clientX;
    };

    const handleMove = (e) => {
      if (!isDragging.current) return;
      const x = e.clientX || e.touches?.[0]?.clientX;
      const delta = (x - startX.current) * 0.3;
      startX.current = x;
      rotation.current += delta;
      updateRotation();
    };

    const handleUp = () => {
      isDragging.current = false;
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleUp);
    window.addEventListener("touchmove", handleMove);
    window.addEventListener("touchend", handleUp);

    const gallery = containerRef.current;
    gallery.addEventListener("mousedown", handleDown);
    gallery.addEventListener("touchstart", handleDown);

    return () => {
      gallery.removeEventListener("mousedown", handleDown);
      gallery.removeEventListener("touchstart", handleDown);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("touchend", handleUp);
    };
  }, []);

  return (
    <div className="arc-gallery-page">
      <div className="projects-info">
        <h1>PROJECT</h1>
      </div>

      <div className="arc-gallery-wrapper">
        <div className="arc-gallery" ref={containerRef}>
          {projects.map((project, i) => (
            <div
              className="arc-card"
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
            >
              <img src={project.src} alt={project.title} />

              <div className="info">
                <h3>{project.title}</h3>
                <p>{project.domain}</p>

                {/* ✅ GUARANTEED WORKING BUTTONS */}
                <div className="buttons">
                  <button
                    className="action-btn preview"
                    onClick={() => window.open(PREVIEW_LINK, "_blank")}
                  >
                    Preview
                  </button>

                  <button
                    className="action-btn download"
                    onClick={() => window.open(CODE_LINK, "_blank")}
                  >
                    Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;