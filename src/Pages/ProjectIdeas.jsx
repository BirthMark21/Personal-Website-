import React, { useState } from "react";
import { FaLock } from "react-icons/fa";
import project1 from "../img/project-1 (1).png";
import project2 from "../img/project-1 (2).png";
import project3 from "../img/project-1 (3).png";
import project4 from "../img/project-1 (4).png";
import project5 from "../img/project-1 (5).png";
import project6 from "../img/project-1 (6).png";
import project7 from "../img/project-1 (7).png";
import project8 from "../img/project-1 (8).png";
import project9 from "../img/project-1 (9).png";
import project10 from "../img/project-1 (10).png";
import "./project_ideas.css";

const projectIdeas = [
  { id: 1, title: "AI-based Movie Recommendation", image: project1 },
  { id: 2, title: "Personal Finance Tracker", image: project2 },
  { id: 3, title: "Social Media Dashboard", image: project3 },
  { id: 4, title: "Smart Home Automation", image: project4 },
];

const ongoingProjects = [
  { id: 5, title: "Real-Time Collaboration Tool", image: project5 },
  { id: 6, title: "Blockchain Voting System", image: project6 },
  { id: 7, title: "IoT-based Agriculture Monitoring", image: project7 },
  { id: 8, title: "E-Learning Platform", image: project8 },
];

const completedProjects = [
  { id: 9, title: "AI Chatbot for E-Commerce", image: project9, completionDate: "June 2023" },
  { id: 10, title: "Fitness Tracking App", image: project10, completionDate: "December 2022" },
  { id: 11, title: "Smart Traffic Management", image: project1, completionDate: "March 2023" },
  { id: 12, title: "Cybersecurity Threat Analyzer", image: project2, completionDate: "July 2023" },
];

const Projects = () => {
  const [clickedProject, setClickedProject] = useState(null);

  const handleProjectClick = (id) => {
    setClickedProject(clickedProject === id ? null : id);
  };

  return (
    <section id="projects" className="projects-section" style={{
      background: "linear-gradient(135deg, #c94a98, #9e2461, #f94d82, #ff6f61, #ffae42, #ffcc29, #ffea00, #f7ff00)",
      minHeight: "100vh",
      padding: "60px 10px",
    }}>
      <div className="container">
        <h2 className="section-title">My Projects</h2>

        {/* Project Ideas Section */}
        <h2 className="section-subtitle">💡 Project Ideas</h2>
        <div className="grid-container">
          {projectIdeas.map((project) => (
            <div
              className="project-card locked-card"
              key={project.id}
              onClick={() => handleProjectClick(project.id)}
            >
              <div className="card-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="locked-content">
                <FaLock size={24} />
                <p>{clickedProject === project.id ? "Encrypted by the developer" : "Details Locked"}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Ongoing Projects Section */}
        <h2 className="section-subtitle">🚧 Ongoing Projects</h2>
        <div className="grid-container">
          {ongoingProjects.map((project) => (
            <div
              className="project-card locked-card"
              key={project.id}
              onClick={() => handleProjectClick(project.id)}
            >
              <div className="card-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="locked-content">
                <FaLock size={24} />
                <p>{clickedProject === project.id ? "Encrypted by the developer" : "Details Locked"}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Completed Projects Section */}
        <h2 className="section-subtitle">✅ Completed Projects</h2>
        <div className="grid-container">
          {completedProjects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="card-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="card-content">
                <h3>{project.title}</h3>
                <p className="completion-date">Completed on: {project.completionDate}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
