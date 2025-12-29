
import React, { useState, useEffect, useMemo } from 'react';
import { 
  ArrowLeft, Sparkles, Beaker, Wand2, FileText, AlertCircle, 
  ShieldAlert, ChevronRight, Info, FileSearch, Type, 
  GraduationCap, Bookmark, LayoutGrid, ShieldX, Eye,
  GitMerge, BrainCircuit, History, Zap, MessageSquare, ListTree,
  Scale, Languages, SearchCode
} from 'lucide-react';
import ImageEditorComponent from './ImageEditorComponent';
import LabJargonSimplifier from './LabJargonSimplifier';
import LabDocumentExplainer from './LabDocumentExplainer';
import LabOCRInterpreter from './LabOCRInterpreter';
import LabLearningAssistant from './LabLearningAssistant';
import { LabFlashcardGenerator } from './LabFlashcardGenerator';
import LabCognitiveEngine from './LabCognitiveEngine';
import { ServicesCompliance, Disclaimer } from './ComplianceSections';
import { View, LabTool } from './types';

interface LabToolDefinition {
  id: LabTool;
  title: string;
  shortDesc: string;
  icon: React.ReactNode;
  category: "Capture Support" | "Linguistic Support" | "Cognitive Aid" | "Logical Insight";
  accentColor: string;
  warning: string;
}

