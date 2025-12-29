
import React from 'react';
import { Info, ShieldCheck, Scale, XCircle, ArrowRight } from 'lucide-react';
import { COMPLIANCE, BRAND_NAME } from './constants';
import { View } from './types';

export const ServicesCompliance = () => (
  <section className="py-24 bg-surface px-6">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h3 className="text-3xl font-poppins font-bold text-primary mb-6">Transparency & Platform Charter</h3>
        <p className="text-primary/60 text-lg max-w-2xl mx-auto font-medium">
          {BRAND_NAME} is built on the principle of unbiased education. We provide the infrastructure for you to build your own financial preparedness.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="p-10 bg-emerald-50/30 border border-emerald-100 rounded-[40px]">
          <div className="flex items-center gap-3 mb-8 text-accent">
            <ShieldCheck size={20} />
            <h4 className="font-bold text-[11px] uppercase tracking-widest">What Monitize Is</h4>
          </div>
          <ul className="space-y-6">
            {[
              "A neutral educational ecosystem",
              "A provider of mathematical modeling tools",
              "A conceptual bridge for Indian regulations",
              "A discovery gateway to professionals"
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-4 text-xs text-primary/70 font-bold">
                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-10 bg-red-50/30 border border-red-100 rounded-[40px]">
          <div className="flex items-center gap-3 mb-8 text-red-500">
            <XCircle size={20} />
            <h4 className="font-bold text-[11px] uppercase tracking-widest">What Monitize Is Not</h4>
          </div>
          <ul className="space-y-6">
            {[
              "A financial or investment advisor",
              "A licensed tax return preparer",
              "An asset management platform",
              "A substitute for professional assessment"
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-4 text-xs text-primary/70 font-bold">
                <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="bg-background p-8 rounded-3xl border-l-4 border-accent shadow-sm">
        <div className="flex items-start space-x-4">
          <Info className="text-accent shrink-0" size={24} aria-hidden="true" />
          <p className="text-sm text-primary/70 font-medium leading-relaxed">{COMPLIANCE.SERVICE_STANDARD_DESC}</p>
        </div>
      </div>
    </div>
  </section>
);

export const Disclaimer = () => (
  <section className="bg-surface py-12 px-6">
    <div className="max-w-7xl mx-auto bg-primary border-2 border-accent/20 p-12 rounded-[48px] text-white/80 relative overflow-hidden">
      <div className="relative z-10">
        <div className="flex items-center space-x-4 mb-8">
          <Scale className="text-accent" size={24} aria-hidden="true" />
          <h4 className="text-white font-bold uppercase tracking-widest text-xs">{COMPLIANCE.DISCLAIMER_TITLE}</h4>
        </div>
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-6 text-[11px] leading-relaxed opacity-80">
            <p className="font-bold text-white uppercase tracking-widest">Educational Nature Notice:</p>
            <p>{COMPLIANCE.DISCLAIMER_BODY}</p>
          </div>
          <div className="space-y-6 text-[11px] leading-relaxed opacity-80 border-l border-white/10 pl-16 hidden lg:block">
            <p>
              Mathematical simulators are intended for illustrative purposes only. Actual outcomes depend on verified data and licensed professional assessment.
            </p>
            <p>
              Final accountability for compliance and investment choices rests solely with the user.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const FinalCTA = ({ onNavigate }: { onNavigate: (view: View) => void }) => (
  <section className="py-32 bg-surface px-6 text-center">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl lg:text-5xl font-poppins font-bold mb-8 text-primary tracking-tight">Build Your Financial Preparedness</h2>
      <p className="text-primary/60 text-lg mb-16 max-w-2xl mx-auto font-medium">
        Join a growing community of Indian professionals who value jargon-free education and pressure-free mathematical simulation.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
        <button 
          onClick={() => onNavigate('learn')}
          className="h-14 w-full sm:w-auto bg-accent hover:bg-accent/90 text-white px-10 rounded-xl font-bold text-base transition-all shadow-xl shadow-accent/10 flex items-center justify-center space-x-3"
        >
          <span>Explore Learning Tracks</span>
          <ArrowRight size={20} />
        </button>
        <button 
          onClick={() => onNavigate('about')}
          className="h-14 w-full sm:w-auto bg-surface hover:bg-primary/5 text-primary px-10 rounded-xl font-bold text-base border border-primary/10 transition-all"
        >
          Our Methodology
        </button>
      </div>
    </div>
  </section>
);
