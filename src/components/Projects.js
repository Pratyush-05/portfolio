import React from 'react';
import { Link } from 'react-router-dom';
import expenseTrackerImage from '../assets/expense-tracker.jpg';
import speedTypingTestImage from '../assets/speed-typing-test.jpg';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="project-grid">
        <div className="project-card">
          <img src={expenseTrackerImage} alt="Expense Tracker" />
          <div className="project-details">
            <h2>Expense Tracker</h2>
            <p>A responsive website to keep track of your expenses and manage your personal budget.</p>
            <Link to="/projects/expense-tracker" className="btn">
              View Project
            </Link>
          </div>
        </div>
        <div className="project-card">
          <img src={speedTypingTestImage} alt="Speed Typing Test" />
          <div className="project-details">
            <h2>Speed Typing Test</h2>
            <p>A web application to measure users' typing speed and accuracy.</p>
            <Link to="/projects/speed-typing-test" className="btn">
              View Project
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;