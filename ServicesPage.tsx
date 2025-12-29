import React from 'react';
import { 
  BookOpen, 
  Calculator, 
  ShieldCheck, 
  Beaker, 
  ArrowRight, 
  CheckCircle2, 
  Info,
  Scale,
  ClipboardCheck,
  Search,
  FileText,
  ShieldAlert,
  Users,
  ShieldQuestion,
  Gavel
} from 'lucide-react';
import { BRAND_NAME } from './constants';
import { View } from './types';

/**
 * ServicesPage Component (Platform Charter)
 * 
 * A formal scope-of-service declaration.
 * Adheres to strict non-advisory and non-transactional standards.
 */
const ServicesPage = ({ onNavigate }: { onNavigate: (view: View, subTarget?: string) => void }) => {
  return (
    <div className="animate-in fade-in duration-700 bg-background pb-24">
      
      {/* 1️⃣ INTRODUCTION / SCOPE OF OPERATION */}
      <section 
        className="pt-40 pb-20 lg:pt-56 lg:pb-32 bg-white px-6 border-b border-primary/5"
        aria-labelledby="charter-title"
      >
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 text-accent font-bold text-[10px] uppercase tracking-[0.3em] mb-8">
            <ShieldCheck size={14} aria-hidden="true" />
            <span>Scope of Operation</span>
          </div>
          <h1 id="charter-title" className="text-4xl lg:text-5xl font-poppins font-bold text-primary mb-8 leading-tight">
            Platform Charter: <br />
            <span className="text-accent">Educational Infrastructure.</span>
          </h1>
          <p className="text-primary/70 text-lg lg:text-xl leading-relaxed mb-10">
            {BRAND_NAME} operates as a structured system for financial education and technical frameworks designed to assist Indian professionals in navigating domestic financial complexity. All "Services" provided through this platform are strictly informational and non-transactional.
          </p>
          
          <div className="p-8 bg-primary/[0.02] border border-primary/5 rounded-[32px] flex items-start gap-5 shadow-sm">
            <ShieldAlert size={24} className="text-accent shrink-0 mt-1" />
            <div className="text-sm text-primary/60 leading-relaxed">
              <p className="font-bold text-primary uppercase tracking-widest text-[10px] mb-2">Final Responsibility Declaration</p>
              Users retain full accountability for all financial filings, investment choices, and statutory compliance. The platform does not provide personalized advice or execute decisions on behalf of users.
            </div>
          </div>
        </div>
      </section>

      {/* 2️⃣ CORE SERVICE CATEGORIES */}
      <section className="py-24 px-6 bg-[#F5F7FA]" aria-labelledby="categories-heading">
        <div className="max-w-7xl mx-auto">
          <h2 id="categories-heading" className="text-[10px] font-bold text-primary/30 uppercase tracking-[0.3em] mb-12 text-center">Defined Service Categories</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Category A: Financial Education & Learning */}
            <article className="bg-white p-10 lg:p-12 rounded-[40px] border border-primary/5 shadow-sm flex flex-col">
              <div className="bg-accent/10 w-14 h-14 rounded-2xl flex items-center justify-center text-accent mb-8">
                <BookOpen size={28} />
              </div>
              <h3 className="text-xl font-poppins font-bold text-primary mb-4">Financial Education & Learning</h3>
              <p className="text-primary/60 text-sm mb-8 leading-relaxed">
                Neutral educational modules explaining the logic of Indian tax laws, compliance cycles, and asset class mechanics. We provide conceptual frameworks without performance claims.
              </p>
              <ul className="space-y-4 mb-10 flex-1">
                {[
                  "India-specific tax regime logic",
                  "Statutory compliance foundations",
                  "Asset class risk-reward frameworks",
                  "MSME financial structuring basics"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs text-primary/70 font-medium">
                    <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => onNavigate('learn')}
                className="group inline-flex items-center gap-2 text-accent font-bold text-[10px] uppercase tracking-widest"
              >
                <span>Access Educational Tracks</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </article>

            {/* Category B: Financial Planning Utilities (Simulators) */}
            <article className="bg-white p-10 lg:p-12 rounded-[40px] border border-primary/5 shadow-sm flex flex-col">
              <div className="bg-accent/10 w-14 h-14 rounded-2xl flex items-center justify-center text-accent mb-8">
                <Calculator size={28} />
              </div>
              <h3 className="text-xl font-poppins font-bold text-primary mb-4">Financial Planning Utilities</h3>
              <p className="text-primary/60 text-sm mb-8 leading-relaxed">
                Mathematical simulators designed for illustrative scenario visualization. These tools utilize computational logic to show hypothetical outcomes based on user-entered variables.
              </p>
              <ul className="space-y-4 mb-10 flex-1">
                {[
                  "Tax regime comparative simulators",
                  "SIP & compounding illustrators",
                  "Loan amortization estimators",
                  "Hypothetical net-worth mapping"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs text-primary/70 font-medium">
                    <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => onNavigate('tools')}
                className="group inline-flex items-center gap-2 text-accent font-bold text-[10px] uppercase tracking-widest"
              >
                <span>Explore Neutral Simulators</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </article>

            {/* Category C: Compliance Awareness Tools */}
            <article className="bg-white p-10 lg:p-12 rounded-[40px] border border-primary/5 shadow-sm flex flex-col">
              <div className="bg-accent/10 w-14 h-14 rounded-2xl flex items-center justify-center text-accent mb-8">
                <ClipboardCheck size={28} />
              </div>
              <h3 className="text-xl font-poppins font-bold text-primary mb-4">Compliance Awareness Tools</h3>
              <p className="text-primary/60 text-sm mb-8 leading-relaxed">
                Readiness checklists and informational timelines to improve user understanding of statutory obligations. The platform facilitates awareness, not execution or filing.
              </p>
              <ul className="space-y-4 mb-10 flex-1">
                {[
                  "Business readiness checklists",
                  "Regulatory timeline tracking",
                  "Document status visualizations",
                  "Self-reported compliance roadmaps"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs text-primary/70 font-medium">
                    <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => onNavigate('tools', 'compliance-checklist')}
                className="group inline-flex items-center gap-2 text-accent font-bold text-[10px] uppercase tracking-widest"
              >
                <span>View Readiness Frameworks</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </article>

            {/* Category D: Professional Discovery Directory */}
            <article className="bg-white p-10 lg:p-12 rounded-[40px] border border-primary/5 shadow-sm flex flex-col">
              <div className="bg-accent/10 w-14 h-14 rounded-2xl flex items-center justify-center text-accent mb-8">
                <Search size={28} />
              </div>
              <h3 className="text-xl font-poppins font-bold text-primary mb-4">Professional Discovery Directory</h3>
              <p className="text-primary/60 text-sm mb-8 leading-relaxed">
                A neutral directory of verified independent professionals (CAs, CFAs, Legal Experts). Monitize does not participate in selection, consultations, or outcome management.
              </p>
              <ul className="space-y-4 mb-10 flex-1">
                {[
                  "Verified professional credentials",
                  "Unbiased, unranked listings",
                  "User-initiated direct contact",
                  "Zero referral influence policy"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs text-primary/70 font-medium">
                    <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="p-4 bg-primary/[0.02] rounded-xl border border-primary/5 mb-6">
                <p className="text-[9px] font-bold text-primary/30 leading-relaxed uppercase tracking-widest">
                  Engagement occurs independently of the platform infrastructure.
                </p>
              </div>
              <button 
                onClick={() => onNavigate('services', 'directory')}
                className="group inline-flex items-center gap-2 text-accent font-bold text-[10px] uppercase tracking-widest"
              >
                <span>Open Expert Directory</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </article>

            {/* Category E: Experimental AI Lab */}
            <article className="lg:col-span-2 bg-primary p-10 lg:p-16 rounded-[40px] text-white relative overflow-hidden">
              <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="bg-accent/20 w-14 h-14 rounded-2xl flex items-center justify-center text-accent mb-8">
                    <Beaker size={28} />
                  </div>
                  <h3 className="text-2xl font-poppins font-bold mb-4">Experimental AI Lab (Beta)</h3>
                  <p className="text-white/60 text-sm mb-8 leading-relaxed">
                    Optional auxiliary tools provided for administrative support and document visualization. These experimental utilities do not provide financial interpretation or decision-making logic.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-xs text-white/50">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span>Document workflow visualization support</span>
                    </li>
                    <li className="flex items-center gap-3 text-xs text-white/50">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span>Administrative text extraction utilities</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
                  <h4 className="font-bold text-sm mb-2">Notice: Auxiliary Status</h4>
                  <p className="text-xs text-white/40 mb-8 leading-relaxed">
                    AI Lab features are explicitly separated from core financial logic modules and should be used strictly for administrative convenience.
                  </p>
                  <button 
                    onClick={() => onNavigate('home', '#ai-lab')}
                    className="w-full bg-accent text-white py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-accent/90 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Access Lab Utilities</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px]" aria-hidden="true" />
            </article>
          </div>
        </div>
      </section>

      {/* 3️⃣ HOW TO USE THE PLATFORM RESPONSIBLY */}
      <section className="py-24 bg-white px-6 border-y border-primary/5" aria-labelledby="usage-heading">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 id="usage-heading" className="text-2xl font-poppins font-bold text-primary mb-4">The Informed Path</h2>
            <p className="text-primary/60 text-sm max-w-xl mx-auto font-medium">A responsible sequence for financial engagement.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { 
                step: "01. LEARN", 
                title: "Understand the Logic", 
                icon: <BookOpen className="text-accent" />,
                desc: "Begin with educational modules to build a conceptual framework of a specific financial area." 
              },
              { 
                step: "02. SIMULATE", 
                title: "Visualize Scenarios", 
                icon: <Calculator className="text-accent" />,
                desc: "Utilize neutral mathematical simulators to visualize hypothetical outcomes based on your understanding." 
              },
              { 
                step: "03. ENGAGE", 
                title: "Independent Experts", 
                icon: <Users className="text-accent" />,
                desc: "Independently contact licensed professionals to translate your understanding into personalized action." 
              }
            ].map((item, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="text-[10px] font-bold text-primary/30 uppercase tracking-[0.3em]">{item.step}</div>
                <div className="mx-auto w-12 h-12 bg-primary/[0.03] rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
                <h4 className="font-bold text-primary">{item.title}</h4>
                <p className="text-xs text-primary/60 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4️⃣ PLATFORM LIMITATIONS & BOUNDARIES */}
      <section className="py-24 lg:py-32 px-6" aria-labelledby="boundaries-heading">
        <div className="max-w-5xl mx-auto">
          <div className="bg-red-50/50 border border-red-100 rounded-[40px] p-8 lg:p-16">
            <div className="flex items-center gap-3 mb-10">
              <ShieldAlert className="text-red-600" size={32} />
              <h2 id="boundaries-heading" className="text-2xl font-poppins font-bold text-red-900">Charter of Boundaries</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-[10px] font-bold text-red-900 uppercase tracking-widest mb-6 flex items-center gap-2">
                  <Scale size={12} />
                  Monitize explicitly DOES NOT:
                </h4>
                <ul className="space-y-4">
                  {[
                    "Provide individualized tax or investment advice",
                    "Facilitate or file statutory returns of any kind",
                    "Manage user assets or investment portfolios",
                    "Guarantee specific financial outcomes or savings",
                    "Verify accuracy of user-entered simulation data",
                    "Influence selection of listed third-party professionals"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs text-red-800/80 font-medium">
                      <div className="mt-1 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-6">
                <h4 className="text-[10px] font-bold text-red-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Gavel size={12} />
                  Regulatory Context
                </h4>
                <p className="text-xs text-red-800/70 leading-relaxed font-medium">
                  Financial laws, including the Indian Finance Act and GST amendments, are subject to periodic changes. While the platform strives for accuracy, synchronization lags may occur following Union Budget announcements.
                </p>
                <p className="text-xs text-red-800/70 leading-relaxed font-medium">
                  General frameworks cannot replace the nuanced assessment of a licensed practitioner. We strongly encourage independent due diligence before any commitment of capital or filing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5️⃣ FINAL EDUCATIONAL CTA */}
      <section className="pt-12 text-center px-6" aria-label="Final Invitation">
        <div className="max-w-3xl mx-auto bg-primary rounded-[40px] p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl font-poppins font-bold mb-6 italic text-white/90">"Preparation precedes prosperity."</h2>
            <p className="text-white/50 text-sm mb-12 max-w-lg mx-auto leading-relaxed">
              Build a resilient understanding of the Indian financial landscape before taking action.
            </p>
            <button 
              onClick={() => onNavigate('learn')}
              className="group inline-flex items-center gap-3 text-accent font-bold text-[10px] uppercase tracking-[0.4em] hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
            >
              <span>Explore Learning Resources</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-accent/5 opacity-50" aria-hidden="true" />
        </div>
      </section>

    </div>
  );
};

export default ServicesPage;