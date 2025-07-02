import './App.css';
import FirstSection from './Components/FirstSection';
import { Navbar } from './Components/Navbar';
import ScrollText from './Components/ScrollText';
import  Skill  from './Components/Skill';
import  Work  from './Components/Work';
import  Contact from './Components/Contact';
import Footer from './Components/Footer';
import Proof01 from './Components/Pages/Proof01';
import Proof03 from './Components/Pages/Proof03';
import Proof04 from './Components/Pages/Proof04';
import Proof05 from './Components/Pages/Proof05';
import Proof06 from './Components/Pages/Proof06';
import Proof07 from './Components/Pages/Proof07';
import Proof08 from './Components/Pages/Proof08';
import ProofLogo01 from "../src/Components/Pages/LogoProof/ProofLogo01"






function App() {
  return (
    <div className="App">

      <Navbar/>
      {/* <FirstSection/>
      
      <Skill/>
     <Work/>
      <ScrollText/>

      <Contact/> */}

    
{/*    
      <Proof01/> */}

    {/* <Proof02/> */}
    {/* <Proof03/> */}
    {/* <Proof04/> */}
    {/* <Proof05/> */}
    {/* <Proof06/> */}
    {/* <Proof07/> */}
    {/* <Proof08/> */}
    <ProofLogo01/>
         <Footer/>
    </div>
  );
}

export default App;
