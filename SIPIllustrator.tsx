
import React, { useState, useMemo } from 'react';
import { Info, AlertTriangle, ArrowLeft, RefreshCcw, Coins, Activity, Scale } from 'lucide-react';

interface SIPInputs {
  monthlyAmount: number;
  durationYears: number;
  assumedRate: number | '';
}

interface SIPResults {
  totalPrincipal: number;
  theoreticalValue: number;
  mathematicalDifference: number;
}

/**
 * SIPIllustrator
 * 
 * A neutral educational utility for visualizing the mathematical concept of compounding.
 * Strictly non-advisory: no pre-filled rates, neutral terminology, no performance claims.
 */
const SIPIllustrator = ({ onBack }: { onBack: () => void }) => {
  const [inputs, setInputs] = useState<SIPInputs>({
    monthlyAmount: 10000,
    durationYears: 10,
    assumedRate: '', // No pre-filled rate to avoid suggesting baseline returns
  });

  const calculation = useMemo(() => {
    const P = inputs.monthlyAmount;
    const n = inputs.durationYears * 12;
    const rateInput = inputs.assumedRate === '' ? 0 : inputs.assumedRate;
    const i = (rateInput / 100) / 12;

    const totalPrincipal = P * n;
    
    // SIP Formula: M * [( (1 + i)^n - 1 ) / i] * (1 + i)
    let theoreticalValue = totalPrincipal;
    if (i > 0) {
      theoreticalValue = P * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
    }

    return {
      totalPrincipal,
      theoreticalValue,
      mathematicalDifference: Math.max(0, theoreticalValue - totalPrincipal)
    } as SIPResults;
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-[10px] font-black text-primary/40 uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              Mathematical Framework
            </div>
            <h2 className="text-3xl font-poppins font-bold text-primary mb-2 leading-tight">Compounding <br />Logic Illustration</h2>
            <p className="text-primary/60 text-sm leading-relaxed">
              Understand the mathematical effect of time and consistency on periodic installments using a linear compounding model.
            </p>
          </header>

          <div className="bg-white rounded-[40px] p-8 border border-primary/5 shadow-sm space-y-8">
            {/* Monthly Amount */}
            <div className="space-y-3">
              <label htmlFor="sip-monthly-amount" className="block text-[10px] font-bold text-primary/40 uppercase tracking-widest flex items-center gap-2">
                <Coins size={12} /> Monthly Installment
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/20 font-bold">₹</span>
                <input 
                  id="sip-monthly-amount"
                  type="number" 
                  step="500"
                  value={inputs.monthlyAmount}
                  onChange={(e) => setInputs(prev => ({ ...prev, monthlyAmount: Math.max(0, Number(e.target.value)) }))}
                  className="w-full bg-[#F5F7FA] border-none rounded-2xl pl-10 pr-6 py-4 font-bold text-primary focus:ring-2 focus:ring-accent outline-none transition-all"
                  placeholder="e.g. 10000"
                />
              </div>
            </div>

            {/* Duration */}
            <div className="space-y-4 pt-6 border-t border-primary/5">
              <div className="flex justify-between items-center">
                <label htmlFor="sip-duration-years" className="block text-[10px] font-bold text-primary/40 uppercase tracking-widest flex items-center gap-2">
                  <Activity size={12} /> Time Horizon
                </label>
                <span className="text-xs font-bold text-primary">{inputs.durationYears} Years</span>
              </div>
              <input 
                id="sip-duration-years"
                type="range"
                min="1"
                max="40"
                value={inputs.durationYears}
                onChange={(e) => setInputs(prev => ({ ...prev, durationYears: Number(e.target.value) }))}
                className="w-full h-1.5 bg-[#F5F7FA] rounded-lg appearance-none cursor-pointer accent-accent"
              />
              <div className="flex justify-between text-[8px] font-black text-primary/20 uppercase tracking-widest">
                <span>1 Year</span>
                <span>40 Years</span>
              </div>
            </div>

            {/* Assumed Rate */}
            <div className="space-y-3 pt-6 border-t border-primary/5">
              <label htmlFor="sip-assumed-rate" className="block text-[10px] font-bold text-primary/40 uppercase tracking-widest flex items-center gap-2">
                <Scale size={12} /> Assumed Compounding Rate (%)
              </label>
              <div className="relative">
                <input 
                  id="sip-assumed-rate"
                  type="number"
                  placeholder="Enter a theoretical rate (e.g. 10)"
                  value={inputs.assumedRate}
                  onChange={(e) => setInputs(prev => ({ ...prev, assumedRate: e.target.value === '' ? '' : Number(e.target.value) }))}
                  className="w-full bg-[#F5F7FA] border-none rounded-2xl px-6 py-4 font-bold text-primary focus:ring-2 focus:ring-accent outline-none transition-all placeholder:text-primary/20"
                />
                <span className="absolute right-6 top-1/2 -translate-y-1/2 text-primary/20 font-bold">%</span>
              </div>
              <p className="text-[9px] text-primary/40 leading-relaxed italic">
                Note: This rate is strictly user-defined for the purpose of mathematical modeling.
              </p>
            </div>
          </div>

          <div className="p-6 bg-accent/5 rounded-3xl border border-accent/10 flex items-start gap-4">
             <Info size={18} className="text-accent shrink-0 mt-0.5" />
             <p className="text-[11px] text-primary/60 leading-relaxed font-medium italic">
               Compounding is a mathematical phenomenon where the value added in one period earns additional value in the next. Its effect is most visible over extended time horizons.
             </p>
          </div>
        </section>

        {/* Results Panel */}
        <section className="lg:col-span-7 space-y-8">
          <div className="bg-[#0B1C2D] rounded-[48px] p-8 lg:p-16 text-white relative overflow-hidden h-full flex flex-col shadow-2xl">
            <div className="flex items-center justify-between mb-16 relative z-10">
              <h3 className="text-xl font-bold flex items-center space-x-3">
                <Activity className="text-accent" size={24} />
                <span>Theoretical Projection</span>
              </h3>
              <div className="bg-white/5 border border-white/10 px-6 py-2 rounded-full flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                <span className="text-[10px] font-black uppercase tracking-widest text-white/60">Linear Model v1.0</span>
              </div>
            </div>

            <div className="space-y-16 relative z-10 flex-1">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-1">
                  <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Total Principal Invested</p>
                  <p className="text-4xl font-bold">{formatINR(calculation.totalPrincipal)}</p>
                  <p className="text-[9px] text-white/30 italic">Sum of installments over {inputs.durationYears} years.</p>
                </div>
                
                <div className="space-y-1">
                  <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Theoretical Aggregate Value</p>
                  <p className="text-4xl font-bold text-accent">{formatINR(calculation.theoreticalValue)}</p>
                  <p className="text-[9px] text-white/30 italic">Value based on an assumed {inputs.assumedRate || 0}% rate.</p>
                </div>
              </div>

              <div className="bg-white/[0.03] rounded-[40px] p-10 border border-white/5 relative overflow-hidden">
                <div className="relative z-10 space-y-8">
                  <div className="flex items-center justify-between">
                    <h4 className="text-[10px] font-black text-accent uppercase tracking-[0.3em]">Mathematical Difference</h4>
                    <span className="text-2xl font-bold text-accent">+{formatINR(calculation.mathematicalDifference)}</span>
                  </div>
                  
                  <div className="w-full h-4 bg-white/5 rounded-full overflow-hidden flex shadow-inner">
                    <div className="h-full bg-white/20 transition-all duration-700" style={{ width: `${(calculation.totalPrincipal / calculation.theoreticalValue) * 100}%` }}></div>
                    <div className="h-full bg-accent transition-all duration-1000" style={{ width: `${(calculation.mathematicalDifference / calculation.theoreticalValue) * 100}%` }}></div>
                  </div>

                  <div className="flex justify-between items-start gap-8">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-white/30 mt-1"></div>
                      <div>
                        <p className="text-[9px] font-black text-white/40 uppercase tracking-widest">Principal</p>
                        <p className="text-xs font-bold text-white/60">{((calculation.totalPrincipal / calculation.theoreticalValue) * 100).toFixed(0)}%</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-1"></div>
                      <div>
                        <p className="text-[9px] font-black text-accent uppercase tracking-widest">Compounding Effect</p>
                        <p className="text-xs font-bold text-accent">{((calculation.mathematicalDifference / calculation.theoreticalValue) * 100).toFixed(0)}%</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl"></div>
              </div>
            </div>

            {/* Conceptual Interpretation */}
            <div className="mt-16 pt-12 border-t border-white/10 relative z-10">
              <h4 className="text-sm font-bold mb-8 flex items-center space-x-2">
                <Info size={16} className="text-accent" />
                <span>Navigating the Illustration</span>
              </h4>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-3">
                  <p className="text-[10px] font-black text-accent uppercase tracking-widest">Linear vs Market Realities</p>
                  <p className="text-[11px] text-white/50 leading-relaxed">
                    This simulation assumes a linear, constant rate. In the Indian market, equity and debt instruments fluctuate daily. Actual outcomes are never linear and may result in values lower than the principal invested.
                  </p>
                </div>
                <div className="space-y-3">
                  <p className="text-[10px] font-black text-accent uppercase tracking-widest">The Time Variable</p>
                  <p className="text-[11px] text-white/50 leading-relaxed">
                    Note how the 'Compounding Effect' grows disproportionately in the final years of the horizon. This mathematical behavior illustrates why starting early is a key logical principle.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" aria-hidden="true"></div>
          </div>
        </section>
      </div>

      {/* Interaction Controls */}
      <div className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-8">
        <p className="text-[10px] text-primary/30 uppercase tracking-[0.4em] font-black">Interaction Management</p>
        <div className="flex gap-4">
          <button 
            onClick={() => setInputs({ monthlyAmount: 0, durationYears: 10, assumedRate: '' })}
            className="px-10 py-5 bg-white border border-primary/5 text-primary/60 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-primary/5 transition-all flex items-center justify-center space-x-3 shadow-sm focus:ring-2 focus:ring-accent outline-none"
          >
            <RefreshCcw size={16} />
            <span>Clear All Variables</span>
          </button>
        </div>
      </div>

      {/* Structural Compliance Footer */}
      <div className="mt-24 grid md:grid-cols-2 gap-8">
        <div className="bg-white p-10 rounded-[40px] border border-primary/5 flex items-start gap-6 shadow-sm">
          <AlertTriangle className="text-accent shrink-0 mt-1" size={24} />
          <div className="text-xs text-primary/60 leading-relaxed">
            <p className="font-black text-primary uppercase tracking-widest text-[10px] mb-4 underline decoration-accent decoration-2 underline-offset-4">Market Risk Warning</p>
            Investments are subject to market risks. Past performance is not an indicator of future results. This tool does not guarantee any specific terminal value or rate of return.
          </div>
        </div>
        <div className="bg-white p-10 rounded-[40px] border border-primary/5 flex items-start gap-6 shadow-sm">
          <Info className="text-accent shrink-0 mt-1" size={24} />
          <div className="text-xs text-primary/60 leading-relaxed">
            <p className="font-black text-primary uppercase tracking-widest text-[10px] mb-4 underline decoration-accent decoration-2 underline-offset-4">Educational Purpose</p>
            This illustrator is provided strictly for conceptual education. It does not constitute investment advice, solicitation, or a recommendation to purchase any financial instrument. Always consult a SEBI-registered advisor.
          </div>
        </div>
      </div>
    </div>
  );
};

export default SIPIllustrator;
