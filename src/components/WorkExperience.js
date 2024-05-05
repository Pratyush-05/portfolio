// WorkExperience.js
import React from 'react';
import './WorkExperience.css';

const WorkExperience = ({ company, location, role, startDate, endDate, responsibilities, techStacks }) => {
  return (
    <div className="work-experience-card">
      <div className="card-header">
        <div className="ex">
          <h2>{company}</h2>
          <p className='role'>{role}</p>
        </div>
        <div className="role-info">
          <p>{location}</p>
          <p>{`${startDate} - ${endDate}`}</p>
        </div>
      </div>
      
      <div className="card-content">
        <ul>
          {responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
        <div className="tech-stacks">
          {techStacks.map((stack, index) => (
            <span key={index} className="tech-stack">
              {stack}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;