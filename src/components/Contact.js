// Contact.js
import React from 'react';
import './Contact.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact">
      <p>
        <FaPhoneAlt className="contact-icon" /> +91 9937392096
      </p>
      <p>
        <FaEnvelope className="contact-icon" /> purohit.pratyush05@gmail.com
      </p>
      <p>
        <FaMapMarkerAlt className="contact-icon" /> Pune, India
      </p>
    </div>
  );
};

export default Contact;