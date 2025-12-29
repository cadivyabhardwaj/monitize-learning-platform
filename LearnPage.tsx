
import React, { useState, useMemo } from 'react';
import { ArrowRight, Clock, BookOpen, CheckCircle, FileJson, Filter, LayoutGrid } from 'lucide-react';
import { MODULE_REGISTRY } from './modulesData';
import { ServicesCompliance, Disclaimer } from './ComplianceSections';
import { View, LearningModule, ModuleCategory, ModuleStatus } from './types';
import { AuditService } from './auditUtils';

const ModuleCard: React.FC<{ 
  module: LearningModule; 
  onNavigate: (view: View, subTarget?: string) => void 
}> = ({ module, onNavigate }) => {
  const stats = useMemo(() => {
    const saved = localStorage.getItem(`monitize_progress_${module.id}`);
    if (!saved) return { status: 'not-started' as ModuleStatus, progress: 0 };
    
    const data = JSON.parse(saved);
    const completedCount = data.completedLevelIds?.length || 0;
    const progress = Math.round((completedCount / module.levels.length) * 100);
    
    if (completedCount === module.levels.length) return { status: 'completed' as ModuleStatus, progress: 100 };
    return { status: 'in-progress' as ModuleStatus, progress };
  }, [module]);

  const ctaLabel = useMemo(() => {
    if (stats.status === 'completed') return 'Review Content';
    if (stats.status === 'in-progress') return 'Resume Track';
    return 'Begin Track';
  }, [stats.status]);

  return (
    <article 
      className="bg-white rounded-[32px] p-8 border border-primary/5 shadow-sm hover:shadow-md transition-all group flex flex-col h-full"
    >
      <div className="flex justify-between items-start mb-6">
        <div className="bg-background w-12 h-12 rounded-2xl flex items-center justify-center text-accent shrink-0">
          <BookOpen size={24} />
        </div>
        
        {stats.status === 'completed' && (
          <div className="bg-accent/10 text-accent px-2.5 py-1 rounded-full flex items-center gap-1 border border-accent/10">
            <CheckCircle size={10} />
            <span className="text-[8px] font-black uppercase tracking-widest">Completed</span>
          </div>
        )}
        {stats.status === 'in-progress' && (
          <div className="bg-blue-50 text-blue-500 px-2.5 py-1 rounded-full flex items-center gap-1 border border-blue-100">
            <Clock size={10} />
            <span className="text-[8px] font-black uppercase tracking-widest">{stats.progress}%</span>
          </div>
        )}
      </div>
      
      <div className="flex-1">
        <h2 className="text-lg font-bold text-primary mb-3 group-hover:text-accent transition-colors">{module.title}</h2>
        <p className="text-primary/60 text-xs leading-relaxed mb-6 font-medium line-clamp-3">{module.shortDescription}</p>
      </div>

      <div className="pt-6 border-t border-primary/5 flex items-center justify-between mb-6">
        <span className="text-[9px] font-bold text-primary/30 uppercase tracking-widest flex items-center gap-1.5">
          <Clock size={12} /> {module.estimatedEffort}
        </span>
        <span className="text-[9px] font-bold text-primary/30 uppercase tracking-widest">
          {module.levels.length} Levels
        </span>
      </div>

      <button 
        onClick={() => onNavigate('learn', `/${module.id}`)} 
        className={`w-full h-12 rounded-xl font-bold text-[10px] uppercase tracking-widest transition-all flex items-center justify-center gap-2 group/btn ${
          stats.status === 'completed' 
          ? 'bg-primary/5 text-primary/40 hover:bg-primary/10' 
          : 'bg-primary text-white hover:bg-primary/95 shadow-lg shadow-primary/10'
        }`}
      >
        <span>{ctaLabel}</span>
        <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
      </button>
    </article>
  );
};

const LearnPage = ({ isAuthenticated, onNavigate }: { isAuthenticated: boolean, onNavigate: (view: View, subTarget?: string) => void }) => {
  const [activeCategory, setActiveCategory] = useState<ModuleCategory | 'All'>('All');
  const categories: (ModuleCategory | 'All')[] = ["All", "Personal", "Tax", "Business", "Markets", "Technical"];
  
  const filteredModules = useMemo(() => {
    return activeCategory === 'All' 
      ? MODULE_REGISTRY 
      : MODULE_REGISTRY.filter(m => m.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="animate-in fade-in duration-700 bg-background min-h-screen">
      <section className="pt-40 pb-24 bg-primary text-white px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
            <LayoutGrid size={14} className="text-accent" />
            <span className="text-[10px] font-black text-white/50 uppercase tracking-[0.3em]">Institutional Curriculum</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold leading-tight mb-6">
            Learning <span className="text-accent">Hub.</span>
          </h1>
          <p className="text-base md:text-lg text-white/60 mb-12 max-w-2xl mx-auto font-medium">
            Neutral frameworks deconstructing the complexity of Indian finance.
          </p>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all border ${
                  activeCategory === cat 
                  ? 'bg-accent border-accent text-white shadow-lg' 
                  : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredModules.map((module) => (
              <ModuleCard key={module.id} module={module} onNavigate={onNavigate} />
            ))}
          </div>
          
          {filteredModules.length === 0 && (
            <div className="text-center py-20">
              <p className="text-primary/40 font-bold uppercase tracking-widest">No modules found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <div className="bg-white border-t border-primary/5">
        <ServicesCompliance />
        <Disclaimer />
        <footer className="py-12 bg-background text-center border-t border-primary/5">
          <button 
            onClick={AuditService.exportAuditTrail}
            className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary/30 hover:text-accent transition-colors"
          >
            <FileJson size={14} />
            <span>Download Learning Activity Log</span>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default LearnPage;
