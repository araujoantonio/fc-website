import React from 'react';
import { ArrowRight, Download, MapPin, Target, Cog, TrendingUp, Building, Calendar, Shield, Heart } from 'lucide-react';

const WellnessFund = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light to-primary-contrast">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-r from-primary-dark-blue to-primary-dark-brown text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-thin mb-6 tracking-tight text-white">
              The Wellness Sanctuary Fund
            </h1>
            <p className="text-xl md:text-2xl font-light mb-8 text-text-accent">
              Regenerative wellness sanctuaries in sacred sites and conscious communities
            </p>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed font-light">
              Acquire and optimize premium boutique wellness sanctuaries at sacred sites across Central & South America. Expand capacity and margins via regenerative development and for-sale villas, then exit in 4–5 years to GROWTHSTAR via Right of First Offer (ROFO). Regeneration before luxury; nature as the primary architect.
            </p>
            <button className="bg-interactive-primary hover:bg-interactive-primary-hover text-text-on-gold px-8 py-4 rounded-full font-medium flex items-center justify-center mx-auto transition-all duration-200">
              <Download className="mr-2 h-5 w-5" />
              Download Investor Brief
            </button>
          </div>
        </div>
      </section>

      {/* Thesis Section */}
      <section className="py-16 bg-primary-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Heart className="h-12 w-12 text-primary-dark-blue" />
          </div>
          <h2 className="text-3xl font-thin text-text-on-light mb-6">Investment Thesis</h2>
          <p className="text-lg text-text-on-light-muted font-light leading-relaxed">
            [Thesis statement placeholder - Short statement about the investment opportunity and vision]
          </p>
        </div>
      </section>

      {/* Target Geographies */}
      <section className="py-16 bg-primary-contrast/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-thin text-text-on-light mb-6">Target Geographies</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { location: 'Guatemala: Lake Atitlán', description: 'Anchor market for wellness sanctuary development' },
              { location: 'Peru: Sacred Valley', description: 'Ancient sacred sites with established wellness tourism' },
              { location: 'Costa Rica: Diamante Valley, Uvita', description: 'Pristine coastal and inland wellness destinations' },
              { location: 'Colombia: Coastal & Inland Hubs', description: 'Select wellness hubs in emerging markets' },
              { location: 'Panama: Bocas del Toro, Boquete', description: 'Strategic locations for regenerative development' },
              { location: 'Additional Regenerative Hubs', description: 'Expanding across Central & South America' }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-200">
                <MapPin className="h-8 w-8 text-primary-dark-blue mb-4" />
                <h3 className="text-lg font-medium text-text-on-light mb-2">{item.location}</h3>
                <p className="text-text-on-light-muted font-light">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Acquisition Criteria */}
      <section className="py-16 bg-primary-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-thin text-text-on-light mb-6">Acquisition Criteria</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Boutique hotels, lodges, and retreat centers',
              '10+ rooms with expansion potential',
              'Located in sacred sites and conscious communities',
              'Strong operational foundation',
              'Regenerative development opportunities',
              'Strategic market positioning'
            ].map((criteria, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Target className="h-6 w-6 text-primary-dark-blue mt-1 flex-shrink-0" />
                <p className="text-text-on-light-muted font-light">{criteria}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value-Creation Playbook */}
      <section className="py-16 bg-primary-contrast/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-thin text-text-on-light mb-6">Value-Creation Playbook</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Operational Optimization', icon: Cog },
              { step: '2', title: 'Premium Development', icon: Building },
              { step: '3', title: 'Regenerative Infrastructure', icon: Heart },
              { step: '4', title: 'Strategic Exit', icon: TrendingUp }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-dark-blue text-text-on-dark rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8" />
                </div>
                <div className="bg-interactive-primary text-text-on-gold rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 text-sm font-medium">
                  {item.step}
                </div>
                <h3 className="text-lg font-medium text-text-on-light mb-2">{item.title}</h3>
                <p className="text-text-on-light-muted font-light">[Process details placeholder]</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exit Strategy */}
      <section className="py-16 bg-primary-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-thin text-text-on-light mb-6">Exit Strategy</h2>
          </div>
          <div className="bg-gradient-to-r from-primary-dark-blue/10 to-primary-dark-brown/10 rounded-lg p-8">
            <div className="flex items-center justify-between">
              <div className="text-center">
                <div className="bg-primary-dark-blue text-text-on-dark rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                  <span className="text-sm font-medium">4-5</span>
                </div>
                <p className="text-text-on-light font-light">Years Hold</p>
              </div>
              <ArrowRight className="h-8 w-8 text-primary-dark-blue" />
              <div className="text-center">
                <div className="bg-interactive-primary text-text-on-gold rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <p className="text-text-on-light font-light">Exit to GROWTHSTAR</p>
              </div>
            </div>
            <p className="text-center text-text-on-light-muted font-light mt-6">
              [Exit strategy details placeholder]
            </p>
          </div>
        </div>
      </section>

      {/* Fund Structure */}
      <section className="py-16 bg-primary-contrast/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-thin text-text-on-light mb-6">Fund Structure</h2>
          </div>
          <div className="space-y-4">
            {[
              { title: 'Vehicle Structure', content: '[Vehicle details placeholder]' },
              { title: 'Target Returns', content: '[Returns information placeholder]' },
              { title: 'Fee Structure', content: '[Fee details placeholder]' },
              { title: 'Waterfall Terms', content: '[Waterfall structure placeholder]' }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-medium text-text-on-light mb-3">{item.title}</h3>
                <p className="text-text-on-light-muted font-light">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capital Formation Tools */}
      <section className="py-16 bg-primary-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-thin text-text-on-light mb-6">Capital Formation Tools</h2>
          </div>
          <div className="bg-gradient-to-r from-interactive-primary/20 to-primary-dark-blue/20 rounded-lg p-8 text-center">
            <h3 className="text-xl font-medium text-text-on-light mb-4">Early Investor Opportunities</h3>
            <p className="text-text-on-light-muted font-light mb-6">
              [Early investor options and benefits placeholder]
            </p>
            <button className="bg-interactive-primary hover:bg-interactive-primary-hover text-text-on-gold px-6 py-3 rounded-full font-medium">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Milestones & Timeline */}
      <section className="py-16 bg-primary-contrast/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-thin text-text-on-light mb-6">Milestones & Timeline</h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-dark-blue/30"></div>
            <div className="space-y-8">
              {[
                { phase: 'Q1 2024', milestone: 'Fund Launch' },
                { phase: 'Q2 2024', milestone: 'First Acquisition' },
                { phase: 'Q4 2024', milestone: 'Portfolio Expansion' },
                { phase: '2025-2028', milestone: 'Value Creation' },
                { phase: '2028-2029', milestone: 'Exit Strategy' }
              ].map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`bg-white rounded-lg p-4 shadow-lg max-w-sm ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-primary-dark-blue" />
                      <div>
                        <p className="font-medium text-text-on-light">{item.phase}</p>
                        <p className="text-text-on-light-muted font-light">{item.milestone}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Risk & Impact */}
      <section className="py-16 bg-primary-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-thin text-text-on-light mb-6">Risk & Impact</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Risks */}
            <div>
              <div className="flex items-center mb-6">
                <Shield className="h-8 w-8 text-text-on-light mr-3" />
                <h3 className="text-xl font-medium text-text-on-light">Risk Considerations</h3>
              </div>
              <div className="space-y-4">
                {[
                  'Market volatility and economic conditions',
                  'Regulatory and political risks',
                  'Operational and management risks',
                  'Currency and foreign exchange risks'
                ].map((risk, index) => (
                  <div key={index} className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-text-on-light-muted font-light">{risk}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact & Stewardship */}
            <div>
              <div className="flex items-center mb-6">
                <Heart className="h-8 w-8 text-primary-dark-blue mr-3" />
                <h3 className="text-xl font-medium text-text-on-light">Impact & Stewardship</h3>
              </div>
              <div className="space-y-4">
                {[
                  'Regenerative environmental practices',
                  'Community economic development',
                  'Cultural preservation and respect',
                  'Sustainable tourism models'
                ].map((impact, index) => (
                  <div key={index} className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-text-on-light-muted font-light">{impact}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary-dark-blue to-primary-dark-brown text-text-on-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-thin mb-6">Ready to Join Our Mission?</h2>
            <p className="text-xl font-light text-text-accent mb-8">
              Take the next step in regenerative wellness investment
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Download Brief', action: 'Get the full investor brief' },
              { step: '2', title: 'Schedule Call', action: 'Speak with our investment team' },
              { step: '3', title: 'Join Fund', action: 'Become a founding investor' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-interactive-primary text-text-on-gold rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-lg font-medium">
                  {item.step}
                </div>
                <h3 className="text-lg font-medium mb-3">{item.title}</h3>
                <p className="text-text-on-dark-muted font-light mb-4">{item.action}</p>
                <button className="bg-white/20 hover:bg-white/30 text-text-on-dark px-6 py-2 rounded-full font-medium transition-all duration-200">
                  {item.title}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WellnessFund;