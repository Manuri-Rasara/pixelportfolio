import React from 'react'
import './Footer.css'
import navlogo from './assets/images/navlogo-01.png';

export default function Footer() {
  return (
    <div className='footer'>
        <button onClick='#home'>
            <img src={navlogo} alt='footer with only logo to go home' className='footerimg'></img>
        </button>
    </div>
  )
}
