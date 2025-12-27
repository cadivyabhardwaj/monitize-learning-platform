
import React from 'react';
import { ArrowRight, ChevronRight, Clock, BookOpen, ExternalLink, ShieldCheck, CheckCircle, Globe, Gavel, Target, Briefcase } from 'lucide-react';
import { LEARNING_PATHS, BRAND_NAME } from './constants';
import { ServicesCompliance, Disclaimer } from './ComplianceSections';
import { View } from './types';

const PathCard = ({ path, onNavigate }: { path: typeof LEARNING_PATHS[0], onNavigate: (v: View, s?: string) => void }) => (
  <article className="bg-white rounded-[40px] p-10 border border-primary/5 shadow-sm hover:shadow-md transition-all group flex flex-col h-full">
    <div className="mb-10 bg-[#F5F7FA] w-16 h-16 rounded-[24px] flex items-center justify-center transition-transform group-hover:-translate-y-1">{path.icon}</div>
    <div className="flex-1">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-poppins font-bold text-primary">{path.title}</h3>
        <span className="text-[9px] font-black bg-accent/10 text-accent px-3 py-1 rounded-full uppercase tracking-widest flex items-center gap-1"><Clock size={10} /> {path.effort}</span>
      </div>
      <p className="text-primary/60 text-sm leading-relaxed mb-10 font-medium">{path.description}</p>
      <div className="space-y-4 mb-10">
        <h4 className="text-[9px] font-black text-primary/20 uppercase tracking-[0.3em]">Module Composition</h4>
        {path.topics.map((topic, i) => (
          <div key={i} className="flex items-center justify-between text-[11px] text-primary/70 py-3 border-b border-primary/5 last:border-0 font-medium">
            <span className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-accent/30" />{topic.title}</span>
            <span className="text-[9px] bg-primary/5 px-2 py-0.5 rounded text-primary/40 font-bold uppercase">{topic.type}</span>
          </div>
        ))}
      </div>
    </div>
    <button 
      onClick={() => {
        const routeMap: Record<string, View> = {
          'market-basics': 'market-basics',
          'tax-fundamentals': 'tax-fundamentals',
          'pf-basics': 'pf-basics',
          'business-awareness': 'business-basics'
        };
        onNavigate(routeMap[path.id] || 'learn');
      }} 
      className="w-full bg-[#F5F7FA] text-primary/60 py-5 rounded-2xl font-bold text-sm hover:bg-accent hover:text-white transition-all flex items-center justify-center gap-3 group/btn"
    >
      <span>{['market-basics', 'tax-fundamentals', 'pf-basics', 'business-awareness'].includes(path.id) ? 'Enter Progressive Track' : 'Start Foundations'}</span>
      <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
    </button>
  </article>
);

const LearnPage = ({ isAuthenticated, onNavigate }: { isAuthenticated: boolean, onNavigate: (view: View, subTarget?: string) => void }) => {
  return (
    <div className="animate-in fade-in duration-700 bg-[#F5F7FA]">
      <section className="pt-40 pb-20 lg:pt-56 lg:pb-32 bg-primary text-white px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
            <BookOpen size={14} className="text-accent" />
            <span className="text-[10px] font-black text-white/60 uppercase tracking-[0.3em]">Knowledge Architecture</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-poppins font-bold leading-tight mb-8">
            Logic Before <br /><span className="text-accent">Execution.</span>
          </h1>
          <p className="text-lg lg:text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            Building a resilient conceptual framework for the Indian financial landscape through structured, non-advisory learning paths.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button onClick={() => { document.getElementById('tracks')?.scrollIntoView({behavior:'smooth'}) }} className="bg-accent hover:bg-accent/90 text-white px-10 py-5 rounded-2xl font-bold text-sm uppercase tracking-widest transition-all shadow-xl shadow-accent/10">Browse tracks</button>
            {!isAuthenticated && <button onClick={() => onNavigate('auth')} className="bg-white/10 hover:bg-white/20 text-white px-10 py-5 rounded-2xl font-bold text-sm uppercase tracking-widest border border-white/10 transition-all">Get Workspace</button>}
          </div>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-accent/5 rounded-full blur-[150px]" />
      </section>

      <section className="py-12 bg-white border-b border-primary/5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-5">
            <div className="bg-accent/10 p-4 rounded-full"><ShieldCheck className="text-accent" size={24} /></div>
            <div>
              <p className="font-bold text-primary">Neutral Methodology</p>
              <p className="text-xs text-primary/50 font-medium">Content focuses on regulatory logic rather than product recommendations.</p>
            </div>
          </div>
          <div className="flex gap-8 opacity-30 grayscale pointer-events-none">
             {['NO BIAS', 'NO ADVICE', 'NO SALES'].map(t => <span key={t} className="text-[10px] font-black tracking-widest">{t}</span>)}
          </div>
        </div>
      </section>

      <section id="tracks" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-poppins font-bold text-primary mb-4">Educational Tracks</h2>
            <p className="text-primary/50 max-w-xl font-medium">Comprehensive frameworks designed to build awareness of Indian personal and business finance management.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {LEARNING_PATHS.map((path) => (
              <PathCard key={path.id} path={path} onNavigate={onNavigate} />
            ))}
          </div>
        </div>
      </section>

      <div className="bg-white"><ServicesCompliance /><Disclaimer /></div>
    </div>
  );
};

export default LearnPage;
