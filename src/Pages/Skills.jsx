import React, { useState } from "react"; 
import {
  FaPython,
  FaReact,
  FaDatabase,
  FaProjectDiagram,
  FaTools,
  FaHandsHelping,
  FaLightbulb,
  FaComments,
  FaHandshake,
  FaJava
} from "react-icons/fa";
import {
  SiDjango,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiPostgresql,
  SiMicrosoftsqlserver,
} from "react-icons/si";
import './Skills.css';

const skills = [
  {
    category: "Technical Skills",
    subcategories: [
      {
        category: "Backend Development",
        items: [
          { name: "Python (Django)", icon: <FaPython size={60} />, percentage: 90 },
          { name: "Java (Spring)", icon: <FaJava size={60} />, percentage: 85 },
          { name: "Odoo Development", icon: <FaTools size={60} />, percentage: 75 },
        ],
      },
      {
        category: "Frontend Development",
        items: [
          { name: "React", icon: <FaReact size={60} />, percentage: 80 },
          { name: "HTML, CSS, JavaScript", icon: <SiJavascript size={60} />, percentage: 85 },
        ],
      },
      {
        category: "Database Management",
        items: [
          { name: "MySQL", icon: <SiMysql size={60} />, percentage: 75 },
          { name: "PostgreSQL", icon: <SiPostgresql size={60} />, percentage: 70 },
          { name: "MS SQL Server", icon: <SiMicrosoftsqlserver size={60} />, percentage: 65 },
        ],
      },
      {
        category: "Data Analysis",
        items: [
          { name: "MS Power BI", icon: <FaDatabase size={60} />, percentage: 80 },
          { name: "Pandas", icon: <FaPython size={60} />, percentage: 85 },
          { name: "Oracle BI", icon: <FaDatabase size={60} />, percentage: 75 },
          { name: "Data Mining & ETL Tools", icon: <FaTools size={60} />, percentage: 70 },
        ],
      },
    ],
  },
  {
    category: "Soft Skills",
    subcategories: [
      {
        category: "General Skills",
        items: [
          { name: "Project Management", icon: <FaProjectDiagram size={60} /> },
          { name: "Task Prioritization", icon: <FaLightbulb size={60} /> },
          { name: "Problem-Solving", icon: <FaLightbulb size={60} /> },
          { name: "Teamwork & Collaboration", icon: <FaHandsHelping size={60} /> },
          { name: "Time Management", icon: <FaLightbulb size={60} /> },
          { name: "Effective Communication", icon: <FaComments size={60} /> },
          { name: "Adaptability & Flexibility", icon: <FaLightbulb size={60} /> },
          { name: "Critical & Analytical Thinking", icon: <FaLightbulb size={60} /> },
          { name: "Negotiation & Conflict Resolution", icon: <FaHandshake size={60} /> },
        ],
      },
    ],
  },
];

const Skills = () => {
  const [allView, setAllView] = useState(false);

  const toggleView = () => setAllView((prevState) => !prevState);

  const renderSkillProgress = (percentage) => (
    <div className="progress-circle">
      <div className="circle">
        <div className="mask full">
          <div className="fill" style={{ transform: `rotate(${(percentage / 100) * 180}deg)` }}></div>
        </div>
        <div className="mask half">
          <div className="fill" style={{ transform: `rotate(${(percentage / 100) * 180}deg)` }}></div>
        </div>
        <div className="inside-circle">{percentage}%</div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        {skills.map((skillGroup, index) => (
          <div key={index} className="skill-group">
            <h2 className="category-title">{skillGroup.category}</h2>
            {skillGroup.subcategories.map((subcategory, subIndex) => (
              <div key={subIndex} className="skill-category">
                <h3 className="subcategory-title">{subcategory.category}</h3>
                <div className="skills-grid">
                  {subcategory.items.map((skill, idx) => (
                    <div
                      className={`skill-card ${allView || index < 3 ? "" : "d-none"}`}
                      key={idx}
                    >
                      <div className="skill-icon">{skill.icon}</div>
                      <h3 className="skill-name">{skill.name}</h3>
                      {skill.percentage && renderSkillProgress(skill.percentage)}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
        <div className="text-center mt-5">
          <button className="btn btn-toggle" onClick={toggleView}>
            {allView ? "Show Less Skills" : "View All Skills"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Skills;
