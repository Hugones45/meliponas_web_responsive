import "./App.css"
import { Home } from "./Pages/Home";

import { Surprise } from "./Pages/Surprise"
import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { PageCuriosities } from "./Pages/PageCuriosities";
import { Slider } from "./Pages/Slider";


function App() {


  return (
    <div >
      <NavBar />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/surprise" element={<Surprise />} />
        <Route path="/pageCuriosities" element={<PageCuriosities />} />
        <Route path="/lonelyOrSwarm" element={<Slider />} />

      </Routes>
    </div>
  );
}

export default App;
