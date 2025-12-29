
import React, { useState, useMemo } from 'react';
import { 
  ArrowLeft, Info, CalendarClock, Scale, Gavel, 
  AlertTriangle, History, Landmark, 
  ChevronRight, ShieldCheck, Zap,
  BookOpen, ExternalLink
} from 'lucide-react';

/**
 * COMPLIANCE ARCHITECTURE:
 * This component is strictly for STATUTORY AWARENESS.
 * 1. NO 'number' inputs allowed for tax amounts.
 * 2. NO dynamic interest calculations.
 * 3. ALL output must be prefixed with 'Likely' or 'Conceptual'.
 */

type LiabilityStatus = 'below10k' | 'above10k' | 'uncalculated';

interface AdvanceTaxState {
  isSeniorCitizen: boolean;
  hasBusinessIncome: boolean;
  estimatedLiability: LiabilityStatus;
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
    // STATUTORY LOGIC: Section 207 & 208
    // A resident senior citizen (60+) not having income from business/profession is exempt.
    const isExemptSenior = state.isSeniorCitizen && !state.hasBusinessIncome;
    const isAboveThreshold = state.estimatedLiability === 'above10k';
    
    let statusLabel = "Identification in Progress";
    let statusColor = "text-white/40";
    let isLikelyApplicable = false;
    let description = "Please finalize profile details to view conceptual applicability.";

    if (state.estimatedLiability === 'uncalculated') {
      statusLabel = "Awaiting Input";
    } else if (isExemptSenior) {
      statusLabel = "Advance Tax Likely Not Applicable";
      statusColor = "text-emerald-400";
      isLikelyApplicable = false;
      description = "Under Section 207, resident senior citizens with no income from 'Profits and Gains of Business or Profession' are exempt from advance tax.";
    } else if (isAboveThreshold) {
      statusLabel = "Advance Tax Likely Applicable";
      statusColor = "text-accent";
      isLikelyApplicable = true;
      description = "Section 208 mandates advance tax for assessees whose estimated tax liability for the year, after accounting for TDS/TCS, is ₹10,000 or more.";
    } else {
      statusLabel = "Threshold Requirement Not Met";
      statusColor = "text-white/60";
      isLikelyApplicable = false;
      description = "Based on your input, the estimated liability is below the ₹10,000 statutory threshold defined in Section 208.";
    }

