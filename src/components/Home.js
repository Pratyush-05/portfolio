import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero-image.jpg';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <div className="hero-content">
          <h1>Pratyush Purohit</h1>
          <p>Hi, I'm Pratyush, a passionate front-end developer with expertise in Angular and React.</p>
          <Link to="/projects" className="btn">
            View Projects
          </Link>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Hero" />
        </div>
      </div>
    </div>
  );
};

export default Home;