import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Art } from "./components/Pages/Art";
import { Contact } from "./components/Pages/Contact";
import { Skateboards } from "./components/Pages/Skateboards";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/art" element={<Art />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/skateboards" element={<Skateboards />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
