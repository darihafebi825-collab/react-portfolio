const Projects = () => {
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
}
,
   {
  title: 'Water Potability Prediction',
  category: 'Machine Learning / Data Science',
  description: 'Machine learning–based system that predicts water potability by analyzing physicochemical parameters to support safe drinking water assessment.',
  image: '💧',
  tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
  features: [
    'Water Quality Classification',
    'Data Preprocessing & Feature Engineering',
    'Model Training and Evaluation',
    'Potability Prediction',
    'Accuracy and Performance Analysis'
  ]
}
,
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
,
   {
  title: 'Code Debugger for Python & JavaScript',
  category: 'Developer Tool / Web Application',
  description: 'Web-based code debugging tool that allows users to write, run, and debug Python and JavaScript code with real-time error detection and output visualization.',
  image: '🐞',
  tech: ['React', 'JavaScript', 'Python', 'Node.js', 'Monaco Editor'],
  features: [
    'Python & JavaScript Code Execution',
    'Real-time Error Detection',
    'Syntax Highlighting Editor',
    'Debug Output & Logs',
    'User-friendly Developer Interface'
  ]
}
,
    {
  title: 'Money Manager Backend System',
  category: 'Backend Development',
  description: 'Backend system built with Django to manage personal finance data, including income, expenses, budgeting, and secure user authentication.',
  image: '💼',
  tech: ['Python', 'Django', 'Django REST Framework', 'PostgreSQL'],
  features: [
    'User Authentication & Authorization',
    'Income and Expense Management APIs',
    'Category-based Transactions',
    'Budget Tracking Logic',
    'RESTful API Endpoints'
  ]
}
,
   {
  title: 'Phishing Link Detection System',
  category: 'Machine Learning / Cybersecurity',
  description: 'Machine learning–based system that detects phishing URLs by analyzing lexical, host-based, and statistical features to prevent online fraud.',
  image: '🔐',
  tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'BeautifulSoup'],
  features: [
    'Phishing URL Classification',
    'Feature Extraction from URLs',
    'ML Model Training & Evaluation',
    'Real-time Link Analysis',
    'Accuracy & Performance Metrics'
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
            A collection of projects showcasing my skills in design, development, and problem-solving
          </p>
        </motion.div>

        {/* Horizontal scroll container */}
        <div className="flex gap-4 overflow-x-auto scrollbar-hide py-4">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="w-[360px] flex-shrink-0 bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow flex flex-col"
            >
              <div className="h-48 bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center text-6xl">
                {project.image}
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="text-sm text-gray-900 uppercase tracking-wider mb-2 font-semibold">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-1">{project.title}</h3>
                <p className="text-gray-600 text-base mb-4 leading-relaxed line-clamp-2">{project.description}</p>

                <div className="mb-4">
                  <div className="text-sm text-gray-900 uppercase tracking-wider mb-2 font-semibold">Key Features</div>
                  <div className="grid grid-cols-1 gap-1.5">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <div key={i} className="text-sm text-gray-700 flex items-center gap-2">
                        <Star size={12} className="text-gray-900 flex-shrink-0" /> 
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((t, i) => (
                    <span key={i} className="px-3 py-1.5 bg-gray-100 text-gray-900 text-sm rounded font-medium">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto">
                  <motion.a whileHover={{ scale: 1.05 }} href="#"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-900 text-white rounded text-sm font-medium">
                    <Github size={16} /> Code
                  </motion.a>
                  <motion.a whileHover={{ scale: 1.05 }} href="#"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-white border-2 border-gray-900 text-gray-900 rounded text-sm font-medium">
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


