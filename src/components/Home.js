import React from 'react';
import './Home.css';
import Projects from './Projects';
import Skills from './Skills';
import Experience from './Experince';
import Education from './Education';

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <div className="hero-content">
          <h1>Pratyush Purohit</h1>
          <h3>Front-end Developer</h3>
          
          <p>Hi, I'm Pratyush, a passionate front-end developer with expertise in Angular and React. I have almost 3 years of experience in developing scalable and robust web applications. I have extensive experience in building responsive web applications using Angular, ReactJS, Javascript, HTML5, CSS. My role involved collaborating closely with clients to understand their requirements and translating them into efficient and user-friendly applications.</p>

          
          <div className="subheading" id = "experience" name = "experience">
            <p>Experience</p>
            <hr/>
            <Experience />
          </div>
          <div className="subheading" id = "education" name = "education">
            <p>Education</p>
            <hr/>
            <Education />
          </div>
          <div className="subheading" id = "skills" name = "skills"> 
            <p>Skills</p>
            <hr/>
            <Skills />
          </div>
          <div className="subheading" id = "projects" name = "projects">
            <p>Projects</p>
            <hr/>
            <Projects />
          </div>

        </div>

      </div>
    </div>
  );
};

export default Home;