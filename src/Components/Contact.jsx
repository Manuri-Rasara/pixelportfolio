import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-card">
        <div className="contact-left">
          <div className="blue-star"></div>
        </div>
        <div className="contact-right">
          <h2 className="contact-title">Luminary</h2>
          <span className="contact-badge">No sessions available</span>
          <p className="contact-text">
            Learn how to integrate using our GraphQL Integration API.
          </p>
          <p className="contact-text">
            For developers or anyone who’s interested in creating a Centra Integration. You’ll learn how to use our GraphQL-based Integration API.
          </p>
          <button className="contact-button">JOIN A WEBINAR</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
