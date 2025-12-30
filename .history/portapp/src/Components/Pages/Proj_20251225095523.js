import React, { useEffect, useRef, useState, useMemo } from "react";
import { motion, AnimatePresence, useMotionValue, animate, easeOut } from "framer-motion";

const cn = (...classes) => classes.filter(Boolean).join(" ");

function ThreeDImageRing({
  projects,
  width = 300,
  perspective = 2000,
  imageDistance = 500,
  initialRotation = 180,
  animationDuration = 1.5,
  staggerDelay = 0.1,
  hoverOpacity = 0.6,
  backgroundColor = "transparent",
  draggable = true,
  mobileBreakpoint = 768,
  mobileScaleFactor = 0.7,
  inertiaPower = 0.8,
  inertiaTimeConstant = 300,
  inertiaVelocityMultiplier = 20,
}) {
  const ringRef = useRef(null);
  const rotationY = useMotionValue(initialRotation);
  const startX = useRef(0);
  const currentRotationY = useRef(initialRotation);
  const isDragging = useRef(false);
  const velocity = useRef(0);

  const [currentScale, setCurrentScale] = useState(1);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const angle = useMemo(() => 360 / projects.length, [projects.length]);

  useEffect(() => {
    let loaded = 0;
    projects.forEach((p) => {
      const img = new Image();
      img.src = p.image;
      img.onload = () => {
        loaded++;
        if (loaded === projects.length) setImagesLoaded(true);
      };
    });
  }, [projects]);

  useEffect(() => {
    const resize = () => {
      setCurrentScale(window.innerWidth <= mobileBreakpoint ? mobileScaleFactor : 1);
    };
    window.addEventListener("resize", resize);
    resize();
    return () => window.removeEventListener("resize", resize);
  }, [mobileBreakpoint, mobileScaleFactor]);

  const handleDragStart = (e) => {
    if (!draggable) return;
    isDragging.current = true;
    startX.current = "touches" in e ? e.touches[0].clientX : e.clientX;
    rotationY.stop();
    document.addEventListener("mousemove", handleDrag);
    document.addEventListener("mouseup", handleDragEnd);
    document.addEventListener("touchmove", handleDrag);
    document.addEventListener("touchend", handleDragEnd);
  };

  const handleDrag = (e) => {
    if (!isDragging.current) return;
    const x = "touches" in e ? e.touches[0].clientX : e.clientX;
    const delta = x - startX.current;
    velocity.current = -delta * 0.5;
    rotationY.set(currentRotationY.current + velocity.current);
    startX.current = x;
  };

  const handleDragEnd = () => {
    isDragging.current = false;
    currentRotationY.current = rotationY.get();

    animate(rotationY.get(), rotationY.get() + velocity.current * inertiaVelocityMultiplier, {
      type: "inertia",
      power: inertiaPower,
      timeConstant: inertiaTimeConstant,
      modifyTarget: (t) => Math.round(t / angle) * angle,
      onUpdate: (v) => rotationY.set(v),
    });

    velocity.current = 0;
    document.removeEventListener("mousemove", handleDrag);
    document.removeEventListener("mouseup", handleDragEnd);
    document.removeEventListener("touchmove", handleDrag);
    document.removeEventListener("touchend", handleDragEnd);
  };

  if (!imagesLoaded) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="animate-spin h-10 w-10 rounded-full border-b-2 border-gray-400" />
      </div>
    );
  }

  return (
    <div
      className="w-full h-full flex items-center justify-center"
      onMouseDown={handleDragStart}
      onTouchStart={handleDragStart}
    >
      <div style={{ perspective, width, height: width * 1.3 }}>
        <motion.div
          ref={ringRef}
          style={{
            transformStyle: "preserve-3d",
            rotateY: rotationY,
            cursor: "grab",
          }}
        >
          <AnimatePresence>
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="absolute overflow-hidden"
                style={{
                  width,
                  height: width * 1.3,
                  rotateY: index * -angle,
                  z: -imageDistance * currentScale,
                  transformOrigin: `50% 50% ${imageDistance * currentScale}px`,
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "22px",
                  backgroundColor: "#f2f3f7",
                  boxShadow:
                    hoveredIndex === index
                      ? "inset 8px 8px 16px #d1d2d6, inset -8px -8px 16px #ffffff"
                      : "8px 8px 16px #d1d2d6, -8px -8px 16px #ffffff",
                  filter: hoveredIndex === index ? "none" : "grayscale(100%)",
                }}
                initial={{ opacity: 0, y: 200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: animationDuration, delay: index * staggerDelay }}
                whileHover={{ scale: 1.05 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                <div
                  className="absolute inset-0 p-6 flex flex-col justify-end"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(242,243,247,0.95), rgba(242,243,247,0.7), transparent)",
                    borderRadius: "22px",
                  }}
                >
                  <h3 className="text-gray-900 font-bold text-xl mb-1">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 text-sm mb-3">
                    {project.description}
                  </p>

                  <div className="flex gap-2 mb-3 flex-wrap">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full bg-[#f2f3f7] shadow-inner text-gray-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {hoveredIndex === index && (
                    <button
                      className="px-4 py-2 rounded-xl bg-[#f2f3f7] text-gray-900 font-semibold shadow-[6px_6px_12px_#d1d2d6,-6px_-6px_12px_#ffffff] hover:shadow-inner transition-all"
                    >
                      View Project →
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

export default function App() {
  const projects = [
    {
      title: "Mountain Explorer",
      description: "3D terrain visualization with real-time data",
      tags: ["React", "Three.js"],
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
    },
    {
      title: "Forest Analytics",
      description: "AI-powered ecosystem monitoring",
      tags: ["AI", "TensorFlow"],
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400",
    },
  ];

  return (
    <div className="w-screen h-screen bg-[#f2f3f7]">
      <ThreeDImageRing projects={projects} />
    </div>
  );
}
