import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram, Mail, Phone, MapPin, ExternalLink, Menu, X, Briefcase, Code2, GraduationCap, Award, Zap, Calendar, User, MessageSquare, Send, ChevronRight, Star } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navItems = ['Home', 'About', 'Experience', 'Projects', 'Skills', 'Education', 'Contact'];
  
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div whileHover={{ scale: 1.05 }} className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            DS
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <button key={item} onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors relative group">
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            {[{ icon: Linkedin, url: '#' }, { icon: Github, url: '#' }, { icon: Twitter, url: '#' }].map((social, idx) => (
              <motion.a key={idx} href={social.url} whileHover={{ scale: 1.1, y: -2 }} className="text-gray-700 hover:text-gray-900">
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
          
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="md:hidden pb-4">
            {navItems.map(item => (
              <button key={item} onClick={() => { document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' }); setIsMobileMenuOpen(false); }}
                className="block w-full text-left py-2 text-gray-700">{item}</button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  return (
    <section ref={ref} id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      {[...Array(20)].map((_, i) => (
        <motion.div key={i} className="absolute rounded-full bg-gray-900/5" 
          style={{ width: Math.random() * 300 + 50, height: Math.random() * 300 + 50, left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
          animate={{ y: [0, Math.random() * 50 - 25], x: [0, Math.random() * 50 - 25], scale: [1, 1.1, 1] }}
          transition={{ duration: Math.random() * 10 + 10, repeat: Infinity, repeatType: "reverse" }} />
      ))}
      
      <motion.div style={{ y, opacity }} className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
          <motion.div className="mb-6 inline-block">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-gray-900 to-gray-600 rounded-full flex items-center justify-center text-white text-5xl shadow-xl">
              👨‍💻
              
            </div>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
            Hi, I'm <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">Dariha Suresh</span>
          </h1>
          
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {['Full Stack Developer', 'Machine Learning Engineer', 'Problem Solver'].map((role, idx) => (
              <motion.span key={idx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + idx * 0.1 }}
                className="px-4 py-2 bg-white shadow-md rounded-full text-sm font-medium text-gray-700">
                {role}
              </motion.span>
            ))}
          </div>
          
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Passionate about creating elegant solutions to complex problems. Specialized in building scalable web applications with modern technologies and beautiful user experiences.
          </motion.p>
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="flex flex-wrap justify-center gap-4">
            <motion.button whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(0,0,0,0.15)" }} whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gray-900 text-white rounded-full font-semibold shadow-lg flex items-center gap-2">
              Let's Connect <Send size={18} />
            </motion.button>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold shadow-lg border-2 border-gray-200 flex items-center gap-2">
              View Projects <ChevronRight size={18} />
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gray-900 mx-auto" />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="aspect-square bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl shadow-2xl flex items-center justify-center text-white">
              <div className="text-center p-8">
                <User size={80} className="mx-auto mb-6" />
                <h3 className="text-3xl font-bold mb-2">Dariha</h3>
                <p className="text-gray-300 text-lg">Full Stack Developer</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
  I'm a passionate fresher who has completed 11+ academic projects across
  web development and machine learning. My journey in tech is driven by a
  strong curiosity for building intelligent, well-designed applications.
  I enjoy combining clean code with unique UI/UX design to create impactful
  and user-focused digital solutions.
</p>

              <p className="text-gray-700 leading-relaxed text-lg">
                I specialize in full-stack development, with expertise in React and modern web technologies. I believe in writing clean, maintainable code and creating intuitive user experiences.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-6">
                {[
                  { icon: Briefcase, label: 'Fresher', desc: 'Experience' },
                  { icon: Award, label: '10+ Projects', desc: 'Completed' },
                  { icon: Star, label: 'Not yet begin', desc: 'Worldwide' },
                  { icon: Code2, label: '10+ Tech', desc: 'Stacks' }
                ].map((stat, idx) => (
                  <motion.div key={idx} whileHover={{ scale: 1.05 }} className="bg-gray-50 p-4 rounded-lg text-center">
                    <stat.icon className="mx-auto mb-2 text-gray-900" size={28} />
                    <div className="font-bold text-gray-900">{stat.label}</div>
                    <div className="text-sm text-gray-600">{stat.desc}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  const experiences = [
  {
  title: 'Web Development – React JS',
  company: 'Shristi Innovative',
  period: 'Apr 2024',
  location: 'Technopark, Trivandrum',
  description: 'Built dynamic UI components and implemented routing in React.',
  tech: [
    'React JS',
    'JavaScript (ES6+)',
    'HTML5',
    'CSS3',
    'React Router',
    'Tailwind CSS',
    'Git & GitHub'
  ]
}
,
    {
  title: 'Machine Learning Engineer',
  company: 'Ms SquareD Software',
  period: 'Mar – Jun 2025',
  location: 'Technopark, Trivandrum',
  description: 'Contributed to training and testing models for yoga pose recognition',
  tech: [
    'Python',
    'TensorFlow',
    'Keras',
    'PyTorch',
    'OpenCV',
    'NumPy',
    'Pandas',
    'Scikit-learn',
    'Jupyter Notebook',
    'Git & GitHub'
  ]
}
,
    {
      title: 'Web developer', 
      company: 'zalima development pvt ltd', 
      period: 'dec2025-present', 
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
    <section id="experience" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <Briefcase size={40} /> Work Experience
          </h2>
          <div className="w-20 h-1 bg-gray-900 mx-auto" />
        </motion.div>
        
        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 hidden md:block" />
          
          {experiences.map((exp, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }} className="relative mb-16 last:mb-0">
              <div className={`flex flex-col md:flex-row gap-8 items-start ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                <div className="md:w-1/2 md:text-right md:pr-12">
                  <motion.div whileHover={{ scale: 1.02, boxShadow: "0 20px 50px rgba(0,0,0,0.1)" }}
                    className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                    <div className="flex items-start justify-between mb-4">
                      <div className={idx % 2 === 0 ? 'text-left' : 'text-right md:text-left'}>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                        <p className="text-lg text-gray-700 font-medium mb-2">{exp.company}</p>
                        <p className="text-sm text-gray-500 mb-1 flex items-center gap-2">
                          <Calendar size={14} /> {exp.period}
                        </p>
                        <p className="text-sm text-gray-500 flex items-center gap-2">
                          <MapPin size={14} /> {exp.location}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4 italic">{exp.description}</p>
                    
                    <ul className={`space-y-2 mb-4 ${idx % 2 === 0 ? 'text-left' : 'text-left'}`}>
  {exp.responsibilities?.map((resp, i) => (
    <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
      <ChevronRight size={16} className="mt-0.5 flex-shrink-0 text-gray-900" />
      <span>{resp}</span>
    </li>
  ))}
</ul>

                    
                    <div className={`flex flex-wrap gap-2 ${idx % 2 === 0 ? 'justify-start' : 'justify-start'}`}>
                      {exp.tech.map((t, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-900 text-white text-xs rounded-full font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
                
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gray-900 rounded-full transform -translate-x-1/2 mt-8 hidden md:block border-4 border-white shadow-lg" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
   
    {
      title: 'Social Media Dashboard',
      category: 'Analytics',
      description: 'Real-time analytics dashboard for social media metrics with data visualization and reporting',
      image: '📊',
      tech: ['Vue.js', 'Firebase', 'D3.js', 'TailwindCSS'],
      features: ['Real-time Data', 'Custom Reports', 'Interactive Charts', 'Multi-platform']
    },
    {
      title: 'Task Management App',
      category: 'Productivity',
      description: 'Collaborative project management tool with kanban boards, time tracking, and team collaboration',
      image: '✅',
      tech: ['React', 'Express', 'PostgreSQL', 'Socket.io'],
      features: ['Kanban Boards', 'Time Tracking', 'Team Chat', 'File Sharing']
    },
    {
      title: 'AI Content Generator',
      category: 'Machine Learning',
      description: 'AI-powered content creation tool using machine learning for automated content generation',
      image: '🤖',
      tech: ['Python', 'React', 'TensorFlow', 'AWS'],
      features: ['AI Generation', 'Multiple Formats', 'Cloud Processing', 'API Access']
    },
    {
      title: 'Real Estate Portal',
      category: 'Web Platform',
      description: 'Property listing platform with advanced search, virtual tours, and agent management system',
      image: '🏠',
      tech: ['Next.js', 'Prisma', 'PostgreSQL', 'Maps API'],
      features: ['Virtual Tours', 'Advanced Search', 'Agent Portal', 'Mobile App']
    },
    {
      title: 'Fitness Tracker',
      category: 'Mobile App',
      description: 'Mobile-first fitness application with workout plans, nutrition tracking, and progress analytics',
      image: '💪',
      tech: ['React Native', 'Node.js', 'MongoDB', 'Redux'],
      features: ['Workout Plans', 'Nutrition Tracking', 'Progress Charts', 'Social Features']
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
        <div className="flex gap-6 overflow-x-auto scrollbar-hide py-4">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="min-w-[300px] flex-shrink-0 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow"
            >
              <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center text-8xl">
                {project.image}
              </div>

              <div className="p-6">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-2 font-semibold">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.description}</p>

                <div className="mb-4">
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-2 font-semibold">Key Features</div>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, i) => (
                      <div key={i} className="text-xs text-gray-700 flex items-center gap-1">
                        <Star size={10} className="text-gray-900" /> {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded font-medium">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <motion.a whileHover={{ scale: 1.05 }} href="#"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium">
                    <Github size={16} /> Code
                  </motion.a>
                  <motion.a whileHover={{ scale: 1.05 }} href="#"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white border-2 border-gray-900 text-gray-900 rounded-lg text-sm font-medium">
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
const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: '🎨',
      skills: [
        { name: 'React', level: 95, color: 'bg-blue-500' },
        { name: 'Vue.js', level: 85, color: 'bg-green-500' },
        { name: 'TypeScript', level: 90, color: 'bg-blue-600' },
        { name: 'Next.js', level: 88, color: 'bg-gray-900' },
        { name: 'TailwindCSS', level: 92, color: 'bg-cyan-500' }
      ]
    },
    {
      title: 'Backend Development',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 90, color: 'bg-green-600' },
        { name: 'Python', level: 85, color: 'bg-yellow-500' },
        { name: 'PostgreSQL', level: 88, color: 'bg-blue-700' },
        { name: 'MongoDB', level: 82, color: 'bg-green-700' },
        { name: 'Express', level: 87, color: 'bg-gray-700' }
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: '☁️',
      skills: [
        { name: 'Git', level: 93, color: 'bg-orange-600' },
        { name: 'Docker', level: 80, color: 'bg-blue-500' },
        { name: 'AWS', level: 75, color: 'bg-orange-500' },
        { name: 'CI/CD', level: 78, color: 'bg-purple-600' },
        { name: 'Linux', level: 85, color: 'bg-gray-800' }
      ]
    },
    {
      title: 'Design & Others',
      icon: '🎯',
      skills: [
        { name: 'UI/UX Design', level: 85, color: 'bg-pink-500' },
        { name: 'Figma', level: 88, color: 'bg-purple-500' },
        { name: 'Responsive Design', level: 95, color: 'bg-indigo-500' },
        { name: 'REST APIs', level: 90, color: 'bg-teal-500' },
        { name: 'GraphQL', level: 80, color: 'bg-pink-600' }
      ]
    }
  ];
  
  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <Zap size={40} /> Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gray-900 mx-auto mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="text-center mb-6">
                <div className="text-5xl mb-3">{category.icon}</div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-semibold text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.1 }} className={`h-full ${skill.color} rounded-full`} />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

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

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 3000);
    }
  };
  
  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'john.doe@example.com', link: 'mailto:john.doe@example.com' },
    { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', link: 'tel:+15551234567' },
    { icon: MapPin, label: 'Location', value: 'San Francisco, CA', link: '#' }
  ];
  
  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', url: '#', color: 'hover:bg-blue-600' },
    { icon: Github, label: 'GitHub', url: '#', color: 'hover:bg-gray-800' },
    { icon: Twitter, label: 'Twitter', url: '#', color: 'hover:bg-blue-400' },
    { icon: Instagram, label: 'Instagram', url: '#', color: 'hover:bg-pink-600' }
  ];
  
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <MessageSquare size={40} /> Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gray-900 mx-auto mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you!
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, idx) => (
                <motion.a key={idx} href={info.link} whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md border border-gray-100">
                  <div className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-medium">{info.label}</div>
                    <div className="text-gray-900 font-semibold">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-4">Follow Me</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, idx) => (
                  <motion.a key={idx} href={social.url} whileHover={{ scale: 1.1, y: -5 }}
                    className={`w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center ${social.color} transition-colors`}
                    aria-label={social.label}>
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input type="text" value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10 transition-all"
                    placeholder="Your Name" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10 transition-all"
                    placeholder="your.email@example.com" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10 transition-all resize-none"
                    placeholder="Your message..." />
                </div>
                
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={handleSubmit}
                  className="w-full bg-gray-900 text-white py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                  {isSubmitted ? (
                    <>✓ Message Sent!</>
                  ) : (
                    <><Send size={18} /> Send Message</>
                  )}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const quickLinks = ['Home', 'About', 'Experience', 'Projects', 'Skills', 'Education', 'Contact'];
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">John Doe</h3>
            <p className="text-gray-400 leading-relaxed">
              Full Stack Developer passionate about creating innovative digital solutions and beautiful user experiences.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map(link => (
                <button key={link}
                  onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white text-left transition-colors text-sm">
                  {link}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex gap-3 mb-4">
              {[Linkedin, Github, Twitter, Instagram].map((Icon, idx) => (
                <motion.a key={idx} href="#" whileHover={{ scale: 1.1, y: -3 }}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
            <p className="text-gray-400 text-sm">john.doe@example.com</p>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">© 2024 John Doe. All rights reserved.</p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-gray-400 hover:text-white text-sm flex items-center gap-2 transition-colors">
            Back to top <ChevronRight size={16} className="rotate-[-90deg]" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="font-sans antialiased bg-white text-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}