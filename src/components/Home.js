import React from "react";
import "./Home.css";
import Projects from "./Projects";
import Skills from "./Skills";
import Experience from "./Experince";
import Education from "./Education";
import DownloadResumeButton from "./DownloadResumeButton";
import Contact from "./Contact";
import SocialMedia from "./SocialMedia";
import { Link } from "react-scroll";

const Home = () => {
  const googleDriveResumeLink =
    "https://drive.google.com/file/d/1SaArfQQr27BTDmrU9QmYSY4ntK1KphTL/view?usp=sharing";
  return (
    <div className="mainContainer">
      <div className="leftSection">
        <div className="hero-content">
          <h1 className="name">Pratyush Purohit</h1>
          <h2 className="designation">Front-end Developer</h2>
          <Contact />

          <p className="description">
            Hi, I'm Pratyush, a passionate front-end developer with expertise in
            Angular and React. I have <strong>3 years of experience</strong> in
            developing scalable and robust web applications. I have extensive
            experience in building responsive web applications using{" "}
            <strong>Angular, ReactJS, Javascript</strong>. My role involved
            collaborating closely with clients to understand their requirements
            and translating them into efficient and user-friendly applications.
          </p>
          <DownloadResumeButton googleDriveLink={googleDriveResumeLink} />



          <SocialMedia />

          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="experience"
                spy={true}
                className="nav-link"
                smooth={true}
                duration={500}
                activeClass="active"
              >
                Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="education"
                spy={true}
                className="nav-link"
                smooth={true}
                duration={500}
                activeClass="active"
              >
                Education
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="skills"
                spy={true}
                className="nav-link"
                smooth={true}
                duration={500}
                activeClass="active"
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="projects"
                spy={true}
                className="nav-link"
                smooth={true}
                duration={500}
                activeClass="active"
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="home">
        <div className="hero">
          <div className="hero-content">
            <div className="subheading" id="experience" name="experience">
              <h2>Experience</h2>
              <hr />
              <Experience />
            </div>
            <br />
            <div className="subheading" id="education" name="education">
              <h2>Education</h2>
              <hr />
              <Education />
            </div>
            <br />
            <div className="subheading" id="skills" name="skills">
              <h2>Skills</h2>
              <hr />
              <Skills />
            </div>
            <br />
            <div className="subheading" id="projects" name="projects">
              <h2>Projects</h2>
              <hr />
              <Projects />
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
 