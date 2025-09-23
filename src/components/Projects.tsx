import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-warm-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 tracking-tight">Featured Projects</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-warm-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-200 border border-gray-100">
            <div className="h-48 bg-gradient-to-br from-[#032d6d]/10 to-[#daa122]/10 border-b border-gray-100"></div>
            <div className="p-8">
              <div className="flex items-center mb-4">
                <MapPin className="h-5 w-5 text-[#032d6d] mr-2" />
                <h3 className="text-lg font-medium text-gray-900 tracking-wide">Lomas de Atitlán</h3>
                <span className="ml-2 text-gray-500 text-sm font-light">(Guatemala)</span>
              </div>
              <p className="text-gray-600 leading-relaxed font-light">
                A boutique retreat center transforming into a regenerative wellness sanctuary with expanded villas, 
                food forests, and upgraded biophilic design.
              </p>
            </div>
          </div>
          
          <div className="bg-warm-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-200 border border-gray-100">
            <div className="h-48 bg-gradient-to-br from-[#daa122]/10 to-[#032d6d]/10 border-b border-gray-100"></div>
            <div className="p-8">
              <div className="flex items-center mb-4">
                <MapPin className="h-5 w-5 text-[#032d6d] mr-2" />
                <h3 className="text-lg font-medium text-gray-900 tracking-wide">Maestro Valley</h3>
                <span className="ml-2 text-gray-500 text-sm font-light">(Guatemala)</span>
              </div>
              <p className="text-gray-600 leading-relaxed font-light">
                A 1,200-hectare mountain sanctuary, flagship model for future sovereign community expansion.
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <button className="bg-[#daa122] hover:bg-[#daa122]/90 text-black px-8 py-3 rounded-md font-medium flex items-center mx-auto transition-all duration-200 text-sm tracking-wide">
            View Our Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;