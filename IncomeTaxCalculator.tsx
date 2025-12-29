
import React, { useState, useMemo } from 'react';
import { Calculator, Info, AlertTriangle, ArrowLeft, RefreshCcw, Scale, Building, Briefcase, Landmark, PieChart, Users, ChevronDown, TrendingUp, GitCompare, Zap } from 'lucide-react';

/**
 * Indian Tax Architecture Constants
 * Based on FY 2024-25 (Assessment Year 2025-26)
 */
const TAX_CONFIG = {
  NEW_REGIME: {
    standardDeduction: 75000,
    rebateLimit: 700000,
    slabs: [
      { limit: 300000, rate: 0 },
      { limit: 600000, rate: 0.05 },
      { limit: 900000, rate: 0.10 },
      { limit: 1200000, rate: 0.15 },
      { limit: 1500000, rate: 0.20 },
      { limit: Infinity, rate: 0.30 },
    ]
  },
  OLD_REGIME: {
    standardDeduction: 50000,
    rebateLimit: 500000,
    ageCategories: {
      NORMAL: [
        { limit: 250000, rate: 0 },
        { limit: 500000, rate: 0.05 },
        { limit: 1000000, rate: 0.20 },
        { limit: Infinity, rate: 0.30 },
      ],
      SENIOR: [ // 60-79
        { limit: 300000, rate: 0 },
        { limit: 500000, rate: 0.05 },
        { limit: 1000000, rate: 0.20 },
        { limit: Infinity, rate: 0.30 },
      ],
      SUPER_SENIOR: [ // 80+
        { limit: 500000, rate: 0 },
        { limit: 1000000, rate: 0.20 },
        { limit: Infinity, rate: 0.30 },
      ]
    }
  },
  LIMITS: {
    SEC_80C: 150000,
    SEC_80D_SELF: 25000,
    SEC_80D_PARENTS: 50000,
    HOUSE_PROP_LOSS_MAX: 200000,
  }
};

type AssesseeType = 'INDIVIDUAL' | 'HUF';
type AgeCategory = 'NORMAL' | 'SENIOR' | 'SUPER_SENIOR';
type ResidentialStatus = 'RESIDENT' | 'RNOR' | 'NRI';

interface TaxProfile {
  assesseeType: AssesseeType;
  ageCategory: AgeCategory;
  residentialStatus: ResidentialStatus;
  regime: 'new' | 'old';
}

interface IncomeHeads {
  salary: number;
  housePropertyRent: number;
  housePropertyInterest: number;
  businessProfession: number;
  capitalGainsSTCG: number;
  capitalGainsLTCG: number;
  otherSources: number;
}

interface Deductions {
  sec80C: number;
  sec80D: number;
  sec80TTA: number;
  hraExemption: number;
}

