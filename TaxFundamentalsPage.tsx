
import React, { useState } from 'react';
import { 
  ArrowLeft, ArrowRight, Gavel, Scale, FileText, Info, ShieldCheck, 
  ChevronRight, HelpCircle, CheckCircle, Play, RotateCcw, Lock, Target,
  Zap, Calendar, Building2, Landmark, Coins
} from 'lucide-react';
import { ServicesCompliance, Disclaimer } from './ComplianceSections';
import { View, LearningLevel } from './types';
import AcknowledgementModal from './AcknowledgementModal';

const TAX_JOURNEY: LearningLevel[] = [
  {
    id: 1,
    title: "Foundation: The Why & Who",
    badge: "Level 1: Beginner Awareness",
    units: [
      {
        id: "t1u1", title: "Direct vs Indirect: The Ecosystem", readingTime: "3 mins",
        content: (
          <div className="space-y-6">
            <p>In India, taxes are the fuel for public infrastructure and social services. They are broadly categorized into two streams of logic:</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-accent/5 border border-accent/20 rounded-2xl">
                <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                  <Landmark size={18} className="text-accent" />
                  Direct Tax
                </h4>
                <p className="text-xs text-primary/60 leading-relaxed">Paid by you directly to the government on your earnings. Example: Income Tax. This is progressive—the more you earn, the higher the rate.</p>
              </div>
              <div className="p-6 bg-primary/5 border border-primary/10 rounded-2xl">
                <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                  <Coins size={18} className="text-primary/40" />
                  Indirect Tax
                </h4>
                <p className="text-xs text-primary/60 leading-relaxed">Paid via the consumption of goods or services. Example: GST. This is regressive—the rate is the same for everyone regardless of income.</p>
              </div>
            </div>
            <p>The Income Tax Act is the primary legal framework governing Direct Taxes in India for Individuals, HUFs, and Businesses.</p>
          </div>
        )
      },
      {
        id: "t1u2", title: "The Time Logic: FY vs AY", readingTime: "4 mins",
        content: (
          <div className="space-y-6">
            <p>A common point of confusion is the timeline. The Indian tax year does not follow the calendar year.</p>
            <div className="relative p-8 bg-white border border-primary/5 rounded-[32px] shadow-inner overflow-hidden">
              <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                <div className="text-center md:text-left flex-1">
                  <p className="text-[10px] font-black text-accent uppercase tracking-widest mb-1">Financial Year (FY)</p>
                  <p className="text-sm font-bold text-primary">April 1 to March 31</p>
                  <p className="text-[11px] text-primary/50 mt-2">The period in which you actually earn your income.</p>
                </div>
                <ArrowRight className="text-primary/10 hidden md:block" />
                <div className="text-center md:text-left flex-1">
                  <p className="text-[10px] font-black text-primary/40 uppercase tracking-widest mb-1">Assessment Year (AY)</p>
                  <p className="text-sm font-bold text-primary">The Following Year</p>
                  <p className="text-[11px] text-primary/50 mt-2">The period in which you file and assess the income of the previous FY.</p>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl" />
            </div>
            <div className="p-5 bg-[#F5F7FA] rounded-2xl border-l-4 border-accent">
               <p className="text-xs text-primary/70 italic">Example: Income earned in FY 2023-24 is assessed in AY 2024-25.</p>
            </div>
          </div>
        )
      }
    ],
    quiz: [{
      id: "q1", question: "If you earned salary between August 2023 and January 2024, which Financial Year does it belong to?",
      correctOptionId: "a1",
      options: [
        { id: "a1", text: "FY 2023-24", explanation: "Correct. The financial year starts on April 1, 2023 and ends on March 31, 2024." },
        { id: "a2", text: "FY 2024-25", explanation: "Incorrect. This would only start from April 2024." },
        { id: "a3", text: "AY 2023-24", explanation: "Incorrect. AY is the assessment year (the following year), not the earning year." }
      ]
    }]
  },
  {
    id: 2,
    title: "Structure: Heads & Regimes",
    badge: "Level 2: Intermediate Framework",
    units: [
      {
        id: "t2u1", title: "The 5 Buckets (Heads of Income)", readingTime: "5 mins",
        content: (
          <div className="space-y-6">
            <p>Under the Income Tax Act, every single rupee you earn must fall into one of five conceptual buckets:</p>
            <div className="space-y-3">
              {[
                { title: "Salary", desc: "Earnings from employment, including allowances and bonuses." },
                { title: "House Property", desc: "Rental income from owned buildings or land." },
                { title: "Business or Profession", desc: "Profits from trade, commerce, or freelancing." },
                { title: "Capital Gains", desc: "Profits from selling assets like property, stocks, or gold." },
                { title: "Other Sources", desc: "Interest income, dividends, lottery, or gifts." }
              ].map((bucket, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-white border border-primary/5 rounded-2xl shadow-sm hover:border-accent/20 transition-all">
                  <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center text-[10px] font-bold text-primary/40">{i+1}</div>
                  <div>
                    <h5 className="font-bold text-sm text-primary">{bucket.title}</h5>
                    <p className="text-[11px] text-primary/50">{bucket.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      },
      {
        id: "t2u2", title: "Regime Logic: New vs Old", readingTime: "6 mins",
        content: (
          <div className="space-y-6">
            <p>India currently operates a dual-regime system. Understanding the logic is more important than picking one immediately.</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-6 bg-primary/[0.02] border border-primary/5 rounded-3xl">
                <h5 className="font-bold text-sm text-primary mb-3">Old Tax Regime</h5>
                <p className="text-[11px] text-primary/60 leading-relaxed">Higher slab rates but allows for Deductions & Exemptions (like 80C, 80D, HRA). Favors those with high savings or home loans.</p>
              </div>
              <div className="p-6 bg-accent/[0.03] border border-accent/10 rounded-3xl">
                <h5 className="font-bold text-accent mb-3">New Tax Regime</h5>
                <p className="text-[11px] text-primary/60 leading-relaxed">Lower slab rates but removes almost all Deductions. Designed as the default path for simplicity and lower documentation.</p>
              </div>
            </div>
            <div className="p-5 bg-yellow-50/50 border border-yellow-100 rounded-2xl flex items-start gap-3">
              <Info size={18} className="text-yellow-600 shrink-0" />
              <p className="text-[11px] text-yellow-800 leading-relaxed font-bold">
                Deductions (Concept): Amounts you can subtract from your total income to lower your taxable base. Example: Investing in PPF reduces your taxable salary head.
              </p>
            </div>
          </div>
        )
      }
    ],
    quiz: [{
      id: "q2", question: "Which Head of Income does interest from a Savings Bank account belong to?",
      correctOptionId: "b3",
      options: [
        { id: "b1", text: "Salary", explanation: "Incorrect. Savings interest is not related to employment." },
        { id: "b2", text: "Capital Gains", explanation: "Incorrect. You are not 'selling' the cash; you are earning yield on it." },
        { id: "b3", text: "Income from Other Sources", explanation: "Correct. This is the residual bucket for income that doesn't fit elsewhere." }
      ]
    }]
  },
  {
    id: 3,
    title: "Advanced Awareness: Nuance",
    badge: "Level 3: Professional Literacy",
    units: [
      {
        id: "t3u1", title: "Residential Nuances: ROR vs NR", readingTime: "5 mins",
        content: (
          <div className="space-y-6">
            <p>Your tax liability in India depends heavily on your Residential Status, which is determined by the number of days you spend in the country.</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="mt-1 w-2 h-2 rounded-full bg-accent shrink-0" />
                <p className="text-xs text-primary/70 leading-relaxed font-bold">ROR (Resident & Ordinarily Resident): Your Global Income is taxable in India.</p>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 w-2 h-2 rounded-full bg-accent shrink-0" />
                <p className="text-xs text-primary/70 leading-relaxed font-bold">NR (Non-Resident): Only income earned or received in India is taxable here.</p>
              </li>
            </ul>
          </div>
        )
      }
    ],
    quiz: [{
      id: "q3", question: "What is the primary factor that determines how much of your global income is taxed in India?",
      correctOptionId: "c2",
      options: [
        { id: "c1", text: "Your citizenship and passport.", explanation: "Incorrect. Indian tax laws are based on residency (physical presence), not just citizenship." },
        { id: "c2", text: "Your residential status (number of days spent in India).", explanation: "Correct. This determines whether your global income or only Indian income is taxed." },
        { id: "c3", text: "Your age and category of work.", explanation: "Incorrect. While age impacts tax rates, it doesn't define the scope of taxable global income." }
      ]
    }]
  }
];

// Added missing component definition and export
const TaxFundamentalsPage = ({ onNavigate }: { onNavigate: (view: View, subTarget?: string) => void }) => {
  const [activeLevel, setActiveLevel] = useState(1);
  const [activeUnit, setActiveUnit] = useState(0);
  const [isQuizMode, setIsQuizMode] = useState(false);
  const [quizFeedback, setQuizFeedback] = useState<string | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [completedLevels, setCompletedLevels] = useState<number[]>([]);
  const [showAcknowledgement, setShowAcknowledgement] = useState(false);

  const currentLevel = TAX_JOURNEY.find(l => l.id === activeLevel)!;
  const currentUnit = currentLevel.units[activeUnit];
  const currentQuiz = currentLevel.quiz?.[0];

  const handleLevelComplete = () => {
    const nextCompleted = Array.from(new Set([...completedLevels, activeLevel]));
    setCompletedLevels(nextCompleted);
    setIsQuizMode(false);
    setQuizFeedback(null);
    setSelectedOption(null);
    setShowAcknowledgement(true);
    if (activeLevel < TAX_JOURNEY.length) {
      setActiveLevel(activeLevel + 1);
      setActiveUnit(0);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const progressPercentage = Math.round((completedLevels.length / TAX_JOURNEY.length) * 100);

  return (
    <div className="animate-in fade-in duration-700 bg-[#F5F7FA] min-h-screen">
      {showAcknowledgement && (
        <AcknowledgementModal 
          userName="Arjun"
          moduleName="Tax Fundamentals Framework"
          level={completedLevels[completedLevels.length - 1] || 1}
          onClose={() => setShowAcknowledgement(false)}
        />
      )}

      <section className="pt-40 pb-16 bg-primary text-white px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center space-x-4 mb-8">
            <button onClick={() => onNavigate('learn')} className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/40 hover:text-white" aria-label="Back to Learn"><ArrowLeft size={20} /></button>
            <div className="h-6 w-px bg-white/10"></div>
            <div className="flex items-center space-x-2 text-accent">
              <Gavel size={16} />
              <span className="text-xs font-bold uppercase tracking-widest">Tax Literacy Track</span>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <h1 className="text-3xl lg:text-5xl font-poppins font-bold mb-4">{currentLevel.title}</h1>
              <p className="text-white/40 text-sm font-bold uppercase tracking-widest">{currentLevel.badge}</p>
            </div>
            <div className="text-right">
              <div className="flex items-center justify-end gap-3 mb-2">
                <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Mastery Depth</span>
                <span className="text-accent font-bold text-sm">{progressPercentage}%</span>
              </div>
              <div className="w-32 h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-accent transition-all duration-1000" style={{ width: `${progressPercentage}%` }}></div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
      </section>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 py-16">
        <aside className="lg:col-span-4">
          <div className="bg-white rounded-[32px] p-8 border border-primary/5 shadow-sm sticky top-32">
            <h3 className="text-sm font-bold text-primary mb-8 flex items-center gap-3">
              <Target size={18} className="text-accent" />
              Progress Record
            </h3>
            <div className="space-y-4">
              {TAX_JOURNEY.map((level) => {
                const isCompleted = completedLevels.includes(level.id);
                const isActive = activeLevel === level.id;
                const isLocked = level.id > activeLevel;
                return (
                  <div key={level.id} className={`p-5 rounded-2xl border transition-all ${isActive ? 'bg-accent/5 border-accent ring-1 ring-accent' : isCompleted ? 'bg-white border-primary/10 opacity-70' : 'bg-[#F8FAFC] border-primary/5 opacity-40'}`}>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${isCompleted ? 'bg-accent text-white' : isActive ? 'bg-accent text-white' : 'bg-primary/5 text-primary/40'}`}>
                          {isCompleted ? <CheckCircle size={14} /> : level.id}
                        </div>
                        <h4 className={`text-xs font-bold ${isActive ? 'text-primary' : 'text-primary/60'}`}>{level.title}</h4>
                      </div>
                      {isLocked && <Lock size={12} className="text-primary/20 mt-1" />}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </aside>

        <main className="lg:col-span-8">
          {!isQuizMode ? (
            <div className="bg-white rounded-[40px] p-8 lg:p-16 border border-primary/5 shadow-sm animate-in slide-in-from-right-4 duration-500">
               <div className="flex items-center justify-between mb-12">
                  <div className="flex items-center gap-3">
                     <div className="bg-accent/10 p-2 rounded-lg text-accent"><Play size={16} fill="currentColor" /></div>
                     <span className="text-[10px] font-bold text-primary/40 uppercase tracking-[0.2em]">Learning Unit {activeUnit + 1} of {currentLevel.units.length}</span>
                  </div>
                  <span className="text-[10px] font-bold text-primary/20 uppercase tracking-widest flex items-center gap-1"><Zap size={10} /> {currentUnit.readingTime} read</span>
               </div>
               <h2 className="text-3xl font-poppins font-bold text-primary mb-10 leading-tight">{currentUnit.title}</h2>
               <div className="prose prose-lg text-primary/70 mb-16 max-w-none">{currentUnit.content}</div>
               <div className="flex flex-col sm:flex-row gap-4 pt-12 border-t border-primary/5">
                  <button onClick={() => activeUnit < currentLevel.units.length - 1 ? setActiveUnit(activeUnit + 1) : setIsQuizMode(true)} className="flex-1 bg-accent hover:bg-accent/90 text-white py-5 rounded-2xl font-bold text-sm shadow-xl shadow-accent/10 transition-all flex items-center justify-center gap-2 group">
                    <span>{activeUnit === currentLevel.units.length - 1 ? 'Go to Checkpoint' : 'Next Concept'}</span>
                    <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
                  </button>
                  {activeUnit > 0 && (
                    <button onClick={() => setActiveUnit(activeUnit - 1)} className="flex-1 bg-white border border-primary/10 text-primary/60 py-5 rounded-2xl font-bold text-sm hover:bg-primary/5 transition-all">Previous</button>
                  )}
               </div>
            </div>
          ) : (
            <div className="bg-white rounded-[40px] p-8 lg:p-16 border border-primary/5 shadow-sm animate-in zoom-in-95 duration-500">
               <div className="text-center mb-16">
                  <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-6 text-accent font-bold text-[10px] uppercase tracking-widest">
                    <HelpCircle size={14} /><span>Checkpoint</span>
                  </div>
                  <h2 className="text-3xl font-poppins font-bold text-primary">Conceptual Review</h2>
               </div>
               {currentQuiz && (
                 <div className="space-y-12">
                    <h3 className="text-xl font-bold text-primary text-center leading-relaxed italic">"{currentQuiz.question}"</h3>
                    <div className="grid gap-4">
                       {currentQuiz.options.map((option) => (
                         <button key={option.id} onClick={() => { setSelectedOption(option.id); setQuizFeedback(option.explanation); }} disabled={quizFeedback !== null} className={`w-full p-6 rounded-2xl border text-left transition-all ${selectedOption === option.id ? (option.id === currentQuiz.correctOptionId ? 'bg-accent/5 border-accent ring-1 ring-accent' : 'bg-primary/5 border-primary/20') : 'bg-[#F8FAFC] border-primary/5 hover:border-primary/20'} ${quizFeedback !== null && option.id !== selectedOption ? 'opacity-40' : ''}`}>
                            <div className="flex items-center justify-between gap-4">
                               <p className="text-sm font-bold text-primary/80">{option.text}</p>
                               {selectedOption === option.id && option.id === currentQuiz.correctOptionId && <CheckCircle size={20} className="text-accent shrink-0" />}
                            </div>
                         </button>
                       ))}
                    </div>
                    {quizFeedback && (
                      <div className="animate-in slide-in-from-bottom-4 duration-500">
                        <div className={`p-8 rounded-3xl border ${selectedOption === currentQuiz.correctOptionId ? 'bg-accent/5 border-accent/20' : 'bg-primary/5 border-primary/10'}`}>
                           <p className="text-sm text-primary/70 leading-relaxed font-medium italic">{quizFeedback}</p>
                        </div>
                        <div className="mt-12 flex flex-col sm:flex-row gap-4">
                          <button onClick={handleLevelComplete} className="flex-1 bg-primary text-white py-5 rounded-2xl font-bold text-sm shadow-xl shadow-primary/10 hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group">
                            <span>{activeLevel === TAX_JOURNEY.length ? 'Finalize Track' : 'Proceed to Next Level'}</span>
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                          </button>
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

export default TaxFundamentalsPage;
