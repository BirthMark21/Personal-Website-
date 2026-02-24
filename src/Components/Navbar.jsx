import React, { useContext, useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../img/misganaw_logo.png";
import { AppContext } from "../MyContext";
import "./nav.css";

const Navbar = () => {
  const { loading } = useContext(AppContext);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLinkClick = () => {
    setIsNavOpen(false);
  };

  const handleToggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-light fixed-top py-3 ${scrolled ? 'scrolled' : ''}`} id="myNav">
      <div className="container">
        <NavLink to="/" className="navbar-brand fw-bold">
          <img 
            src={logo} 
            alt="CBCD Logo" 
            className="navbar-logo"
          />
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggleNavbar}
          aria-controls="navbarSupportedContent"
          aria-expanded={isNavOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`} id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto me-2 mb-2 mb-lg-0 d-flex align-items-center">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" onClick={handleNavLinkClick}>Home</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/about" className="nav-link" onClick={handleNavLinkClick}>About</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/skills" className="nav-link" onClick={handleNavLinkClick}>Skills</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/projects" className="nav-link" onClick={handleNavLinkClick}>Projects</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/experience" className="nav-link" onClick={handleNavLinkClick}>Experience</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/contact" className="nav-link" onClick={handleNavLinkClick}>Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
