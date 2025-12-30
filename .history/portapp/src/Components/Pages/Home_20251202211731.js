import React from "react";
import "./Home.css";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="home-section" id="home">
      <div className="home-content">
        <h1 className="home-title">
          <span>Hi,</span> <span>I'm</span> <span>Dariha.A</span>
        </h1>
        <p className="home-tagline">
          <span>A</span> <span>Passionate</span> <span>AI</span> <span>Product</span> <span>Developer</span>
        </p>
        <Link to="/projects" className="home-btn">
          View My Work
        </Link>
      </div>

      
    </section>
  );
};

export default Home;



