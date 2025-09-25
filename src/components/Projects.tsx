import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-warm-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-light text-deep-soil mb-6 tracking-tight">Featured Projects</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-warm-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-200 border border-sand-beige/50">
            <div className="h-48 bg-gradient-to-br from-indigo-dye/10 to-gold/10 border-b border-sand-beige/50"></div>
            <div className="p-8">
              <div className="flex items-center mb-4">
                <MapPin className="h-5 w-5 text-indigo-dye mr-2" />
                <h3 className="text-lg font-medium text-deep-soil tracking-wide">Lomas de Atitlán</h3>
                <span className="ml-2 text-deep-soil/60 text-sm font-light">(Guatemala)</span>
              </div>
              <p className="text-deep-soil/80 leading-relaxed font-light">
                A boutique retreat center transforming into a regenerative wellness sanctuary with expanded villas, 
                food forests, and upgraded biophilic design.
              </p>
            </div>
          </div>
          
          <div className="bg-warm-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-200 border border-sand-beige/50">
            <div className="h-48 bg-gradient-to-br from-gold/10 to-indigo-dye/10 border-b border-sand-beige/50"></div>
            <div className="p-8">
              <div className="flex items-center mb-4">
                <MapPin className="h-5 w-5 text-indigo-dye mr-2" />
                <h3 className="text-lg font-medium text-deep-soil tracking-wide">Maestro Valley</h3>
                <span className="ml-2 text-deep-soil/60 text-sm font-light">(Guatemala)</span>
              </div>
              <p className="text-deep-soil/80 leading-relaxed font-light">
                A 1,200-hectare mountain sanctuary, flagship model for future sovereign community expansion.
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <button className="bg-gold hover:bg-gold/90 text-deep-soil px-8 py-3 rounded-full font-medium flex items-center mx-auto transition-all duration-200 text-sm tracking-wide">
            View Our Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;