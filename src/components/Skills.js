// Skills.js
import React from 'react';
import './Skills.css';
import { FaReact, FaAngular, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaPython, FaJava, FaGitAlt, FaBootstrap } from 'react-icons/fa';

const Skills = () => {
  const skills = [
    { icon: <FaReact />, name: 'React' },
    { icon: <FaAngular />, name: 'Angular' },
    { icon: <FaHtml5 />, name: 'HTML' },
    { icon: <FaCss3Alt />, name: 'CSS' },
    { icon: <FaJsSquare />, name: 'JavaScript' },
    { icon: <FaNodeJs />, name: 'Node.js' },
    { icon: <FaPython />, name: 'Python' },
    { icon: <FaJava />, name: 'Java' },
    { icon: <FaGitAlt />, name: 'Git' },
    { icon: <FaBootstrap />, name: 'Bootstrap' },
    // Add more skills as needed
  ];

  return (
    <div className="skills-container">
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-cell">
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-name">{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;