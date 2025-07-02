import React from 'react';
import { Navbar } from './Components/Navbar';
import FirstSection from './Components/FirstSection';
import ScrollText from './Components/ScrollText';
import Skill from './Components/Skill';
import Work from './Components/Work';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const Home = () => {
  return (
    <>
      
      <div id='info'> <FirstSection /></div>
     
      <Skill />
       <div id='proof'><Work /></div>
      <ScrollText />
       <div id='contact'><Contact /></div>
     
    </>
  );
};

export default Home;
