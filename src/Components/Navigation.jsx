import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css"; // External CSS file for styling

const Navigation = () => {
  return (
    <nav className="bottom-nav">
      <div className="nav-button">
        <Link to="/" className="nav-logo">Ease Navigations</Link>
        {/* <ul className="nav-links">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/projectideas">Project Idea</Link></li>
          <li><Link to="/resume">Resume</Link></li>
        
        </ul> */}
      </div>
    </nav>
  );
};

export default Navigation;
