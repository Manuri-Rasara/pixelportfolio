import React from 'react';
import './Proof05.css';
import { FaGithub, FaBehance } from 'react-icons/fa';
import proof01 from "../assets/images/proof05_companywebsite_ui_blue.png";
import flower from "../assets/images/s1.png";

export default function Proof01() {
  return (
    <div className="container">
      <div className="top-image">
        <img src={proof01} alt="Mockup" className="mockup" />
      </div>

      <div className="project-section">
        <h1 className="project-title"><span className='colortext'>Trust Wave</span> UI</h1>
        <p className="project-description">
          This sleek desktop-first UI design brings a professional edge to a company 
          website, organizing content into intuitive sections like Why Choose Us, About, 
          Services, Projects, and Contact. The cool blue theme sets a tone of trust and 
          clarity, reinforcing the brand's reliability and forward-thinking approach. 
          Clean lines, smooth navigation, and a structured layout make it easy for 
          visitors to explore the company’s offerings with confidence.
        </p>
      </div>

      <div className="info-section">
        {/* First Row */}
        <div className="row">
          <div className="typography-box">
            <h2>TYPOGRAPHY</h2>
            <p>Helvetica</p>
            <p>Odibee Sans</p>
          </div>

          <div className="colors-box">
            <h2>COLORS</h2>
            <div className="color" style={{ background: '#2B82D9' ,color: '#1E1E1E'}}>#2B82D9</div>
            <div className="color" style={{ background: '#071256', color: '#FFFFFF' }}>#071256</div>
            <div className="color" style={{ background: '#F5F5F5' ,color: '#1E1E1E'}}>#F5F5F5</div>
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
              <p>Catch the full vibe of my above project on Behance and if you’re feeling inspired, hit that inbox button!</p>

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
