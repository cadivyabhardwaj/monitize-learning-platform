
import React, { useState, useMemo } from 'react';
import { 
  ArrowLeft, Info, BrainCircuit, ShieldCheck, HelpCircle, 
  ChevronRight, RefreshCcw, AlertTriangle, Eye, History, 
  TrendingUp, Scale, Zap, Waves, Activity
} from 'lucide-react';

interface Question {
  id: string;
  scenario: string;
  options: {
    id: string;
    text: string;
    trait: 'conservation' | 'stability' | 'volatility' | 'sensitivity';
  }[];
}

const QUESTIONS: Question[] = [
  {
    id: 'q1',
    scenario: "You observe a significant market correction where indices drop 10% in a single session. What is your immediate emotional impulse?",
    options: [
      { id: '1a', text: "A desire to liquidate immediately to prevent further surface-level erosion.", trait: 'conservation' },
      { id: '1b', text: "A sense of unease, but with a logical preference to wait for stability.", trait: 'stability' },
      { id: '1c', text: "A neutral observation, viewing it as a standard part of market mechanics.", trait: 'volatility' },
      { id: '1d', text: "Significant anxiety that distracts from daily focus and sleep.", trait: 'sensitivity' }
    ]
  },
  {
    id: 'q2',
    scenario: "Consider two theoretical pathways for a 5-year period. Which aligns more with your emotional 'Comfort Baseline'?",
    options: [
      { id: '2a', text: "Absolute certainty of capital preservation with minimal nominal growth.", trait: 'conservation' },
      { id: '2b', text: "Acceptance of moderate fluctuations in exchange for potential purchasing power protection.", trait: 'stability' },
      { id: '2c', text: "High bandwidth for significant drawdowns in pursuit of terminal growth.", trait: 'volatility' }
    ]
  },
  {
    id: 'q3',
    scenario: "A peer discusses a rapidly appreciating asset class that you do not conceptually understand. How do you respond to the 'Fear of Missing Out'?",
    options: [
      { id: '3a', text: "Zero impulse to participate; I prioritize understanding over potential gains.", trait: 'conservation' },
      { id: '3b', text: "Curiosity, but limited to a negligible portion of resources for exploration.", trait: 'stability' },
      { id: '3c', text: "A willingness to reallocate meaningful resources to capture the trend.", trait: 'volatility' }
    ]
  },
  {
    id: 'q4',
    scenario: "When you look at your financial dashboard during a period of uncertainty, what is your primary focal point?",
    options: [
      { id: '4a', text: "The potential for capital loss (The 'Floor').", trait: 'conservation' },
      { id: '4b', text: "The long-term average progress vs. goals.", trait: 'stability' },
      { id: '4c', text: "Opportunities to acquire more during the downturn.", trait: 'volatility' },
      { id: '4d', text: "The intensity of the daily percentage change.", trait: 'sensitivity' }
    ]
  }
];

const ARCHETYPES = {
  conservation: {
    title: "Conservation Oriented",
    desc: "You prioritize 'Economic Stability' and capital preservation. Your emotional baseline is most at peace when principal risk is minimized, even if it results in lower nominal growth over time.",
    visual: "bg-emerald-400"
  },
  stability: {
    title: "Stability Seeking",
    desc: "You seek a balance between protecting resources and achieving conceptual growth. You are willing to accept occasional 'surface ripples' in exchange for long-term purchasing power protection.",
    visual: "bg-blue-400"
  },
  volatility: {
    title: "Volatility Tolerant",
    desc: "You have a high 'Emotional Bandwidth' for market swings. You focus on terminal outcomes and believe in the underlying growth of the ecosystem enough to withstand significant temporary drawdowns.",
    visual: "bg-indigo-400"
  },
  sensitivity: {
    title: "Behavioral Sensitivity",
    desc: "Your responses indicate a high level of anxiety regarding market movements. This is a valuable self-observation; identifying this sensitivity early prevents impulsive decisions during periods of high noise.",
    visual: "bg-orange-400"
  },
  neutral: {
    title: "Mixed Baseline",
    desc: "Your responses are distributed across different traits, indicating that your emotional response may vary significantly depending on the specific life goal or context.",
    visual: "bg-primary/20"
  }
};

const RiskToleranceReflection = ({ onBack }: { onBack: () => void }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (qId: string, trait: string) => {
    setAnswers(prev => ({ ...prev, [qId]: trait }));
    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const archetype = useMemo(() => {
    const counts = Object.values(answers).reduce((acc: any, t) => {
      acc[t] = (acc[t] || 0) + 1;
      return acc;
    }, {});
    
    const sorted = Object.entries(counts).sort((a: any, b: any) => b[1] - a[1]);
    if (!sorted.length) return ARCHETYPES.neutral;
    
    const primaryTrait = sorted[0][0] as keyof typeof ARCHETYPES;
    return ARCHETYPES[primaryTrait] || ARCHETYPES.neutral;
  }, [answers]);

  const reset = () => {
    setAnswers({});
    setCurrentStep(0);
    setShowResult(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <button 
        onClick={onBack}
        className="flex items-center space-x-2 text-primary/40 hover:text-primary mb-8 font-bold text-xs uppercase tracking-widest transition-colors"
      >
        <ArrowLeft size={16} />
        <span>Return to Utilities List</span>
      </button>

      {!showResult ? (
        <div className="grid lg:grid-cols-12 gap-12">
          {/* PHASE 1: PREPARATION & CONTEXT */}
          <div className="lg:col-span-5 space-y-10">
            <header>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-[10px] font-black text-primary/40 uppercase tracking-widest mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                Phase 1: Emotional Identification
              </div>
              <h2 className="text-3xl font-poppins font-bold text-primary mb-2">Behavioral Baseline Reflection</h2>
              <p className="text-primary/60 text-sm leading-relaxed">
                This utility is a behavioral exercise to help you identify your emotional response to uncertainty. It is NOT a suitability assessment for investment products.
              </p>
            </header>

            <div className="bg-white rounded-[40px] p-8 border border-primary/5 shadow-sm space-y-6">
              <h3 className="text-[10px] font-black text-accent uppercase tracking-widest flex items-center gap-2">
                <Activity size={14} />
                Observation Metrics
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-[10px] font-bold text-primary/30 uppercase tracking-widest">
                  <span>Scenarios Explored</span>
                  <span>{currentStep + 1} / {QUESTIONS.length}</span>
                </div>
                <div className="w-full h-1 bg-[#F5F7FA] rounded-full overflow-hidden">
                   <div 
                    className="h-full bg-accent transition-all duration-500" 
                    style={{ width: `${((currentStep + 1) / QUESTIONS.length) * 100}%` }}
                   ></div>
                </div>
              </div>
              <p className="text-[11px] text-primary/40 italic leading-relaxed">
                Respond based on your **initial impulse**, not what you think the "mathematically correct" answer should be. There are no superior archetypes.
              </p>
            </div>

            <div className="p-6 bg-accent/5 rounded-3xl border border-accent/10 flex items-start gap-4">
               <BrainCircuit className="text-accent shrink-0 mt-1" size={20} />
               <p className="text-xs text-primary/70 font-medium leading-relaxed italic">
                 "Behavioral science suggest our actual tolerance for uncertainty often differs from what we imagine during periods of market calm."
               </p>
            </div>
          </div>

          {/* PHASE 2: SCENARIO INTERACTION */}
          <div className="lg:col-span-7">
            <div className="bg-[#0B1C2D] rounded-[48px] p-8 lg:p-16 text-white relative overflow-hidden h-full flex flex-col shadow-2xl min-h-[500px]">
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-12">
                   <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-sm">
                      {currentStep + 1}
                   </div>
                   <h3 className="text-white/40 font-bold text-[10px] uppercase tracking-[0.3em]">The Scenario</h3>
                </div>

                <h4 className="text-2xl font-bold leading-relaxed mb-12 italic">
                  "{QUESTIONS[currentStep].scenario}"
                </h4>

                <div className="grid gap-4 mt-auto">
                  {QUESTIONS[currentStep].options.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => handleSelect(QUESTIONS[currentStep].id, opt.trait)}
                      className="group p-6 bg-white/5 border border-white/10 rounded-2xl text-left hover:bg-white/10 hover:border-accent/40 transition-all flex items-center justify-between"
                    >
                      <span className="text-sm font-medium text-white/80 group-hover:text-white">{opt.text}</span>
                      <ChevronRight size={18} className="text-white/10 group-hover:text-accent transition-colors" />
                    </button>
                  ))}
                </div>
              </div>
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" aria-hidden="true"></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto space-y-12">
           {/* PHASE 3: ARCHETYPE DISCOVERY */}
           <div className="bg-white rounded-[48px] p-8 lg:p-16 border border-primary/5 shadow-sm text-center relative overflow-hidden">
              <div className="mb-12 flex justify-center">
                 <div className={`w-20 h-20 rounded-full flex items-center justify-center ${archetype.visual} text-white shadow-xl shadow-current/20`}>
                    <Waves size={32} />
                 </div>
              </div>

              <p className="text-[10px] font-black text-primary/30 uppercase tracking-[0.4em] mb-4">Observed Tendency Identified</p>
              <h3 className="text-4xl font-poppins font-bold text-primary mb-8">{archetype.title}</h3>
              
              <div className="bg-[#F8FAFC] p-8 rounded-[32px] border border-primary/5 mb-12 max-w-2xl mx-auto">
                 <p className="text-primary/70 leading-relaxed font-medium">
                   {archetype.desc}
                 </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 text-left mb-12">
                 <div className="p-6 bg-white border border-primary/5 rounded-2xl">
                    <h5 className="font-black text-[10px] text-accent uppercase tracking-widest mb-3 flex items-center gap-2">
                       <Zap size={14} /> Behavioral Insight
                    </h5>
                    <p className="text-xs text-primary/60 leading-relaxed italic">
                      Recognizing your threshold for fluctuations prevents 'Decision Fatigue' and impulsive emotional responses during common market cycles.
                    </p>
                 </div>
                 <div className={`p-6 bg-white border border-primary/5 rounded-2xl`}>
                    <h5 className="font-black text-[10px] text-accent uppercase tracking-widest mb-3 flex items-center gap-2">
                       <History size={14} /> Fluidity of Risk
                    </h5>
                    <p className="text-xs text-primary/60 leading-relaxed italic">
                      Risk tolerance is not static. It typically evolves based on your cumulative experience, income stability, and changing lifecycle obligations.
                    </p>
                 </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button 
                  onClick={onBack}
                  className="px-10 py-5 bg-[#F5F7FA] text-primary/60 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-primary/5 transition-all focus:ring-2 focus:ring-accent outline-none"
                >
                  Explore Other Utilities
                </button>
                <button 
                  onClick={reset}
                  className="px-10 py-5 bg-primary text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-primary/90 transition-all flex items-center justify-center space-x-3 focus:ring-2 focus:ring-accent outline-none shadow-xl shadow-primary/10"
                >
                  <RefreshCcw size={16} />
                  <span>Restart Reflection</span>
                </button>
              </div>
              
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px]" aria-hidden="true"></div>
           </div>

           {/* PHASE 4: FRAMEWORK CONTEXT (TOLERANCE vs CAPACITY) */}
           <div className="bg-[#0B1C2D] rounded-[40px] p-10 lg:p-16 text-white relative overflow-hidden">
              <div className="relative z-10">
                 <div className="flex items-center gap-3 mb-10 text-accent">
                   <Info size={24} />
                   <h4 className="text-sm font-bold uppercase tracking-widest">
                     The Tolerance vs. Capacity Framework
                   </h4>
                 </div>
                 
                 <div className="grid md:grid-cols-2 gap-12">
                   <div className="space-y-4">
                     <p className="text-[10px] font-black text-accent uppercase tracking-widest">Risk Tolerance (Emotional)</p>
                     <p className="text-[12px] text-white/60 leading-relaxed">
                       This is your "Sleep at Night" factor. It describes how much uncertainty your psychology can withstand before logic is overtaken by anxiety. It is internal and behavioral.
                     </p>
                   </div>
                   <div className="space-y-4">
                     <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">Risk Capacity (Financial)</p>
                     <p className="text-[12px] text-white/60 leading-relaxed">
                       This is a mathematical reality. It describes how much loss your actual life goals can withstand without collapsing. A person may have high tolerance but zero capacity (e.g., needing capital for a wedding in 3 months).
                     </p>
                   </div>
                 </div>

                 <div className="mt-12 pt-12 border-t border-white/5">
                    <p className="text-[11px] text-white/40 leading-relaxed font-medium italic text-center">
                      Logical planning requires aligning your emotional baseline with your mathematical reality.
                    </p>
                 </div>
              </div>
           </div>

           {/* PHASE 5: COMPLIANCE DISCLAIMERS */}
           <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-[32px] border border-primary/5 flex items-start gap-5 shadow-sm">
                <AlertTriangle className="text-accent shrink-0 mt-1" size={24} />
                <div className="text-xs text-primary/60 leading-relaxed">
                  <p className="font-black text-primary uppercase tracking-widest text-[10px] mb-3 underline decoration-accent decoration-2 underline-offset-4">Behavioral Disclaimer</p>
                  Self-reported reflections are subject to 'Hypothetical Bias.' Responses provided during stable market conditions often overestimate actual tolerance during extreme drawdowns.
                </div>
              </div>
              <div className="bg-white p-8 rounded-[32px] border border-primary/5 flex items-start gap-5 shadow-sm">
                <ShieldCheck className="text-accent shrink-0 mt-1" size={24} />
                <div className="text-xs text-primary/60 leading-relaxed">
                  <p className="font-black text-primary uppercase tracking-widest text-[10px] mb-3 underline decoration-accent decoration-2 underline-offset-4">Regulatory Boundary</p>
                  This utility does not provide asset allocation advice. It does not recommend any specific percentage of equity, debt, or other assets. It is strictly a conceptual self-discovery module.
                </div>
              </div>
           </div>
        </div>
      )}
    </div>
  );
};

export default RiskToleranceReflection;
