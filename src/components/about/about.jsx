import React from "react";
import "./about.css";
import PIC from "../../assets/sudimg.png";

const About = () => {
  return (
    <section id="about">
      <div className="about-main">
        <div className="mypic">
        
          <div className="myimg">
            <img src={PIC} alt="img" />
          </div>
        </div>
        <div className="about-cont">
          <h2>Hey! I'm Sudhanshu</h2>
          <p>
            “ A web designer from Dehradun, Uttarakhand. I live with my family
            in hometown. I graduated in 2019 with a bachelor’s degree in
            Mechanical stream from Hydropower Institute of Technology, after
            that i prepared for govt. services for two years but didn't works
            for me . Then I started my web designing journey and enjoys it
            lot.to see some of my works click below.”
          </p>
          <a href="/Projects" className="btn btn-primary">
            Click Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
