
import React, { useState } from 'react';
import { 
  ArrowLeft, Info, Gavel, Building2, Users, Scale, 
  CheckCircle2, AlertTriangle, Briefcase, Landmark, 
  ChevronRight, RefreshCcw, ShieldCheck, GitMerge,
  ExternalLink
} from 'lucide-react';

interface StructureState {
  owners: 'single' | 'multiple';
  fundingIntent: 'self' | 'external';
  liabilityPreference: 'unlimited' | 'limited';
}

const COMPARISON_DATA = {
  proprietorship: {
    title: "Sole Proprietorship",
    legalStatus: "Not a separate entity; tied to the owner's PAN.",
    liability: "Unlimited. Owner is personally liable for all debts.",
    audit: "Mandatory only after tax thresholds (e.g. ₹1 Cr / ₹10 Cr).",
    compliance: "Low. Limited to individual tax and GST (if registered).",
    funding: "Difficult. Cannot issue equity shares to investors."
  },
  llp: {
    title: "Limited Liability Partnership",
    legalStatus: "Separate legal entity; registered with MCA.",
    liability: "Limited to the extent of capital contribution.",
    audit: "Mandatory if Turnover > ₹40L or Capital > ₹25L.",
    compliance: "Moderate. Annual ROC filings (Form 8 & 11).",
    funding: "Limited. Partners can be added, but no equity share logic."
  },
  pvtLtd: {
    title: "Private Limited Company",
    legalStatus: "Separate legal entity; registered with MCA.",
    liability: "Limited to the value of shares held.",
    audit: "Statutory Audit is mandatory every year regardless of turnover.",
    compliance: "High. Frequent board meetings, ROC filings, and auditors.",
    funding: "Excellent. Ideal for raising Venture Capital via equity."
  }
};

