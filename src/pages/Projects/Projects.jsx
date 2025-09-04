import React from "react";
import projectsData from "../../data/projects.json";
import "./Projects.css";

const Projects = () => {
  const { title, subtitle, projects } = projectsData;

  return (
    <div className="projects-page">
      <div className="page-header">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a
                  href={project.link}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Код проекту →
                </a>
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    className="project-demo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Демо →
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
