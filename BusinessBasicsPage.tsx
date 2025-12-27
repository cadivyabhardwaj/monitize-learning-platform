import React, { useState } from 'react';
// Fix: Added AlertCircle to the imports from lucide-react
import { 
  ArrowLeft, ArrowRight, Briefcase, ShieldCheck, Gavel, Info, 
  HelpCircle, CheckCircle, Play, RotateCcw, Lock, Zap, 
  Building2, Scale, TrendingUp, AlertTriangle, Landmark, 
  Layers, Users, History, Calendar, ShieldAlert, AlertCircle
} from 'lucide-react';
import { ServicesCompliance, Disclaimer } from './ComplianceSections';
import { View, LearningLevel } from './types';
import AcknowledgementModal from './AcknowledgementModal';

/**
 * BUSINESS_JOURNEY - 3 Level Educational Framework for Indian Founders
 * Strictly non-advisory, focusing on regulatory logic.
 */
const BUSINESS_JOURNEY: LearningLevel[] = [
  {
    id: 1,
    title: "Business Awareness",
    badge: "Level 1: The Entrepreneurial Shift",
    units: [
      {
        id: "b1u1", title: "When Does a Hobby Become a Business?", readingTime: "4 mins",
        content: (
          <div className="space-y-6">
            <p className="text-primary/70 leading-relaxed">In India, the transition from a 'side-hustle' to a 'business' is defined by the **nature and frequency** of transactions. Logic dictates that once you earn for profit with regularity, the Income Tax Act views you as a business entity.</p>
            
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="p-6 bg-white border border-primary/5 rounded-[32px] shadow-sm">
                <h4 className="text-primary/40 font-bold text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
                   <Users size={16} /> Individual Income
                </h4>
                <p className="text-[11px] text-primary/60">Salary or gifts that are personal in nature. Documentation is limited to Form 16 or personal bank statements.</p>
              </div>
              <div className="p-6 bg-[#0B1C2D] text-white rounded-[32px] shadow-xl">
                <h4 className="text-accent font-bold text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
                   <Briefcase size={16} /> Business Income
                </h4>
                <p className="text-[11px] text-white/50">Revenue earned through trade, profession, or freelancing. Requires a separate logical tracking of Expenses vs. Revenue.</p>
              </div>
            </div>

            <div className="p-6 bg-accent/5 border border-accent/10 rounded-2xl">
               <h5 className="font-bold text-xs text-primary mb-2 flex items-center gap-2"><Landmark size={14} className="text-accent" /> Why PAN Matters</h5>
               <p className="text-xs text-primary/70 leading-relaxed">For Sole Proprietors, your personal PAN is your business identity. For Companies, a fresh PAN is required. All digital footprints in India's economy are traced back to this single identifier.</p>
            </div>
          </div>
        )
      },
      {
        id: "b1u2", title: "The 'Profit' Logic", readingTime: "4 mins",
        content: (
          <div className="space-y-6">
            <p className="text-primary/70 leading-relaxed">New founders often celebrate 'Revenue' but fail on 'Profit' awareness. Understanding the difference is the first step toward tax and scale awareness.</p>
            <div className="relative p-8 bg-white border border-primary/5 rounded-[40px] overflow-hidden">
               <div className="space-y-4">
                  <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-primary/30">
                     <span>Gross Revenue</span>
                     <span className="text-primary font-black">₹ 10,00,000</span>
                  </div>
                  <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-red-400">
                     <span>(-) Operating Expenses</span>
                     <span className="font-black">₹ 6,00,000</span>
                  </div>
                  <div className="h-px bg-primary/5 w-full"></div>
                  <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-accent">
                     <span>(=) Taxable Profit</span>
                     <span className="font-black">₹ 4,00,000</span>
                  </div>
               </div>
            </div>
            <p className="text-[11px] text-primary/50 leading-relaxed italic">
              "Compliance in India is almost always calculated on your Profit (Income Tax) or your Revenue (GST thresholds). Logic says you must track both meticulously from day one."
            </p>
          </div>
        )
      }
    ],
    quiz: [{
      id: "bq1", question: "In a Sole Proprietorship, which document is used to file the annual income tax of the business?",
      correctOptionId: "ba1",
      options: [
        { id: "ba1", text: "The owner's personal PAN.", explanation: "Correct. In a Sole Proprietorship, the business and the individual are the same legal entity for tax purposes." },
        { id: "ba2", text: "A separate Business GST number.", explanation: "Incorrect. GST is an indirect tax identifier; income tax is always linked to a PAN." },
        { id: "ba3", text: "The business trade license.", explanation: "Incorrect. Trade licenses are local municipality permits, not tax identifiers." }
      ]
    }]
  },
  {
    id: 2,
    title: "Structure & Compliance",
    badge: "Level 2: The Regulatory Framework",
    units: [
      {
        id: "b2u1", title: "GST: Input & Output Logic", readingTime: "6 mins",
        content: (
          <div className="space-y-6">
            <p className="text-primary/70 leading-relaxed">Goods and Services Tax (GST) is not a cost to your business; it is a 'Pass-Through' mechanism. Logic dictates you are merely a collection agent for the government.</p>
            
            <div className="p-8 bg-[#F8FAFC] rounded-[32px] border border-primary/5 space-y-6">
               <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0 font-bold">In</div>
                  <div>
                     <h5 className="font-bold text-xs mb-1">Input Tax Credit (ITC)</h5>
                     <p className="text-[11px] text-primary/50 leading-relaxed">The GST you pay to your suppliers. You can 'claim' this back against the tax you collect from your customers.</p>
                  </div>
               </div>
               <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 font-bold">Out</div>
                  <div>
                     <h5 className="font-bold text-xs mb-1">Output Tax</h5>
                     <p className="text-[11px] text-primary/50 leading-relaxed">The GST you charge your customers. You must deposit the difference (Output - Input) with the government.</p>
                  </div>
               </div>
            </div>

            <div className="p-6 bg-red-50/50 border border-red-100 rounded-2xl flex items-center gap-4">
               <AlertTriangle size={24} className="text-red-500 shrink-0" />
               <p className="text-xs text-red-900/70 font-medium">
                 "Failing to collect GST when you are above the registration threshold (e.g. ₹20L/₹40L) can lead to a liability on your total revenue, not just your profit."
               </p>
            </div>
          </div>
        )
      },
      {
        id: "b2u2", title: "TDS: Why You Deduct Tax", readingTime: "5 mins",
        content: (
          <div className="space-y-6">
            <p className="text-primary/70 leading-relaxed">Tax Deducted at Source (TDS) is a mechanism where the buyer of a service ensures the government gets its tax before the seller gets their payment.</p>
            <div className="grid sm:grid-cols-2 gap-4">
               <div className="p-5 bg-white border border-primary/5 rounded-2xl">
                  <h5 className="font-bold text-[11px] text-primary mb-2 flex items-center gap-2"><History size={14} /> The Cycle</h5>
                  <p className="text-[10px] text-primary/50 leading-relaxed">You pay a professional ₹1,0,000. You deduct ₹10,000 (TDS). You pay the professional ₹90,000. You deposit ₹10,000 with the government.</p>
               </div>
               <div className="p-5 bg-white border border-primary/5 rounded-2xl">
                  <h5 className="font-bold text-[11px] text-primary mb-2 flex items-center gap-2"><Calendar size={14} /> The Deadline</h5>
                  <p className="text-[10px] text-primary/50 leading-relaxed">TDS must typically be deposited by the 7th of the following month. Logic dictates that missing this deadline leads to high interest penalties.</p>
               </div>
            </div>
          </div>
        )
      }
    ],
    quiz: [{
      id: "bq2", question: "If your business pays ₹50,000 to a software company and you are required to deduct TDS, who is responsible for depositing that tax?",
      correctOptionId: "ba2_1",
      options: [
        { id: "ba2_1", text: "Your Business (The Payer).", explanation: "Correct. The payer is responsible for deducting and depositing TDS on behalf of the payee." },
        { id: "ba2_2", text: "The Software Company (The Payee).", explanation: "Incorrect. While they earn the income, the law mandates you (the payer) to withhold and deposit the tax." },
        { id: "ba2_3", text: "Neither, if both are below the GST threshold.", explanation: "Incorrect. TDS and GST are separate frameworks with different thresholds and logics." }
      ]
    }]
  },
  {
    id: 3,
    title: "Risk & Governance",
    badge: "Level 3: Scale & Scrutiny",
    units: [
      {
        id: "b3u1", title: "The Audit Awareness", readingTime: "6 mins",
        content: (
          <div className="space-y-6">
            <p className="text-primary/70 leading-relaxed">An 'Audit' is not a punishment; it is a formal verification of your logical claims. As you scale, statutory audits become mandatory based on turnover thresholds.</p>
            <div className="p-8 bg-[#0B1C2D] text-white rounded-[40px] space-y-6">
               <div className="flex items-center gap-3 text-accent">
                  <Scale size={20} />
                  <h4 className="font-bold text-sm uppercase tracking-widest">Internal Governance</h4>
               </div>
               <p className="text-xs text-white/50 leading-relaxed">
                 Good governance means having a trail for every transaction. Digital payments, proper invoices, and reconciled bank statements are the 'armor' that protects you during a tax scrutiny.
               </p>
               <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center p-4 bg-white/5 rounded-2xl">
                     <p className="text-xl font-bold text-white">100%</p>
                     <p className="text-[9px] text-white/30 uppercase mt-1">Digital Trail</p>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-2xl">
                     <p className="text-xl font-bold text-white">Monthly</p>
                     <p className="text-[9px] text-white/30 uppercase mt-1">Reconciliation</p>
                  </div>
               </div>
            </div>
          </div>
        )
      },
      {
        id: "b3u2", title: "Regulatory Red Flags", readingTime: "5 mins",
        content: (
          <div className="space-y-6">
            <p className="text-primary/70 leading-relaxed">India's tax authorities use AI and Big Data to spot logical inconsistencies in business filings. Understanding these 'Red Flags' is critical for long-term safety.</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 p-5 bg-white border border-primary/5 rounded-2xl">
                <ShieldAlert className="text-red-400 shrink-0" size={20} />
                <div>
                   <h5 className="font-bold text-sm text-primary">Inconsistent Filing</h5>
                   <p className="text-[11px] text-primary/50">When turnover reported in GST returns does not match the revenue reported in Income Tax returns.</p>
                </div>
              </li>
              <li className="flex items-start gap-4 p-5 bg-white border border-primary/5 rounded-2xl">
                <ShieldAlert className="text-red-400 shrink-0" size={20} />
                <div>
                   <h5 className="font-bold text-sm text-primary">High Cash Usage</h5>
                   <p className="text-[11px] text-primary/50">Large cash transactions are monitored and often disallowed as business expenses beyond specific daily limits (e.g. ₹10,000).</p>
                </div>
              </li>
            </ul>
            <div className="p-6 bg-accent rounded-[32px] text-white mt-8">
               <h5 className="font-bold text-xs mb-3 flex items-center gap-2"><Users size={14} /> The Expert Limit</h5>
               <p className="text-[11px] leading-relaxed italic opacity-70">"You are responsible for your business's compliance, not your accountant. Learn the logic; hire a licensed CA for the execution."</p>
            </div>
          </div>
        )
      }
    ],
    quiz: [{
      id: "bq3", question: "What is the primary risk of using a personal bank account for high-volume business transactions?",
      correctOptionId: "ba3_2",
      options: [
        { id: "ba3_1", text: "The bank might charge higher fees.", explanation: "Incorrect. While true, this is a financial cost, not a regulatory risk." },
        { id: "ba3_2", text: "Difficulty in separating personal gifts from business revenue during an audit.", explanation: "Correct. Mixing funds creates an 'opaque trail,' making it hard to prove to tax authorities what is taxable and what is not." },
        { id: "ba3_3", text: "It is strictly illegal for all businesses.", explanation: "Incorrect. It is not 'illegal' for very small freelancers, but it is a major governance risk as complexity grows." }
      ]
    }]
  }
];

