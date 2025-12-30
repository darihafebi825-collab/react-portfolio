import React, { useEffect, useRef, useState, useMemo, useCallback } from "react";
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

  const getBgPos = useCallback(
    (index, rot, scale) => {
      const d = imageDistance * scale;
      const r = rot - 180 - index * angle;
      const o = ((r % 360) + 360) % 360;
      return `${-(o / 360) * (d / 1.5)}px center`;
    },
    [imageDistance, angle]
  );

  useEffect(() => {
    const unsub = rotationY.on("change", (v) => {
      currentRotationY.current = v;
    });
    return () => unsub();
  }, [rotationY]);

  useEffect(() => {
    const resize = () => {
      setCurrentScale(window.innerWidth <= mobileBreakpoint ? mobileScaleFactor : 1);
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [mobileBreakpoint, mobileScaleFactor]);

  useEffect(() => {
    if (imagesLoaded) setShowImages(true);
  }, [imagesLoaded]);

  const imageVariants = {
    hidden: { y: 200, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  if (!imagesLoaded) {
    return <div className="w-full h-full flex items-center justify-center">Loading…</div>;
  }

  return (
    <div
      ref={containerRef}
      className={cn("w-full h-full relative overflow-hidden", containerClassName)}
      style={{ backgroundColor }}
      onMouseDown={handleDragStart}
      onTouchStart={handleDragStart}
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
          className={cn("absolute w-full h-full", ringClassName)}
          style={{ transformStyle: "preserve-3d", rotateY }}
        >
          <AnimatePresence>
            {showImages &&
              projects.map((project, index) => (
                <motion.div
                  key={index}
                  className={cn("absolute w-full h-full overflow-hidden", imageClassName)}
                  style={{
                    transformStyle: "preserve-3d",
                    rotateY: index * -angle,
                    z: -imageDistance * currentScale,
                    transformOrigin: `50% 50% ${imageDistance * currentScale}px`,
                    background: "#fff",
                    borderRadius: "0px",
                    boxShadow:
                      hoveredIndex === index
                        ? "20px 20px 60px #bebebe, -20px -20px 60px #ffffff"
                        : "15px 15px 30px #d1d1d1, -15px -15px 30px #ffffff",
                  }}
                  variants={imageVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  transition={{ delay: index * staggerDelay, duration: animationDuration, ease: easeOut }}
                  whileHover={{ scale: 1.08 }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                >
                  {/* TOP HALF IMAGE */}
                  <div
                    className="absolute top-0 left-0 w-full h-1/2"
                    style={{
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: getBgPos(
                        index,
                        currentRotationY.current,
                        currentScale
                      ),
                    }}
                  />

                  {/* BOTTOM HALF CONTENT */}
                  <div className="absolute bottom-0 left-0 w-full h-1/2 p-6 flex flex-col justify-end bg-black/70">
                    <h3 className="text-white text-xl font-bold">{project.title}</h3>
                    <p className="text-gray-200 text-sm mt-2">{project.description}</p>
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

export default ThreeDImageRing;
