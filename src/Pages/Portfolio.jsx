import React from "react";
import Navbar from "../Components/Navbar";
import "./Portfolio.css";

// Import database persistence management images
import dbImage1 from "../img/Database Persistent data management1.png";
import dbImage2 from "../img/Database Persistent data management2.png";
import dbImage3 from "../img/Database Persistent data management3.png";
import dbImage4 from "../img/Database Persistent data management4.png";
import dbImage5 from "../img/Database Persistent data management5.png";
import dbImage6 from "../img/Database Persistent data management6.png";
import dbImage7 from "../img/Database Persistent data management7.png";
import dbImage8 from "../img/Database Persistent data management8.png";
import dbImage9 from "../img/Database Persistent data management9.png";
import dbImage10 from "../img/Database Persistent data management10.png";

// Import project images
import project9 from "../img/project-1 (9).png";
import project10 from "../img/project-1 (10).png";
import project11 from "../img/project-1 (8).png";
import project12 from "../img/project-1 (1).png";
import project13 from "../img/project-1 (3).png";
import project14 from "../img/project-1 (4).png";
import project15 from "../img/project-1 (5).png";
import project16 from "../img/project-1 (20).png";
import project17 from "../img/project-1 (17).png";
import project18 from "../img/project-1 (18).png";
import project19 from "../img/project-1 (19).png";
import project20 from "../img/project-1 (20).png";
import project21 from "../img/project-1 (21).png";
import project22 from "../img/project-1 (22).png";
import project23 from "../img/project-1 (23).png";
import project24 from "../img/project-1 (24).png";
import project25 from "../img/project-1 (25).png";
import project26 from "../img/project-1 (26).png";
import project27 from "../img/project-1 (27).png";
import project28 from "../img/project-1 (28).png";
import project29 from "../img/project-1 (29).png";
import project30 from "../img/project-1 (30).png";
import project31 from "../img/project-1 (1).png";
import project32 from "../img/project-1 (2).png";
import project33 from "../img/project-1 (3).png";
import project34 from "../img/project-1 (4).png";
import project35 from "../img/project-1 (5).png";
import project36 from "../img/project-1 (6).png";
import project37 from "../img/project-1 (7).png";
import project38 from "../img/project-1 (8).png";
import project39 from "../img/project-1 (9).png";
// Store images in an array for easy rendering
const portfolioImages = [
  dbImage1, dbImage2, dbImage3, dbImage4, dbImage5, dbImage6, dbImage7, dbImage8, dbImage9, dbImage10,
  project9, project10, project11, project12, project13, project14, project15, project16, project17, project18,
  project19, project20, project21, project22, project23, project24, project25, project26, project27, project28,
  project29, project30, project31, project32, project33, project34, project35, project36, project37, project38, project39
];

const Portfolio = () => {
  return (
    <>
      
      <section className="portfolio">
        <h1 className="portfolio-title">My Portfolio</h1>
        <p className="portfolio-description">
          A showcase of my best projects, covering database persistence management, web development, AI, and data science.
        </p>

        <div className="portfolio-gallery">
          {portfolioImages.map((image, index) => (
            <div key={index} className="portfolio-item">
              <img src={image} alt={`Project ${index + 1}`} className="portfolio-img" />
              <div className="overlay">
                {/* <h3>Project {index + 1}</h3>
                <p>Click to learn more</p> */}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Portfolio;
