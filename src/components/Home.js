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

          <p className=" left-desc">
            Hi, I'm Pratyush, a passionate front-end developer with expertise in
            Angular and React.
          </p>

          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="experience"
                spy={true}
                className="nav-link"
                smooth={true}
                duration={500}
                activeClass="active"
                offset={-70}
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
          </ul>

          <DownloadResumeButton googleDriveLink={googleDriveResumeLink} />
          <SocialMedia />
        </div>
      </div>
      <div className="home">
        <div className="hero">
          <div className="hero-content">
            <div className="subheading" id="experience" name="experience">
              <h2 className="sect">Experience</h2>
              <hr />
              <Experience />
            </div>
            <br />
            <div className="subheading" id="education" name="education">
              <h2 className="sect">Education</h2>
              <hr />
              <Education />
            </div>
            <br />
            <div className="subheading" id="skills" name="skills">
              <h2 className="sect">Skills</h2>
              <hr />
              <Skills />
            </div>
            <br />
            <div className="subheading" id="projects" name="projects">
              <h2 className="sect">Projects</h2>
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
