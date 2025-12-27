
import React, { useState } from 'react';
import { BookOpen, Sparkles, RefreshCcw, Info, X, Layout, FileText, GraduationCap, Copy, Check, ListChecks, ChevronRight } from 'lucide-react';
import { gemini } from './geminiService';
import { View } from './types';

const LabLearningAssistant = ({ onNavigate }: { onNavigate: (view: View) => void }) => {
  const [inputText, setInputText] = useState('');
  const [notes, setNotes] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState('First-Time Learner Summary');
  const [isCopied, setIsCopied] = useState(false);

  const modes = [
    { label: 'First-Time', full: 'First-Time Learner Summary', icon: <BookOpen size={14} /> },
    { label: 'Revision', full: 'Ultra-Short Revision', icon: <Sparkles size={14} /> },
    { label: 'Exam-Style', full: 'Exam-Style Notes', icon: <ListChecks size={14} /> }
  ];

  const handleGenerate = async () => {
    if (!inputText.trim()) return;
    setLoading(true);
    try {
      const response = await gemini.generateLearningNotes(inputText, mode);
      setNotes(response);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const clear = () => {
    setInputText('');
    setNotes(null);
  };

  const copyToClipboard = async () => {
    if (!notes) return;
    try {
      await navigator.clipboard.writeText(notes);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy notes:", err);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="grid lg:grid-cols-2 gap-8 items-stretch">
        {/* Input Pane */}
        <div className="bg-white p-8 lg:p-12 rounded-[48px] border border-primary/5 shadow-sm flex flex-col">
          <div className="flex items-center justify-between mb-8">
             <h4 className="text-lg font-bold text-primary flex items-center gap-2">
                <FileText size={18} className="text-indigo-500" />
                <span>Source Material</span>
             </h4>
             {inputText && (
               <button onClick={clear} className="text-[10px] font-black text-red-400 uppercase tracking-widest hover:text-red-600 transition-colors flex items-center gap-1">
                 <X size={12} /> Wipe Lab
               </button>
             )}
          </div>

          <div className="space-y-6 flex-1 flex flex-col">
            <p className="text-xs text-primary/50 leading-relaxed font-medium">
              Input educational paragraphs or technical explanations below. The assistant will re-format them into academic, structured learning notes.
            </p>

            <button 
              onClick={() => onNavigate('learn')}
              className="w-fit flex items-center gap-2 px-4 py-2 bg-indigo-50 border border-indigo-100 rounded-xl text-[10px] font-black uppercase tracking-widest text-indigo-600 hover:bg-indigo-100 transition-colors"
            >
              <GraduationCap size={14} />
              <span>Study Core Tracks First</span>
              <ChevronRight size={12} />
            </button>
            
            <div className="space-y-3 pt-4">
              <label className="text-[10px] font-black text-primary/30 uppercase tracking-widest ml-1">Synthesis Mode</label>
              <div className="flex flex-wrap gap-2">
                {modes.map(m => (
                  <button
                    key={m.full}
                    onClick={() => setMode(m.full)}
                    className={`px-4 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all flex items-center gap-2 border ${mode === m.full ? 'bg-indigo-500 border-indigo-500 text-white shadow-lg' : 'bg-[#F8FAFC] border-primary/5 text-primary/40 hover:bg-primary/5'}`}
                  >
                    {m.icon}
                    <span>{m.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <textarea 
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Paste content here (e.g. description of Section 80C, definitions of market volatility, GST mechanisms...)"
              className="flex-1 w-full bg-[#F5F7FA] border border-primary/5 rounded-[32px] p-8 text-sm font-medium focus:ring-2 focus:ring-indigo-500 outline-none transition-all placeholder:text-primary/20 resize-none min-h-[300px]"
            />

            <button 
              onClick={handleGenerate}
              disabled={loading || !inputText.trim()}
              className="w-full bg-[#0B1C2D] hover:bg-primary/90 text-white py-5 rounded-2xl font-bold text-sm shadow-xl shadow-primary/10 transition-all flex items-center justify-center gap-3 disabled:opacity-30"
            >
              {loading ? <RefreshCcw className="animate-spin" size={18} /> : <GraduationCap size={18} className="text-indigo-400" />}
              <span>Synthesize Knowledge</span>
            </button>
          </div>
        </div>

        {/* Output Pane */}
        <div className="bg-white p-8 lg:p-12 rounded-[48px] border border-primary/5 shadow-sm flex flex-col relative overflow-hidden">
          <div className="flex items-center justify-between mb-8">
             <h4 className="text-lg font-bold text-primary flex items-center gap-2">
                <Layout size={18} className="text-indigo-500" />
                <span>Retention Notes</span>
             </h4>
             {notes && (
               <button 
                onClick={copyToClipboard}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${isCopied ? 'bg-emerald-50 text-emerald-600' : 'hover:bg-primary/5 text-primary/40'}`}
               >
                 {isCopied ? <Check size={14} /> : <Copy size={14} />}
                 <span>{isCopied ? 'Copied' : 'Copy'}</span>
               </button>
             )}
          </div>

          <div className="flex-1 bg-[#F8FAFC] border border-primary/5 rounded-[32px] p-8 relative overflow-y-auto max-h-[600px] shadow-inner">
            {notes ? (
              <div className="whitespace-pre-wrap text-sm text-primary/70 leading-relaxed space-y-6 font-medium animate-in fade-in slide-in-from-bottom-2 duration-500">
                {notes}
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-30">
                 <BookOpen size={48} className="text-primary/20" />
                 <p className="text-xs font-bold uppercase tracking-widest">Awaiting Material</p>
                 <p className="text-[10px] font-medium leading-relaxed max-w-[200px] italic">
                   The assistant will transform your input into structured notes optimized for your selected mode.
                 </p>
              </div>
            )}

            {loading && (
              <div className="absolute inset-0 bg-white/70 backdrop-blur-md flex flex-col items-center justify-center space-y-4 z-20">
                 <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
                 <div className="text-center">
                    <p className="text-indigo-600 font-black text-[10px] uppercase tracking-[0.3em] mb-1">Applying Academic Logic</p>
                    <p className="text-primary/20 text-[9px] font-bold uppercase tracking-widest italic">Formatting for Retention...</p>
                 </div>
              </div>
            )}
          </div>

          <div className="mt-8 p-6 bg-[#0B1C2D] rounded-3xl text-white/80 border border-white/5">
             <div className="flex items-center gap-2 mb-3">
               <Info size={16} className="text-accent" />
               <span className="text-[10px] font-black uppercase tracking-widest text-accent">Educational Policy</span>
             </div>
             <p className="text-[10px] leading-relaxed italic font-medium">
               These notes are for learning reinforcement only. They do not replace full modules, original statutory documents, or professional advice.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabLearningAssistant;
