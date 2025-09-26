import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Mountain, ArrowRight } from 'lucide-react';

const Funds = () => {
  return (
    <section id="funds" className="py-24 bg-primary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-thin text-text-on-light mb-6 tracking-tight">The Funds</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Wellness Sanctuary Fund */}
          <div className="bg-primary-light rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-200 border border-primary-contrast/50">
            <div className="bg-primary-dark-blue p-8 text-text-on-dark">
              <div className="flex items-center mb-4">
                <Leaf className="h-6 w-6 mr-3" />
                <h3 className="text-xl font-thin tracking-wide text-text-on-dark">The Wellness Sanctuary Fund</h3>
              </div>
              <p className="text-text-accent font-light text-sm tracking-wide">(Now Launching)</p>
            </div>
            
            <div className="p-8 space-y-6">
              <p className="text-text-on-light-muted leading-relaxed font-light">
                Raise and deploy capital into boutique wellness sanctuaries in sacred sites and conscious communities.
              </p>
              
              <div>
                <h4 className="font-thin text-primary-dark-blue mb-3 text-sm tracking-wide">Highlights:</h4>
                <ul className="text-primary-dark-blue/80 space-y-2 text-sm font-light">
                <li>• Acquire boutique hotels, lodges, and retreat centers (10+ rooms, expansion potential)</li>
                <li>• Target locations: Lake Atitlán (Guatemala - anchor market), Sacred Valley (Peru), Diamante Valley & Uvita (Costa Rica), select coastal/inland wellness hubs (Colombia), Bocas del Toro & Boquete (Panama), additional regenerative hubs across Central & South America</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-thin text-primary-dark-blue mb-3 text-sm tracking-wide">Value-Add Strategy:</h4>
                <ul className="text-primary-dark-blue/80 space-y-2 text-sm font-light">
                <li>• Operational optimization (GROWTHSTAR Scaling)</li>
                <li>• Premium villa development model</li>
                <li>• Anchor asset enhancements with biophilic design</li>
                <li>• Regenerative infrastructure: food, water, energy, zero-waste</li>
                <li>• Hold Term: 4–5 years → Exit to GROWTHSTAR via ROFO</li>
                </ul>
              </div>
              
              <div className="bg-gray-50/60 p-4 rounded-xl border border-white/40 backdrop-blur-sm">
                <p className="text-primary-dark-blue font-light text-sm">
                  Guiding Principle: Regeneration First – wellness before luxury, nature as the primary architect.
                </p>
              </div>
              
              <Link 
                to="/wellness-fund"
                className="w-full bg-interactive-primary hover:bg-interactive-primary-hover text-text-on-gold px-6 py-3 rounded-full font-medium flex items-center justify-center transition-all duration-200 text-sm tracking-wide"
              >
                Explore the Wellness Sanctuary Fund
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
          
          {/* Sovereign Community Fund */}
          <div className="bg-primary-light rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-200 border border-primary-contrast/50">
            <div className="bg-primary-dark-brown p-8 text-text-on-dark">
              <div className="flex items-center mb-4">
                <Mountain className="h-6 w-6 mr-3" />
                <h3 className="text-xl font-thin tracking-wide text-text-on-dark">The Sovereign Community Fund</h3>
              </div>
              <p className="text-text-accent font-light text-sm tracking-wide">(Launching 2027)</p>
            </div>
            
            <div className="p-8 space-y-6">
              <p className="text-text-on-light-muted leading-relaxed font-light">
                Inspired by Acts de Real, this fund will acquire large tracts of fertile land to seed intentional sovereign communities.
              </p>
              
              <div>
                <h4 className="font-thin text-gray-900 mb-3 text-sm tracking-wide">Highlights:</h4>
                <ul className="text-gray-600 space-y-2 text-sm font-light">
                <li>• Large-scale regenerative agriculture & syntropic food forests</li>
                <li>• Subdivided parcels for residents, investors, and aligned partners</li>
                <li>• Shared governance + community infrastructure</li>
                <li>• Biophilic design & natural integration</li>
                </ul>
              </div>
              
              <button className="w-full bg-interactive-primary hover:bg-interactive-primary-hover text-text-on-gold px-6 py-3 rounded-full font-medium flex items-center justify-center transition-all duration-200 text-sm tracking-wide">
                Learn About the Sovereign Community Fund
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Funds;