const BusinessBasicsPage = ({ onNavigate }: { onNavigate: (view: View, subTarget?: string) => void }) => {
  const [activeLevel, setActiveLevel] = useState(1);
  const [activeUnit, setActiveUnit] = useState(0);
  const [isQuizMode, setIsQuizMode] = useState(false);
  const [quizFeedback, setQuizFeedback] = useState<string | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [completedLevels, setCompletedLevels] = useState<number[]>([]);
  const [showAcknowledgement, setShowAcknowledgement] = useState(false);

  const currentLevel = BUSINESS_JOURNEY.find(l => l.id === activeLevel)!;
  const currentUnit = currentLevel.units[activeUnit];
  const currentQuiz = currentLevel.quiz?.[0];

  const handleLevelComplete = () => {
    const nextCompleted = Array.from(new Set([...completedLevels, activeLevel]));
    setCompletedLevels(nextCompleted);
    setIsQuizMode(false);
    setQuizFeedback(null);
    setSelectedOption(null);
    setShowAcknowledgement(true);

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const progressPercentage = Math.round((completedLevels.length / BUSINESS_JOURNEY.length) * 100);

  return (
    <div className="animate-in fade-in duration-700 bg-[#F5F7FA] min-h-screen">
      {showAcknowledgement && (
        <AcknowledgementModal 
          userName="Founder" 
          moduleName="Business & MSME Awareness"
          level={completedLevels[completedLevels.length - 1] || 1}
          onClose={() => {
            setShowAcknowledgement(false);
            if (activeLevel < BUSINESS_JOURNEY.length && completedLevels.includes(activeLevel)) {
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
              <Briefcase size={16} />
              <span className="text-xs font-bold uppercase tracking-widest">Founder Awareness Track</span>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <h1 className="text-3xl lg:text-5xl font-poppins font-bold mb-4">{currentLevel.title}</h1>
              <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em]">{currentLevel.badge}</p>
            </div>
            <div className="text-right">
              <div className="flex items-center justify-end gap-3 mb-2">
                <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Awareness Milestone</span>
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
        {/* Sidebar */}
        <aside className="lg:col-span-4">
          <div className="bg-white rounded-[40px] p-8 border border-primary/5 shadow-sm sticky top-32">
            <h3 className="text-sm font-bold text-primary mb-10 flex items-center gap-3">
              <Building2 size={18} className="text-accent" />
              Platform Roadmap
            </h3>
            <div className="space-y-4">
              {BUSINESS_JOURNEY.map((level) => {
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
                           <p className="text-[9px] font-bold text-primary/30 uppercase mt-1 tracking-widest">Stage {level.id}</p>
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
                  <span className="text-[10px] font-black uppercase tracking-widest text-accent">Compliance Shield</span>
               </div>
               <p className="text-[10px] text-primary/50 leading-relaxed font-medium italic">
                 Monitize builds Awareness. For statutory registrations or filings, always engage a licensed professional.
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
                        <span className="text-[10px] font-black text-primary/20 uppercase tracking-[0.3em]">Module {activeUnit + 1} of {currentLevel.units.length}</span>
                        <h3 className="text-xs font-bold text-primary/60">Institutional Framework</h3>
                     </div>
                  </div>
                  <div className="flex items-center gap-2 text-primary/10">
                     <History size={14} />
                     <span className="text-[10px] font-bold uppercase tracking-widest">Logic Cycle v2.1</span>
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
                    <span>{activeUnit === currentLevel.units.length - 1 ? 'Go to Stage Checkpoint' : 'Continue Preparation'}</span>
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
                    <HelpCircle size={16} /><span>Conceptual Review</span>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-primary tracking-tight">Stage Reflection</h2>
                  <p className="text-primary/40 mt-4 text-sm font-medium">Verify your understanding of Indian business logic. No scores are recorded.</p>
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
                                 : <AlertCircle size={24} className="text-primary/20 shrink-0" />
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
                              <span className="text-[10px] font-black uppercase tracking-widest text-primary/30">Reasoning Framework</span>
                           </div>
                           <p className="text-sm text-primary/70 leading-relaxed font-medium italic">{quizFeedback}</p>
                        </div>
                        <div className="mt-12 flex flex-col sm:flex-row gap-4">
                          <button onClick={handleLevelComplete} className="flex-1 bg-primary text-white py-6 rounded-[24px] font-bold text-sm shadow-xl shadow-primary/10 hover:bg-primary/90 transition-all flex items-center justify-center gap-3 group">
                            <span>{activeLevel === BUSINESS_JOURNEY.length ? 'Finalize Track' : 'Complete Awareness Milestone'}</span>
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                          </button>
                          <button onClick={() => { setQuizFeedback(null); setSelectedOption(null); setIsQuizMode(false); setActiveUnit(0); }} className="flex-1 bg-[#F5F7FA] text-primary/40 py-6 rounded-[24px] font-bold text-sm hover:bg-primary/5 transition-all flex items-center justify-center gap-2"><RotateCcw size={20} /><span>Re-review Content</span></button>
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

export default BusinessBasicsPage;
