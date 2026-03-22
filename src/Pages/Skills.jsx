import React, { useState } from "react"; 
import { technicalSkills, architecturalPatterns, domainExpertise, skillCategories } from '../data/skills';
import './Skills.css';

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("Languages");

  const filteredSkills = technicalSkills.filter(skill => skill.category === selectedCategory);

  // Remove "All" from categories
  const categories = skillCategories.filter(cat => cat !== "All");

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

        {/* Category Filter - Without "All" */}
        <div className="category-filter">
          {categories.map((category) => (
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
          </div>
          
          <div className="patterns-grid">
            {architecturalPatterns.map((pattern) => (
              <div key={pattern.id} className="pattern-card">
                <span className="pattern-icon">{pattern.icon}</span>
                <h4 className="pattern-name">{pattern.name}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Domain Expertise Section */}
        <div className="domain-section">
          <div className="section-header">
            <h2 className="section-title">
              <span className="icon">🎯</span> Domain Expertise
            </h2>
          </div>
          
          <div className="domain-grid">
            {domainExpertise.map((domain) => (
              <div key={domain.id} className="domain-card">
                <span className="domain-icon">{domain.icon}</span>
                <h4 className="domain-name">{domain.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
