import React from 'react';
import { ArrowRight, Download, MapPin, Target, Cog, TrendingUp, Building, Calendar, Shield, Heart, Sparkles, CheckCircle, Users, Leaf, DollarSign } from 'lucide-react';

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
              Strategic investment in premium wellness sanctuaries across sacred sites in Central & South America.
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
            Acquire and optimize premium boutique wellness sanctuaries at sacred sites across Central & South America. Expand capacity and margins via regenerative development and for-sale villas, then exit in 4–5 years to GROWTHSTAR via Right of First Offer (ROFO). Regeneration before luxury; nature as the primary architect.
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
            <p className="text-lg text-text-on-light-muted font-light">(40–55 beds target)</p>
          </div>
          <div className="space-y-12">
            {/* Operational Optimization */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-primary-dark-blue text-text-on-dark rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <Cog className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium text-text-on-light">Operational Optimization (Day 1)</h3>
              </div>
              <div className="space-y-4 text-text-on-light-muted font-light">
                <p>• Immediate operator handoff to GROWTHSTAR; stabilize, reprice, rebuild channel mix, and layer programs (Wellness Experience, Residency, Retreat Weeks).</p>
                <p>• Investors emphasized a property-level improvement plan and per-key capex—spell out room upgrades and targeted spend per key to "unlock alpha."</p>
              </div>
            </div>

            {/* For-Sale Villa Program */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-primary-dark-blue text-text-on-dark rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <Building className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium text-text-on-light">For-Sale Villa Program (Adjacent Parcels)</h3>
              </div>
              <div className="space-y-4 text-text-on-light-muted font-light">
                <p>• Premium, biophilic villas sold to owners with limited personal use; retain brand/ops control and inventory share for ADR expansion and mixed-use yield.</p>
                <p>• Early interest instruments (e.g., zone or villa pad reservations) can be used where appropriate.</p>
              </div>
            </div>

            {/* Anchor Asset Enhancements */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-primary-dark-blue text-text-on-dark rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium text-text-on-light">Anchor Asset Enhancements</h3>
              </div>
              <div className="space-y-4 text-text-on-light-muted font-light">
                <p>• Upgraded rooms, movement spaces, shala/spa, F&B and amenities using natural materials and regenerative design.</p>
                <p>• Unify the guest journey under the Loma/GROWTHSTAR brand system.</p>
              </div>
            </div>

            {/* Regenerative Infrastructure */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-primary-dark-blue text-text-on-dark rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium text-text-on-light">Regenerative Infrastructure (Freeborn Capital scope)</h3>
              </div>
              <div className="space-y-4 text-text-on-light-muted font-light">
                <p>• Syntropic agroforestry and on-site food production; water (rain capture/greywater), energy resilience.</p>
                <p>• Composting/zero-waste; local/natural construction.</p>
              </div>
            </div>
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
            <div className="grid grid-cols-3 items-center">
              <div className="text-center">
                <div className="bg-primary-dark-blue text-text-on-dark rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                  <span className="text-sm font-medium">4-5</span>
                </div>
                <p className="text-text-on-light font-light">Years Hold</p>
              </div>
              <div className="flex flex-col items-center">
                <ArrowRight className="h-8 w-8 text-primary-dark-blue mb-2" />
                <p className="text-text-on-light-muted font-light text-sm text-center">ROFO to acquire at enhanced valuation</p>
              </div>
              <div className="text-center">
                <div className="bg-interactive-primary text-text-on-gold rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <p className="text-text-on-light font-light">Exit to GROWTHSTAR</p>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-text-on-light-muted font-light text-center leading-relaxed">
              Distribution model contemplates an 8% preferred return (accrual permitted) with cash dividends potentially deferred until stabilization (e.g., end of 2027) before profit participation—modeled transparently across fund vs. operator financials.
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
          <div className="space-y-6">
            {/* Vehicle */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-medium text-text-on-light mb-3">Vehicle</h3>
              <p className="text-text-on-light-muted font-light">Freeborn Capital Wellness Sanctuary Fund I (Delaware LP)</p>
            </div>

            {/* GP/Operator */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-medium text-text-on-light mb-3">GP/Operator</h3>
              <p className="text-text-on-light-muted font-light">Freeborn Capital (GP); GROWTHSTAR Scaling (exclusive operator via MSA; separate financials for fund vs. operator).</p>
            </div>

            {/* Initial Commit Goal */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-medium text-text-on-light mb-3">Initial Commit Goal</h3>
              <p className="text-text-on-light-muted font-light">Illustrative cohort of $2.0M in LP commitments with $100k minimum; utilize capital calls aligned to milestone payments. (Example discussed: call on/around a January milestone.)</p>
            </div>

            {/* Preferred Return */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-medium text-text-on-light mb-3">Preferred Return</h3>
              <p className="text-text-on-light-muted font-light">Drafting at 8% simple, cumulative; accrues until dividend start at stabilization (illustratively EOY 2027), then current pay + catch-up prior to splits.</p>
            </div>

            {/* Waterfall */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-medium text-text-on-light mb-3">Waterfall (illustrative)</h3>
              <div className="space-y-2 text-text-on-light-muted font-light">
                <p>• Return of capital</p>
                <p>• 8% accrued pref to LPs</p>
                <p>• Catch-up to GP to agreed ratio</p>
                <p>• Residual split (e.g., 80/20 LP/GP; final terms to be set in LPA)</p>
              </div>
            </div>

            {/* Fees */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-medium text-text-on-light mb-3">Fees (to scope in PPM)</h3>
              <div className="space-y-2 text-text-on-light-muted font-light">
                <p>• Management fee (modest, working-capital aligned)</p>
                <p>• Acquisition/Disposition fees (caps tied to purchase price)</p>
                <p>• Development fee for villas & regen infra (cost-plus with caps)</p>
                <p>• Promote per waterfall</p>
              </div>
            </div>

            {/* Operator Economics */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-medium text-text-on-light mb-3">Operator Economics</h3>
              <p className="text-text-on-light-muted font-light">The fund (owner/lessor) receives base rent and performance participation from the operating company; rent and payout tranches sized to cover pref accrual and reserves while allowing operator reinvestment to protect asset value. (Rent sizing is a modeling lever—document the rationale and keep a change-log.)</p>
            </div>

            {/* Seller Financing */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-medium text-text-on-light mb-3">Seller Financing</h3>
              <p className="text-text-on-light-muted font-light">Where present, seller-finance service sits senior within the property entity cash flows; align fund rent and reserve planning with these fixed obligations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Capital Formation Tools */}
      <section className="py-16 bg-primary-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-thin text-text-on-light mb-6">Capital Formation Tools (Friends & Family / Early Backers)</h2>
          </div>
          <div className="space-y-6">
            {/* Standard LP Commitments */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-medium text-text-on-light mb-3">Standard LP Commitments</h3>
              <p className="text-text-on-light-muted font-light">$100k+ each toward an initial $2.0M tranche; staged capital calls matched to acquisitions and capex.</p>
            </div>

            {/* Optional Early Instruments */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-medium text-text-on-light mb-3">Optional Early Instruments</h3>
              <p className="text-text-on-light-muted font-light">For aligned backers, a limited "Zone Warrant" concept was discussed: e.g., a $50k warrant (priced slightly above cost) tied to an eventual villa pad/zone plus a $100k LP commitment—subject to legal validation and offering documents.</p>
            </div>

            {/* Data Room & Deck */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-medium text-text-on-light mb-3">Data Room & Deck</h3>
              <p className="text-text-on-light-muted font-light">Tighten the "Alpha Thesis," pitch visuals, and centralize diligence artifacts (models, comps, capex per key, environmental/permits) for investor review.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones & Timeline */}
      <section className="py-16 bg-primary-contrast/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-thin text-text-on-light mb-6">Milestones & Timeline</h2>
          </div>
          <div className="relative py-8">
            {/* Extended timeline line behind cards */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-200 rounded-full z-0" 
                 style={{top: '-2rem', bottom: '-2rem'}}></div>
            
            <div className="relative z-10 space-y-12">
              {[
                { phase: 'Now → Launch', milestone: 'Lock alpha thesis; finalize capex-per-key plan and operator model; publish investor deck + data room; open soft-circle.' },
                { phase: 'Near-Term Payments', milestone: 'Plan calls to align with acquisition obligations (e.g., October/January type milestones); track with a simple Gantt to time cash infusions.' },
                { phase: 'Stabilization', milestone: 'Defer dividends until post-renovation/expansion stabilization (illustratively EOY 2027), then begin current pay + catch-up.' }
              ].map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`bg-white rounded-lg p-6 shadow-lg max-w-lg relative z-20 ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                    <div className="flex items-start space-x-3">
                      <Calendar className="h-5 w-5 text-primary-dark-blue mt-1" />
                      <div>
                        <p className="font-medium text-text-on-light mb-2">{item.phase}</p>
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
            <h2 className="text-3xl font-thin text-text-on-light mb-6">Risk Management & Impact</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Risk Management */}
            <div>
              <div className="mb-6">
                <h3 className="text-xl font-medium text-text-on-light">Risk Management</h3>
              </div>
              <div className="space-y-4">
                {[
                  { icon: CheckCircle, title: 'Execution', description: 'Phased capex, per-key budgets, operator KPIs, and reserves sized to obligations.' },
                  { icon: TrendingUp, title: 'Market', description: 'Multi-country pipeline, diversified demand (retreats, residencies, wellness stays).' },
                  { icon: DollarSign, title: 'Liquidity', description: 'Villa pre-sales/zones and scheduled calls to bridge acquisition cash needs ahead of full fund closing.' }
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                      <div className="flex items-start space-x-4">
                        <div className="bg-primary-dark-blue text-white rounded-full p-2 flex-shrink-0">
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium text-text-on-light mb-2">{item.title}</h4>
                          <p className="text-text-on-light-muted font-light">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Impact & Stewardship */}
            <div>
              <div className="mb-6">
                <h3 className="text-xl font-medium text-text-on-light">Impact & Stewardship</h3>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-blue-50 border border-green-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 text-white rounded-full p-2 flex-shrink-0">
                    <Leaf className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-text-on-light mb-3">Regenerative Impact</h4>
                    <p className="text-text-on-light-muted font-light leading-relaxed">
                      Regeneration-first design; food/water/energy sovereignty; community employment and artisan supply chains; guest programming that measurably improves human health and ecosystems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary-dark-blue to-primary-dark-brown text-text-on-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-thin mb-6 text-white">Ready to Join Our Mission?</h2>
            <p className="text-xl font-light text-white mb-8">
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
                <h3 className="text-lg font-medium mb-3 text-white">{item.title}</h3>
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