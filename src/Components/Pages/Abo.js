import React from "react";
import { motion } from "framer-motion";
import { User, Briefcase, Award, Star, Code2 } from "lucide-react";

const statsData = [
  { icon: Briefcase, label: "Fresher", desc: "Experience", delay: 0.9 },
  { icon: Award, label: "11+ Projects", desc: "Completed", delay: 1.0 },
  { icon: Star, label: "Growing", desc: "Portfolio", delay: 1.1 },
  { icon: Code2, label: "10+ Tech", desc: "Stacks", delay: 1.2 },
];

const styles = {
  section: {
    padding: "96px 0",
    backgroundColor: "#fff", // White background
    position: "relative",
    overflow: "hidden",
  },
  container: {
    maxWidth: "1152px",
    margin: "0 auto",
    padding: "0 24px",
    position: "relative",
    zIndex: 10,
  },
  header: {
    textAlign: "center",
    marginBottom: "64px",
  },
  title: {
    fontSize: "48px",
    fontWeight: "bold",
    color: "#111827", // gray-900
    marginBottom: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
  },
  titleMobile: {
    fontSize: "36px",
  },
  divider: {
    width: "80px",
    height: "4px",
    backgroundColor: "#111827", // gray-900
    margin: "0 auto 16px",
  },
  subtitle: {
    color: "#6B7280", // gray-500
    maxWidth: "672px",
    margin: "0 auto",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "24px",
  },
  gridMd: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  leftCard: {
    backgroundColor: "#fff",
    borderRadius: "16px",
    padding: "40px",
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    border: "1px solid #E5E7EB", // gray-200
    position: "relative",
    overflow: "hidden",
  },
  contentSpace: {
    position: "relative",
    zIndex: 10,
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "8px 16px",
    backgroundColor: "#111827", // gray-900
    color: "#fff", // white
    fontSize: "14px",
    fontWeight: 600,
    borderRadius: "9999px",
    marginBottom: "16px",
  },
  name: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#111827", // gray-900
    marginBottom: "8px",
    letterSpacing: "-0.025em",
  },
  role: {
    color: "#6B7280", // gray-500
    fontSize: "20px",
    marginBottom: "16px",
    fontWeight: 500,
  },
  gradientLine: {
    height: "4px",
    background: "linear-gradient(to right, #111827, #374151)", // gray-900 to gray-700
    marginBottom: "24px",
  },
  paragraph: {
    color: "#4B5563", // gray-600
    lineHeight: "1.625",
    fontSize: "16px",
    marginBottom: "16px",
  },
  bold: {
    fontWeight: "bold",
    color: "#111827", // gray-900
  },
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "16px",
  },
  statCard: {
    backgroundColor: "#fff",
    padding: "24px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    border: "1px solid #E5E7EB", // gray-200
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  iconWrapper: {
    backgroundColor: "#F3F4F6", // gray-100
    width: "56px",
    height: "56px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 12px",
    transition: "all 0.3s ease",
  },
  statLabel: {
    fontWeight: "bold",
    color: "#111827", // gray-900
    fontSize: "16px",
    marginBottom: "4px",
    transition: "color 0.3s ease",
  },
  statDesc: {
    fontSize: "12px",
    color: "#6B7280", // gray-500
    transition: "color 0.3s ease",
  },
};

const Abo = () => {
  const [hoveredStat, setHoveredStat] = React.useState(null);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section id="about" style={styles.section}>
      <div style={styles.container}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={styles.header}
        >
          <h2 style={{ ...styles.title, ...(isMobile ? styles.titleMobile : {}) }}>
            <User size={40} color="#111827" /> About Me
          </h2>
          <div style={styles.divider} />
          <p style={styles.subtitle}>
            Passionate developer crafting digital experiences
          </p>
        </motion.div>

        {/* Content */}
        <div style={{ ...styles.grid, ...(isMobile ? {} : styles.gridMd) }}>
          {/* Left card */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={styles.leftCard}
          >
            <div style={styles.contentSpace}>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                style={styles.badge}
              >
                <span style={{ fontSize: "18px" }}>👋</span> Hello, I'm
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                style={styles.name}
              >
                Dariha
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                style={styles.role}
              >
                Full Stack Developer
              </motion.p>

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                style={styles.gradientLine}
              />

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                style={styles.paragraph}
              >
                I'm a passionate fresher who has completed{" "}
                <span style={styles.bold}>11+ academic projects</span>{" "}
                across web development and machine learning. I enjoy building intelligent,
                well-designed applications.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                style={styles.paragraph}
              >
                I specialize in{" "}
                <span style={styles.bold}>full-stack development</span>, with
                expertise in React and modern web technologies.
              </motion.p>
            </div>
          </motion.div>

          {/* Right stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            style={styles.statsGrid}
          >
            {statsData.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: stat.delay, type: "spring", stiffness: 200, damping: 15 }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  boxShadow: "0 20px 40px -10px rgba(0,0,0,0.3)",
                }}
                style={styles.statCard}
                onMouseEnter={() => setHoveredStat(idx)}
                onMouseLeave={() => setHoveredStat(null)}
              >
                <div style={{ position: "relative", zIndex: 10 }}>
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    style={{
                      ...styles.iconWrapper,
                      backgroundColor: hoveredStat === idx ? "#fff" : "#F3F4F6",
                    }}
                  >
                    <stat.icon color="#111827" size={24} />
                  </motion.div>
                  <div
                    style={{
                      ...styles.statLabel,
                      color: "#111827",
                    }}
                  >
                    {stat.label}
                  </div>
                  <div
                    style={{
                      ...styles.statDesc,
                      color: "#4B5563", // gray-600 on hover
                    }}
                  >
                    {stat.desc}
                  </div>
                </div>
                
                {/* Hover background effect */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "#111827", // gray-900
                    opacity: hoveredStat === idx ? 0.1 : 0,
                    transition: "opacity 0.3s ease",
                    zIndex: 0,
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Abo;
