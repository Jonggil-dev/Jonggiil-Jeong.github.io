import React from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import BrowserLayout from "./layouts/BrowserLayout";
import Career from "./components/Career";

function App() {
  return (
    <BrowserLayout>
      <Header />
      <Intro />
      <About />
      <Career />
      <Skills />
      <Projects />
      <Footer />
    </BrowserLayout>
  );
}

export default App;
