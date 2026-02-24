import React, { useState } from 'react';
import { FaExternalLinkAlt, FaGithub, FaImages } from 'react-icons/fa';
import './ProjectCard.css';

const ProjectCard = ({ project, imageSrc, galleryImages }) => {
  const { title, description, technologies, demoUrl, codeUrl, category, gallery } = project;
  const [showGallery, setShowGallery] = useState(false);

  return (
    <div className="project-card" data-category={category}>
      <div className="project-card-image">
        <img src={imageSrc} alt={title} />
        <div className="project-overlay">
          <span className="project-category">{category}</span>
        </div>
      </div>
      <div className="project-card-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        {technologies && (
          <div className="project-technologies">
            {technologies.map((tech, index) => (
              <span key={index} className="tech-badge">{tech}</span>
            ))}
          </div>
        )}
        
        {/* Gallery Section */}
        {gallery && gallery.length > 0 && (
          <div className="project-gallery-section">
            <button 
              className="gallery-toggle-btn"
              onClick={() => setShowGallery(!showGallery)}
            >
              <FaImages /> {showGallery ? 'Hide' : 'View'} Screenshots ({gallery.length})
            </button>
            {showGallery && (
              <div className="project-gallery">
                {gallery.map((imgName, index) => {
                  const imgSrc = galleryImages && galleryImages[imgName];
                  return imgSrc ? (
                    <img 
                      key={index}
                      src={imgSrc} 
                      alt={`${title} screenshot ${index + 1}`}
                      className="gallery-image"
                    />
                  ) : null;
                })}
              </div>
            )}
          </div>
        )}
        
        <div className="project-actions">
          {demoUrl && (
            <a 
              href={demoUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-btn demo-btn"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
          {codeUrl && (
            <a 
              href={codeUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-btn code-btn"
            >
              <FaGithub /> View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
