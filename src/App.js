import "./App.css";
import HomePage from "./component/homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./component/Contact";
import Portfolio from "./component/Portfolio";
import NavBar from "./component/Navbar";
import Skills from "./component/Skills";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
