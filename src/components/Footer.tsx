import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-3 mb-8">
            <img 
              src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/s8wxy93Zod7rS2Vs1nid/media/6368daf2d23ce5be90bdb021.png" 
              alt="Freeborn Capital" 
              className="h-6 brightness-0 invert"
            />
          </div>
          
          <p className="text-gray-400 text-center font-light">
            We Invest to Empower Health and Sovereignty.
          </p>
          
          <div className="mt-12 pt-8 border-t border-gray-800 w-full text-center">
            <p className="text-gray-500 text-sm font-light">
              © 2025 Freeborn Capital. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;