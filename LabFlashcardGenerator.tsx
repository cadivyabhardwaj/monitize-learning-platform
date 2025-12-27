
import React, { useState } from 'react';
import { 
  FileText, RefreshCcw, Sparkles, X, Info, 
  Layers, ChevronRight, ChevronLeft, 
  RotateCw, AlertCircle, Bookmark, Tag, CheckCircle2, GraduationCap
} from 'lucide-react';
import { gemini } from './geminiService';
import { Flashcard, View } from './types';

const LabFlashcardGenerator = ({ onNavigate }: { onNavigate: (view: View) => void }) => {
  const [inputText, setInputText] = useState('');
  const [cards, setCards] = useState<Flashcard[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleGenerate = async () => {
    if (!inputText.trim()) return;
    setLoading(true);
    try {
      const response = await gemini.generateFlashcards(inputText);
      setCards(response);
      setCurrentIndex(0);
      setIsFlipped(false);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const clear = () => {
    setInputText('');
    setCards([]);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const nextCard = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 150);
  };

  const prevCard = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
    }, 150);
  };

  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case 'basic': return 'bg-emerald-50 text-emerald-600 border-emerald-100';
      case 'intermediate': return 'bg-blue-50 text-blue-600 border-blue-100';
      case 'advanced': return 'bg-orange-50 text-orange-600 border-orange-100';
      default: return 'bg-primary/5 text-primary/40 border-primary/10';
    }
  };

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'definition': return 'bg-purple-50 text-purple-600 border-purple-100';
      case 'logic': return 'bg-indigo-50 text-indigo-600 border-indigo-100';
      case 'distinction': return 'bg-pink-50 text-pink-600 border-pink-100';
      case 'clarification': return 'bg-amber-50 text-amber-600 border-amber-100';
      default: return 'bg-primary/5 text-primary/40 border-primary/10';
    }
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8 items-stretch">
      {/* Input Side */}
      <div className="bg-white p-8 lg:p-12 rounded-[48px] border border-primary/5 shadow-sm flex flex-col">
        <div className="flex items-center justify-between mb-8">
           <h4 className="text-lg font-bold text-primary flex items-center gap-2">
              <FileText size={18} className="text-orange-500" />
              <span>Context Source</span>
           </h4>
           {inputText && (
             <button onClick={clear} className="text-[10px] font-black text-red-400 uppercase tracking-widest hover:text-red-600 transition-colors flex items-center gap-1">
               <X size={12} /> Wipe Lab
             </button>
           )}
        </div>

        <div className="space-y-6 flex-1 flex flex-col">
          <p className="text-xs text-primary/50 leading-relaxed font-medium">
            Paste educational material below (e.g., definitions of capital gains, rules of GST registration, or emergency fund logic).
          </p>

          <button 
            onClick={() => onNavigate('learn')}
            className="w-fit flex items-center gap-2 px-4 py-2 bg-orange-50 border border-orange-100 rounded-xl text-[10px] font-black uppercase tracking-widest text-orange-600 hover:bg-orange-100 transition-colors"
          >
            <GraduationCap size={14} />
            <span>Study Educational Tracks First</span>
            <ChevronRight size={12} />
          </button>
          
          <textarea 
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Paste technical text or module summaries here..."
            className="flex-1 w-full bg-[#F5F7FA] border border-primary/5 rounded-[32px] p-8 text-sm font-medium focus:ring-2 focus:ring-orange-500 outline-none transition-all placeholder:text-primary/20 resize-none min-h-[300px]"
          />

          <button 
            onClick={handleGenerate}
            disabled={loading || !inputText.trim()}
            className="w-full bg-[#0B1C2D] hover:bg-primary/90 text-white py-5 rounded-2xl font-bold text-sm shadow-xl shadow-primary/10 transition-all flex items-center justify-center gap-3 disabled:opacity-30"
          >
            {loading ? <RefreshCcw className="animate-spin" size={18} /> : <Layers size={18} className="text-orange-400" />}
            <span>Generate Recall Cards</span>
          </button>
        </div>

        {/* Quality Standards Info */}
        <div className="mt-8 p-6 bg-[#F8FAFC] rounded-3xl border border-primary/5">
           <h5 className="text-[10px] font-black text-primary/40 uppercase tracking-widest mb-4 flex items-center gap-2">
             <CheckCircle2 size={12} className="text-accent" />
             Recall Generation Standards
           </h5>
           <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              <li className="text-[9px] text-primary/50 font-medium flex items-start gap-1.5 italic">
                • One idea per card
              </li>
              <li className="text-[9px] text-primary/50 font-medium flex items-start gap-1.5 italic">
                • Active recall focus
              </li>
              <li className="text-[9px] text-primary/50 font-medium flex items-start gap-1.5 italic">
                • Precise prompts only
              </li>
              <li className="text-[9px] text-primary/50 font-medium flex items-start gap-1.5 italic">
                • Fact-based synthesis
              </li>
           </ul>
        </div>
      </div>

      {/* Output Side - Flashcard UI */}
      <div className="bg-white p-8 lg:p-12 rounded-[48px] border border-primary/5 shadow-sm flex flex-col relative overflow-hidden">
        <div className="flex items-center justify-between mb-8">
           <h4 className="text-lg font-bold text-primary flex items-center gap-2">
              <Bookmark size={18} className="text-orange-500" />
              <span>Active Recall Cards</span>
           </h4>
           {cards.length > 0 && (
             <div className="flex items-center gap-2">
                <div className="px-3 py-1 bg-orange-50 border border-orange-100 rounded-full">
                  <span className="text-[9px] font-black uppercase tracking-widest text-orange-500">
                    {currentIndex + 1} / {cards.length}
                  </span>
                </div>
             </div>
           )}
        </div>

        <div className="flex-1 flex flex-col items-center justify-center space-y-12">
          {cards.length > 0 ? (
            <div className="w-full max-w-sm flex flex-col items-center space-y-8 animate-in fade-in duration-500">
              
              {/* Tags Indicator */}
              <div className="flex items-center gap-2 mb-2 animate-in slide-in-from-top-2">
                 <span className={`px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest border transition-colors ${getDifficultyColor(cards[currentIndex].difficulty)}`}>
                   {cards[currentIndex].difficulty}
                 </span>
                 <span className={`px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest border transition-colors ${getCategoryColor(cards[currentIndex].category)}`}>
                   {cards[currentIndex].category}
                 </span>
              </div>

              {/* Card Container */}
              <div 
                onClick={() => setIsFlipped(!isFlipped)}
                className="relative w-full aspect-[4/3] perspective-1000 cursor-pointer group"
              >
                <div className={`relative w-full h-full transition-all duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
                  {/* Front */}
                  <div className="absolute inset-0 bg-[#F8FAFC] border border-primary/5 rounded-[40px] shadow-sm flex items-center justify-center p-10 backface-hidden group-hover:shadow-md transition-shadow">
                     <p className="text-lg font-bold text-primary text-center leading-relaxed">
                        {cards[currentIndex].front}
                     </p>
                     <div className="absolute bottom-6 right-8 flex items-center gap-1.5 opacity-20 group-hover:opacity-40 transition-opacity">
                        <RotateCw size={12} />
                        <span className="text-[8px] font-black uppercase tracking-widest">Flip Card</span>
                     </div>
                  </div>
                  {/* Back */}
                  <div className="absolute inset-0 bg-[#0B1C2D] border border-white/10 rounded-[40px] shadow-2xl flex items-center justify-center p-10 backface-hidden rotate-y-180">
                     <p className="text-sm font-medium text-white/80 text-center leading-relaxed italic">
                        {cards[currentIndex].back}
                     </p>
                     <div className="absolute bottom-6 left-8 flex items-center gap-1.5 opacity-40">
                        <RotateCw size={12} className="text-orange-400" />
                        <span className="text-[8px] font-black uppercase tracking-widest text-white/40">Conceptual Logic</span>
                     </div>
                  </div>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-6">
                <button 
                  onClick={(e) => { e.stopPropagation(); prevCard(); }}
                  className="p-4 bg-[#F5F7FA] border border-primary/5 rounded-2xl hover:bg-primary/5 transition-all text-primary/40 hover:text-primary"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={() => setIsFlipped(!isFlipped)}
                  className="px-8 py-3 bg-white border border-primary/5 rounded-2xl font-black text-[10px] uppercase tracking-widest text-primary/40 hover:bg-primary/[0.02] transition-colors"
                >
                  {isFlipped ? 'Show Prompt' : 'Reveal Answer'}
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); nextCard(); }}
                  className="p-4 bg-[#F5F7FA] border border-primary/5 rounded-2xl hover:bg-primary/5 transition-all text-primary/40 hover:text-primary"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-30">
               <Layers size={48} className="text-primary/20" />
               <p className="text-xs font-bold uppercase tracking-widest">Awaiting Material</p>
               <p className="text-[10px] font-medium leading-relaxed max-w-[200px] italic">
                 Generated recall cards with difficulty tags and categories will appear here.
               </p>
            </div>
          )}

          {loading && (
            <div className="absolute inset-0 bg-white/70 backdrop-blur-md flex flex-col items-center justify-center space-y-4 z-20">
               <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
               <div className="text-center">
                  <p className="text-orange-600 font-black text-[10px] uppercase tracking-[0.3em] mb-1">Applying Academic Logic</p>
                  <p className="text-primary/20 text-[9px] font-bold uppercase tracking-widest italic">Formatting Cards...</p>
               </div>
            </div>
          )}
        </div>

        <div className="mt-8 p-6 bg-orange-50 rounded-3xl border border-orange-100 flex items-start gap-4">
           <AlertCircle className="text-orange-500 shrink-0 mt-0.5" size={18} />
           <p className="text-[10px] text-orange-800 leading-relaxed font-medium italic">
             Recall cards are experimental utilities for study reinforcement. They are not substitutes for statutory review or professional assessment.
           </p>
        </div>
      </div>

      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
    </div>
  );
};

export default LabFlashcardGenerator;
