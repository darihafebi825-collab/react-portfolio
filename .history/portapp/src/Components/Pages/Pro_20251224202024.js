import React from "react";
import { motion } from "framer-motion";
import { Star, Code2, Github, ExternalLink } from "lucide-react";

// Duplicate projects to make 9 cards
const baseProjects = [
  {
    title: 'AI-Powered Yoga Pose Detection',
    category: 'Machine Learning / Deep Learning',
    description: 'Detects and classifies yoga poses using deep learning and computer vision to evaluate posture accuracy.',
    image: '🧘‍♂️',
    tech: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'NumPy'],
    features: ['Yoga Pose Classification', 'Real-time Pose Detection', 'Model Training', 'Pose Accuracy Evaluation', 'Keypoint Analysis']
  },
  {
    title: 'Water Potability Prediction',
    category: 'Machine Learning / Data Science',
    description: 'Predicts water potability analyzing physicochemical parameters to support safe drinking water.',
    image: '💧',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
    features: ['Water Quality Classification', 'Feature Engineering', 'Model Training & Evaluation', 'Potability Prediction', 'Performance Metrics']
  },
  {
    title: 'Restaurant Website',
    category: 'Frontend Web Development',
    description: 'Responsive website showcasing menu, chef specials, and contact details with interactive UI.',
    image: '🍽️',
    tech: ['HTML', 'CSS', 'JavaScript'],
    features: ['Responsive Design', 'Interactive Menu', 'Reservation Form', 'Image Gallery', 'Smooth Animations']
  }
];

// Create 9 cards by repeating projects
const projects = Array(3).fill(baseProjects).flat();

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-[#eef1f5]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 flex items-center justify-center gap-3">
            <Code2 size={40} /> Featured Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A selection of projects highlighting my skills in development, AI, and problem-solving.
          </p>
        </motion.div>

        {/* Horizontal scrollable cards */}
        <div className="flex gap-4 overflow-x-auto scrollbar-hide py-4">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -3 }}
              className="w-[280px] flex-shrink-0 bg-[#eef1f5] rounded-2xl shadow-[12px_12px_24px_#cfd3d8,-12px_-12px_24px_#ffffff] border border-gray-200 overflow-hidden flex flex-col transition-shadow"
            >
              {/* Project image / emoji */}
              <div className="h-36 flex items-center justify-center text-5xl bg-gradient-to-br from-gray-200 to-gray-300">
                {project.image}
              </div>

              <div className="p-4 flex flex-col flex-grow">
                <span className="text-sm text-gray-900 uppercase tracking-wider mb-1 font-semibold">
                  {project.category}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-2 line-clamp-3">
                  {project.description}
                </p>

                {/* Key features */}
                <div className="mb-2">
                  <div className="text-xs text-gray-900 uppercase tracking-wider mb-1 font-semibold">
                    Key Features
                  </div>
                  <div className="grid grid-cols-1 gap-1">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <div key={i} className="text-xs text-gray-700 flex items-center gap-1">
                        <Star size={10} className="text-gray-900 flex-shrink-0" /> 
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1 mb-2">
                  {project.tech.slice(0, 3).map((t, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-100 text-gray-900 text-xs rounded font-medium">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-2 mt-auto">
                  <motion.a whileHover={{ scale: 1.05 }} href="#"
                    className="flex-1 flex items-center justify-center gap-1 px-3 py-1.5 bg-gray-900 text-white rounded text-xs font-medium">
                    <Github size={14} /> Code
                  </motion.a>
                  <motion.a whileHover={{ scale: 1.05 }} href="#"
                    className="flex-1 flex items-center justify-center gap-1 px-3 py-1.5 bg-white border-2 border-gray-900 text-gray-900 rounded text-xs font-medium">
                    <ExternalLink size={14} /> Demo
                  </motion.a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

