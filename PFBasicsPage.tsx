
import React, { useState } from 'react';
import { 
  ArrowLeft, ArrowRight, Target, ShieldCheck, Wallet, Info, 
  HelpCircle, CheckCircle, Play, RotateCcw, Lock, Zap, 
  HeartPulse, Scale, TrendingUp, AlertTriangle, Coins, 
  Layers, Users, History, Calendar
} from 'lucide-react';
import { ServicesCompliance, Disclaimer } from './ComplianceSections';
import { View, LearningLevel } from './types';
import AcknowledgementModal from './AcknowledgementModal';

/**
 * PERSONAL_FINANCE_JOURNEY - 3 Level Educational Framework
 * Strictly non-advisory, India-centric.
 */
const PF_JOURNEY: LearningLevel[] = [
  {
    id: 1,
    title: "Money Awareness",
    badge: "Level 1: The Survival Layer",
    units: [
      {
        id: "p1u1", title: "Cash Flow vs Income", readingTime: "3 mins",
        content: (
          <div className="space-y-6">
            <p className="text-primary/70 leading-relaxed">The most common mistake in personal finance is confusing "How much I earn" with "How much I keep." Logic dictates that wealth is built on the gap between the two.</p>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="p-6 bg-white border border-primary/5 rounded-[32px] shadow-sm">
                <h4 className="text-accent font-bold text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
                   <Wallet size={16} /> Income
                </h4>
                <p className="text-[11px] text-primary/60">The gross amount that enters your account. It is a static number often used for social status but rarely for actual planning.</p>
              </div>
              <div className="p-6 bg-[#0B1C2D] text-white rounded-[32px] shadow-xl">
                <h4 className="text-accent font-bold text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
                   <TrendingUp size={16} /> Cash Flow
                </h4>
                <p className="text-[11px] text-white/50">The actual movement of money. Positive cash flow means you have a surplus after all obligations are met. This is the only number that builds a future.</p>
              </div>
            </div>
          </div>
        )
      },
      {
        id: "p1u2", title: "Inflation: The Silent Eroder", readingTime: "4 mins",
        content: (
          <div className="space-y-6">
            <p className="text-primary/70 leading-relaxed">In India, inflation historically hovers between 4-7%. This means the buying power of your ₹100 today will be significantly less in 10 years.</p>
            <div className="p-8 bg-white border border-primary/5 rounded-[40px] relative overflow-hidden">
               <div className="relative z-10">
                  <h4 className="font-bold text-sm text-primary mb-6">The Coffee Logic</h4>
                  <div className="flex items-center gap-8">
                     <div className="text-center">
                        <p className="text-[10px] font-bold text-primary/30 uppercase mb-2">Year 2014</p>
                        <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent mx-auto">₹50</div>
                     </div>
                     <ArrowRight className="text-primary/10" />
                     <div className="text-center">
                        <p className="text-[10px] font-bold text-primary/30 uppercase mb-2">Year 2024</p>
                        <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold mx-auto">₹110</div>
                     </div>
                  </div>
                  <p className="mt-8 text-[11px] text-primary/50 leading-relaxed italic">
                    "Saving is keeping money. Investing is protecting its buying power from the erosion of time."
                  </p>
               </div>
            </div>
          </div>
        )
      }
    ],
    quiz: [{
      id: "q1", question: "If your monthly income is ₹50,000 and your fixed expenses are ₹45,000, what is the most important number for your planning?",
      correctOptionId: "a2",
      options: [
        { id: "a1", text: "₹50,000 (Gross Income)", explanation: "Incorrect. While this is your earning, it doesn't reflect your ability to build a future." },
        { id: "a2", text: "₹5,000 (Monthly Cash Surplus)", explanation: "Correct. This is your 'investable surplus'—the only portion of your income that can be used to mitigate inflation." },
        { id: "a3", text: "₹45,000 (Expense Floor)", explanation: "Incorrect. This is your obligation, not your planning leverage." }
      ]
    }]
  },
  {
    id: 2,
    title: "Structure & Protection",
    badge: "Level 2: The Framework",
    units: [
      {
        id: "p2u1", title: "Emergency Fund: The Survival Logic", readingTime: "5 mins",
        content: (
          <div className="space-y-6">
            <p className="text-primary/70 leading-relaxed">Before investing a single rupee in the market, logic dictates you must build a "Buffer Zone." This is money kept strictly for unforeseen life crises.</p>
            <div className="p-6 bg-accent/5 border border-accent/20 rounded-[32px]">
               <h4 className="text-xs font-black uppercase tracking-[0.2em] text-accent mb-4">Sizing Framework</h4>
               <p className="text-sm font-bold text-primary mb-2">6 to 12 Months of Essential Expenses</p>
               <p className="text-[11px] text-primary/60 leading-relaxed">This should be kept in highly liquid forms (Savings Bank or Liquid Funds). It is NOT for growth; it is for certainty.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <div className="p-5 bg-white border border-primary/5 rounded-2xl">
                  <h5 className="font-bold text-[11px] text-primary mb-1">What it is for:</h5>
                  <p className="text-[10px] text-primary/40 leading-relaxed">Medical emergencies, job loss, critical repairs.</p>
               </div>
               <div className="p-5 bg-white border border-primary/5 rounded-2xl">
                  <h5 className="font-bold text-[11px] text-red-500 mb-1">What it is NOT for:</h5>
                  <p className="text-[10px] text-primary/40 leading-relaxed">Weddings, gadgets, or 'once-in-a-lifetime' sales.</p>
               </div>
            </div>
          </div>
        )
      },
      {
        id: "p2u2", title: "Insurance: The Floor, not the Ceiling", readingTime: "6 mins",
        content: (
          <div className="space-y-6">
            <p className="text-primary/70 leading-relaxed">In India, insurance is often mis-sold as an investment. Educational logic separates the two: Insurance is a cost paid to transfer risk.</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 p-5 bg-[#F8FAFC] rounded-2xl border border-primary/5">
                <HeartPulse className="text-accent shrink-0" size={20} />
                <div>
                   <h5 className="font-bold text-sm text-primary">Health Insurance</h5>
                   <p className="text-[11px] text-primary/50">Protects your **current savings** from being wiped out by a medical crisis.</p>
                </div>
              </li>
              <li className="flex items-start gap-4 p-5 bg-[#F8FAFC] rounded-2xl border border-primary/5">
                <Users className="text-accent shrink-0" size={20} />
                <div>
                   <h5 className="font-bold text-sm text-primary">Term Life Insurance</h5>
                   <p className="text-[11px] text-primary/50">Protects your **family's future income** in the event of your absence.</p>
                </div>
              </li>
            </ul>
            <div className="p-6 bg-[#0B1C2D] rounded-[32px] text-white">
               <h5 className="font-bold text-xs mb-2 text-accent">The Rule of Neutrality</h5>
               <p className="text-[11px] leading-relaxed italic opacity-70">"Mixed products (Invest + Insure) often compromise on both. Clarity comes from keeping protection costs separate from growth assets."</p>
            </div>
          </div>
        )
      }
    ],
    quiz: [{
      id: "q2", question: "If you have ₹5 Lakhs in savings and no health insurance, and a medical emergency costs ₹4 Lakhs, what has happened to your financial plan?",
      correctOptionId: "b2",
      options: [
        { id: "b1", text: "You have successfully used your savings.", explanation: "Incorrect. While you paid the bill, you have destroyed your capital and your ability to earn future returns on it." },
        { id: "b2", text: "You have suffered a catastrophic lack of risk transfer.", explanation: "Correct. Insurance would have transferred this ₹4L cost to a provider, leaving your ₹5L growth capital intact." },
        { id: "b3", text: "It is a normal part of the financial lifecycle.", explanation: "Incorrect. This is a structural failure that could have been mitigated with an insurance floor." }
      ]
    }]
  },
  {
    id: 3,
    title: "Decision Maturity",
    badge: "Level 3: Life-Stage Frameworks",
    units: [
      {
        id: "p3u1", title: "Lifestyle Creep & Inflation", readingTime: "5 mins",
        content: (
          <div className="space-y-6">
            <p className="text-primary/70 leading-relaxed">As income rises, standard of living tends to rise automatically. This is "Lifestyle Inflation." It is the primary reason senior professionals often have less surplus than they did early in their careers.</p>
            <div className="p-8 bg-white border border-primary/5 rounded-[40px] shadow-sm">
               <div className="space-y-6">
                  <div className="flex justify-between items-end border-b border-primary/5 pb-4">
                     <div>
                        <p className="text-[10px] font-bold text-primary/20 uppercase">Early Career</p>
                        <p className="text-sm font-bold text-primary">High Savings Rate</p>
                     </div>
                     <div className="h-12 w-32 bg-accent/20 rounded-t-lg"></div>
                  </div>
                  <div className="flex justify-between items-end pb-4">
                     <div>
                        <p className="text-[10px] font-bold text-red-500/40 uppercase">Senior Role</p>
                        <p className="text-sm font-bold text-primary">High EMI & Overhead</p>
                     </div>
                     <div className="h-6 w-32 bg-red-400/20 rounded-t-lg"></div>
                  </div>
               </div>
            </div>
            <p className="text-[11px] text-primary/50 leading-relaxed font-medium italic">
              "True financial independence is not about how much you can spend, but how much you don't *have* to spend to maintain your happiness."
            </p>
          </div>
        )
      },
      {
        id: "p3u2", title: "Legacy & Nominees: The Final Step", readingTime: "4 mins",
        content: (
          <div className="space-y-6">
            <p className="text-primary/70 leading-relaxed">The finest financial plan fails if the transmission of assets is blocked. Every account (Bank, Demat, Insurance) must have a verified Nominee.</p>
            <div className="grid sm:grid-cols-2 gap-4">
               <div className="p-6 bg-primary/[0.02] border border-primary/5 rounded-3xl">
                  <h5 className="font-bold text-xs text-primary mb-2">Nomination Logic</h5>
                  <p className="text-[10px] text-primary/50">Ensures immediate access to funds for your family without complex legal disputes.</p>
               </div>
               <div className="p-6 bg-primary/[0.02] border border-primary/5 rounded-3xl">
                  <h5 className="font-bold text-xs text-primary mb-2">The Will Concept</h5>
                  <p className="text-[10px] text-primary/50">For complex assets, a documented will provides the legal weight to your intentions.</p>
               </div>
            </div>
            <div className="p-6 bg-accent rounded-[32px] text-white">
               <h5 className="font-bold text-xs mb-3 flex items-center gap-2"><Scale size={14} /> The Limits of DIY</h5>
               <p className="text-[11px] leading-relaxed italic opacity-70">"Estate planning is a legal domain. Use simulators for logic; use a legal professional for execution."</p>
            </div>
          </div>
        )
      }
    ],
    quiz: [{
      id: "q3", question: "What is the primary cause of 'high-income poverty' in urban India?",
      correctOptionId: "c3",
      options: [
        { id: "c1", text: "Not earning enough interest.", explanation: "Incorrect. Most high earners have access to good interest rates." },
        { id: "c2", text: "Low investment returns.", explanation: "Incorrect. Even with low returns, a high income should lead to surplus." },
        { id: "c3", text: "Uncontrolled Lifestyle Inflation (Creep).", explanation: "Correct. When your needs expand as fast as your income, your 'Investable Surplus' stays at zero, regardless of your salary." }
      ]
    }]
  }
];

const PFBasicsPage = ({ onNavigate }: { onNavigate: (view: View, subTarget?: string) => void }) => {
  const [activeLevel, setActiveLevel] = useState(1);
  const [activeUnit, setActiveUnit] = useState(0);
  const [isQuizMode, setIsQuizMode] = useState(false);
  const [quizFeedback, setQuizFeedback] = useState<string | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [completedLevels, setCompletedLevels] = useState<number[]>([]);
  const [showAcknowledgement, setShowAcknowledgement] = useState(false);

  const currentLevel = PF_JOURNEY.find(l => l.id === activeLevel)!;
  const currentUnit = currentLevel.units[activeUnit];
  const currentQuiz = currentLevel.quiz?.[0];

  const handleLevelComplete = () => {
    const nextCompleted = Array.from(new Set([...completedLevels, activeLevel]));
    setCompletedLevels(nextCompleted);
    setIsQuizMode(false);
    setQuizFeedback(null);
    setSelectedOption(null);
    setShowAcknowledgement(true);

    if (activeLevel < PF_JOURNEY.length) {
      // Advance logic handled in modal close or can be automated
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const progressPercentage = Math.round((completedLevels.length / PF_JOURNEY.length) * 100);

  return (
    <div className="animate-in fade-in duration-700 bg-[#F5F7FA] min-h-screen">
      {showAcknowledgement && (
        <AcknowledgementModal 
          userName="Member" 
          moduleName="Personal Finance Basics"
          level={completedLevels[completedLevels.length - 1] || 1}
          onClose={() => {
            setShowAcknowledgement(false);
            if (activeLevel < PF_JOURNEY.length && completedLevels.includes(activeLevel)) {
                setActiveLevel(activeLevel + 1);
                setActiveUnit(0);
            }
          }}
        />
      )}

      {/* Header */}
      <section className="pt-40 pb-16 bg-[#0B1C2D] text-white px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center space-x-4 mb-8">
            <button onClick={() => onNavigate('learn')} className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/40 hover:text-white" aria-label="Back to Learn"><ArrowLeft size={20} /></button>
            <div className="h-6 w-px bg-white/10"></div>
            <div className="flex items-center space-x-2 text-accent">
              <Target size={16} />
              <span className="text-xs font-bold uppercase tracking-widest">Financial Habit Track</span>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <h1 className="text-3xl lg:text-5xl font-poppins font-bold mb-4">{currentLevel.title}</h1>
              <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em]">{currentLevel.badge}</p>
            </div>
            <div className="text-right">
              <div className="flex items-center justify-end gap-3 mb-2">
                <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Preparedness Level</span>
                <span className="text-accent font-bold text-sm">{progressPercentage}%</span>
              </div>
              <div className="w-32 h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-accent transition-all duration-1000" style={{ width: `${progressPercentage}%` }}></div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px]" />
      </section>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 py-16">
        {/* Progress Sidebar */}
        <aside className="lg:col-span-4">
          <div className="bg-white rounded-[40px] p-8 border border-primary/5 shadow-sm sticky top-32">
            <h3 className="text-sm font-bold text-primary mb-10 flex items-center gap-3">
              <Layers size={18} className="text-accent" />
              Decision Framework
            </h3>
            <div className="space-y-4">
              {PF_JOURNEY.map((level) => {
                const isCompleted = completedLevels.includes(level.id);
                const isActive = activeLevel === level.id;
                const isLocked = level.id > activeLevel;

                return (
                  <div key={level.id} className={`p-6 rounded-[24px] border transition-all ${isActive ? 'bg-accent/5 border-accent ring-1 ring-accent' : isCompleted ? 'bg-white border-primary/10 opacity-70' : 'bg-[#F8FAFC] border-primary/5 opacity-40'}`}>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold ${isCompleted ? 'bg-accent text-white' : isActive ? 'bg-accent text-white' : 'bg-primary/5 text-primary/40'}`}>
                          {isCompleted ? <CheckCircle size={16} /> : level.id}
                        </div>
                        <div>
                           <h4 className={`text-xs font-bold ${isActive ? 'text-primary' : 'text-primary/60'}`}>{level.title}</h4>
                           <p className="text-[9px] font-bold text-primary/30 uppercase mt-1 tracking-widest">Level {level.id}</p>
                        </div>
                      </div>
                      {isLocked && <Lock size={12} className="text-primary/20 mt-2" />}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 p-6 bg-accent/5 rounded-[32px] border border-accent/10">
               <div className="flex items-center gap-2 mb-3">
                  <ShieldCheck size={14} className="text-accent" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-accent">Educational Note</span>
               </div>
               <p className="text-[10px] text-primary/50 leading-relaxed font-medium italic">
                 This track focuses on behavior and logical prioritization. No product sales or investment calls are ever made.
               </p>
            </div>
          </div>
        </aside>

        {/* Content Area */}
        <main className="lg:col-span-8">
          {!isQuizMode ? (
            <div className="bg-white rounded-[48px] p-8 lg:p-16 border border-primary/5 shadow-sm animate-in slide-in-from-right-4 duration-500">
               <div className="flex items-center justify-between mb-16">
                  <div className="flex items-center gap-4">
                     <div className="bg-accent/10 p-3 rounded-xl text-accent"><Play size={20} fill="currentColor" /></div>
                     <div>
                        <span className="text-[10px] font-black text-primary/20 uppercase tracking-[0.3em]">Unit {activeUnit + 1} of {currentLevel.units.length}</span>
                        <h3 className="text-xs font-bold text-primary/60">Behavioral Framework</h3>
                     </div>
                  </div>
                  <div className="flex items-center gap-2 text-primary/10">
                     <History size={14} />
                     <span className="text-[10px] font-bold uppercase tracking-widest">Logic Cycle v1.0</span>
                  </div>
               </div>
               
               <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-primary mb-12 leading-tight tracking-tight">{currentUnit.title}</h2>
               
               <div className="prose prose-lg text-primary/70 mb-16 max-w-none">
                  {currentUnit.content}
               </div>

               <div className="flex flex-col sm:flex-row gap-4 pt-12 border-t border-primary/5">
                  <button 
                    onClick={() => activeUnit < currentLevel.units.length - 1 ? setActiveUnit(activeUnit + 1) : setIsQuizMode(true)} 
                    className="flex-1 bg-accent hover:bg-accent/90 text-white py-6 rounded-[24px] font-bold text-sm shadow-xl shadow-accent/10 transition-all flex items-center justify-center gap-3 group"
                  >
                    <span>{activeUnit === currentLevel.units.length - 1 ? 'Go to Level Checkpoint' : 'Continue Preparation'}</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  {activeUnit > 0 && (
                    <button onClick={() => setActiveUnit(activeUnit - 1)} className="flex-1 bg-white border border-primary/10 text-primary/40 py-6 rounded-[24px] font-bold text-sm hover:bg-primary/5 transition-all">Previous Concept</button>
                  )}
               </div>
            </div>
          ) : (
            <div className="bg-white rounded-[48px] p-8 lg:p-16 border border-primary/5 shadow-sm animate-in zoom-in-95 duration-500">
               <div className="text-center mb-16">
                  <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-6 py-2 mb-8 text-accent font-black text-[10px] uppercase tracking-[0.3em]">
                    <HelpCircle size={16} /><span>Reality Check</span>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-primary tracking-tight">Scenario Reflection</h2>
                  <p className="text-primary/40 mt-4 text-sm font-medium">Reflect on how these principles apply to life-like scenarios. No scores are recorded.</p>
               </div>
               
               {currentQuiz && (
                 <div className="space-y-12">
                    <h3 className="text-2xl font-bold text-primary text-center leading-relaxed italic max-w-2xl mx-auto">
                      "{currentQuiz.question}"
                    </h3>
                    
                    <div className="grid gap-4 max-w-2xl mx-auto">
                       {currentQuiz.options.map((option) => (
                         <button 
                            key={option.id} 
                            onClick={() => { setSelectedOption(option.id); setQuizFeedback(option.explanation); }} 
                            disabled={quizFeedback !== null} 
                            className={`w-full p-6 rounded-[24px] border text-left transition-all ${selectedOption === option.id ? (option.id === currentQuiz.correctOptionId ? 'bg-accent/5 border-accent ring-1 ring-accent' : 'bg-primary/5 border-primary/20') : 'bg-[#F8FAFC] border-primary/5 hover:border-primary/20'} ${quizFeedback !== null && option.id !== selectedOption ? 'opacity-40' : ''}`}
                          >
                            <div className="flex items-center justify-between gap-6">
                               <p className="text-sm font-bold text-primary/80">{option.text}</p>
                               {selectedOption === option.id && (
                                 option.id === currentQuiz.correctOptionId 
                                 ? <CheckCircle size={24} className="text-accent shrink-0" />
                                 : <AlertTriangle size={24} className="text-primary/20 shrink-0" />
                               )}
                            </div>
                         </button>
                       ))}
                    </div>

                    {quizFeedback && (
                      <div className="animate-in slide-in-from-bottom-6 duration-500 max-w-2xl mx-auto">
                        <div className={`p-8 rounded-[32px] border ${selectedOption === currentQuiz.correctOptionId ? 'bg-accent/5 border-accent/20 shadow-sm' : 'bg-primary/5 border-primary/10'}`}>
                           <div className="flex items-center gap-2 mb-4">
                              <Info size={16} className={selectedOption === currentQuiz.correctOptionId ? 'text-accent' : 'text-primary/40'} />
                              <span className="text-[10px] font-black uppercase tracking-widest text-primary/30">Framework Insight</span>
                           </div>
                           <p className="text-sm text-primary/70 leading-relaxed font-medium italic">{quizFeedback}</p>
                        </div>
                        <div className="mt-12 flex flex-col sm:flex-row gap-4">
                          <button onClick={handleLevelComplete} className="flex-1 bg-primary text-white py-6 rounded-[24px] font-bold text-sm shadow-xl shadow-primary/10 hover:bg-primary/90 transition-all flex items-center justify-center gap-3 group">
                            <span>{activeLevel === PF_JOURNEY.length ? 'Finalize Track' : 'Complete Level Milestone'}</span>
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                          </button>
                          <button onClick={() => { setQuizFeedback(null); setSelectedOption(null); setIsQuizMode(false); setActiveUnit(0); }} className="flex-1 bg-[#F5F7FA] text-primary/40 py-6 rounded-[24px] font-bold text-sm hover:bg-primary/5 transition-all flex items-center justify-center gap-2"><RotateCcw size={20} /><span>Re-review Materials</span></button>
                        </div>
                      </div>
                    )}
                 </div>
               )}
            </div>
          )}
        </main>
      </div>

      <ServicesCompliance />
      <Disclaimer />
    </div>
  );
};

export default PFBasicsPage;
