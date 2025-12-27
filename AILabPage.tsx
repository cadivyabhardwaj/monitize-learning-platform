
import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, Sparkles, Beaker, Wand2, FileText, AlertCircle, 
  ShieldAlert, ChevronRight, Info, FileSearch, Type, 
  GraduationCap, Bookmark 
} from 'lucide-react';
import ImageEditorComponent from './ImageEditorComponent';
import LabJargonSimplifier from './LabJargonSimplifier';
import LabDocumentExplainer from './LabDocumentExplainer';
import LabOCRInterpreter from './LabOCRInterpreter';
import LabLearningAssistant from './LabLearningAssistant';
import LabFlashcardGenerator from './LabFlashcardGenerator';
import { ServicesCompliance, Disclaimer } from './ComplianceSections';
import { View, LabTool } from './types';

const AILabPage = ({ onNavigate }: { onNavigate: (view: View, subTarget?: string) => void }) => {
  const [activeTool, setActiveTool] = useState<LabTool>('hub');

  // Ensure scroll to top when switching between the hub and specific tools
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTool]);

  return (
    <div className="animate-in fade-in duration-700 bg-[#F8FAFC] min-h-screen">
      {/* Visual Header - Isolated Theme */}
      <section className="pt-40 pb-16 bg-[#0B1C2D] text-white px-6 relative overflow-hidden border-b border-white/5">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => activeTool === 'hub' ? onNavigate('home') : setActiveTool('hub')} 
                className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/40 hover:text-white flex items-center gap-2 group"
                aria-label="Back"
              >
                <ArrowLeft size={20} />
                <span className="text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  {activeTool === 'hub' ? 'Exit Lab' : 'Back to Hub'}
                </span>
              </button>
              <div className="h-6 w-px bg-white/10"></div>
              <div className="flex items-center space-x-2 text-accent">
                <Beaker size={16} />
                <span className="text-xs font-bold uppercase tracking-widest">Innovation Lab (BETA)</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-3 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full">
              <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></div>
              <span className="text-[9px] font-black uppercase tracking-widest text-white/40">Auxiliary Utilities Only</span>
            </div>
          </div>
          
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-poppins font-bold mb-6 tracking-tight">
              {activeTool === 'hub' ? 'Experimental Sandbox' : 
               activeTool === 'image-processor' ? 'Document Vision Lab' : 
               activeTool === 'jargon-simplifier' ? 'Jargon Decoder Lab' : 
               activeTool === 'document-explainer' ? 'Document Explainer Lab' :
               activeTool === 'learning-assistant' ? 'Learning Assistant Lab' :
               activeTool === 'flashcard-generator' ? 'Recall Catalyst Lab' :
               'OCR Interpreter Lab'}
            </h1>
            <p className="text-white/40 text-sm lg:text-lg font-medium leading-relaxed">
              Exploring the intersection of generative logic and administrative workflows. These tools are experimental, auxiliary, and explicitly non-financial.
            </p>
          </div>
        </div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
      </section>

      {/* Experimental Warning Banner */}
      <div className="bg-orange-50 border-b border-orange-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center gap-4 text-orange-800">
          <ShieldAlert size={20} className="shrink-0" />
          <p className="text-xs font-bold uppercase tracking-wide">
            NOTICE: Do not upload sensitive identity documents (Aadhaar, PAN, Passports) or private financial statements to these experimental modules.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {activeTool === 'hub' ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in slide-in-from-bottom-4 duration-500">
            {/* Tool Card 1 */}
            <button 
              onClick={() => setActiveTool('image-processor')}
              className="bg-white p-8 rounded-[40px] border border-primary/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all text-left group flex flex-col"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                <Wand2 size={24} />
              </div>
              <h3 className="text-xl font-poppins font-bold text-primary mb-3">Document Vision</h3>
              <p className="text-primary/60 text-xs leading-relaxed mb-8 flex-1">
                Experimental image processing to sharpen captures or improve text contrast.
              </p>
              <div className="flex items-center justify-between pt-6 border-t border-primary/5 mt-auto">
                <span className="text-[9px] font-black uppercase tracking-widest text-primary/30">Capture Support</span>
                <ChevronRight size={16} className="text-accent group-hover:translate-x-1 transition-transform" />
              </div>
            </button>

            {/* Tool Card 2 */}
            <button 
              onClick={() => setActiveTool('jargon-simplifier')}
              className="bg-white p-8 rounded-[40px] border border-primary/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all text-left group flex flex-col"
            >
              <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
                <FileText size={24} />
              </div>
              <h3 className="text-xl font-poppins font-bold text-primary mb-3">Jargon Decoder</h3>
              <p className="text-primary/60 text-xs leading-relaxed mb-8 flex-1">
                Logic-based processor that simplifies complex technical financial terms.
              </p>
              <div className="flex items-center justify-between pt-6 border-t border-primary/5 mt-auto">
                <span className="text-[9px] font-black uppercase tracking-widest text-primary/30">Literacy Utility</span>
                <ChevronRight size={16} className="text-blue-500 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>

            {/* Tool Card 3 */}
            <button 
              onClick={() => setActiveTool('learning-assistant')}
              className="bg-white p-8 rounded-[40px] border border-primary/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all text-left group flex flex-col"
            >
              <div className="w-12 h-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-500 mb-6 group-hover:scale-110 transition-transform">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-xl font-poppins font-bold text-primary mb-3">Learning Assistant</h3>
              <p className="text-primary/60 text-xs leading-relaxed mb-8 flex-1">
                Summarize educational modules into retention-friendly revision notes.
              </p>
              <div className="flex items-center justify-between pt-6 border-t border-primary/5 mt-auto">
                <span className="text-[9px] font-black uppercase tracking-widest text-primary/30">Knowledge Support</span>
                <ChevronRight size={16} className="text-indigo-500 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>

            {/* Tool Card 4 */}
            <button 
              onClick={() => setActiveTool('flashcard-generator')}
              className="bg-white p-8 rounded-[40px] border border-primary/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all text-left group flex flex-col"
            >
              <div className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform">
                <Bookmark size={24} />
              </div>
              <h3 className="text-xl font-poppins font-bold text-primary mb-3">Recall Catalyst</h3>
              <p className="text-primary/60 text-xs leading-relaxed mb-8 flex-1">
                Convert dense financial concepts into high-retention recall flashcards.
              </p>
              <div className="flex items-center justify-between pt-6 border-t border-primary/5 mt-auto">
                <span className="text-[9px] font-black uppercase tracking-widest text-primary/30">Memory Utility</span>
                <ChevronRight size={16} className="text-orange-500 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>

            {/* Tool Card 5 */}
            <button 
              onClick={() => setActiveTool('document-explainer')}
              className="bg-white p-8 rounded-[40px] border border-primary/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all text-left group flex flex-col"
            >
              <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-500 mb-6 group-hover:scale-110 transition-transform">
                <FileSearch size={24} />
              </div>
              <h3 className="text-xl font-poppins font-bold text-primary mb-3">Document Explainer</h3>
              <p className="text-primary/60 text-xs leading-relaxed mb-8 flex-1">
                Identify sections and understand the structure of Indian financial documents.
              </p>
              <div className="flex items-center justify-between pt-6 border-t border-primary/5 mt-auto">
                <span className="text-[9px] font-black uppercase tracking-widest text-primary/30">Structural Review</span>
                <ChevronRight size={16} className="text-emerald-500 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>

            {/* Tool Card 6 */}
            <button 
              onClick={() => setActiveTool('ocr-interpreter')}
              className="bg-white p-8 rounded-[40px] border border-primary/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all text-left group flex flex-col"
            >
              <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-500 mb-6 group-hover:scale-110 transition-transform">
                <Type size={24} />
              </div>
              <h3 className="text-xl font-poppins font-bold text-primary mb-3">OCR Interpreter</h3>
              <p className="text-primary/60 text-xs leading-relaxed mb-8 flex-1">
                Extract text from documents and receive simplified educational context.
              </p>
              <div className="flex items-center justify-between pt-6 border-t border-primary/5 mt-auto">
                <span className="text-[9px] font-black uppercase tracking-widest text-primary/30">Extraction & Logic</span>
                <ChevronRight size={16} className="text-purple-500 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>

            {/* Compliance Note for Hub */}
            <div className="md:col-span-2 lg:col-span-3 mt-8 p-8 bg-primary/[0.02] border border-primary/5 rounded-[40px] flex items-start gap-6">
              <Info className="text-primary/20 shrink-0 mt-1" size={24} />
              <div className="text-xs text-primary/50 leading-relaxed italic">
                The "AI Innovation Lab" serves as a sandbox for non-core features. These utilities use large language models and computer vision algorithms which may produce inaccurate or biased results. They are provided "as-is" for auxiliary administrative convenience and do not constitute professional fintech services.
              </div>
            </div>
          </div>
        ) : (
          <div className="animate-in fade-in zoom-in-95 duration-500">
            {activeTool === 'image-processor' && <ImageEditorComponent onNavigate={onNavigate} />}
            {activeTool === 'jargon-simplifier' && <LabJargonSimplifier onNavigate={onNavigate} />}
            {activeTool === 'document-explainer' && <LabDocumentExplainer onNavigate={onNavigate} />}
            {activeTool === 'ocr-interpreter' && <LabOCRInterpreter onNavigate={onNavigate} />}
            {activeTool === 'learning-assistant' && <LabLearningAssistant onNavigate={onNavigate} />}
            {activeTool === 'flashcard-generator' && <LabFlashcardGenerator onNavigate={onNavigate} />}
            
            <div className="mt-12 text-center">
              <button 
                onClick={() => setActiveTool('hub')}
                className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-primary/40 hover:text-accent transition-colors"
              >
                <ArrowLeft size={14} />
                <span>Return to Lab Selection</span>
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
