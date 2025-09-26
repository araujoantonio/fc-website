import React, { useState, useEffect } from 'react';

const BookCall = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="min-h-screen bg-primary-dark-brown">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header Section */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ease-out ${
            loaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-thin text-text-on-dark mb-6 tracking-tight">
            Schedule a Discovery Call
          </h1>
          <p className="text-xl text-text-on-dark-muted max-w-3xl mx-auto leading-relaxed font-light">
            Let's explore how Freeborn Capital can help transform your investment strategy through regenerative real estate and sovereign community development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 min-h-screen">
          {/* Left Side - Information */}
          <div className="flex flex-col justify-center space-y-8">
            {/* What to expect */}
            <div
              className={`transition-all duration-1000 ease-out ${
                loaded ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              <div className="bg-primary-light/10 p-8 rounded-xl border border-primary-contrast/20">
                <h2 className="text-2xl font-thin text-text-on-dark mb-4 tracking-wide">
                  What to Expect
                </h2>
                <ul className="space-y-3 text-text-on-dark-muted font-light">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span>30-minute discovery conversation about your investment goals</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span>Overview of our regenerative investment opportunities</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span>Discussion of wellness sanctuaries and sovereign communities</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span>Next steps tailored to your investment timeline</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Why schedule */}
            <div
              className={`transition-all duration-1000 ease-out ${
                loaded ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="bg-primary-dark-blue/20 p-8 rounded-xl border border-primary-dark-blue/30">
                <h2 className="text-2xl font-thin text-text-on-dark mb-4 tracking-wide">
                  Why Freeborn Capital?
                </h2>
                <p className="text-text-on-dark-muted leading-relaxed font-light mb-4">
                  We believe in investments that create positive impact while generating returns. Our approach combines:
                </p>
                <ul className="space-y-2 text-text-on-dark-muted font-light">
                  <li>• <strong className="text-text-on-dark">Regenerative Finance</strong> - Building wealth through ecosystem restoration</li>
                  <li>• <strong className="text-text-on-dark">Sovereign Communities</strong> - Creating self-sustaining living environments</li>
                  <li>• <strong className="text-text-on-dark">Wellness Sanctuaries</strong> - Transforming hospitality for conscious living</li>
                </ul>
              </div>
            </div>

            {/* Contact info */}
            <div
              className={`transition-all duration-1000 ease-out ${
                loaded ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <div className="bg-primary-light/5 p-6 rounded-xl border border-primary-contrast/10">
                <h3 className="text-lg font-thin text-text-on-dark mb-3 tracking-wide">
                  Questions Before Scheduling?
                </h3>
                <p className="text-text-on-dark-muted font-light mb-4">
                  Feel free to reach out directly if you have specific questions about our investment philosophy or current opportunities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="mailto:hello@freeborncapital.com"
                    className="flex-1 text-center px-6 py-3 bg-transparent border border-text-on-dark/30 text-text-on-dark rounded-full hover:bg-text-on-dark/10 transition-colors font-medium text-sm tracking-wide"
                  >
                    Email Us
                  </a>
                  <a
                    href="tel:+1234567890"
                    className="flex-1 text-center px-6 py-3 bg-gold/20 border border-gold/40 text-text-on-dark rounded-full hover:bg-gold/30 transition-colors font-medium text-sm tracking-wide"
                  >
                    Call Us
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Calendar Widget */}
          <div className="flex flex-col justify-center">
            <div
              className={`transition-all duration-1000 ease-out ${
                loaded ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <div className="bg-primary-light/10 p-8 rounded-xl border border-primary-contrast/20 min-h-[600px] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CalendarIcon className="h-8 w-8 text-gold" />
                  </div>
                  <h3 className="text-xl font-thin text-text-on-dark mb-4 tracking-wide">
                    Calendar Widget Placeholder
                  </h3>
                  <p className="text-text-on-dark-muted font-light mb-6">
                    Your calendar booking widget will be embedded here. This could be Calendly, Acuity Scheduling, or any other booking platform you prefer.
                  </p>
                  <div className="bg-primary-dark-blue/10 p-6 rounded-lg border border-primary-dark-blue/20">
                    <p className="text-sm text-text-on-dark-muted font-light">
                      <strong className="text-text-on-dark">Integration Ready:</strong><br />
                      Replace this placeholder with your preferred calendar widget embed code.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookCall;

// Calendar icon component
function CalendarIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}
