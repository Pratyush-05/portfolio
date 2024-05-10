import React from 'react';
import { Link } from 'react-router-dom';
import expenseTrackerImage from '../assets/expense-tracker.jpg';
import speedTypingTestImage from '../assets/speed-typing-test.jpg';

import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'Expense Tracker',
      description: 'A responsive website to keep track of your expenses and manage your personal budget.',
      techStacks: ['ReactJS', 'JavaScript', 'Material UI'],
    },
    {
      title: 'Speed Typing Test',
      description: 'A web application to measure users\' typing speed and accuracy.',
      techStacks: ['ReactJS', 'JavaScript', 'Bootstrap'],
    },
    // Add more projects as needed
  ];

  return (
    <div>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          techStacks={project.techStacks}
          projectLink={project.projectLink}
        />
      ))}
    </div>
  );
};

export default Projects;