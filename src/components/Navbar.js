import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import heroImage from '../assets/hero-image.jpg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        {/* <Link to="/">Pratyush Purohit</Link> */}
        <img src={heroImage} className='hero-image' alt="Hero" />
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/projects" className="nav-link">
            Projects
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/skills" className="nav-link">
            Skills
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