import React from "react";
import "./home.css";
import CV from "../../assets/cv.pdf";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Logoo from "../../assets/logome.png";

const Home = () => {
  return (
    <>
      <div className="container">
        <img src={Logoo} alt="logo" />
        <div className="home_main">
          <div className="home_centre">
            <div className="hometext">
              <svg className="namesvg">
                <text x="50%" y="70%" fill="transparent" textAnchor="middle">
                  Sudhanshu Bhatt
                </text>
              </svg>
              <h2>Front End Developer</h2>
              <div className="buttons">
                <a href={CV} download className="btn">
                  Download Cv
                </a>
                <a href="/Contact" className="btn btn-primary">
                  Hire Me
                </a>
              </div>
              <div className="socials">
                <a href="https://github.com/Sudhanshubhatt12">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/sudhanshu-bhatt-34420a1a8">
                  <FaLinkedin />
                </a>
                <a href="https://www.instagram.com/sudhanshu_bhatt12">
                  <FaInstagram />
                </a>
              </div>
            </div>
            <div className="homeimg">
              <img src="./img/bgimg.png" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
