import React from 'react';
import { Coins, Cog, Sparkles, Leaf, TrendingUp } from 'lucide-react';

const WhyFreeborn = () => {
  const features = [
    {
      icon: Coins,
      title: "Capital Outside the Banking Paradigm",
      description: "Creative structures, tech, and trust-based acquisitions."
    },
    {
      icon: Cog,
      title: "Aligned Operator",
      description: "Every asset operated by GROWTHSTAR Scaling."
    },
    {
      icon: Sparkles,
      title: "Modern Business Magic",
      description: "Turning motivated exits into thriving ecosystems."
    },
    {
      icon: Leaf,
      title: "Regeneration at the Core",
      description: "Enhancing ecosystems, not extracting from them."
    },
    {
      icon: TrendingUp,
      title: "Investor-Aligned Exits",
      description: "Structured 4–5 year holds with clear ROFO pathways."
    }
  ];

  return (
    <section className="py-24 bg-dark-brown">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-thin text-white mb-6 tracking-tight">Why Freeborn Capital</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="p-8 bg-warm-white rounded-lg hover:shadow-sm transition-all duration-200 border border-sand-beige/50">
              <feature.icon className="h-8 w-8 text-indigo-dye mb-6" />
              <h3 className="text-base font-thin text-deep-soil mb-4 tracking-wide">{feature.title}</h3>
              <p className="text-deep-soil/80 leading-relaxed font-light text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyFreeborn;