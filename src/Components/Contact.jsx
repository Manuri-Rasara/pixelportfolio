import React from 'react';
import './Contact.css';
import { FaLinkedin, FaBehance, FaFacebook, FaEnvelope, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import flower from './assets/images/flower.svg';

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-card">
        <div className="contact-image-square">
          <img src={flower} alt="contact flower shape" className="flower" />
        </div>

        <div className="contact-content-square">
          <div className="contact-icon-mobile">
            <img src={flower} alt="contact flower shape" className="flower" />
          </div>

          <h1 className="contact-title">Say Hello!</h1>

          <div className="contact-badge contact-info">
            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <span>manurirasara812@gmail.com</span>
            </div>
            <div className="info-item">
              <FaWhatsapp className="info-icon" />
              <span>078-7531134</span>
            </div>
            <div className="info-socials">
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://behance.net/yourprofile" target="_blank" rel="noreferrer">
                <FaBehance />
              </a>
              <a href="https://facebook.com/yourprofile" target="_blank" rel="noreferrer">
                <FaFacebook />
              </a>
            </div>
          </div>

          <p className="contact-text">
          Open to new ideas, collaborations,
           or just a friendly chat , feel free to reach out and let’s create something meaningful <span className='together'>Together</span>.
          </p>
          

          <button className="contact-button">Inbox Me</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
