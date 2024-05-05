import React from 'react';
import { FaAngular, FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaJsSquare } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  return (
    <div className="skills">
      <h1>My Skills</h1>
      <div className="skill-grid">
        <div className="skill-card">
          <FaAngular size={48} color="#dd0031" />
          <h2>Angular</h2>
          <p>Proficient in building responsive web applications using Angular.</p>
        </div>
        <div className="skill-card">
          <FaReact size={48} color="#61dafb" />
          <h2>React</h2>
          <p>Experienced in developing modern user interfaces with React.</p>
        </div>
        <div className="skill-card">
          <FaHtml5 size={48} color="#e34c26" />
          <h2>HTML5</h2>
          <p>Proficient in writing semantic and accessible HTML markup.</p>
        </div>
        <div className="skill-card">
          <FaCss3Alt size={48} color="#264de4" />
          <h2>CSS3</h2>
          <p>Experienced in creating responsive and visually appealing styles with CSS.</p>
        </div>
        <div className="skill-card">
          <FaBootstrap size={48} color="#7952b3" />
          <h2>Bootstrap</h2>
          <p>Proficient in using Bootstrap for rapid front-end development.</p>
        </div>
        <div className="skill-card">
          <FaJsSquare size={48} color="#f0db4f" />
          <h2>JavaScript</h2>
          <p>Strong understanding of JavaScript and its modern features.</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;