
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { HERO_CONTENT } from './constants';
import { View } from './types';

interface HeroProps {
  onNavigate: (view: View, subTarget?: string) => void;
}

const Hero = ({ onNavigate }: HeroProps) => (
  <section id="home" className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[#0B1C2D] text-white px-6 relative overflow-hidden">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
      <div className="relative z-10">
        <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#1FA67A] animate-pulse"></span>
          <span className="text-xs font-semibold text-white/80 uppercase tracking-wider">{HERO_CONTENT.BADGE}</span>
        </div>
        <h1 className="text-5xl lg:text-7xl font-poppins font-bold leading-[1.1] mb-6">
          {HERO_CONTENT.HEADLINE_TOP}<br />
          <span className="text-[#1FA67A]">{HERO_CONTENT.HEADLINE_ACCENT}</span>
        </h1>
        <p className="text-lg lg:text-xl text-white/60 mb-10 max-w-lg leading-relaxed font-medium">
          {HERO_CONTENT.SUBHEADLINE}
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <button 
            type="button" 
            onClick={() => onNavigate('learn')}
            className="bg-[#1FA67A] hover:bg-[#1a8d67] text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all focus:ring-2 focus:ring-offset-2 focus:ring-[#1FA67A] focus:outline-none shadow-xl shadow-accent/10"
          >
            <span>Begin Learning Track</span>
            <ArrowRight size={18} aria-hidden="true" />
          </button>
          <button 
            type="button" 
            onClick={() => onNavigate('tools')}
            className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold border border-white/10 transition-all focus:ring-2 focus:ring-white focus:outline-none"
          >
            Explore Frameworks
          </button>
        </div>
      </div>
      <div className="hidden lg:block relative" aria-hidden="true">
        <div className="w-full h-[500px] bg-gradient-to-tr from-[#1FA67A]/20 to-transparent rounded-3xl border border-white/5 backdrop-blur-3xl overflow-hidden relative">
           <div className="absolute inset-8 bg-[#0B1C2D] rounded-xl border border-white/10 p-6 shadow-2xl">
              <div className="flex justify-between items-center mb-8">
                <div className="h-4 w-32 bg-white/10 rounded"></div>
                <div className="h-8 w-8 bg-[#1FA67A] rounded-full"></div>
              </div>
              <div className="space-y-6">
                <div className="h-24 w-full bg-white/5 rounded-lg border border-white/5"></div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-20 bg-white/5 rounded-lg border border-white/5"></div>
                  <div className="h-20 bg-white/5 rounded-lg border border-white/5"></div>
                </div>
                <div className="h-32 w-full bg-[#1FA67A]/10 rounded-lg border border-[#1FA67A]/20"></div>
              </div>
           </div>
        </div>
      </div>
    </div>
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1FA67A]/10 rounded-full blur-[120px] -z-0"></div>
    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] -z-0"></div>
  </section>
);

export default Hero;
