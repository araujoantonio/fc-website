import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-deep-soil text-white overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/hero-bg.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      {/* Overlay gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-soil/40 via-deep-soil/20 to-deep-soil/60" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Glassmorphism card */}
        <div className="mx-auto mb-10 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl p-8 sm:p-12">
          
          <h1 className="text-4xl md:text-6xl font-thin mb-6 leading-tight tracking-tight">
            We Invest to Empower
            <span className="block text-gold font-normal">Health and Sovereignty</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-10 max-w-4xl mx-auto leading-relaxed text-white/85 font-light">
            Freeborn Capital acquires regenerative assets and aligned businesses across Central & South America. 
            We create value outside the old banking paradigm — through trust, technology, and creative deal structures 
            that feel like modern business magic.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gold hover:bg-gold/90 text-deep-soil px-8 py-4 rounded-full text-base font-medium flex items-center transition-all duration-200 shadow-lg hover:shadow-xl">
              Explore the Wellness Sanctuary Fund
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            
            <button className="border border-white/40 text-white hover:bg-white hover:text-indigo-dye px-8 py-4 rounded-full text-base font-medium flex items-center transition-all duration-200 backdrop-blur-sm">
              Apply to Exit Your Business
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;