import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroNoGlass = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-black overflow-hidden">
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

      {/* Content directly over the video (no glass container) */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-light mb-6 leading-tight tracking-tight text-white">
          We Invest to Empower
          <span className="block text-gold font-normal">Health and Sovereignty</span>
        </h1>

        <div className="mx-auto mb-10 max-w-3xl">
          <div
            data-slot="glass-card"
            className="rounded-full bg-white/8 backdrop-blur-md py-6 px-8 text-white"
          >
            <p className="text-lg md:text-xl leading-relaxed font-light">
              We acquire regenerative assets across the Americas — creating value through trust, technology, and modern deal structures.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-gold hover:bg-gold/90 text-black px-8 py-4 rounded-full text-base font-medium flex items-center transition-all duration-200 shadow-lg hover:shadow-xl">
            Explore Fund
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>

          <button className="text-white hover:bg-deep-soil hover:text-white px-8 py-4 rounded-full text-base font-medium flex items-center transition-all duration-200 backdrop-blur-md bg-white/8">
            Apply to Exit
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroNoGlass;