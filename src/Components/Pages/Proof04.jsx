import React from 'react';
import './Proof04.css';
import { FaGithub, FaBehance } from 'react-icons/fa';
import proof01 from "../assets/images/proof04_fooddelivery_app.webp";
import flower from "../assets/images/s1.png";
import { useEffect } from 'react';
import { FaFigma } from 'react-icons/fa6';

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
        <h1 className="project-title-4"><span className='colortext'>FastGrab</span> Purple Bites UI</h1>
        <p className="project-description">
         FastGrab is a modern food delivery app UI designed on Figma, 
         featuring a dark theme complemented by deep purple tones. 
         The dark background adds a sleek, premium feel, while the 
         purple color stimulates appetite and creativity,creating 
         an engaging and stylish user experience.
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
            <div className="color" style={{ background: '#0C0B34' ,color: '#FFFFFF'}}>#004DB9</div>
            <div className="color" style={{ background: '#4A3063', color: '#FFFFFF' }}>#FECA00</div>
            <div className="color" style={{ background: '#000000' ,color: '#FFFFFF'}}>#FFFFFF</div>
          </div>
        </div>

        {/* Second Row */}
        <div className="bottom-row">
          <div className="contact-box-wrapper">
            <div className="flower-overlay">
              <img src={flower} alt="Flower" />
            </div>
            <div className="contact-box">
              <p>Loved what you saw above? Watch the prototype and if it sparks something, just inbox me!</p>

              <button onClick={() => window.open("https://www.figma.com/proto/0wsQCpBHfyo2AhkDijzLpf/FastGrab?node-id=59-518&t=YGPhfthMStHTyN14-1", "_blank")} className="btn-light allbtns"><FaFigma/> Prototype</button>
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
