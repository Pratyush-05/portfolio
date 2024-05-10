import React, { useState, useEffect } from 'react';
import './WorkExperience.css';

const WorkExperience = ({ company, location, role, startDate, endDate, responsibilities, techStacks }) => {
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const truncatedResponsibilities = responsibilities.slice(0, 2);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleReadMore = () => setExpanded(!expanded);

  return (
    <div className="work-experience-card">
      <div className="card-header">
        <div className="ex">
          <div className="company">{company}</div>
          <p className="role">{role}</p>
        </div>
        <div className="role-info">
          {isMobile && !expanded ? (
          null
        ) : (
          <p>{location}</p>
        )}
          <p>{`${startDate} - ${endDate}`}</p>
        </div>
      </div>
      <div className="card-content">
        {expanded ? (
          <p className="responsibilities">{responsibilities.join(' ')}</p>
        ) : (
          <p className="responsibilities">{truncatedResponsibilities.join(' ')}</p>
        )}
        {isMobile && !expanded && responsibilities.length > 2 && (
          <div className="read-more-container">
            <button className="read-more-btn" onClick={handleReadMore}>
              Read More
            </button>
          </div>
        )}
        {expanded && isMobile && (
          <div className="read-more-container">
            <button className="read-more-btn" onClick={handleReadMore}>
              Read Less
            </button>
          </div>
        )}
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