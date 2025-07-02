import React from 'react';
import './Proof07.css';
import { FaGithub, FaBehance } from 'react-icons/fa';
import proof01 from "../assets/images/proof07_porfolio_emoji_colors_dark&lightmode.webp";
import flower from "../assets/images/s1.png";
import { TfiWorld } from "react-icons/tfi";
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
        <h1 className="project-title-7">My Portfolio <span className='colortext'>v2.0</span> Emojify</h1>
        <p className="project-description">
          
            Welcome to my Portfolio v2.0  a 
            vibrant, dynamic showcase built mainly with React and styled with sleek CSS. This 
            site lets you switch themes effortlessly, reflecting your mood and style. Packed 
            with expressive emojis, it adds a playful touch to a professional experience, 
            making every visit feel fresh and engaging. Dive in and explore a creative space 
            where tech meets personality!


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
            <div className="color" style={{ background: '#61E7FF' ,color: '#1E1E1E'}}>#61E7FF</div>
              <div className="color" style={{ background: '#FFA727', color: '#1E1E1E' }}>#FFA727</div>
            <div className="color" style={{ background: '#69CC7A' ,color: '#1E1E1E'}}>#69CC7A</div>
            <div className="color" style={{ background: '#F86146', color: '#1E1E1E' }}>#F86146</div>
            <div className="color" style={{ background: '#F8F8F8' ,color: '#1E1E1E'}}>#F8F8F8</div>
          </div>
        </div>

        {/* Second Row */}
        <div className="bottom-row">
          <div className="contact-box-wrapper">
            <div className="flower-overlay">
              <img src={flower} alt="Flower" />
            </div>
            <div className="contact-box">
              <p>Check out my Portfolio v2.0 by clicking the 
                link button! Got questions or want to chat? Hit the 
                Inbox Me button to reach me directly. Curious about
                 how it was built? Explore the code on GitHub. Let’s 
                 connect, create, or just say hi! everything’s right here!</p>
              <button onClick={() => window.open("https://github.com/Manuri-Rasara/portfolio-light", "_blank")} className="btn-light allbtns"><FaGithub /> Github Repo</button>
              <button onClick={() => window.open("https://manuri-rasara.github.io/portfolio-light/", "_blank")} className="btn-light allbtns"><TfiWorld />Website</button>
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
