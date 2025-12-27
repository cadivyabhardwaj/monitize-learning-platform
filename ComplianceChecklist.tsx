
import React, { useState } from 'react';
import { ClipboardCheck, Info, AlertTriangle, ArrowLeft, RefreshCcw, CheckCircle2, ChevronDown, ChevronUp, BookOpen } from 'lucide-react';

interface ChecklistItem {
  id: string;
  title: string;
  description: string;
  frequency: string;
}

interface ChecklistCategory {
  id: string;
  title: string;
  items: ChecklistItem[];
}

const CHECKLIST_DATA: ChecklistCategory[] = [
  {
    id: 'gst',
    title: 'GST Compliance (Indirect Tax)',
    items: [
      {
        id: 'gstr1',
        title: 'GSTR-1 Filing',
        description: 'Details of outward supplies of goods or services. Thresholds and frequency (Monthly/Quarterly) may vary based on aggregate turnover.',
        frequency: 'Monthly / Quarterly'
      },
      {
        id: 'gstr3b',
        title: 'GSTR-3B Summary Return',
        description: 'Self-declared summary return for tax payment. Mandatory for all registered taxpayers regardless of transaction volume.',
        frequency: 'Monthly / Quarterly'
      },
      {
        id: 'eway',
        title: 'E-Way Bill Compliance',
        description: 'Generated for movement of goods above specific value thresholds (typically ₹50,000) for inter-state or intra-state movement.',
        frequency: 'As per Movement'
      }
    ]
  },
  {
    id: 'it',
    title: 'Income Tax (Direct Tax)',
    items: [
      {
        id: 'tds',
        title: 'TDS Payment & Returns',
        description: 'Tax Deducted at Source on payments like rent, professional fees, or salaries. Deposit and quarterly return filing requirements may apply.',
        frequency: 'Monthly / Quarterly'
      },
      {
        id: 'advance-tax',
        title: 'Advance Tax Installments',
        description: 'Periodic payment of tax liability if the estimated tax for the year exceeds ₹10,000 after TDS.',
        frequency: 'Quarterly'
      },
      {
        id: 'audit',
        title: 'Tax Audit Preparation',
        description: 'Review of turnover thresholds (e.g., ₹1 Cr / ₹10 Cr) that may trigger a mandatory audit by a Chartered Accountant.',
        frequency: 'Annual'
      }
    ]
  },
  {
    id: 'roc',
    title: 'ROC & Statutory (For Companies/LLPs)',
    items: [
      {
        id: 'annual-return',
        title: 'Annual Return (MGT-7/AOC-4)',
        description: 'Filing of financial statements and annual returns with the Registrar of Companies. Specific forms depend on the entity type.',
        frequency: 'Annual'
      },
      {
        id: 'meetings',
        title: 'Statutory Board Meetings',
        description: 'Documentation of minimum number of board meetings or annual general meetings as prescribed by the Companies Act.',
        frequency: 'Periodic'
      }
    ]
  }
];

/**
 * ComplianceChecklist
 * 
 * A neutral utility for tracking "Reviewed" vs "Not Reviewed" status of 
 * informational compliance areas. No "Compliant" terminology used.
 */
