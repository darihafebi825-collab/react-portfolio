import React from "react";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Home />

      {/* Dummy sections for smooth scroll */}
      <section id="projects" className="min-h-screen"></section>
      <section id="contact" className="min-h-screen"></section>
    </div>
  );
}

export default App;

