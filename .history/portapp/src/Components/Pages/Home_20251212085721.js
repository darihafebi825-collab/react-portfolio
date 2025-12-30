import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
  };

  const handleAnalyze = () => {
    if (!file) {
      alert("Please upload a code file!");
      return;
    }

    // Pass file to the analysis page
    navigate("/analyze", { state: { file } });
  };

  return (
    <div className="home-container">
      <h1 className="home-title">CodeScan Pro</h1>
      <p className="home-subtitle">
        Multi-Language Error Finder & Debug Report Generator
      </p>

      <div className="home-box">
        <p className="home-description">
          Upload your code file (.c, .cpp, .java, .py).  
          Our system will detect errors and generate a detailed debugging report.
        </p>

        <input
          type="file"
          accept=".c,.cpp,.java,.py"
          onChange={handleFileUpload}
          className="file-input"
        />

        <button className="home-btn" onClick={handleAnalyze}>
          Analyze Code →
        </button>

        {file && (
          <p className="file-name">Selected File: {file.name}</p>
        )}
      </div>
    </div>
  );
};

export default Home;