const BusinessStructureAwareness = ({ onBack }: { onBack: () => void }) => {
  const [state, setState] = useState<StructureState>({
    owners: 'single',
    fundingIntent: 'self',
    liabilityPreference: 'unlimited'
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <button 
        onClick={onBack}
        className="flex items-center space-x-2 text-primary/40 hover:text-primary mb-8 font-bold text-xs uppercase tracking-widest transition-colors"
      >
        <ArrowLeft size={16} />
        <span>Return to Business Utilities</span>
      </button>

      <div className="grid lg:grid-cols-12 gap-12">
        {/* Interaction Column */}
        <div className="lg:col-span-4 space-y-10">
          <header>
            <h2 className="text-3xl font-poppins font-bold text-primary mb-2">Structure Awareness</h2>
            <p className="text-primary/60 text-sm leading-relaxed">
              Understand the structural logic and compliance obligations of common Indian business frameworks.
            </p>
          </header>

          <section className="space-y-6">
            <h3 className="text-[10px] font-black text-accent uppercase tracking-widest flex items-center gap-2">
              <Landmark size={14} />
              Entity Characteristics
            </h3>
            <div className="bg-white rounded-[40px] p-8 border border-primary/5 shadow-sm space-y-8">
              {/* Owners */}
              <div className="space-y-4">
                <p className="text-xs font-bold text-primary">Number of Promoters/Owners</p>
                <div className="flex gap-2">
                  {(['single', 'multiple'] as const).map(o => (
                    <button
                      key={o}
                      onClick={() => setState(prev => ({ ...prev, owners: o }))}
                      className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all ${state.owners === o ? 'bg-primary text-white shadow-lg' : 'bg-[#F5F7FA] text-primary/40 hover:bg-primary/5'}`}
                    >
                      {o}
                    </button>
                  ))}
                </div>
                <p className="text-[9px] text-primary/30 italic">Proprietorships are restricted to single individuals.</p>
              </div>

              {/* Funding */}
              <div className="space-y-4">
                <p className="text-xs font-bold text-primary">Capital Inflow Intent</p>
                <div className="flex gap-2">
                  {(['self', 'external'] as const).map(f => (
                    <button
                      key={f}
                      onClick={() => setState(prev => ({ ...prev, fundingIntent: f }))}
                      className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all ${state.fundingIntent === f ? 'bg-primary text-white shadow-lg' : 'bg-[#F5F7FA] text-primary/40 hover:bg-primary/5'}`}
                    >
                      {f === 'self' ? 'Bootstrapped' : 'External Equity'}
                    </button>
                  ))}
                </div>
                <p className="text-[9px] text-primary/30 italic">Pvt Ltd is the preferred choice for equity fundraises.</p>
              </div>

              {/* Liability */}
              <div className="space-y-4">
                <p className="text-xs font-bold text-primary">Liability Preference</p>
                <div className="flex gap-2">
                  {(['unlimited', 'limited'] as const).map(l => (
                    <button
                      key={l}
                      onClick={() => setState(prev => ({ ...prev, liabilityPreference: l }))}
                      className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all ${state.liabilityPreference === l ? 'bg-primary text-white shadow-lg' : 'bg-[#F5F7FA] text-primary/40 hover:bg-primary/5'}`}
                    >
                      {l}
                    </button>
                  ))}
                </div>
                <p className="text-[9px] text-primary/30 italic">Limited liability protects personal assets from business debt.</p>
              </div>
            </div>
          </section>

          <div className="bg-[#0B1C2D] p-8 rounded-[32px] text-white">
            <div className="flex items-center gap-3 mb-4 text-accent">
               <ShieldCheck size={20} />
               <h4 className="font-bold text-xs uppercase tracking-widest">Educational Focus</h4>
            </div>
            <p className="text-[11px] text-white/50 leading-relaxed font-medium italic">
              "Structure determines compliance cost. Choosing a complex entity early (like Pvt Ltd) without immediate revenue can lead to high annual audit and filing overheads."
            </p>
          </div>
        </div>

        {/* Comparison Column */}
        <div className="lg:col-span-8 space-y-8">
          <div className="bg-white rounded-[48px] p-8 lg:p-12 border border-primary/5 shadow-sm overflow-hidden relative min-h-full">
            <div className="flex items-center justify-between mb-12 relative z-10">
              <h3 className="text-xl font-bold flex items-center space-x-3">
                <GitMerge className="text-accent" size={24} />
                <span>Structural Comparison</span>
              </h3>
              <div className="bg-primary/5 px-6 py-2 rounded-full">
                <span className="text-[10px] font-black uppercase tracking-widest text-primary/40">Informational Table</span>
              </div>
            </div>

            <div className="relative z-10 overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-primary/5">
                    <th className="pb-6 text-[10px] font-black text-primary/30 uppercase tracking-widest">Characteristic</th>
                    {Object.values(COMPARISON_DATA).map(item => (
                      <th key={item.title} className="pb-6 px-4 text-[10px] font-black text-accent uppercase tracking-widest text-center">{item.title}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-xs">
                  <tr className="border-b border-primary/5">
                    <td className="py-8 font-bold text-primary uppercase text-[9px] tracking-wider w-32">Legal Status</td>
                    {Object.values(COMPARISON_DATA).map(item => (
                      <td key={item.title} className="py-8 px-4 text-primary/60 leading-relaxed text-center font-medium italic">{item.legalStatus}</td>
                    ))}
                  </tr>
                  <tr className="border-b border-primary/5">
                    <td className="py-8 font-bold text-primary uppercase text-[9px] tracking-wider">Owner Liability</td>
                    {Object.values(COMPARISON_DATA).map(item => (
                      <td key={item.title} className={`py-8 px-4 leading-relaxed text-center font-bold ${item.liability.includes('Unlimited') ? 'text-red-400' : 'text-accent'}`}>{item.liability}</td>
                    ))}
                  </tr>
                  <tr className="border-b border-primary/5">
                    <td className="py-8 font-bold text-primary uppercase text-[9px] tracking-wider">MCA Audit</td>
                    {Object.values(COMPARISON_DATA).map(item => (
                      <td key={item.title} className="py-8 px-4 text-primary/60 leading-relaxed text-center font-medium">{item.audit}</td>
                    ))}
                  </tr>
                  <tr className="border-b border-primary/5">
                    <td className="py-8 font-bold text-primary uppercase text-[9px] tracking-wider">Compliance</td>
                    {Object.values(COMPARISON_DATA).map(item => (
                      <td key={item.title} className="py-8 px-4 text-primary/60 leading-relaxed text-center font-medium">{item.compliance}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-8 font-bold text-primary uppercase text-[9px] tracking-wider">Fundraising</td>
                    {Object.values(COMPARISON_DATA).map(item => (
                      <td key={item.title} className="py-8 px-4 text-primary/60 leading-relaxed text-center font-medium">{item.funding}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Recommendations context (Neutral) */}
            <div className="mt-16 pt-12 border-t border-primary/5 grid md:grid-cols-2 gap-12">
               <div className="space-y-4">
                  <h4 className="text-sm font-bold text-primary flex items-center gap-2">
                    <Briefcase size={16} className="text-accent" />
                    Structural Logic
                  </h4>
                  <p className="text-[11px] text-primary/50 leading-relaxed italic">
                    If you are a solo freelancer starting with zero liability risk, a Proprietorship minimizes administrative costs. If you are two partners building a professional service with significant contracts, an LLP balances safety and compliance.
                  </p>
               </div>
               <div className="space-y-4">
                  <h4 className="text-sm font-bold text-primary flex items-center gap-2">
                    <Scale size={16} className="text-accent" />
                    The "Company" Myth
                  </h4>
                  <p className="text-[11px] text-primary/50 leading-relaxed italic">
                    Many founders incorporate as a "Company" for prestige, only to realize the recurring audit and compliance costs (GST, Income Tax, TDS, ROC) consume their early-stage margins.
                  </p>
               </div>
            </div>

            <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" aria-hidden="true"></div>
          </div>
        </div>
      </div>

      {/* Interaction Controls */}
      <div className="mt-16 text-center">
        <p className="text-[10px] text-primary/30 uppercase tracking-[0.4em] font-black mb-8">Interaction Management</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={onBack}
            className="px-10 py-5 bg-[#F5F7FA] text-primary/60 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-primary/5 transition-all focus:ring-2 focus:ring-accent outline-none"
          >
            Explore Other Utilities
          </button>
          <button 
            onClick={() => setState({ owners: 'single', fundingIntent: 'self', liabilityPreference: 'unlimited' })}
            className="px-10 py-5 bg-primary text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-primary/90 transition-all flex items-center justify-center space-x-3 focus:ring-2 focus:ring-accent outline-none shadow-xl shadow-primary/10"
          >
            <RefreshCcw size={16} />
            <span>Reset Comparison</span>
          </button>
        </div>
      </div>

      {/* Structural Disclaimers */}
      <div className="mt-20 flex flex-col md:flex-row gap-8">
        <div className="flex-1 bg-white p-8 rounded-[32px] border border-primary/5 flex items-start gap-5 shadow-sm">
          <AlertTriangle className="text-accent shrink-0 mt-1" size={24} />
          <div className="text-xs text-primary/60 leading-relaxed">
            <p className="font-black text-primary uppercase tracking-widest text-[10px] mb-3 underline">Professional Consultation Requirement</p>
            Entity selection has long-term tax and legal implications. This utility provides conceptual awareness and is not a substitute for a legal opinion from a Chartered Accountant or Company Secretary.
          </div>
        </div>
        <div className="flex-1 bg-white p-8 rounded-[32px] border border-primary/5 flex items-start gap-5 shadow-sm">
          <Gavel className="text-accent shrink-0 mt-1" size={24} />
          <div className="text-xs text-primary/60 leading-relaxed">
            <p className="font-black text-primary uppercase tracking-widest text-[10px] mb-3 underline">Compliance Disclaimer</p>
            The Ministry of Corporate Affairs (MCA) and the Income Tax Department periodically update thresholds for audits and filing deadlines. Information displayed reflects current general frameworks.
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessStructureAwareness;
