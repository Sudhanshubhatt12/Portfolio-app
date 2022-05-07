import React from "react";
import "./skills.css";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";

const Skills = () => {
  return (
    <section id="skills">
    
      <div className="container">
        <div className="skill-card">
          <div className="card">
            <svg width="300" height="300" className="circle">
              <circle cx="70" cy="70" r="50" />
            </svg>
            <h2>HTML</h2>
            <span className="icons">
              <FaHtml5 />
            </span>
            <p>
              The HyperText Markup Language or HTML is the standard markup
              language for documents designed to be displayed in a web browser.
            </p>
          </div>
          <div className="card">
            <svg width="300" height="300" className="circle1">
              <circle cx="70" cy="70" r="50" />
            </svg>
            <h2>CSS/SCSS</h2>
            <span className="icons">
              <FaCss3Alt />
            </span>
            <p>
              Cascading Style Sheets is a style sheet language used for
              describing the presentation of a document written in a markup
              language such as HTML.
            </p>
          </div>
          <div className="card">
            <svg width="300" height="300" className="circle2">
              <circle cx="70" cy="70" r="50" />
            </svg>
            <h2>JAVASCRIPT</h2>
            <span className="icons">
              <DiJavascript1 />
            </span>
            <p>
              JavaScript, often abbreviated JS, is a programming language that
              is one of the core technologies of the World Wide Web, alongside
              HTML and CSS.
            </p>
          </div>
          <div className="card">
            <svg width="300" height="300" className="circle3">
              <circle cx="70" cy="70" r="50" />
            </svg>
            <h2>REACT-JS</h2>
            <span className="icons">
              <FaReact />
            </span>
            <p>
              React is a free and open-source front-end JavaScript library for
              building user interfaces based on UI components.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
