import React, { useState } from 'react';
import { Mail, ArrowRight, Shield, TrendingUp, Globe } from 'lucide-react';

const SovereignFund = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Handle email submission logic here
      console.log('Email submitted:', email);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light to-primary-contrast">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-r from-primary-dark-blue to-primary-dark-brown text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-thin mb-6 tracking-tight text-white">
              The Sovereign Fund
            </h1>
            <p className="text-xl md:text-2xl font-light mb-8 text-text-accent">
              Strategic sovereign wealth investments in transformative assets
            </p>
            <p className="text-lg md:text-xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Partnering with sovereign wealth funds and institutional investors to acquire and develop premium assets across emerging markets, focusing on sustainable growth and long-term value creation.
            </p>
            
            {/* Email Capture Form */}
            <div className="max-w-md mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-text-accent mr-2" />
                  <h3 className="text-lg font-medium text-white">Stay Informed</h3>
                </div>
                <p className="text-white/80 text-sm mb-6 font-light">
                  Get exclusive updates on investment opportunities and fund developments
                </p>
                
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-interactive-primary focus:border-transparent transition-all duration-200"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-interactive-primary hover:bg-interactive-primary-hover text-text-on-gold px-6 py-3 rounded-lg font-medium flex items-center justify-center transition-all duration-200 group"
                    >
                      <span>Get Updates</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-4">
                    <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4">
                      <p className="text-green-300 font-medium">Thank you for subscribing!</p>
                      <p className="text-green-200/80 text-sm mt-1">We'll keep you updated on our latest opportunities.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-16 bg-primary-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-thin text-text-on-light mb-6">Strategic Investment Focus</h2>
            <p className="text-lg text-text-on-light-muted font-light max-w-3xl mx-auto">
              Leveraging sovereign capital to create sustainable value across high-growth markets
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Sovereign Partnership',
                description: 'Strategic alliances with sovereign wealth funds and institutional investors for large-scale opportunities'
              },
              {
                icon: Globe,
                title: 'Global Reach',
                description: 'Diversified portfolio across emerging markets with focus on sustainable development'
              },
              {
                icon: TrendingUp,
                title: 'Value Creation',
                description: 'Long-term value creation through strategic asset development and operational excellence'
              }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-200">
                  <div className="bg-primary-dark-blue text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-medium text-text-on-light mb-3">{item.title}</h3>
                  <p className="text-text-on-light-muted font-light">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 bg-primary-contrast/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-thin text-text-on-light mb-6">More Details Coming Soon</h2>
          <p className="text-lg text-text-on-light-muted font-light mb-8">
            We're preparing comprehensive information about our investment strategy, portfolio opportunities, and partnership structure. Stay tuned for updates.
          </p>
          <div className="bg-gradient-to-r from-primary-dark-blue/10 to-primary-dark-brown/10 rounded-lg p-8">
            <p className="text-text-on-light-muted font-light italic">
              "Strategic sovereign investments require careful planning and the right partnerships. We're building something exceptional."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SovereignFund;