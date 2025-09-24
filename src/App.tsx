import React from 'react';
import Header from './components/Header';
import HeroNoGlass from './components/HeroNoGlass';
import About from './components/About';
import Funds from './components/Funds';
import Acquisitions from './components/Acquisitions';
import Projects from './components/Projects';
import WhyFreeborn from './components/WhyFreeborn';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function AppExperimental() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sand-beige to-warm-white">
      <Header />
      <HeroNoGlass />
      <About />
      <Funds />
      <Acquisitions />
      <Projects />
      <WhyFreeborn />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default AppExperimental;