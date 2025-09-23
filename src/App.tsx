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

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
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
  );
}

export default App;