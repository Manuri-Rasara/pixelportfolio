import { useState, useEffect } from 'react';
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
import WlanSearch from './Components/PreLoaderScreen/WlanSearch';

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Wait 3 seconds before starting fade out
    const timer1 = setTimeout(() => {
      setFadeOut(true);
    }, 4000);

    // After fade-out animation (0.8s), hide preloader completely
    const timer2 = setTimeout(() => {
      setLoading(false);
    }, 4800); // 3000 + 800ms fade

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <Router>
      {/* Preloader overlay with conditional fade-out class */}
      {loading && (
        <div className={fadeOut ? 'preloader-screen fade-out' : 'preloader-screen'}>
          <WlanSearch />
        </div>
      )}

      {/* Main content hidden while loading */}
      <div style={{ display: loading ? 'none' : 'block' }}>
        <Navbar />

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

        <Footer />
      </div>
    </Router>
  );
}

export default App;
