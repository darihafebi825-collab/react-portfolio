import React from "react";
import Navbar from "./Components/Pages/Navbar";
import Home from "./Components/Pages/Home";
import Abo from "./Components/Pages/Abo";
import Exp from "./Components/Pages/Exp";
import Proj from "./Components/Pages/Proj";
import Skil from "./Components/Pages/Skil";
import Edu from "./Components/Pages/Edu";
import Cont from "./Components/Pages/Cont";
import Footer from "./Components/Pages/Cont";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
 <Abo />
    <Exp />  
    <Proj/> 
    <Skil/> 
    <Edu/> 
     <Cont /> 
     <Footer /> 
    </div>
  );
}

export default App;

