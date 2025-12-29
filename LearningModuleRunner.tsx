import React, { useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { 
  ArrowLeft, ArrowRight, CheckCircle, Lock, Play, 
  RotateCcw, History, Info, ShieldAlert, Award,
  Check, X, Zap, Target, BookOpen, ChevronRight,
  ClipboardCheck, TrendingUp, ShieldCheck, Lightbulb
} from 'lucide-react';
import { MODULE_REGISTRY } from './modulesData';
import { View, User } from './types';
import AcknowledgementModal from './AcknowledgementModal';
import LearningBackButton from './LearningBackButton';
import LearningBreadcrumbs from './LearningBreadcrumbs';

interface ModuleRunnerProps {
  user: User | null;
  onNavigate: (view: View, subTarget?: string) => void;
}

const LearningModuleRunner: React.FC<ModuleRunnerProps> = ({ user, onNavigate }) => {
  const { moduleId } = useParams<{ moduleId: string }>();
  const module = useMemo(() => MODULE_REGISTRY.find(m => m.id === moduleId), [moduleId]);

  // FLOW STATE
  const [showOverview, setShowOverview] = useState(true);
  const [activeLevelIdx, setActiveLevelIdx] = useState(0);
  const [activeUnitIdx, setActiveUnitIdx] = useState(0);
  const [isQuizMode, setIsQuizMode] = useState(false);
  const [completedLevelIds, setCompletedLevelIds] = useState<number[]>([]);
  
  // QUIZ STATE
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  
  // UI STATE
  const [showCompletionModal, setShowCompletionModal] = useState(false);

  // INITIALIZE / RESUME - ENHANCED FOR GRANULARITY
  useEffect(() => {
    if (!moduleId || !module) return;
    
    // Track last active module for Hub highlighting
    localStorage.setItem('monitize_last_active_module', moduleId);

    const saved = localStorage.getItem(`monitize_progress_${moduleId}`);
    if (saved) {
      const data = JSON.parse(saved);
      if (data.completedLevelIds) setCompletedLevelIds(data.completedLevelIds);
      
      // Restore exact location
      if (data.lastLevelIdx !== undefined) setActiveLevelIdx(data.lastLevelIdx);
      if (data.lastUnitIdx !== undefined) setActiveUnitIdx(data.lastUnitIdx);
      if (data.isQuizMode !== undefined) setIsQuizMode(data.isQuizMode);
    }
  }, [moduleId, module]);

  const saveProgress = (updates: { 
    completedLevelIds?: number[], 
    lastLevelIdx?: number, 
    lastUnitIdx?: number, 
    isQuizMode?: boolean 
  }) => {
    if (!moduleId) return;
    const current = JSON.parse(localStorage.getItem(`monitize_progress_${moduleId}`) || '{}');
    const data = {
      ...current,
      ...updates,
      lastUpdated: Date.now()
    };
    localStorage.setItem(`monitize_progress_${moduleId}`, JSON.stringify(data));
    if (updates.completedLevelIds) setCompletedLevelIds(updates.completedLevelIds);
  };

  if (!module) return null;

  const activeLevel = module.levels[activeLevelIdx];
  const activeUnit = activeLevel?.units[activeUnitIdx];
  const totalLevels = module.levels.length;
  const isStarted = completedLevelIds.length > 0 || activeLevelIdx > 0 || activeUnitIdx > 0;
  const isAllCompleted = completedLevelIds.length === totalLevels;

  const handleStartModule = () => {
    setShowOverview(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNextUnit = () => {
    if (activeUnitIdx < activeLevel.units.length - 1) {
      const nextIdx = activeUnitIdx + 1;
      setActiveUnitIdx(nextIdx);
      saveProgress({ lastUnitIdx: nextIdx, isQuizMode: false });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setIsQuizMode(true);
      saveProgress({ isQuizMode: true });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleQuizOptionSelect = (qId: string, oId: string) => {
    if (quizSubmitted) return;
    setSelectedOptions(prev => ({ ...prev, [qId]: oId }));
  };

  const handleQuizSubmit = () => {
    let score = 0;
    activeLevel.quiz.forEach(q => {
      if (selectedOptions[q.id] === q.correctOptionId) {
        score += 1;
      }
    });
    const pct = (score / activeLevel.quiz.length) * 100;
    setQuizScore(pct);
    setQuizSubmitted(true);

    if (pct >= 60) {
      const nextCompleted = Array.from(new Set([...completedLevelIds, activeLevel.id]));
      saveProgress({ completedLevelIds: nextCompleted });
    }
  };

  const handleLevelTransition = () => {
    if (activeLevelIdx < totalLevels - 1) {
      const nextLvl = activeLevelIdx + 1;
      setActiveLevelIdx(nextLvl);
      setActiveUnitIdx(0);
      setIsQuizMode(false);
      setQuizSubmitted(false);
      setSelectedOptions({});
      saveProgress({ lastLevelIdx: nextLvl, lastUnitIdx: 0, isQuizMode: false });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setShowCompletionModal(true);
    }
  };

  const handleRetryQuiz = () => {
    setQuizSubmitted(false);
    setSelectedOptions({});
    setQuizScore(0);
  };

  const progressPct = Math.round((completedLevelIds.length / totalLevels) * 100);

  // --- OVERVIEW SCREEN ---
  if (showOverview) {
    return (
      <div className="min-h-screen bg-background pb-24">
        <div className="max-w-5xl mx-auto px-6 pt-32">
          <LearningBackButton onNavigate={onNavigate} />
          
          <div className="grid lg:grid-cols-12 gap-16 animate-in fade-in slide-in-from-bottom-6 duration-700">
            <div className="lg:col-span-7 space-y-12">
              <header className="space-y-6">
                <LearningBreadcrumbs 
                  category={module.category} 
                  moduleTitle={module.title} 
                  onNavigateToHub={() => onNavigate('learn')} 
                />
                <h1 className="text-4xl lg:text-6xl font-poppins font-bold text-primary leading-tight tracking-tight">
                  {module.title}
                </h1>
                <p className="text-primary/60 text-lg font-medium">
                  {module.detailedDescription}
                </p>
              </header>

              <section className="space-y-6">
                <h2 className="text-xs font-black uppercase tracking-[0.3em] text-accent flex items-center gap-3">
                  <Target size={16} /> Learning Objectives
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {module.learningObjectives.map((obj, i) => (
                    <div key={i} className="flex items-start gap-4 p-5 bg-white border border-primary/5 rounded-2xl shadow-sm">
                      <CheckCircle size={18} className="text-accent shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-primary/70">{obj}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-primary rounded-[48px] p-10 text-white shadow-2xl sticky top-40 overflow-hidden">
                <div className="relative z-10 space-y-10">
                  <div className="space-y-2">
                    <p className="text-white/40 text-[10px] font-black uppercase tracking-widest">Structural Map</p>
                    <div className="flex items-center justify-between">
                       <span className="text-2xl font-bold">{totalLevels} Difficulty Levels</span>
                       <span className="text-xs font-bold text-accent px-3 py-1 bg-accent/10 rounded-full">{module.estimatedEffort}</span>
                    </div>
                  </div>

                  <div className="p-8 bg-white/5 border border-white/10 rounded-[32px] space-y-6">
                    <div className="flex items-center justify-between">
                       <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">Active Progress</p>
                       <span className="text-sm font-bold text-accent">{progressPct}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                       <div className="h-full bg-accent transition-all duration-1000" style={{ width: `${progressPct}%` }} />
                    </div>
                    {isStarted && (
                      <p className="text-xs text-white/50 leading-relaxed italic">
                        Resume from: Level {activeLevelIdx + 1}, Unit {activeUnitIdx + 1}
                      </p>
                    )}
                  </div>

                  <button 
                    onClick={handleStartModule}
                    className="w-full h-16 bg-accent text-white rounded-2xl font-bold text-base flex items-center justify-center gap-3 shadow-xl shadow-accent/10 hover:bg-accent/90 transition-all active:scale-[0.98]"
                  >
                    <span>{isAllCompleted ? 'Review Track' : isStarted ? 'Resume Track' : 'Begin Learning Path'}</span>
                    <ArrowRight size={20} />
                  </button>

                  <div className="pt-6 flex items-center justify-center gap-6 opacity-40">
                    <div className="flex items-center gap-1.5">
                       <ShieldCheck size={12} />
                       <span className="text-[8px] font-bold uppercase tracking-widest">Statutory Logic</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                       <History size={12} />
                       <span className="text-[8px] font-bold uppercase tracking-widest">Latest Framework</span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- RUNNER UI ---
  return (
    <div className="min-h-screen bg-background pb-32">
      <div className="max-w-7xl mx-auto px-6 pt-24">
        <LearningBackButton onNavigate={onNavigate} />
        
        <div className="grid lg:grid-cols-12 gap-12 pt-8">
          {/* Progress Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-[40px] p-8 border border-primary/5 shadow-sm sticky top-40">
              <LearningBreadcrumbs 
                category={module.category} 
                moduleTitle={module.title} 
                levelTitle={activeLevel?.title}
                onNavigateToHub={() => onNavigate('learn')} 
              />
              
              <div className="space-y-3 mt-10">
                {module.levels.map((level, idx) => {
                  const isCompleted = completedLevelIds.includes(level.id);
                  const isActive = activeLevelIdx === idx;
                  const isLocked = idx > completedLevelIds.length && !isAllCompleted;

                  return (
                    <button 
                      key={level.id}
                      disabled={isLocked}
                      onClick={() => {
                        setActiveLevelIdx(idx);
                        setActiveUnitIdx(0);
                        setIsQuizMode(false);
                        setQuizSubmitted(false);
                        saveProgress({ lastLevelIdx: idx, lastUnitIdx: 0, isQuizMode: false });
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className={`w-full text-left p-5 rounded-2xl border transition-all flex items-center gap-4 ${
                        isActive 
                        ? 'bg-accent/5 border-accent shadow-sm ring-1 ring-accent/20' 
                        : isCompleted ? 'bg-white border-primary/10' : 'bg-primary/[0.02] border-primary/5 opacity-50'
                      } ${isLocked ? 'cursor-not-allowed grayscale' : 'hover:border-accent/40'}`}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-black ${isCompleted ? 'bg-accent text-white' : isActive ? 'bg-primary text-white' : 'bg-primary/5 text-primary/20'}`}>
                        {isCompleted ? <CheckCircle size={16} /> : idx + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`text-xs font-bold ${isActive ? 'text-primary' : 'text-primary/60'} truncate`}>{level.title}</p>
                        <p className="text-[9px] text-primary/40 uppercase font-black tracking-tighter">{level.badge}</p>
                      </div>
                      {isLocked && <Lock size={12} className="text-primary/20" />}
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="lg:col-span-8">
            {!isQuizMode ? (
              <article className="bg-white rounded-[48px] p-8 lg:p-16 border border-primary/5 shadow-sm space-y-12 animate-in slide-in-from-right-6 duration-500">
                 <header className="flex justify-between items-start">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-accent font-black text-[10px] uppercase tracking-widest mb-2">
                        <Zap size={14} />
                        <span>Unit {activeUnitIdx + 1} of {activeLevel.units.length}</span>
                      </div>
                      <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-primary tracking-tight leading-tight">{activeUnit.title}</h2>
                    </div>
                    <div className="bg-primary/5 px-4 py-2 rounded-xl flex items-center gap-3">
                      <History size={14} className="text-primary/20" />
                      <span className="text-[10px] font-black text-primary/40 uppercase tracking-widest">{activeUnit.durationMins}m read</span>
                    </div>
                 </header>

                 <section className="bg-emerald-50 border border-emerald-100 rounded-3xl p-8 flex items-start gap-6">
                    <Lightbulb className="text-accent shrink-0" size={28} />
                    <div className="space-y-2">
                      <p className="text-[10px] font-black text-accent uppercase tracking-widest">Context of Logic</p>
                      <p className="text-sm text-primary/70 leading-relaxed font-medium italic">
                        {activeUnit.whyThisMatters}
                      </p>
                    </div>
                 </section>

                 <div className="prose prose-lg text-primary/70 max-w-none leading-relaxed font-medium pb-8 border-b border-primary/5">
                    {typeof activeUnit.content === 'string' ? <p>{activeUnit.content}</p> : activeUnit.content}
                 </div>

                 {activeUnit.actionableNextStep && (
                   <section className="bg-primary text-white rounded-[32px] p-8 border border-white/5 relative overflow-hidden group">
                      <div className="relative z-10 flex items-center justify-between gap-8">
                        <div className="space-y-1 text-left flex-1">
                          <p className="text-[10px] font-black text-accent uppercase tracking-widest mb-2">Reflective Action</p>
                          <p className="text-base font-bold text-white/90 leading-snug">{activeUnit.actionableNextStep}</p>
                        </div>
                        <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                           <Target size={24} className="text-accent" />
                        </div>
                      </div>
                      <div className="absolute top-0 left-0 w-1.5 h-full bg-accent" />
                   </section>
                 )}

                 <footer className="pt-8 flex flex-col sm:flex-row gap-4">
                    <button 
                      onClick={handleNextUnit}
                      className="flex-1 h-16 bg-primary text-white rounded-2xl font-bold text-sm shadow-xl shadow-primary/10 hover:bg-primary/95 transition-all flex items-center justify-center gap-3 group"
                    >
                      <span>{activeUnitIdx === activeLevel.units.length - 1 ? 'Go to Level Checkpoint' : 'Next Learning Unit'}</span>
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    {activeUnitIdx > 0 && (
                      <button 
                        onClick={() => {
                          const prev = activeUnitIdx - 1;
                          setActiveUnitIdx(prev);
                          saveProgress({ lastUnitIdx: prev, isQuizMode: false });
                        }}
                        className="flex-1 h-16 bg-[#F5F7FA] text-primary/40 rounded-2xl font-bold text-sm hover:bg-primary/5 transition-all"
                      >
                        Previous Unit
                      </button>
                    )}
                 </footer>
              </article>
            ) : (
              /* QUIZ ENGINE */
              <section className="bg-white rounded-[48px] p-8 lg:p-16 border border-primary/5 shadow-sm space-y-12 animate-in zoom-in-95 duration-500">
                 <div className="text-center space-y-6">
                    <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-8 py-3 text-accent font-black text-[10px] uppercase tracking-[0.4em]">
                      <ClipboardCheck size={16} /><span>Level {activeLevelIdx + 1} Checkpoint</span>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-primary tracking-tight">Conceptual Reflection</h2>
                    <p className="text-primary/40 text-sm font-medium max-w-lg mx-auto leading-relaxed">
                      Verify your understanding of the frameworks covered in this section.
                    </p>
                 </div>

                 <div className="max-w-2xl mx-auto space-y-16">
                    {activeLevel.quiz.map((q, qIdx) => {
                      const selectedId = selectedOptions[q.id];
                      return (
                        <div key={q.id} className="space-y-8 animate-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: `${qIdx * 100}ms` }}>
                          <h3 className="text-xl font-bold text-primary leading-relaxed italic border-l-4 border-accent/20 pl-6">
                            "{q.question}"
                          </h3>
                          <div className="grid gap-3">
                            {q.options.map((opt) => {
                              const isSelected = selectedId === opt.id;
                              const isCorrect = opt.id === q.correctOptionId;
                              let btnStyle = "bg-background border-primary/5 hover:border-accent/20";
                              
                              if (quizSubmitted) {
                                if (isCorrect) btnStyle = "bg-emerald-50 border-emerald-500 text-emerald-900";
                                else if (isSelected) btnStyle = "bg-red-50 border-red-400 text-red-900";
                                else btnStyle = "opacity-40 border-primary/5 bg-background";
                              } else if (isSelected) {
                                btnStyle = "bg-primary border-primary text-white shadow-lg shadow-primary/10";
                              }

                              return (
                                <button
                                  key={opt.id}
                                  disabled={quizSubmitted}
                                  onClick={() => handleQuizOptionSelect(q.id, opt.id)}
                                  className={`w-full p-6 rounded-[24px] border text-left transition-all relative flex items-center justify-between group ${btnStyle}`}
                                >
                                  <span className="text-sm font-bold flex-1">{opt.text}</span>
                                  {quizSubmitted && isCorrect && <CheckCircle size={20} className="text-emerald-600" />}
                                  {quizSubmitted && isSelected && !isCorrect && <X size={20} className="text-red-500" />}
                                </button>
                              );
                            })}
                          </div>
                          {quizSubmitted && (
                            <div className="p-8 bg-primary/[0.02] rounded-[32px] border border-primary/5 animate-in slide-in-from-top-2">
                               <div className="flex items-center gap-3 mb-4 text-accent font-black text-[9px] uppercase tracking-[0.2em]">
                                  <Info size={14} />
                                  <span>The Logical Path</span>
                               </div>
                               <p className="text-sm text-primary/70 leading-relaxed font-medium italic">
                                 {q.options.find(o => o.id === (selectedId || q.correctOptionId))?.explanation}
                               </p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                 </div>

                 {!quizSubmitted ? (
                   <div className="pt-12 text-center">
                      <button 
                        onClick={handleQuizSubmit}
                        disabled={Object.keys(selectedOptions).length < activeLevel.quiz.length}
                        className="px-20 py-6 bg-primary text-white rounded-3xl font-bold text-sm shadow-xl shadow-primary/10 hover:bg-primary/95 transition-all disabled:opacity-20 active:scale-[0.98]"
                      >
                        Submit Reflection
                      </button>
                   </div>
                 ) : (
                   <div className="pt-12 text-center space-y-12 animate-in slide-in-from-bottom-8 duration-700">
                      <div className="inline-block p-12 bg-background rounded-[48px] border border-primary/5 shadow-inner">
                         <p className="text-[10px] font-black text-primary/30 uppercase tracking-[0.4em] mb-4">Mastery Assessment</p>
                         <div className="text-7xl font-poppins font-bold text-primary mb-4">{quizScore.toFixed(0)}%</div>
                         <p className={`text-xs font-black uppercase tracking-widest ${quizScore >= 60 ? 'text-accent' : 'text-red-500'}`}>
                           {quizScore >= 60 ? 'Logic Mastered' : 'Re-review Required'}
                         </p>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                         {quizScore >= 60 ? (
                           <button 
                             onClick={handleLevelTransition}
                             className="flex-1 h-16 bg-accent text-white rounded-2xl font-bold text-sm shadow-xl shadow-accent/20 hover:bg-accent/90 transition-all flex items-center justify-center gap-3"
                           >
                             <span>{activeLevelIdx === totalLevels - 1 ? 'Finalize Track' : 'Next Difficulty Level'}</span>
                             <ArrowRight size={20} />
                           </button>
                         ) : (
                           <button 
                             onClick={handleRetryQuiz}
                             className="flex-1 h-16 bg-primary text-white rounded-2xl font-bold text-sm hover:bg-primary/95 transition-all flex items-center justify-center gap-3 shadow-lg"
                           >
                             <RotateCcw size={20} />
                             <span>Retry Checkpoint</span>
                           </button>
                         )}
                      </div>
                   </div>
                 )}
              </section>
            )}
          </main>
        </div>
      </div>

      {showCompletionModal && (
        <AcknowledgementModal 
          userName={user?.fullName || "Member"}
          moduleName={module.title}
          level={3}
          onClose={() => {
            setShowCompletionModal(false);
            onNavigate('learn');
          }}
        />
      )}
    </div>
  );
};

export default LearningModuleRunner;