import React from "react";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Contact from "./Contact/Contact";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";

function Main() {
  return (
    <>
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default Main;
