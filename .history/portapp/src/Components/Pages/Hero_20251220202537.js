import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./Hero.css";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section id="home" ref={ref} className="hero">
      <motion.div style={{ y }} className="hero-content">
        <h1>Hi, I'm <span>John Doe</span></h1>
        <p>Full Stack Developer • UI/UX Designer</p>
      </motion.div>
    </section>
  );
};

export default Hero;
