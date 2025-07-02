import React from 'react';
import './Work.css';
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
    tags: ['figma', 'mobile app'],
    description: 'Report mosquito zones instantly. Monitor reports and take action fast.',
    buttonText: 'View Project',
    buttonLink: '#project1',
    buttonimg : btn1,
  },
  {
    image: p2,
    title: 'CleanZone',
    tags: ['UI Design', 'responsive'],
    description: 'A mobile app for community cleanliness reporting.',
    buttonText: 'Case Study',
    buttonLink: '#project2',
    buttonimg : btn2,
  },
  {
    image: p3,
    title: 'SafeStreets',
    tags: ['UX Research', 'prototype'],
    description: 'Helping pedestrians report road hazards quickly.',
    buttonText: 'See Details',
    buttonLink: '#project3',
    buttonimg : btn3,
  },
  {
    image: p4,
    title: 'GreenMap',
    tags: ['App UI', 'environment'],
    description: 'Mapping eco-zones and reporting polluted areas.',
    buttonText: 'Preview',
    buttonLink: '#project4',
    buttonimg : btn4,
  },
  {
    image: p5,
    title: 'WasteWatch',
    tags: ['Prototype', 'Cleanliness'],
    description: 'Track garbage collections and public complaints.',
    buttonText: 'Try Now',
    buttonLink: '#project5',
    buttonimg : btn1,
  },

    {
    image: p6,
    title: 'SafeStreets',
    tags: ['UX Research', 'prototype'],
    description: 'Helping pedestrians report road hazards quickly.',
    buttonText: 'See Details',
    buttonLink: '#project3',
    buttonimg : btn3,
  },
  {
    image: p7,
    title: 'GreenMap',
    tags: ['App UI', 'environment'],
    description: 'Mapping eco-zones and reporting polluted areas.',
    buttonText: 'Preview',
    buttonLink: '#project4',
    buttonimg : btn4,
  },
  {
    image: p8,
    title: 'WasteWatch',
    tags: ['Prototype', 'Cleanliness'],
    description: 'Track garbage collections and public complaints.',
    buttonText: 'Try Now',
    buttonLink: '#project5',
    buttonimg : btn1,
  },
  {
    image: l1,
    title: 'MosqGuard',
    tags: ['figma', 'mobile app'],
    description: 'Report mosquito zones instantly. Monitor reports and take action fast.',
    buttonText: 'View Project',
    buttonLink: '#project1',
    buttonimg : btn1,
  },
  {
    image: l2,
    title: 'CleanZone',
    tags: ['UI Design', 'responsive'],
    description: 'A mobile app for community cleanliness reporting.',
    buttonText: 'Case Study',
    buttonLink: '#project2',
    buttonimg : btn2,
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
            <a href={card.buttonLink} className="card-button">
              <img src={card.buttonimg} className='btnimg' />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Work;
