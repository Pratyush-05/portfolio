import React, { useState, useEffect, useRef } from 'react';
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
  const containerRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const infiniteSkills = [...skills, ...skills, ...skills];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
    };

    const container = containerRef.current;
    if (window.innerWidth <= 768 && container) {
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (window.innerWidth <= 768 && container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    let timer;

    const startAutoScroll = () => {
      timer = setInterval(() => {
        setScrollPosition((prevPosition) => (prevPosition + 100) % (infiniteSkills.length * 100));
      }, 2000);
    };

    const stopAutoScroll = () => {
      clearInterval(timer);
    };

    if (window.innerWidth <= 768 && !isScrolling) {
      startAutoScroll();
    } else {
      stopAutoScroll();
    }

    return stopAutoScroll;
  }, [isScrolling, infiniteSkills.length]);


  return (
    <div ref={containerRef}>
      <div className="skills-row" style={{ transform: `translateX(-${scrollPosition}%)` }}>
        {infiniteSkills.map((skill, index) => (
          <div key={index} className="skill-cell">
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-name">{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
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