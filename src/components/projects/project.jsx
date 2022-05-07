import React from "react";
import "./project.css";



function Project() {
  const Data=[
    {
    img:"./img/site1.jpg",
    protitle:'Travelling Site',
    sitelink:'https://sbtravel.netlify.app',
    code:"https://github.com/Sudhanshubhatt12/travelling-site"
    },
    {
    img:"./img/site3.jpg",
    protitle:'Music Player',
    sitelink:'https://sbmusic.netlify.app',
    code:"https://github.com/Sudhanshubhatt12/MusicPlayer"
    },
    {
    img:"./img/site2.jpg",
    protitle:'Weather App',
    sitelink:'https://sb-weather-app.netlify.app',
    code:"https://github.com/Sudhanshubhatt12/live-weather"
    },
    {
    img:"./img/site4.jpg",
    protitle:'Dashboard',
    sitelink:'https://admindashboo.netlify.app',
    code:"https://github.com/Sudhanshubhatt12/dashboard"
    },]
  return (
    <section id="projects">
    
      <div className="container">

      <div className="outercont">
        {
          Data.map((val,index)=>{
  
            return(
              <div className="procard" key={index}>
              <div className="img">
                <img src={val.img} alt="img" />
              </div>
              <div className="detail">
                <h3 className="proheading">{val.protitle}</h3>
                <button className="btn"><a href={val.sitelink}>View Site</a></button>
                <button className="btn"><a href={val.code}>Code</a></button>
              </div>

              </div>
            )
          })
        }
      </div>
      </div>
    </section>
  );
}

export default Project;
