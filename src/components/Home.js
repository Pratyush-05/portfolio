import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Projects from './Projects';
import Skills from './Skills';
import Experience from './Experince';

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <div className="hero-content">
          <h1>Pratyush Purohit</h1>
          <h3>Front-end Developer</h3>
          
          <p>Hi, I'm Pratyush, a passionate front-end developer with expertise in Angular and React.</p>

          <div className="subheading" id = "skills"> 
            <p>Skills</p>
            <hr/>
            <Skills/>
          </div>
          <div className="subheading" id = "experience">
            <p>Experience</p>
            <hr/>
            <Experience/>
          </div>
          <div className="subheading" id = "projects">
            <p>Projects</p>
            <hr/>
            <Projects/>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;