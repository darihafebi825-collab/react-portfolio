import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import dariImg from "../../Images/dari.png";

// Lucide-react icons
import {
  Code,
  Database,
  Cpu,
  Wrench,
  X as CloseIcon,  // Only declare once
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Menu,
  Briefcase,
  Code2,
  GraduationCap,
  Award,
  Calendar,
  User,
  MessageSquare,
  Send,
  ChevronRight,
  Star
} from 'lucide-react';
const Education = () => {
  const education = [
    {
      degree: 'Master of Science in Computer Science',
      institution: 'Tech University',
      period: '2016 - 2018',
      location: 'California, USA',
      gpa: '3.9/4.0',
      achievements: [
        'Best Thesis Award for Machine Learning Research',
        'Published 3 research papers in AI conferences',
        'Teaching Assistant for Data Structures course',
        'President of Computer Science Society'
      ],
      icon: '🎓'
    },
    {
      degree: 'Bachelor of Engineering in Software Engineering',
      institution: 'Engineering College',
      period: '2012 - 2016',
      location: 'Texas, USA',
      gpa: '3.8/4.0',
      achievements: [
        'First Class Honours with Distinction',
        "Dean's List all 4 years",
        'Winner - National Hackathon 2015',
        'Captain of University Programming Team'
      ],
      icon: '📚'
    }
  ];
  
  return (
    <section id="education" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <GraduationCap size={40} /> Education
          </h2>
          <div className="w-20 h-1 bg-gray-900 mx-auto mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Academic journey and continuous learning
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }} whileHover={{ scale: 1.02, boxShadow: "0 25px 50px rgba(0,0,0,0.1)" }}
              className="bg-gradient-to-br from-gray-900 to-gray-700 text-white p-8 rounded-xl shadow-xl">
              <div className="text-6xl mb-4 text-center">{edu.icon}</div>
              
              <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
              <p className="text-gray-300 text-lg mb-1">{edu.institution}</p>
              <div className="flex items-center gap-4 text-sm text-gray-400 mb-2">
                <span className="flex items-center gap-1"><Calendar size={14} /> {edu.period}</span>
                <span className="flex items-center gap-1"><MapPin size={14} /> {edu.location}</span>
              </div>
              <div className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                GPA: {edu.gpa}
              </div>
              
              <div className="border-t border-white/20 pt-4">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Award size={18} /> Key Achievements
                </h4>
                <ul className="space-y-2">
                  {edu.achievements.map((achievement, i) => (
                    <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                      <ChevronRight size={16} className="mt-0.5 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
