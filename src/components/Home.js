import React from "react";
import "./Home.css";
import Projects from "./Projects";
import Skills from "./Skills";
import Experience from "./Experince";
import Education from "./Education";
import DownloadResumeButton from "./DownloadResumeButton";
import Contact from "./Contact";
import SocialMedia from "./SocialMedia";

const Home = () => {
  const googleDriveResumeLink =
    "https://drive.google.com/file/d/1SaArfQQr27BTDmrU9QmYSY4ntK1KphTL/view?usp=sharing";
  return (
    <div className="home">
      <div className="hero">
        <div className="hero-content">
          <h1>Pratyush Purohit</h1>
          <h3>Front-end Developer</h3>
          
          <Contact /> {/* Render the Contact component here */}
          <p>
            Hi, I'm Pratyush, a passionate front-end developer with expertise in
            Angular and React. I have almost 3 years of experience in developing
            scalable and robust web applications. I have extensive experience in
            building responsive web applications using Angular, ReactJS,
            Javascript, HTML5, CSS. My role involved collaborating closely with
            clients to understand their requirements and translating them into
            efficient and user-friendly applications.
          </p>

          <DownloadResumeButton googleDriveLink={googleDriveResumeLink} />
          <br />
          
          <br />
          <SocialMedia /> {/* Render the SocialMedia component here */}
          <br />
          <br />
          <br />

          <div className="subheading" id="experience" name="experience">
            <p>Experience</p>
            <hr />
            <Experience />
          </div>
          <br />

          <div className="subheading" id="education" name="education">
            <p>Education</p>
            <hr />
            <Education />
          </div>
          <br />

          <div className="subheading" id="skills" name="skills">
            <p>Skills</p>
            <hr />
            <Skills />
          </div>
          <br />

          <div className="subheading" id="projects" name="projects">
            <p>Projects</p>
            <hr />
            <Projects />
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Home;
