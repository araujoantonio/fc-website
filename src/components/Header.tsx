import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center space-x-3">
            <img 
              src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/s8wxy93Zod7rS2Vs1nid/media/6368daf2d23ce5be90bdb021.png" 
              alt="Freeborn Capital" 
              className="h-8"
            />
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-white hover:text-gold transition-colors font-medium text-sm tracking-wide">About</a>
            <a href="#funds" className="text-white hover:text-gold transition-colors font-medium text-sm tracking-wide">Funds</a>
            <a href="#acquisitions" className="text-white hover:text-gold transition-colors font-medium text-sm tracking-wide">Acquisitions</a>
            <a href="#projects" className="text-white hover:text-gold transition-colors font-medium text-sm tracking-wide">Projects</a>
          </nav>
          
          <button className="bg-transparent border border-white/50 text-white px-6 py-2.5 rounded-full transition-all duration-200 font-medium text-sm tracking-wide hover:bg-white/10 hover:border-white/80">
            Book a Call
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;