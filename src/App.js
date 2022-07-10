import React from "react";
import "./App.css"

import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Education from "./components/Education";

function App() {
  return (
    <>
      <Header />
      <Intro />
      <Projects />
      <Skills />
      <Education />
      <Footer />
    </>
  );
}

export default App;
