import React, { useEffect } from "react";
import ReactGa from "react-ga";
import "./index.css";

import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home"
import About from "./routes/About"
import Projects from "./routes/Projects"
import Contact from "./routes/Contact"

function App() {

  useEffect(() => {
    ReactGa.initialize('UA-243892031-1')
    ReactGa.pageview('/')
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/About" element={< About />} />
        <Route path="/Projects" element={< Projects />} />
        <Route path="/Contact" element={< Contact />} />
      </Routes>
    </>
  );
}

export default App;
