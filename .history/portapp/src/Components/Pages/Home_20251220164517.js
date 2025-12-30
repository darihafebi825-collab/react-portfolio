import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram, Mail, Phone, MapPin, ExternalLink, ChevronDown, Menu, X, Calendar, Briefcase, GraduationCap, Code } from 'lucide-react';

// Animated Section Wrapper
const AnimatedSection = ({ children, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Typing Animation Component
const TypingAnimation = ({ texts, className = "" }) => {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const currentText = texts[textIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentText.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);
    
    return () => clearTimeout(timeout);
  }, [displayText, textIndex, isDeleting, texts]);
  
  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

// Navbar Component
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navItems = ['Home', 'Experience', 'Projects', 'Skills', 'Education', 'Contact'];
  const socialLinks = [
    { icon: Linkedin, url: '#', label: 'LinkedIn' },
    { icon: Github, url: '#', label: 'GitHub' },
    { icon: Twitter, url: '#', label: 'Twitter' },
    { icon: Instagram, url: '#', label: 'Instagram' }
  ];
  
  const scrollToSection = (section) => {
    const element = document.getElementById(section.toLowerCase());
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };
  
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold text-white cursor-pointer"
          >
            Portfolio
          </motion.div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item)}
                whileHover={{ scale: 1.1, color: '#888' }}
                className="text-white hover:text-gray-400 transition-colors"
              >
                {item}
              </motion.button>
            ))}
          </div>
          
          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.url}
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-white hover:text-gray-400 transition-colors"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-black/95 backdrop-blur-sm"
        >
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left text-white hover:text-gray-400 py-2"
              >
                {item}
              </button>
            ))}
            <div className="flex space-x-4 pt-4 border-t border-gray-800">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  className="text-white hover:text-gray-400"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

// Hero Section
const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/5 rounded-full"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Hi, I'm <span className="text-white">John Doe</span>
          </h1>
          <div className="text-2xl md:text-4xl text-gray-400 mb-8 h-12">
            <TypingAnimation
              texts={['Full Stack Developer', 'UI/UX Designer', 'Problem Solver', 'Tech Enthusiast']}
            />
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto mb-8"
          >
            Passionate about creating elegant solutions to complex problems.
            Specialized in building scalable web applications with modern technologies.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors"
          >
            Get In Touch
          </motion.button>
        </motion.div>
        
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown size={32} className="text-white/50" />
        </motion.div>
      </div>
    </section>
  );
};

