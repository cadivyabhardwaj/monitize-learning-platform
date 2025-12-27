
import React from 'react';
import { 
  LayoutDashboard, BookOpen, Calculator, Users, ArrowRight, Play, 
  CheckCircle, Globe, Target, Award, Info, Zap, Clock
} from 'lucide-react';
import { ServicesCompliance, Disclaimer } from './ComplianceSections';
import { View, User } from './types';
import { BRAND_NAME } from './constants';

interface LoggedInHomeProps {
  user: User;
  onNavigate: (view: View, subTarget?: string) => void;
}

const LoggedInHome = ({ user, onNavigate }: LoggedInHomeProps) => {
  const firstName = user.fullName ? user.fullName.split(' ')[0] : 'Member';
  const progress = user.progress.marketBasics;
  const progressPercentage = Math.round((progress.completedLevels.length / 3) * 100);

  return (
    <div className="pt-24 pb-20 px-6 bg-[#F5F7FA] min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Welcome Header */}
        <header className="mb-12 animate-in fade-in duration-500">
          <div className="inline-flex items-center space-x-2 text-accent font-bold text-[10px] uppercase tracking-[0.3em] mb-4">
            <LayoutDashboard size={14} />
            <span>Educational Dashboard</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-poppins font-bold text-primary mb-2">
            Hello, {firstName}
          </h1>
          <p className="text-primary/60 max-w-2xl font-medium">
            Continuing your journey through the Indian financial ecosystem. No evaluations, just clarity.
          </p>
        </header>

        {/* Primary Row: Active Learning & Milestones */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          
          {/* Active Learning Tracker */}
          <section className="lg:col-span-2 bg-white rounded-[40px] p-8 border border-primary/5 shadow-sm overflow-hidden relative group animate-in slide-in-from-left-8 duration-700">
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-center justify-between mb-10">
                <h2 className="text-xl font-bold text-primary flex items-center space-x-3">
                  <Globe size={22} className="text-accent" />
                  <span>Market Basics Progression</span>
                </h2>
                <span className="text-[10px] font-bold bg-accent/10 text-accent px-4 py-1.5 rounded-full uppercase tracking-wider">
                  Level {progress.level} Active
                </span>
              </div>
              
              <div className="flex flex-col md:flex-row gap-10 items-start md:items-center flex-1">
                <div className="relative w-32 h-32 shrink-0">
                  <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                    <circle cx="18" cy="18" r="16" fill="transparent" stroke="currentColor" strokeWidth="3" className="text-primary/5" />
                    <circle cx="18" cy="18" r="16" fill="transparent" stroke="currentColor" strokeWidth="3" strokeDasharray={`${progressPercentage} 100`} className="text-accent transition-all duration-1000" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <span className="text-2xl font-bold text-primary">{progressPercentage}%</span>
                    <span className="text-[8px] font-bold text-primary/30 uppercase tracking-tighter">Engaged</span>
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-primary mb-2">
                    {progress.level === 1 ? 'Foundational Terminology' : progress.level === 2 ? 'Volatility Frameworks' : 'Mechanical Literacy'}
                  </h3>
                  <p className="text-sm text-primary/50 leading-relaxed max-w-sm mb-6">
                    Master the conceptual roles of participants and structural mechanics in the Indian market.
                  </p>
                  <button 
                    onClick={() => onNavigate('market-basics')}
                    className="bg-accent hover:bg-accent/90 text-white px-10 py-5 rounded-2xl font-bold text-sm shadow-xl shadow-accent/10 transition-all flex items-center justify-center gap-3 group/btn w-full md:w-auto"
                  >
                    <Play size={18} fill="currentColor" />
                    <span>Resume Awareness Journey</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 mt-10 border-t border-primary/5">
                {[
                  { label: "Stages", val: `${progress.level}/3` },
                  { label: "Recent Unit", val: "Market Flow" },
                  { label: "Total Reads", val: "12 units" },
                  { label: "Status", val: "Acknowledged" }
                ].map((item, i) => (
                  <div key={i}>
                    <p className="text-[9px] font-bold text-primary/30 uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="text-xs font-bold text-primary">{item.val}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-accent/5 rounded-full blur-[100px] group-hover:scale-110 transition-transform duration-1000" />
          </section>

          {/* Educational Acknowledgements Card */}
          <section className="bg-[#0B1C2D] rounded-[40px] p-8 text-white relative overflow-hidden flex flex-col shadow-2xl animate-in slide-in-from-right-8 duration-700">
            <div className="relative z-10 flex-1">
              <h2 className="text-xl font-bold mb-10 flex items-center space-x-3 text-accent">
                <Award size={22} />
                <span>Learning Milestones</span>
              </h2>
              
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between group/m transition-colors hover:bg-white/10">
                  <div>
                    <p className="text-xs font-bold text-white/90 mb-1">Foundational Awareness</p>
                    <p className="text-[9px] font-bold text-white/30 uppercase tracking-widest">Acknowledgement Active</p>
                  </div>
                  <CheckCircle className="text-accent" size={18} />
                </div>
                
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 opacity-30 grayscale flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-white/90 mb-1">Framework Mastery</p>
                    <p className="text-[9px] font-bold text-white/30 uppercase tracking-widest">In Progress</p>
                  </div>
                  <Clock className="text-white/20" size={18} />
                </div>

                <div className="p-5 bg-accent/5 rounded-2xl border border-accent/20 mt-8">
                  <div className="flex items-center gap-2 mb-2">
                    <Info size={14} className="text-accent" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-accent">Educational Note</span>
                  </div>
                  <p className="text-[10px] text-white/40 leading-relaxed font-medium italic">
                    Milestones reflect completed content review and do not certify professional expertise.
                  </p>
                </div>
              </div>
            </div>
            
            <button 
              onClick={() => onNavigate('learn')}
              className="mt-12 w-full bg-white/5 border border-white/10 text-white py-5 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center gap-3"
            >
              <span>Explore All Modules</span>
              <ArrowRight size={16} />
            </button>
          </section>
        </div>

        {/* Secondary Row: Illustrative Simulations */}
        <div className="grid lg:grid-cols-4 gap-8 mb-16 animate-in fade-in duration-1000 delay-300">
           <section className="lg:col-span-4 bg-white rounded-[40px] p-10 border border-primary/5 shadow-sm relative overflow-hidden">
             <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-accent/10 p-2 rounded-lg">
                      <Zap size={20} className="text-accent" />
                    </div>
                    <h2 className="text-2xl font-poppins font-bold text-primary">Planning Estimates</h2>
                  </div>
                  <p className="text-primary/60 text-sm leading-relaxed mb-8 font-medium">
                    Apply your learned concepts using our high-level simulators. Information is self-reported and used strictly for illustrative purposes.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="px-6 py-3 bg-[#F5F7FA] rounded-2xl flex items-center gap-3 border border-primary/5">
                       <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                       <span className="text-xs font-bold text-primary/70 uppercase tracking-widest">ITR-1 Cycle Monitor active</span>
                    </div>
                    <div className="px-6 py-3 bg-[#F5F7FA] rounded-2xl flex items-center gap-3 border border-primary/5">
                       <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                       <span className="text-xs font-bold text-primary/70 uppercase tracking-widest">₹1.5L 80C Awareness mapped</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4 w-full md:w-auto">
                  <button 
                    onClick={() => onNavigate('tools')}
                    className="flex-1 md:flex-none bg-primary text-white px-10 py-5 rounded-2xl font-bold text-sm uppercase tracking-widest shadow-xl shadow-primary/10 hover:bg-primary/90 transition-all flex items-center justify-center gap-3"
                  >
                    <Calculator size={18} />
                    <span>View Simulators</span>
                  </button>
                </div>
             </div>
          </section>
        </div>

        <div className="mt-8">
          <ServicesCompliance />
          <Disclaimer />
        </div>
      </div>
    </div>
  );
};

export default LoggedInHome;
