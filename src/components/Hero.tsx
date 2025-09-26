import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-primary-dark-brown text-text-on-dark overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-thin mb-6 tracking-tight leading-tight text-white">
          Regenerative Real Estate for
          <span className="block text-white font-normal">Health and Sovereignty</span>
        </h1>
        
        <p className="text-lg md:text-xl text-text-on-dark-muted mb-8 max-w-2xl mx-auto leading-relaxed font-light">
          We acquire and develop wellness sanctuaries and sovereign communities across the Americas, creating spaces where people can thrive in harmony with nature.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-interactive-primary hover:bg-interactive-primary-hover text-text-on-gold px-8 py-4 rounded-full text-base font-medium flex items-center transition-all duration-200 shadow-lg hover:shadow-xl">
            Explore Our Fund
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <button className="border border-white/40 text-text-on-dark hover:bg-white hover:text-primary-dark-blue px-8 py-4 rounded-full text-base font-medium flex items-center transition-all duration-200 backdrop-blur-sm">
            Apply to Exit
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;