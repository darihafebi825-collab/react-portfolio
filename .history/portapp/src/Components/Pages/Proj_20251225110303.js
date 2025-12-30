import React, { useEffect, useRef, useState, useMemo } from "react";
import { motion, AnimatePresence, useMotionValue, animate, easeOut } from "framer-motion";

const cn = (...classes) => classes.filter(Boolean).join(' ');

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

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    const totalImages = projects.length;

    projects.forEach((project) => {
      const img = new Image();
      img.src = project.image;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalImages) {
          setImagesLoaded(true);
        }
      };
    });
  }, [projects]);

  const getBgPos = (imageIndex, currentRot, scale) => {
    const scaledImageDistance = imageDistance * scale;
    const effectiveRotation = currentRot - 180 - imageIndex * angle;
    const parallaxOffset = ((effectiveRotation % 360 + 360) % 360) / 360;
    return `${-(parallaxOffset * (scaledImageDistance / 1.5))}px 0px`;
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const unsubscribe = rotationY.on("change", (latestRotation) => {
      if (ringRef.current) {
        Array.from(ringRef.current.children).forEach((imgElement, i) => {
          imgElement.style.backgroundPosition = getBgPos(
            i,
            latestRotation,
            currentScale
          );
        });
      }
      currentRotationY.current = latestRotation;
    });
    return () => unsubscribe();
  }, [rotationY, projects.length, imageDistance, currentScale, angle]);

  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.innerWidth;
      const newScale = viewportWidth <= mobileBreakpoint ? mobileScaleFactor : 1;
      setCurrentScale(newScale);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileBreakpoint, mobileScaleFactor]);

  useEffect(() => {
    if (imagesLoaded) setShowImages(true);
  }, [imagesLoaded]);

  const handleDragStart = (event) => {
    if (!draggable) return;
    isDragging.current = true;
    const clientX = "touches" in event ? event.touches[0].clientX : event.clientX;
    startX.current = clientX;
    rotationY.stop();
    velocity.current = 0;
    if (ringRef.current) ringRef.current.style.cursor = "grabbing";
    document.addEventListener("mousemove", handleDrag);
    document.addEventListener("mouseup", handleDragEnd);
    document.addEventListener("touchmove", handleDrag);
    document.addEventListener("touchend", handleDragEnd);
  };

  const handleDrag = (event) => {
    if (!draggable || !isDragging.current) return;
    const clientX = "touches" in event ? event.touches[0].clientX : event.clientX;
    const deltaX = clientX - startX.current;
    velocity.current = -deltaX * 0.5;
    rotationY.set(currentRotationY.current + velocity.current);
    startX.current = clientX;
  };

  const handleDragEnd = () => {
    isDragging.current = false;
    if (ringRef.current) ringRef.current.style.cursor = "grab";
    currentRotationY.current = rotationY.get();

    document.removeEventListener("mousemove", handleDrag);
    document.removeEventListener("mouseup", handleDragEnd);
    document.removeEventListener("touchmove", handleDrag);
    document.removeEventListener("touchend", handleDragEnd);

    const initial = rotationY.get();
    const velocityBoost = velocity.current * inertiaVelocityMultiplier;
    const target = initial + velocityBoost;

    animate(initial, target, {
      type: "inertia",
      velocity: velocityBoost,
      power: inertiaPower,
      timeConstant: inertiaTimeConstant,
      restDelta: 0.5,
      modifyTarget: (target) => Math.round(target / angle) * angle,
      onUpdate: (latest) => rotationY.set(latest),
    });

    velocity.current = 0;
  };

  const imageVariants = { hidden: { y: 200, opacity: 0 }, visible: { y: 0, opacity: 1 } };

  if (!imagesLoaded) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mb-4"></div>
          <p className="text-gray-700 text-lg">Loading projects...</p>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={cn("w-full h-full overflow-hidden select-none relative", containerClassName)}
      style={{ backgroundColor, transform: `scale(${currentScale})`, transformOrigin: "center center" }}
      onMouseDown={draggable ? handleDragStart : undefined}
      onTouchStart={draggable ? handleDragStart : undefined}
    >
      <div
        style={{
          perspective: `${perspective}px`,
          width: `${width}px`,
          height: `${width * 1.33}px`,
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <motion.div
          ref={ringRef}
          className={cn("w-full h-full absolute", ringClassName)}
          style={{ transformStyle: "preserve-3d", rotateY: rotationY, cursor: draggable ? "grab" : "default" }}
        >
          <AnimatePresence>
            {showImages && projects.map((project, index) => (
              <motion.div
                key={index}
                className={cn("w-full h-full absolute overflow-hidden", imageClassName)}
                style={{
                  transformStyle: "preserve-3d",
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backfaceVisibility: "hidden",
                  rotateY: index * -angle,
                  z: -imageDistance * currentScale,
                  transformOrigin: `50% 50% ${imageDistance * currentScale}px`,
                  backgroundPosition: getBgPos(index, currentRotationY.current, currentScale),
                  filter: hoveredIndex === index ? "brightness(1.1) saturate(1.2)" : "brightness(1)",
                  boxShadow: hoveredIndex === index
                    ? "20px 20px 60px #bebebe, -20px -20px 60px #ffffff, inset 2px 2px 5px rgba(255,255,255,0.5)"
                    : "15px 15px 30px #d1d1d1, -15px -15px 30px #ffffff",
                  transition: "filter 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease",
                }}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={imageVariants}
                custom={index}
                transition={{ delay: index * staggerDelay, duration: animationDuration, ease: easeOut }}
                whileHover={{ scale: 1.08, transition: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] } }}
                onHoverStart={() => {
                  if (isDragging.current) return;
                  setHoveredIndex(index);
                  if (ringRef.current) {
                    Array.from(ringRef.current.children).forEach((imgEl, i) => { if (i !== index) imgEl.style.opacity = `${hoverOpacity}`; });
                  }
                }}
                onHoverEnd={() => {
                  if (isDragging.current) return;
                  setHoveredIndex(null);
                  if (ringRef.current) {
                    Array.from(ringRef.current.children).forEach((imgEl) => { imgEl.style.opacity = `1`; });
                  }
                }}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

// Demo App
export default function App() {
  const sampleProjects = [
    { title: "Mountain Explorer", description: "3D terrain visualization", tags: ["Three.js", "React"], image: "/Images/mountain.jpg" },
    { title: "Forest Analytics", description: "AI ecosystem monitoring", tags: ["Python", "TensorFlow"], image: "/Images/forest.jpg" },
    { title: "Nature Portfolio", description: "Photography showcase", tags: ["Next.js", "Tailwind"], image: "/Images/nature.jpg" },
    { title: "Wilderness Guide", description: "Trail discovery app", tags: ["React Native", "MapBox"], image: "/Images/wilderness.jpg" },
    { title: "Eco Dashboard", description: "Environmental data visualization", tags: ["D3.js", "Node.js"], image: "/Images/eco.jpg" },
    { title: "Cloud Vision", description: "Weather prediction ML model", tags: ["PyTorch", "FastAPI"], image: "/Images/cloud.jpg" },
    { title: "Trail Mapper", description: "Hiking route planner", tags: ["Vue.js", "Leaflet"], image: "/Images/trail.jpg" },
    { title: "Scenic Routes", description: "Travel planning platform", tags: ["Angular", "GraphQL"], image: "/Images/scenic.jpg" },
  ];

  return (
    <div className="w-screen h-screen bg-white relative">
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-center z-10">
        <h1 className="text-5xl font-bold text-gray-900 mb-2 tracking-tight" style={{
          textShadow: '3px 3px 6px rgba(190, 190, 190, 0.8), -3px -3px 6px rgba(255, 255, 255, 0.8)'
        }}>Project Showcase</h1>
        <p className="text-gray-800 text-lg">Drag to explore • Hover for details</p>
      </div>
      
      <ThreeDImageRing
        projects={sampleProjects}
        width={300}
        perspective={2000}
        imageDistance={500}
        initialRotation={180}
        animationDuration={1.5}
        staggerDelay={0.1}
        hoverOpacity={0.5}
        backgroundColor="transparent"
        draggable={true}
        mobileBreakpoint={768}
        mobileScaleFactor={0.7}
        inertiaPower={0.8}
        inertiaTimeConstant={300}
        inertiaVelocityMultiplier={20}
      />
    </div>
  );
}
