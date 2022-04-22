import React from "react";
import Home from "./components/home/home";
import Nav from "./components/nav/Nav";
import About from "./components/about/about";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/project";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

const App = () => {
  return (
    <>
      <Home />
      <Nav />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
