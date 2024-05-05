import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <h1>Get in Touch</h1>
      <div className="contact-info">
        <div className="info-item">
          <i className="fas fa-envelope"></i>
          <p>purohit.pratyush05@gmail.com</p>
        </div>
        <div className="info-item">
          <i className="fas fa-phone"></i>
          <p>+91 9937392096</p>
        </div>
        <div className="info-item">
          <i className="fas fa-map-marker-alt"></i>
          <p>Pune, India</p>
        </div>
      </div>
      <form className="contact-form">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;