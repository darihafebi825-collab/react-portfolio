import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback
} from "react";
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

  const getBgPos = useCallback(
    (imageIndex, currentRot, scale) => {
      const scaledImageDistance = imageDistance * scale;
      const effectiveRotation = currentRot - 180 - imageIndex * angle;
      const parallaxOffset = ((effectiveRotation % 360 + 360) % 360) / 360;
      return `${-(parallaxOffset * (scaledImageDistance / 1.5))}px 0px`;
    },
    [imageDistance, angle]
  );

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
  }, [rotationY, currentScale, getBgPos]);

  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.innerWidth;
      const newScale =
        viewportWidth <= mobileBreakpoint ? mobileScaleFactor : 1;
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

    const clientX =
      "touches" in event ? event.touches[0].clientX : event.clientX;

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

    const clientX =
      "touches" in event ? event.touches[0].clientX : event.clientX;

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
      modifyTarget: (t) => Math.round(t / angle) * angle,
      onUpdate: (latest) => rotationY.set(latest),
    });

    velocity.current = 0;
  };

  const imageVariants = {
    hidden: { y: 200, opacity: 0 },
    visible: { y: 0, opacity: 1 },
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
          className={cn("w-full h-full absolute", ringClassName)}
          style={{
            transformStyle: "preserve-3d",
            rotateY: rotationY,
            cursor: draggable ? "grab" : "default",
          }}
        >
          <AnimatePresence>
            {showImages &&
              projects.map((project, index) => (
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
                    backgroundPosition: getBgPos(
                      index,
                      currentRotationY.current,
                      currentScale
                    ),
                    filter:
                      hoveredIndex === index
                        ? "brightness(1.1) saturate(1.2)"
                        : "brightness(1)",
                    boxShadow:
                      hoveredIndex === index
                        ? "20px 20px 60px #bebebe, -20px -20px 60px #ffffff"
                        : "15px 15px 30px #d1d1d1, -15px -15px 30px #ffffff",
                    transition: "all 0.3s ease",
                  }}
                  variants={imageVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  transition={{
                    delay: index * staggerDelay,
                    duration: animationDuration,
                    ease: easeOut,
                  }}
                  whileHover={{ scale: 1.08 }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                />
              ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

export default function App() {
  const sampleProjects = [
    {
      title: "Mountain Explorer",
      description: "Interactive 3D terrain visualization",
      tags: ["Three.js", "React"],
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
    },
    {
      title: "Forest Analytics",
      description: "AI ecosystem monitoring platform",
      tags: ["Python", "TensorFlow"],
      image:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400",
    },
    {
      title: "Nature Portfolio",
      description: "Responsive photography showcase",
      tags: ["Next.js", "Tailwind"],
      image:
        "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400",
    },
  ];

  return (
    <div className="w-screen h-screen bg-white">
      <ThreeDImageRing projects={sampleProjects} />
    </div>
  );
}
