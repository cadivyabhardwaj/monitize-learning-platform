import React, { useState, useEffect, useLayoutEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle, Lock, Zap, History, Target, 
  Award, Play, Info, ShieldCheck, BookmarkCheck,
  FileJson, ArrowLeft, HelpCircle, RotateCcw, AlertCircle
} from 'lucide-react';
import { MODULE_REGISTRY } from './modulesData';
import { View, User } from './types';
import { AuditService } from './auditUtils';
import NonAdvisoryNotice from './NonAdvisoryNotice';
import LearningBreadcrumbs from './LearningBreadcrumbs';
import AcknowledgementModal from './AcknowledgementModal';

interface ModuleRunnerProps {
  user: User | null;
  onNavigate: (view: View, subTarget?: string) => void;
}

const LearningModuleRunner: React.FC<ModuleRunnerProps> = ({ user, onNavigate }) => {
  const { moduleId } = useParams<{ moduleId: string }>();
  const module = useMemo(() => MODULE_REGISTRY.find(m => m.id === moduleId), [moduleId]);

  const [viewMode, setViewMode] = useState<'overview' | 'study'>('overview');
  const [activeLevelIdx, setActiveLevelIdx] = useState(0);
  const [activeUnitIdx, setActiveUnitIdx] = useState(0);
  const [completedLevelIds, setCompletedLevelIds] = useState<number[]>([]);
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  
  // Quiz State
  const [isQuizMode, setIsQuizMode] = useState(false);
  const [currentQuizIdx, setCurrentQuizIdx] = useState(0);
  const [quizFeedback, setQuizFeedback] = useState<string | null>(null);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);

  // Mandatory "Charter of Intent" Acknowledgment at Module Entry
  const [hasConfirmedEducation, setHasConfirmedEducation] = useState(false);

  // NAVIGATION FIX: Ensure scroll to top on any state change
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [viewMode, activeLevelIdx, activeUnitIdx, isQuizMode, currentQuizIdx]);

  // Load progress on mount
  useEffect(() => {
    if (!module) return;
    AuditService.logAction('viewed', 'static', { moduleId: module.id });
    
    const saved = localStorage.getItem(`monitize_progress_${module.id}`);
    if (saved) {
      const data = JSON.parse(saved);
      if (data.completedLevelIds) setCompletedLevelIds(data.completedLevelIds);
      if (data.lastLevelIdx !== undefined) setActiveLevelIdx(data.lastLevelIdx);
    }
  }, [module]);

  const saveProgress = (nextLevelIds: number[]) => {
    if (!module) return;
    setCompletedLevelIds(nextLevelIds);
    localStorage.setItem(`monitize_progress_${module.id}`, JSON.stringify({
      completedLevelIds: nextLevelIds,
      lastLevelIdx: activeLevelIdx,
      lastUpdated: Date.now()
    }));
  };

  if (!module) return null;

  const activeLevel = module.levels[activeLevelIdx];
  const activeUnit = activeLevel?.units[activeUnitIdx];
  const activeQuiz = activeLevel?.quiz[currentQuizIdx];
  const progress = Math.round((completedLevelIds.length / module.levels.length) * 100);

  const handleBeginTrack = () => {
    if (!hasConfirmedEducation) return;
    setViewMode('study');
  };

  const handleNextUnit = () => {
    if (activeUnitIdx < activeLevel.units.length - 1) {
      setActiveUnitIdx(activeUnitIdx + 1);
    } else {
      // End of units for this level -> Go to Quiz
      setIsQuizMode(true);
      setCurrentQuizIdx(0);
    }
  };

  const handlePreviousUnit = () => {
    if (activeUnitIdx > 0) {
      setActiveUnitIdx(activeUnitIdx - 1);
    }
  };

  const handleQuizSubmit = (optionId: string) => {
    setSelectedOptionId(optionId);
    const option = activeQuiz.options.find(o => o.id === optionId);
    setQuizFeedback(option?.explanation || "");
  };

  const handleNextQuiz = () => {
    if (currentQuizIdx < activeLevel.quiz.length - 1) {
      setCurrentQuizIdx(currentQuizIdx + 1);
      setQuizFeedback(null);
      setSelectedOptionId(null);
    } else {
      // Level Complete after final quiz question
      const nextCompleted = Array.from(new Set([...completedLevelIds, activeLevel.id]));
      saveProgress(nextCompleted);
      AuditService.logAction('completed', 'static', { moduleId: module.id, levelId: activeLevel.id });

      if (activeLevelIdx < module.levels.length - 1) {
        setActiveLevelIdx(activeLevelIdx + 1);
        setActiveUnitIdx(0);
        setIsQuizMode(false);
        setCurrentQuizIdx(0);
        setQuizFeedback(null);
        setSelectedOptionId(null);
      } else {
        setShowCompletionModal(true);
      }
    }
  };

  return (
    <div className="min-h-screen bg-background pb-32 flex flex-col">
      {/* 1. STANDARDIZED STICKY SUB-NAV */}
      <nav className="sticky top-[73px] z-40 bg-background/95 backdrop-blur-md border-b border-primary/5 px-6 py-4 flex items-center shadow-sm shrink-0">
        <div className="max-w-7xl mx-auto w-full">
          <button 
            onClick={() => onNavigate('learn')}
            className="group flex items-center gap-3 text-primary/40 hover:text-accent transition-all focus:outline-none focus:ring-2 focus:ring-accent rounded-lg"
            aria-label="Back to Learning Hub catalog"
          >
            <div className="bg-white border border-primary/5 p-2 rounded-xl group-hover:border-accent/20 shadow-sm transition-colors">
              <ArrowLeft size={16} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Return to Learning Hub</span>
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 pt-12 flex-1 w-full">
        
        {viewMode === 'overview' ? (
          <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 space-y-12">
            {/* OVERVIEW: Mandatory notice at TOP */}
            <NonAdvisoryNotice />

            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-8 space-y-12">
                <header>
                  <LearningBreadcrumbs category={module.category} moduleTitle={module.title} onNavigateToHub={() => onNavigate('learn')} />
                  <h1 className="text-4xl lg:text-6xl font-poppins font-bold text-primary mb-6 tracking-tight leading-tight">
                    {module.title}
                  </h1>
                  <p className="text-lg text-primary/60 font-medium leading-relaxed max-w-2xl italic">
                    {module.detailedDescription}
                  </p>
                </header>

                <section className="space-y-6">
                  <h3 className="text-xs font-black text-primary/30 uppercase tracking-[0.3em] flex items-center gap-3">
                    <Target size={16} className="text-accent" />
                    Learning Objectives
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {module.learningObjectives.map((obj, i) => (
                      <div key={i} className="p-6 bg-white rounded-3xl border border-primary/5 flex items-start gap-4 shadow-sm">
                         <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                         <p className="text-sm text-primary/70 font-medium leading-relaxed">{obj}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <aside className="lg:col-span-4">
                <div className="bg-white rounded-[48px] p-10 border border-primary/5 shadow-sm sticky top-40 space-y-10">
                   <div className="text-center space-y-4">
                      <div className="w-20 h-20 bg-accent/5 rounded-full flex items-center justify-center text-accent mx-auto">
                        <Award size={40} />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-primary/30 uppercase tracking-widest">Mastery Status</p>
                        <h4 className="text-2xl font-poppins font-bold text-primary">{progress}% Complete</h4>
                      </div>
                   </div>

                   <div className="space-y-3">
                      <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-primary/40">
                        <span>Module Progress</span>
                        <span>{completedLevelIds.length} / {module.levels.length}</span>
                      </div>
                      <div className="w-full h-2 bg-primary/10 rounded-full overflow-hidden">
                        <div className="h-full bg-accent transition-all duration-1000" style={{ width: `${progress}%` }} />
                      </div>
                   </div>

                   <div className="p-6 bg-primary/[0.02] border border-primary/5 rounded-3xl space-y-4">
                      <div className="flex items-center gap-2">
                         <ShieldCheck size={14} className="text-accent" />
                         <span className="text-[9px] font-black uppercase tracking-widest">Charter of Intent</span>
                      </div>
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <input 
                          type="checkbox" 
                          checked={hasConfirmedEducation}
                          onChange={(e) => setHasConfirmedEducation(e.target.checked)}
                          className="mt-0.5 w-5 h-5 rounded border-primary/10 text-accent focus:ring-accent"
                        />
                        <span className="text-[10px] text-primary/60 leading-relaxed font-medium italic group-hover:text-primary transition-colors">
                          I confirm that I understand this content is strictly <span className="text-accent font-bold">educational</span> and provided for conceptual awareness only.
                        </span>
                      </label>
                   </div>

                   <button 
                    onClick={handleBeginTrack}
                    disabled={!hasConfirmedEducation}
                    className="w-full h-16 bg-primary text-white rounded-2xl font-bold text-sm shadow-xl shadow-primary/10 hover:bg-primary/95 transition-all flex items-center justify-center gap-3 group disabled:opacity-30 disabled:grayscale"
                   >
                     <span>{progress > 0 ? 'Resume Track' : 'Begin Track'}</span>
                     <Play size={18} fill="currentColor" className="group-hover:scale-110 transition-transform" />
                   </button>
                </div>
              </aside>
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-12 gap-12 pt-8 animate-in slide-in-from-right-4 duration-500">
            {/* STUDY: Sidebar Progress Map */}
            <aside className="lg:col-span-4 space-y-6">
              <div className="bg-white rounded-[40px] p-8 border border-primary/5 shadow-sm sticky top-40">
                <div className="flex items-center justify-between mb-8">
                   <h3 className="text-[10px] font-black text-primary/30 uppercase tracking-[0.3em]">Module Map</h3>
                   <button 
                    onClick={() => setViewMode('overview')} 
                    className="text-[9px] font-black text-accent uppercase tracking-widest hover:underline"
                   >
                    View Summary
                   </button>
                </div>
                
                <div className="space-y-3">
                  {module.levels.map((level, idx) => {
                    const isCompleted = completedLevelIds.includes(level.id);
                    const isActive = activeLevelIdx === idx;
                    const isLocked = idx > completedLevelIds.length && !isCompleted;

                    return (
                      <div key={level.id} className={`w-full p-5 rounded-2xl border transition-all flex items-center gap-4 ${isActive ? 'bg-accent/5 border-accent shadow-sm' : 'bg-primary/[0.02] border-primary/5'}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-black ${isCompleted ? 'bg-accent text-white' : isActive ? 'bg-primary text-white' : 'bg-primary/5 text-primary/20'}`}>
                          {isCompleted ? <CheckCircle size={16} /> : idx + 1}
                        </div>
                        <div className="flex-1">
                          <p className={`text-xs font-bold ${isActive ? 'text-primary' : 'text-primary/40'}`}>{level.title}</p>
                        </div>
                        {isLocked && <Lock size={12} className="text-primary/20" />}
                      </div>
                    );
                  })}
                </div>
              </div>
            </aside>

            {/* STUDY: Content Area */}
            <main className="lg:col-span-8 flex flex-col gap-12">
              {!isQuizMode ? (
                <article className="bg-white rounded-[48px] p-12 lg:p-16 border border-primary/5 shadow-sm space-y-12">
                   <header className="flex justify-between items-start">
                      <div>
                        <p className="text-[10px] font-black text-accent uppercase tracking-widest mb-2">
                          {activeLevel.title} • Unit {activeUnitIdx + 1} of {activeLevel.units.length}
                        </p>
                        <h2 className="text-3xl font-poppins font-bold text-primary tracking-tight leading-tight">{activeUnit.title}</h2>
                      </div>
                      <div className="bg-primary/5 px-4 py-2 rounded-xl flex items-center gap-2">
                        <History size={14} className="text-primary/20" />
                        <span className="text-[10px] font-black text-primary/40 uppercase">{activeUnit.durationMins || 5}m read</span>
                      </div>
                   </header>

                   <section className="bg-emerald-50/50 border border-emerald-100 rounded-3xl p-6 flex items-start gap-4">
                      <Zap className="text-accent shrink-0" size={24} />
                      <div className="space-y-1">
                        <p className="text-[10px] font-black text-accent uppercase tracking-widest">Logic Insight</p>
                        <p className="text-sm text-primary/70 leading-relaxed font-medium italic">
                          {activeUnit.whyThisMatters || "This concept forms a crucial part of the overall financial framework."}
                        </p>
                      </div>
                   </section>

                   <div className="prose prose-lg text-primary/70 max-w-none leading-relaxed font-medium">
                      {typeof activeUnit.content === 'string' ? <p>{activeUnit.content}</p> : activeUnit.content}
                   </div>

                   <section className="bg-primary text-white rounded-[32px] p-8 border border-white/5 relative overflow-hidden group">
                      <div className="relative z-10 flex items-center justify-between gap-8">
                        <div className="space-y-1">
                          <p className="text-[10px] font-black text-accent uppercase tracking-widest">Application Step</p>
                          <p className="text-sm font-bold text-white/90">{activeUnit.actionableNextStep || "Review your current records for this item."}</p>
                        </div>
                        <div className="p-3 bg-white/10 rounded-xl">
                          <BookmarkCheck size={20} className="text-white" />
                        </div>
                      </div>
                      <div className="absolute top-0 left-0 w-1.5 h-full bg-accent" />
                   </section>

                   <footer className="pt-8 flex flex-col sm:flex-row gap-4">
                      <button 
                        onClick={handleNextUnit}
                        className="flex-1 h-16 bg-primary text-white rounded-2xl font-bold text-sm shadow-xl shadow-primary/10 hover:bg-primary/95 transition-all flex items-center justify-center gap-3 group"
                      >
                        <span>{activeUnitIdx === activeLevel.units.length - 1 ? 'Go to Level Checkpoint' : 'Continue Path'}</span>
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                      {activeUnitIdx > 0 && (
                        <button 
                          onClick={handlePreviousUnit} 
                          className="flex-1 h-16 bg-background text-primary/40 rounded-2xl font-bold text-sm border border-primary/5 hover:bg-primary/5 transition-all"
                        >
                          Previous Unit
                        </button>
                      )}
                   </footer>
                </article>
              ) : (
                <section className="bg-white rounded-[48px] p-12 lg:p-16 border border-primary/5 shadow-sm space-y-12 animate-in zoom-in-95 duration-500">
                   <div className="text-center">
                      <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-6 py-2 mb-8 text-accent font-black text-[10px] uppercase tracking-[0.3em]">
                        <HelpCircle size={16} /><span>Level Checkpoint</span>
                      </div>
                      <h2 className="text-3xl font-poppins font-bold text-primary tracking-tight">Conceptual Reflection</h2>
                      <p className="text-primary/40 mt-3 text-sm font-medium">Verify your understanding of the frameworks covered.</p>
                   </div>

                   <div className="max-w-2xl mx-auto space-y-8">
                      <div className="flex items-center justify-center gap-2">
                        {activeLevel.quiz.map((_, i) => (
                          <div key={i} className={`h-1 rounded-full transition-all duration-500 ${i === currentQuizIdx ? 'w-8 bg-accent' : i < currentQuizIdx ? 'w-2 bg-accent/40' : 'w-2 bg-primary/10'}`} />
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
                                className="flex-1 h-16 bg-primary text-white rounded-2xl font-bold text-sm shadow-xl shadow-primary/10 hover:bg-primary/95 transition-all flex items-center justify-center gap-3"
                              >
                                <span>{currentQuizIdx < activeLevel.quiz.length - 1 ? 'Next Question' : 'Proceed to Next Level'}</span>
                                <ArrowRight size={20} />
                              </button>
                              {selectedOptionId !== activeQuiz.correctOptionId && (
                                <button 
                                  onClick={() => { setQuizFeedback(null); setSelectedOptionId(null); }}
                                  className="flex-1 h-16 bg-white border border-primary/10 text-primary/40 rounded-2xl font-bold text-sm hover:bg-primary/5 transition-all flex items-center justify-center gap-2"
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

              {/* STUDY: Mandatory notice at BOTTOM */}
              <div className="mt-8">
                <NonAdvisoryNotice />
              </div>

              <footer className="pt-12 text-center border-t border-primary/5">
                <button 
                  onClick={AuditService.exportAuditTrail}
                  className="inline-flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-primary/20 hover:text-accent transition-colors"
                >
                  <FileJson size={14} />
                  <span>Activity Log Export</span>
                </button>
              </footer>
            </main>
          </div>
        )}
      </div>

      {showCompletionModal && (
        <AcknowledgementModal 
          userName={user?.fullName || "Member"}
          moduleName={module.title}
          level={module.levels.length}
          onClose={() => onNavigate('learn')}
        />
      )}
    </div>
  );
};

export default LearningModuleRunner;