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
          <Link to="skills" className="nav-link" smooth={true} duration={500} offset={-16}>
            Skills
          </Link>
        </li>
        <li className="nav-item">
          <Link to="experience" className="nav-link" smooth={true} duration={500} offset={-16} >
            Experience
          </Link>
        </li>
        <li className="nav-item">
          <Link to="projects" className="nav-link" smooth={true} duration={500} offset={-16}>
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