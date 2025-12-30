const Experience = () => {
  const experiences = [
    {
      title: 'Web Development – React JS',
      company: 'Shristi Innovative',
      period: 'Apr 2024',
      location: 'Technopark, Trivandrum',
      description: 'Built dynamic UI components and implemented routing in React.',
      tech: ['React JS', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'React Router', 'Tailwind CSS', 'Git & GitHub']
    },
    {
      title: 'Machine Learning Engineer',
      company: 'Ms SquareD Software',
      period: 'Mar – Jun 2025',
      location: 'Technopark, Trivandrum',
      description: 'Contributed to training and testing models for yoga pose recognition',
      tech: ['Python', 'TensorFlow', 'Keras', 'PyTorch', 'OpenCV', 'NumPy', 'Pandas', 'Scikit-learn', 'Jupyter Notebook', 'Git & GitHub']
    },
    {
      title: 'Web Developer',
      company: 'Zalima Development Pvt Ltd',
      period: 'Dec 2025 - Present',
      location: 'Bangalore',
      description: 'Contributed to various client projects',
      responsibilities: [
        'Built and maintained client-facing web applications',
        'Wrote unit and integration tests increasing coverage to 85%',
        'Fixed bugs and implemented new features',
        'Collaborated with designers to implement pixel-perfect UIs'
      ],
      tech: ['JavaScript', 'React', 'Python', 'MySQL']
    }
  ];

  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-gray-50 to-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header: icon left, title right */}
        <div className="flex items-center justify-between mb-20">
          {/* Icon on the left */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="bg-gray-800 p-6 rounded-2xl shadow-2xl"
          >
            <Briefcase size={48} className="text-gray-100" />
          </motion.div>

          {/* Title on the right */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-right"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Experience Showcase
            </h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 100 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1.5 bg-gray-900 mx-auto md:ml-auto mb-4 rounded-full"
            />
            <p className="text-gray-700 max-w-xs md:ml-auto text-lg font-medium">
              A journey through my professional experience
            </p>
          </motion.div>
        </div>

        {/* Experience Cards */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.8, type: "spring", stiffness: 100 }}
              >
                <div className="relative bg-gradient-to-b from-gray-50 to-gray-200 rounded-xl p-6 shadow-xl border border-gray-300 overflow-hidden group">
                  {/* Step indicator */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center font-bold text-2xl text-gray-100 shadow-xl border-4 border-gray-300">
                    {idx + 1}
                  </div>

                  {/* Content */}
                  <div className="relative z-10 pt-2">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="bg-gray-800 p-3 rounded-xl shadow-lg">
                        <Code2 size={24} className="text-gray-100" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-bold text-gray-900 mb-1 leading-tight">
                          {exp.title}
                        </h3>
                        <p className="text-base text-gray-700 font-semibold">{exp.company}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="flex items-center gap-1.5 bg-gray-100 px-3 py-1.5 rounded-lg text-xs font-medium border border-gray-300">
                        <Calendar size={12} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5 bg-gray-800 text-gray-100 px-3 py-1.5 rounded-lg text-xs font-medium shadow-md">
                        <MapPin size={12} />
                        {exp.location}
                      </span>
                    </div>

                    <p className="text-sm text-gray-700 mb-3 pl-3 border-l-2 border-gray-800 italic leading-relaxed">
                      {exp.description}
                    </p>

                    {exp.responsibilities && (
                      <ul className="space-y-1.5 mb-4">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="text-xs text-gray-700 flex items-start gap-2">
                            <ChevronRight size={14} className="mt-0.5 flex-shrink-0 text-gray-800" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.slice(0, 5).map((t, i) => (
                        <span key={i} className="px-2.5 py-1 bg-gray-800 text-gray-100 text-xs rounded-lg font-medium shadow-md">
                          {t}
                        </span>
                      ))}
                      {exp.tech.length > 5 && (
                        <span className="px-2.5 py-1 bg-gray-200 text-gray-700 text-xs rounded-lg font-medium">
                          +{exp.tech.length - 5}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
