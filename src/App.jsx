import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cursor from './components/Cursor';
import ShadowParticles from './components/ShadowParticles';
import LevelUpPopup from './components/LevelUpPopup';
import Preloader from './components/Preloader';

function App() {
  const [showPreloader, setShowPreloader] = useState(true);

  // Prevent default scroll restoration to avoid jumping
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  const handlePreloaderComplete = () => {
    setShowPreloader(false);
  };

  return (
    <Router>
      <div className="relative w-full min-h-screen font-inter bg-shadow-black text-slate-200">
        {/* Preloader */}
        {showPreloader && <Preloader onLoadComplete={handlePreloaderComplete} />}

        <Cursor />
        {/* Subtle rune background layer */}
        <div className="fixed inset-0 rune-bg pointer-events-none z-0 mix-blend-screen opacity-50"></div>

        {/* Shadow Particles */}
        <ShadowParticles />

        {/* Level Up Notification */}
        <LevelUpPopup />

        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;