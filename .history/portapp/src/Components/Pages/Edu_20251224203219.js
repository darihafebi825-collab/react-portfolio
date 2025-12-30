import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award, ChevronRight } from "lucide-react";

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
      'Teaching Assistant for Data Structures course'
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
      'Winner - National Hackathon 2015'
    ],
    icon: '📚'
  },
  {
    degree: 'High School Diploma',
    institution: 'City High School',
    period: '2010 - 2012',
    location: 'New York, USA',
    gpa: '4.0/4.0',
    achievements: [
      'Valedictorian',
      'Science Olympiad Winner',
      'Captain of Coding Club'
    ],
    icon: '🏫'
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 flex items-center justify-center gap-3">
            <GraduationCap size={36} /> Education
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Academic journey and key achievements
          </p>
        </motion.div>

        {/* Horizontal scrollable cards */}
        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className="flex-shrink-0 w-72 sm:w-80 bg-gradient-to-br from-gray-900 to-gray-700 text-white rounded-xl p-6 shadow-lg"
            >
              <div className="text-5xl mb-4 text-center">{edu.icon}</div>

              <h3 className="text-lg sm:text-xl font-bold mb-1">{edu.degree}</h3>
              <p className="text-gray-300 text-sm sm:text-base mb-1">{edu.institution}</p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 text-xs sm:text-sm text-gray-400 mb-2">
                <span className="flex items-center gap-1">
                  <Calendar size={12} /> {edu.period}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={12} /> {edu.location}
                </span>
              </div>

              <div className="inline-block bg-white/20 px-2 py-0.5 rounded-full text-xs font-semibold mb-3">
                GPA: {edu.gpa}
              </div>

              <div className="border-t border-white/20 pt-3">
                <h4 className="font-semibold mb-2 flex items-center gap-1 text-sm">
                  <Award size={14} /> Achievements
                </h4>
                <ul className="space-y-1">
                  {edu.achievements.map((achievement, i) => (
                    <li key={i} className="text-xs text-gray-300 flex items-start gap-1">
                      <ChevronRight size={12} className="mt-0.5 flex-shrink-0" />
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

export default Education;
