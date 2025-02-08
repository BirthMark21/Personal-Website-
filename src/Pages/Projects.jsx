import React from "react";
import { Link } from "react-router-dom";
import project1 from "../img/project-1 (27).png";
import project2 from "../img/project-1 (2).png";
import project3 from "../img/project-1 (3).png";
import project4 from "../img/project-1 (4).png";
import project5 from "../img/project-1 (5).png";
import project6 from "../img/project-1 (6).png";
import project7 from "../img/project-1 (7).png";
import project8 from "../img/project-1 (8).png";
import project9 from "../img/project-1 (9).png";
import project10 from "../img/project-1 (10).png";
import "./Projects.css";

const Projects = () => {
  const projects = [
    { id: 1, title: "Project 1", description: "Explore innovative solutions in Project 1.", link: "/projects/27", image: project1 },
    { id: 2, title: "Project 2", description: "Dive into the development of Project 2.", link: "/projects/2", image: project2 },
    { id: 3, title: "Project 3", description: "Revolutionary ideas showcased in Project 3.", link: "/projects/3", image: project3 },
    { id: 4, title: "Project 4", description: "Innovative technology behind Project 4.", link: "/projects/4", image: project4 },
    { id: 5, title: "Project 5", description: "A closer look at the details of Project 5.", link: "/projects/5", image: project5 },
    { id: 6, title: "Project 6", description: "Next-gen innovations in Project 6.", link: "/projects/6", image: project6 },
    { id: 7, title: "Project 7", description: "Unique concepts featured in Project 7.", link: "/projects/7", image: project7 },
    { id: 8, title: "Project 8", description: "Tech-driven solutions in Project 8.", link: "/projects/8", image: project8 },
    { id: 9, title: "Project 9", description: "Breakthrough ideas in Project 9.", link: "/projects/9", image: project9 },
    { id: 10, title: "Project 10", description: "Advanced systems in Project 10.", link: "/projects/10", image: project10 },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">My  Projects</h2>
        
        {/* Circular Counters */}
        <div className="counters">
          <div className="counter">
            <div className="circle">20+</div>
            <p>Project Ideas</p>
          </div>
          <div className="counter">
            <div className="circle">4</div>
            <p>Completed Projects</p>
          </div>
          <div className="counter">
            <div className="circle">6</div>
            <p>Ongoing Projects</p>
          </div>
        </div>
        
        {/* Project Cards */}
        <div className="grid-container">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="card-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="card-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <Link to={project.link} className="btn btn-primary">
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