const ComplianceChecklist = ({ onBack }: { onBack: () => void }) => {
  const [reviewedItems, setReviewedItems] = useState<Set<string>>(new Set());
  const [expandedCats, setExpandedCats] = useState<Set<string>>(new Set(['gst']));

  const toggleItem = (id: string) => {
    const next = new Set(reviewedItems);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setReviewedItems(next);
  };

  const toggleCat = (id: string) => {
    const next = new Set(expandedCats);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setExpandedCats(next);
  };

  const resetReview = () => setReviewedItems(new Set());

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
        {/* Intro & Summary Panel */}
        <section className="lg:col-span-4 space-y-8">
          <header>
            <h2 className="text-3xl font-poppins font-bold text-primary mb-2">Compliance Review</h2>
            <p className="text-primary/60 text-sm">Review common regulatory categories that may apply to your Indian business entity.</p>
          </header>

          <div className="bg-white rounded-[32px] p-8 border border-primary/5 shadow-sm">
            <h4 className="text-[10px] font-bold text-primary/30 uppercase tracking-[0.2em] mb-6">Review Statistics</h4>
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-primary/60">Total Areas Mapped</span>
                <span className="text-lg font-bold text-primary">8</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-primary/60">Marked as Reviewed</span>
                <span className="text-lg font-bold text-accent">{reviewedItems.size}</span>
              </div>
              <div className="w-full h-1.5 bg-[#F5F7FA] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-accent transition-all duration-700" 
                  style={{ width: `${(reviewedItems.size / 8) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="bg-primary rounded-3xl p-8 text-white">
            <h4 className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-4">Educational Note</h4>
            <p className="text-xs text-white/70 leading-relaxed mb-6">
              Compliance requirements in India are determined by entity type (Proprietorship, LLP, Pvt Ltd), turnover, and industry. 
            </p>
            <button 
              className="w-full bg-white/10 hover:bg-white/20 text-white text-[10px] font-bold py-3 rounded-xl uppercase tracking-widest border border-white/10 transition-all flex items-center justify-center gap-2"
            >
              <BookOpen size={14} />
              <span>Understand MSME Basics</span>
            </button>
          </div>
        </section>

        {/* Checklist Panel */}
        <section className="lg:col-span-8 space-y-6">
          {CHECKLIST_DATA.map((cat) => (
            <div key={cat.id} className="bg-white rounded-[32px] border border-primary/5 shadow-sm overflow-hidden">
              <button 
                onClick={() => toggleCat(cat.id)}
                className="w-full px-8 py-6 flex items-center justify-between hover:bg-primary/[0.02] transition-colors"
              >
                <h3 className="text-lg font-bold text-primary flex items-center gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                   {cat.title}
                </h3>
                {expandedCats.has(cat.id) ? <ChevronUp size={20} className="text-primary/20" /> : <ChevronDown size={20} className="text-primary/20" />}
              </button>

              {expandedCats.has(cat.id) && (
                <div className="px-8 pb-8 space-y-4 animate-in slide-in-from-top-2 duration-300">
                  {cat.items.map((item) => (
                    <div 
                      key={item.id}
                      onClick={() => toggleItem(item.id)}
                      className={`group p-6 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 ${
                        reviewedItems.has(item.id) ? 'bg-[#F5F7FA] border-accent/20' : 'bg-white border-primary/5 hover:border-primary/10'
                      }`}
                      role="checkbox"
                      aria-checked={reviewedItems.has(item.id)}
                      tabIndex={0}
                    >
                      <div className={`mt-1 shrink-0 ${reviewedItems.has(item.id) ? 'text-accent' : 'text-primary/10'}`}>
                        <CheckCircle2 size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className={`font-bold text-sm ${reviewedItems.has(item.id) ? 'text-primary/40' : 'text-primary'}`}>{item.title}</h4>
                          <span className="text-[9px] font-bold bg-primary/5 px-2 py-0.5 rounded text-primary/40 uppercase tracking-wider">{item.frequency}</span>
                        </div>
                        <p className="text-xs text-primary/50 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="bg-yellow-50/50 p-6 rounded-2xl border border-yellow-100 flex items-start space-x-3 mt-8">
            <AlertTriangle className="text-yellow-600 shrink-0 mt-0.5" size={18} />
            <p className="text-[10px] text-yellow-800 leading-relaxed uppercase tracking-wider font-medium">
              CRITICAL DISCLAIMER: This checklist is informational and non-exhaustive. It does not constitute legal or tax confirmation of compliance. Requirements vary by business situation. Always consult a licensed professional for regulatory reviews.
            </p>
          </div>
        </section>
      </div>

      <div className="mt-16 text-center">
        <p className="text-[10px] text-primary/30 uppercase tracking-[0.3em] font-bold mb-6">Review Management</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={onBack}
            className="px-8 py-4 bg-[#F5F7FA] text-primary/60 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-primary/5 transition-all"
          >
            Other Utilities
          </button>
          <button 
            onClick={resetReview}
            className="px-8 py-4 bg-primary text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-primary/90 transition-all flex items-center justify-center space-x-2"
          >
            <RefreshCcw size={14} />
            <span>Reset Review Status</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComplianceChecklist;
