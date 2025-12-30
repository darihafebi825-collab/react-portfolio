import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram, Mail, Phone, MapPin, ExternalLink, ChevronDown, Menu, X, Calendar, Briefcase, GraduationCap, Code, Award, Zap } from 'lucide-react';

const AnimatedSection = ({ children, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} transition={{ duration: 0.6 }} className={className}>
      {children}
    </motion.div>
  );
};

const TypingAnimation = ({ texts }) => {
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
  
  return <span>{displayText}<span className="animate-pulse">|</span></span>;
};

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
    { icon: Linkedin, url: '#' }, { icon: Github, url: '#' }, 
    { icon: Twitter, url: '#' }, { icon: Instagram, url: '#' }
  ];
  
  const scrollTo = (section) => {
    document.getElementById(section.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };
  
  return (
    <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div whileHover={{ scale: 1.05 }} className="text-xl font-bold text-white cursor-pointer">Portfolio</motion.div>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <motion.button key={item} onClick={() => scrollTo(item)} whileHover={{ scale: 1.1, y: -2 }} className="text-white hover:text-gray-400">{item}</motion.button>
            ))}
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((s, i) => (
              <motion.a key={i} href={s.url} whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.5 }} className="text-white"><s.icon size={20} /></motion.a>
            ))}
          </div>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-white">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="md:hidden bg-black/95">
          <div className="px-4 py-4 space-y-3">
            {navItems.map(item => <button key={item} onClick={() => scrollTo(item)} className="block w-full text-left text-white py-2">{item}</button>)}
            <div className="flex space-x-4 pt-4 border-t border-gray-800">
              {socialLinks.map((s, i) => <a key={i} href={s.url} className="text-white"><s.icon size={20} /></a>)}
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  return (
    <section ref={ref} id="home" className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)', backgroundSize: '100px 100px'}} />
        {[...Array(20)].map((_, i) => (
          <motion.div key={i} className="absolute bg-white/5 rounded-full blur-xl" 
            style={{width: Math.random() * 400 + 100, height: Math.random() * 400 + 100, left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`}}
            animate={{x: [0, Math.random() * 200 - 100], y: [0, Math.random() * 200 - 100], scale: [1, 1.3, 1]}}
            transition={{duration: Math.random() * 20 + 15, repeat: Infinity, repeatType: "reverse"}} />
        ))}
      </div>
      <motion.div style={{ y, opacity }} className="relative z-10 text-center px-4">
        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
          <motion.h1 className="text-6xl md:text-8xl font-bold mb-6" whileHover={{ scale: 1.05 }}>
            Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-white">John Doe</span>
          </motion.h1>
          <div className="text-3xl md:text-5xl text-gray-400 mb-8 h-16">
            <TypingAnimation texts={['Full Stack Developer', 'UI/UX Designer', 'Problem Solver', 'Tech Enthusiast']} />
          </div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Crafting digital experiences that merge creativity with functionality
          </motion.p>
          <div className="flex gap-4 justify-center">
            <motion.button whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(255,255,255,0.3)" }} whileTap={{ scale: 0.95 }} 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} 
              className="bg-white text-black px-10 py-4 rounded-full font-semibold">Let's Talk</motion.button>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-colors">View Work</motion.button>
          </div>
        </motion.div>
        <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => document.getElementById('experience').scrollIntoView({ behavior: 'smooth' })}>
          <ChevronDown size={40} className="text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};

const Experience = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const experiences = [
    { title: 'Senior Full Stack Developer', company: 'Tech Corp', period: '2022 - Present', 
      responsibilities: ['Led team of 5 developers', 'Reduced load time by 40%', 'Mentored junior developers'],
      tech: ['React', 'Node.js', 'PostgreSQL', 'AWS'], color: 'from-gray-900 to-black' },
    { title: 'Full Stack Developer', company: 'Innovation Labs', period: '2020 - 2022',
      responsibilities: ['Built APIs for 100k+ users', 'Improved performance by 60%', 'Implemented responsive UIs'],
      tech: ['Vue.js', 'Express', 'MongoDB', 'Docker'], color: 'from-black to-gray-900' },
    { title: 'Junior Developer', company: 'StartUp Inc', period: '2018 - 2020',
      responsibilities: ['Built web applications', 'Agile development', 'Increased test coverage to 85%'],
      tech: ['JavaScript', 'React', 'Python', 'MySQL'], color: 'from-gray-900 to-black' }
  ];
  
  return (
    <section id="experience" className="min-h-screen bg-white py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 flex items-center justify-center">
            <Briefcase className="mr-4" size={48} />Experience
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Hover to explore details</p>
        </AnimatedSection>
        <div className="flex gap-8 overflow-x-auto pb-8 px-4 snap-x snap-mandatory" style={{ scrollbarWidth: 'none' }}>
          {experiences.map((exp, idx) => (
            <motion.div key={idx} className="min-w-[350px] md:min-w-[450px] snap-center"
              initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.2 }}
              onHoverStart={() => setHoveredIndex(idx)} onHoverEnd={() => setHoveredIndex(null)}>
              <motion.div whileHover={{ scale: 1.05, z: 50, rotateY: 5, boxShadow: "0 30px 60px rgba(0,0,0,0.3)" }}
                className={`bg-gradient-to-br ${exp.color} text-white p-8 rounded-2xl h-full relative overflow-hidden cursor-pointer`}>
                <motion.div className="absolute inset-0 opacity-10" 
                  style={{backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px'}}
                  animate={hoveredIndex === idx ? { scale: 1.2 } : { scale: 1 }} />
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                      <p className="text-gray-300 mb-2">{exp.company}</p>
                    </div>
                    <Zap className={hoveredIndex === idx ? 'animate-pulse' : ''} />
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300 mb-6">
                    <Calendar size={16} />{exp.period}
                  </div>
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={hoveredIndex === idx ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }} className="overflow-hidden">
                    <ul className="space-y-2 mb-6">
                      {exp.responsibilities.map((resp, i) => (
                        <motion.li key={i} className="text-gray-200 text-sm" initial={{ x: -20, opacity: 0 }}
                          animate={hoveredIndex === idx ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }} transition={{ delay: i * 0.1 }}>• {resp}</motion.li>
                      ))}
                    </ul>
                  </motion.div>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t, i) => (
                      <motion.span key={i} className="px-3 py-1 bg-white/20 text-sm rounded-full" whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.3)" }}>{t}</motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-4">
          {experiences.map((_, idx) => <div key={idx} className={`h-2 rounded-full transition-all ${hoveredIndex === idx ? 'w-8 bg-black' : 'w-2 bg-gray-300'}`} />)}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const projects = [
    { title: 'E-Commerce Platform', description: 'Full-stack solution with payments and inventory', tech: ['React', 'Node.js', 'MongoDB', 'Stripe'], gradient: 'from-purple-600 to-blue-600', icon: '🛒' },
    { title: 'Social Dashboard', description: 'Real-time analytics with data visualization', tech: ['Vue.js', 'Firebase', 'D3.js'], gradient: 'from-pink-500 to-rose-500', icon: '📊' },
    { title: 'Task Manager', description: 'Collaborative tool with kanban boards', tech: ['React', 'Express', 'PostgreSQL'], gradient: 'from-green-500 to-emerald-600', icon: '✅' },
    { title: 'AI Generator', description: 'ML-powered content creation tool', tech: ['Python', 'React', 'TensorFlow'], gradient: 'from-orange-500 to-red-600', icon: '🤖' },
    { title: 'Real Estate Portal', description: 'Property listings with virtual tours', tech: ['Next.js', 'Prisma', 'Maps API'], gradient: 'from-cyan-500 to-blue-600', icon: '🏠' },
    { title: 'Fitness Tracker', description: 'Mobile fitness with workout plans', tech: ['React Native', 'Node.js'], gradient: 'from-yellow-500 to-orange-500', icon: '💪' }
  ];
  
  return (
    <section id="projects" className="min-h-screen bg-black text-white py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 flex items-center justify-center">
            <Code className="mr-4" size={48} />Projects
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">Touch to bring forward</p>
        </AnimatedSection>
        <div className="flex gap-6 overflow-x-auto pb-8 px-4 snap-x snap-mandatory">
          {projects.map((project, idx) => (
            <motion.div key={idx} className="min-w-[320px] md:min-w-[400px] snap-center"
              initial={{ opacity: 0, rotateY: -30 }} whileInView={{ opacity: 1, rotateY: 0 }} transition={{ delay: idx * 0.15 }}
              onHoverStart={() => setHoveredIndex(idx)} onHoverEnd={() => setHoveredIndex(null)}>
              <motion.div whileHover={{ scale: 1.1, z: 100, rotateX: 10, rotateY: -10 }} className="cursor-pointer" style={{ transformStyle: "preserve-3d" }}>
                <div className={`bg-gradient-to-br ${project.gradient} rounded-2xl overflow-hidden shadow-2xl`}>
                  <div className="relative h-48 flex items-center justify-center bg-black/20">
                    <motion.div animate={hoveredIndex === idx ? { scale: [1, 1.2, 1], rotate: [0, 360] } : { scale: 1, rotate: 0 }} className="text-8xl">{project.icon}</motion.div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-white/90 mb-4 text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((t, i) => <motion.span key={i} className="px-3 py-1 bg-white/20 text-xs rounded-full" whileHover={{ scale: 1.1 }}>{t}</motion.span>)}
                    </div>
                    <div className="flex gap-4">
                      <motion.a whileHover={{ scale: 1.1, x: 5 }} href="#" className="flex items-center gap-2 text-sm"><Github size={18} /> Code</motion.a>
                      <motion.a whileHover={{ scale: 1.1, x: 5 }} href="#" className="flex items-center gap-2 text-sm"><ExternalLink size={18} /> Demo</motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-6">
          {projects.map((_, idx) => <div key={idx} className={`h-2 rounded-full transition-all ${hoveredIndex === idx ? 'w-8 bg-white' : 'w-2 bg-gray-600'}`} />)}
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const skillCategories = [
    { category: 'Frontend', icon: '🎨', skills: [{name: 'React', level: 95}, {name: 'Vue.js', level: 85}, {name: 'TypeScript', level: 90}], color: 'from-blue-500 to-cyan-500' },
    { category: 'Backend', icon: '⚙️', skills: [{name: 'Node.js', level: 90}, {name: 'Python', level: 85}, {name: 'PostgreSQL', level: 88}], color: 'from-green-500 to-emerald-500' },
    { category: 'DevOps', icon: '☁️', skills: [{name: 'AWS', level: 75}, {name: 'Docker', level: 80}, {name: 'Git', level: 93}], color: 'from-purple-500 to-pink-500' }
  ];
  
  return (
    <section id="skills" className="min-h-screen bg-white py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-12">Skills</h2>
        </AnimatedSection>
        <div className="flex gap-8 overflow-x-auto pb-8 px-4 snap-x">
          {skillCategories.map((cat, idx) => (
            <motion.div key={idx} className="min-w-[320px] snap-center" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: idx * 0.15 }}
              onHoverStart={() => setHoveredCategory(idx)} onHoverEnd={() => setHoveredCategory(null)}>
              <motion.div whileHover={{ scale: 1.08, z: 50, rotateY: -5 }} className={`bg-gradient-to-br ${cat.color} text-white p-8 rounded-2xl cursor-pointer`}>
                <div className="flex items-center gap-4 mb-6">
                  <motion.div className="text-5xl" animate={hoveredCategory === idx ? { rotate: 360, scale: [1, 1.2, 1] } : {}}>{cat.icon}</motion.div>
                  <h3 className="text-2xl font-bold">{cat.category}</h3>
                </div>
                <div className="space-y-5">
                  {cat.skills.map((skill, i) => (
                    <motion.div key={i} initial={{ x: -20, opacity: 0 }} animate={hoveredCategory === idx ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }} transition={{ delay: i * 0.1 }}>
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold text-sm">{skill.name}</span>
                        <span className="text-sm">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                        <motion.div initial={{ width: 0 }} animate={hoveredCategory === idx ? { width: `${skill.level}%` } : { width: 0 }} className="h-full bg-white rounded-full" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Education = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const education = [
    { degree: 'MS Computer Science', institution: 'Tech University', period: '2016-2018', achievements: ['GPA 3.9/4.0', 'Best Thesis', 'ML Research'], icon: '🎓', color: 'from-indigo-600 to-purple-600' },
    { degree: 'BE Software Engineering', institution: 'Engineering College', period: '2012-2016', achievements: ['First Class', 'Dean\'s List', 'Hackathon Winner'], icon: '📚', color: 'from-blue-600 to-cyan-600' }
  ];
  
  return (
    <section id="education" className="min-h-screen bg-black text-white py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-12 flex items-center justify-center">
            <GraduationCap className="mr-4" size={48} />Education
          </h2>
        </AnimatedSection>
        <div className="flex gap-8 overflow-x-auto pb-8 px-4 snap-x justify-center">
          {education.map((edu, idx) => (
            <motion.div key={idx} className="min-w-[340px] snap-center" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.2 }}
              onHoverStart={() => setHoveredIndex(idx)} onHoverEnd={() => setHoveredIndex(null)}>
              <motion.div whileHover={{ scale: 1.1, z: 80, rotateX: 5, rotateY: 5 }} className={`bg-gradient-to-br ${edu.color} rounded-2xl p-8 cursor-pointer`}>
                <motion.div className="text-6xl mb-4 text-center" animate={hoveredIndex === idx ? { scale: [1, 1.3, 1], rotate: [0, 20, -20, 0] } : {}}>{edu.icon}</motion.div>
                <h3 className="text-2xl font-bold mb-2 text-center">{edu.degree}</h3>
                <p className="text-white/90 mb-2 text-center">{edu.institution}</p>
                <div className="flex items-center justify-center gap-2 text-sm mb-6"><Calendar size={16} />{edu.period}</div>
                <div className="space-y-3">
                  {edu.achievements.map((achievement, i) => (
                    <motion.div key={i} initial={{ x: -20, opacity: 0 }} animate={hoveredIndex === idx ? { x: 0, opacity: 1 } : { x: -20, opacity: 0.5 }} className="flex items-start gap-2">
                      <Award size={16} className="mt-1 flex-shrink-0" />
                      <span className="text-sm">{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
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
  const [focusedField, setFocusedField] = useState(null);
  
  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true);
      setTimeout(() => { setIsSubmitted(false); setFormData({ name: '', email: '', message: '' }); }, 3000);
    }
  };
  
  return (
    <section id="contact" className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">Let's Connect</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <AnimatedSection>
            <div className="space-y-8">
              {[{ icon: Mail, label: 'Email', value: 'john.doe@example.com', gradient: 'from-blue-500 to-cyan-500' },
                { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', gradient: 'from-green-500 to-emerald-500' },
                { icon: MapPin, label: 'Location', value: 'San Francisco, CA', gradient: 'from-purple-500 to-pink-500' }].map((item, idx) => (
                <motion.div key={idx} whileHover={{ x: 10, scale: 1.05 }} className="flex items-center gap-4 p-4 rounded-xl bg-gray-50">
                  <motion.div whileHover={{ rotate: 360 }} className={`p-3 rounded-lg bg-gradient-to-br ${item.gradient} text-white`}><item.icon size={24} /></motion.div>
                  <div>
                    <p className="font-semibold">{item.label}</p>
                    <p className="text-gray-600">{item.value}</p>
                  </div>
                </motion.div>
              ))}
              <div className="flex gap-4 pt-4">
                {[{ icon: Linkedin, color: 'hover:text-blue-600' }, { icon: Github, color: 'hover:text-gray-900' }].map((s, i) => (
                  <motion.a key={i} href="#" whileHover={{ scale: 1.2, rotate: 5 }} className={`p-3 bg-gray-100 rounded-lg ${s.color} transition-colors`}><s.icon size={24} /></motion.a>
                ))}
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="bg-gradient-to-br from-gray-900 to-black text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Send Message</h3>
              <div className="space-y-4">
                {[{ name: 'name', type: 'text', placeholder: 'Your Name', icon: '👤' },
                  { name: 'email', type: 'email', placeholder: 'Your Email', icon: '📧' }].map((field, idx) => (
                  <motion.div key={idx} animate={focusedField === field.name ? { scale: 1.02 } : { scale: 1 }}>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-xl">{field.icon}</span>
                      <input type={field.type} placeholder={field.placeholder} value={formData[field.name]}
                        onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                        onFocus={() => setFocusedField(field.name)} onBlur={() => setFocusedField(null)}
                        className="w-full pl-14 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-white/40 text-white placeholder-gray-400" />
                    </div>
                  </motion.div>
                ))}
                <motion.div animate={focusedField === 'message' ? { scale: 1.02 } : { scale: 1 }}>
                  <div className="relative">
                    <span className="absolute left-4 top-4 text-xl">💬</span>
                    <textarea placeholder="Your Message" value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      onFocus={() => setFocusedField('message')} onBlur={() => setFocusedField(null)} rows={5}
                      className="w-full pl-14 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-white/40 resize-none text-white placeholder-gray-400" />
                  </div>
                </motion.div>
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={handleSubmit}
                  className="w-full bg-white text-black py-4 rounded-xl font-semibold">{isSubmitted ? '✓ Sent!' : 'Send Message →'}</motion.button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const quickLinks = ['Home', 'Experience', 'Projects', 'Skills', 'Education', 'Contact'];
  return (
    <footer className="bg-black text-white py-12 px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        {[...Array(30)].map((_, i) => (
          <motion.div key={i} className="absolute bg-white rounded-full"
            style={{width: 3, height: 3, left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`}}
            animate={{y: [0, -30, 0], opacity: [0.2, 0.5, 0.2]}}
            transition={{duration: Math.random() * 3 + 2, repeat: Infinity, delay: Math.random() * 2}} />
        ))}
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Portfolio</h3>
            <p className="text-gray-400">Building digital experiences that matter</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map(link => (
                <button key={link} onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white text-left">{link}</button>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {[Linkedin, Github, Twitter, Instagram].map((Icon, idx) => (
                <motion.a key={idx} href="#" whileHover={{ scale: 1.2, y: -5 }} className="text-gray-400 hover:text-white"><Icon size={24} /></motion.a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-gray-400">
          <p>© 2024 John Doe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="font-sans antialiased">
      <Navbar /><Hero /><Experience /><Projects /><Skills /><Education /><Contact /><Footer />
    </div>
  );
}