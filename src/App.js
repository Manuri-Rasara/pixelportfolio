import './App.css';
import FirstSection from './Components/FirstSection';
import { Navbar } from './Components/Navbar';
import ScrollText from './Components/ScrollText';
import  Skill  from './Components/Skill';
import  Work  from './Components/Work';
import  Contact from './Components/Contact';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <FirstSection/>
      
      <Skill/>
     <Work/>
      <ScrollText/>

      <Contact/>
    </div>
  );
}

export default App;
