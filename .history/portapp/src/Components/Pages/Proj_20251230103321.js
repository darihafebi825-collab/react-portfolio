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
  hoverOpacity = 0.5,
  containerClassName,
  ringClassName,
  imageClassName,
  backgroundColor = "#e8e8e8",
  draggable = true,
  mobileBreakpoint = 768,
  mobileScaleFactor = 0.8,
  inertiaPower = 0.8,
  inertiaTimeConstant = 300,
  inertiaVelocityMultiplier = 20,
}) {
  const containerRef = useRef(null);
  const ringRef = useRef(null);

  const rotationY = useMotionValue(initialRotation);
  const startX = useRef(0);
  const currentRotationY = useRef(initialRotation);
  const isDragging = useRef(false);
  const velocity = useRef(0);

  const [currentScale, setCurrentScale] = useState(1);
  const [showImages, setShowImages] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const angle = useMemo(() => 360 / projects.length, [projects.length]);

  /* Preload images */
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

  const getBgPos = (i, rot, scale) => {
    const d = imageDistance * scale;
    const r = rot - 180 - i * angle;
    const p = ((r % 360 + 360) % 360) / 360;
    return `${-(p * (d / 1.5))}px 0px`;
  };

  useEffect(() => {
    const unsub = rotationY.on("change", (latest) => {
      currentRotationY.current = latest;
      if (ringRef.current) {
        [...ringRef.current.children].forEach((el, i) => {
          el.style.backgroundPosition = getBgPos(i, latest, currentScale);
        });
      }
    });
    return () => unsub();
  }, [angle, currentScale]);

  useEffect(() => {
    const resize = () => {
      setCurrentScale(window.innerWidth <= mobileBreakpoint ? mobileScaleFactor : 1);
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [mobileBreakpoint, mobileScaleFactor]);

  const dragStart = (e) => {
    if (!draggable) return;
    isDragging.current = true;
    startX.current = e.touches ? e.touches[0].clientX : e.clientX;
    rotationY.stop();
    velocity.current = 0;
    document.addEventListener("mousemove", drag);
    document.addEventListener("mouseup", dragEnd);
    document.addEventListener("touchmove", drag);
    document.addEventListener("touchend", dragEnd);
  };

  const drag = (e) => {
    if (!isDragging.current) return;
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    const dx = x - startX.current;
    velocity.current = -dx * 0.5;
    rotationY.set(currentRotationY.current + velocity.current);
    startX.current = x;
  };

  const dragEnd = () => {
    isDragging.current = false;
    document.removeEventListener("mousemove", drag);
    document.removeEventListener("mouseup", dragEnd);
    document.removeEventListener("touchmove", drag);
    document.removeEventListener("touchend", dragEnd);

    const v = velocity.current * inertiaVelocityMultiplier;
    animate(rotationY.get(), rotationY.get() + v, {
      type: "inertia",
      velocity: v,
      power: inertiaPower,
      timeConstant: inertiaTimeConstant,
      modifyTarget: (t) => Math.round(t / angle) * angle,
      onUpdate: (v) => rotationY.set(v),
    });
  };

  if (!imagesLoaded) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="animate-spin h-12 w-12 rounded-full border-b-2 border-black" />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="w-full h-full overflow-hidden relative"
      style={{ backgroundColor, transform: `scale(${currentScale})` }}
      onMouseDown={dragStart}
      onTouchStart={dragStart}
    >
      <div
        style={{
          perspective,
          width,
          height: width * 1.33,
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <motion.div
          ref={ringRef}
          style={{ transformStyle: "preserve-3d", rotateY: rotationY }}
        >
          <AnimatePresence>
            {projects.map((p, i) => (
              <motion.div
                key={i}
                className="absolute w-full h-full overflow-hidden"
                style={{
                  backgroundImage: `url(${p.image})`,
                  backgroundSize: "cover",
                  rotateY: i * -angle,
                  z: -imageDistance * currentScale,
                  transformOrigin: `50% 50% ${imageDistance * currentScale}px`,
                }}
                initial={{ y: 200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * staggerDelay, duration: animationDuration }}
                whileHover={{ scale: 1.08 }}
                onHoverStart={() => setHoveredIndex(i)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-white text-2xl font-bold">{p.title}</h3>
                  <p className="text-gray-200 text-sm mb-3">{p.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tags.map((t, j) => (
                      <span key={j} className="text-xs px-3 py-1 bg-white/20 text-white">
                        {t}
                      </span>
                    ))}
                  </div>

                  {hoveredIndex === i && (
                    <button
                      onClick={() => p.link && window.open(p.link, "_blank")}
                      className="bg-white text-black px-4 py-2 font-semibold"
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

/* ================= DEMO APP ================= */

export default function App() {
  const projects = [
    {
      title: "Restaurant Website",
      description: "Modern responsive restaurant frontend",
      tags: ["HTML", "CSS", "JS"],
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=600",
      link: "https://github.com/yourusername/restaurant-website",
    },
    {
      title: "Yoga Pose Detection",
      description: "AI-based yoga posture detection",
      tags: ["Python", "OpenCV", "ML"],
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600",
      link: "https://github.com/yourusername/yoga-pose-detection",
    },
    {
      title: "Personal Portfolio",
      description: "React-based personal portfolio",
      tags: ["React", "CSS"],
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600",
      link: "https://your-portfolio.vercel.app",
    },
  ];

  return (
    <div className="w-screen h-screen bg-white">
      <ThreeDImageRing projects={projects} backgroundColor="transparent" />
    </div>
  );
}
