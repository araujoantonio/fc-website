import React from 'react';
import { TreePine, Building, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 tracking-tight">
            About Freeborn Capital
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            At Freeborn Capital, we believe business is the most powerful mechanism for creating a regenerative future.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-xl font-medium text-gray-900 mb-6 tracking-wide">We are not traditional private equity</h3>
            <p className="text-base text-gray-600 mb-6 leading-relaxed font-light">
              We do not exist to extract.
            </p>
            <p className="text-base text-gray-600 mb-8 leading-relaxed font-light">
              <strong>We exist to create and regenerate:</strong>
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4 p-6 bg-warm-white rounded-lg hover:shadow-sm transition-all duration-200 border border-gray-100">
              <Building className="h-6 w-6 text-indigo-dye mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-gray-900 mb-2 text-sm tracking-wide">Wellness Sanctuaries</h4>
                <p className="text-gray-600 text-sm font-light">Transforming undervalued hotels into wellness sanctuaries.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-6 bg-warm-white rounded-lg hover:shadow-sm transition-all duration-200 border border-gray-100">
              <TreePine className="h-6 w-6 text-indigo-dye mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-gray-900 mb-2 text-sm tracking-wide">Sovereign Communities</h4>
                <p className="text-gray-600 text-sm font-light">Acquiring fertile tracts of land to seed sovereign communities.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-6 bg-warm-white rounded-lg hover:shadow-sm transition-all duration-200 border border-gray-100">
              <Users className="h-6 w-6 text-indigo-dye mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-gray-900 mb-2 text-sm tracking-wide">Aligned Businesses</h4>
                <p className="text-gray-600 text-sm font-light">Purchasing aligned businesses from motivated sellers to expand the GROWTHSTAR ecosystem.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center bg-[#032d6d] text-white p-12 rounded-lg">
          <p className="text-lg font-light leading-relaxed max-w-4xl mx-auto">
            Our acquisitions prove that capital, when freed from old paradigms, 
            can empower both investors and communities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;