// ProjectCard.js (same as before)
import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import './ProjectCard.css';

const ProjectCard = ({ title, description, techStacks, projectLink }) => {
  return (
    <div className="project-card">
      <div className="project-header">
        <h3 className="project-title">{title}</h3>
        {projectLink && (
          <a href={projectLink} target="_blank" rel="noopener noreferrer">
            <FiArrowUpRight className="project-link-icon" />
          </a>
        )}
      </div>
      <p className="project-description">{description}</p>
      <div className="tech-stacks">
        {techStacks.map((stack, index) => (
          <span key={index} className="tech-stack">
            {stack}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
