import React from 'react';
import { ChevronRight, ShieldCheck, Database, Globe } from 'lucide-react';
import { TRUST_INDICATORS, PROCESS_STEPS, CORE_OFFERINGS, BRAND_NAME } from './constants';
import { View } from './types';

export const TrustSection = () => (
  <section className="bg-surface py-10 md:py-16 border-b border-background px-6" aria-label="Trust Signals">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start mb-10 md:mb-16">
        {TRUST_INDICATORS.map((item, idx) => (
          <div key={idx} className="flex items-start space-x-5 md:space-x-6">
            <div className="bg-accent/10 p-3 md:p-4 rounded-full shrink-0">{item.icon}</div>
            <span className="text-base md:text-lg font-bold text-primary leading-tight">{item.text}</span>
          </div>
        ))}
      </div>
      
      <div className="pt-8 md:pt-12 border-t border-background flex flex-wrap justify-center gap-6 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
        <div className="flex items-center space-x-2">
          <ShieldCheck size={14} className="text-accent" />
          <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-primary">DPDP Act Compliant</span>
        </div>
        <div className="flex items-center space-x-2">
          <Database size={14} className="text-accent" />
          <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-primary">Local Sovereignty</span>
        </div>
        <div className="flex items-center space-x-2">
          <Globe size={14} className="text-accent" />
          <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-primary">Neutral Infrastructure</span>
        </div>
      </div>
    </div>
  </section>
);

export const AboutSection = () => (
  <section id="about" className="py-12 md:py-24 bg-background px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10 lg:gap-24 items-center">
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-2xl lg:text-4xl font-poppins font-bold text-primary mb-6 md:mb-8 leading-tight">What is {BRAND_NAME}</h2>
          <p className="text-sm md:text-base lg:text-lg text-primary/60 mb-8 md:mb-12 leading-relaxed font-medium">
            Your steady partner in a noisy financial world. {BRAND_NAME} is built for the modern Indian professional who values clarity over hype. We provide an ecosystem that bridges the gap between learning and action.
          </p>
          <div className="space-y-6 md:space-y-8 text-left max-w-sm mx-auto md:mx-0">
            {[
              { title: "Nuanced Learning", desc: "Modules tailored to Indian tax regimes" },
              { title: "Scenario Modeling", desc: "Simulators with mathematical precision" },
              { title: "Expert Gateway", desc: "Access to vetted independent experts" }
            ].map((item, idx) => (
              <div key={idx} className="flex space-x-5 md:space-x-6 group cursor-default">
                {/* Fixed: Removed invalid md:size prop and used tailwind classes for responsive sizing */}
                <div className="mt-1 transition-transform group-hover:translate-x-1 shrink-0"><ChevronRight className="text-accent w-[18px] h-[18px] md:w-5 md:h-5" aria-hidden="true" /></div>
                <div>
                  <h4 className="font-bold text-primary text-sm md:text-base lg:text-lg">{item.title}</h4>
                  <p className="text-primary/40 text-[11px] md:text-sm font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 md:mt-0 bg-surface p-4 md:p-6 rounded-[32px] md:rounded-[40px] shadow-xl shadow-primary/5 border border-primary/5">
           <img loading="lazy" src="https://picsum.photos/seed/monitize1/800/600" alt={`${BRAND_NAME} framework visualizations`} className="rounded-2xl md:rounded-3xl w-full object-cover aspect-[4/3]" />
        </div>
      </div>
    </div>
  </section>
);

export const ProcessSection = ({ onNavigate }: { onNavigate: (view: View) => void }) => (
  <section className="py-12 md:py-24 bg-surface px-6">
    <div className="max-w-7xl mx-auto text-center mb-10 md:mb-16 lg:mb-24">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-poppins font-bold text-primary mb-4 md:mb-6">How {BRAND_NAME} Works</h2>
      <p className="text-primary/50 max-w-2xl mx-auto text-sm md:text-base font-medium px-4">A structured methodology moving you from confusion to preparedness.</p>
    </div>
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-10 md:mb-16">
      {PROCESS_STEPS.map((step, idx) => (
        <div key={idx} className="relative p-8 md:p-10 bg-background rounded-[32px] md:rounded-[40px] group border border-transparent hover:border-accent/10 hover:bg-surface hover:shadow-xl transition-all duration-300 h-full flex flex-col">
          <span className="text-4xl md:text-5xl font-black text-primary/5 group-hover:text-accent/10 absolute top-6 right-8 md:top-8 md:right-10 transition-colors" aria-hidden="true">{step.number}</span>
          <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 relative z-10 text-primary">{step.title}</h3>
          <p className="text-xs md:text-sm text-primary/50 leading-relaxed relative z-10 font-medium flex-1">{step.description}</p>
        </div>
      ))}
    </div>
    <div className="text-center">
      <button 
        onClick={() => onNavigate('learn')}
        className="inline-flex items-center text-accent font-bold text-[10px] md:text-[11px] uppercase tracking-widest space-x-3 hover:opacity-70 transition-all p-4 active:scale-95"
      >
        <span>Access Preparedness Track</span>
        <ChevronRight size={18} />
      </button>
    </div>
  </section>
);

export const OfferingsSection = ({ onNavigate }: { onNavigate: (view: View) => void }) => (
  <section id="services" className="py-12 md:py-24 bg-background px-6">
    <div className="max-w-7xl mx-auto text-center mb-10 md:mb-16 lg:mb-24">
      <h2 className="text-accent font-bold uppercase tracking-widest text-[9px] md:text-[10px] mb-3 md:mb-4">Core Offerings</h2>
      <h3 className="text-2xl md:text-3xl lg:text-5xl font-poppins font-bold text-primary">Pillars of Preparedness</h3>
    </div>
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 items-stretch">
      {CORE_OFFERINGS.map((item, idx) => (
        <div key={idx} className="bg-surface p-8 md:p-10 rounded-[32px] md:rounded-[40px] border border-primary/5 shadow-sm hover:shadow-lg transition-all group flex flex-col h-full">
          <div className="mb-8 md:mb-12 transition-transform group-hover:-translate-y-1 shrink-0">{item.icon}</div>
          <h4 className="text-lg md:text-xl font-bold text-primary mb-3 md:mb-4">{item.title}</h4>
          <p className="text-xs md:text-sm text-primary/50 leading-relaxed mb-8 md:mb-12 font-medium flex-grow">{item.description}</p>
          <button 
            onClick={() => onNavigate('learn')}
            className="h-12 w-full bg-primary/5 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-accent rounded-xl flex items-center justify-center space-x-3 transition-all hover:bg-accent/10 active:scale-95 mt-auto"
          >
            <span>{item.actionText}</span>
            <ChevronRight size={16} />
          </button>
        </div>
      ))}
    </div>
  </section>
);