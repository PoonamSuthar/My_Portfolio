import React from "react";
import "./index.css";
import Home from "./route/Home";
import About from "./route/About";
import Skills from "./route/Skills";
import Projects from "./route/Projects";
import Contact from "./route/Contact";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Skills" element={<Skills />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
    {/* <h1></h1> */}
    </>
  );
}

export default App;
