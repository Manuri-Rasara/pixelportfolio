import React from 'react';
import './Proof06.css';
import { FaGithub, FaBehance } from 'react-icons/fa';
import proof01 from "../assets/images/proof06_portfolio_my_yellowpowerbolt.png";
import flower from "../assets/images/s1.png";
import { TfiWorld } from "react-icons/tfi";


export default function Proof01() {
  return (
    <div className="container">
      <div className="top-image">
        <img src={proof01} alt="Mockup" className="mockup" />
      </div>

      <div className="project-section">
        <h1 className="project-title">My Portfolio <span className='colortext'>v1.0</span> Black & Bolt</h1>
        <p className="project-description">
          Welcome to my portfolio website, version 01. This project features a sleek and modern black
           glassmorphism design, with a striking yellow powerbolt accent that adds energy and personality. 
           Built primarily with React and styled using external CSS, the site is fully responsive to provide 
           a seamless experience across all devices. It includes clear, easy-to-navigate sections for Info, 
           Work, and Contact, showcasing my skills and projects in a clean and professional layout. This 
           portfolio combines modern aesthetics with practical functionality to highlight my development 
           abilities and creative vision.
        </p>
      </div>

      <div className="info-section">
        {/* First Row */}
        <div className="row">
          <div className="typography-box">
            <h2>TYPOGRAPHY</h2>
            <p>Roboto</p>
          </div>

          <div className="colors-box">
            <h2>COLORS</h2>
            <div className="color" style={{ background: '#FFDD50' ,color: '#1E1E1E'}}>#FFDD50</div>
            <div className="color" style={{ background: '#000000', color: '#FFFFFF' }}>#000000</div>
            <div className="color" style={{ background: '#ADA9A9' ,color: '#1E1E1E'}}>#ADA9A9</div>
          </div>
        </div>

        {/* Second Row */}
        <div className="bottom-row">
          <div className="contact-box-wrapper">
            <div className="flower-overlay">
              <img src={flower} alt="Flower" />
            </div>
            <div className="contact-box">
              <p>I’d love to hear from you! Feel free to explore my very 
                first portfolio website by clicking the link button, send 
                me a message directly using the Inbox Me button, or dive 
                into the code on GitHub to see how the site was built. Whether 
                you want to connect, collaborate, or just say hi, everything 
                you need is right here in one place!</p>
              <button className="btn-light allbtns"><FaGithub /> Github Repo</button>
              <button className="btn-light allbtns"><TfiWorld />Website</button>
              <button className="btn-dark allbtns">Inbox Me</button>
            </div>
          </div>

          <div className="flower-box">
            <img src={flower} alt="Flower" />
          </div>
        </div>
      </div>
    </div>
  );
}
