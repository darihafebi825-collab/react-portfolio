import React, { useEffect, useRef } from "react";
import "./Projects.css";

const projects = [
  {
    title: "AI-Powered Yoga Pose Detection",
    domain: "Machine Learning / Deep Learning",
    description: "Detects and classifies yoga poses using deep learning and computer vision to evaluate posture accuracy.",
    image: "🧘‍♂️",
    tech: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy"],
  },
  {
    title: "Water Potability Prediction",
    domain: "Machine Learning / Data Science",
    description: "Predicts water potability analyzing physicochemical parameters to support safe drinking water.",
    image: "💧",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
  },
  {
    title: "Restaurant Website",
    domain: "Frontend Web Development",
    description: "Responsive website showcasing menu, chef specials, and contact details with interactive UI.",
    image: "🍽️",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Portfolio Website",
    domain: "Frontend",
    description: "Personal portfolio site to showcase projects and skills with interactive UI.",
    image: "💻",
    tech: ["React", "Tailwind", "JavaScript"],
  },
];

const CODE_LINK = "https://github.com/darihafebi825-collab/Portfolio.git";
const PREVIEW_LINK = "https://darihafebi825-collab.github.io/Portfolio/";

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
        <h1>PROJECTS</h1>
      </div>

      <div className="arc-gallery-wrapper">
        <div className="arc-gallery" ref={containerRef}>
          {projects.map((project, i) => (
            <div
              className="arc-card"
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
            >
              {/* Emoji / Image */}
              <div className="emoji">{project.image}</div>

              {/* Card Info */}
              <div className="info">
                <h3>{project.title}</h3>
                <p className="text-sm text-gray-600">{project.description}</p>

                {/* Tech stack */}
                <div className="tech-stack">
                  {project.tech.map((t, idx) => (
                    <span key={idx}>{t}</span>
                  ))}
                </div>

                {/* Buttons */}
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
