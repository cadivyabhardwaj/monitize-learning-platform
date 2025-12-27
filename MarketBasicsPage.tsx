
import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, ArrowRight, Globe, Scale, Coins, Info, AlertTriangle, ShieldCheck, 
  ChevronRight, TrendingUp, HelpCircle, Layers, BookOpen, CheckCircle, 
  Play, RotateCcw, Lock, Target, ShieldAlert, Zap, Landmark, Users, 
  Lightbulb, Eye, History, AlertCircle
} from 'lucide-react';
import { ServicesCompliance, Disclaimer } from './ComplianceSections';
import { View, LearningLevel, QuizQuestion } from './types';
import { BRAND_NAME } from './constants';
import AcknowledgementModal from './AcknowledgementModal';

/**
 * MARKET_JOURNEY - Full Scale 3-Level Implementation
 * strictly non-advisory, India-centric educational framework.
 */
const MARKET_JOURNEY: LearningLevel[] = [
  {
    id: 1,
    title: "Ecosystem Awareness",
    badge: "Level 1: The Plumbing",
    units: [
      {
        id: "m1u1", title: "Why Markets Exist", readingTime: "4 mins",
        content: (
          <div className="space-y-6">
            <p className="text-primary/70 leading-relaxed">Financial markets are the "economic plumbing" of India. They serve one primary purpose: Moving capital from people who have extra (Savers) to people/entities who can use it to create value (Issuers).</p>
            
            <div className="grid md:grid-cols-2 gap-4 my-8">
              <div className="p-6 bg-accent/5 border border-accent/10 rounded-2xl">
                <div className="flex items-center gap-3 mb-3 text-accent">
                  <Landmark size={20} />
                  <h4 className="font-bold text-xs uppercase tracking-widest">Issuers</h4>
                </div>
                <p className="text-[11px] text-primary/60 leading-relaxed">Companies (like Tata or Reliance) or the Government who need funds to build factories, infrastructure, or technology.</p>
              </div>
              <div className="p-6 bg-primary/5 border border-primary/10 rounded-2xl">
                <div className="flex items-center gap-3 mb-3 text-primary/40">
                  <Users size={20} />
                  <h4 className="font-bold text-xs uppercase tracking-widest">Savers</h4>
                </div>
                <p className="text-[11px] text-primary/60 leading-relaxed">Individuals like you who have surplus funds and want to participate in the growth of the economy.</p>
              </div>
            </div>

            <div className="p-6 bg-[#F8FAFC] rounded-3xl border border-primary/5">
              <h4 className="font-bold text-sm text-primary mb-4 flex items-center gap-2">
                <Lightbulb size={16} className="text-yellow-500" />
                The Analogy
              </h4>
              <p className="text-xs text-primary/50 italic leading-relaxed">"Think of the market like a massive reservoir. If the water (capital) stays in one place, it stagnates. Markets act as the canals that carry this water to the fields (businesses) where it can grow crops (economic value)."</p>
            </div>
          </div>
        )
      },
      {
        id: "m1u2", title: "Entities & Regulators (SEBI)", readingTime: "5 mins",
        content: (
          <div className="space-y-6">
            <p className="text-primary/70 leading-relaxed">The Indian market is highly regulated to ensure fairness. It is NOT a wild west. Key entities include:</p>
            
            <div className="space-y-3">
              {[
                { title: "SEBI", desc: "The Watchdog. Ensures participants don't cheat, and issuers disclose all material facts.", icon: <ShieldCheck className="text-accent" /> },
                { title: "Exchanges (NSE/BSE)", desc: "The Marketplace. The platforms where the actual matching of buy and sell orders happens.", icon: <Globe className="text-primary/30" /> },
                { title: "Depositories (CDSL/NSDL)", desc: "The Digital Vaults. Where your shares are stored safely in electronic (demat) form.", icon: <Lock className="text-primary/30" /> },
                { title: "Brokers", desc: "The Gatekeepers. Intermediaries that provide you the software to access the exchanges.", icon: <Users className="text-primary/30" /> }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-5 bg-white border border-primary/5 rounded-2xl">
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <h5 className="font-bold text-sm text-primary">{item.title}</h5>
                    <p className="text-[11px] text-primary/50 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 bg-accent/5 border border-accent/20 rounded-2xl flex items-center gap-4">
               <ShieldCheck size={24} className="text-accent shrink-0" />
               <p className="text-xs text-primary/70 font-medium italic">"SEBI's role is to ensure a level playing field. They do not guarantee profit, but they do mandate transparency."</p>
            </div>
          </div>
        )
      }
    ],
    quiz: [
      {
        id: "q1_1",
        question: "What is the primary role of the Securities and Exchange Board of India (SEBI)?",
        correctOptionId: "opt2",
        options: [
          { id: "opt1", text: "To predict which stocks will rise in value.", explanation: "Incorrect. SEBI does not make market predictions or provide investment advice." },
          { id: "opt2", text: "To regulate market participants and protect investor interests.", explanation: "Correct. SEBI focuses on fair play, transparency, and regulatory enforcement." },
          { id: "opt3", text: "To provide loans to companies listed on the exchange.", explanation: "Incorrect. SEBI is a regulator, not a financial institution or lender." }
        ]
      },
      {
        id: "q1_2",
        question: "In the 'reservoir analogy', what does 'water' represent?",
        correctOptionId: "opt1",
        options: [
          { id: "opt1", text: "Capital or Surplus Funds", explanation: "Correct. Capital is the fluid resource that markets move to where it is needed." },
          { id: "opt2", text: "A company's physical office building.", explanation: "Incorrect. Physical assets are 'crops' in our analogy; capital is the 'water'." },
          { id: "opt3", text: "The physical paper shares of the past.", explanation: "Incorrect. We are discussing the conceptual flow of money." }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Asset Dynamics",
    badge: "Level 2: Navigating the Waves",
    units: [
      {
        id: "m2u1", title: "Equity vs Debt Logic", readingTime: "5 mins",
        content: (
          <div className="space-y-6">
            <p className="text-primary/70 leading-relaxed">Every market instrument is essentially a variation of two fundamental logical contracts: Ownership (Equity) and Lending (Debt).</p>
            
            <div className="grid gap-6">
              <div className="p-6 bg-white border border-primary/5 rounded-[32px] shadow-sm">
                <h4 className="text-accent font-bold text-sm uppercase tracking-widest mb-4">Equity (Ownership)</h4>
                <p className="text-xs text-primary/60 leading-relaxed mb-4">You become a part-owner of the business. You share in the profits (dividends) and the growth of the company's value. However, if the business fails, your claim on assets comes last.</p>
                <div className="flex items-center gap-2 text-[10px] font-bold text-accent">
                   <TrendingUp size={14} /> Higher Potential Growth / Higher Uncertainty
                </div>
              </div>
              <div className="p-6 bg-white border border-primary/5 rounded-[32px] shadow-sm">
                <h4 className="text-primary font-bold text-sm uppercase tracking-widest mb-4">Debt (Lending)</h4>
                <p className="text-xs text-primary/60 leading-relaxed mb-4">You lend money to an entity (Company or Govt) for a fixed period. They promise to pay you interest (Coupons) and return your principal. You do not share in the company's growth, but you have a prior claim on assets.</p>
                <div className="flex items-center gap-2 text-[10px] font-bold text-primary/40">
                   <Scale size={14} /> Predetermined Returns / Higher Relative Priority
                </div>
              </div>
            </div>
          </div>
        )
      },
      {
        id: "m2u2", title: "Volatility vs Permanent Loss", readingTime: "6 mins",
        content: (
          <div className="space-y-6">
            <p className="text-primary/70 leading-relaxed">This is the most critical conceptual distinction in market education. Many new participants confuse the two.</p>
            
            <div className="relative p-8 bg-[#0B1C2D] text-white rounded-[40px] overflow-hidden">
               <div className="relative z-10">
                  <h4 className="text-accent font-bold text-sm uppercase tracking-widest mb-6">Framework: The Ocean Wave</h4>
                  <div className="space-y-8">
                     <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0">1</div>
                        <div>
                           <h5 className="font-bold text-xs mb-1">Volatility (The Surface Wave)</h5>
                           <p className="text-[11px] text-white/50 leading-relaxed">The price of an asset moving up and down daily based on news, sentiment, or supply. This is structural and expected.</p>
                        </div>
                     </div>
                     <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-red-400/20 flex items-center justify-center text-red-400 shrink-0">2</div>
                        <div>
                           <h5 className="font-bold text-xs mb-1">Permanent Loss (The Leak)</h5>
                           <p className="text-[11px] text-white/50 leading-relaxed">When the underlying business or logic fails entirely. The price doesn't just go down; the value disappears.</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl" />
            </div>

            <div className="p-6 bg-yellow-50/50 border border-yellow-100 rounded-2xl">
               <p className="text-[10px] text-yellow-800 font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                 <History size={14} /> Time Horizon Logic
               </p>
               <p className="text-xs text-yellow-800 leading-relaxed font-medium">
                 Short-term participants focus on volatility. Long-term framework thinkers focus on the fundamental growth of the 'reservoir' and ignore the surface ripples.
               </p>
            </div>
          </div>
        )
      }
    ],
    quiz: [
      {
        id: "q2_1",
        question: "If the price of a fundamentally strong company drops 10% in one week due to broad market panic, what has likely occurred?",
        correctOptionId: "opt1",
        options: [
          { id: "opt1", text: "Temporary Volatility", explanation: "Correct. Broad market sentiment causing a price drop in a healthy company is the definition of volatility." },
          { id: "opt2", text: "Permanent Loss of Capital", explanation: "Incorrect. Loss is only 'permanent' if the business fails or you sell at that low point and never return." },
          { id: "opt3", text: "A sign that the company is going bankrupt.", explanation: "Incorrect. Short-term price movements do not always reflect a company's financial solvency." }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "The Psychological Shield",
    badge: "Level 3: Reality & Limits",
    units: [
      {
        id: "m3u1", title: "Behavioral Biases in India", readingTime: "6 mins",
        content: (
          <div className="space-y-6">
            <p className="text-primary/70 leading-relaxed">We are biological creatures living in a digital market world. Our brains are hardwired for survival, which often leads to poor financial logic.</p>
            
            <div className="grid sm:grid-cols-2 gap-4">
               {[
                 { title: "Herd Mentality", desc: "The urge to buy what everyone else is buying, often at the peak of hype.", icon: <Users size={16} /> },
                 { title: "Recency Bias", desc: "The belief that if the market went up yesterday, it must go up today.", icon: <History size={16} /> },
                 { title: "Loss Aversion", desc: "The psychological pain of a loss feeling twice as intense as the joy of an equal gain.", icon: <Scale size={16} /> },
                 { title: "FOMO", desc: "Fear of Missing Out. Entering risky positions because 'everyone is getting rich' but you.", icon: <Zap size={16} /> }
               ].map((bias, i) => (
                 <div key={i} className="p-5 bg-white border border-primary/5 rounded-2xl hover:border-accent/30 transition-all">
                    <div className="text-accent mb-3">{bias.icon}</div>
                    <h5 className="font-bold text-xs text-primary mb-1">{bias.title}</h5>
                    <p className="text-[10px] text-primary/50 leading-relaxed">{bias.desc}</p>
                 </div>
               ))}
            </div>
          </div>
        )
      },
      {
        id: "m3u2", title: "Why Models & Simulators Fail", readingTime: "5 mins",
        content: (
          <div className="space-y-6">
            <p className="text-primary/70 leading-relaxed">This is a mandatory warning for all Monitize members. Our simulators (SIP, EMI, Tax) are **Linear Models**.</p>
            
            <div className="p-8 bg-red-50/50 border border-red-100 rounded-[32px] space-y-4">
               <div className="flex items-center gap-3 text-red-600 mb-2">
                  <ShieldAlert size={24} />
                  <h4 className="font-bold text-sm uppercase tracking-widest">Model vs Reality</h4>
               </div>
               <p className="text-xs text-red-900/70 leading-relaxed">
                 A simulator assumes a constant 12% return or a fixed interest rate. Real life is a series of "Black Swans" (unexpected major events). 
               </p>
               <ul className="space-y-2">
                 <li className="flex items-start gap-2 text-[10px] text-red-900/60">
                   <div className="mt-1.5 w-1 h-1 rounded-full bg-red-400 shrink-0" />
                   <span>Simulators cannot model human panic.</span>
                 </li>
                 <li className="flex items-start gap-2 text-[10px] text-red-900/60">
                   <div className="mt-1.5 w-1 h-1 rounded-full bg-red-400 shrink-0" />
                   <span>Calculators ignore sudden regulatory shifts or global crises.</span>
                 </li>
               </ul>
            </div>
            
            <div className="p-6 bg-[#0B1C2D] rounded-[32px] text-white">
               <h5 className="font-bold text-xs mb-3 text-accent flex items-center gap-2">
                 <AlertCircle size={14} /> The Final Shield
               </h5>
               <p className="text-[11px] leading-relaxed text-white/60 italic">
                 "Professional advice exists because human psychology is hard to automate. Use tools for estimation; use licensed experts for final navigation."
               </p>
            </div>
          </div>
        )
      }
    ],
    quiz: [
      {
        id: "q3_1",
        question: "What is 'Recency Bias' in the context of investing?",
        correctOptionId: "opt3",
        options: [
          { id: "opt1", text: "The tendency to forget about an investment once you make it.", explanation: "Incorrect. That might be neglect, not recency bias." },
          { id: "opt2", text: "A desire to only buy the absolute newest companies.", explanation: "Incorrect. That is novelty seeking." },
          { id: "opt3", text: "Assuming that recent market performance will continue indefinitely.", explanation: "Correct. This often leads participants to buy at peaks or sell at bottoms based on short-term trends." }
        ]
      }
    ]
  }
];

const MarketBasicsPage = ({ onNavigate }: { onNavigate: (view: View, subTarget?: string) => void }) => {
  const [activeLevel, setActiveLevel] = useState(1);
  const [activeUnit, setActiveUnit] = useState(0);
  const [isQuizMode, setIsQuizMode] = useState(false);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [quizFeedback, setQuizFeedback] = useState<string | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [completedLevels, setCompletedLevels] = useState<number[]>([]);
  const [showAcknowledgement, setShowAcknowledgement] = useState(false);

  const currentLevel = MARKET_JOURNEY.find(l => l.id === activeLevel)!;
  const currentUnit = currentLevel.units[activeUnit];
  const currentLevelQuizzes = currentLevel.quiz || [];
  const activeQuiz = currentLevelQuizzes[currentQuizIndex];

  const handleLevelComplete = () => {
    const nextCompleted = Array.from(new Set([...completedLevels, activeLevel]));
    setCompletedLevels(nextCompleted);
    setIsQuizMode(false);
    setQuizFeedback(null);
    setSelectedOption(null);
    setCurrentQuizIndex(0);
    setShowAcknowledgement(true);

    if (activeLevel < MARKET_JOURNEY.length) {
      // Logic for moving to next level happens inside the modal or can be triggered here
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNextQuiz = () => {
    if (currentQuizIndex < currentLevelQuizzes.length - 1) {
      setCurrentQuizIndex(currentQuizIndex + 1);
      setQuizFeedback(null);
      setSelectedOption(null);
    } else {
      handleLevelComplete();
    }
  };

  const progressPercentage = Math.round((completedLevels.length / MARKET_JOURNEY.length) * 100);

  return (
    <div className="animate-in fade-in duration-700 bg-[#F5F7FA] min-h-screen">
      {showAcknowledgement && (
        <AcknowledgementModal 
          userName="Member" 
          moduleName="Market & Investing Basics"
          level={completedLevels[completedLevels.length - 1] || 1}
          onClose={() => {
            setShowAcknowledgement(false);
            if (activeLevel < MARKET_JOURNEY.length && completedLevels.includes(activeLevel)) {
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
              <Globe size={16} />
              <span className="text-xs font-bold uppercase tracking-widest">Market Literacy Track</span>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <h1 className="text-3xl lg:text-5xl font-poppins font-bold mb-4 tracking-tight">{currentLevel.title}</h1>
              <p className="text-accent text-[10px] font-black uppercase tracking-[0.2em]">{currentLevel.badge}</p>
            </div>
            <div className="text-right">
              <div className="flex items-center justify-end gap-3 mb-2">
                <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Conceptual Completion</span>
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
              <Target size={18} className="text-accent" />
              Learning Journey
            </h3>
            <div className="space-y-4">
              {MARKET_JOURNEY.map((level) => {
                const isCompleted = completedLevels.includes(level.id);
                const isActive = activeLevel === level.id;
                const isLocked = level.id > activeLevel && !isCompleted;

                return (
                  <div key={level.id} className={`p-6 rounded-[24px] border transition-all ${isActive ? 'bg-accent/5 border-accent ring-1 ring-accent' : isCompleted ? 'bg-white border-primary/10 opacity-70' : 'bg-[#F8FAFC] border-primary/5 opacity-40'}`}>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold ${isCompleted ? 'bg-accent text-white' : isActive ? 'bg-accent text-white' : 'bg-primary/5 text-primary/40'}`}>
                          {isCompleted ? <CheckCircle size={16} /> : level.id}
                        </div>
                        <div>
                           <h4 className={`text-xs font-bold ${isActive ? 'text-primary' : 'text-primary/60'}`}>{level.title}</h4>
                           <p className="text-[9px] font-bold text-primary/30 uppercase mt-1 tracking-widest">{level.badge.split(':')[0]}</p>
                        </div>
                      </div>
                      {isLocked && <Lock size={12} className="text-primary/20 mt-2" />}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 p-6 bg-[#0B1C2D] rounded-[32px] text-white">
               <div className="flex items-center gap-2 mb-3">
                  <ShieldCheck size={14} className="text-accent" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-accent">Educational Policy</span>
               </div>
               <p className="text-[10px] text-white/40 leading-relaxed font-medium">
                 This track focuses on the structural logic of the Indian market. No performance metrics or stock recommendations are ever provided.
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
                        <h3 className="text-xs font-bold text-primary/60">Module Review</h3>
                     </div>
                  </div>
                  <div className="flex items-center gap-2 text-primary/10">
                     <History size={14} />
                     <span className="text-[10px] font-bold uppercase tracking-widest">Framework v4.2</span>
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
                    <span>{activeUnit === currentLevel.units.length - 1 ? 'Go to Level Checkpoint' : 'Continue Learning'}</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  {activeUnit > 0 && (
                    <button onClick={() => setActiveUnit(activeUnit - 1)} className="flex-1 bg-white border border-primary/10 text-primary/40 py-6 rounded-[24px] font-bold text-sm hover:bg-primary/5 transition-all">Previous Unit</button>
                  )}
               </div>
            </div>
          ) : (
            <div className="bg-white rounded-[48px] p-8 lg:p-16 border border-primary/5 shadow-sm animate-in zoom-in-95 duration-500">
               <div className="text-center mb-16">
                  <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-6 py-2 mb-8 text-accent font-black text-[10px] uppercase tracking-[0.3em]">
                    <HelpCircle size={16} /><span>Level Checkpoint</span>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-primary tracking-tight">Conceptual Reflection</h2>
                  <p className="text-primary/40 mt-4 text-sm font-medium">Verify your understanding of the frameworks covered in this level.</p>
               </div>
               
               {activeQuiz && (
                 <div className="space-y-12">
                    <div className="flex items-center justify-center gap-1.5 mb-2">
                       {currentLevelQuizzes.map((_, i) => (
                         <div key={i} className={`h-1 rounded-full transition-all ${i === currentQuizIndex ? 'w-8 bg-accent' : i < currentQuizIndex ? 'w-2 bg-accent/40' : 'w-2 bg-primary/10'}`} />
                       ))}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-primary text-center leading-relaxed italic max-w-2xl mx-auto">
                      "{activeQuiz.question}"
                    </h3>
                    
                    <div className="grid gap-4 max-w-2xl mx-auto">
                       {activeQuiz.options.map((option) => (
                         <button 
                            key={option.id} 
                            onClick={() => { setSelectedOption(option.id); setQuizFeedback(option.explanation); }} 
                            disabled={quizFeedback !== null} 
                            className={`w-full p-6 rounded-[24px] border text-left transition-all ${selectedOption === option.id ? (option.id === activeQuiz.correctOptionId ? 'bg-accent/5 border-accent ring-1 ring-accent' : 'bg-primary/5 border-primary/20') : 'bg-[#F8FAFC] border-primary/5 hover:border-primary/20'} ${quizFeedback !== null && option.id !== selectedOption ? 'opacity-40' : ''}`}
                          >
                            <div className="flex items-center justify-between gap-6">
                               <p className="text-sm font-bold text-primary/80">{option.text}</p>
                               {selectedOption === option.id && (
                                 option.id === activeQuiz.correctOptionId 
                                 ? <CheckCircle size={24} className="text-accent shrink-0" />
                                 : <AlertCircle size={24} className="text-primary/20 shrink-0" />
                               )}
                            </div>
                         </button>
                       ))}
                    </div>

                    {quizFeedback && (
                      <div className="animate-in slide-in-from-bottom-6 duration-500 max-w-2xl mx-auto">
                        <div className={`p-8 rounded-[32px] border ${selectedOption === activeQuiz.correctOptionId ? 'bg-accent/5 border-accent/20 shadow-sm' : 'bg-primary/5 border-primary/10'}`}>
                           <div className="flex items-center gap-2 mb-4">
                              <Info size={16} className={selectedOption === activeQuiz.correctOptionId ? 'text-accent' : 'text-primary/40'} />
                              <span className="text-[10px] font-black uppercase tracking-widest text-primary/30">Reasoning Insight</span>
                           </div>
                           <p className="text-sm text-primary/70 leading-relaxed font-medium italic">{quizFeedback}</p>
                        </div>
                        <div className="mt-12 flex flex-col sm:flex-row gap-4">
                          <button onClick={handleNextQuiz} className="flex-1 bg-primary text-white py-6 rounded-[24px] font-bold text-sm shadow-xl shadow-primary/10 hover:bg-primary/90 transition-all flex items-center justify-center gap-3 group">
                            <span>{currentQuizIndex < currentLevelQuizzes.length - 1 ? 'Next Question' : activeLevel === MARKET_JOURNEY.length ? 'Finalize Track' : 'Complete Level'}</span>
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

export default MarketBasicsPage;
