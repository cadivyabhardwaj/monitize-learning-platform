
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, ArrowRight, CheckCircle, Play, History, 
  HelpCircle, RotateCcw, Lock, Zap, 
  Lightbulb, AlertCircle, BookmarkCheck, ShieldCheck, ShieldAlert
} from 'lucide-react';
import { MODULE_REGISTRY } from './modulesData';
import { View } from './types';
import { ServicesCompliance, Disclaimer } from './ComplianceSections';
import AcknowledgementModal from './AcknowledgementModal';

const ModuleDetailPage = ({ onNavigate }: { onNavigate: (view: View, subTarget?: string) => void }) => {
  const { moduleId } = useParams<{ moduleId: string }>();
  
  const module = MODULE_REGISTRY.find(m => m.id === moduleId);
  
  const [activeLevelId, setActiveLevelId] = useState(1);
  const [activeUnitIndex, setActiveUnitIndex] = useState(0);
  const [isQuizMode, setIsQuizMode] = useState(false);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [quizFeedback, setQuizFeedback] = useState<string | null>(null);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [completedLevelIds, setCompletedLevelIds] = useState<number[]>([]);
  const [showAcknowledgement, setShowAcknowledgement] = useState(false);

  // Load progress on mount
  useEffect(() => {
    if (!moduleId) return;
    const saved = localStorage.getItem(`monitize_progress_${moduleId}`);
    if (saved) {
      const data = JSON.parse(saved);
      setCompletedLevelIds(data.completedLevelIds || []);
      if (data.activeLevelId) setActiveLevelId(data.activeLevelId);
    }
  }, [moduleId]);

  // Save progress on changes
  useEffect(() => {
    if (!moduleId) return;
    const progressData = {
      activeLevelId,
      completedLevelIds
    };
    localStorage.setItem(`monitize_progress_${moduleId}`, JSON.stringify(progressData));
  }, [activeLevelId, completedLevelIds, moduleId]);

  if (!module) {
    return (
      <div className="pt-40 text-center">
        <h2 className="text-2xl font-bold">Module Not Found</h2>
        <button onClick={() => onNavigate('learn')} className="text-accent mt-4 underline">Back to tracks</button>
      </div>
    );
  }

  const activeLevel = module.levels.find(l => l.id === activeLevelId)!;
  const activeUnit = activeLevel?.units[activeUnitIndex];
  const activeQuiz = activeLevel?.quiz[currentQuizIndex];

  // Early return if data is empty (for placeholders)
  if (!activeLevel || (!activeUnit && !isQuizMode)) {
    return (
      <div className="pt-40 px-6 max-w-4xl mx-auto text-center space-y-10">
        <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mx-auto text-primary/20">
          <History size={40} />
        </div>
        <div>
           <h2 className="text-2xl font-bold text-primary mb-4">Module Content Expanding</h2>
           <p className="text-primary/40 font-medium">Level {activeLevelId} of "{module.title}" is currently under statutory review. Check back shortly.</p>
        </div>
        <button onClick={() => onNavigate('learn')} className="px-8 py-3 bg-primary text-white rounded-xl font-bold text-xs uppercase tracking-widest">Return to Track Registry</button>
      </div>
    );
  }

  const handleNext = () => {
    if (activeUnitIndex < activeLevel.units.length - 1) {
      setActiveUnitIndex(activeUnitIndex + 1);
    } else {
      setIsQuizMode(true);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuizSubmit = (optionId: string) => {
    setSelectedOptionId(optionId);
    const option = activeQuiz.options.find(o => o.id === optionId);
    setQuizFeedback(option?.explanation || "");
  };

  const handleNextQuiz = () => {
    if (currentQuizIndex < activeLevel.quiz.length - 1) {
      setCurrentQuizIndex(currentQuizIndex + 1);
      setQuizFeedback(null);
      setSelectedOptionId(null);
    } else {
      // Level Complete
      const nextCompleted = Array.from(new Set([...completedLevelIds, activeLevelId]));
      setCompletedLevelIds(nextCompleted);
      setShowAcknowledgement(true);
    }
  };

  const closeAcknowledgement = () => {
    setShowAcknowledgement(false);
    if (activeLevelId < module.levels.length) {
      setActiveLevelId(activeLevelId + 1);
      setActiveUnitIndex(0);
      setIsQuizMode(false);
      setCurrentQuizIndex(0);
      setQuizFeedback(null);
      setSelectedOptionId(null);
    } else {
      onNavigate('learn');
    }
  };

  const progress = Math.round((completedLevelIds.length / module.levels.length) * 100);

  return (
    <div className="animate-in fade-in duration-700 bg-background min-h-screen pb-24">
      {showAcknowledgement && (
        <AcknowledgementModal 
          userName="Member" 
          moduleName={module.title}
          level={activeLevelId}
          onClose={closeAcknowledgement}
        />
      )}

      {/* Module Hero */}
      <section className="pt-40 pb-16 bg-primary text-white px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <button 
            onClick={() => onNavigate('learn')}
            className="flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-8 uppercase text-[10px] font-black tracking-widest"
          >
            <ArrowLeft size={16} /> Back to Learning Paths
          </button>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <h1 className="text-3xl lg:text-5xl font-poppins font-bold mb-4 tracking-tight">{module.title}</h1>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-[10px] font-black uppercase tracking-widest border border-accent/20">
                  {module.estimatedEffort} Track
                </span>
                <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">
                  Level {activeLevelId} of {module.levels.length}
                </span>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 p-4 rounded-3xl backdrop-blur-sm min-w-[160px]">
               <div className="flex justify-between items-center mb-2">
                 <span className="text-[9px] font-black text-white/30 uppercase tracking-widest">Logic Progress</span>
                 <span className="text-xs font-bold text-accent">{progress}%</span>
               </div>
               <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                 <div className="h-full bg-accent transition-all duration-1000" style={{ width: `${progress}%` }} />
               </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
      </section>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 py-16">
        {/* Unit Navigation Sidebar */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-[40px] p-8 border border-primary/5 shadow-sm sticky top-32">
            <h3 className="text-[10px] font-black text-primary/30 uppercase tracking-[0.3em] mb-8">Curriculum Map</h3>
            <div className="space-y-3">
              {module.levels.map((level) => (
                <div key={level.id} className={`p-5 rounded-2xl border transition-all ${activeLevelId === level.id ? 'bg-accent/5 border-accent shadow-sm' : 'border-primary/5 bg-background/50'}`}>
                   <div className="flex items-center gap-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-black ${completedLevelIds.includes(level.id) ? 'bg-accent text-white' : 'bg-primary/5 text-primary/40'}`}>
                        {completedLevelIds.includes(level.id) ? <CheckCircle size={16} /> : level.id}
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-primary">{level.title}</h4>
                        <p className="text-[9px] text-primary/40 uppercase font-black tracking-tighter">{level.badge}</p>
                      </div>
                   </div>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-12 border-t border-primary/5">
               <div className="bg-primary rounded-3xl p-6 text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <p className="text-[8px] font-black uppercase tracking-[0.2em] text-accent mb-2">Legal Context</p>
                    <p className="text-[10px] text-white/40 leading-relaxed italic">
                      This content is calibrated to {module.compliance.regulatoryReferences[0] || 'Standard Logic'}. Last verified {module.compliance.lastReviewedDate}.
                    </p>
                  </div>
                  <History size={40} className="absolute -bottom-4 -right-4 text-white/5" />
               </div>
            </div>
          </div>
        </aside>

        {/* Content Area */}
        <main className="lg:col-span-8">
          {!isQuizMode ? (
            <article className="bg-white rounded-[48px] p-8 lg:p-16 border border-primary/5 shadow-sm space-y-12 animate-in slide-in-from-right-4 duration-500">
               <header className="flex justify-between items-start">
                  <div className="space-y-1">
                    <p className="text-[10px] font-black text-accent uppercase tracking-widest">
                      Unit {activeUnitIndex + 1} of {activeLevel.units.length}
                    </p>
                    <h2 className="text-3xl font-poppins font-bold text-primary tracking-tight">{activeUnit.title}</h2>
                  </div>
                  <div className="bg-primary/5 px-3 py-1 rounded-full flex items-center gap-2">
                    <History size={12} className="text-primary/20" />
                    <span className="text-[9px] font-black text-primary/40 uppercase tracking-tighter">{activeUnit.durationMins}m read</span>
                  </div>
               </header>

               <section className="bg-emerald-50/50 border border-emerald-100 rounded-3xl p-6 flex items-start gap-4">
                  <Lightbulb className="text-accent shrink-0" size={24} />
                  <div className="space-y-1">
                    <p className="text-[10px] font-black text-accent uppercase tracking-widest">Why this matters</p>
                    <p className="text-sm text-primary/70 leading-relaxed font-medium italic">
                      {activeUnit.whyThisMatters}
                    </p>
                  </div>
               </section>

               <div className="prose prose-lg text-primary/70 max-w-none leading-relaxed font-medium">
                  {typeof activeUnit.content === 'string' ? <p>{activeUnit.content}</p> : activeUnit.content}
               </div>

               <section className="bg-primary text-white rounded-[32px] p-8 border border-white/5 relative overflow-hidden group">
                  <div className="relative z-10 flex items-center justify-between gap-8">
                    <div className="space-y-1">
                      <p className="text-[10px] font-black text-accent uppercase tracking-widest">Actionable Next Step</p>
                      <p className="text-sm font-bold text-white/90">{activeUnit.actionableNextStep}</p>
                    </div>
                    <button className="p-3 bg-white/10 rounded-xl hover:bg-accent transition-all group-hover:scale-110">
                      <BookmarkCheck size={20} className="text-white" />
                    </button>
                  </div>
                  <div className="absolute top-0 left-0 w-1 h-full bg-accent" />
               </section>

               <footer className="pt-12 border-t border-primary/5 flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={handleNext}
                    className="flex-1 bg-primary text-white py-6 rounded-3xl font-bold text-sm shadow-xl shadow-primary/10 hover:bg-primary/95 transition-all flex items-center justify-center gap-3 group"
                  >
                    <span>{activeUnitIndex === activeLevel.units.length - 1 ? 'Go to Level Checkpoint' : 'Continue Logic Path'}</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  {activeUnitIndex > 0 && (
                    <button 
                      onClick={() => setActiveUnitIndex(activeUnitIndex - 1)}
                      className="flex-1 bg-[#F5F7FA] text-primary/40 py-6 rounded-3xl font-bold text-sm hover:bg-primary/5 transition-all"
                    >
                      Previous Unit
                    </button>
                  )}
               </footer>
            </article>
          ) : (
            <section className="bg-white rounded-[48px] p-8 lg:p-16 border border-primary/5 shadow-sm space-y-12 animate-in zoom-in-95 duration-500">
               <div className="text-center">
                  <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-6 py-2 mb-8 text-accent font-black text-[10px] uppercase tracking-[0.3em]">
                    <HelpCircle size={16} /><span>Level {activeLevelId} Checkpoint</span>
                  </div>
                  <h2 className="text-3xl font-poppins font-bold text-primary tracking-tight">Conceptual Reflection</h2>
                  <p className="text-primary/40 mt-3 text-sm font-medium">Verify your understanding of the frameworks covered.</p>
               </div>

               <div className="max-w-2xl mx-auto space-y-8">
                  <div className="flex items-center justify-center gap-2">
                    {activeLevel.quiz.map((_, i) => (
                      <div key={i} className={`h-1 rounded-full transition-all duration-500 ${i === currentQuizIndex ? 'w-8 bg-accent' : i < currentQuizIndex ? 'w-2 bg-accent/40' : 'w-2 bg-primary/10'}`} />
                    ))}
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-primary text-center leading-relaxed">
                    "{activeQuiz.question}"
                  </h3>

                  <div className="grid gap-4">
                    {activeQuiz.options.map((opt) => (
                      <button 
                        key={opt.id}
                        disabled={!!quizFeedback}
                        onClick={() => handleQuizSubmit(opt.id)}
                        className={`w-full p-6 rounded-3xl border text-left transition-all ${
                          selectedOptionId === opt.id 
                            ? opt.id === activeQuiz.correctOptionId ? 'bg-accent/5 border-accent' : 'bg-red-50 border-red-200' 
                            : 'bg-background border-primary/5 hover:border-accent/20'
                        } ${!!quizFeedback && opt.id !== selectedOptionId ? 'opacity-40' : ''}`}
                      >
                         <div className="flex items-center justify-between gap-4">
                           <span className="text-sm font-bold text-primary/80">{opt.text}</span>
                           {selectedOptionId === opt.id && (
                             opt.id === activeQuiz.correctOptionId ? <CheckCircle className="text-accent shrink-0" /> : <AlertCircle className="text-red-400 shrink-0" />
                           )}
                         </div>
                      </button>
                    ))}
                  </div>

                  {quizFeedback && (
                    <div className="animate-in slide-in-from-bottom-6 duration-500 space-y-8">
                       <div className={`p-8 rounded-[32px] border ${selectedOptionId === activeQuiz.correctOptionId ? 'bg-accent/5 border-accent/20' : 'bg-primary/5 border-primary/10'}`}>
                          <div className="flex items-center gap-2 mb-4">
                             <Zap size={16} className={selectedOptionId === activeQuiz.correctOptionId ? 'text-accent' : 'text-primary/40'} />
                             <span className="text-[10px] font-black uppercase tracking-widest text-primary/30">Logical Insight</span>
                          </div>
                          <p className="text-sm text-primary/70 leading-relaxed font-medium italic">{quizFeedback}</p>
                       </div>
                       <div className="flex flex-col sm:flex-row gap-4">
                          <button 
                            onClick={handleNextQuiz}
                            className="flex-1 bg-primary text-white py-6 rounded-3xl font-bold text-sm shadow-xl shadow-primary/10 hover:bg-primary/95 transition-all flex items-center justify-center gap-3"
                          >
                            <span>{currentQuizIndex < activeLevel.quiz.length - 1 ? 'Next Question' : 'Finalize Level'}</span>
                            <ArrowRight size={20} />
                          </button>
                          {selectedOptionId !== activeQuiz.correctOptionId && (
                            <button 
                              onClick={() => { setQuizFeedback(null); setSelectedOptionId(null); }}
                              className="flex-1 bg-white border border-primary/10 text-primary/40 py-6 rounded-3xl font-bold text-sm hover:bg-primary/5 transition-all flex items-center justify-center gap-2"
                            >
                              <RotateCcw size={18} /><span>Try Again</span>
                            </button>
                          )}
                       </div>
                    </div>
                  )}
               </div>
            </section>
          )}
        </main>
      </div>

      <div className="bg-white border-t border-primary/5">
         <div className="max-w-4xl mx-auto py-12 px-6">
            <div className="bg-red-50/50 p-6 rounded-2xl border border-red-100 flex items-start gap-4">
               <ShieldAlert className="text-red-400 shrink-0 mt-1" size={24} />
               <div className="space-y-1">
                 <p className="text-[11px] text-red-900 leading-relaxed font-bold uppercase tracking-widest">Disclaimer: Educational Logic Only</p>
                 <p className="text-[10px] text-red-800 leading-relaxed font-medium">
                   Content in this level is provided for general conceptual understanding. It does not account for specific financial situations, tax facts, or recent budget changes. Always verify with a licensed professional.
                 </p>
               </div>
            </div>
         </div>
        <ServicesCompliance />
        <Disclaimer />
      </div>
    </div>
  );
};

export default ModuleDetailPage;
