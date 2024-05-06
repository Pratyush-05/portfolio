// SocialMedia.js
import React from 'react';
import './SocialMedia.css';
import { FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="social-media">
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/pratyush-purohit" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn className="social-icon" />
        </a>
        <a href="https://github.com/pratyush-purohit" target="_blank" rel="noopener noreferrer">
          <FaGithub className="social-icon" />
        </a>
        <a href="https://twitter.com/pratyushpurohit" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="social-icon" />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;