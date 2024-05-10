import React, { useState, useEffect } from 'react';
import './Skills.css';
import { FaReact, FaAngular, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaPython, FaJava, FaGitAlt, FaBootstrap } from 'react-icons/fa';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

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
      {window.innerWidth <= 768 ? (
        <SwipeableSkillsSection skills={skills} />
      ) : (
        <SkillsGrid skills={skills} />
      )}
    </div>
  );
};

const SwipeableSkillsSection = ({ skills }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const skillsPerView = 3;
  const skillsViews = [];
  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

  // Create an infinite loop of skills
  const infiniteSkills = [...skills, ...skills, ...skills];

  for (let i = 0; i < infiniteSkills.length; i += skillsPerView) {
    skillsViews.push(
      <div key={i} className="skills-grid">
        {infiniteSkills.slice(i, i + skillsPerView).map((skill, index) => (
          <div key={index} className="skill-cell">
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-name">{skill.name}</div>
          </div>
        ))}
      </div>
    );
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % skillsViews.length);
    }, 2000); // Adjust the delay (in milliseconds) to control the speed

    return () => clearInterval(timer);
  }, [skillsViews.length]);

  return (
    <AutoPlaySwipeableViews
      index={currentIndex}
      disabled={true} // Disable swiping gesture
    >
      {skillsViews}
    </AutoPlaySwipeableViews>
  );
};

const SkillsGrid = ({ skills }) => {
  return (
    <div className="skills-grid">
      {skills.map((skill, index) => (
        <div key={index} className="skill-cell">
          <div className="skill-icon">{skill.icon}</div>
          <div className="skill-name">{skill.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Skills;