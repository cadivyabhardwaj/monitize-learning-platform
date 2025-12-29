
import React, { useState, useMemo } from 'react';
import { ArrowLeft, Info, RefreshCcw, Layers, PieChart, Wallet, CreditCard, Building2, TrendingUp, AlertCircle, ShieldCheck, Scale, Zap } from 'lucide-react';

interface SnapshotState {
  assets: {
    liquid: number;       // Cash, Savings, Liquid MFs
    growth: number;       // Stocks, Equity MFs, Gold
    retirement: number;   // EPF, PPF, NPS
    fixed: number;        // Primary residence, land
  };
  liabilities: {
    secured: number;      // Home Loan, Vehicle Loan
    unsecured: number;    // Credit Cards, Personal Loans
    shortTerm: number;    // Pending bills, informal debt
  };
}

const FinancialSnapshot = ({ onBack }: { onBack: () => void }) => {
  const [state, setState] = useState<SnapshotState>({
    assets: {
      liquid: 200000,
      growth: 500000,
      retirement: 300000,
      fixed: 0,
    },
    liabilities: {
      secured: 0,
      unsecured: 20000,
      shortTerm: 5000,
    },
  });

  const calculation = useMemo(() => {
    // Fixed: Explicitly cast to number[] to resolve unknown type errors in reduction
    const totalAssets = (Object.values(state.assets) as number[]).reduce((a, b) => a + b, 0);
    const totalLiabilities = (Object.values(state.liabilities) as number[]).reduce((a, b) => a + b, 0);
    const netWorth = totalAssets - totalLiabilities;
    
    // Logic: What portion of the net worth is actually "ready" for emergency?
    const liquidityRatio = totalAssets > 0 ? (state.assets.liquid / totalAssets) * 100 : 0;
    // Logic: Exposure - what % of assets are claimed by debt?
    const leverageRatio = totalAssets > 0 ? (totalLiabilities / totalAssets) * 100 : 0;

    return {
      totalAssets,
      totalLiabilities,
      netWorth,
      liquidityRatio,
      leverageRatio,
      assetBreakdown: {
        liquid: (state.assets.liquid / totalAssets) * 100 || 0,
        growth: (state.assets.growth / totalAssets) * 100 || 0,
        retirement: (state.assets.retirement / totalAssets) * 100 || 0,
        fixed: (state.assets.fixed / totalAssets) * 100 || 0,
      },
    };
  }, [state]);

  const updateAsset = (key: keyof SnapshotState['assets'], val: number) => {
    setState(prev => ({
      ...prev,
      assets: { ...prev.assets, [key]: val }
    }));
  };

  const updateLiability = (key: keyof SnapshotState['liabilities'], val: number) => {
    setState(prev => ({
      ...prev,
      liabilities: { ...prev.liabilities, [key]: val }
    }));
  };

  const formatINR = (val: number) => 
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);

  const resetSnapshot = () => setState({
    assets: { liquid: 0, growth: 0, retirement: 0, fixed: 0 },
    liabilities: { secured: 0, unsecured: 0, shortTerm: 0 }
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <button 
        onClick={onBack}
        className="flex items-center space-x-2 text-primary/40 hover:text-primary mb-8 font-bold text-xs uppercase tracking-widest transition-colors"
      >
        <ArrowLeft size={16} />
        <span>Return to Planning Utilities</span>
      </button>

      <div className="grid lg:grid-cols-12 gap-12">
        {/* Input Logic: Classification Column */}
        <div className="lg:col-span-5 space-y-10">
          <header>
            <h2 className="text-3xl font-poppins font-bold text-primary mb-2">Net Worth Awareness</h2>
            <p className="text-primary/60 text-sm leading-relaxed">
              Understand your economic surplus by categorizing your self-reported holdings and obligations. 
              <span className="block mt-2 font-bold text-accent">Logic: Net Worth = What You Own - What You Owe.</span>
            </p>
          </header>

          <section className="space-y-6">
            <h3 className="text-[10px] font-bold text-accent uppercase tracking-widest flex items-center gap-2">
              <TrendingUp size={14} />
              Resource Categories (Assets)
            </h3>
            <div className="bg-white rounded-[40px] p-8 border border-primary/5 shadow-sm space-y-8">
              {[
                { 
                  label: 'Liquidity (Cash & Savings)', 
                  key: 'liquid', 
                  icon: <Wallet size={16} />, 
                  hint: 'Immediate access: Bank balances, Liquid Mutual Funds.' 
                },
                { 
                  label: 'Growth Assets (Stocks/Equity)', 
                  key: 'growth', 
                  icon: <TrendingUp size={16} />, 
                  hint: 'Long-term appreciation: Direct stocks, Mutual Funds, Gold.' 
                },
                { 
                  label: 'Statutory Savings (EPF/PPF)', 
                  key: 'retirement', 
                  icon: <ShieldCheck size={16} />, 
                  hint: 'Locked-in for the future: Provident Funds, NPS.' 
                },
                { 
                  label: 'Fixed Assets (Real Estate)', 
                  key: 'fixed', 
                  icon: <Building2 size={16} />, 
                  hint: 'Primary residence or land (current market estimate).' 
                }
              ].map(item => (
                <div key={item.key} className="space-y-2">
                  <label htmlFor={`asset-input-${item.key}`} className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-primary/70 uppercase flex items-center gap-2">
                       {item.icon} {item.label}
                    </span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/20 font-bold">₹</span>
                    <input 
                      id={`asset-input-${item.key}`}
                      type="number"
                      value={state.assets[item.key as keyof SnapshotState['assets']] === 0 ? '' : state.assets[item.key as keyof SnapshotState['assets']]}
                      onChange={(e) => updateAsset(item.key as keyof SnapshotState['assets'], Number(e.target.value))}
                      className="w-full bg-[#F5F7FA] border-none rounded-2xl pl-10 pr-6 py-4 font-bold text-primary focus:ring-2 focus:ring-accent outline-none transition-all"
                      placeholder="0"
                    />
                  </div>
                  <p className="text-[9px] text-primary/40 italic pl-1">{item.hint}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <h3 className="text-[10px] font-bold text-red-400 uppercase tracking-widest flex items-center gap-2">
              <CreditCard size={14} />
              Obligation Streams (Liabilities)
            </h3>
            <div className="bg-white rounded-[40px] p-8 border border-primary/5 shadow-sm space-y-8">
              {[
                { 
                  label: 'Secured Obligations (Loans)', 
                  key: 'secured', 
                  icon: <Building2 size={16} />, 
                  hint: 'Asset-backed debt: Home or Vehicle loans.' 
                },
                { 
                  label: 'Unsecured Exposure (CC/Personal)', 
                  key: 'unsecured', 
                  icon: <Zap size={16} />, 
                  hint: 'High-interest debt: Credit Cards, Personal Loans.' 
                },
                { 
                  label: 'Short-term Commitments', 
                  key: 'shortTerm', 
                  icon: <Layers size={16} />, 
                  hint: 'Immediate outflows: Informal loans, pending large bills.' 
                }
              ].map(item => (
                <div key={item.key} className="space-y-2">
                  <label htmlFor={`liability-input-${item.key}`} className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-primary/70 uppercase flex items-center gap-2">
                       {item.icon} {item.label}
                    </span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/20 font-bold">₹</span>
                    <input 
                      id={`liability-input-${item.key}`}
                      type="number"
                      value={state.liabilities[item.key as keyof SnapshotState['liabilities']] === 0 ? '' : state.liabilities[item.key as keyof SnapshotState['liabilities']]}
                      onChange={(e) => updateLiability(item.key as keyof SnapshotState['liabilities'], Number(e.target.value))}
                      className="w-full bg-[#F5F7FA] border-none rounded-2xl pl-10 pr-6 py-4 font-bold text-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="0"
                    />
                  </div>
                  <p className="text-[9px] text-primary/40 italic pl-1">{item.hint}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Results Logic: Analytical Framework Column */}
        <div className="lg:col-span-7 space-y-8">
          <div className="bg-[#0B1C2D] rounded-[48px] p-8 lg:p-16 text-white relative overflow-hidden h-full flex flex-col shadow-2xl">
            <div className="flex items-center justify-between mb-16 relative z-10">
              <h3 className="text-xl font-bold flex items-center space-x-3">
                <PieChart className="text-accent" size={24} />
                <span>Structural Perspective</span>
              </h3>
              <div className="bg-white/5 border border-white/10 px-6 py-2 rounded-full flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                <span className="text-[10px] font-black uppercase tracking-widest text-white/60">Logic Module v2.0</span>
              </div>
            </div>

            <div className="space-y-20 relative z-10 flex-1">
              {/* Primary Net Worth Display */}
              <div className="text-center py-12 border-b border-white/5 bg-white/[0.02] rounded-[40px]">
                <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.4em] mb-6">Aggregate Net Worth</p>
                <p className={`text-5xl lg:text-7xl font-poppins font-bold leading-tight mb-4 ${calculation.netWorth < 0 ? 'text-red-400' : 'text-white'}`}>
                  {formatINR(calculation.netWorth)}
                </p>
                <p className="text-xs text-white/30 italic max-w-sm mx-auto">
                   This represents the theoretical surplus if all assets were liquidated and all obligations settled today.
                </p>
              </div>

              {/* Analytical Ratios (Educational Points) */}
              <div className="grid md:grid-cols-2 gap-10">
                <div className="p-8 bg-white/[0.03] rounded-[32px] border border-white/5">
                   <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-black text-white/30 uppercase tracking-widest">Liquidity Awareness</span>
                      <span className="text-accent font-bold text-sm">{calculation.liquidityRatio.toFixed(1)}%</span>
                   </div>
                   <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden mb-4">
                      <div className="h-full bg-accent transition-all duration-1000" style={{ width: `${calculation.liquidityRatio}%` }}></div>
                   </div>
                   <p className="text-[10px] text-white/40 leading-relaxed italic">
                     Indicates the portion of your holdings that can be converted to cash within 48 hours for unforeseen events.
                   </p>
                </div>

                <div className="p-8 bg-white/[0.03] rounded-[32px] border border-white/5">
                   <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-black text-white/30 uppercase tracking-widest">Leverage Exposure</span>
                      <span className="text-red-400 font-bold text-sm">{calculation.leverageRatio.toFixed(1)}%</span>
                   </div>
                   <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden mb-4">
                      <div className="h-full bg-red-400 transition-all duration-1000" style={{ width: `${Math.min(100, calculation.leverageRatio)}%` }}></div>
                   </div>
                   <p className="text-[10px] text-white/40 leading-relaxed italic">
                     Reflects what percentage of your total owned resources is currently committed as collateral or liability.
                   </p>
                </div>
              </div>

              {/* Composition Breakdown */}
              <div className="space-y-8">
                 <h4 className="text-[10px] font-black text-accent uppercase tracking-[0.3em]">Resource Distribution</h4>
                 <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    {[
                      { label: 'Liquid', val: calculation.assetBreakdown.liquid, color: 'bg-emerald-400' },
                      { label: 'Growth', val: calculation.assetBreakdown.growth, color: 'bg-blue-400' },
                      { label: 'Statutory', val: calculation.assetBreakdown.retirement, color: 'bg-indigo-400' },
                      { label: 'Fixed', val: calculation.assetBreakdown.fixed, color: 'bg-white/20' }
                    ].map(item => (
                      <div key={item.label} className="space-y-3">
                        <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
                          <span className="text-white/40">{item.label}</span>
                          <span>{item.val.toFixed(0)}%</span>
                        </div>
                        <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                          <div className={`h-full ${item.color} transition-all duration-700`} style={{ width: `${item.val}%` }}></div>
                        </div>
                      </div>
                    ))}
                 </div>
              </div>
            </div>

            {/* Interpretation Framework */}
            <div className="mt-20 pt-12 border-t border-white/5 relative z-10">
              <h4 className="text-sm font-bold mb-8 flex items-center space-x-2">
                <Info size={16} className="text-accent" />
                <span>Navigating the Snapshot</span>
              </h4>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-3">
                  <p className="text-[10px] font-black text-accent uppercase tracking-widest">The "Why" Behind Assets</p>
                  <p className="text-[11px] text-white/50 leading-relaxed">
                    A balanced snapshot typically spreads across Liquid (safety), Growth (wealth creation), and Retirement (statutory security) categories. High concentration in "Fixed" assets may indicate a lack of immediate financial flexibility.
                  </p>
                </div>
                <div className="space-y-3">
                  <p className="text-[10px] font-black text-accent uppercase tracking-widest">The "Nature" of Debt</p>
                  <p className="text-[11px] text-white/50 leading-relaxed">
                    Liabilities aren't inherently negative. "Secured" debt (home loans) often creates value over time at lower interest costs, whereas "Unsecured" debt (credit cards) represents high-cost consumption logic.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" aria-hidden="true"></div>
          </div>
        </div>
      </div>

      {/* Persistence and Reset Controls */}
      <div className="mt-16 text-center">
        <p className="text-[10px] text-primary/30 uppercase tracking-[0.4em] font-black mb-8">Interaction Management</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={onBack}
            className="px-10 py-5 bg-[#F5F7FA] text-primary/60 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-primary/5 transition-all focus:ring-2 focus:ring-accent outline-none"
          >
            Other Utilities
          </button>
          <button 
            onClick={resetSnapshot}
            className="px-10 py-5 bg-primary text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-primary/90 transition-all flex items-center justify-center space-x-3 focus:ring-2 focus:ring-accent outline-none shadow-xl shadow-primary/10"
          >
            <RefreshCcw size={16} />
            <span>Wipe & Reset Snapshot</span>
          </button>
        </div>
      </div>

      {/* Structural Disclaimers */}
      <div className="mt-20 grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[32px] border border-primary/5 flex items-start gap-5 shadow-sm">
          <AlertCircle className="text-accent shrink-0 mt-1" size={24} />
          <div className="text-xs text-primary/60 leading-relaxed">
            <p className="font-black text-primary uppercase tracking-widest text-[10px] mb-3">Logical Disclaimer</p>
            This snapshot is an educational modeling utility based on self-reported estimates. Values for "Fixed Assets" or "Growth Assets" are hypothetical market valuations and may vary significantly during actual liquidation or sale.
          </div>
        </div>
        <div className="bg-white p-8 rounded-[32px] border border-primary/5 flex items-start gap-5 shadow-sm">
          <Scale className="text-accent shrink-0 mt-1" size={24} />
          <div className="text-xs text-primary/60 leading-relaxed">
            <p className="font-black text-primary uppercase tracking-widest text-[10px] mb-3">Regulatory Boundary</p>
            This utility does not constitute a "Net Worth Certificate" or formal financial assessment for credit, visa, or statutory purposes. It is strictly for conceptual personal awareness and lacks independent audit verification.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialSnapshot;
