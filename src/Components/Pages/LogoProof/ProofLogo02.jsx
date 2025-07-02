import React from 'react';
import './ProofLogo02.css';
import { useEffect } from 'react';
// Import images from src/assets/images
import img0 from '../../assets/images/islandtoast-mockup.webp';
import img1 from '../../assets/images/islandtoast-03.png';
import img2 from '../../assets/images/islandtoastmod-02.png';
import img3 from '../../assets/images/islandtoastmod-03.png';
import img4 from '../../assets/images/islandtoastmod-04.png';
import img5 from '../../assets/images/islandtoastmod-05.png';
import img6 from '../../assets/images/islandtoastmod-06.png';
import img7 from '../../assets/images/islandtoastmod-07.png';
import img8 from '../../assets/images/islandtoastmod-08.png';

const ProofLogo01 = () => {
        useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  
  const images = [img0,img1, img2, img3, img4, img5, img6, img7,img8];

  return (
    <div className="proof-container">
      <header className="proof-header">
        <h1>Island Toast-<span className='prooflogotitle'> Café Logos</span></h1>
      </header>
      <div className="grid-container">
        <div className="grid-item large">
          <img src={images[0]} alt="Grid item 1" />
        </div>
        {images.slice(1).map((src, index) => (
          <div className="grid-item small" key={index}>
            <img src={src} alt={`Grid item ${index + 2}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProofLogo01;
