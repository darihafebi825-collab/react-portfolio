import React from 'react';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';
import Education from './Pages/Education';
import Contact from './Pages/Contact';
import { Routes, Route } from 'react-router-dom';
import Mynavbar from './Mynavbar';   // ✅ add navbar here

const MainRouter = () => {
  return (
    <div>
      {/* ✅ Navbar must be above Routes */}
      <Mynavbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<Education />} />
        <Route path="/education" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default MainRouter;