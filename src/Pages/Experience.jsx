import React from 'react';
import { FaBriefcase, FaCode, FaRobot, FaChartLine, FaCertificate, FaUserTie } from 'react-icons/fa';
import { certifications } from '../data/skills';
import './Experience.css';

const references = [
  {
    name: "Dr. Tiruveedula Gopikrishna",
    title: "Ph.D Associate Professor",
    email: "tiruveedula.gopi@astu.edu.et",
    phone: "+251904433041",
    details: "20 years in research and Teaching Dept of Computer Science and Engineering at ASTU. Taught Data Mining, Software Quality Assurance, and AI."
  },
  {
    name: "Dr. Nune Sreenivas",
    title: "Associate Professor in ASTU",
    email: "nune.sreenivas@astu.edu.et",
    phone: "+251926792898",
    details: "Expert in Accounting and Finance. Taught Data Mining, Software Quality Assurance, and AI."
  }
];

const experiences = [
  {
    id: 1,
    icon: <FaRobot />,
    title: "Customer Profile 360° Microservice - AI Engineer",
    company: "Innosphere Technology PLC (InnoPulse Platform)",
    location: "Remote",
    period: "Aug 2024 - Present",
    description: "Architected and developed unified customer intelligence platform enabling 360° profiling with entity resolution, real-time enrichment from 10+ data sources, and versioned profile management. Serves as single source of truth for customer data across banking systems.",
    skills: ["Entity Resolution", "FastAPI", "PostgreSQL", "Redis", "Real-time Analytics", "Event-Driven Architecture", "GDPR Compliance"],
    type: "ml"
  },
  {
    id: 2,
    icon: <FaRobot />,
    title: "Customer Segmentation Service - AI Engineer",
    company: "Innosphere Technology PLC (InnoPulse Platform)",
    location: "Remote",
    period: "Aug 2024 - Present",
    description: "Built advanced customer segmentation microservice combining rule-based, ML-driven clustering (K-Means, DBSCAN), and micro-segmentation for hyper-personalized banking. Enables dynamic targeting for marketing, credit assessment, and financial inclusion across African markets.",
    skills: ["ML Clustering", "K-Means", "DBSCAN", "Rule Engine", "Real-time Segmentation", "Personalization", "Banking Intelligence"],
    type: "ml"
  },
  {
    id: 3,
    icon: <FaRobot />,
    title: "FeatureStore Microservice - AI Engineer",
    company: "Innosphere Technology PLC (InnoPulse Platform)",
    location: "Remote",
    period: "Aug 2024 - Present",
    description: "Designed enterprise-grade ML feature store built on Feast framework, providing centralized feature management with online/offline serving, CDC integration, and full lineage tracking. Powers credit scoring, fraud detection, and personalization models with sub-10ms latency.",
    skills: ["Feast", "Redis", "Delta Lake", "Spark", "Flink", "Kafka", "MinIO", "Kubeflow", "MLOps"],
    type: "ml"
  },
  {
    id: 4,
    icon: <FaChartLine />,
    title: "Machine Learning Engineer & AI Engineer",
    company: "ChipChip Social E-Commerce",
    location: "Addis Ababa, Ethiopia",
    period: "Apr 2023 - Present",
    description: "Built AI shopping assistant with Amharic/English NLP, developed CCPRICE Dashboard for competitor benchmarking, created dynamic pricing & demand forecasting pipelines, and implemented customer retention & segmentation systems.",
    skills: ["FastAPI", "NLP", "Prophet", "XGBoost", "Telegram Bot", "Dynamic Pricing"],
    type: "ml"
  },
  {
    id: 5,
    icon: <FaRobot />,
    title: "AI & ML Intern (AGI Research)",
    company: "iCog Labs",
    location: "Remote",
    period: "Mar 2025 - Apr 2025",
    description: "Contributed to Neural Generative Coding research using PyTorch & TensorFlow. Worked on cutting-edge AGI research projects.",
    skills: ["PyTorch", "TensorFlow", "Neural Networks", "AGI Research"],
    type: "ml"
  },
  {
    id: 6,
    icon: <FaBriefcase />,
    title: "Data Analyst",
    company: "Addis Finder Trading PLC",
    location: "Addis Ababa, Ethiopia",
    period: "Oct 2024 - Mar 2025",
    description: "Built BI dashboards for real estate analytics, sales prediction, and market insights using Power BI and advanced analytics.",
    skills: ["Power BI", "Data Analytics", "Sales Prediction", "Market Analysis"],
    type: "business"
  }
];

const education = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science & Engineering",
    institution: "Adama Science and Technology University",
    period: "2019 - 2024",
    description: "Graduated with focus on Software Engineering, Machine Learning, and Data Science.",
    achievements: ["Dean's List", "Final Year Project: ML-based System", "Research in Neural Networks"]
  }
];

const Experience = () => {
  return (
    <div className="experience-container">
      <div className="experience-header">
        <h1 className="page-title">
          Experience & <span className="highlight">Education</span>
        </h1>
        <p className="subtitle">My professional journey and academic background</p>
      </div>

      <div className="timeline-container">
        <div className="timeline-line"></div>
        
        {experiences.map((exp, index) => (
          <div 
            key={exp.id} 
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            data-type={exp.type}
          >
            <div className="timeline-icon">
              {exp.icon}
            </div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h3 className="timeline-title">{exp.title}</h3>
                <span className="timeline-period">{exp.period}</span>
              </div>
              <div className="timeline-company">
                {exp.company} <span className="location">| {exp.location}</span>
              </div>
              <p className="timeline-description">{exp.description}</p>
              <div className="timeline-skills">
                {exp.skills.map((skill, idx) => (
                  <span key={idx} className="skill-badge">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="education-section">
        <h2 className="section-title">Education</h2>
        <div className="education-grid">
          {education.map((edu) => (
            <div key={edu.id} className="education-card">
              <h3 className="education-degree">{edu.degree}</h3>
              <p className="education-institution">{edu.institution}</p>
              <p className="education-period">{edu.period}</p>
              <p className="education-description">{edu.description}</p>
              {edu.achievements && (
                <div className="achievements">
                  <h4>Achievements:</h4>
                  <ul>
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Certifications Section */}
      <div className="certifications-section">
        <h2 className="section-title">
          <FaCertificate className="section-icon" /> Certifications
        </h2>
        <div className="certifications-grid">
          {certifications.map((cert) => (
            <div key={cert.id} className="certification-card">
              <FaCertificate className="cert-icon" />
              <div className="cert-content">
                <h4 className="cert-title">{cert.title}</h4>
                <p className="cert-issuer">{cert.issuer}</p>
                <span className="cert-category">{cert.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* References Section */}
      <div className="references-section">
        <h2 className="section-title">
          <FaUserTie className="section-icon" /> Academic References
        </h2>
        <div className="references-grid">
          {references.map((ref, index) => (
            <div key={index} className="reference-card">
              <h3 className="reference-name">{ref.name}</h3>
              <p className="reference-title">{ref.title}</p>
              <div className="reference-contact">
                <p>
                  <strong>Email:</strong>{' '}
                  <a href={`mailto:${ref.email}`} className="email-link">
                    {ref.email}
                  </a>
                </p>
                <p>
                  <strong>Phone:</strong> {ref.phone}
                </p>
              </div>
              <p className="reference-details">{ref.details}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
