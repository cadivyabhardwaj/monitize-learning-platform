import React, { useState, useMemo } from 'react';
import { CreditCard, Info, AlertTriangle, ArrowLeft, RefreshCcw, PieChart } from 'lucide-react';

interface EMIInputs {
  loanAmount: number;
  interestRate: number;
  tenureYears: number;
}

interface EMIResults {
  monthlyEMI: number;
  totalInterest: number;
  totalPayment: number;
  principalPercentage: number;
  interestPercentage: number;
}

/**
 * EMICalculator
 * 
 * A neutral educational utility for simulating loan repayment scenarios.
 * Adheres to strict compliance rules: informational only, no "affordability" nudges.
 */
const EMICalculator = ({ onBack }: { onBack: () => void }) => {
  const [inputs, setInputs] = useState<EMIInputs>({
    loanAmount: 5000000,
    interestRate: 8.5,
    tenureYears: 20,
  });

  const calculation = useMemo(() => {
    const P = inputs.loanAmount;
    const r = (inputs.interestRate / 12) / 100;
    const n = inputs.tenureYears * 12;

    // EMI Formula: [P x R x (1+R)^N]/[(1+R)^N-1]
    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    
    const totalPayment = emi * n;
    const totalInterest = totalPayment - P;

    return {
      monthlyEMI: emi,
      totalInterest,
      totalPayment,
      principalPercentage: (P / totalPayment) * 100,
      interestPercentage: (totalInterest / totalPayment) * 100,
    } as EMIResults;
  }, [inputs]);

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
        {/* Input Panel */}
        <section className="lg:col-span-5 space-y-8">
          <header>
            <h2 className="text-3xl font-poppins font-bold text-primary mb-2">Loan EMI Estimator</h2>
            <p className="text-primary/60 text-sm">Understand how loan principal, interest rates, and tenure interact to form your monthly repayment schedule.</p>
          </header>

          <div className="bg-white rounded-[32px] p-8 border border-primary/5 shadow-sm space-y-8">
            {/* Loan Amount */}
            <div>
              <label htmlFor="emi-loan-amount" className="block text-[10px] font-bold text-primary/40 uppercase tracking-widest mb-3">Principal Loan Amount</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/30 font-bold">₹</span>
                <input 
                  id="emi-loan-amount"
                  type="number" 
                  step="100000"
                  value={inputs.loanAmount}
                  onChange={(e) => setInputs(prev => ({ ...prev, loanAmount: Number(e.target.value) }))}
                  className="w-full bg-[#F5F7FA] border-none rounded-2xl pl-10 pr-6 py-4 font-bold text-primary focus:ring-2 focus:ring-accent outline-none"
                  placeholder="e.g. 5000000"
                />
              </div>
            </div>

            {/* Interest Rate */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label htmlFor="emi-interest-rate" className="block text-[10px] font-bold text-primary/40 uppercase tracking-widest">Interest Rate (Annual %)</label>
                <span className="text-xs font-bold text-accent">{inputs.interestRate}%</span>
              </div>
              <input 
                id="emi-interest-rate"
                type="range"
                min="1"
                max="30"
                step="0.1"
                value={inputs.interestRate}
                onChange={(e) => setInputs(prev => ({ ...prev, interestRate: Number(e.target.value) }))}
                className="w-full h-1.5 bg-[#F5F7FA] rounded-lg appearance-none cursor-pointer accent-accent"
              />
            </div>

            {/* Tenure */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label htmlFor="emi-tenure-years" className="block text-[10px] font-bold text-primary/40 uppercase tracking-widest">Loan Tenure</label>
                <span className="text-xs font-bold text-primary">{inputs.tenureYears} Years</span>
              </div>
              <input 
                id="emi-tenure-years"
                type="range"
                min="1"
                max="30"
                value={inputs.tenureYears}
                onChange={(e) => setInputs(prev => ({ ...prev, tenureYears: Number(e.target.value) }))}
                className="w-full h-1.5 bg-[#F5F7FA] rounded-lg appearance-none cursor-pointer accent-accent"
              />
            </div>
          </div>

          <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100 flex items-start space-x-3">
            <AlertTriangle className="text-blue-600 shrink-0 mt-0.5" size={18} />
            <p className="text-[10px] text-blue-800 leading-relaxed uppercase tracking-wider font-medium">
              Informational Note: This estimator does not account for processing fees, statutory charges, or insurance premiums which may be added to a loan by a financial institution.
            </p>
          </div>
        </section>

        {/* Results Panel */}
        <section className="lg:col-span-7 space-y-8">
          <div className="bg-[#0B1C2D] rounded-[40px] p-8 lg:p-12 text-white relative overflow-hidden h-full flex flex-col shadow-2xl">
            <div className="flex items-center justify-between mb-12 relative z-10">
              <h3 className="text-xl font-bold flex items-center space-x-2">
                <PieChart className="text-accent" size={20} />
                <span>Repayment Breakdown</span>
              </h3>
              <div className="flex items-center space-x-2 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Mode:</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-accent">Amortization Simulation</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 relative z-10 flex-1">
              <div className="space-y-10">
                <div>
                  <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest mb-1">Estimated Monthly EMI</p>
                  <p className="text-5xl font-poppins font-bold text-accent leading-tight">
                    {formatINR(calculation.monthlyEMI)}
                  </p>
                  <p className="text-[10px] text-white/30 mt-2 font-medium">
                    Calculated for a total of {inputs.tenureYears * 12} monthly installments.
                  </p>
                </div>

                <div className="space-y-4 pt-10 border-t border-white/5">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-white/40 font-medium">Total Principal</span>
                    <span className="text-sm font-bold">{formatINR(inputs.loanAmount)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-white/40 font-medium">Total Interest Component</span>
                    <span className="text-sm font-bold">{formatINR(calculation.totalInterest)}</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-white/10 mt-2">
                    <span className="text-xs text-white/80 font-bold">Aggregate Repayment</span>
                    <span className="text-sm font-bold text-accent">{formatINR(calculation.totalPayment)}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-3xl p-8 border border-white/10 flex flex-col justify-center text-center">
                <div className="mb-8 flex justify-center">
                  <div className="relative w-40 h-40">
                    <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                      <circle cx="18" cy="18" r="16" fill="transparent" stroke="currentColor" strokeWidth="4" className="text-white/10" />
                      <circle 
                        cx="18" cy="18" r="16" fill="transparent" stroke="currentColor" strokeWidth="4" 
                        strokeDasharray={`${calculation.principalPercentage} 100`} 
                        className="text-accent"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                       <span className="text-[10px] font-bold text-white/40 uppercase tracking-tighter">Composition</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Principal</span>
                    </div>
                    <span className="text-xs font-bold">{calculation.principalPercentage.toFixed(1)}%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-white/20"></div>
                      <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Interest</span>
                    </div>
                    <span className="text-xs font-bold">{calculation.interestPercentage.toFixed(1)}%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interpretation Guidance */}
            <div className="mt-12 pt-12 border-t border-white/5 relative z-10">
              <h4 className="text-sm font-bold mb-4 flex items-center space-x-2">
                <Info size={16} className="text-accent" />
                <span>Navigating the Estimates</span>
              </h4>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Impact of Tenure</p>
                  <p className="text-[10px] text-white/50 leading-relaxed">
                    Extending the loan tenure reduces monthly cash outflow but increases the total interest burden over the life of the loan. This utility visualizes that trade-off.
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Final Terms Disclosure</p>
                  <p className="text-[10px] text-white/50 leading-relaxed">
                    Actual EMI amounts and interest calculations will depend on specific lender policies, your credit score, and the type of benchmark rate (Fixed vs Floating) selected.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -top-24 -left-24 w-64 h-64 bg-accent/10 rounded-full blur-[100px]" aria-hidden="true"></div>
          </div>
        </section>
      </div>

      <div className="mt-16 text-center">
        <p className="text-[10px] text-primary/30 uppercase tracking-[0.3em] font-bold mb-6">Manage Simulator</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={onBack}
            className="px-8 py-4 bg-[#F5F7FA] text-primary/60 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-primary/5 transition-all focus:ring-2 focus:ring-accent outline-none"
          >
            Explore Other Utilities
          </button>
          <button 
            onClick={() => setInputs({ loanAmount: 5000000, interestRate: 8.5, tenureYears: 20 })}
            className="px-8 py-4 bg-primary text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-primary/90 transition-all flex items-center justify-center space-x-2 focus:ring-2 focus:ring-accent outline-none"
          >
            <RefreshCcw size={14} />
            <span>Reset Simulation</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EMICalculator;