import React, { useState, useEffect, useRef } from 'react';

const About = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const textLines = [
    "We are not traditional private equity",
    "We do not exist to extract.",
    "We exist to create and regenerate"
  ];

  const cards = [
    {
      icon: WellnessIcon,
      title: "Wellness Sanctuaries",
      description: "Transforming undervalued hotels into wellness sanctuaries."
    },
    {
      icon: SovereignIcon,
      title: "Sovereign Communities", 
      description: "Acquiring fertile tracts of land to seed sovereign communities."
    },
    {
      icon: AlignedIcon,
      title: "Aligned Businesses",
      description: "Purchasing aligned businesses from motivated sellers to expand the GROWTHSTAR ecosystem."
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Check if section is in view
      if (scrollY + windowHeight > sectionTop && scrollY < sectionTop + sectionHeight) {
        const sectionProgress = (scrollY + windowHeight - sectionTop) / (sectionHeight + windowHeight);
        
        // Determine which text line to show based on scroll progress
        let newTextIndex = 0;
        if (sectionProgress > 0.2) newTextIndex = 1;
        if (sectionProgress > 0.4) newTextIndex = 2;
        
        setCurrentTextIndex(newTextIndex);
        
        // Show cards much earlier in the scroll progression
        const newVisibleCards: number[] = [];
        cards.forEach((_, index) => {
          let cardThreshold = 0;
          if (index === 0) cardThreshold = 0.1; // First card appears very early
          if (index === 1) cardThreshold = 0.25; // Second card appears with second text
          if (index === 2) cardThreshold = 0.35; // Third card appears much sooner
          
          if (sectionProgress > cardThreshold) {
            newVisibleCards.push(index);
          }
        });
        
        setVisibleCards(newVisibleCards);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [cards.length, textLines.length]);

  return (
    <section ref={sectionRef} id="about" className="min-h-screen bg-primary-dark-brown">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-thin text-text-on-dark mb-6 tracking-tight">
            Regenerative Real Estate Investment
          </h2>
          <p className="text-lg text-text-on-dark-muted max-w-3xl mx-auto leading-relaxed font-light">
            We specialize in acquiring and developing wellness sanctuaries and sovereign communities that prioritize regeneration, community, and conscious living.
          </p>
        </div>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          {/* Left Side - Fixed Image */}
          <div className="lg:sticky lg:top-0 lg:h-screen flex items-center justify-center p-8">
            <div className="w-full h-96 lg:h-3/4 rounded-2xl shadow-2xl overflow-hidden relative">
              {/* Local image for the About section background */}
              <img 
                src="/about-texture.jpg"
                alt="Organic green textured landscape background"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <RegenerativeIcon className="h-16 w-16 mx-auto mb-6 opacity-90" />
                  <h3 className="text-2xl font-thin mb-8 text-white">Regenerative Future</h3>
                  
                  {/* Single text line that changes on scroll */}
                  <div className="min-h-[2rem] flex items-center justify-center">
                    <p 
                      key={currentTextIndex}
                      className="text-sm font-light leading-relaxed animate-fade-in uppercase"
                    >
                      {textLines[currentTextIndex]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Scrolling Content */}
          <div className="flex flex-col justify-center p-8 lg:p-16 space-y-16">
            {/* Cards that appear on scroll */}
            <div className="space-y-12">
              {cards.map((card, index) => {
                const Icon = card.icon;
                const isVisible = visibleCards.includes(index);
                
                return (
                  <div
                    key={index}
                    ref={el => cardRefs.current[index] = el}
                    className={`transform transition-all duration-1000 ease-out ${
                      isVisible 
                        ? 'translate-x-0 opacity-100' 
                        : 'translate-x-8 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="flex items-start space-x-6 p-8 bg-primary-light rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-contrast/50">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary-dark-blue/10 rounded-lg flex items-center justify-center">
                          <Icon className="h-6 w-6 text-primary-dark-blue" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-thin text-text-on-light mb-3 text-lg tracking-wide">
                          {card.title}
                        </h4>
                        <p className="text-text-on-light-muted leading-relaxed font-light">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Final CTA */}
            <div className={`transform transition-all duration-1000 ease-out ${
              visibleCards.length === cards.length 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-8 opacity-0'
            }`}>
              <div className="bg-primary-dark-blue text-text-on-dark p-8 rounded-xl shadow-lg">
                <p className="text-lg font-light leading-relaxed">
                  Our acquisitions prove that capital, when freed from old paradigms, 
                  can empower both investors and communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


// Custom, more expressive and serious SVG icons (duotone, subtle depth)
function WellnessIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" fill="currentColor" opacity="0.08" />
      {/* Simple cross to nod to wellness/health */}
      <path d="M12 7v6M9 10h6" />
      {/* Leaf accent */}
      <path d="M16.2 11.4c-1.7.2-3.1 1.2-3.8 2.7 1.7-.1 3.2-1.1 3.8-2.7z" fill="currentColor" opacity="0.18" />
    </svg>
  );
}

function SovereignIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Shield */}
      <path d="M12 4l6 2v5c0 4.2-2.6 7-6 9-3.4-2-6-4.8-6-9V6l6-2z" fill="currentColor" opacity="0.08" />
      <path d="M12 4l6 2v5c0 4.2-2.6 7-6 9-3.4-2-6-4.8-6-9V6l6-2z" />
      {/* Tree inside the shield */}
      <path d="M12 12v4" />
      <path d="M12 8l3 3H9l3-3z" fill="currentColor" opacity="0.14" />
      <path d="M12 10.5l2.5 2.5h-5L12 10.5z" fill="currentColor" opacity="0.12" />
    </svg>
  );
}

function AlignedIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Subtle background */}
      <rect x="4" y="6" width="16" height="12" rx="6" fill="currentColor" opacity="0.06" />
      {/* Interlocking rings to represent aligned partnerships */}
      <circle cx="10.5" cy="12" r="3.5" />
      <circle cx="13.5" cy="12" r="3.5" />
      {/* Connection bar */}
      <path d="M11.5 12h1" />
    </svg>
  );
}

function RegenerativeIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Globe */}
      <circle cx="12" cy="12" r="8" fill="currentColor" opacity="0.08" />
      <circle cx="12" cy="12" r="8" />
      <path d="M4 12h16M12 4v16" opacity="0.6" />
      <path d="M7 7c2.5 1.5 7.5 1.5 10 0M7 17c2.5-1.5 7.5-1.5 10 0" opacity="0.6" />
      {/* Leaf */}
      <path d="M15.8 9.2c1.6-.3 3-.9 3.8-2-1.6.2-3 .9-3.8 2z" fill="currentColor" opacity="0.18" />
    </svg>
  );
}