    return { statusLabel, statusColor, isLikelyApplicable, description };
  }, [state]);

  // Installment data structured for cumulative clarity
  const installments = [
    { date: 'June 15', pct: '15%', label: '1st Installment', note: 'Cumulative minimum' },
    { date: 'Sept 15', pct: '45%', label: '2nd Installment', note: 'Cumulative minimum' },
    { date: 'Dec 15', pct: '75%', label: '3rd Installment', note: 'Cumulative minimum' },
    { date: 'March 15', pct: '100%', label: 'Final Installment', note: 'Closing of fiscal year' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <button 
        onClick={onBack}
        className="flex items-center space-x-2 text-primary/40 hover:text-primary mb-8 font-bold text-xs uppercase tracking-widest transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded"
        aria-label="Return to list of utilities"
      >
        <ArrowLeft size={16} />
        <span>Return to Utilities List</span>
      </button>

      <div className="grid lg:grid-cols-12 gap-12">
        {/* PHASE 1: CONCEPTUAL PROFILE (LEFT) */}
        <div className="lg:col-span-4 space-y-10">
          <header>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-[10px] font-black text-primary/40 uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              Phase 1: Profile Identification
            </div>
            <h2 className="text-3xl font-poppins font-bold text-primary mb-3 leading-tight">Assess Your <br />Tax Characteristics</h2>
            <p className="text-primary/60 text-sm leading-relaxed">
              Understand how your demographic and income profile interacts with the "Pay-As-You-Earn" framework.
            </p>
          </header>

          <section className="bg-white rounded-[40px] p-8 border border-primary/5 shadow-sm space-y-8" role="form" aria-label="Tax Profile Inputs">
            <div className="space-y-6">
              {/* Senior Citizen Toggle */}
              <div className="flex items-center justify-between">
                <div>
                   <p className="text-xs font-bold text-primary">Senior Citizen (Age 60+)</p>
                   <p className="text-[10px] text-primary/30 italic">Determines Section 207 status.</p>
                </div>
                <button 
                  role="switch"
                  aria-checked={state.isSeniorCitizen}
                  aria-label="Is senior citizen"
                  onClick={() => setState(s => ({...s, isSeniorCitizen: !s.isSeniorCitizen}))}
                  className={`w-11 h-6 rounded-full transition-all relative outline-none focus:ring-2 focus:ring-accent ${state.isSeniorCitizen ? 'bg-accent' : 'bg-primary/10'}`}
                >
                  <div className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow-sm transition-all ${state.isSeniorCitizen ? 'right-1' : 'left-1'}`} />
                </button>
              </div>

              {/* Business Income Toggle */}
              <div className="flex items-center justify-between pt-6 border-t border-primary/5">
                <div>
                   <p className="text-xs font-bold text-primary">Income from Business/Profession</p>
                   <p className="text-[10px] text-primary/30 italic">Includes freelancing or consultancy.</p>
                </div>
                <button 
                  role="switch"
                  aria-checked={state.hasBusinessIncome}
                  aria-label="Has business or professional income"
                  onClick={() => setState(s => ({...s, hasBusinessIncome: !s.hasBusinessIncome}))}
                  className={`w-11 h-6 rounded-full transition-all relative outline-none focus:ring-2 focus:ring-accent ${state.hasBusinessIncome ? 'bg-accent' : 'bg-primary/10'}`}
                >
                  <div className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow-sm transition-all ${state.hasBusinessIncome ? 'right-1' : 'left-1'}`} />
                </button>
              </div>

              {/* Threshold Selection */}
              <div className="space-y-4 pt-6 border-t border-primary/5">
                <p className="text-xs font-bold text-primary">Estimated Annual Liability (Post-TDS)</p>
                <div className="grid grid-cols-2 gap-2" role="radiogroup" aria-label="Estimated tax liability threshold">
                  {(['below10k', 'above10k'] as const).map(option => (
                    <button
                      key={option}
                      role="radio"
                      aria-checked={state.estimatedLiability === option}
                      onClick={() => setState(s => ({ ...s, estimatedLiability: option }))}
                      className={`py-3 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all border outline-none focus:ring-2 focus:ring-accent ${state.estimatedLiability === option ? 'bg-primary border-primary text-white shadow-lg' : 'bg-white border-primary/5 text-primary/40 hover:bg-primary/5'}`}
                    >
                      {option === 'below10k' ? 'Under ₹10,000' : 'Over ₹10,000'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Capital Gains Toggle */}
              <div className="flex items-start gap-4 pt-6 border-t border-primary/5">
                <div className="flex-1">
                   <p className="text-xs font-bold text-primary">Potential Capital Gains</p>
                   <p className="text-[10px] text-primary/30 italic">Sale of property, shares, etc.</p>
                </div>
                <button 
                  role="switch"
                  aria-checked={state.unexpectedGains}
                  aria-label="Anticipating capital gains"
                  onClick={() => setState(s => ({...s, unexpectedGains: !s.unexpectedGains}))}
                  className={`w-11 h-6 rounded-full transition-all relative outline-none focus:ring-2 focus:ring-accent ${state.unexpectedGains ? 'bg-accent' : 'bg-primary/10'}`}
                >
                  <div className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow-sm transition-all ${state.unexpectedGains ? 'right-1' : 'left-1'}`} />
                </button>
              </div>
            </div>
          </section>

          <div className="bg-[#0B1C2D] p-8 rounded-[32px] text-white border border-white/5 shadow-xl">
            <div className="flex items-center gap-3 mb-4 text-accent">
               <BookOpen size={20} aria-hidden="true" />
               <h4 className="font-bold text-xs uppercase tracking-widest">Purpose of Provision</h4>
            </div>
            <p className="text-[11px] text-white/50 leading-relaxed font-medium italic">
              Advance tax provisions are designed to ensure a continuous flow of revenue to the government throughout the financial year, rather than a single lump-sum during the filing season.
            </p>
          </div>
        </div>

        {/* PHASE 2-5: STATUTORY ROADMAP (RIGHT) */}
        <div className="lg:col-span-8 space-y-8">
          <div className="bg-[#0B1C2D] rounded-[48px] p-8 lg:p-16 text-white relative overflow-hidden h-full flex flex-col shadow-2xl border border-white/5">
            
            {/* Component Status Header */}
            <div className="flex items-center justify-between mb-16 relative z-10">
              <h3 className="text-xl font-bold flex items-center space-x-3">
                <Landmark className="text-accent" size={24} aria-hidden="true" />
                <span>Statutory Awareness Roadmap</span>
              </h3>
              <div className="bg-white/5 border border-white/10 px-6 py-2 rounded-full flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" aria-hidden="true"></div>
                <span className="text-[10px] font-black uppercase tracking-widest text-white/60">Non-Calculative Module</span>
              </div>
            </div>

            <div className="space-y-16 relative z-10 flex-1">
              
              {/* PHASE 2: APPLICABILITY ASSESSMENT */}
              <div className={`p-8 lg:p-12 rounded-[40px] border transition-all duration-700 ${assessment.isLikelyApplicable ? 'bg-accent/10 border-accent/20' : 'bg-white/[0.03] border-white/5'}`}>
                 <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center text-accent" aria-hidden="true">
                      <Zap size={18} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Phase 2: Conceptual Applicability</span>
                 </div>
                 <h4 className={`text-2xl lg:text-3xl font-bold mb-4 ${assessment.statusColor}`}>
                    {assessment.statusLabel}
                 </h4>
                 <p className="text-sm text-white/60 leading-relaxed max-w-2xl font-medium">
                    {assessment.description}
                 </p>
                 
                 {state.estimatedLiability !== 'uncalculated' && (
                   <div className="mt-8 pt-8 border-t border-white/5 space-y-4">
                      <p className="text-[10px] font-black text-accent uppercase tracking-widest italic flex items-center gap-2">
                        <Info size={12} /> Institutional Context
                      </p>
                      <p className="text-xs text-white/40 leading-relaxed">
                        Taxpayers are required to proactively estimate their annual income. If the framework applies, installments are due on pre-defined dates to ensure compliance with the Income Tax Act.
                      </p>
                   </div>
                 )}
              </div>

              {/* PHASE 3: STATUTORY TIMELINES */}
              {(assessment.isLikelyApplicable || state.unexpectedGains) && (
                <div className="space-y-8 animate-in slide-in-from-bottom-8 duration-700">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center text-accent" aria-hidden="true">
                      <CalendarClock size={18} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Phase 3: Installment Thresholds</span>
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

                  {/* CAPITAL GAINS SPECIAL PROVISION */}
                  {state.unexpectedGains && (
                    <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-3xl flex items-start gap-5">
                       <Info className="text-blue-400 shrink-0 mt-1" size={20} aria-hidden="true" />
                       <div>
                          <h5 className="text-[11px] font-bold text-blue-400 uppercase tracking-widest mb-2">Nuance: Capital Gains Deferment</h5>
                          <p className="text-xs text-white/50 leading-relaxed italic">
                            Section 234C recognizes that capital gains (or windfall gains like lottery) cannot always be estimated in advance. If such a gain occurs after an installment date, the tax on it can be paid in the remaining installments without triggering interest for previous delays.
                          </p>
                       </div>
                    </div>
                  )}
                </div>
              )}

              {/* PHASE 4: INTEREST FOR DEFAULTS (S. 234) */}
              {assessment.isLikelyApplicable && (
                <div className="space-y-8 animate-in slide-in-from-bottom-8 duration-700">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center text-red-400" aria-hidden="true">
                      <Scale size={18} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Phase 4: Consequences of Timing Defaults</span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 bg-red-400/5 border border-red-400/10 rounded-[32px] space-y-3">
                       <h5 className="text-[11px] font-bold text-red-400 uppercase tracking-widest">Section 234B (Shortfall)</h5>
                       <p className="text-[10px] text-white/40 leading-relaxed">
                         Applies if the advance tax paid before the end of the FY is less than 90% of the assessed tax. Interest is typically 1% per month on the shortfall.
                       </p>
                    </div>
                    <div className="p-6 bg-red-400/5 border border-red-400/10 rounded-[32px] space-y-3">
                       <h5 className="text-[11px] font-bold text-red-400 uppercase tracking-widest">Section 234C (Deferment)</h5>
                       <p className="text-[10px] text-white/40 leading-relaxed">
                         Applies to individual installment delays. Even if the total tax is paid by year-end, missing the quarterly 15/45/75% marks may trigger interest for that specific period.
                       </p>
                    </div>
                  </div>
                </div>
              )}

              {/* PHASE 5: EXTERNAL VALIDATION */}
              <div className="mt-16 pt-12 border-t border-white/10 flex flex-col md:flex-row gap-12 items-start opacity-80 hover:opacity-100 transition-opacity">
                 <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-2">
                       <Gavel size={16} className="text-accent" aria-hidden="true" />
                       <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Statutory Reference Cycle</span>
                    </div>
                    <p className="text-xs text-white/50 leading-relaxed">
                      Advance tax is based on self-estimation. The Income Tax Act places the burden of accuracy on the assessee. While TDS covers many income heads, sources like interest, rent, and capital gains typically require proactive installments.
                    </p>
                 </div>
                 <div className="w-full md:w-64 space-y-4">
                    <button 
                      onClick={() => window.open('https://eportal.incometax.gov.in', '_blank')}
                      className="w-full py-5 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 transition-all outline-none focus:ring-2 focus:ring-accent"
                    >
                      <ExternalLink size={14} aria-hidden="true" />
                      <span>E-Filing Portal</span>
                    </button>
                    <p className="text-[8px] text-white/20 text-center uppercase font-black tracking-widest leading-relaxed">
                       You are exiting to the government portal. No data is transferred.
                    </p>
                 </div>
              </div>
            </div>

            <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" aria-hidden="true"></div>
          </div>
        </div>
      </div>

      {/* Reset & Interaction Management */}
      <div className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-6">
          <p className="text-[10px] text-primary/30 uppercase tracking-[0.4em] font-black">Interaction Management</p>
          <div className="flex gap-4">
            <button 
              onClick={() => setState({ isSeniorCitizen: false, hasBusinessIncome: false, estimatedLiability: 'uncalculated', unexpectedGains: false })}
              className="px-10 py-5 bg-white border border-primary/5 text-primary/60 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-primary/5 transition-all flex items-center justify-center space-x-3 shadow-sm outline-none focus:ring-2 focus:ring-accent"
            >
              <History size={16} aria-hidden="true" />
              <span>Clear Profile Selection</span>
            </button>
          </div>
      </div>

      {/* Mandatory Disclaimer Footer */}
      <div className="mt-24 grid md:grid-cols-2 gap-8">
        <div className="bg-white p-10 rounded-[40px] border border-primary/5 flex items-start gap-6 shadow-sm">
          <ShieldCheck className="text-accent shrink-0 mt-1" size={24} aria-hidden="true" />
          <div className="text-xs text-primary/60 leading-relaxed">
            <p className="font-black text-primary uppercase tracking-widest text-[10px] mb-4 underline decoration-accent decoration-2 underline-offset-4 font-poppins">Logical Charter</p>
            This roadmap is an educational abstraction. Advance tax liability depends on the final assessed income, which may differ from initial estimates. This tool does not constitute tax planning or advisory.
          </div>
        </div>
        <div className="bg-white p-10 rounded-[40px] border border-primary/5 flex items-start gap-6 shadow-sm">
          <AlertTriangle className="text-accent shrink-0 mt-1" size={24} aria-hidden="true" />
          <div className="text-xs text-primary/60 leading-relaxed">
            <p className="font-black text-primary uppercase tracking-widest text-[10px] mb-4 underline decoration-accent decoration-2 underline-offset-4 font-poppins">Regulatory Notice</p>
            Information is based on general provisions of the Income Tax Act, 1961. Recent legislative amendments (Post-Union Budget) may not be reflected immediately. For filing and payment, consult a licensed Chartered Accountant.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvanceTaxAwareness;
