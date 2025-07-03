import React from 'react';
import './Work.css';
import { Link } from 'react-router-dom';
import p1 from './assets/images/pj1.png';
import p2 from './assets/images/pj2.png';
import p3 from './assets/images/pj3.png';
import p4 from './assets/images/pj4.png';
import p5 from './assets/images/pj5.png';
import p6 from './assets/images/pj6.png';
import p7 from './assets/images/pj7.png';
import p8 from './assets/images/pj8.png';
import l1 from './assets/images/pjlogo2.png';
import l2 from './assets/images/pjlogo1.png';
import btn1 from './assets/images/btn1.png';
import btn2 from './assets/images/btn2.png';
import btn3 from './assets/images/btn3.png';
import btn4 from './assets/images/btn4.png';
const cardData = [
  {
    image: p1,
    title: 'MosqGuard',
    tags: ['figma', 'mobile app','UI design',],
    description: 'Report mosquito zones instantly. Monitor reports and take action fast.',
    buttonText: 'View Project',
    buttonLink: '/proof/mosqguard',
    buttonimg : btn1,
  },
  {
    image: p2,
    title: 'Sleek Portfolio',
    tags: ['figma', 'website','UI design'],
    description: 'Clean and stylish portfolio UI with clear sections for showcasing personal and professional work.',
    buttonText: 'Case Study',
    buttonLink: '/proof/portfolio_design',
    buttonimg : btn2,
  },

    {
    image: p8,
    title: 'My Portfolio v1.0',
    tags: ['react', 'css'],
    description: 'A sleek black glassmorphism portfolio with a bold yellow accent, built using React and CSS to showcase my work in a clean, responsive layout.',
    buttonText: 'Try Now',
    buttonLink: '/proof/my_portfolio_version_01',
    buttonimg : btn1,
  },
  {
    image: p4,
    title: 'FastGrab',
    tags: ['figma', 'mobile app','UI design'],
    description: 'FastGrab is a sleek food delivery app with a dark, deep purple theme for a stylish, modern experience.',
    buttonText: 'Preview',
    buttonLink: '/proof/food_delivery_app_ui_design',
    buttonimg : btn4,
  },
  {
    image: p3,
    title: 'Orange Pulse — Clean Company Site',
    tags: ['figma', 'website','UI design'],
    description: 'A clean, professional company website with vibrant orange accents, featuring clear sections to showcase services, projects, and key business values.',
    buttonText: 'See Details',
    buttonLink: '/proof/company_website_ui_design',
    buttonimg : btn3,
  },
 {
    image: p7,
    title: 'My Portfolio v2.0',
    tags: ['react', 'css'],
    description: 'A vibrant React portfolio with theme-switching, playful emojis, and sleek CSS, where tech meets personality.',
    buttonText: 'Preview',
    buttonLink: '/proof/my_portfolio_version_02',
    buttonimg : btn4,
  },
    {
    image: p6,
    title: 'My Portfolio v3.0',
    tags: ['react', 'css'],
    description: 'A bold, unconventional portfolio built with React and CSS,where lines guide, design flows, and every detail speaks.',
    buttonText: 'See Details',
    buttonLink: '/proof/my_portfolio_version_03',
    buttonimg : btn3,
  },
  {
    image: p5,
    title: 'BlueWave Solutions — Clean Company Site',
    tags: ['figma', 'website','UI design'],
    description: 'A sleek, blue-themed company site with clean sections and smooth navigation, highlighting trust and professionalism.',
    buttonText: 'Try Now',
    buttonLink: '/proof/company_website_design_blue',
    buttonimg : btn1,
  },

  
 

  {
    image: l1,
    title: 'Logo Art for Café',
    tags: ['logos', 'adobe illustrator'],
    description: 'Designed unique and memorable logos tailored specifically for cafés and coffee shops.',
    buttonText: 'View Project',
    buttonLink: '/proof/normal_cafe_logos',
    buttonimg : btn2,
  },
  {
    image: l2,
    title: 'Unique Café Logos',
    tags: ['logos', 'adobe illustrator'],
    description: 'Specializing in logo designs that reflect the warm and welcoming spirit of cafés.',
    buttonText: 'Case Study',
    buttonLink: '/proof/coffee_cafe_logos',
    buttonimg : btn4,
  },


];

const Work = () => {
  return (
    <div className="work-section">
      <div className='workmaintitle'><h1>Proof</h1></div>
      {cardData.map((card, index) => (
        <div key={index} className="work-card">
          <div className="card-image">
            <img src={card.image} alt={card.title} />
          </div>
          <div className="card-content">
            <h2>{card.title}</h2>
            <div className="card-tags">
              {card.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="card-tag">{tag}</span>
              ))}
            </div>
            <p>{card.description}</p>
           <Link to={card.buttonLink} className="card-button">
                <img src={card.buttonimg} className='btnimg' />
          </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Work;
