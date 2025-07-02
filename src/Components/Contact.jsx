import React from 'react';
import './Contact.css';
import { FaLinkedin, FaBehance, FaFacebook, FaEnvelope, FaPhoneAlt, FaWhatsapp, FaGithub } from 'react-icons/fa';
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
              <a href="https://www.linkedin.com/in/manurirasarahewage" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
               <a href="https://github.com/Manuri-Rasara" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.behance.net/manuri" target="_blank" rel="noreferrer">
                <FaBehance />
              </a>
             
            </div>
          </div>

          <p className="contact-text">
          Open to new ideas, collaborations,
           or just a friendly chat , feel free to reach out and let’s create something meaningful <span className='together'>Together</span>.
          </p>
          

         <button
  className="contact-button"
  onClick={() => {
    window.location.href = "mailto:manurirasara812@gmail.com";
  }}
>
  Inbox Me
</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
