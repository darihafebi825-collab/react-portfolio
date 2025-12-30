import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Award, ChevronRight, GraduationCap } from "lucide-react";

const education = [
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
  }
];

const EducationTimeline = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 flex items-center justify-center gap-3">
            <GraduationCap size={36} /> Education Timeline
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Academic journey along a horizontal timeline
          </p>
        </motion.div>

        {/* Timeline container */}
        <div className="relative flex items-center overflow-x-auto scrollbar-hide gap-12 pb-12">
          {/* Horizontal line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-300 -translate-y-1/2 z-0 rounded-full" />

          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              className="relative flex-shrink-0 w-72 z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              {/* Timeline dot */}
              <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-5 h-5 bg-gray-800 rounded-full shadow-lg z-20" />

              {/* Card */}
              <motion.div
                whileHover={{ scale: 1.03, boxShadow: "12px 12px 24px rgba(0,0,0,0.1), -12px -12px 24px rgba(255,255,255,0.5)" }}
                className="bg-[#eef1f5] rounded-2xl p-6 shadow-[18px_18px_36px_#cfd3d8,-18px_-18px_36px_#ffffff]"
              >
                <div className="text-5xl mb-3 text-center">{edu.icon}</div>
                <h3 className="text-lg font-bold mb-1 text-gray-800">{edu.degree}</h3>
                <p className="text-gray-600 text-sm mb-1">{edu.institution}</p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 text-xs sm:text-sm text-gray-500 mb-2">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} /> {edu.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={12} /> {edu.location}
                  </span>
                </div>

                <div className="inline-block bg-gray-200/30 px-2 py-0.5 rounded-full text-xs font-semibold mb-2 text-gray-700">
                  GPA: {edu.gpa}
                </div>

                <div className="border-t border-gray-300/40 pt-2">
                  <h4 className="font-semibold mb-1 flex items-center gap-1 text-sm text-gray-800">
                    <Award size={14} /> Achievements
                  </h4>
                  <ul className="space-y-1">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="text-xs text-gray-600 flex items-start gap-1">
                        <ChevronRight size={12} className="mt-0.5 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationTimeline;


