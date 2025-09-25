import React from 'react';
import { CheckCircle, Clock, Eye, ArrowRight } from 'lucide-react';

const Acquisitions = () => {
  return (
    <section id="acquisitions" className="py-24 bg-sand-beige">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-thin text-deep-soil mb-6 tracking-tight">Strategic Acquisitions</h2>
      <h3 className="text-2xl font-thin text-indigo-dye mb-8 tracking-wide">Ready to Exit Your Business?</h3>
          <p className="text-lg text-deep-soil/80 max-w-4xl mx-auto leading-relaxed font-light">
            If you're an owner ready for your next chapter, Freeborn Capital is a values-aligned buyer 
            who will honor your legacy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 bg-warm-white rounded-lg hover:shadow-sm transition-all duration-200 border border-sand-beige/50">
            <CheckCircle className="h-8 w-8 text-indigo-dye mx-auto mb-4" />
            <h4 className="text-lg font-thin text-deep-soil mb-3 tracking-wide">Simple</h4>
            <p className="text-deep-soil/80 font-light">Apply online in minutes.</p>
          </div>
          
          <div className="text-center p-8 bg-warm-white rounded-lg hover:shadow-sm transition-all duration-200 border border-sand-beige/50">
            <Clock className="h-8 w-8 text-indigo-dye mx-auto mb-4" />
            <h4 className="text-lg font-thin text-deep-soil mb-3 tracking-wide">Fast</h4>
            <p className="text-deep-soil/80 font-light">We respond within 24 hours.</p>
          </div>
          
          <div className="text-center p-8 bg-warm-white rounded-lg hover:shadow-sm transition-all duration-200 border border-sand-beige/50">
            <Eye className="h-8 w-8 text-indigo-dye mx-auto mb-4" />
            <h4 className="text-lg font-thin text-deep-soil mb-3 tracking-wide">Transparent</h4>
            <p className="text-deep-soil/80 font-light">We co-create fair, win-win terms.</p>
          </div>
        </div>
        
        <div className="bg-warm-white p-12 rounded-lg mb-16 border border-sand-beige/50">
          <p className="text-base text-deep-soil/80 leading-relaxed text-center font-light max-w-4xl mx-auto">
            Unlike traditional buyers who drag out due diligence to force down price, we move quickly 
            with trust-based structures and technology that mitigate risk. That means a faster, cleaner exit — 
            while ensuring your business continues to grow and serve humanity.
          </p>
        </div>
        
        <div className="text-center">
          <button className="bg-indigo-dye hover:bg-indigo-dye/90 text-white px-8 py-4 rounded-full text-base font-medium flex items-center mx-auto transition-all duration-200 shadow-lg hover:shadow-xl tracking-wide">
            Apply to Exit Your Business
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Acquisitions;