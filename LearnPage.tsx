import React, { useEffect, useState } from 'react';
import { ArrowRight, Clock, BookOpen, LayoutDashboard, Globe, Gavel, Target, Briefcase, ShieldAlert, TrendingUp, ClipboardCheck, PieChart, Landmark, CreditCard, Building2, Coins, Scale, History, ShieldCheck, Zap, FileText, CheckCircle } from 'lucide-react';
import { MODULE_REGISTRY } from './modulesData';
import { ServicesCompliance, Disclaimer } from './ComplianceSections';
import { View, LearningModule, ModuleCategory } from './types';

const IconMap: Record<string, React.ReactNode> = {
  LayoutDashboard: <LayoutDashboard size={32} className="text-accent" />,
  Globe: <Globe size={32} className="text-accent" />,
  Gavel: <Gavel size={32} className="text-accent" />,
  Target: <Target size={32} className="text-accent" />,
  Briefcase: <Briefcase size={32} className="text-accent" />,
  ShieldAlert: <ShieldAlert size={32} className="text-accent" />,
  TrendingUp: <TrendingUp size={32} className="text-accent" />,
  ClipboardCheck: <ClipboardCheck size={32} className="text-accent" />,
  PieChart: <PieChart size={32} className="text-accent" />,
  Landmark: <Landmark size={32} className="text-accent" />,
  CreditCard: <CreditCard size={32} className="text-accent" />,
  Building2: <Building2 size={32} className="text-accent" />,
  Coins: <Coins size={32} className="text-accent" />,
  Scale: <Scale size={32} className="text-accent" />,
  History: <History size={32} className="text-accent" />,
  ShieldCheck: <ShieldCheck size={32} className="text-accent" />,
  Zap: <Zap size={32} className="text-accent" />,
  FileText: <FileText size={32} className="text-accent" />
};

interface ModuleCardProps {
  module: LearningModule;
  onNavigate: (view: View, subTarget?: string) => void;
  isLastActive?: boolean;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ module, onNavigate, isLastActive }) => {
  const [progress, setProgress] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(`monitize_progress_${module.id}`);
    if (saved) {
      const data = JSON.parse(saved);
      const completedCount = data.completedLevelIds?.length || 0;
      const totalLevels = module.levels.length;
      const pct = Math.round((completedCount / totalLevels) * 100);
      setProgress(pct);
      setIsStarted(completedCount > 0 || data.lastLevelIdx > 0);
      setIsCompleted(completedCount === totalLevels);
    }
  }, [module.id, module.levels.length]);

  return (
    <article className={`bg-white rounded-[40px] p-8 lg:p-10 border shadow-sm hover:shadow-xl transition-all group flex flex-col h-full overflow-hidden relative ${isLastActive ? 'ring-2 ring-accent border-accent/20' : 'border-primary/5'}`}>
      {isLastActive && (
        <div className="absolute top-0 right-10 bg-accent text-white px-4 py-1.5 rounded-b-2xl text-[9px] font-black uppercase tracking-widest shadow-lg animate-in slide-in-from-top-4 duration-500">
          You left off here
        </div>
      )}
      
      <div className="flex justify-between items-start mb-8">
        <div className="bg-background w-14 h-14 rounded-2xl flex items-center justify-center border border-primary/5 transition-transform group-hover:scale-105 shrink-0">
          {IconMap[module.iconName] || <BookOpen size={32} className="text-accent" />}
        </div>
        {isCompleted ? (
          <div className="bg-accent/10 border border-accent/10 text-accent px-3 py-1 rounded-full flex items-center gap-1.5 animate-in fade-in zoom-in-95">
             <CheckCircle size={12} />
             <span className="text-[9px] font-black uppercase tracking-widest">Completed</span>
          </div>
        ) : isStarted ? (
          <div className="bg-blue-50 border border-blue-100 text-blue-500 px-3 py-1 rounded-full flex items-center gap-1.5">
             <History size={12} className="animate-spin-slow" />
             <span className="text-[9px] font-black uppercase tracking-widest">In Progress</span>
          </div>
        ) : (
           <div className="px-3 py-1 rounded-full border border-primary/5 text-primary/20 text-[9px] font-black uppercase tracking-widest">Standalone Track</div>
        )}
      </div>
      
      <div className="flex-1">
        <div className="flex items-start justify-between mb-4 gap-4">
          <h2 className="text-xl lg:text-2xl font-poppins font-bold text-primary leading-tight">{module.title}</h2>
        </div>
        
        <p className="text-primary/60 text-sm leading-relaxed mb-10 font-medium line-clamp-3">
          {module.shortDescription}
        </p>
        
        <div className="space-y-6 mb-10 pt-6 border-t border-primary/5">
           <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-primary/30">
              <span className="flex items-center gap-1.5"><Clock size={12} /> {module.estimatedEffort}</span>
              <span>{module.levels.length} Levels</span>
           </div>

           <div className="space-y-2.5">
              <div className="flex justify-between items-center">
                <span className="text-[9px] font-black text-primary/20 uppercase tracking-widest">Track Completion</span>
                <span className="text-10px font-bold text-primary">{progress}%</span>
              </div>
              <div className="w-full h-1 bg-primary/5 rounded-full overflow-hidden">
                <div 
                  className={`h-full transition-all duration-1000 ${isCompleted ? 'bg-accent' : 'bg-blue-400'}`} 
                  style={{ width: `${progress}%` }} 
                />
              </div>
           </div>
        </div>
      </div>

      <button 
        onClick={() => onNavigate('learn', `/${module.id}`)} 
        className={`w-full h-14 rounded-2xl font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-3 group/btn shadow-xl active:scale-[0.98] ${
          isCompleted 
          ? 'bg-primary/5 text-primary/40 hover:bg-primary/10 shadow-none border border-primary/5' 
          : isStarted 
            ? 'bg-blue-500 text-white hover:bg-blue-600 shadow-blue-500/10' 
            : 'bg-primary text-white hover:bg-primary/95 shadow-primary/10'
        }`}
      >
        <span>{isCompleted ? 'Review Content' : isStarted ? 'Resume Track' : 'Start Track'}</span>
        <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
      </button>
    </article>
  );
};

