
import React, { useCallback } from 'react';
/* Fixed: Ensure useSearchParams is available from react-router-dom */
import { useSearchParams } from 'react-router-dom';
import { Calculator, ChevronRight, BookOpen, ArrowRight } from 'lucide-react';
import { TOOL_CATEGORIES, TOOLS_LIST } from './constants';
import { ServicesCompliance, Disclaimer } from './ComplianceSections';
import IncomeTaxCalculator from './IncomeTaxCalculator';
import SIPIllustrator from './SIPIllustrator';
import EMICalculator from './EMICalculator';
import ComplianceChecklist from './ComplianceChecklist';
import FinancialSnapshot from './FinancialSnapshot';
import BudgetAllocationPlanner from './BudgetAllocationPlanner';
import AdvanceTaxAwareness from './AdvanceTaxAwareness';
import RiskToleranceReflection from './RiskToleranceReflection';
import BusinessStructureAwareness from './BusinessStructureAwareness';
import { View } from './types';

interface ToolCardProps {
  tool: typeof TOOLS_LIST[0];
  onNavigate: (view: View, target?: string) => void;
  onSelectTool: (id: string) => void;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool, onNavigate, onSelectTool }) => (
  <article className="bg-white rounded-[32px] p-8 border border-primary/5 shadow-sm hover:shadow-md transition-all group flex flex-col h-full">
    <div className="mb-6 bg-[#F5F7FA] w-12 h-12 rounded-xl flex items-center justify-center text-accent group-hover:scale-105 transition-transform" aria-hidden="true">
      {tool.icon}
    </div>
    
    <div className="flex-1">
      <h4 className="text-xl font-bold text-primary mb-2">{tool.name}</h4>
      <p className="text-primary/60 text-sm leading-relaxed mb-6">
        {tool.description}
      </p>
      
      <div className="space-y-4 mb-8">
        <div>
          <h5 className="text-[10px] font-bold text-primary/30 uppercase tracking-[0.2em] mb-2">Simulated Inputs</h5>
          <div className="flex flex-wrap gap-2">
            {tool.inputs.map((input, i) => (
              <span key={i} className="text-[10px] bg-primary/5 px-2 py-0.5 rounded text-primary/40 font-bold">{input}</span>
            ))}
          </div>
        </div>
        <div>
          <h5 className="text-[10px] font-bold text-primary/30 uppercase tracking-[0.2em] mb-2">Nature of Result</h5>
          <p className="text-xs text-primary/70 font-medium italic">{tool.outputType}</p>
        </div>
      </div>
    </div>
    
    <div className="space-y-4 mt-auto">
      <button 
        onClick={() => onSelectTool(tool.id)}
        className="w-full bg-[#0B1C2D] text-white py-4 rounded-xl font-bold text-sm hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group/btn focus:ring-2 focus:ring-accent outline-none"
        aria-label={`Open utility: ${tool.name}`}
      >
        <span>{tool.actionText}</span>
        <ChevronRight size={16} className="transition-transform group-hover/btn:translate-x-1" aria-hidden="true" />
      </button>
      
      {tool.learningLinkId && (
        <button 
          onClick={() => onNavigate(tool.learningLinkId as View)}
          className="w-full bg-transparent text-accent text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 py-2 hover:opacity-70 transition-opacity"
        >
          <BookOpen size={14} />
          <span>Understand Mechanics</span>
        </button>
      )}
    </div>
  </article>
);

interface ToolsPageProps {
  isAuthenticated: boolean;
  onNavigate: (view: View, target?: string) => void;
}

