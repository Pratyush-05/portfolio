import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <header>
        <h1>Welcome to My Portfolio</h1>
        <nav>
          <Link to="/projects" className="nav-link">
            Projects
          </Link>
        </nav>
      </header>
      <main>
        <section className="about-me">
          <h2>About Me</h2>
          <p>I am an Angular developer transitioning to React. I enjoy building intuitive and user-friendly interfaces.</p>
        </section>
        <section className="education">
          <h2>Education</h2>
          <p>Bachelor's Degree in Computer Science from XYZ University, 2018-2021.</p>
        </section>
        <section className="social-media">
          <h2>Connect with Me</h2>
          <div className="social-links">
            <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/your-profile/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://twitter.com/your-handle" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; Your Name {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Home;