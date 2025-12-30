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
    if (imagesLoaded) {
      setShowImages(true);
    }
  }, [imagesLoaded]);

  const handleDragStart = (event) => {
    if (!draggable) return;
    isDragging.current = true;
    const clientX = "touches" in event ? event.touches[0].clientX : event.clientX;
    startX.current = clientX;
    rotationY.stop();
    velocity.current = 0;
    if (ringRef.current) {
      ringRef.current.style.cursor = "grabbing";
    }
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
    if (ringRef.current) {
      ringRef.current.style.cursor = "grab";
      currentRotationY.current = rotationY.get();
    }

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
      onUpdate: (latest) => {
        rotationY.set(latest);
      },
    });

    velocity.current = 0;
  };

  const imageVariants = {
    hidden: { y: 200, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

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
      className={cn(
        "w-full h-full overflow-hidden select-none relative",
        containerClassName
      )}
      style={{
        backgroundColor,
        transform: `scale(${currentScale})`,
        transformOrigin: "center center",
      }}
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
          className={cn(
            "w-full h-full absolute",
            ringClassName
          )}
          style={{
            transformStyle: "preserve-3d",
            rotateY: rotationY,
            cursor: draggable ? "grab" : "default",
          }}
        >
          <AnimatePresence>
            {showImages && projects.map((project, index) => (
              <motion.div
                key={index}
                className={cn(
                  "w-full h-full absolute overflow-hidden",
                  imageClassName
                )}
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
                  border: "none",
                  borderRadius: "0px",
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
                transition={{
                  delay: index * staggerDelay,
                  duration: animationDuration,
                  ease: easeOut,
                }}
                whileHover={{ 
                  scale: 1.08,
                  transition: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }
                }}
                onHoverStart={() => {
                  if (isDragging.current) return;
                  setHoveredIndex(index);
                  if (ringRef.current) {
                    Array.from(ringRef.current.children).forEach((imgEl, i) => {
                      if (i !== index) {
                        imgEl.style.opacity = `${hoverOpacity}`;
                      }
                    });
                  }
                }}
                onHoverEnd={() => {
                  if (isDragging.current) return;
                  setHoveredIndex(null);
                  if (ringRef.current) {
                    Array.from(ringRef.current.children).forEach((imgEl) => {
                      imgEl.style.opacity = `1`;
                    });
                  }
                }}
              >
                {/* Project Info Overlay */}
                <motion.div
                  className="absolute inset-0 flex flex-col justify-end p-6"
                  style={{
                    background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 50%, transparent 100%)",
                    borderRadius: "0px",
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0.7 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ 
                      y: hoveredIndex === index ? 0 : 20, 
                      opacity: hoveredIndex === index ? 1 : 0.8 
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-white font-bold text-2xl mb-2">{project.title}</h3>
                    <p className="text-gray-200 text-sm mb-3 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 text-xs text-white font-medium"
                          style={{
                            background: 'rgba(255, 255, 255, 0.15)',
                            backdropFilter: 'blur(10px)',
                            boxShadow: '3px 3px 6px rgba(0, 0, 0, 0.3), -1px -1px 3px rgba(255, 255, 255, 0.1)'
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {hoveredIndex === index && (
                      <motion.button
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="px-4 py-2 bg-white text-black rounded-lg font-semibold text-sm hover:bg-gray-200 transition-colors"
                      >
                        View Project →
                      </motion.button>
                    )}
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

// Demo Component
export default function App() {
  const sampleProjects = [
  {
    title: "Mountain Explorer",
    description: "Interactive 3D terrain visualization with real-time weather data integration",
    tags: ["Three.js", "React", "WebGL"],
    image: "/images/mountain-explorer.jpg" // <-- local image from public folder
  },
  {
    title: "Forest Analytics",
    description: "AI-powered ecosystem monitoring platform for environmental conservation",
    tags: ["Python", "TensorFlow", "GIS"],
    image: "/images/forest-analytics.jpg"
  },
  {
    title: "Nature Portfolio",
    description: "Responsive photography showcase with advanced filtering and gallery features",
    tags: ["Next.js", "Tailwind", "Framer"],
    image: "/images/nature-portfolio.jpg"
  },
  {
    title: "Wilderness Guide",
    description: "Mobile-first trail discovery app with offline maps and community features",
    tags: ["React Native", "MapBox", "Firebase"],
    image: "/images/wilderness-guide.jpg"
  },
  {
    title: "Eco Dashboard",
    description: "Real-time environmental data visualization for climate research initiatives",
    tags: ["D3.js", "Node.js", "PostgreSQL"],
    image: "/images/eco-dashboard.jpg"
  },
  {
    title: "Cloud Vision",
    description: "Weather prediction ML model with interactive atmospheric simulations",
    tags: ["PyTorch", "FastAPI", "Docker"],
    image: "/images/cloud-vision.jpg"
  },
  {
  title: "AI-Powered Yoga Pose Detection",
  description: "Deep learning system that detects and classifies yoga poses from images or video using computer vision, helping users evaluate posture accuracy.",
  tags: ["Python", "TensorFlow", "OpenCV", "Deep Learning", "Computer Vision"],
  image: "/images/yoga-pose-detection.jpg" // local image in public/images
},

  {
    title: "Scenic Routes",
    description: "Travel planning platform with curated nature destinations and itineraries",
    tags: ["Angular", "GraphQL", "AWS"],
    image: "/images/scenic-routes.jpg"
  },
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