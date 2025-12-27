
import React from 'react';
import { Info, AlertTriangle, ArrowRight, ShieldCheck, Scale, XCircle } from 'lucide-react';
import { COMPLIANCE, BRAND_NAME } from './constants';
import { View } from './types';

export const ServicesCompliance = () => (
  <section className="py-24 bg-white px-6">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h3 className="text-3xl font-poppins font-bold text-primary mb-6">Transparency & Charter</h3>
        <p className="text-primary/60 leading-relaxed text-lg max-w-2xl mx-auto">
          Monitize is built on the principle of unbiased education. We provide the infrastructure for you to build your own financial preparedness.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="p-8 bg-emerald-50/30 border border-emerald-100 rounded-3xl">
          <div className="flex items-center gap-3 mb-6 text-accent">
            <ShieldCheck size={20} />
            <h4 className="font-bold text-sm uppercase tracking-widest">What Monitize Is</h4>
          </div>
          <ul className="space-y-4">
            {[
              "A neutral educational ecosystem",
              "A provider of mathematical modeling tools",
              "A conceptual bridge for Indian regulations",
              "A discovery gateway to professionals"
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3 text-xs text-primary/70 font-medium">
                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-8 bg-red-50/30 border border-red-100 rounded-3xl">
          <div className="flex items-center gap-3 mb-6 text-red-500">
            <XCircle size={20} />
            <h4 className="font-bold text-sm uppercase tracking-widest">What Monitize Is Not</h4>
          </div>
          <ul className="space-y-4">
            {[
              "A financial or investment advisor",
              "A licensed tax return preparer",
              "An asset management platform",
              "A substitute for professional assessment"
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3 text-xs text-primary/70 font-medium">
                <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="bg-[#F5F7FA] p-8 rounded-2xl border-l-4 border-accent shadow-sm">
        <div className="flex items-start space-x-4">
          <div className="bg-[#1FA67A]/10 p-2 rounded-lg">
            <Info className="text-accent flex-shrink-0" size={24} aria-hidden="true" />
          </div>
          <div>
            <h4 className="font-bold text-primary mb-2">Institutional Integrity</h4>
            <p className="text-primary/70 text-sm leading-relaxed">{COMPLIANCE.SERVICE_STANDARD_DESC}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const Disclaimer = () => (
  <section className="bg-white py-12 px-6">
    <div className="max-w-7xl mx-auto bg-[#0B1C2D] border border-white/5 p-10 rounded-[40px] text-white/80 relative overflow-hidden">
      <div className="relative z-10">
        <div className="flex items-center space-x-3 mb-6">
          <Scale className="text-accent" size={24} aria-hidden="true" />
          <h4 className="text-white font-bold uppercase tracking-widest text-sm">{COMPLIANCE.DISCLAIMER_TITLE}</h4>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-4 text-xs leading-relaxed opacity-70">
            <p>{COMPLIANCE.DISCLAIMER_BODY}</p>
            <p>
              Mathematical simulators are intended for illustrative purposes only. They rely on user-entered data and do not reflect the specific impact of transaction costs, brokerage, or individual tax deductions not explicitly modeled.
            </p>
          </div>
          <div className="space-y-4 text-xs leading-relaxed opacity-70 border-l border-white/10 pl-12 hidden lg:block">
            <p>
              AI Assistant interactions are based on algorithmic logic trained on financial documentation. They represent conceptual interpretations and are not legally binding or certified advice. 
            </p>
            <p>
              Final accountability for compliance, filings, and investment choices rests solely with the user. Always engage a SEBI-registered or licensed professional for final execution.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
    </div>
  </section>
);

interface FinalCTAProps {
  onNavigate: (view: View, subTarget?: string) => void;
}

export const FinalCTA = ({ onNavigate }: FinalCTAProps) => (
  <section className="py-32 bg-white px-6 text-center relative overflow-hidden">
    <div className="relative z-10 max-w-4xl mx-auto">
      <h2 className="text-4xl lg:text-6xl font-poppins font-bold mb-8 text-primary">Build Your Financial Preparedness</h2>
      <p className="text-primary/60 text-lg mb-12 max-w-2xl mx-auto font-medium">
        Join a growing community of Indian professionals who value jargon-free education and pressure-free mathematical simulation.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
        <button 
          type="button" 
          onClick={() => onNavigate('learn')}
          className="w-full sm:w-auto bg-[#1FA67A] hover:bg-[#1a8d67] text-white px-10 py-5 rounded-xl font-bold text-lg transition-all focus:ring-2 focus:ring-offset-2 focus:ring-[#1FA67A] focus:outline-none flex items-center justify-center space-x-2 shadow-xl shadow-accent/10"
        >
          <span>Explore Learning Tracks</span>
          <ArrowRight size={20} />
        </button>
        <button 
          type="button" 
          onClick={() => onNavigate('home', '#about')}
          className="w-full sm:w-auto bg-transparent hover:bg-primary/5 text-primary px-10 py-5 rounded-xl font-bold text-lg border border-primary/10 transition-all focus:ring-2 focus:ring-primary focus:outline-none"
        >
          Our Methodology
        </button>
      </div>
    </div>
  </section>
);
