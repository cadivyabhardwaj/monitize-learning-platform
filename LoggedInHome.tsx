import React, { useState, useEffect, useMemo } from 'react';
import { 
  LayoutDashboard, BookOpen, Calculator, Users, ArrowRight, Play, 
  CheckCircle, Globe, Target, Award, Info, Zap, Clock, Search,
  Terminal, Sparkles, ShieldCheck, Scale, TrendingUp, ChevronRight
} from 'lucide-react';
import { ServicesCompliance, Disclaimer } from './ComplianceSections';
import { View, User } from './types';
import { BRAND_NAME } from './constants';
import { gemini } from './geminiService';
import { MODULE_REGISTRY } from './modulesData';

interface LoggedInHomeProps {
  user: User;
  onNavigate: (view: View, subTarget?: string) => void;
}

const LoggedInHome = ({ user, onNavigate }: LoggedInHomeProps) => {
  const firstName = user.fullName ? user.fullName.split(' ')[0] : 'Member';

  // State to track actual progress across modules
  const [activeModuleStats, setActiveModuleStats] = useState({
    title: 'Market Basics',
    pct: 0,
    moduleId: 'market-investing-basics',
    levelsCompleted: 0,
    totalLevels: 10
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [definition, setDefinition] = useState<string | null>(null);
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    // Find the most recently updated or first started module
    let bestModule = MODULE_REGISTRY.find(m => m.id === 'market-investing-basics') || MODULE_REGISTRY[0];
    let maxPct = 0;
    let completedCount = 0;

    MODULE_REGISTRY.forEach(m => {
      const saved = localStorage.getItem(`monitize_progress_${m.id}`);
      if (saved) {
        const data = JSON.parse(saved);
        const done = data.completedLevelIds?.length || 0;
        const total = m.levels.length;
        const currentPct = Math.round((done / total) * 100);
        
        if (currentPct >= maxPct) {
          maxPct = currentPct;
          bestModule = m;
          completedCount = done;
        }
      }
    });

    setActiveModuleStats({
      title: bestModule.title,
      pct: maxPct,
      moduleId: bestModule.id,
      levelsCompleted: completedCount,
      totalLevels: bestModule.levels.length
    });
  }, []);

  const handleDecode = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    setSearching(true);
    const result = await gemini.decodeFinancialTerm(searchTerm);
    setDefinition(result);
    setSearching(false);
  };

  return (
    <div className="pt-24 pb-20 px-6 bg-[#F5F7FA] min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Welcome Header */}
        <header className="mb-12 animate-in fade-in duration-500 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 text-accent font-bold text-[10px] uppercase tracking-[0.3em] mb-4">
              <LayoutDashboard size={14} />
              <span>Workspace Dashboard</span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-poppins font-bold text-primary mb-2">
              Welcome back, {firstName}
            </h1>
            <p className="text-primary/60 max-w-xl font-medium">
              Your institutional workspace for neutral financial frameworks and administrative utilities.
            </p>
          </div>
          
          {/* Quick Decoder - Global UX Enhancement */}
          <div className="w-full md:w-80 bg-white p-2 rounded-[24px] shadow-sm border border-primary/5 flex flex-col group transition-all focus-within:ring-2 focus-within:ring-accent/20">
             <form onSubmit={handleDecode} className="flex items-center gap-2">
                <div className="bg-primary/5 p-2 rounded-xl text-primary/40 group-focus-within:text-accent transition-colors">
                  <Search size={16} />
                </div>
                <input 
                  type="text" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Quick Decode: e.g. LTCG" 
                  className="bg-transparent border-none text-xs font-bold text-primary placeholder:text-primary/20 outline-none flex-1"
                />
                <button 
                  type="submit"
                  disabled={searching || !searchTerm.trim()}
                  className="bg-primary text-white p-2 rounded-xl hover:bg-accent transition-all disabled:opacity-30"
                >
                  {searching ? <Clock size={14} className="animate-spin" /> : <ArrowRight size={14} />}
                </button>
             </form>
             {definition && (
               <div className="mt-2 p-3 bg-accent/5 rounded-xl animate-in slide-in-from-top-2 duration-300">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[8px] font-black text-accent uppercase tracking-widest">Institutional Definition</span>
                    <button onClick={() => setDefinition(null)} className="text-primary/20 hover:text-primary"><Clock size={10} /></button>
                  </div>
                  <p className="text-[10px] text-primary/70 leading-relaxed font-medium italic">
                    {definition}
                  </p>
               </div>
             )}
          </div>
        </header>

        {/* Primary Row: Active Learning & Skill Map */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          
          {/* Active Learning Tracker */}
          <section className="lg:col-span-2 bg-white rounded-[40px] p-8 border border-primary/5 shadow-sm overflow-hidden relative group animate-in slide-in-from-left-8 duration-700">
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-center justify-between mb-10">
                <h2 className="text-xl font-bold text-primary flex items-center space-x-3">
                  <Globe size={22} className="text-accent" />
                  <span>Curriculum Progress</span>
                </h2>
                <div className="flex items-center gap-2">
                   <span className="text-[10px] font-black text-primary/30 uppercase tracking-widest">Last Activity:</span>
                   <span className="text-[10px] font-bold bg-accent text-white px-4 py-1 rounded-full uppercase tracking-wider">
                    {activeModuleStats.title}
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-12 items-center flex-1">
                <div className="relative w-40 h-40 shrink-0">
                  <div className="absolute inset-0 bg-accent/5 rounded-full animate-pulse" />
                  <div className="absolute inset-4 bg-white rounded-full shadow-inner border border-primary/5 flex items-center justify-center flex-col">
                    <span className="text-3xl font-poppins font-bold text-primary">{activeModuleStats.pct}%</span>
                    <span className="text-[8px] font-black text-primary/30 uppercase tracking-tighter">Current Path</span>
                  </div>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white border border-primary/5 rounded-lg flex items-center justify-center shadow-sm text-accent">
                    <Zap size={14} />
                  </div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 bg-white border border-primary/5 rounded-lg flex items-center justify-center shadow-sm text-blue-500">
                    <ShieldCheck size={14} />
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-bold text-xl text-primary mb-3">
                    {activeModuleStats.title}
                  </h3>
                  <p className="text-sm text-primary/50 leading-relaxed max-w-sm mb-8">
                     Master structural financial logic through your active learning journey.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button 
                      onClick={() => onNavigate('learn', `/${activeModuleStats.moduleId}`)}
                      className="bg-accent hover:bg-accent/90 text-white px-10 py-5 rounded-2xl font-bold text-sm shadow-xl shadow-accent/10 transition-all flex items-center justify-center gap-3 group/btn"
                    >
                      <Play size={18} fill="currentColor" />
                      <span>{activeModuleStats.pct > 0 ? 'Resume Track' : 'Start Track'}</span>
                    </button>
                    <button 
                      onClick={() => onNavigate('learn')}
                      className="bg-primary/5 text-primary/40 hover:bg-primary/10 px-8 py-5 rounded-2xl font-bold text-sm transition-all"
                    >
                      Browse All Modules
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 mt-10 border-t border-primary/5">
                {[
                  { label: "Deep Modules", val: MODULE_REGISTRY.length },
                  { label: "Milestones", val: `${activeModuleStats.levelsCompleted}/${activeModuleStats.totalLevels}` },
                  { label: "Framework", val: "Statutory" },
                  { label: "Assurance", val: "Verified" }
                ].map((item, i) => (
                  <div key={i}>
                    <p className="text-[9px] font-black text-primary/20 uppercase tracking-[0.2em] mb-1">{item.label}</p>
                    <p className="text-xs font-bold text-primary">{item.val}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-accent/5 rounded-full blur-[100px]" />
          </section>

          {/* Directory Gateway Card */}
          <section className="bg-[#0B1C2D] rounded-[40px] p-8 text-white relative overflow-hidden flex flex-col shadow-2xl animate-in slide-in-from-right-8 duration-700">
            <div className="relative z-10 flex-1">
              <div className="flex items-center justify-between mb-10">
                <h2 className="text-lg font-bold flex items-center space-x-3 text-accent">
                  <Users size={20} />
                  <span>Expert Directory</span>
                </h2>
                <Sparkles size={16} className="text-white/20" />
              </div>
              
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between group/m transition-all hover:bg-white/10 hover:translate-x-1">
                  <div>
                    <p className="text-xs font-bold text-white/90 mb-1">CAs & Legal Pros</p>
                    <p className="text-[9px] font-black text-white/20 uppercase tracking-widest">Independent Vetting</p>
                  </div>
                  <CheckCircle className="text-accent" size={18} />
                </div>
                
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between group/m transition-all hover:bg-white/10 hover:translate-x-1">
                  <div>
                    <p className="text-xs font-bold text-white/90 mb-1">CFA & Strategists</p>
                    <p className="text-[9px] font-black text-white/20 uppercase tracking-widest">Market Alignment</p>
                  </div>
                  <ChevronRight className="text-white/20" size={18} />
                </div>

                <div className="p-6 bg-white/[0.02] rounded-3xl border border-white/5 mt-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Info size={14} className="text-accent" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-accent">Educational Note</span>
                  </div>
                  <p className="text-[10px] text-white/40 leading-relaxed font-medium italic">
                    Discovery is neutral. Engagement occurs independently of the platform infrastructure.
                  </p>
                </div>
              </div>
            </div>
            
            <button 
              onClick={() => onNavigate('services', 'directory')}
              className="mt-10 w-full bg-accent text-white py-5 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-accent/90 transition-all flex items-center justify-center gap-3"
            >
              <span>Explore Directory</span>
              <ArrowRight size={16} />
            </button>
          </section>
        </div>

        {/* Secondary Row: Quick Launch Utilities */}
        <div className="grid lg:grid-cols-4 gap-8 mb-16 animate-in fade-in duration-1000 delay-300">
           <section className="lg:col-span-4 bg-white rounded-[40px] p-10 border border-primary/5 shadow-sm relative overflow-hidden group">
             <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-accent/10 p-2 rounded-lg group-hover:scale-110 transition-transform">
                      <Zap size={20} className="text-accent" />
                    </div>
                    <h2 className="text-2xl font-poppins font-bold text-primary">Simulators & Planners</h2>
                  </div>
                  <p className="text-primary/60 text-sm leading-relaxed mb-8 font-medium">
                    Apply conceptual logic using mathematical models calibrated for Indian tax regimes and financial cycles.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {[
                      { icon: <Scale size={12} />, label: "ITR-1 Monitor", color: "accent" },
                      { icon: <TrendingUp size={12} />, label: "80C Mapping", color: "blue-400" },
                      { icon: <Terminal size={12} />, label: "Lab Sandbox", color: "purple-500" }
                    ].map((badge, i) => (
                      <div key={i} className="px-6 py-3 bg-[#F5F7FA] rounded-2xl flex items-center gap-3 border border-primary/5">
                         <div className={`w-2 h-2 rounded-full bg-${badge.color} animate-pulse`}></div>
                         <div className="flex items-center gap-2 text-xs font-bold text-primary/70 uppercase tracking-widest">
                           {badge.icon}
                           <span>{badge.label}</span>
                         </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                  <button 
                    onClick={() => onNavigate('tools')}
                    className="flex-1 md:flex-none bg-primary text-white px-10 py-5 rounded-2xl font-bold text-sm uppercase tracking-widest shadow-xl shadow-primary/10 hover:bg-primary/90 transition-all flex items-center justify-center gap-3"
                  >
                    <Calculator size={18} />
                    <span>Open Tools</span>
                  </button>
                  <button 
                    onClick={() => onNavigate('ai-lab')}
                    className="flex-1 md:flex-none bg-white border border-primary/5 text-primary/60 px-10 py-5 rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-primary/5 transition-all flex items-center justify-center gap-3"
                  >
                    <Sparkles size={18} className="text-accent" />
                    <span>AI Lab (BETA)</span>
                  </button>
                </div>
             </div>
             <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
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