const ToolsPage = ({ isAuthenticated, onNavigate }: ToolsPageProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const activeToolId = searchParams.get('tool');
  const activeCategory = searchParams.get('category') || 'all';

  const handleSelectCategory = (categoryId: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (categoryId === 'all') {
      newParams.delete('category');
    } else {
      newParams.set('category', categoryId);
    }
    setSearchParams(newParams);
  };

  const handleSelectTool = useCallback((id: string) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('tool', id);
    setSearchParams(newParams);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [searchParams, setSearchParams]);

  const handleBack = useCallback(() => {
    const newParams = new URLSearchParams(searchParams);
    newParams.delete('tool');
    setSearchParams(newParams);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [searchParams, setSearchParams]);

  const filteredTools = activeCategory === 'all' 
    ? TOOLS_LIST 
    : TOOLS_LIST.filter(t => t.categoryId === activeCategory);

  // Render individual tools if selected
  if (activeToolId === 'regime-simulator') return <IncomeTaxCalculator onBack={handleBack} />;
  if (activeToolId === 'sip-illustrator') return <SIPIllustrator onBack={handleBack} />;
  if (activeToolId === 'emi-calculator') return <EMICalculator onBack={handleBack} />;
  if (activeToolId === 'compliance-checklist') return <ComplianceChecklist onBack={handleBack} />;
  if (activeToolId === 'financial-snapshot') return <FinancialSnapshot onBack={handleBack} />;
  if (activeToolId === 'budget-planner') return <BudgetAllocationPlanner onBack={handleBack} />;
  if (activeToolId === 'advance-tax-awareness') return <AdvanceTaxAwareness onBack={handleBack} />;
  if (activeToolId === 'risk-reflection') return <RiskToleranceReflection onBack={handleBack} />;
  if (activeToolId === 'business-structure-awareness') return <BusinessStructureAwareness onBack={handleBack} />;

  return (
    <div className="animate-in fade-in duration-700">
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[#0B1C2D] text-white px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
            <Calculator size={14} className="text-accent" aria-hidden="true" />
            <span className="text-xs font-semibold text-white/80 uppercase tracking-widest">Informational Planning Utilities</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-poppins font-bold leading-tight mb-8">
            Financial Planning <br />
            <span className="text-accent">Utilities</span>
          </h1>
          <p className="text-lg lg:text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            Neutral calculators and simulators designed to help you understand financial mechanics and regulatory scenarios in India.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => {
                const el = document.getElementById('browse-tools');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg"
            >
              <span>Browse All Tools</span>
              <ArrowRight size={18} aria-hidden="true" />
            </button>
            <button 
              onClick={() => onNavigate('learn')}
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold border border-white/10 transition-all focus:ring-2 focus:ring-white outline-none"
            >
              Learn the Concepts First
            </button>
          </div>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-accent/5 rounded-full blur-[120px] -z-0" aria-hidden="true"></div>
      </section>

      {/* Categories Bar - Sticky with URL State */}
      <section className="py-8 bg-white border-b border-primary/5 px-6 sticky top-[73px] z-30 shadow-sm overflow-x-auto no-scrollbar">
        <div className="max-w-7xl mx-auto flex items-center space-x-4 min-w-max">
          <div className="flex items-center space-x-2 mr-4 text-primary/40">
            <span className="text-[10px] font-bold uppercase tracking-widest">Filter By:</span>
          </div>
          <button 
            onClick={() => handleSelectCategory('all')}
            className={`px-6 py-2.5 rounded-full font-bold text-[10px] uppercase tracking-widest transition-all ${activeCategory === 'all' ? 'bg-primary text-white shadow-lg' : 'bg-[#F5F7FA] text-primary/40 hover:bg-primary/5'}`}
          >
            All Utilities
          </button>
          {TOOL_CATEGORIES.map(cat => (
            <button 
              key={cat.id}
              onClick={() => handleSelectCategory(cat.id)}
              className={`px-6 py-2.5 rounded-full font-bold text-[10px] uppercase tracking-widest transition-all whitespace-nowrap ${activeCategory === cat.id ? 'bg-primary text-white shadow-lg' : 'bg-[#F5F7FA] text-primary/40 hover:bg-primary/5'}`}
            >
              {cat.title}
            </button>
          ))}
        </div>
      </section>

      <section id="browse-tools" className="py-24 bg-[#F5F7FA] px-6 min-h-[600px]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
            {filteredTools.map((tool) => (
              <ToolCard 
                key={tool.id} 
                tool={tool} 
                onNavigate={onNavigate} 
                onSelectTool={handleSelectTool}
              />
            ))}
          </div>
          
          {filteredTools.length === 0 && (
            <div className="text-center py-32">
              <p className="text-primary/40 font-bold uppercase tracking-[0.2em]">No utilities found in this category</p>
            </div>
          )}
        </div>
      </section>

      <ServicesCompliance />
      <Disclaimer />
    </div>
  );
};

export default ToolsPage;
