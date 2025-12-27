
import React, { useState, useMemo } from 'react';
import { 
  ArrowLeft, Info, RefreshCcw, LayoutDashboard, PieChart, 
  Wallet, ShoppingBag, Landmark, Scale, AlertCircle, TrendingUp,
  HelpCircle, ShieldCheck, Gavel, ArrowRight, Activity
} from 'lucide-react';

interface BudgetState {
  income: number;
  needs: number;    // Essential: Rent, Utilities, Basic Food, EMI
  wants: number;    // Lifestyle: Dining out, Subscriptions, Shopping
  savings: number;  // Future: SIPs, PPF, Emergency Fund
}

const BudgetAllocationPlanner = ({ onBack }: { onBack: () => void }) => {
  const [state, setState] = useState<BudgetState>({
    income: 100000,
    needs: 50000,
    wants: 30000,
    savings: 20000,
  });

  const calculation = useMemo(() => {
    const totalAllocated = state.needs + state.wants + state.savings;
    const remaining = state.income - totalAllocated;
    
    const needsPct = state.income > 0 ? (state.needs / state.income) * 100 : 0;
    const wantsPct = state.income > 0 ? (state.wants / state.income) * 100 : 0;
    const savingsPct = state.income > 0 ? (state.savings / state.income) * 100 : 0;
    const remainingPct = state.income > 0 ? (remaining / state.income) * 100 : 0;

    return {
      totalAllocated,
      remaining,
      needsPct,
      wantsPct,
      savingsPct,
      remainingPct,
      isExceeding: remaining < 0
    };
  }, [state]);

  const handleInputChange = (key: keyof BudgetState, val: string) => {
    const numericVal = Number(val) || 0;
    setState(prev => ({ ...prev, [key]: numericVal }));
  };

  const formatINR = (val: number) => 
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);

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
        {/* PHASE 1: INPUT AWARENESS */}
        <div className="lg:col-span-4 space-y-10">
          <header>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-[10px] font-black text-primary/40 uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              Phase 1: Input Awareness
            </div>
            <h2 className="text-3xl font-poppins font-bold text-primary mb-3 leading-tight">Map Your <br />Resource Flow</h2>
            <p className="text-primary/60 text-sm leading-relaxed">
              Identify how your monthly inflow is currently distributed across survival, lifestyle, and provisioning buckets.
            </p>
          </header>

          <section className="space-y-6">
            <div className="bg-white rounded-[40px] p-8 border border-primary/5 shadow-sm space-y-8">
              {/* Inflow */}
              <div className="space-y-3">
                <label htmlFor="income-input" className="block text-[10px] font-bold text-primary/40 uppercase tracking-widest flex items-center gap-2">
                  <Wallet size={12} /> Monthly Inflow (Net)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/20 font-bold">₹</span>
                  <input 
                    id="income-input"
                    type="number"
                    value={state.income || ''}
                    onChange={(e) => handleInputChange('income', e.target.value)}
                    className="w-full bg-[#F5F7FA] border-none rounded-2xl pl-10 pr-6 py-4 font-bold text-primary focus:ring-2 focus:ring-accent outline-none"
                    placeholder="0"
                  />
                </div>
              </div>

              {/* Needs */}
              <div className="space-y-3 pt-6 border-t border-primary/5">
                <label htmlFor="needs-input" className="block text-[10px] font-bold text-primary/40 uppercase tracking-widest flex items-center gap-2">
                  <Landmark size={12} /> Survival & Obligations
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/20 font-bold">₹</span>
                  <input 
                    id="needs-input"
                    type="number"
                    value={state.needs || ''}
                    onChange={(e) => handleInputChange('needs', e.target.value)}
                    className="w-full bg-[#F5F7FA] border-none rounded-2xl pl-10 pr-6 py-4 font-bold text-primary focus:ring-2 focus:ring-accent outline-none"
                    placeholder="0"
                  />
                </div>
                <p className="text-[9px] text-primary/40 leading-relaxed italic">Rent/EMI, utilities, insurance, basic food.</p>
              </div>

              {/* Wants */}
              <div className="space-y-3 pt-6 border-t border-primary/5">
                <label htmlFor="wants-input" className="block text-[10px] font-bold text-primary/40 uppercase tracking-widest flex items-center gap-2">
                  <ShoppingBag size={12} /> Lifestyle & Desires
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/20 font-bold">₹</span>
                  <input 
                    id="wants-input"
                    type="number"
                    value={state.wants || ''}
                    onChange={(e) => handleInputChange('wants', e.target.value)}
                    className="w-full bg-[#F5F7FA] border-none rounded-2xl pl-10 pr-6 py-4 font-bold text-primary focus:ring-2 focus:ring-accent outline-none"
                    placeholder="0"
                  />
                </div>
                <p className="text-[9px] text-primary/40 leading-relaxed italic">Dining out, entertainment, shopping, travel.</p>
              </div>

              {/* Savings */}
              <div className="space-y-3 pt-6 border-t border-primary/5">
                <label htmlFor="savings-input" className="block text-[10px] font-bold text-primary/40 uppercase tracking-widest flex items-center gap-2">
                  <TrendingUp size={12} /> Future Provisioning
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/20 font-bold">₹</span>
                  <input 
                    id="savings-input"
                    type="number"
                    value={state.savings || ''}
                    onChange={(e) => handleInputChange('savings', e.target.value)}
                    className="w-full bg-[#F5F7FA] border-none rounded-2xl pl-10 pr-6 py-4 font-bold text-primary focus:ring-2 focus:ring-accent outline-none"
                    placeholder="0"
                  />
                </div>
                <p className="text-[9px] text-primary/40 leading-relaxed italic">SIPs, EPF/PPF, emergency fund, extra debt repayment.</p>
              </div>
            </div>
          </section>

          <div className="p-6 bg-accent/5 rounded-3xl border border-accent/10">
             <div className="flex items-center gap-2 mb-3">
               <HelpCircle size={14} className="text-accent" />
               <span className="text-[10px] font-black uppercase tracking-widest text-accent">Why This Categorization?</span>
             </div>
             <p className="text-[11px] text-primary/60 leading-relaxed font-medium italic">
               Buckets help distinguish between binary needs (cannot be cut) and elastic wants (can be adjusted), allowing for structural awareness of your surplus.
             </p>
          </div>
        </div>

        {/* PHASE 2-4: VISUALIZATION & CONTEXT */}
        <div className="lg:col-span-8 space-y-8">
          <div className="bg-[#0B1C2D] rounded-[48px] p-8 lg:p-16 text-white relative overflow-hidden h-full flex flex-col shadow-2xl">
            
            {/* Header / Module Indicator */}
            <div className="flex items-center justify-between mb-16 relative z-10">
              <h3 className="text-xl font-bold flex items-center space-x-3">
                <Activity className="text-accent" size={24} />
                <span>Allocation Perspective</span>
              </h3>
              <div className="bg-white/5 border border-white/10 px-6 py-2 rounded-full flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                <span className="text-[10px] font-black uppercase tracking-widest text-white/60">Awareness Module v1.2</span>
              </div>
            </div>

            <div className="space-y-16 relative z-10 flex-1">
              
              {/* PHASE 2: ALLOCATION VISUALIZATION */}
              <div className="space-y-8">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center text-accent">
                      <PieChart size={18} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Phase 2: Visual Snapshot</span>
                </div>

                <div className="w-full h-16 bg-white/5 rounded-3xl overflow-hidden flex shadow-inner group">
                  <div className="h-full bg-emerald-400 transition-all duration-700 relative" style={{ width: `${calculation.needsPct}%` }}>
                    {calculation.needsPct > 10 && <span className="absolute inset-0 flex items-center justify-center text-[10px] font-black text-emerald-900/50">NEEDS</span>}
                  </div>
                  <div className="h-full bg-blue-400 transition-all duration-700 relative" style={{ width: `${calculation.wantsPct}%` }}>
                    {calculation.wantsPct > 10 && <span className="absolute inset-0 flex items-center justify-center text-[10px] font-black text-blue-900/50">WANTS</span>}
                  </div>
                  <div className="h-full bg-indigo-400 transition-all duration-700 relative" style={{ width: `${calculation.savingsPct}%` }}>
                    {calculation.savingsPct > 10 && <span className="absolute inset-0 flex items-center justify-center text-[10px] font-black text-indigo-900/50">SAVINGS</span>}
                  </div>
                  {calculation.remaining > 0 && <div className="h-full bg-white/10 transition-all duration-700 flex-1"></div>}
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                   <div className="p-8 bg-white/[0.03] border border-white/5 rounded-[32px]">
                      <p className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-2">Committed Outflow</p>
                      <p className="text-4xl font-bold">{formatINR(calculation.totalAllocated)}</p>
                   </div>
                   <div className={`p-8 border rounded-[32px] transition-colors ${calculation.isExceeding ? 'bg-red-400/5 border-red-400/10' : 'bg-white/[0.03] border-white/5'}`}>
                      <p className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-2">
                         {calculation.isExceeding ? 'Allocation Exceeds Reported Inflow' : 'Unallocated Awareness'}
                      </p>
                      <p className={`text-4xl font-bold ${calculation.isExceeding ? 'text-red-400' : 'text-white'}`}>
                        {formatINR(Math.abs(calculation.remaining))}
                      </p>
                   </div>
                </div>
              </div>

              {/* PHASE 3: CONCEPTUAL OBSERVATIONS */}
              <div className="space-y-8 animate-in slide-in-from-bottom-8 duration-700">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center text-accent">
                      <Activity size={18} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Phase 3: Conceptual Observations</span>
                </div>

                <div className="grid gap-4">
                   {calculation.isExceeding && (
                     <div className="p-6 bg-red-400/5 border border-red-400/10 rounded-3xl flex items-start gap-4">
                       <AlertCircle className="text-red-400 shrink-0 mt-1" size={18} />
                       <p className="text-xs text-white/50 leading-relaxed italic">
                         Your reported allocations are currently greater than your net take-home income. This commonly occurs during months of high unexpected expenses or when debt is being handled through credit cycling.
                       </p>
                     </div>
                   )}
                   {calculation.needsPct > 65 && (
                     <div className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl flex items-start gap-4">
                       <Info className="text-white/20 shrink-0 mt-1" size={18} />
                       <p className="text-xs text-white/50 leading-relaxed italic">
                         Allocations to **Survival & Obligations** are currently a primary focus. This is often observed in metropolitan India due to high rental floors or early-stage home loan commitments.
                       </p>
                     </div>
                   )}
                   {calculation.savingsPct < 15 && (
                     <div className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl flex items-start gap-4">
                       <TrendingUp className="text-white/20 shrink-0 mt-1" size={18} />
                       <p className="text-xs text-white/50 leading-relaxed italic">
                         **Future Provisioning** is currently being prioritized after other buckets. While common in early career stages, logical frameworks suggest that defensive preparedness grows most through consistent, periodic surplus capture.
                       </p>
                     </div>
                   )}
                   {!calculation.isExceeding && calculation.remainingPct > 5 && (
                     <div className="p-6 bg-accent/5 border border-accent/10 rounded-3xl flex items-start gap-4">
                       <ShieldCheck className="text-accent shrink-0 mt-1" size={18} />
                       <p className="text-xs text-white/60 leading-relaxed italic font-medium">
                         Your snapshot shows a resource surplus of {calculation.remainingPct.toFixed(0)}% that hasn't been categorized. Mapping this surplus often helps clarify where 'hidden' spending or cash drag commonly occurs.
                       </p>
                     </div>
                   )}
                </div>
              </div>

              {/* PHASE 4: FRAMEWORK UNDERSTANDING */}
              <div className="mt-16 pt-12 border-t border-white/10">
                 <div className="flex items-center gap-3 mb-8">
                    <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center text-accent">
                      <LayoutDashboard size={18} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Phase 4: Framework Logic</span>
                 </div>
                 
                 <div className="grid md:grid-cols-2 gap-12">
                   <div className="space-y-4">
                      <h4 className="text-sm font-bold text-accent">Lifecycle Sensitivity</h4>
                      <p className="text-xs text-white/40 leading-relaxed">
                        Common reference models (like 50/30/20) are strictly starting points. Ratios vary significantly by life stage, geography, and income stability. A person with dependents may logically have a higher 'Needs' bucket than a solo professional.
                      </p>
                   </div>
                   <div className="space-y-4">
                      <h4 className="text-sm font-bold text-accent">Fluctuation ≠ Failure</h4>
                      <p className="text-xs text-white/40 leading-relaxed">
                        Budgeting is rarely a static monthly exercise. Awareness comes from identifying long-term patterns across multiple quarters. Temporary imbalances during festive seasons or life transitions are a normal part of financial cycles.
                      </p>
                   </div>
                 </div>
              </div>
            </div>

            <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" aria-hidden="true"></div>
          </div>
        </div>
      </div>

      {/* Interaction Controls */}
      <div className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-8">
        <p className="text-[10px] text-primary/30 uppercase tracking-[0.4em] font-black">Interaction Management</p>
        <div className="flex gap-4">
          <button 
            onClick={() => setState({ income: 0, needs: 0, wants: 0, savings: 0 })}
            className="px-10 py-5 bg-white border border-primary/5 text-primary/60 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-primary/5 transition-all flex items-center justify-center space-x-3 shadow-sm focus:ring-2 focus:ring-accent outline-none"
          >
            <RefreshCcw size={16} />
            <span>Reset Scenario</span>
          </button>
        </div>
      </div>

      {/* Structural Compliance Footer */}
      <div className="mt-24 grid md:grid-cols-2 gap-8">
        <div className="bg-white p-10 rounded-[40px] border border-primary/5 flex items-start gap-6 shadow-sm">
          <ShieldCheck className="text-accent shrink-0 mt-1" size={24} />
          <div className="text-xs text-primary/60 leading-relaxed">
            <p className="font-black text-primary uppercase tracking-widest text-[10px] mb-4 underline decoration-accent decoration-2 underline-offset-4">Charter of Intent</p>
            Budgeting is an approximation based on self-reported estimates. This tool is a mathematical visualization and does not constitute debt-management or investment advice.
          </div>
        </div>
        <div className="bg-white p-10 rounded-[40px] border border-primary/5 flex items-start gap-6 shadow-sm">
          <Gavel className="text-accent shrink-0 mt-1" size={24} />
          <div className="text-xs text-primary/60 leading-relaxed">
            <p className="font-black text-primary uppercase tracking-widest text-[10px] mb-4 underline decoration-accent decoration-2 underline-offset-4">Regulatory Boundary</p>
            This planner is provided strictly for conceptual awareness. It is not an invitation to invest, nor does it provide recommendations for specific expenditures. Always consult a professional for financial assessment.
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetAllocationPlanner;
