import React from 'react';
import './Proof01.css';
import { FaGithub, FaBehance } from 'react-icons/fa';
import proof01 from "../assets/images/proof01_moquguard.png";
import flower from "../assets/images/s1.png";

export default function Proof01() {
  return (
    <div className="container">
      <div className="top-image">
        <img src={proof01} alt="Mockup" className="mockup" />
      </div>

      <div className="project-section">
        <h1 className="project-title"><span className='colortext'>MosqGuard</span> Health Interface</h1>
        <p className="project-description">
          MosqGuard is a mobile application that helps users stay informed about mosquito-borne disease risks 
          through real-time alerts, hotspot mapping, educational content, and user reports. I designed the complete 
          user interface for this app, focusing on a clean, intuitive, and accessible user experience. Key features 
          include offline access, crowdsourced data integration, and a dedicated education hub. The app was built
           using Flutter for the frontend, Node.js with Express.js for the backend, and AWS RDS for the database.
        </p>
      </div>

      <div className="info-section">
        {/* First Row */}
        <div className="row">
          <div className="typography-box">
            <h2>TYPOGRAPHY</h2>
            <p>Inter</p>
          </div>

          <div className="colors-box">
            <h2>COLORS</h2>
            <div className="color" style={{ background: '#004DB9' ,color: '#1E1E1E'}}>#004DB9</div>
            <div className="color" style={{ background: '#FECA00', color: '#1E1E1E' }}>#FECA00</div>
            <div className="color" style={{ background: '#FFFFFF' ,color: '#1E1E1E'}}>#FFFFFF</div>
          </div>
        </div>

        {/* Second Row */}
        <div className="bottom-row">
          <div className="contact-box-wrapper">
            <div className="flower-overlay">
              <img src={flower} alt="Flower" />
            </div>
            <div className="contact-box">
              <p>Dive into the MosqGuard experience , explore the UI design on Behance and browse the code on GitHub. 
                Ready to connect or start a new project? Hit the contact button and let’s make it happen!<br />Contact Me</p>
              <button className="btn-light allbtns"><FaGithub /> Github Repo</button>
              <button className="btn-light allbtns"><FaBehance /> Behance</button>
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
