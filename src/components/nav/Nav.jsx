import React from "react";
import "./nav.css";
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <div className="navbar">
        <Link to='/'>Home</Link>

        <Link to="/About">About</Link>

        <Link to="/Skills">Skills</Link>

        <Link to="/Projects">Projects</Link>

        <Link to="/Contact">Contact Me</Link>
      </div>
    </>
  );
};

export default Nav;
