
import React, { useState } from 'react';
import { 
  BrainCircuit, RefreshCcw, Sparkles, Send, Info, X, 
  ChevronRight, GraduationCap, Copy, Check, ShieldAlert,
  Zap, ListTree, SearchCode, Languages, MessageSquare, Scale, History,
  Lightbulb, ShieldCheck, GitMerge, LayoutGrid
} from 'lucide-react';
import { gemini } from './geminiService';
import { LabTool, View } from './types';

interface LabCognitiveEngineProps {
  toolId: LabTool;
  onNavigate: (view: View) => void;
}

/**
 * LabCognitiveEngine
 * 
 * Unified UI for specialized cognitive tools.
 * Dynamically adjusts inputs and metadata based on toolId.
 */
const LabCognitiveEngine: React.FC<LabCognitiveEngineProps> = ({ toolId, onNavigate }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  // Dynamic context for tools
  const [analogyCategory, setAnalogyCategory] = useState('Sports');
  const [dialect, setDialect] = useState('Hinglish');

  const getToolMeta = () => {
    switch (toolId) {
      case 'bias-spectrometer': return { 
        title: 'Bias Spectrometer', 
        icon: <BrainCircuit className="text-red-400" />, 
        placeholder: "Paste news headline or marketing text...", 
        buttonText: "Scan for Biases",
        detail: "Scans text for psychological triggers like FOMO, Recency Bias, or Loss Aversion to identify emotional marketing patterns."
      };
      case 'assumption-auditor': return { 
        title: 'Assumption Auditor', 
        icon: <SearchCode className="text-cyan-500" />, 
        placeholder: "Paste an article or proposal snippet...", 
        buttonText: "Identify Hidden Premises",
        detail: "Identifies unstated premises or prerequisites in a text snippet (e.g., 'Assumes constant 8% returns') for better critical analysis."
      };
      case 'analogical-instructor': return { 
        title: 'Analogical Instructor', 
        icon: <Zap className="text-yellow-500" />, 
        placeholder: "Concept to explain (e.g. Asset Allocation)...", 
        buttonText: "Generate Metaphor",
        detail: "Explains technical concepts using non-financial metaphors (Sports, Tech, Nature) to build intuitive mental models."
      };
      case 'concept-map': return { 
        title: 'Dependency Map', 
        icon: <ListTree className="text-violet-500" />, 
        placeholder: "Enter a complex term (e.g. LTCG)...", 
        buttonText: "Map Prerequisites",
        detail: "Visualizes the hierarchy of foundational knowledge required to understand a complex term (e.g., to know LTCG, you first need Capital vs Revenue awareness)."
      };
      case 'linguistic-bridge': return { 
        title: 'Linguistic Bridge', 
        icon: <Languages className="text-pink-500" />, 
        placeholder: "Enter technical text to re-contextualize...", 
        buttonText: "Translate Logic",
        detail: "Translates rigid institutional terminology into colloquial 'Hinglish' or regional conversational logic for better accessibility."
      };
      case 'statutory-timeline': return { 
        title: 'Statutory Chronology', 
        icon: <History className="text-amber-600" />, 
        placeholder: "Regulation or Act name (e.g. Section 80C)...", 
        buttonText: "Visualize Evolution",
        detail: "Summarizes the logic-based evolution of a law or Act over recent cycles to show how regulatory intent has shifted."
      };
      case 'socratic-mentor': return { 
        title: 'Socratic Mentor', 
        icon: <MessageSquare className="text-teal-500" />, 
        placeholder: "What topic are you studying?", 
        buttonText: "Start Inquiry",
        detail: "Uses interactive inquiry to test your understanding of a topic. It asks questions instead of providing direct answers to stimulate logic."
      };
      case 'readability-meter': return { 
        title: 'Cognitive Load Meter', 
        icon: <Scale className="text-slate-500" />, 
        placeholder: "Paste document text for density analysis...", 
        buttonText: "Analyze Complexity",
        detail: "Analyzes the linguistic density of a text and flags 'High-Friction Zones' that might cause comprehension fatigue."
      };
      /* Added GitMerge to the icons below */
      case 'clause-differencer': return { 
        title: 'Clause Differencer', 
        icon: <GitMerge className="text-rose-500" />, 
        placeholder: "Enter two snippets of text to compare...", 
        buttonText: "Compare Logic",
        detail: "Identifies logical (not just textual) differences between two snippets or laws to highlight shifts in scope or liability."
      };
      /* Added LayoutGrid to the icons below */
      case 'mental-model-matcher': return { 
        title: 'Mental Model Matcher', 
        icon: <LayoutGrid className="text-blue-400" />, 
        placeholder: "Describe a problem or situation...", 
        buttonText: "Identify Framework",
        detail: "Suggests general cognitive frameworks (Pareto, Occam's Razor, First Principles) that apply to the input logic."
      };
      default: return { 
        title: 'Cognitive Engine', 
        icon: <Sparkles />, 
        placeholder: "Enter text...", 
        buttonText: "Process Logic",
        detail: "An experimental module for structural logic analysis and pattern recognition."
      };
    }
  };

  const meta = getToolMeta();

  const handleProcess = async () => {
    if (!input.trim()) return;
    setLoading(true);
    try {
      const response = await gemini.processCognitiveTask(toolId, input, {
        category: analogyCategory,
        dialect: dialect
      });
      setOutput(response);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      {/* MODULE BRIEFING HEADER */}
      <div className="bg-white p-8 rounded-[40px] border border-primary/5 shadow-sm flex flex-col md:flex-row items-center gap-8">
        <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center shrink-0">
          {meta.icon}
        </div>
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-xl font-poppins font-bold text-primary mb-2 flex items-center justify-center md:justify-start gap-2">
            <span>Module Briefing: {meta.title}</span>
            <div className="px-2 py-0.5 bg-accent/10 rounded text-[8px] font-black text-accent uppercase tracking-tighter">Verified Logic</div>
          </h3>
          <p className="text-sm text-primary/60 font-medium leading-relaxed max-w-3xl">
            {meta.detail}
          </p>
        </div>
        <div className="w-px h-12 bg-primary/5 hidden md:block" />
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-[9px] font-black text-primary/20 uppercase tracking-widest">Model Pipeline</p>
            <p className="text-[10px] font-bold text-primary/60 uppercase">GPT-4o-Linguistic</p>
          </div>
          <Lightbulb size={24} className="text-accent/30" />
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-stretch">
        {/* Input Side */}
        <div className="bg-white p-8 lg:p-12 rounded-[48px] border border-primary/5 shadow-sm flex flex-col">
          <div className="flex items-center justify-between mb-8">
             <h4 className="text-lg font-bold text-primary flex items-center gap-3">
                {meta.icon}
                <span>Input Workspace</span>
             </h4>
             {input && (
               <button onClick={() => { setInput(''); setOutput(null); }} className="text-[10px] font-black text-red-400 uppercase tracking-widest hover:text-red-600 transition-colors">
                 Clear
               </button>
             )}
          </div>

          <div className="space-y-6 flex-1 flex flex-col">
            <p className="text-xs text-primary/50 leading-relaxed font-medium">
              Provide the source material for the cognitive engine to process. This module identifies linguistic patterns and logic models.
            </p>

            {/* Tool-Specific Controls */}
            {toolId === 'analogical-instructor' && (
              <div className="flex gap-2">
                 {['Sports', 'Cooking', 'Nature', 'Tech'].map(cat => (
                   <button key={cat} onClick={() => setAnalogyCategory(cat)} className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all ${analogyCategory === cat ? 'bg-yellow-500 text-white shadow-md' : 'bg-primary/5 text-primary/30'}`}>{cat}</button>
                 ))}
              </div>
            )}

            {toolId === 'linguistic-bridge' && (
              <div className="flex gap-2">
                 {['Hinglish', 'Tamlish', 'Benglish'].map(d => (
                   <button key={d} onClick={() => setDialect(d)} className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all ${dialect === d ? 'bg-pink-500 text-white shadow-md' : 'bg-primary/5 text-primary/30'}`}>{d}</button>
                 ))}
              </div>
            )}
            
            <textarea 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={meta.placeholder}
              className="flex-1 w-full bg-[#F5F7FA] border border-primary/5 rounded-[32px] p-8 text-sm font-medium focus:ring-2 focus:ring-accent outline-none transition-all placeholder:text-primary/20 resize-none min-h-[280px]"
            />

            <button 
              onClick={handleProcess}
              disabled={loading || !input.trim()}
              className="w-full bg-[#0B1C2D] hover:bg-primary/90 text-white py-5 rounded-2xl font-bold text-sm shadow-xl shadow-primary/10 transition-all flex items-center justify-center gap-3 disabled:opacity-30"
            >
              {loading ? <RefreshCcw className="animate-spin" size={18} /> : <Send size={18} />}
              <span>{meta.buttonText}</span>
            </button>
          </div>
        </div>

        {/* Output Side */}
        <div className="bg-white p-8 lg:p-12 rounded-[48px] border border-primary/5 shadow-sm flex flex-col relative overflow-hidden">
          <div className="flex items-center justify-between mb-8">
             <h4 className="text-lg font-bold text-primary flex items-center gap-2">
                <GraduationCap size={18} className="text-accent" />
                <span>Synthesis Dashboard</span>
             </h4>
             {output && (
               <button onClick={handleCopy} className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${isCopied ? 'text-accent' : 'text-primary/30'}`}>
                 {isCopied ? <Check size={14} /> : <Copy size={14} />}
                 <span>{isCopied ? 'Copied' : 'Copy'}</span>
               </button>
             )}
          </div>

          <div className="flex-1 bg-[#F8FAFC] border border-primary/5 rounded-[32px] p-8 relative overflow-y-auto max-h-[600px] shadow-inner">
            {output ? (
              <div className="whitespace-pre-wrap text-sm text-primary/70 leading-relaxed space-y-6 font-medium font-medium animate-in fade-in duration-500">
                {output}
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-30">
                 <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mb-4">
                    {meta.icon}
                 </div>
                 <p className="text-xs font-bold uppercase tracking-widest">Awaiting Input Material</p>
                 <p className="text-[10px] font-medium leading-relaxed max-w-[200px] italic">
                   Analysis will materialize here once the cognitive engine processes the source text.
                 </p>
              </div>
            )}

            {loading && (
              <div className="absolute inset-0 bg-white/70 backdrop-blur-md flex flex-col items-center justify-center space-y-4">
                 <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
                 <p className="text-accent font-black text-[10px] uppercase tracking-widest">Consulting Knowledge Map</p>
              </div>
            )}
          </div>

          <div className="mt-8 p-6 bg-primary rounded-3xl text-white/80 border border-white/5">
             <div className="flex items-center gap-2 mb-3">
               <ShieldAlert size={16} className="text-accent" />
               <span className="text-[10px] font-black uppercase tracking-widest">Cognitive Disclaimer</span>
             </div>
             <p className="text-[10px] leading-relaxed italic font-medium">
               This is an experimental educational aid. Logic identification is based on pattern analysis and should be verified with a professional.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabCognitiveEngine;
