
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { HERO_CONTENT } from './constants';
import { View } from './types';

interface HeroProps {
  onNavigate: (view: View, subTarget?: string) => void;
}

const Hero = ({ onNavigate }: HeroProps) => (
  <section id="home" className="pt-24 pb-12 md:pt-40 md:pb-32 bg-primary text-white px-6 relative overflow-hidden flex items-center min-h-[auto] md:min-h-[80vh]">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 lg:gap-24 items-center w-full">
      <div className="relative z-10 text-center md:text-left">
        <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6 md:mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
          <span className="text-[9px] md:text-[10px] font-bold text-white/80 uppercase tracking-widest">{HERO_CONTENT.BADGE}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-bold leading-tight mb-6 md:mb-8">
          {HERO_CONTENT.HEADLINE_TOP}<br />
          <span className="text-accent">{HERO_CONTENT.HEADLINE_ACCENT}</span>
        </h1>
        <p className="text-sm md:text-base lg:text-lg text-white/60 mb-8 md:mb-12 max-w-lg mx-auto md:mx-0 leading-relaxed font-medium">
          {HERO_CONTENT.SUBHEADLINE}
        </p>
        <div className="flex flex-col sm:flex-row md:justify-start justify-center gap-4">
          <button 
            type="button" 
            onClick={() => onNavigate('learn')}
            className="h-14 w-full sm:w-auto bg-accent hover:bg-accent/90 text-white px-8 rounded-xl font-bold flex items-center justify-center space-x-3 transition-all shadow-xl shadow-accent/10 active:scale-[0.98]"
          >
            <span>Begin Learning Track</span>
            <ArrowRight size={18} aria-hidden="true" />
          </button>
          <button 
            type="button" 
            onClick={() => onNavigate('tools')}
            className="h-14 w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white px-8 rounded-xl font-bold border border-white/10 transition-all active:scale-[0.98]"
          >
            Explore Frameworks
          </button>
        </div>
      </div>
      
      <div className="hidden md:block relative" aria-hidden="true">
        <div className="w-full aspect-[4/3] bg-gradient-to-tr from-accent/10 to-transparent rounded-[40px] border border-white/5 backdrop-blur-3xl overflow-hidden relative shadow-2xl">
           <div className="absolute inset-8 bg-primary rounded-3xl border border-white/10 p-8 shadow-2xl flex flex-col h-[calc(100%-64px)]">
              <div className="flex justify-between items-center mb-8 lg:mb-12">
                <div className="h-4 w-32 bg-white/10 rounded"></div>
                <div className="h-10 w-10 bg-accent rounded-full"></div>
              </div>
              <div className="space-y-6 lg:space-y-8 flex-1">
                <div className="h-24 lg:h-32 w-full bg-white/5 rounded-2xl border border-white/5"></div>
                <div className="grid grid-cols-2 gap-4 lg:gap-6">
                  <div className="h-20 lg:h-24 bg-white/5 rounded-2xl border border-white/5"></div>
                  <div className="h-20 lg:h-24 bg-white/5 rounded-2xl border border-white/5"></div>
                </div>
                <div className="h-32 lg:h-40 w-full bg-accent/5 rounded-2xl border border-accent/10"></div>
              </div>
           </div>
        </div>
      </div>
    </div>
    <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-accent/5 rounded-full blur-[80px] md:blur-[120px] -z-0"></div>
  </section>
);

export default Hero;