// Experience Section
const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Corp',
      period: '2022 - Present',
      responsibilities: [
        'Led team of 5 developers in building scalable web applications',
        'Implemented microservices architecture reducing load time by 40%',
        'Mentored junior developers and conducted code reviews'
      ],
      tech: ['React', 'Node.js', 'PostgreSQL', 'AWS']
    },
    {
      title: 'Full Stack Developer',
      company: 'Innovation Labs',
      period: '2020 - 2022',
      responsibilities: [
        'Developed RESTful APIs serving 100k+ daily active users',
        'Optimized database queries improving performance by 60%',
        'Collaborated with design team to implement responsive UIs'
      ],
      tech: ['Vue.js', 'Express', 'MongoDB', 'Docker']
    },
    {
      title: 'Junior Developer',
      company: 'StartUp Inc',
      period: '2018 - 2020',
      responsibilities: [
        'Built and maintained client-facing web applications',
        'Participated in agile development processes',
        'Implemented automated testing increasing code coverage to 85%'
      ],
      tech: ['JavaScript', 'React', 'Python', 'MySQL']
    }
  ];
  
  return (
    <section id="experience" className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 flex items-center justify-center">
            <Briefcase className="mr-4" />
            Experience
          </h2>
        </AnimatedSection>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-black/20" />
          
          {experiences.map((exp, idx) => (
            <AnimatedSection key={idx} className="relative mb-16">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`flex flex-col md:flex-row items-start ${
                  idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                } gap-8`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-black rounded-full transform -translate-x-1/2 mt-2" />
                
                <div className={`flex-1 ${idx % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'} pl-16 md:pl-0`}>
                  <motion.div
                    whileHover={{ boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                    className="bg-gray-50 p-6 rounded-lg border border-black/10"
                  >
                    <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                    <p className="text-gray-600 mb-2">{exp.company}</p>
                    <p className="text-sm text-gray-500 mb-4 flex items-center gap-2 justify-start md:justify-end">
                      <Calendar size={16} />
                      {exp.period}
                    </p>
                    <ul className="space-y-2 mb-4 text-left">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="text-gray-700">• {resp}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 justify-start md:justify-end">
                      {exp.tech.map((t, i) => (
                        <span key={i} className="px-3 py-1 bg-black text-white text-sm rounded-full">
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

// Projects Section
const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      demo: '#',
      image: '🛒'
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media metrics with real-time data visualization and reporting',
      tech: ['Vue.js', 'Firebase', 'D3.js', 'TailwindCSS'],
      github: '#',
      demo: '#',
      image: '📊'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with kanban boards, time tracking, and team collaboration',
      tech: ['React', 'Express', 'PostgreSQL', 'Socket.io'],
      github: '#',
      demo: '#',
      image: '✅'
    },
    {
      title: 'AI Content Generator',
      description: 'AI-powered content creation tool using machine learning for automated content generation',
      tech: ['Python', 'React', 'TensorFlow', 'AWS'],
      github: '#',
      demo: '#',
      image: '🤖'
    },
    {
      title: 'Real Estate Portal',
      description: 'Property listing platform with advanced search, virtual tours, and agent management system',
      tech: ['Next.js', 'Prisma', 'PostgreSQL', 'Maps API'],
      github: '#',
      demo: '#',
      image: '🏠'
    },
    {
      title: 'Fitness Tracker',
      description: 'Mobile-first fitness application with workout plans, nutrition tracking, and progress analytics',
      tech: ['React Native', 'Node.js', 'MongoDB', 'Redux'],
      github: '#',
      demo: '#',
      image: '💪'
    }
  ];
  
  return (
    <section id="projects" className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 flex items-center justify-center">
            <Code className="mr-4" />
            Projects
          </h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <AnimatedSection key={idx}>
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 h-full flex flex-col"
              >
                <div className="text-6xl text-center py-8 bg-white/5">
                  {project.image}
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-2 py-1 bg-white/10 text-xs rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      href={project.github}
                      className="flex items-center gap-2 text-sm hover:text-gray-400 transition-colors"
                    >
                      <Github size={16} /> Code
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      href={project.demo}
                      className="flex items-center gap-2 text-sm hover:text-gray-400 transition-colors"
                    >
                      <ExternalLink size={16} /> Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

// Skills Section
const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', level: 95 },
        { name: 'Vue.js', level: 85 },
        { name: 'TypeScript', level: 90 },
        { name: 'TailwindCSS', level: 92 }
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'PostgreSQL', level: 88 },
        { name: 'MongoDB', level: 82 }
      ]
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'Git', level: 93 },
        { name: 'Docker', level: 80 },
        { name: 'AWS', level: 75 },
        { name: 'CI/CD', level: 78 }
      ]
    }
  ];
  
  return (
    <section id="skills" className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Skills & Technologies</h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <AnimatedSection key={idx}>
              <div className="bg-gray-50 p-6 rounded-lg border border-black/10">
                <h3 className="text-2xl font-bold mb-6 text-center">{category.category}</h3>
                <div className="space-y-6">
                  {category.skills.map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold">{skill.name}</span>
                        <span className="text-gray-600">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: i * 0.1 }}
                          className="h-full bg-black"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

// Education Section
const Education = () => {
  const education = [
    {
      degree: 'Master of Science in Computer Science',
      institution: 'Tech University',
      period: '2016 - 2018',
      achievements: ['GPA: 3.9/4.0', 'Best Thesis Award', 'Research in Machine Learning']
    },
    {
      degree: 'Bachelor of Engineering in Software Engineering',
      institution: 'Engineering College',
      period: '2012 - 2016',
      achievements: ['First Class Honours', 'Dean\'s List', 'Hackathon Winner 2015']
    }
  ];
  
  return (
    <section id="education" className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 flex items-center justify-center">
            <GraduationCap className="mr-4" />
            Education
          </h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, idx) => (
            <AnimatedSection key={idx}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10"
              >
                <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                <p className="text-gray-400 mb-2">{edu.institution}</p>
                <p className="text-sm text-gray-500 mb-4 flex items-center gap-2">
                  <Calendar size={16} />
                  {edu.period}
                </p>
                <ul className="space-y-2">
                  {edu.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-300">• {achievement}</li>
                  ))}
                </ul>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section
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
  
  return (
    <section id="contact" className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Get In Touch</h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <AnimatedSection>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="flex items-center gap-4">
                <Mail className="text-black" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-600">john.doe@example.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-black" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-black" />
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-gray-600">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection>
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:border-black transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:border-black transition-colors"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:border-black transition-colors resize-none"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSubmit}
                className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                {isSubmitted ? 'Message Sent!' : 'Send Message'}
              </motion.button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const quickLinks = ['Home', 'Experience', 'Projects', 'Skills', 'Education', 'Contact'];
  const socialLinks = [
    { icon: Linkedin, url: '#', label: 'LinkedIn' },
    { icon: Github, url: '#', label: 'GitHub' },
    { icon: Twitter, url: '#', label: 'Twitter' },
    { icon: Instagram, url: '#', label: 'Instagram' }
  ];
  
  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Portfolio</h3>
            <p className="text-gray-400">
              Building digital experiences that make a difference.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.url}
                  whileHover={{ scale: 1.2, y: -5 }}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-gray-400">
          <p>© {currentYear} John Doe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
export default function App() {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}