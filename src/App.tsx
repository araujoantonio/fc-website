import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Funds from './components/Funds';
import Acquisitions from './components/Acquisitions';
import Projects from './components/Projects';
import WhyFreeborn from './components/WhyFreeborn';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function AppExperimental() {
  return (
    <>
      {/* Global background blur overlay */}
      <div className="pointer-events-none fixed inset-0 z-0 backdrop-blur-sm" />

      {/* Elevate content above the blur overlay */}
      <div className="relative z-10 min-h-screen bg-gradient-to-br from-dark-brown to-warm-white">
        <Header />
        <Hero />
        <About />
        <Funds />
        <Acquisitions />
        <Projects />
        <WhyFreeborn />
        <FinalCTA />
        <Footer />
      </div>
    </>
  );
}

export default AppExperimental;