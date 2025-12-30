import React from 'react';
import { motion } from 'framer-motion';

import {
  Code2,
  Star,
  Github,
  ExternalLink
} from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'AI-Powered Yoga Pose Detection',
      category: 'Machine Learning / Deep Learning Project',
      description:
        'Deep learning–based system that detects and classifies yoga poses from images or video using computer vision techniques.',
      image: '🧘‍♂️',
      tech: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'NumPy'],
      features: [
        'Yoga Pose Classification',
        'Real-time Pose Detection',
        'Deep Learning Model Training',
        'Pose Accuracy Evaluation'
      ]
    },
    {
      title: 'Water Potability Prediction',
      category: 'Machine Learning / Data Science',
      description:
        'Predicts water potability by analyzing physicochemical parameters.',
      image: '💧',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
      features: [
        'Water Quality Classification',
        'Feature Engineering',
        'Model Training',
        'Performance Analysis'
      ]
    },
    {
      title: 'Restaurant Website',
      category: 'Frontend Web Development',
      description:
        'Responsive restaurant website with menu, reservations, and gallery.',
      image: '🍽️',
      tech: ['HTML', 'CSS', 'JavaScript'],
      features: [
        'Responsive Design',
        'Interactive Menu',
        'Reservation Form'
      ]
    },
    {
      title: 'Code Debugger for Python & JavaScript',
      category: 'Developer Tool / Web Application',
      description:
        'Web-based debugging tool with real-time error detection.',
      image: '🐞',
      tech: ['React', 'JavaScript', 'Python', 'Node.js'],
      features: [
        'Live Code Execution',
        'Error Detection',
        'Syntax Highlighting'
      ]
    },
    {
      title: 'Money Manager Backend System',
      category: 'Backend Development',
      description:
        'Django-based backend for managing personal finance.',
      image: '💼',
      tech: ['Python', 'Django', 'DRF', 'PostgreSQL'],
      features: [
        'Authentication',
        'Expense Management',
        'REST APIs'
      ]
    },
    {
      title: 'Phishing Link Detection System',
      category: 'Machine Learning / Cybersecurity',
      description:
        'Detects phishing URLs using ML feature analysis.',
      image: '🔐',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
      features: [
        'URL Classification',
        'Feature Extraction',
        'ML Evaluation'
      ]
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

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
            A collection of projects showcasing my technical skills
          </p>
        </motion.div>

        <div className="flex gap-4 overflow-x-auto py-4">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="w-[360px] flex-shrink-0 bg-white rounded-lg shadow-md border border-gray-200 flex flex-col"
            >
              <div className="h-48 bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center text-6xl">
                {project.image}
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="text-sm uppercase font-semibold text-gray-900 mb-2">
                  {project.category}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4 text-sm">
                  {project.description}
                </p>

                <div className="mb-4">
                  {project.features.slice(0, 3).map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <Star size={12} />
                      {f}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 rounded text-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto">
                  <a
                    href="#"
                    className="flex-1 flex items-center justify-center gap-2 bg-gray-900 text-white px-4 py-2 rounded text-sm"
                  >
                    <Github size={16} /> Code
                  </a>
                  <a
                    href="#"
                    className="flex-1 flex items-center justify-center gap-2 border border-gray-900 text-gray-900 px-4 py-2 rounded text-sm"
                  >
                    <ExternalLink size={16} /> Demo
                  </a>
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


