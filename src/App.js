import './App.css';
import FirstSection from './Components/FirstSection';
import { Navbar } from './Components/Navbar';
import ScrollText from './Components/ScrollText';
import  Skill  from './Components/Skill';
import  Work  from './Components/Work';
import  Contact from './Components/Contact';
import Footer from './Components/Footer';
import Proof01 from './Components/Pages/Proof01';





function App() {
  return (
    <div className="App">

      <Navbar/>
      {/* <FirstSection/>
      
      <Skill/>
     <Work/>
      <ScrollText/>

      <Contact/> */}

    
   
      <Proof01/>
         <Footer/>
    </div>
  );
}

export default App;
