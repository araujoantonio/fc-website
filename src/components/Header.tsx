import React from 'react';

const Header = () => {
  return (
    <header className="bg-warm-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center space-x-3">
            <img 
              src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/s8wxy93Zod7rS2Vs1nid/media/6368daf2d23ce5be90bdb021.png" 
              alt="Freeborn Capital" 
              className="h-8"
            />
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 hover:text-[#032d6d] transition-colors font-medium text-sm tracking-wide">About</a>
            <a href="#funds" className="text-gray-600 hover:text-[#032d6d] transition-colors font-medium text-sm tracking-wide">Funds</a>
            <a href="#acquisitions" className="text-gray-600 hover:text-[#032d6d] transition-colors font-medium text-sm tracking-wide">Acquisitions</a>
            <a href="#projects" className="text-gray-600 hover:text-[#032d6d] transition-colors font-medium text-sm tracking-wide">Projects</a>
          </nav>
          
          <button className="bg-[#032d6d] text-white px-6 py-2.5 rounded-md hover:bg-[#032d6d]/90 transition-all duration-200 font-medium text-sm tracking-wide shadow-sm hover:shadow-md">
            Book a Call
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;