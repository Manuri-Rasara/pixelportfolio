import React from 'react';
import './Proof03.css';
import { FaGithub, FaBehance } from 'react-icons/fa';
import proof01 from "../assets/images/proof03_orange_companywebsite.webp";
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
        <h1 className="project-title-3"><span className='colortext'>Energetic</span> Corporate UI Design</h1>
        <p className="project-description">
          A clean and professional UI design for a company website featuring clear sections for Why Choose Us, About the 
          Company, Services Offered, Project Showcase, and Contact Information. Designed for desktop with a focus on 
          simplicity and easy navigation to highlight key business values and offerings. The vibrant
           orange color was chosen to evoke energy, creativity, and enthusiasm, making the site feel welcoming and dynamic.
        </p>
      </div>

      <div className="info-section">
        {/* First Row */}
        <div className="row">
          <div className="typography-box">
            <h2>TYPOGRAPHY</h2>
            <p>Poppins</p>
            <p>Orbitron</p>
          </div>

          <div className="colors-box">
            <h2>COLORS</h2>
            <div className="color" style={{ background: '#FFA31D' ,color: '#1E1E1E'}}>#FFA31D</div>
            <div className="color" style={{ background: '#EF5454', color: '#1E1E1E' }}>#EF5454</div>
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
              <p>Explore my project above on Behance and feel free to inbox me! I’m excited to connect and collaborate!</p>
            
              <button onClick={() => window.open("https://www.behance.net/gallery/215616801/UIUX-DESIGN", "_blank")} className="btn-light allbtns" ><FaBehance /> Behance</button>
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
