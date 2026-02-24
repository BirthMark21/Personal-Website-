import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ service, image, index }) => {
  return (
    <div className="service-item" data-index={index}>
      <div className="service-text">
        <div className="service-icon">{service.icon}</div>
        <h3 className="service-heading">{service.title}</h3>
        <p>{service.description}</p>
        <ul className="service-details">
          {service.details.map((detail, i) => (
            <li key={i}>
              <span className="bullet-icon">✔</span> {detail}
            </li>
          ))}
        </ul>
      </div>
      <div className="service-card">
        <div className="card-title">{service.title}</div>
        <div className="card-image-wrapper">
          <img 
            src={image} 
            alt={service.title} 
            className="service-img" 
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