const IncomeTaxCalculator = ({ onBack }: { onBack: () => void }) => {
  const [profile, setProfile] = useState<TaxProfile>({
    assesseeType: 'INDIVIDUAL',
    ageCategory: 'NORMAL',
    residentialStatus: 'RESIDENT',
    regime: 'new',
  });

  const [income, setIncome] = useState<IncomeHeads>({
    salary: 0,
    housePropertyRent: 0,
    housePropertyInterest: 0,
    businessProfession: 0,
    capitalGainsSTCG: 0,
    capitalGainsLTCG: 0,
    otherSources: 0,
  });

  const [deductions, setDeductions] = useState<Deductions>({
    sec80C: 0,
    sec80D: 0,
    sec80TTA: 0,
    hraExemption: 0,
  });

  const calculation = useMemo(() => {
    // 1. Compute Net Income from each Head
    const stdDedSalary = profile.regime === 'new' 
      ? TAX_CONFIG.NEW_REGIME.standardDeduction 
      : TAX_CONFIG.OLD_REGIME.standardDeduction;
    
    const netSalaryIncome = Math.max(0, income.salary - stdDedSalary);

    const nav = income.housePropertyRent * 0.7;
    const netHousePropIncome = nav - income.housePropertyInterest;

    const gti = netSalaryIncome + 
                netHousePropIncome + 
                income.businessProfession + 
                income.capitalGainsSTCG + 
                income.capitalGainsLTCG + 
                income.otherSources;

    let totalDeductions = 0;
    if (profile.regime === 'old') {
      const capped80C = Math.min(deductions.sec80C, TAX_CONFIG.LIMITS.SEC_80C);
      const capped80D = Math.min(deductions.sec80D, TAX_CONFIG.LIMITS.SEC_80D_SELF + TAX_CONFIG.LIMITS.SEC_80D_PARENTS);
      totalDeductions = capped80C + capped80D + deductions.sec80TTA + deductions.hraExemption;
    }

    const taxableIncome = Math.max(0, gti - totalDeductions);

    let baseTax = 0;
    const slabs = profile.regime === 'new' 
      ? TAX_CONFIG.NEW_REGIME.slabs 
      : TAX_CONFIG.OLD_REGIME.ageCategories[profile.ageCategory];

    let remainingIncome = taxableIncome;
    let prevLimit = 0;

    for (const slab of slabs) {
      const range = slab.limit - prevLimit;
      const taxableInRange = Math.min(Math.max(0, remainingIncome), range);
      baseTax += taxableInRange * slab.rate;
      remainingIncome -= taxableInRange;
      prevLimit = slab.limit;
      if (remainingIncome <= 0) break;
    }

    let rebate = 0;
    const rebateLimit = profile.regime === 'new' ? TAX_CONFIG.NEW_REGIME.rebateLimit : TAX_CONFIG.OLD_REGIME.rebateLimit;
    if (taxableIncome <= rebateLimit) {
      rebate = baseTax;
    }

    const taxAfterRebate = Math.max(0, baseTax - rebate);
    const cess = taxAfterRebate * 0.04;

    return {
      netSalaryIncome,
      netHousePropIncome,
      gti,
      totalDeductions,
      taxableIncome,
      baseTax,
      rebate,
      cess,
      totalTax: taxAfterRebate + cess
    };
  }, [profile, income, deductions]);

  const formatINR = (val: number) => 
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);

  const handleIncomeChange = (key: keyof IncomeHeads, value: string) => {
    setIncome(prev => ({ ...prev, [key]: Number(value) || 0 }));
  };

  const handleDeductionChange = (key: keyof Deductions, value: string) => {
    setDeductions(prev => ({ ...prev, [key]: Number(value) || 0 }));
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <button 
        onClick={onBack}
        className="flex items-center space-x-2 text-primary/40 hover:text-primary mb-8 font-bold text-xs uppercase tracking-widest transition-colors"
      >
        <ArrowLeft size={16} />
        <span>Return to Dashboard</span>
      </button>

      <div className="grid lg:grid-cols-12 gap-12">
        {/* Input Column */}
        <div className="lg:col-span-5 space-y-8">
          <header>
            <h2 className="text-3xl font-poppins font-bold text-primary mb-2">Income Tax Simulator</h2>
            <p className="text-primary/60 text-sm leading-relaxed font-medium">
              Illustrative modeling of the Indian Income Tax Act flow for FY 24-25.
            </p>
          </header>

          {/* Assessee Profile Section */}
          <section className="bg-white rounded-[40px] p-8 border border-primary/5 shadow-sm space-y-8">
            <div className="flex items-center justify-between">
               <h3 className="text-[10px] font-black text-primary/30 uppercase tracking-[0.3em] flex items-center gap-2">
                 <Users size={14} className="text-accent" />
                 Assessee Profile
               </h3>
               <div className="flex gap-1 bg-[#F5F7FA] p-1 rounded-xl">
                  {(['new', 'old'] as const).map(r => (
                    <button
                      key={r}
                      onClick={() => setProfile(p => ({ ...p, regime: r }))}
                      className={`px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${profile.regime === r ? 'bg-white text-accent shadow-sm' : 'text-primary/30 hover:text-primary/60'}`}
                    >
                      {r}
                    </button>
                  ))}
               </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label htmlFor="assessee-type" className="block text-[10px] font-bold text-primary/40 uppercase tracking-widest mb-3 ml-1">Entity Type</label>
                <div className="relative">
                  <select 
                    id="assessee-type"
                    value={profile.assesseeType}
                    onChange={(e) => setProfile(p => ({ ...p, assesseeType: e.target.value as AssesseeType }))}
                    className="w-full bg-[#F5F7FA] border-none rounded-2xl pl-4 pr-10 py-4 text-xs font-bold text-primary outline-none focus:ring-2 focus:ring-accent appearance-none"
                  >
                    <option value="INDIVIDUAL">Individual</option>
                    <option value="HUF">HUF</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-primary/20 pointer-events-none" size={14} />
                </div>
              </div>

              <div>
                <label htmlFor="age-category" className="block text-[10px] font-bold text-primary/40 uppercase tracking-widest mb-3 ml-1">Age Group</label>
                <div className="relative">
                  <select 
                    id="age-category"
                    value={profile.ageCategory}
                    onChange={(e) => setProfile(p => ({ ...p, ageCategory: e.target.value as AgeCategory }))}
                    className="w-full bg-[#F5F7FA] border-none rounded-2xl pl-4 pr-10 py-4 text-xs font-bold text-primary outline-none focus:ring-2 focus:ring-accent appearance-none"
                  >
                    <option value="NORMAL">Below 60</option>
                    <option value="SENIOR">60 to 79</option>
                    <option value="SUPER_SENIOR">80+</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-primary/20 pointer-events-none" size={14} />
                </div>
              </div>

              <div className="col-span-2">
                <label htmlFor="residential-status" className="block text-[10px] font-bold text-primary/40 uppercase tracking-widest mb-3 ml-1">Residential Status</label>
                <div className="relative">
                  <select 
                    id="residential-status"
                    value={profile.residentialStatus}
                    onChange={(e) => setProfile(p => ({ ...p, residentialStatus: e.target.value as ResidentialStatus }))}
                    className="w-full bg-[#F5F7FA] border-none rounded-2xl pl-4 pr-10 py-4 text-xs font-bold text-primary outline-none focus:ring-2 focus:ring-accent appearance-none"
                  >
                    <option value="RESIDENT">Resident Indian</option>
                    <option value="RNOR">RNOR</option>
                    <option value="NRI">Non-Resident</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-primary/20 pointer-events-none" size={14} />
                </div>
              </div>
            </div>
          </section>

          {/* Heads of Income Section */}
          <section className="bg-white rounded-[40px] p-8 border border-primary/5 shadow-sm space-y-8">
            <h3 className="text-[10px] font-black text-primary/30 uppercase tracking-[0.3em] flex items-center gap-2">
              <PieChart size={14} className="text-accent" />
              Heads of Income
            </h3>
            
            <div className="space-y-6">
              {[
                { label: 'Income from Salary (Gross)', key: 'salary', icon: <Landmark size={14} /> },
                { label: 'Business / Profession Income', key: 'businessProfession', icon: <Briefcase size={14} /> },
                { label: 'STCG (Capital Gains)', key: 'capitalGainsSTCG', icon: <TrendingUp size={14} /> },
                { label: 'LTCG (Capital Gains)', key: 'capitalGainsLTCG', icon: <TrendingUp size={14} /> },
                { label: 'Other Sources', key: 'otherSources', icon: <Scale size={14} /> },
              ].map(head => (
                <div key={head.key}>
                  <label htmlFor={`income-${head.key}`} className="block text-[9px] font-bold text-primary/40 uppercase mb-3 ml-1 flex items-center gap-2">
                    {head.icon} {head.label}
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/20 font-bold text-sm">₹</span>
                    <input 
                      id={`income-${head.key}`}
                      type="number"
                      value={income[head.key as keyof IncomeHeads] || ''}
                      onChange={(e) => handleIncomeChange(head.key as keyof IncomeHeads, e.target.value)}
                      className="w-full bg-[#F5F7FA] border-none rounded-2xl pl-10 pr-6 py-4 font-bold text-primary focus:ring-2 focus:ring-accent outline-none text-sm transition-all"
                      placeholder="0"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="bg-red-50/50 p-8 rounded-[32px] border border-red-100 flex items-start space-x-4 shadow-sm">
            <AlertTriangle className="text-red-400 shrink-0 mt-0.5" size={20} />
            <p className="text-[10px] text-red-900 leading-relaxed uppercase tracking-wider font-bold italic">
              LEGAL NOTICE: Neutral mathematical modeling. Does not constitute tax advice. Final liability should be verified via licensed professionals or official e-filing portals.
            </p>
          </div>
        </div>

        {/* Output Column - Enhanced with Comparison Logic */}
        <div className="lg:col-span-7 space-y-8">
          <div className="bg-[#0B1C2D] rounded-[48px] p-8 lg:p-12 text-white relative overflow-hidden flex flex-col h-full shadow-2xl">
            
            {/* Simulation Header */}
            <div className="flex items-center justify-between mb-16 relative z-10">
              <h3 className="text-xl font-bold flex items-center space-x-3">
                <GitCompare className="text-accent" size={24} />
                <span>Simulation Results</span>
              </h3>
              <div className="bg-white/5 border border-white/10 px-6 py-2 rounded-full flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                <span className="text-[10px] font-black uppercase tracking-widest text-white/60">FY 2024-25 Framework</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 relative z-10 flex-1">
              <div className="space-y-12">
                <div className="space-y-2">
                  <p className="text-white/40 text-[10px] uppercase font-black tracking-widest">Gross Total Income (GTI)</p>
                  <p className="text-4xl font-poppins font-bold">{formatINR(calculation.gti)}</p>
                  <p className="text-[10px] text-white/20 italic leading-relaxed">Composite sum across all five statutory heads before deductions.</p>
                </div>
                
                <div className="space-y-2">
                  <p className="text-white/40 text-[10px] uppercase font-black tracking-widest">Total Taxable Base</p>
                  <p className="text-4xl font-poppins font-bold text-accent">{formatINR(calculation.taxableIncome)}</p>
                  <p className="text-[10px] text-white/20 italic leading-relaxed">The final sum subject to slab-wise taxation after all adjustments.</p>
                </div>

                <div className="space-y-5 pt-12 border-t border-white/5">
                  <div className="flex justify-between items-center group cursor-help">
                    <span className="text-xs text-white/40 font-medium group-hover:text-white transition-colors">Base Slab Tax</span>
                    <span className="text-sm font-bold">{formatINR(calculation.baseTax)}</span>
                  </div>
                  <div className="flex justify-between items-center group cursor-help">
                    <span className="text-xs text-white/40 font-medium group-hover:text-white transition-colors">Section 87A Rebate</span>
                    <span className="text-sm font-bold text-accent">-{formatINR(calculation.rebate)}</span>
                  </div>
                  <div className="flex justify-between items-center group cursor-help">
                    <span className="text-xs text-white/40 font-medium group-hover:text-white transition-colors">Statutory Cess (4%)</span>
                    <span className="text-sm font-bold">{formatINR(calculation.cess)}</span>
                  </div>
                </div>
              </div>

              {/* Enhanced Visual Outcome */}
              <div className="bg-white/[0.03] rounded-[40px] p-10 border border-white/10 flex flex-col justify-center items-center text-center shadow-inner relative group overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                   <Zap size={24} className="text-accent/20" />
                </div>
                <p className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-6">Total Estimated Outflow</p>
                <p className="text-6xl font-poppins font-bold text-white mb-8 leading-tight animate-in zoom-in-95 duration-700">
                  {formatINR(calculation.totalTax)}
                </p>
                <div className="w-full h-1.5 bg-white/5 rounded-full mb-8 overflow-hidden">
                   <div className="h-full bg-accent transition-all duration-1000" style={{ width: calculation.totalTax > 0 ? '75%' : '0%' }}></div>
                </div>
                <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                   <p className="text-[10px] text-accent font-bold uppercase tracking-widest mb-1">{profile.regime} Regime Active</p>
                   <p className="text-[9px] text-white/30 italic">Modeled for individual assessee logic.</p>
                </div>
              </div>
            </div>

            {/* Regime Logic Interaction - EDUCATIONAL ENHANCEMENT */}
            <div className="mt-16 pt-12 border-t border-white/5 relative z-10">
               <div className="flex items-center gap-3 mb-8">
                  <div className="bg-accent/10 p-2 rounded-lg"><Info size={16} className="text-accent" /></div>
                  <h4 className="text-sm font-bold uppercase tracking-widest">Regime Logic Insight</h4>
               </div>
               
               <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-4">
                     <p className="text-[10px] font-black text-accent uppercase tracking-widest">Why New Regime?</p>
                     <p className="text-[11px] text-white/40 leading-relaxed italic">
                       The New Regime provides lower base slab rates but removes almost all Chapter VI-A deductions. It's conceptually designed to simplify compliance for those without significant home loans or locked-in savings.
                     </p>
                  </div>
                  <div className="space-y-4">
                     <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">Why Old Regime?</p>
                     <p className="text-[11px] text-white/40 leading-relaxed italic">
                       The Old Regime maintains higher slabs but allows for tax efficiency through statutory instruments (PPF, HRA, Insurance). It rewards those who proactively divert income into social security or housing.
                     </p>
                  </div>
               </div>
            </div>

            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" aria-hidden="true"></div>
          </div>
        </div>
      </div>

      {/* Persistent Reset Controls */}
      <div className="mt-16 text-center">
        <p className="text-[10px] text-primary/30 uppercase tracking-[0.4em] font-black mb-8">Interaction Management</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={() => {
              setIncome({ salary: 0, housePropertyRent: 0, housePropertyInterest: 0, businessProfession: 0, capitalGainsSTCG: 0, capitalGainsLTCG: 0, otherSources: 0 });
              setDeductions({ sec80C: 0, sec80D: 0, sec80TTA: 0, hraExemption: 0 });
            }}
            className="px-10 py-5 bg-white border border-primary/5 text-primary/60 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-primary/5 transition-all flex items-center justify-center space-x-3 shadow-sm focus:ring-2 focus:ring-accent outline-none"
          >
            <RefreshCcw size={16} />
            <span>Clear Scenario Data</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default IncomeTaxCalculator;
