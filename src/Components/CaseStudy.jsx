import React from 'react';
import { FaCheckCircle, FaChartLine, FaRocket, FaCog } from 'react-icons/fa';
import './CaseStudy.css';

const CaseStudy = () => {
  const caseStudy = {
    title: "FeatureStore Microservice",
    subtitle: "Building a Sub-10ms ML Feature Store for Banking Intelligence",
    company: "InnoPulse Platform - Innosphere Technology PLC",
    duration: "Aug 2024 - Present",
    
    challenge: {
      title: "The Challenge",
      description: "Banking AI systems require real-time access to customer features for fraud detection, credit scoring, and personalization. Traditional databases couldn't meet the <10ms latency requirement while serving 1M+ customer profiles.",
      points: [
        "Need for sub-10ms feature serving latency",
        "Support for 1M+ customer profiles",
        "Online/offline feature consistency",
        "Full audit trail for compliance"
      ]
    },
    
    solution: {
      title: "The Solution",
      description: "Designed an enterprise-grade feature store using Feast framework with Redis for online serving and Delta Lake for offline storage.",
      architecture: [
        "Redis for sub-10ms online feature serving",
        "Delta Lake + MinIO for batch feature storage",
        "Apache Flink for streaming ingestion with CDC",
        "Kubeflow for pipeline orchestration",
        "Full feature lineage tracking"
      ]
    },
    
    implementation: {
      title: "Implementation",
      technologies: ["Feast", "Redis", "Delta Lake", "Apache Spark", "Apache Flink", "Kafka", "Debezium CDC", "MinIO", "Kubeflow", "FastAPI"],
      highlights: [
        "Built streaming ingestion pipeline with Flink & Debezium",
        "Implemented feature versioning & lineage tracking",
        "Created orchestrated pipelines with Kubeflow",
        "Achieved GDPR compliance with encryption & audit logs"
      ]
    },
    
    results: {
      title: "Results & Impact",
      metrics: [
        { value: "<10ms", label: "Online Feature Serving", icon: <FaRocket /> },
        { value: "1M+", label: "Profiles Processed", icon: <FaChartLine /> },
        { value: "99.9%", label: "Uptime SLA", icon: <FaCheckCircle /> },
        { value: "100%", label: "Audit Compliance", icon: <FaCog /> }
      ]
    }
  };

  return (
    <section className="case-study-section">
      <div className="case-study-container">
        {/* Header */}
        <div className="case-study-header">
          <h2 className="case-study-title">{caseStudy.title}</h2>
          <p className="case-study-subtitle">{caseStudy.subtitle}</p>
          <div className="case-study-meta">
            <span>{caseStudy.company}</span>
            <span className="separator">•</span>
            <span>{caseStudy.duration}</span>
          </div>
        </div>

        {/* Challenge */}
        <div className="case-study-block">
          <h3 className="block-title">{caseStudy.challenge.title}</h3>
          <p className="block-description">{caseStudy.challenge.description}</p>
          <ul className="block-list">
            {caseStudy.challenge.points.map((point, index) => (
              <li key={index}>
                <FaCheckCircle className="list-icon" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Solution */}
        <div className="case-study-block">
          <h3 className="block-title">{caseStudy.solution.title}</h3>
          <p className="block-description">{caseStudy.solution.description}</p>
          <div className="architecture-grid">
            {caseStudy.solution.architecture.map((item, index) => (
              <div key={index} className="architecture-card">
                <FaCog className="arch-icon" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Implementation */}
        <div className="case-study-block">
          <h3 className="block-title">{caseStudy.implementation.title}</h3>
          <div className="tech-tags">
            {caseStudy.implementation.technologies.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
          <ul className="block-list">
            {caseStudy.implementation.highlights.map((highlight, index) => (
              <li key={index}>
                <FaCheckCircle className="list-icon" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        {/* Results */}
        <div className="case-study-block results-block">
          <h3 className="block-title">{caseStudy.results.title}</h3>
          <div className="results-grid">
            {caseStudy.results.metrics.map((metric, index) => (
              <div key={index} className="result-card">
                <div className="result-icon">{metric.icon}</div>
                <h4 className="result-value">{metric.value}</h4>
                <p className="result-label">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
