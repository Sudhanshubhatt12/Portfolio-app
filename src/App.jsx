import React from "react";
import Home from "./components/home/home";
import Nav from "./components/nav/Nav";
import About from "./components/about/about";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/project";
import Contact from "./components/contact/contact";
import {Route,Routes} from 'react-router-dom'


const App = () => {
  return (
    <>
     <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
     
      <Route path="/About" element={<About />} />
      <Route path="/Skills" element={   <Skills />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Contact" element={ <Contact />} />
      
   
      
     
      </Routes>
    </>
  );
};

export default App;
