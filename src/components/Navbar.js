import React from 'react';
import './Navbar.css';
import heroImage from '../assets/hero-image.jpg';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        {/* <Link to="/">Pratyush Purohit</Link> */}
        <img src={heroImage} className='hero-image' alt="Hero" />
      </div>
      <ul className="navbar-nav">

 
        <li className="nav-item">
          <Link to="experience" spy = {true} className="nav-link" smooth={true} duration={500}  activeClass="active">
            Experience
          </Link>
        </li>
        <li className="nav-item">
          <Link to="education" spy = {true} className="nav-link" smooth={true} duration={500}  activeClass="active" >
            Education
          </Link>
        </li>
        <li className="nav-item">
          <Link to="skills" spy = {true} className="nav-link" smooth={true} duration={500}  activeClass="active" >
            Skills
          </Link>
        </li>
        <li className="nav-item">
          <Link to="projects" spy = {true} className="nav-link" smooth={true} duration={500}  activeClass="active">
            Projects
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;