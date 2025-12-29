
import React, { useState } from 'react';
import { FileText, Send, RefreshCcw, Sparkles, BookOpen, AlertCircle, Info, X, GraduationCap, ChevronRight, Lightbulb } from 'lucide-react';
import { gemini } from './geminiService';
import { View } from './types';

const LabJargonSimplifier = ({ onNavigate }: { onNavigate: (view: View) => void }) => {
  const [inputText, setInputText] = useState('');
  const [outputHtml, setOutputHtml] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSimplify = async () => {
    if (!inputText.trim()) return;
    setLoading(true);
    try {
      const response = await gemini.askFinancialQuestion(
        `EXPERIMENTAL JARGON DECODER: I have a technical text snippet. Please identify the top 3-5 technical financial terms, define them in plain English, and provide a 2-sentence 'Administrative Context' for each. 

        TEXT SNIPPET: "${inputText}"
        
        FORMAT: Return a structured list using bullet points (•). No markdown bold or hash symbols.`
      );
      setOutputHtml(response);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const clear = () => {
    setInputText('');
    setOutputHtml(null);
  };

  return (
    <div className="space-y-12">
      {/* MODULE BRIEFING HEADER */}
      <div className="bg-white p-8 rounded-[40px] border border-primary/5 shadow-sm flex flex-col md:flex-row items-center gap-8 animate-in fade-in duration-500">
        <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center shrink-0 text-blue-500">
          <FileText size={24} />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-xl font-poppins font-bold text-primary mb-2 flex items-center justify-center md:justify-start gap-2">
            <span>Module Briefing: Jargon Simplifier</span>
            <div className="px-2 py-0.5 bg-blue-100 rounded text-[8px] font-black text-blue-500 uppercase tracking-tighter">Linguistic Support</div>
          </h3>
          <p className="text-sm text-primary/60 font-medium leading-relaxed max-w-3xl">
            Translates technical Indian financial terminology into plain English. This module identifies linguistic patterns in documentation to isolate difficult terms and provide administrative context.
          </p>
        </div>
        <div className="w-px h-12 bg-primary/5 hidden md:block" />
        <div className="flex items-center gap-3">
          <Lightbulb size={24} className="text-blue-500/30" />
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-stretch">
        {/* Input Side */}
        <div className="bg-white p-8 lg:p-12 rounded-[48px] border border-primary/5 shadow-sm flex flex-col">
          <div className="flex items-center justify-between mb-8">
             <h4 className="text-lg font-bold text-primary flex items-center gap-2">
                <FileText size={18} className="text-blue-500" />
                <span>Context Input</span>
             </h4>
             {inputText && (
               <button onClick={clear} className="text-[10px] font-black text-red-400 uppercase tracking-widest hover:text-red-600 transition-colors flex items-center gap-1">
                 <X size={12} /> Clear Snippet
               </button>
             )}
          </div>

          <div className="space-y-6 flex-1 flex flex-col">
            <p className="text-xs text-primary/50 leading-relaxed font-medium">
              Paste a snippet of technical financial documentation or terminology below. The experimental decoder will attempt to extract and simplify the core jargon.
            </p>

            <button 
              onClick={() => onNavigate('market-basics')}
              className="w-fit flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-xl text-[10px] font-black uppercase tracking-widest text-blue-600 hover:bg-blue-100 transition-colors"
            >
              <GraduationCap size={14} />
              <span>Learn Market Logic First</span>
              <ChevronRight size={12} />
            </button>
            
            <textarea 
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="e.g. 'The assessee is subject to a 10% surcharge on net taxable income exceeding ₹50 lakhs under Section 87A rebate limitations...'"
              className="flex-1 w-full bg-[#F5F7FA] border border-primary/5 rounded-[32px] p-8 text-sm font-medium focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-primary/20 resize-none min-h-[240px]"
            />

            <button 
              onClick={handleSimplify}
              disabled={loading || !inputText.trim()}
              className="w-full bg-[#0B1C2D] hover:bg-primary/90 text-white py-5 rounded-2xl font-bold text-sm shadow-xl shadow-primary/10 transition-all flex items-center justify-center gap-3 disabled:opacity-30"
            >
              {loading ? <RefreshCcw className="animate-spin" size={18} /> : <Sparkles size={18} className="text-blue-400" />}
              <span>Decode Technical Jargon</span>
            </button>
          </div>
        </div>

        {/* Output Side */}
        <div className="bg-white p-8 lg:p-12 rounded-[48px] border border-primary/5 shadow-sm flex flex-col relative overflow-hidden">
          <div className="flex items-center justify-between mb-8">
             <h4 className="text-lg font-bold text-primary flex items-center gap-2">
                <BookOpen size={18} className="text-blue-500" />
                <span>Simplified Decoding</span>
             </h4>
             <div className="px-3 py-1 bg-blue-50 border border-blue-100 rounded-full">
                <span className="text-[9px] font-black uppercase tracking-widest text-blue-500">Experimental Logic</span>
             </div>
          </div>

          <div className="flex-1 bg-[#F8FAFC] border border-primary/5 rounded-[32px] p-8 relative overflow-y-auto max-h-[500px]">
            {outputHtml ? (
              <div className="whitespace-pre-wrap text-sm text-primary/70 leading-relaxed space-y-4">
                {outputHtml}
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-30">
                 <Info size={48} className="text-primary/20" />
                 <p className="text-xs font-bold uppercase tracking-widest">Awaiting Analysis</p>
                 <p className="text-[10px] font-medium leading-relaxed max-w-[200px] italic">
                   Detailed definitions and administrative context will appear here.
                 </p>
              </div>
            )}

            {loading && (
              <div className="absolute inset-0 bg-white/60 backdrop-blur-sm flex flex-col items-center justify-center space-y-4">
                 <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                 <p className="text-blue-600 font-black text-[10px] uppercase tracking-widest">Processing Language Tokens</p>
              </div>
            )}
          </div>

          <div className="mt-8 p-6 bg-blue-500/5 rounded-3xl border border-blue-500/10 flex items-start gap-4">
             <AlertCircle className="text-blue-500 shrink-0" size={18} />
             <p className="text-[10px] text-blue-800 leading-relaxed font-medium italic">
               This tool provides conceptual definitions based on linguistic analysis. It is NOT a professional interpretation of specific contracts, laws, or financial advice.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabJargonSimplifier;
