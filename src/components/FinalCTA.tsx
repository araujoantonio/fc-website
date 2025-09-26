import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-24 bg-indigo-dye text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-thin mb-12 tracking-tight leading-tight text-white">
          Join us in redrawing the boundaries of what's possible.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          <div className="p-8 bg-warm-white/5 backdrop-blur-sm rounded-lg hover:bg-warm-white/10 transition-all duration-200 border border-white/10">
            <h3 className="text-xl font-thin mb-4 tracking-wide text-white">For Investors</h3>
            <p className="text-white/80 mb-6 font-light">Explore the Wellness Sanctuary Fund</p>
            <button className="bg-gold hover:bg-gold/90 text-deep-soil px-6 py-3 rounded-full font-medium flex items-center mx-auto transition-all duration-200 text-sm tracking-wide">
              Explore Fund
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
          
          <div className="p-8 bg-warm-white/5 backdrop-blur-sm rounded-lg hover:bg-warm-white/10 transition-all duration-200 border border-white/10">
            <h3 className="text-xl font-thin mb-4 tracking-wide text-white">For Business Owners</h3>
            <p className="text-white/80 mb-6 font-light">Apply to Exit with Freeborn Capital</p>
            <button className="bg-white hover:bg-sand-beige text-indigo-dye px-6 py-3 rounded-full font-medium flex items-center mx-auto transition-all duration-200 text-sm tracking-wide">
              Apply to Exit
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
        
        <button className="bg-warm-white text-indigo-dye hover:bg-sand-beige px-8 py-4 rounded-full text-base font-medium flex items-center mx-auto transition-all duration-200 shadow-lg hover:shadow-xl tracking-wide">
          <Phone className="mr-3 h-6 w-6" />
          Book a Call with Freeborn Capital
        </button>
      </div>
    </section>
  );
};

export default FinalCTA;