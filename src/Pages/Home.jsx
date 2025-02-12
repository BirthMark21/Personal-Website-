import React, { useEffect, useRef } from "react";  
import Navbar from "../Components/Navbar";
import "./Home.css";
import handwritingSound from "../img/handwriting.mp3";

// Import project images
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

// Import social media icons
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub, FaTelegram } from "react-icons/fa";

const projectImages = [
  project1, project2, project3, project4, project5, project6, project7, project8, project9, project10,
];

const services = [
  { 
    title: "Web Development", 
    description: "Designing and developing responsive, high-performance websites using modern technologies.", 
    details: ["Responsive design", "Modern frameworks", "Optimized performance"]
  },
  { 
    title: "App Development", 
    description: "Creating user-friendly mobile applications with robust features and cross-platform compatibility.", 
    details: ["Intuitive UI/UX", "Cross-platform solutions", "Scalable architecture"]
  },
  { 
    title: "SEO Optimization", 
    description: "Enhancing website visibility and search engine ranking through strategic optimization techniques.", 
    details: ["Keyword research", "On-page SEO", "High-quality backlinks"]
  },
  { 
    title: "Cloud Computing", 
    description: "Delivering secure and scalable cloud solutions to optimize business operations.", 
    details: ["AWS, Azure, Google Cloud", "Data security", "Cost-effective infrastructure"]
  },
  { 
    title: "Data Science (DS) & Data Analysis (DA)", 
    description: "Leveraging data to uncover insights, optimize processes, and drive data-driven decision-making.", 
    details: ["Big Data analysis", "Predictive analytics", "Data visualization"]
  },
  { 
    title: "Artificial Intelligence (AI) & Machine Learning (ML)", 
    description: "Building intelligent systems with deep learning, neural networks, and predictive analytics.", 
    details: ["AI-driven automation", "Custom ML models", "Deep Learning (DL)"]
  },
  { 
    title: "Digital Marketing", 
    description: "Boosting online presence and audience engagement with tailored digital strategies.", 
    details: ["SEO & SEM", "Content marketing", "Social media campaigns"]
  },
  { 
    title: "E-commerce Development", 
    description: "Creating high-performance e-commerce platforms for seamless shopping experiences.", 
    details: ["Secure payment integration", "Custom shopping carts", "User-friendly experience"]
  }
];

const Home = () => {
  const audioRef = useRef(new Audio(handwritingSound));

  useEffect(() => {
    const playAudio = async () => {
      try {
        await audioRef.current.play();
      } catch (error) {
        console.error("Autoplay blocked:", error);
      }
    };
    playAudio();
  }, []);

  return (
    <>
      <Navbar />
      
      
      <section id="hero">
        <div className="hero-content">
          <h1 className="animated-heading">
            Welcome to <span className="highlight">CBCD COMMUNITY</span> <br />
            <span className="sub-heading">Empowering innovation through technology  <br /> and creativity.</span>
          </h1>
        </div>
        <div className="zigzag"></div>
      </section>
      
      <section className="services-section">
        <h2 className="services-title">My Services</h2>
        <div className="services-container">
          {services.map((service, index) => (
            <div key={index} className="service-item">
              <div className="service-text">
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
                    src={projectImages[index % projectImages.length]} 
                    alt={service.title} 
                    className="service-img" 
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;