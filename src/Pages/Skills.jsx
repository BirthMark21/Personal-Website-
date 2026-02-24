import React, { useState } from "react"; 
import { technicalSkills, architecturalPatterns, domainExpertise, skillCategories, softSkills } from '../data/skills';
import './Skills.css';

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showArchitecture, setShowArchitecture] = useState(false);
  const [showDomain, setShowDomain] = useState(false);

  const filteredSkills = selectedCategory === "All" 
    ? technicalSkills 
    : technicalSkills.filter(skill => skill.category === selectedCategory);

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        {/* Header */}
        <div className="skills-header">
          <h1 className="page-title">
            Technical <span className="highlight">Skills</span>
          </h1>
          <p className="subtitle">Comprehensive toolkit for building AI-native banking systems</p>
        </div>

        {/* Category Filter */}
        <div className="category-filter">
          {skillCategories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill) => (
            <div key={skill.id} className="skill-card-modern">
              <div className="skill-icon-modern">{skill.icon}</div>
              <h3 className="skill-name-modern">{skill.name}</h3>
              <div className="skill-level-bar">
                <div 
                  className="skill-level-fill" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="skill-percentage">{skill.level}%</span>
              <span className="skill-category-badge">{skill.category}</span>
            </div>
          ))}
        </div>

        {/* Architectural Patterns Section */}
        <div className="architecture-section">
          <div className="section-header">
            <h2 className="section-title">
              <span className="icon">🏗️</span> Architectural Patterns & Design Principles
            </h2>
            <button 
              className="toggle-btn"
              onClick={() => setShowArchitecture(!showArchitecture)}
            >
              {showArchitecture ? 'Hide' : 'Show'} Patterns
            </button>
          </div>
          
          {showArchitecture && (
            <div className="patterns-grid">
              {architecturalPatterns.map((pattern) => (
                <div key={pattern.id} className="pattern-card">
                  <span className="pattern-icon">{pattern.icon}</span>
                  <h4 className="pattern-name">{pattern.name}</h4>
                  <div className="pattern-level-bar">
                    <div 
                      className="pattern-level-fill" 
                      style={{ width: `${pattern.level}%` }}
                    ></div>
                  </div>
                  <span className="pattern-percentage">{pattern.level}%</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Domain Expertise Section */}
        <div className="domain-section">
          <div className="section-header">
            <h2 className="section-title">
              <span className="icon">🎯</span> Domain Expertise
            </h2>
            <button 
              className="toggle-btn"
              onClick={() => setShowDomain(!showDomain)}
            >
              {showDomain ? 'Hide' : 'Show'} Domains
            </button>
          </div>
          
          {showDomain && (
            <div className="domain-grid">
              {domainExpertise.map((domain) => (
                <div key={domain.id} className="domain-card">
                  <span className="domain-icon">{domain.icon}</span>
                  <h4 className="domain-name">{domain.name}</h4>
                  <div className="domain-level-bar">
                    <div 
                      className="domain-level-fill" 
                      style={{ width: `${domain.level}%` }}
                    ></div>
                  </div>
                  <span className="domain-percentage">{domain.level}%</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Soft Skills Section */}
        <div className="soft-skills-section">
          <h2 className="section-title">
            <span className="icon">💡</span> Soft Skills
          </h2>
          <div className="soft-skills-grid">
            {softSkills.map((skill) => (
              <div key={skill.id} className="soft-skill-card">
                <h4 className="soft-skill-name">{skill.name}</h4>
                <div className="soft-skill-bar">
                  <div 
                    className="soft-skill-fill" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="soft-skill-percentage">{skill.level}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
