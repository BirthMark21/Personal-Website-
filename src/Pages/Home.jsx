import React from "react";  
import "./Home.css";
import { Link } from "react-router-dom";
import { FaBrain, FaRobot, FaChartLine, FaDatabase, FaCode, FaLightbulb } from "react-icons/fa";
import { SiTensorflow, SiPytorch, SiOpenai } from "react-icons/si";

// Import actual page components
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";
import Testimonials from "../Components/Testimonials";
import CaseStudy from "../Components/CaseStudy";

const Home = () => {
  const aiCapabilities = [
    {
      icon: <FaBrain />,
      title: "Machine Learning",
      description: "Building predictive models and ML pipelines for real-world applications"
    },
    {
      icon: <FaRobot />,
      title: "Generative AI",
      description: "Developing LLM-powered applications and conversational AI systems"
    },
    {
      icon: <FaChartLine />,
      title: "Data Analytics",
      description: "Extracting insights from complex datasets with advanced analytics"
    },
    {
      icon: <FaDatabase />,
      title: "ML Operations",
      description: "Deploying and scaling ML models with feature stores and pipelines"
    }
  ];

  const impactMetrics = [
    { value: "1M+", label: "Customer Profiles Processed", icon: "👥" },
    { value: "<10ms", label: "Feature Serving Latency", icon: "⚡" },
    { value: "100+", label: "Dynamic Segments Supported", icon: "🎯" },
    { value: "3+", label: "Years ML Experience", icon: "📊" }
  ];

  const techStack = [
    { icon: <SiTensorflow />, name: "TensorFlow" },
    { icon: <SiPytorch />, name: "PyTorch" },
    { icon: <SiOpenai />, name: "OpenAI" },
    { icon: <FaCode />, name: "FastAPI" }
  ];

  return (
    <>
      {/* Hero Section */}
      <section id="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <FaLightbulb /> AI & Machine Learning Engineer
          </div>
          <h1 className="animated-heading">
            Building Intelligent Systems with <br />
            <span className="highlight">AI & Generative AI</span>
          </h1>
          <p className="hero-description">
            Specializing in Machine Learning, NLP, Computer Vision, and LLM-powered applications. 
            Transforming data into intelligent solutions for e-commerce, banking, and enterprise systems.
          </p>
          <div className="hero-actions">
            <a href="#about" className="btn-primary">
              <FaRobot /> Learn More
            </a>
            <a href="#contact" className="btn-secondary">
              Let's Collaborate
            </a>
          </div>
          
          <div className="tech-stack">
            {techStack.map((tech, index) => (
              <div key={index} className="tech-item" title={tech.name}>
                {tech.icon}
              </div>
            ))}
          </div>
        </div>
        <div className="zigzag"></div>
      </section>
      
      {/* Impact Metrics Section */}
      <section className="impact-metrics-section">
        <h2 className="section-title">Impact & Performance</h2>
        <div className="metrics-grid">
          {impactMetrics.map((metric, index) => (
            <div key={index} className="metric-card">
              <span className="metric-icon">{metric.icon}</span>
              <h3 className="metric-value">{metric.value}</h3>
              <p className="metric-label">{metric.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="capabilities-section">
        <h2 className="section-title">AI & ML Capabilities</h2>
        <div className="capabilities-grid">
          {aiCapabilities.map((capability, index) => (
            <div key={index} className="capability-card">
              <div className="capability-icon">{capability.icon}</div>
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section - Using actual About component */}
      <div id="about">
        <About />
      </div>

      {/* Skills Section - Using actual Skills component */}
      <div id="skills">
        <Skills />
      </div>

      {/* Experience Section - Using actual Experience component */}
      <div id="experience">
        <Experience />
      </div>

      {/* Projects Section - Using actual Projects component */}
      <div id="projects">
        <Projects />
      </div>

      {/* Case Study Section */}
      <CaseStudy />

      {/* Testimonials Section */}
      <Testimonials />

      {/* GitHub Stats Section */}
      <section className="github-stats-section">
        <div className="github-container">
          <h2 className="section-title">
            Open Source <span className="highlight">Contributions</span>
          </h2>
          <p className="section-subtitle">Building in public and contributing to the community</p>
          
          <div className="github-stats-grid">
            <a 
              href="https://github.com/BirthMark21" 
              target="_blank" 
              rel="noopener noreferrer"
              className="github-stat-card"
            >
              <FaCode className="stat-icon" />
              <h3>View GitHub Profile</h3>
              <p>Check out my repositories and contributions</p>
            </a>
            
            <div className="github-stat-card">
              <FaDatabase className="stat-icon" />
              <h3>12+ Projects</h3>
              <p>Production-ready applications and ML systems</p>
            </div>
            
            <div className="github-stat-card">
              <FaLightbulb className="stat-icon" />
              <h3>Open Source</h3>
              <p>Contributing to ML and banking tech communities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Using actual Contact component */}
      <div id="contact">
        <Contact />
      </div>
    </>
  );
};

export default Home;
