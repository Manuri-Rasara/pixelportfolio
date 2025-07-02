import React from 'react';
import './Proof08.css';
import { FaGithub, FaBehance } from 'react-icons/fa';
import proof01 from "../assets/images/proof08_line_portfolio.webp";
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
        <h1 className="project-title-8">My Portfolio <span className='colortext'>v3.0</span> Lineform</h1>
        <p className="project-description">
          
            I built Portfolio v3.0 with React and CSS but this isn’t 
            just another portfolio. It’s a bold experiment in structure
             and flow. Lines are not just dividers; they’re storytellers,
              guiding the eye through a layout that bends convention. 
              Every section unfolds with intentional rhythm, blending
               simplicity with unexpected design moves. This version is 
               clean, sharp, and unapologetically different,a digital 
               space where code meets character, and every detail draws you in.


        </p>
      </div>

      <div className="info-section">
        {/* First Row */}
        <div className="row">
          <div className="typography-box">
            <h2>TYPOGRAPHY</h2>
            <p>Poppins</p>
          </div>

          <div className="colors-box">
            <h2>COLORS</h2>
            <div className="color" style={{ background: '#A01B1B' ,color: '#1E1E1E'}}>#A01B1B</div>
              <div className="color" style={{ background: '#123458', color: '#FFFFFF' }}>#123458</div>
            <div className="color" style={{ background: '#F1EFEC' ,color: '#1E1E1E'}}>#F1EFEC</div>
           
          </div>
        </div>

        {/* Second Row */}
        <div className="bottom-row">
          <div className="contact-box-wrapper">
            <div className="flower-overlay">
              <img src={flower} alt="Flower" />
            </div>
            <div className="contact-box">
              <p>Hello and welcome to Portfolio v3.0,where every pixel tells a story and 
                every line of code sparks creativity. Explore, connect, or 
                dive into the code,this is a space where innovation lives.</p>
              <button onClick={() => window.open("https://github.com/Manuri-Rasara/Portfolio0404", "_blank")} className="btn-light allbtns"><FaGithub /> Github Repo</button>
              <button onClick={() => window.open("https://manuri-rasara.github.io/Portfolio0404/", "_blank")} className="btn-light allbtns"><TfiWorld />Website</button>
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
