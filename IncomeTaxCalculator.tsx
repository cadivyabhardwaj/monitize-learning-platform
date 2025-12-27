import React, { useState, useMemo } from 'react';
// Fix: Added TrendingUp to the imports from lucide-react
import { Calculator, Info, AlertTriangle, ArrowLeft, RefreshCcw, Scale, Building, Briefcase, Landmark, PieChart, Users, ChevronDown, TrendingUp } from 'lucide-react';

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

    // House Property: (Rent - 30% Std Ded) - Interest
    const nav = income.housePropertyRent * 0.7;
    const netHousePropIncome = nav - income.housePropertyInterest;

    // 2. Gross Total Income (GTI)
    const gti = netSalaryIncome + 
                netHousePropIncome + 
                income.businessProfession + 
                income.capitalGainsSTCG + 
                income.capitalGainsLTCG + 
                income.otherSources;

    // 3. Total Deductions (Applicable only in Old Regime)
    let totalDeductions = 0;
    if (profile.regime === 'old') {
      const capped80C = Math.min(deductions.sec80C, TAX_CONFIG.LIMITS.SEC_80C);
      const capped80D = Math.min(deductions.sec80D, TAX_CONFIG.LIMITS.SEC_80D_SELF + TAX_CONFIG.LIMITS.SEC_80D_PARENTS);
      totalDeductions = capped80C + capped80D + deductions.sec80TTA + deductions.hraExemption;
    }

    // 4. Taxable Income
    const taxableIncome = Math.max(0, gti - totalDeductions);

    // 5. Slab Computation
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

    // 6. Rebate u/s 87A
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
        <span>Return to Utilities</span>
      </button>

      <div className="grid lg:grid-cols-12 gap-12">
        {/* Input Column */}
        <div className="lg:col-span-5 space-y-8">
          <header>
            <h2 className="text-3xl font-poppins font-bold text-primary mb-2">Income Tax Simulator</h2>
            <p className="text-primary/60 text-sm leading-relaxed">
              This conceptual simulator models the structural flow of the Indian Income Tax Act (FY 24-25).
            </p>
          </header>

          {/* Assessee Profile Section */}
          <section className="bg-white rounded-[32px] p-8 border border-primary/5 shadow-sm space-y-6">
            <h3 className="text-[10px] font-bold text-primary/30 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
              <Users size={14} className="text-accent" />
              Assessee Profile
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <label className="block text-[10px] font-bold text-primary/40 uppercase tracking-widest mb-3">Tax Regime Choice</label>
                <div className="flex gap-2">
                  {(['new', 'old'] as const).map(r => (
                    <button
                      key={r}
                      onClick={() => setProfile(p => ({ ...p, regime: r }))}
                      className={`flex-1 py-3 rounded-xl text-xs font-bold capitalize transition-all ${profile.regime === r ? 'bg-primary text-white shadow-lg' : 'bg-[#F5F7FA] text-primary/40 hover:bg-primary/5'}`}
                    >
                      {r} Regime
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="assessee-type" className="block text-[10px] font-bold text-primary/40 uppercase tracking-widest mb-3">Entity Type</label>
                <div className="relative">
                  <select 
                    id="assessee-type"
                    value={profile.assesseeType}
                    onChange={(e) => setProfile(p => ({ ...p, assesseeType: e.target.value as AssesseeType }))}
                    className="w-full bg-[#F5F7FA] border-none rounded-xl pl-4 pr-10 py-3 text-xs font-bold text-primary outline-none focus:ring-2 focus:ring-accent appearance-none"
                  >
                    <option value="INDIVIDUAL">Individual</option>
                    <option value="HUF">HUF</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-primary/20 pointer-events-none" size={14} />
                </div>
              </div>

              <div>
                <label htmlFor="age-category" className="block text-[10px] font-bold text-primary/40 uppercase tracking-widest mb-3">Age Group</label>
                <div className="relative">
                  <select 
                    id="age-category"
                    value={profile.ageCategory}
                    onChange={(e) => setProfile(p => ({ ...p, ageCategory: e.target.value as AgeCategory }))}
                    className="w-full bg-[#F5F7FA] border-none rounded-xl pl-4 pr-10 py-3 text-xs font-bold text-primary outline-none focus:ring-2 focus:ring-accent appearance-none"
                  >
                    <option value="NORMAL">Below 60</option>
                    <option value="SENIOR">60 to 79</option>
                    <option value="SUPER_SENIOR">80 and Above</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-primary/20 pointer-events-none" size={14} />
                </div>
              </div>

              <div className="col-span-2">
                <label htmlFor="residential-status" className="block text-[10px] font-bold text-primary/40 uppercase tracking-widest mb-3">Residential Status</label>
                <div className="relative">
                  <select 
                    id="residential-status"
                    value={profile.residentialStatus}
                    onChange={(e) => setProfile(p => ({ ...p, residentialStatus: e.target.value as ResidentialStatus }))}
                    className="w-full bg-[#F5F7FA] border-none rounded-xl pl-4 pr-10 py-3 text-xs font-bold text-primary outline-none focus:ring-2 focus:ring-accent appearance-none"
                  >
                    <option value="RESIDENT">Resident Indian</option>
                    <option value="RNOR">RNOR</option>
                    <option value="NRI">Non-Resident (NRI)</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-primary/20 pointer-events-none" size={14} />
                </div>
              </div>
            </div>
          </section>

          {/* Heads of Income Section */}
          <section className="bg-white rounded-[32px] p-8 border border-primary/5 shadow-sm space-y-6">
            <h3 className="text-[10px] font-bold text-primary/30 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
              <PieChart size={14} className="text-accent" />
              Heads of Income
            </h3>
            
            <div className="space-y-5">
              {[
                { label: 'Income from Salary (Gross)', key: 'salary', icon: <Landmark size={14} /> },
                { label: 'Business / Profession Income', key: 'businessProfession', icon: <Briefcase size={14} /> },
                { label: 'Short Term Capital Gains (STCG)', key: 'capitalGainsSTCG', icon: <TrendingUp size={14} /> },
                { label: 'Long Term Capital Gains (LTCG)', key: 'capitalGainsLTCG', icon: <TrendingUp size={14} /> },
                { label: 'Income from Other Sources', key: 'otherSources', icon: <Scale size={14} /> },
              ].map(head => (
                <div key={head.key}>
                  <label htmlFor={`income-${head.key}`} className="block text-[9px] font-bold text-primary/40 uppercase mb-2 flex items-center gap-1">
                    {head.icon} {head.label}
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/20 font-bold text-sm">₹</span>
                    <input 
                      id={`income-${head.key}`}
                      type="number"
                      value={income[head.key as keyof IncomeHeads] || ''}
                      onChange={(e) => handleIncomeChange(head.key as keyof IncomeHeads, e.target.value)}
                      className="w-full bg-[#F5F7FA] border-none rounded-xl pl-10 pr-6 py-3 font-bold text-primary focus:ring-2 focus:ring-accent outline-none text-sm"
                      placeholder="0"
                    />
                  </div>
                </div>
              ))}

              <div className="pt-4 border-t border-primary/5 space-y-5">
                <div>
                  <label htmlFor="hp-rent" className="block text-[9px] font-bold text-primary/40 uppercase mb-2 flex items-center gap-1">
                    <Building size={14} /> House Property (Gross Annual Rent)
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/20 font-bold text-sm">₹</span>
                    <input 
                      id="hp-rent"
                      type="number"
                      value={income.housePropertyRent || ''}
                      onChange={(e) => handleIncomeChange('housePropertyRent', e.target.value)}
                      className="w-full bg-[#F5F7FA] border-none rounded-xl pl-10 pr-6 py-3 font-bold text-primary focus:ring-2 focus:ring-accent outline-none text-sm"
                      placeholder="0"
                    />
                  </div>
                  <p className="mt-2 text-[9px] text-primary/30 italic leading-relaxed">A 30% statutory deduction is automatically computed on net rental income.</p>
                </div>

                <div>
                  <label htmlFor="hp-interest" className="block text-[9px] font-bold text-primary/40 uppercase mb-2">Interest on Housing Loan (u/s 24b)</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/20 font-bold text-sm">₹</span>
                    <input 
                      id="hp-interest"
                      type="number"
                      value={income.housePropertyInterest || ''}
                      onChange={(e) => handleIncomeChange('housePropertyInterest', e.target.value)}
                      className="w-full bg-[#F5F7FA] border-none rounded-xl pl-10 pr-6 py-3 font-bold text-primary focus:ring-2 focus:ring-accent outline-none text-sm"
                      placeholder="0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Deductions - Only for Old Regime */}
          {profile.regime === 'old' && (
            <section className="bg-white rounded-[32px] p-8 border border-primary/5 shadow-sm space-y-6 animate-in fade-in duration-300">
              <h3 className="text-[10px] font-bold text-accent uppercase tracking-[0.2em] mb-4">Chapter VI-A Deductions</h3>
              <div className="space-y-5">
                <div>
                  <label htmlFor="deduct-80c" className="block text-[9px] font-bold text-primary/40 uppercase mb-2">Section 80C (Capped at 1.5L)</label>
                  <input 
                    id="deduct-80c"
                    type="number"
                    value={deductions.sec80C || ''}
                    onChange={(e) => handleDeductionChange('sec80C', e.target.value)}
                    className="w-full bg-[#F5F7FA] border-none rounded-xl px-4 py-3 font-bold text-primary focus:ring-2 focus:ring-accent outline-none text-sm"
                    placeholder="0"
                  />
                  <p className="mt-1 text-[8px] text-primary/30 uppercase font-bold tracking-tighter">LIC, EPF, PPF, ELSS, Housing Principal</p>
                </div>
                <div>
                  <label htmlFor="deduct-80d" className="block text-[9px] font-bold text-primary/40 uppercase mb-2">Section 80D (Health Insurance)</label>
                  <input 
                    id="deduct-80d"
                    type="number"
                    value={deductions.sec80D || ''}
                    onChange={(e) => handleDeductionChange('sec80D', e.target.value)}
                    className="w-full bg-[#F5F7FA] border-none rounded-xl px-4 py-3 font-bold text-primary focus:ring-2 focus:ring-accent outline-none text-sm"
                    placeholder="0"
                  />
                </div>
              </div>
            </section>
          )}

          <div className="bg-red-50/50 p-6 rounded-2xl border border-red-100 flex items-start space-x-3">
            <AlertTriangle className="text-red-400 shrink-0 mt-0.5" size={18} />
            <p className="text-[10px] text-red-800 leading-relaxed uppercase tracking-wider font-medium">
              LEGAL NOTICE: This simulator is an educational modeling utility. It does not provide tax advice. Final tax liability should be confirmed by a licensed professional or verified via official government portals.
            </p>
          </div>
        </div>

        {/* Output Column */}
        <div className="lg:col-span-7 space-y-8">
          <div className="bg-[#0B1C2D] rounded-[40px] p-8 lg:p-12 text-white relative overflow-hidden flex flex-col h-full shadow-2xl">
            <div className="flex items-center justify-between mb-12 relative z-10">
              <h3 className="text-xl font-bold flex items-center space-x-2">
                <Calculator className="text-accent" size={20} />
                <span>Simulation Results</span>
              </h3>
              <div className="bg-white/5 border border-white/10 px-4 py-1.5 rounded-full flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">FY 2024-25 Modeling</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 relative z-10 flex-1">
              <div className="space-y-10">
                <div className="space-y-1">
                  <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Gross Total Income (GTI)</p>
                  <p className="text-3xl font-bold">{formatINR(calculation.gti)}</p>
                  <p className="text-[9px] text-white/30 italic">Aggregate of net income across all five heads.</p>
                </div>
                
                <div className="space-y-1">
                  <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Total Taxable Income</p>
                  <p className="text-3xl font-bold text-accent">{formatINR(calculation.taxableIncome)}</p>
                  <p className="text-[9px] text-white/30 italic">Income after statutory and Chapter VI-A deductions.</p>
                </div>

                <div className="space-y-4 pt-10 border-t border-white/10">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-white/40 font-medium">Base Slab Tax</span>
                    <span className="text-sm font-bold">{formatINR(calculation.baseTax)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-white/40 font-medium">Rebate u/s 87A</span>
                    <span className="text-sm font-bold text-accent">-{formatINR(calculation.rebate)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-white/40 font-medium">Health & Education Cess (4%)</span>
                    <span className="text-sm font-bold">{formatINR(calculation.cess)}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-3xl p-8 border border-white/10 flex flex-col justify-center items-center text-center shadow-inner">
                <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest mb-4">Total Estimated Tax Payable</p>
                <p className="text-6xl font-poppins font-bold text-white mb-6 leading-tight">
                  {formatINR(calculation.totalTax)}
                </p>
                <div className="w-full h-1 bg-white/5 rounded-full mb-6 overflow-hidden">
                   <div className="h-full bg-accent transition-all duration-500" style={{ width: calculation.totalTax > 0 ? '70%' : '0%' }}></div>
                </div>
                <p className="text-xs text-white/40 leading-relaxed max-w-[200px] mx-auto">
                  Informational total based on the selected {profile.regime} regime parameters.
                </p>
              </div>
            </div>

            {/* Logical Breakdown Note */}
            <div className="mt-12 pt-12 border-t border-white/10 relative z-10 grid md:grid-cols-2 gap-8">
               <div className="space-y-3">
                  <h4 className="text-[10px] font-bold text-accent uppercase tracking-widest">Structural Flow</h4>
                  <ul className="text-[10px] text-white/40 space-y-2 list-disc pl-4">
                    <li>Salary: Reduced by {formatINR(profile.regime === 'new' ? 75000 : 50000)} Standard Deduction.</li>
                    <li>House Prop: 30% Net Annual Value deduction applied before interest offset.</li>
                    <li>Limits: Chapter VI-A deductions (Old Regime only) capped at statutory maximums.</li>
                  </ul>
               </div>
               <div className="space-y-3">
                  <h4 className="text-[10px] font-bold text-accent uppercase tracking-widest">Conceptual Guidance</h4>
                  <p className="text-[10px] text-white/40 leading-relaxed">
                    This model assumes standard slab-based taxation. Specific rates for STCG/LTCG on equity or other assets are not modeled individually in this summary simulation but are treated as part of total taxable income for slab estimation.
                  </p>
               </div>
            </div>

            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent/10 rounded-full blur-[100px]" aria-hidden="true"></div>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <p className="text-[10px] text-primary/30 uppercase tracking-[0.3em] font-bold mb-6">Manage Simulator</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={onBack}
            className="px-8 py-4 bg-[#F5F7FA] text-primary/60 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-primary/5 transition-all focus:ring-2 focus:ring-accent outline-none"
          >
            Other Utilities
          </button>
          <button 
            onClick={() => {
              setIncome({ salary: 0, housePropertyRent: 0, housePropertyInterest: 0, businessProfession: 0, capitalGainsSTCG: 0, capitalGainsLTCG: 0, otherSources: 0 });
              setDeductions({ sec80C: 0, sec80D: 0, sec80TTA: 0, hraExemption: 0 });
            }}
            className="px-8 py-4 bg-primary text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-primary/90 transition-all flex items-center justify-center space-x-2 focus:ring-2 focus:ring-accent outline-none"
          >
            <RefreshCcw size={14} />
            <span>Reset Data</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default IncomeTaxCalculator;