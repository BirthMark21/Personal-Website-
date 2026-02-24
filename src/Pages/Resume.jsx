import React from "react";
import { FaDownload, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaCertificate } from "react-icons/fa";
import { certifications } from "../data/skills";
import "./Resume.css";

const Resume = () => {
  const cvPath = "/Misganaw_Mekashaw_Tegegne_cv .pdf";

  return (
    <div className="resume-container">
      <header className="resume-header">
        <h1 className="name">Misganaw Mekashaw Tegegne</h1>
        <p className="title">Machine Learning Engineer | Full Stack Developer | Data Analyst</p>
        <div className="contact-info">
          <div className="contact-item">
            <FaEnvelope /> misganawcbcd21@gmail.com
          </div>
          <div className="contact-item">
            <FaPhone /> +251 919 352 801
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt /> Addis Ababa, Ethiopia
          </div>
          <div className="contact-item">
            <FaGithub /> <a href="https://github.com/BirthMark21" target="_blank" rel="noopener noreferrer">github.com/BirthMark21</a>
          </div>
        </div>
        <a href={cvPath} download className="download-btn">
          <FaDownload /> Download CV
        </a>
      </header>

      <section className="resume-section">
        <h2>Summary</h2>
        <p>
          Machine Learning & Data Science Engineer with 3+ years of experience in ML pipelines, AI solutions, 
          and data engineering for e-commerce and banking. Skilled in Python, ML/DL frameworks, cloud technologies, 
          and delivering production-ready ML systems. Passionate about building intelligent systems and leveraging 
          AI to solve real-world problems.
        </p>
      </section>

      <section className="resume-section">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Programming & Web</h3>
            <ul>
              <li>Python (Django, FastAPI)</li>
              <li>PHP (Laravel)</li>
              <li>React, Next.js, TypeScript</li>
              <li>Odoo ERP & ERPNext</li>
              <li>REST API Development</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Data Engineering</h3>
            <ul>
              <li>MySQL, PostgreSQL</li>
              <li>Apache Kafka, Debezium CDC</li>
              <li>Redis, BigQuery</li>
              <li>ClickHouse, Redshift, Snowflake</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Machine Learning & AI</h3>
            <ul>
              <li>Pandas, NumPy, Scikit-learn</li>
              <li>TensorFlow, PyTorch</li>
              <li>Prophet, XGBoost</li>
              <li>LLMs (GPT), NLP</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Visualization & BI</h3>
            <ul>
              <li>Apache Superset, Power BI</li>
              <li>Tableau, Plotly</li>
              <li>Streamlit, Dash</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>DevOps & Cloud</h3>
            <ul>
              <li>GitHub/GitLab CI/CD</li>
              <li>Docker</li>
              <li>AWS, Azure, Supabase</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="resume-section">
        <h2>Professional Experience</h2>
        
        <div className="job">
          <div className="job-header">
            <h3>AI Engineer (Banking Intelligence Systems)</h3>
            <span className="job-date">August 2024 – Present</span>
          </div>
          <p className="company">Innosphere Technology PLC (Remote)</p>
          <ul>
            <li>Developed AI-native banking intelligence systems including customer segmentation service (ML + rule-based)</li>
            <li>Built 360° Customer Profile Microservice for comprehensive customer profiling</li>
            <li>Created Fast Feature Store Service for ML pipelines</li>
            <li>Implemented Churn Analysis & Customer Retention models</li>
            <li>Developed Credit Scoring & Risk Assessment Models</li>
          </ul>
        </div>

        <div className="job">
          <div className="job-header">
            <h3>ML Engineer & Data Analyst</h3>
            <span className="job-date">April 2023 – Present</span>
          </div>
          <p className="company">ChipChip Social E-Commerce</p>
          <ul>
            <li>Built AI shopping assistant (FastAPI + Telegram) supporting Amharic/English NLP</li>
            <li>Developed CCPRICE Dashboard for competitor price benchmarking across markets and DCs</li>
            <li>Created dynamic pricing & demand forecasting pipelines (Prophet, XGBoost)</li>
            <li>Implemented customer retention & segmentation (rule-based + ML)</li>
            <li>Built product segmentation pipelines and distribution center optimization bots</li>
          </ul>
        </div>

        <div className="job">
          <div className="job-header">
            <h3>AI & ML Intern (AGI Research)</h3>
            <span className="job-date">Mar 2025 – Apr 2025</span>
          </div>
          <p className="company">iCog Labs</p>
          <ul>
            <li>Contributed to Neural Generative Coding research using PyTorch & TensorFlow</li>
            <li>Worked on advanced AI/ML algorithms for AGI development</li>
          </ul>
        </div>

        <div className="job">
          <div className="job-header">
            <h3>Data Analyst (Contract)</h3>
            <span className="job-date">Oct 2024 – Mar 2025</span>
          </div>
          <p className="company">Addis Finder Trading PLC</p>
          <ul>
            <li>Built BI dashboards for real estate analytics, sales prediction, and market insights</li>
            <li>Performed data analysis to generate insights for decision-making and business growth</li>
          </ul>
        </div>
      </section>

      <section className="resume-section">
        <h2>Education</h2>
        <div className="education">
          <h3>Bachelor of Science in Computer Science & Engineering</h3>
          <p className="institution">Adama Science and Technology University</p>
          <p className="date">2019 – 2024</p>
        </div>
      </section>

      <section className="resume-section">
        <h2>Certifications</h2>
        <div className="certifications-grid">
          {certifications.map((cert) => (
            <div key={cert.id} className="certification-card">
              <FaCertificate className="cert-icon" />
              <div className="cert-content">
                <h4>{cert.title}</h4>
                <p className="cert-issuer">{cert.issuer}</p>
                <span className="cert-category">{cert.category}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="resume-section">
        <h2>Soft Skills</h2>
        <div className="soft-skills">
          <span className="skill-tag">Project Management</span>
          <span className="skill-tag">Task Prioritization</span>
          <span className="skill-tag">Problem-Solving</span>
          <span className="skill-tag">Teamwork & Collaboration</span>
          <span className="skill-tag">Time Management</span>
          <span className="skill-tag">Effective Communication</span>
          <span className="skill-tag">Adaptability & Flexibility</span>
          <span className="skill-tag">Critical & Analytical Thinking</span>
          <span className="skill-tag">Negotiation & Conflict Resolution</span>
        </div>
      </section>

      <footer className="resume-footer">
        <p>&copy; 2025 Misganaw Mekashaw Tegegne | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Resume;
