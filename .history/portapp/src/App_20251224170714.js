import React from "react";
import Home from "./Components/Pages/Home";


function App() {
  return (
    <div className="App">
      <Home />

      <img src={process.env.PUBLIC_URL + "/dari.png"} alt="Test" style={{ width: 200, height: 200 }} />

    </div>
  );
}

export default App;

