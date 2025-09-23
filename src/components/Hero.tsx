import React from 'react';
import { ArrowRight, Leaf } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#032d6d] via-[#032d6d]/95 to-gray-900 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 left-32 w-96 h-96 bg-[#daa122] rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-32 w-80 h-80 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center mb-12">
          <div className="h-px bg-white/20 w-16"></div>
          <Leaf className="h-6 w-6 text-[#daa122] mx-4" />
          <div className="h-px bg-white/20 w-16"></div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-light mb-8 leading-tight tracking-tight">
          We Invest to Empower
          <span className="block text-[#daa122] font-normal">Health and Sovereignty</span>
        </h1>
        
        <p className="text-lg md:text-xl mb-16 max-w-4xl mx-auto leading-relaxed text-white/80 font-light">
          Freeborn Capital acquires regenerative assets and aligned businesses across Central & South America. 
          We create value outside the old banking paradigm — through trust, technology, and creative deal structures 
          that feel like modern business magic.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-[#daa122] hover:bg-[#daa122]/90 text-black px-8 py-4 rounded-md text-base font-medium flex items-center transition-all duration-200 shadow-lg hover:shadow-xl">
            Explore the Wellness Sanctuary Fund
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          
          <button className="border border-white/30 text-white hover:bg-white hover:text-[#032d6d] px-8 py-4 rounded-md text-base font-medium flex items-center transition-all duration-200 backdrop-blur-sm">
            Apply to Exit Your Business
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;