const LearnPage = ({ isAuthenticated, onNavigate }: { isAuthenticated: boolean, onNavigate: (view: View, subTarget?: string) => void }) => {
  const [activeCategory, setActiveCategory] = useState<ModuleCategory | 'All'>('All');
  const categories: (ModuleCategory | 'All')[] = ["All", "Personal", "Tax", "Business", "Markets", "Technical"];
  const [lastActiveModuleId, setLastActiveModuleId] = useState<string | null>(null);

  useEffect(() => {
    const lastActive = localStorage.getItem('monitize_last_active_module');
    setLastActiveModuleId(lastActive);
  }, []);
  
  const filteredModules = activeCategory === 'All' 
    ? MODULE_REGISTRY 
    : MODULE_REGISTRY.filter(m => m.category === activeCategory);

  return (
    <div className="animate-in fade-in duration-700 bg-background">
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-primary text-white px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
            <BookOpen size={14} className="text-accent" />
            <span className="text-[10px] font-black text-white/50 uppercase tracking-[0.3em]">Knowledge Architecture</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-poppins font-bold leading-tight mb-8 tracking-tight">
            Logic Before <br /><span className="text-accent">Execution.</span>
          </h1>
          
          <p className="text-lg text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            Building a resilient conceptual framework for the Indian financial landscape through structured learning tracks.
          </p>

          <button 
            onClick={() => document.getElementById('registry-grid')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-accent text-white px-10 py-5 rounded-2xl font-bold text-sm shadow-xl shadow-accent/20 hover:bg-accent/90 transition-all flex items-center justify-center gap-3 mx-auto"
          >
            <span>Explore Track Registry</span>
            <ArrowRight size={18} />
          </button>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-accent/5 rounded-full blur-[150px]" />
      </section>

      {/* Filter Bar */}
      <section className="sticky top-[73px] z-30 bg-white/80 backdrop-blur-md border-b border-primary/5 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">Filter by learning domain</p>
            <p className="text-xs text-primary/40 font-medium">Targeted tracks for specific professional requirements.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest border transition-all ${activeCategory === cat ? 'bg-primary border-primary text-white shadow-lg' : 'bg-[#F8FAFC] border-primary/5 text-primary/40 hover:bg-primary/5'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tracks Grid */}
      <section id="registry-grid" className="py-24 px-6 bg-background min-h-[600px]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredModules.map((module) => (
              <ModuleCard 
                key={module.id} 
                module={module} 
                onNavigate={onNavigate} 
                isLastActive={module.id === lastActiveModuleId}
              />
            ))}
          </div>
          
          {filteredModules.length === 0 && (
            <div className="text-center py-32 space-y-4">
              <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto text-primary/10">
                <FileText size={32} />
              </div>
              <p className="text-primary/40 font-bold uppercase tracking-[0.2em]">No tracks match this domain</p>
              <button onClick={() => setActiveCategory('All')} className="text-accent font-bold text-xs underline">Clear Filters</button>
            </div>
          )}
        </div>
      </section>

      <div className="bg-white">
        <ServicesCompliance />
        <Disclaimer />
      </div>
    </div>
  );
};

export default LearnPage;