import React from 'react';
import './Proof02.css';
import { FaGithub, FaBehance } from 'react-icons/fa';
import proof01 from "../assets/images/proof02_johndoe_portfolio.png";
import flower from "../assets/images/s1.png";
import { useEffect } from 'react';

export default function Proof01() {
      useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="container">
      <div className="top-image">
        <img src={proof01} alt="Mockup" className="mockup" />
      </div>

      <div className="project-section">
        <h1 className="project-title-2">Modern <span className='colortext'>Portfolio</span> Design</h1>
        <p className="project-description">
          This is a portfolio interface I designed using Figma for showcasing personal and professional work. 
          It features sections such as About, Projects, Blog, and Contact—structured with a strong visual 
          hierarchy and clean layout. The design emphasizes clarity, 
          style, and easy navigation, making it suitable for creatives or developers building their personal brand.
        </p>
      </div>

      <div className="info-section">
        {/* First Row */}
        <div className="row">
          <div className="typography-box">
            <h2>TYPOGRAPHY</h2>
            <p>Plus Jakarta Sans</p>
          </div>

          <div className="colors-box">
            <h2>COLORS</h2>
            <div className="color" style={{ background: '#F4F3EC' ,color: '#1E1E1E'}}>#F4F3EC</div>
            <div className="color" style={{ background: '#000000', color: '#ffffff' }}>#000000</div>
           
          </div>
        </div>

        {/* Second Row */}
        <div className="bottom-row">
          <div className="contact-box-wrapper">
            <div className="flower-overlay">
              <img src={flower} alt="Flower" />
            </div>
            <div className="contact-box">
              <p>Peek my above project on Behance and drop me a message anytime , let’s create something awesome together!</p>
            
              <button onClick={() => window.open("https://www.behance.net/gallery/215032017/PORTFOLIO-UIUX-DESIGN", "_blank")} className="btn-light allbtns"><FaBehance /> Behance</button>
              <button onClick={() => {window.location.href = "mailto:manurirasara812@gmail.com";}} className="btn-dark allbtns">Inbox Me</button>
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
