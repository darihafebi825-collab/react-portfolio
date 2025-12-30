import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import Experience from './Pages/Experience';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';
import Education from './Pages/Education';
import Contact from './Pages/Contact';

import Portf from './Portf';

const MainRouter = () => {
  return (
    <Routes>
      <Route element={<Portf />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default MainRouter;
