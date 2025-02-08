import React, { useContext, useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../img/misganaw_logo.png";
import { EventContext } from "../MyContext";
import useAuth from "../UseAuth";
import "./nav.css";

const Navbar = () => {
  const { user } = useContext(EventContext);
  const [userData, setUserData] = useState();
  const location = useLocation();
  const navigate = useNavigate();
  const hideNavbar = /\/room/.test(location.pathname);

  useEffect(() => {
    const storedUserData = localStorage.getItem("authData");
    if (storedUserData) {
      try {
        const userData = JSON.parse(storedUserData);
        setUserData(userData);
      } catch (error) {
        console.error("Error parsing stored user data:", error);
      }
    }
  }, []);

  const handleGotoProfile = () => {
    navigate("/profile", { replace: true });
  };

  if (hideNavbar) {
    return null;
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3 border-bottom" id="myNav">
      <div className="container">
        {/* Updated Logo Design */}
        <NavLink to="/home" className="navbar-brand fw-bold">
          <img 
            src={logo} 
            alt="Logo" 
            className="navbar-logo"
          />
        </NavLink>

        {/* Navbar Toggler for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto me-2 mb-2 mb-lg-0 d-flex align-items-center">
            <li className="nav-item">
              <NavLink to="/home" className="nav-link">Home</NavLink>
            </li>

            {/* Projects Dropdown */}
            <li className="nav-item position-relative">
              <NavLink to="/projects" className="nav-link">Projects</NavLink>
              <div className="position-absolute sub-navbar">
                <ul className="list-unstyled m-0 p-2">
                  <li><NavLink to="/projects/projectideas" className="nav-link">Popular Projects</NavLink></li>
                  <li><NavLink to="/skills/resume" className="nav-link">Resume</NavLink></li>
                </ul>
              </div>
            </li>

            {/* Skills Dropdown */}
            <li className="nav-item position-relative">
              <NavLink to="/skills" className="nav-link">Skills</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/about" className="nav-link">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/reference" className="nav-link">Reference</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
