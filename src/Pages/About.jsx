import React, { useState } from 'react';
import './About.css';
import Navbar from "../Components/Navbar";
import { FaPen, FaArrowDown, FaArrowUp } from 'react-icons/fa'; // Icons
import profilePic from '@/img/Misganaw_o.jpg';

const About = () => {
  const [showDetails, setShowDetails] = useState(false);

  const renderTextWithIcons = (text) => {
    return text.split('\n').map((line, index) => (
      <p key={index} className="text-style">
        <FaPen className="pen-icon" />
        {line}
      </p>
    ));
  };

  return (
    <div className="about-container">
      <Navbar />
      <div className="container">
        <div className="row align-items-center">
          {/* About Me Section */}
          <div className="col-md-6">
            <div className="content-card animate-card">
              <h1 className="section-title-yellow with-line">About Me</h1>
              {renderTextWithIcons(
                "Hi, I'm Misganaw Mekashaw, a Junior Full Stack Developer with a Bachelor of Science degree in Computer Science and Engineering from Adama Science and Technology University (ASTU).\nI am passionate about creating innovative, efficient, and impactful software solutions using modern web technologies and data science."
              )}
              <button
                className="action-button"
                onClick={() => setShowDetails(!showDetails)}
              >
                {showDetails ? 'Hide Details' : 'Learn More'}
                {showDetails ? <FaArrowUp className="button-icon" /> : <FaArrowDown className="button-icon" />}
              </button>
            </div>
          </div>
          {/* Profile Picture Section */}
          <div className="col-md-6 text-center">
            <div className="image-card animate-card">
              <img src={profilePic} alt="Profile Picture" className="ellipse-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
