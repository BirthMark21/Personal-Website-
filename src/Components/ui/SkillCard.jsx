import React from 'react';
import './SkillCard.css';

const SkillCard = ({ skill, showCategory = false }) => {
  const { name, level, category } = skill;

  return (
    <div className="skill-card">
      <div className="skill-header">
        <div className="skill-info">
          <h4 className="skill-name">{name}</h4>
          {showCategory && category && (
            <span className="skill-category">{category}</span>
          )}
        </div>
        <span className="skill-percentage">{level}%</span>
      </div>
      <div className="skill-bar-container">
        <div 
          className="skill-bar" 
          style={{ width: `${level}%` }}
          data-level={level}
        >
          <div className="skill-bar-glow"></div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
