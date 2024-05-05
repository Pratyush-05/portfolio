import React from 'react';
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
          
          <p>Hi, I'm Pratyush, a passionate front-end developer with expertise in Angular and React. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut aperiam nihil vitae possimus deleniti dolores quas ipsa esse, blanditiis, officiis itaque nam eveniet vel illum a! Vitae quidem earum temporibus mollitia repudiandae ut magnam omnis, debitis nemo molestias deserunt sed qui corporis, sint dicta quae nam esse ipsum, aspernatur doloribus?</p>

          <div className="subheading" id = "skills" name = "skills"> 
            <p>Skills</p>
            <hr/>
            <Skills />
          </div>
          <div className="subheading" id = "experience" name = "experience">
            <p>Experience</p>
            <hr/>
            <Experience />
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