const AILabPage = ({ onNavigate }: { onNavigate: (view: View, subTarget?: string) => void }) => {
  const [activeTool, setActiveTool] = useState<LabTool>('hub');

  const LAB_TOOLS: LabToolDefinition[] = useMemo(() => [
    {
      id: 'image-processor',
      title: 'Document Vision',
      shortDesc: 'Contrast and clarity enhancement for legacy document captures.',
      icon: <Wand2 size={24} />,
      category: 'Capture Support',
      accentColor: 'text-accent',
      warning: 'Does not verify document authenticity.'
    },
    {
      id: 'document-explainer',
      title: 'Document Explainer',
      shortDesc: 'Identifies common sections in administrative forms for structural awareness.',
      icon: <FileSearch size={24} />,
      category: 'Capture Support',
      accentColor: 'text-emerald-500',
      warning: 'Aids awareness, not compliance filling.'
    },
    {
      id: 'ocr-interpreter',
      title: 'OCR Interpreter',
      shortDesc: 'Experimental text-to-context conversion for general administrative records.',
      icon: <Type size={24} />,
      category: 'Capture Support',
      accentColor: 'text-purple-500',
      warning: 'OCR results may contain pattern-matching errors.'
    },
    {
      id: 'jargon-simplifier',
      title: 'Jargon Simplifier',
      shortDesc: 'Translates technical Indian financial terminology into plain English.',
      icon: <FileText size={24} />,
      category: 'Linguistic Support',
      accentColor: 'text-blue-500',
      warning: 'Not a legal interpretation of specific contracts.'
    },
    {
      id: 'linguistic-bridge',
      title: 'Linguistic Bridge',
      shortDesc: 'Explains technical terms using regional conversational logic (Hinglish/Tamlish).',
      icon: <Languages size={24} />,
      category: 'Linguistic Support',
      accentColor: 'text-pink-500',
      warning: 'Educational regional translation only.'
    },
    {
      id: 'learning-assistant',
      title: 'Learning Assistant',
      shortDesc: 'Generates academic revision notes from provided educational text.',
      icon: <GraduationCap size={24} />,
      category: 'Cognitive Aid',
      accentColor: 'text-indigo-500',
      warning: 'Does not add new facts or rules.'
    },
    {
      id: 'flashcard-generator',
      title: 'Flashcard Generator',
      shortDesc: 'Converts study material into active-recall questions for better retention.',
      icon: <Bookmark size={24} />,
      category: 'Cognitive Aid',
      accentColor: 'text-orange-500',
      warning: 'Strictly for memory reinforcement.'
    },
    {
      id: 'analogical-instructor',
      title: 'Analogical Instructor',
      shortDesc: 'Explains complex concepts through non-financial metaphors (Sports, Cooking).',
      icon: <Zap size={24} />,
      category: 'Cognitive Aid',
      accentColor: 'text-yellow-500',
      warning: 'Metaphors have logical limits.'
    },
    {
      id: 'socratic-mentor',
      title: 'Socratic Mentor',
      shortDesc: 'Asks probing questions to test your logic instead of giving answers.',
      icon: <MessageSquare size={24} />,
      category: 'Cognitive Aid',
      accentColor: 'text-teal-500',
      warning: 'Guides thinking, not decisions.'
    },
    {
      id: 'bias-spectrometer',
      title: 'Bias Spectrometer',
      shortDesc: 'Scans text for cognitive biases like FOMO, Loss Aversion, or Recency Bias.',
      icon: <BrainCircuit size={24} />,
      category: 'Logical Insight',
      accentColor: 'text-red-400',
      warning: 'Identifies triggers, not truth.'
    },
    {
      id: 'assumption-auditor',
      title: 'Assumption Auditor',
      shortDesc: 'Identifies unstated premises and hidden dependencies in financial text.',
      icon: <SearchCode size={24} />,
      category: 'Logical Insight',
      accentColor: 'text-cyan-500',
      warning: 'Surfaces logic, not risk.'
    },
    {
      id: 'concept-map',
      title: 'Concept Dependency Map',
      shortDesc: 'Visualizes the prerequisite knowledge needed to master a complex term.',
      icon: <ListTree size={24} />,
      category: 'Logical Insight',
      accentColor: 'text-violet-500',
      warning: 'Educational hierarchy only.'
    },
    {
      id: 'statutory-timeline',
      title: 'Statutory Chronology',
      shortDesc: 'Visualizes how a specific regulation has evolved over recent cycles.',
      icon: <History size={24} />,
      category: 'Logical Insight',
      accentColor: 'text-amber-600',
      warning: 'Does not predict future laws.'
    },
    {
      id: 'clause-differencer',
      title: 'Clause Differencer',
      shortDesc: 'Highlights logical shifts between two document snippets or laws.',
      icon: <GitMerge size={24} />,
      category: 'Logical Insight',
      accentColor: 'text-rose-500',
      warning: 'Not a legal comparison.'
    },
    {
      id: 'readability-meter',
      title: 'Cognitive Load Meter',
      shortDesc: 'Analyzes text density and flags zones that may cause comprehension friction.',
      icon: <Scale size={24} />,
      category: 'Logical Insight',
      accentColor: 'text-slate-500',
      warning: 'Readability score is illustrative.'
    },
    {
      id: 'mental-model-matcher',
      title: 'Mental Model Matcher',
      shortDesc: 'Suggests general frameworks (Pareto, First Principles) applicable to the text.',
      icon: <LayoutGrid size={24} />,
      category: 'Logical Insight',
      accentColor: 'text-blue-400',
      warning: 'General logic frameworks only.'
    }
  ], []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTool]);

  const handleBack = () => {
    if (activeTool === 'hub') {
      onNavigate('home');
    } else {
      setActiveTool('hub');
    }
  };

  const categories = ["Capture Support", "Linguistic Support", "Cognitive Aid", "Logical Insight"];

  return (
    <div className="animate-in fade-in duration-700 bg-[#F8FAFC] min-h-screen">
      {/* 1. EXPERIMENTAL HEADER */}
      <section className="pt-40 pb-16 bg-[#0B1C2D] text-white px-6 relative overflow-hidden border-b border-white/5">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <button 
                onClick={handleBack} 
                className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/40 hover:text-white flex items-center gap-3 group focus:ring-2 focus:ring-accent outline-none"
                aria-label={activeTool === 'hub' ? "Exit Lab" : "Return to Hub"}
              >
                <ArrowLeft size={20} />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {activeTool === 'hub' ? 'Exit Lab' : 'Lab Hub'}
                </span>
              </button>
              <div className="h-6 w-px bg-white/10" aria-hidden="true" />
              <div className="flex items-center space-x-2 text-accent">
                <Beaker size={16} />
                <span className="text-xs font-bold uppercase tracking-widest">Innovation Sandbox (BETA)</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-3 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full">
              <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" aria-hidden="true" />
              <span className="text-[9px] font-black uppercase tracking-widest text-white/40">Non-Advisory Environment</span>
            </div>
          </div>
          
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-poppins font-bold mb-6 tracking-tight">
              {activeTool === 'hub' ? 'Innovation Sandbox' : 
               LAB_TOOLS.find(t => t.id === activeTool)?.title}
            </h1>
            <p className="text-white/40 text-sm lg:text-lg font-medium leading-relaxed">
              Auxiliary intelligence modules designed to accelerate learning and logical clarity. These tools operate as a neutral interpretative layer and do not participate in financial planning or statutory execution.
            </p>
          </div>
        </div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" aria-hidden="true" />
      </section>

      {/* 2. PRIVACY BARRIER */}
      <div className="bg-orange-50 border-b border-orange-100 px-6 py-4" role="alert">
        <div className="max-w-7xl mx-auto flex items-start sm:items-center gap-4 text-orange-800">
          <ShieldX size={20} className="shrink-0 mt-0.5 sm:mt-0" />
          <div className="space-y-1">
            <p className="text-xs font-black uppercase tracking-wide">Mandatory Privacy Shield</p>
            <p className="text-[10px] sm:text-xs font-medium opacity-90">
              Do NOT upload documents containing Aadhaar, PAN, or full Bank Account numbers. This sandbox uses external large language models (LLMs) for pattern-based interpretation.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {activeTool === 'hub' ? (
          <nav className="space-y-16 animate-in slide-in-from-bottom-4 duration-500" aria-label="Laboratory Selection">
            
            {categories.map(category => (
              <div key={category} className="space-y-8">
                <h2 className="text-xs font-black uppercase tracking-[0.4em] text-primary/20 flex items-center gap-4">
                  <span>{category}</span>
                  <div className="h-px bg-primary/5 flex-1" />
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {LAB_TOOLS.filter(t => t.category === category).map((tool) => (
                    <button 
                      key={tool.id}
                      onClick={() => setActiveTool(tool.id)}
                      className="bg-white p-8 rounded-[40px] border border-primary/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all text-left group flex flex-col focus:ring-2 focus:ring-accent outline-none min-h-[220px]"
                    >
                      <div className={`w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center ${tool.accentColor} mb-6 group-hover:scale-110 transition-transform`}>
                        {tool.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-poppins font-bold text-primary mb-3">{tool.title}</h3>
                        <p className="text-primary/60 text-[10px] leading-relaxed mb-6 font-medium">
                          {tool.shortDesc}
                        </p>
                      </div>
                      <div className="pt-4 border-t border-primary/5 mt-auto space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-[8px] font-black uppercase tracking-widest text-primary/30">Stable Pipeline v1.2</span>
                          <ChevronRight size={14} className="text-accent group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}

            <div className="p-10 bg-primary text-white rounded-[40px] flex flex-col md:flex-row items-center gap-10 overflow-hidden relative shadow-2xl">
              <div className="relative z-10 flex-1">
                <div className="flex items-center gap-3 mb-6 text-accent">
                   <Info size={24} />
                   <h4 className="font-bold text-sm uppercase tracking-widest">Operating Parameters</h4>
                </div>
                <p className="text-xs text-white/50 leading-relaxed font-medium italic">
                  Laboratory features are strictly for cognitive augmentation and literacy purposes. They represent algorithmic interpretations of general logic and must not be used for statutory execution or personal financial navigation.
                </p>
              </div>
              <div className="relative z-10 w-full md:w-auto">
                <button 
                  onClick={() => onNavigate('learn')}
                  className="w-full md:w-auto px-8 py-4 bg-white/10 border border-white/10 hover:bg-white/20 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all min-h-[52px]"
                >
                  Return to Learning tracks
                </button>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
            </div>
          </nav>
        ) : (
          <div className="animate-in fade-in zoom-in-95 duration-500">
            {activeTool === 'image-processor' && <ImageEditorComponent onNavigate={onNavigate} />}
            {activeTool === 'jargon-simplifier' && <LabJargonSimplifier onNavigate={onNavigate} />}
            {activeTool === 'document-explainer' && <LabDocumentExplainer onNavigate={onNavigate} />}
            {activeTool === 'ocr-interpreter' && <LabOCRInterpreter onNavigate={onNavigate} />}
            {activeTool === 'learning-assistant' && <LabLearningAssistant onNavigate={onNavigate} />}
            {activeTool === 'flashcard-generator' && <LabFlashcardGenerator onNavigate={onNavigate} />}
            
            {[
              'concept-map', 'assumption-auditor', 'bias-spectrometer', 
              'statutory-timeline', 'analogical-instructor', 'socratic-mentor', 
              'clause-differencer', 'readability-meter', 'linguistic-bridge', 
              'mental-model-matcher'
            ].includes(activeTool) && (
              <LabCognitiveEngine toolId={activeTool} onNavigate={onNavigate} />
            )}
            
            <div className="mt-16 text-center">
              <button 
                onClick={() => setActiveTool('hub')}
                className="inline-flex items-center gap-3 px-8 py-3 bg-white border border-primary/5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-primary/40 hover:text-accent transition-all hover:shadow-lg focus:ring-2 focus:ring-accent outline-none min-h-[48px]"
              >
                <LayoutGrid size={14} />
                <span>Return to Sandbox Hub</span>
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="bg-white">
        <ServicesCompliance />
        <Disclaimer />
      </div>
    </div>
  );
};

export default AILabPage;
