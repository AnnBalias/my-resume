import React from "react";
import skillsData from "../../data/skills.json";
import "./Skills.css";

const Skills = () => {
  const { title, subtitle, skillCategories } = skillsData;

  return (
    <div className="skills-page">
      <div className="page-header">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>

      <div className="skills-container">
        {skillCategories.map((category) => (
          <div key={category.category} className="skill-category">
            <h2>{category.category}</h2>
            <div className="skills-list">
              {category.skills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-name">
                    <span className="skill-icon">{skill.icon}</span>
                    {skill.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
