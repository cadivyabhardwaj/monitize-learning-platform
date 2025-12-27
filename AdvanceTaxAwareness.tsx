
import React, { useState, useMemo } from 'react';
import { 
  ArrowLeft, Info, CalendarClock, Scale, Gavel, 
  AlertTriangle, CheckCircle2, History, Landmark, 
  ChevronRight, ArrowRight, ShieldCheck, Zap,
  FileText, HelpCircle, BookOpen, ExternalLink
} from 'lucide-react';

interface AdvanceTaxState {
  isSeniorCitizen: boolean;
  hasBusinessIncome: boolean;
  estimatedLiability: 'below10k' | 'above10k' | 'uncalculated';
  unexpectedGains: boolean;
}

const AdvanceTaxAwareness = ({ onBack }: { onBack: () => void }) => {
  const [state, setState] = useState<AdvanceTaxState>({
    isSeniorCitizen: false,
    hasBusinessIncome: false,
    estimatedLiability: 'uncalculated',
    unexpectedGains: false,
  });

  const assessment = useMemo(() => {
    // Logic: Section 207 & 208 of Income Tax Act
    const isExemptSenior = state.isSeniorCitizen && !state.hasBusinessIncome;
    const isAboveThreshold = state.estimatedLiability === 'above10k';
    
    let statusLabel = "Identification in Progress";
    let statusColor = "text-white/40";
    let isLikelyApplicable = false;
    let description = "Please finalize profile details to view applicability.";

    if (state.estimatedLiability === 'uncalculated') {
      statusLabel = "Awaiting Input";
    } else if (isExemptSenior) {
      statusLabel = "Advance Tax Not Applicable Based on Inputs";
      statusColor = "text-emerald-400";
      isLikelyApplicable = false;
      description = "Under Section 207, resident senior citizens with no income from Business or Profession are exempt from advance tax provisions.";
    } else if (isAboveThreshold) {
      statusLabel = "Advance Tax Likely Applicable";
      statusColor = "text-accent";
      isLikelyApplicable = true;
      description = "Section 208 mandates advance tax for every assessee whose estimated tax liability for the year is ₹10,000 or more.";
    } else {
      statusLabel = "Advance Tax Not Applicable Based on Inputs";
      statusColor = "text-white/60";
      isLikelyApplicable = false;
      description = "Your estimated liability after TDS/TCS is below the ₹10,000 threshold defined in Section 208.";
    }

    return { statusLabel, statusColor, isLikelyApplicable, description, isExemptSenior };
  }, [state]);

  const installments = [
    { date: 'June 15', pct: '15%', label: 'Installment 1', note: 'Based on initial estimates' },
    { date: 'Sept 15', pct: '45%', label: 'Installment 2', note: 'Cumulative liability check' },
    { date: 'Dec 15', pct: '75%', label: 'Installment 3', note: 'Adjustment for gains' },
    { date: 'March 15', pct: '100%', label: 'Final Installment', note: 'Closing of the fiscal year' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <button 
        onClick={onBack}
        className="flex items-center space-x-2 text-primary/40 hover:text-primary mb-8 font-bold text-xs uppercase tracking-widest transition-colors"
      >
        <ArrowLeft size={16} />
        <span>Return to Utilities List</span>
      </button>

      <div className="grid lg:grid-cols-12 gap-12">
        {/* PHASE 1: PROFILE IDENTIFICATION (LEFT COLUMN) */}
        <div className="lg:col-span-4 space-y-10">
          <header>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-[10px] font-black text-primary/40 uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              Phase 1: Profile Identification
            </div>
            <h2 className="text-3xl font-poppins font-bold text-primary mb-3 leading-tight">Identify Your <br />Tax Characteristics</h2>
            <p className="text-primary/60 text-sm leading-relaxed">
              Conceptual assessment based on the "Pay-As-You-Earn" framework of the Indian Income Tax Act.
            </p>
          </header>

          <section className="bg-white rounded-[40px] p-8 border border-primary/5 shadow-sm space-y-8">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                   <p className="text-xs font-bold text-primary">Senior Citizen (Age 60+)</p>
                   <p className="text-[10px] text-primary/30 italic">Determines Section 207 status.</p>
                </div>
                <button 
                  onClick={() => setState(s => ({...s, isSeniorCitizen: !s.isSeniorCitizen}))}
                  className={`w-11 h-6 rounded-full transition-all relative ${state.isSeniorCitizen ? 'bg-accent' : 'bg-primary/10'}`}
                >
                  <div className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow-sm transition-all ${state.isSeniorCitizen ? 'right-1' : 'left-1'}`} />
                </button>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-primary/5">
                <div>
                   <p className="text-xs font-bold text-primary">Income from Business/Profession</p>
                   <p className="text-[10px] text-primary/30 italic">Freelancing, trade, or consultancy.</p>
                </div>
                <button 
                  onClick={() => setState(s => ({...s, hasBusinessIncome: !s.hasBusinessIncome}))}
                  className={`w-11 h-6 rounded-full transition-all relative ${state.hasBusinessIncome ? 'bg-accent' : 'bg-primary/10'}`}
                >
                  <div className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow-sm transition-all ${state.hasBusinessIncome ? 'right-1' : 'left-1'}`} />
                </button>
              </div>

              <div className="space-y-4 pt-6 border-t border-primary/5">
                <p className="text-xs font-bold text-primary">Estimated Annual Liability (Post-TDS)</p>
                <div className="grid grid-cols-2 gap-2">
                  {(['below10k', 'above10k'] as const).map(option => (
                    <button
                      key={option}
                      onClick={() => setState(s => ({ ...s, estimatedLiability: option }))}
                      className={`py-3 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all border ${state.estimatedLiability === option ? 'bg-primary border-primary text-white shadow-lg' : 'bg-white border-primary/5 text-primary/40 hover:bg-primary/5'}`}
                    >
                      {option === 'below10k' ? 'Under ₹10k' : 'Over ₹10k'}
                    </button>
                  ))}
                </div>
                <p className="text-[9px] text-primary/40 leading-relaxed italic">The ₹10,000 threshold applies to the estimated tax remaining after accounting for TDS/TCS.</p>
              </div>

              <div className="flex items-start gap-4 pt-6 border-t border-primary/5">
                <div className="flex-1">
                   <p className="text-xs font-bold text-primary">Potential Capital Gains</p>
                   <p className="text-[10px] text-primary/30 italic">Sale of property, stocks, or gold.</p>
                </div>
                <button 
                  onClick={() => setState(s => ({...s, unexpectedGains: !s.unexpectedGains}))}
                  className={`w-11 h-6 rounded-full transition-all relative ${state.unexpectedGains ? 'bg-accent' : 'bg-primary/10'}`}
                >
                  <div className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow-sm transition-all ${state.unexpectedGains ? 'right-1' : 'left-1'}`} />
                </button>
              </div>
            </div>
          </section>

          <div className="bg-[#0B1C2D] p-8 rounded-[32px] text-white">
            <div className="flex items-center gap-3 mb-4 text-accent">
               <HelpCircle size={20} />
               <h4 className="font-bold text-xs uppercase tracking-widest">Why This Matters</h4>
            </div>
            <p className="text-[11px] text-white/50 leading-relaxed font-medium italic">
              Advance tax facilitates liquidity for public infrastructure through the year and prevents a disproportionate tax burden on taxpayers during the filing season.
            </p>
          </div>
        </div>

        {/* PHASE 2-5: RESULTS & EDUCATION (RIGHT COLUMN) */}
        <div className="lg:col-span-8 space-y-8">
          <div className="bg-[#0B1C2D] rounded-[48px] p-8 lg:p-16 text-white relative overflow-hidden h-full flex flex-col shadow-2xl">
            
            {/* Header / Module Indicator */}
            <div className="flex items-center justify-between mb-16 relative z-10">
              <h3 className="text-xl font-bold flex items-center space-x-3">
                <Landmark className="text-accent" size={24} />
                <span>Statutory Awareness Roadmap</span>
              </h3>
              <div className="bg-white/5 border border-white/10 px-6 py-2 rounded-full flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                <span className="text-[10px] font-black uppercase tracking-widest text-white/60">Logic Module v2.0</span>
              </div>
            </div>

            <div className="space-y-16 relative z-10 flex-1">
              
              {/* PHASE 2: APPLICABILITY OUTCOME */}
              <div className={`p-8 lg:p-12 rounded-[40px] border transition-all duration-700 ${assessment.isLikelyApplicable ? 'bg-accent/10 border-accent/20' : 'bg-white/[0.03] border-white/5'}`}>
                 <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center text-accent">
                      <Zap size={18} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Phase 2: Applicability Assessment</span>
                 </div>
                 <h4 className={`text-2xl lg:text-3xl font-bold mb-4 ${assessment.statusColor}`}>
                    {assessment.statusLabel}
                 </h4>
                 <p className="text-sm text-white/60 leading-relaxed max-w-2xl">
                    {assessment.description}
                 </p>
                 
                 {state.estimatedLiability !== 'uncalculated' && (
                   <div className="mt-8 pt-8 border-t border-white/5 space-y-4">
                      <p className="text-[10px] font-black text-accent uppercase tracking-widest italic">What this means conceptually:</p>
                      <p className="text-xs text-white/40 leading-relaxed">
                        The Income Tax Act requires taxpayers to proactively estimate their annual income. If the framework applies, installments are due on pre-defined statutory dates to ensure a continuous flow of revenue to the exchequer.
                      </p>
                   </div>
                 )}
              </div>

              {/* PHASE 3: STATUTORY TIMELINES */}
              {(assessment.isLikelyApplicable || state.unexpectedGains) && (
                <div className="space-y-8 animate-in slide-in-from-bottom-8 duration-700">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center text-accent">
                      <CalendarClock size={18} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Phase 3: Statutory Installment Logic</span>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {installments.map((inst, i) => (
                      <div key={i} className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl hover:bg-white/[0.04] transition-all group">
                        <p className="text-accent font-black text-[10px] uppercase tracking-tighter mb-1">{inst.date}</p>
                        <p className="text-2xl font-bold mb-4">{inst.pct}</p>
                        <div className="h-px bg-white/5 w-full mb-4"></div>
                        <p className="text-[10px] font-bold text-white/60 mb-1">{inst.label}</p>
                        <p className="text-[9px] text-white/30 italic leading-snug">{inst.note}</p>
                      </div>
                    ))}
                  </div>

                  {/* CAPITAL GAINS SPECIAL LOGIC CALLOUT */}
                  {state.unexpectedGains && (
                    <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-3xl flex items-start gap-5">
                       <Info className="text-blue-400 shrink-0 mt-1" size={20} />
                       <div>
                          <h5 className="text-[11px] font-bold text-blue-400 uppercase tracking-widest mb-2">Nuance: Unexpected Capital Gains</h5>
                          <p className="text-xs text-white/50 leading-relaxed italic">
                            Section 234C recognizes that capital gains cannot always be predicted. If a gain occurs after a specific installment date, the tax on that gain typically only needs to be included in the remaining installments. It does not retroactively trigger interest for the earlier missed deadlines.
                          </p>
                       </div>
                    </div>
                  )}
                </div>
              )}

              {/* PHASE 4: CONSEQUENCES AWARENESS */}
              {assessment.isLikelyApplicable && (
                <div className="space-y-8 animate-in slide-in-from-bottom-8 duration-700">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center text-red-400">
                      <Scale size={18} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Phase 4: Understanding Section 234</span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 bg-red-400/5 border border-red-400/10 rounded-[32px] space-y-3">
                       <h5 className="text-[11px] font-bold text-red-400 uppercase tracking-widest">Section 234B (Shortfall)</h5>
                       <p className="text-[10px] text-white/40 leading-relaxed">
                         Typically applies if the total advance tax paid before March 31 is less than 90% of the finally assessed liability. Interest is generally computed at 1% per month.
                       </p>
                    </div>
                    <div className="p-6 bg-red-400/5 border border-red-400/10 rounded-[32px] space-y-3">
                       <h5 className="text-[11px] font-bold text-red-400 uppercase tracking-widest">Section 234C (Deferment)</h5>
                       <p className="text-[10px] text-white/40 leading-relaxed">
                         Applies to individual installment delays. Even if the total tax is paid by year-end, missing a specific quarterly deadline may trigger a 1% per month interest charge on that installment's shortfall.
                       </p>
                    </div>
                  </div>
                </div>
              )}

              {/* PHASE 5: LEARNING SUMMARY */}
              <div className="mt-16 pt-12 border-t border-white/10 flex flex-col md:flex-row gap-12 items-start opacity-70 hover:opacity-100 transition-opacity">
                 <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-2">
                       <BookOpen size={16} className="text-accent" />
                       <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Phase 5: Conceptual Summary</span>
                    </div>
                    <p className="text-xs text-white/50 leading-relaxed">
                      Advance tax is a system of self-estimation. The Income Tax Act places the onus of accuracy on the taxpayer. While TDS covers many salary heads, other sources like interest, rent, and gains are typically handled via advance tax installments.
                    </p>
                 </div>
                 <div className="w-full md:w-64 space-y-4">
                    <button 
                      onClick={() => window.open('https://eportal.incometax.gov.in', '_blank')}
                      className="w-full py-4 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 transition-all"
                    >
                      <ExternalLink size={14} />
                      View Official Portal
                    </button>
                    <p className="text-[9px] text-white/20 text-center uppercase font-black tracking-widest">Educational Resource Only</p>
                 </div>
              </div>
            </div>

            <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" aria-hidden="true"></div>
          </div>
        </div>
      </div>

      {/* Persistence and Reset Controls */}
      <div className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-6">
          <p className="text-[10px] text-primary/30 uppercase tracking-[0.4em] font-black">Interaction Management</p>
          <div className="flex gap-4">
            <button 
              onClick={() => setState({ isSeniorCitizen: false, hasBusinessIncome: false, estimatedLiability: 'uncalculated', unexpectedGains: false })}
              className="px-10 py-5 bg-white border border-primary/5 text-primary/60 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-primary/5 transition-all flex items-center justify-center space-x-3 shadow-sm focus:ring-2 focus:ring-accent outline-none"
            >
              <History size={16} />
              <span>Reset Scenario</span>
            </button>
          </div>
      </div>

      {/* Structural Compliance Footer */}
      <div className="mt-24 grid md:grid-cols-2 gap-8">
        <div className="bg-white p-10 rounded-[40px] border border-primary/5 flex items-start gap-6 shadow-sm">
          <ShieldCheck className="text-accent shrink-0 mt-1" size={24} />
          <div className="text-xs text-primary/60 leading-relaxed">
            <p className="font-black text-primary uppercase tracking-widest text-[10px] mb-4 underline decoration-accent decoration-2 underline-offset-4">Charter of Accuracy</p>
            Advance tax estimation is an approximation based on expected income. This tool provides conceptual awareness of statutory installments and does not calculate actual payable sums or interest liabilities.
          </div>
        </div>
        <div className="bg-white p-10 rounded-[40px] border border-primary/5 flex items-start gap-6 shadow-sm">
          <Gavel className="text-accent shrink-0 mt-1" size={24} />
          <div className="text-xs text-primary/60 leading-relaxed">
            <p className="font-black text-primary uppercase tracking-widest text-[10px] mb-4 underline decoration-accent decoration-2 underline-offset-4">Institutional Boundary</p>
            The content provided reflects general provisions of the Income Tax Act, 1961. It does not account for individual specificities or recent legislative amendments post-Budget. For filing assistance, consult a Chartered Accountant.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvanceTaxAwareness;
