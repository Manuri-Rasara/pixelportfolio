import React, { useState, useEffect } from 'react';
import './Navbar.css';
import navlogo from './assets/images/navlogo-01.png';
import { FiPlus, FiX } from 'react-icons/fi';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]);

  return (
    <div className='nav'>
      <div className='left'>
        <img src={navlogo} alt='left side manuri logo' className='navlogo' />
      </div>

      <div className='right'>
        <div className='links'>
          <ul className='menu-links'>
            <div className='round'><li><a href='#'>Home</a></li></div>
            <div className='round'><li><a href='#'>About</a></li></div>
            <div className='round'><li><a href='#'>Work</a></li></div>
            <div className='round rounded'>
              <li><a href='#'>Touch &nbsp;&nbsp;<span className='contacticon'>/.</span></a></li>
            </div>
          </ul>
        </div>
      </div>

      <div className={`hamburger animated-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <FiPlus className="icon plus" />
        <FiX className="icon close" />
      </div>

      {/* Overlay Menu for Small Screens */}
      <div className={`overlay ${menuOpen ? 'show' : ''}`}>
        <div className="overlay-header">
          <img src={navlogo} alt="nav logo" className="overlay-logo" />
        </div>
        <ul className="overlay-menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Work</a></li>
          <li className='touchsmall'><a href="#">Touch</a></li>
        </ul>
      </div>
    </div>
  );
};
