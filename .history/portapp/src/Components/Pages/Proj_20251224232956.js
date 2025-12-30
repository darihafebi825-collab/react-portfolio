import React from "react";
import { motion } from "framer-motion";
import { Star, Code2, Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: 'AI-Powered Yoga Pose Detection',
    category: 'Machine Learning / Deep Learning Project',
    description: 'Deep learning–based system that detects and classifies yoga poses from images or video using computer vision techniques, helping users evaluate posture accuracy.',
    image: '🧘‍♂️',
    tech: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'NumPy'],
    features: [
      'Yoga Pose Classification',
      'Real-time Pose Detection from Video',
      'Deep Learning Model Training',
      'Pose Accuracy Evaluation',
      'Computer Vision–based Keypoint Analysis'
    ]
  },
  {
    title: 'Water Potability Prediction',
    category: 'Machine Learning / Data Science',
    description: 'Predicts water potability by analyzing physicochemical parameters to support safe drinking water assessment.',
    image: '💧',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
    features: [
      'Water Quality Classification',
      'Data Preprocessing & Feature Engineering',
      'Model Training and Evaluation',
      'Potability Prediction',
      'Accuracy and Performance Analysis'
    ]
  },
  {
    title: 'Restaurant Website',
    category: 'Frontend Web Development',
    description: 'Responsive restaurant website showcasing menu, chef specials, and contact details with interactive UI built using HTML, CSS, and JavaScript.',
    image: '🍽️',
    tech: ['HTML', 'CSS', 'JavaScript'],
    features: [
      'Responsive Design',
      'Interactive Menu Section',
      'Table Reservation Form',
      'Image Gallery',
      'Smooth Animations & Transitions'
    ]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <Code2 size={40} /> Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gray-900 mx-auto mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            A collection of projects showcasing my skills in design, development, and problem-solving
          </p>
        </motion.div>

        {/* Horizontal scroll container */}
        <div className="flex gap-6 overflow-x-auto scrollbar-hide py-4 px-2">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5, scale: 1.03 }}
              className="w-80 flex-shrink-0 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 flex flex-col"
            >
              {/* Reduced height Project Image/Icon */}
              <div className="h-36 bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center text-6xl">
                {project.image}
              </div>

              {/* Project Info */}
              <div className="p-4 flex flex-col flex-grow">
                <div className="text-sm text-gray-900 uppercase tracking-wider mb-1 font-semibold">
                  {project.category}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed line-clamp-3">{project.description}</p>

                {/* Key Features */}
                <div className="mb-3">
                  <div className="text-sm text-gray-900 uppercase tracking-wider mb-1 font-semibold">Key Features</div>
                  <div className="grid grid-cols-1 gap-1">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <div key={i} className="text-sm text-gray-700 flex items-center gap-2">
                        <Star size={12} className="text-gray-900 flex-shrink-0" />
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.slice(0, 3).map((t, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-100 text-gray-900 text-sm rounded font-medium">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-2 mt-auto">
                  <motion.a whileHover={{ scale: 1.05 }} href="#"
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gray-900 text-white rounded text-sm font-medium">
                    <Github size={16} /> Code
                  </motion.a>
                  <motion.a whileHover={{ scale: 1.05 }} href="#"
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-white border-2 border-gray-900 text-gray-900 rounded text-sm font-medium">
                    <ExternalLink size={16} /> Demo
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

