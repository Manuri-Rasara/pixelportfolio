import React, { useState, useEffect } from 'react';
import './Navbar.css';
import navlogo from './assets/images/navlogo-01.png';
import { FiPlus, FiX } from 'react-icons/fi';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navbarHeight = 70; // Adjust to match your actual navbar height

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

  const handleNavigation = (sectionId) => {
    setMenuOpen(false);

    const scrollToSection = () => {
      if (sectionId === null) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const section = document.getElementById(sectionId);
        if (section) {
          const y = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    };

    if (location.pathname !== '/') {
      navigate('/');
      // Wait for DOM update after route change before scrolling
      setTimeout(() => {
        requestAnimationFrame(scrollToSection);
      }, 300);
    } else {
      requestAnimationFrame(scrollToSection);
    }
  };

  return (
    <div className='nav'>
      {/* Left Logo */}
      <div className='left' onClick={() => (window.location.href = "/")} style={{ cursor: "pointer" }}>
        <img src={navlogo} alt='manuri logo' className='navlogo' />
      </div>

      {/* Desktop Links */}
      <div className='right'>
        <div className='links'>
          <ul className='menu-links'>
            <div className='round'>
              <li><button className="nav-button" onClick={() => handleNavigation(null)}>Home</button></li>
            </div>
            <div className='round'>
              <li><button className="nav-button" onClick={() => handleNavigation('info')}>Info</button></li>
            </div>
            <div className='round'>
              <li><button className="nav-button" onClick={() => handleNavigation('proof')}>Proof</button></li>
            </div>
            <div className='round rounded'>
              <li>
                <button className="nav-button" onClick={() => handleNavigation('contact')}>
                  Touch &nbsp;&nbsp;<span className='contacticon'>/.</span>
                </button>
              </li>
            </div>
          </ul>
        </div>
      </div>

      {/* Hamburger Icon */}
      <div className={`hamburger animated-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <FiPlus className="icon plus" />
        <FiX className="icon close" />
      </div>

      {/* Overlay Menu */}
      <div className={`overlay ${menuOpen ? 'show' : ''}`}>
        <div className="overlay-header">
          <img src={navlogo} alt="nav logo" className="overlay-logo" />
        </div>
        <ul className="overlay-menu">
          <li><button className="nav-button" onClick={() => handleNavigation(null)}>Home</button></li>
          <li><button className="nav-button" onClick={() => handleNavigation('info')}>Info</button></li>
          <li><button className="nav-button" onClick={() => handleNavigation('proof')}>Proof</button></li>
          <li className='touchsmall'><button className="nav-button" onClick={() => handleNavigation('contact')}>Touch</button></li>
        </ul>
      </div>
    </div>
  );
};
