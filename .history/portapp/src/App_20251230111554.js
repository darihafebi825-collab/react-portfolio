import Home from "./Pages/Home";
import Abo from "./Pages/Abo";
import Exp from "./Pages/Exp";
import Proj from "./Pages/Proj";
import Skil from "./Pages/Skil";
import Edu from "./Pages/Edu";
import Cont from "./Pages/Cont";

function App() {
  return (
    <>
      <Home />
      <Abo />
      <Exp />   {/* MUST be here */}
      <Proj />
      <Skil />
      <Edu />
      <Cont />
    </>
  );
}

export default App;

