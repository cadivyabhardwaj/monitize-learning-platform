
import React from 'react';
import { ChevronRight, ShieldCheck, Database, Globe } from 'lucide-react';
import { TRUST_INDICATORS, PROCESS_STEPS, CORE_OFFERINGS } from './constants';
import { View } from './types';

export const TrustSection = () => (
  <section className="bg-white py-12 border-b border-[#F5F7FA] px-6" aria-label="Trust Signals">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-12">
        {TRUST_INDICATORS.map((item, idx) => (
          <div key={idx} className="flex items-center space-x-4">
            <div className="bg-[#1FA67A]/10 p-3 rounded-full shrink-0">{item.icon}</div>
            <span className="text-lg font-medium text-primary/80 leading-snug">{item.text}</span>
          </div>
        ))}
      </div>
      
      <div className="pt-8 border-t border-gray-100 flex flex-wrap justify-center gap-6 md:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
        <div className="flex items-center space-x-2">
          <ShieldCheck size={20} className="text-[#1FA67A]" />
          <span className="text-[10px] font-bold uppercase tracking-widest">DPDP Act Compliant Framework</span>
        </div>
        <div className="flex items-center space-x-2">
          <Database size={20} className="text-[#1FA67A]" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Local Data Sovereignty</span>
        </div>
        <div className="flex items-center space-x-2">
          <Globe size={20} className="text-[#1FA67A]" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Neutral Financial Infrastructure</span>
        </div>
      </div>
    </div>
  </section>
);

export const AboutSection = () => (
  <section id="about" className="py-24 bg-[#F5F7FA] px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-poppins font-bold text-primary mb-6 leading-tight">What is Monitize</h2>
          <p className="text-lg text-primary/70 mb-8 leading-relaxed">
            Your steady partner in a noisy financial world. MONITIZE is built for the modern Indian professional who values clarity over hype. We provide an ecosystem that bridges the gap between learning about money and knowing who to trust.
          </p>
          <div className="space-y-6">
            {[
              { title: "Nuanced Learning", desc: "Step-by-step modules tailored to Indian income slabs and tax regimes" },
              { title: "Scenario Modeling", desc: "Interactive tools to simulate life events with mathematical precision" },
              { title: "Direct Expert Access", desc: "A vetted gateway to professionals who put your financial education first" }
            ].map((item, idx) => (
              <div key={idx} className="flex space-x-4 group cursor-default">
                <div className="mt-1 transition-transform group-hover:translate-x-1"><ChevronRight className="text-accent" aria-hidden="true" /></div>
                <div>
                  <h4 className="font-bold text-primary">{item.title}</h4>
                  <p className="text-primary/60 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-xl shadow-primary/5 border border-primary/5">
           <img loading="lazy" src="https://picsum.photos/seed/monitize1/800/600" alt="Professional Indian woman reviewing investment charts" className="rounded-2xl w-full object-cover aspect-video" />
        </div>
      </div>
    </div>
  </section>
);

interface ProcessSectionProps {
  onNavigate: (view: View, subTarget?: string) => void;
}

export const ProcessSection = ({ onNavigate }: ProcessSectionProps) => (
  <section className="py-24 bg-white px-6">
    <div className="max-w-7xl mx-auto text-center mb-16">
      <h2 className="text-4xl font-poppins font-bold text-primary mb-4">How Monitize Works</h2>
      <p className="text-primary/60 max-w-2xl mx-auto text-lg">A structured methodology that moves you from confusion to preparedness through guidance and tools</p>
    </div>
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
      {PROCESS_STEPS.map((step, idx) => (
        <div key={idx} className="relative p-8 bg-[#F5F7FA] rounded-2xl group border border-transparent hover:border-accent/10 hover:bg-white hover:shadow-xl transition-all duration-300">
          <span className="text-5xl font-black text-primary/5 group-hover:text-accent/5 absolute top-4 right-4 transition-colors" aria-hidden="true">{step.number}</span>
          <h3 className="text-xl font-bold mb-4 relative z-10 text-primary">{step.title}</h3>
          <p className="text-sm text-primary/60 leading-relaxed relative z-10">{step.description}</p>
        </div>
      ))}
    </div>
    <div className="text-center">
      <button 
        onClick={() => onNavigate('learn')}
        className="text-accent font-bold text-sm uppercase tracking-widest flex items-center justify-center mx-auto space-x-2 hover:opacity-70 transition-opacity"
      >
        <span>Access Preparedness Track</span>
        <ChevronRight size={16} />
      </button>
    </div>
  </section>
);

interface OfferingsSectionProps {
  onNavigate: (view: View, subTarget?: string) => void;
}

export const OfferingsSection = ({ onNavigate }: OfferingsSectionProps) => (
  <section id="services" className="py-24 bg-[#F5F7FA] px-6">
    <div className="max-w-7xl mx-auto text-center mb-16">
      <h2 className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Core Offerings</h2>
      <h3 className="text-4xl font-poppins font-bold text-primary">Foundational Pillars of Preparedness</h3>
    </div>
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {CORE_OFFERINGS.map((item, idx) => (
        <div key={idx} className="bg-white p-8 rounded-2xl border border-primary/5 shadow-sm hover:shadow-lg transition-all group">
          <div className="mb-6 transition-transform group-hover:-translate-y-1">{item.icon}</div>
          <h4 className="text-xl font-bold text-primary mb-3">{item.title}</h4>
          <p className="text-primary/60 text-sm leading-relaxed mb-6">{item.description}</p>
          <button 
            onClick={() => onNavigate('learn')}
            className="text-xs font-bold uppercase tracking-wider text-accent flex items-center space-x-1 group-hover:translate-x-1 transition-transform"
          >
            <span>{item.actionText}</span>
            <ChevronRight size={14} />
          </button>
        </div>
      ))}
    </div>
  </section>
);
