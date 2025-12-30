import React from "react";
import { Link } from "react-router-dom";
import "../styles/HomePage.css";

const HomePage = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">CodeScan</h1>
      <p className="home-subtitle">Real-Time Error Finder & Debug Assistant</p>

      <div className="home-box">
        <p className="home-description">
          Detect syntax errors instantly, debug smarter, and fix your code faster.
        </p>

        <Link to="/editor">
          <button className="home-btn">Start Coding →</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
import React from "react";
import { Link } from "react-router-dom";
import "../styles/HomePage.css";

const HomePage = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">CodeScan</h1>
      <p className="home-subtitle">Real-Time Error Finder & Debug Assistant</p>

      <div className="home-box">
        <p className="home-description">
          Detect syntax errors instantly, debug smarter, and fix your code faster.
        </p>

        <Link to="/editor">
          <button className="home-btn">Start Coding →</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
