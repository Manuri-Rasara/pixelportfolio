import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './Components/Navbar';
import Footer from './Components/Footer';

import Home from './Home';
import Proof01 from './Components/Pages/Proof01';
import Proof02 from './Components/Pages/Proof02';
import Proof03 from './Components/Pages/Proof03';
import Proof04 from './Components/Pages/Proof04';
import Proof05 from './Components/Pages/Proof05';
import Proof06 from './Components/Pages/Proof06';
import Proof07 from './Components/Pages/Proof07';
import Proof08 from './Components/Pages/Proof08';
import ProofLogo01 from './Components/Pages/LogoProof/ProofLogo01';
import ProofLogo02 from './Components/Pages/LogoProof/ProofLogo02';

function App() {
  return (
    <Router>
      {/* ✅ Global Navbar */}
      <Navbar />

      {/* ✅ Route-specific content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proof/mosqguard" element={<Proof01 />} />
        <Route path="/proof/portfolio_design" element={<Proof02 />} />
        <Route path="/proof/company_website_ui_design" element={<Proof03 />} />
        <Route path="/proof/food_delivery_app_ui_design" element={<Proof04 />} />
        <Route path="/proof/company_website_design_blue" element={<Proof05 />} />
        <Route path="/proof/my_portfolio_version_01" element={<Proof06 />} />
        <Route path="/proof/my_portfolio_version_02" element={<Proof07 />} />
        <Route path="/proof/my_portfolio_version_03" element={<Proof08 />} />
        <Route path="/proof/coffee_cafe_logos" element={<ProofLogo01 />} />
        <Route path="/proof/normal_cafe_logos" element={<ProofLogo02 />} />
      </Routes>

      {/* ✅ Global Footer */}
      <Footer />
    </Router>
  );
}

export default App;
