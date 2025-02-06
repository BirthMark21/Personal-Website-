import React from "react";
import "./completed_projects.css"; // External CSS for styling

const CompletedProjects = () => {
  const completedProjects = [
    {
      title: "AI Chatbot for E-Commerce",
      description: "Developed a chatbot that assists customers in real-time to find products.",
      image: "https://via.placeholder.com/300x200", // Placeholder image
      completionDate: "June 2023",
    },
    {
      title: "Blockchain Voting System",
      description: "Created a secure voting platform using blockchain to prevent fraud.",
      image: "https://via.placeholder.com/300x200",
      completionDate: "March 2023",
    },
    {
      title: "Fitness Tracking App",
      description: "Built an app that tracks workouts, diet, and progress.",
      image: "https://via.placeholder.com/300x200",
      completionDate: "December 2022",
    },
    {
      title: "Weather Prediction System",
      description: "Implemented machine learning models to forecast weather patterns.",
      image: "https://via.placeholder.com/300x200",
      completionDate: "August 2022",
    },
    {
      title: "E-Commerce Platform",
      description: "Launched a full-stack e-commerce platform with payment integration.",
      image: "https://via.placeholder.com/300x200",
      completionDate: "May 2022",
    },
  ];

  return (
    <div className="completed-projects-container">
      <h1 className="title">Completed Projects</h1>
      <div className="projects-grid">
        {completedProjects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-details">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <p className="project-date">Completed on: {project.completionDate}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompletedProjects;
