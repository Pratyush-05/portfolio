import React from 'react';

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="projects-grid">
        <div className="project-card">
          <h2>Project 1</h2>
          <p>Description of Project 1.</p>
          <a
            href="https://github.com/your-repo/project1"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            GitHub
          </a>
        </div>
        <div className="project-card">
          <h2>Project 2</h2>
          <p>Description of Project 2.</p>
          <a
            href="https://github.com/your-repo/project2"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;