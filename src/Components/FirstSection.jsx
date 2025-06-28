import React from 'react'
import './FirstSection.css'
import smileface from './assets/images/green-smile.svg'
import shape from './assets/images/lap.gif'
import { MdFlight } from "react-icons/md";

export default function FirstSection() {
  return (
    <div className='sec1'>
        <div className='headline'>
            <img src={smileface} alt='green color smile face' className='faceicon'/>
            <h1>Hello! Sketch it. Ship it. I’m In.</h1>
        </div>

            <div className="intro-container">
                <div className="intro-card">

                    <h2 className="intro-title">Who am I?</h2>

                    <p className="intro-text">

                    I’m <strong className='name'>Manuri</strong> , a digital storyteller weaving code, color , and creativity.
                    As a passionate <span className="highlight">Web Developer</span>,
                    <span className="highlight"> UI/UX Designer</span> , and
                    <span className="highlight"> Graphic Artist</span> , I craft seamless experiences that blend function with flair.
                   
                    </p>

                    <button className="resume-button">UNLOCK MY RESUME</button>

                </div>

                <div className="intro-image-card">
                  <img src={shape} alt='lap gif' className='lap'/>
                  <div className='bottomall'>
                  <div className='flydiv'>
                   
                      <div>We Build. We Fly.</div>
                       <div className='plane'><MdFlight /></div>
                  </div>

                  <div className='sure'>100%</div>

                  </div>
                </div>
         </div>
    </div>
  )
}
