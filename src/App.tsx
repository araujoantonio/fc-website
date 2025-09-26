import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Funds from './components/Funds';
import Acquisitions from './components/Acquisitions';
import Projects from './components/Projects';
import WhyFreeborn from './components/WhyFreeborn';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import WellnessFund from './components/WellnessFund';
import SovereignFund from './components/SovereignFund';
import BookCall from './components/BookCall';
import ApplyToExit from './components/ApplyToExit';
import ScrollToTop from './components/ScrollToTop';

function AppExperimental() {
  return (
    <>
      {/* Global background blur overlay */}
      <div className="pointer-events-none fixed inset-0 z-0 backdrop-blur-sm" />

      {/* Elevate content above the blur overlay */}
      <div className="relative z-10 min-h-screen bg-gradient-to-br from-dark-brown to-warm-white">
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Funds />
              <Acquisitions />
              <Projects />
              <WhyFreeborn />
              <FinalCTA />
            </>
          } />
          <Route path="/wellness-fund" element={<WellnessFund />} />
          <Route path="/sovereign-fund" element={<SovereignFund />} />
          <Route path="/book-call" element={<BookCall />} />
          <Route path="/apply-to-exit" element={<ApplyToExit />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default AppExperimental;