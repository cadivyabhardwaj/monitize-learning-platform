
import React, { useState } from 'react';
import { ShieldAlert, ChevronDown, ChevronUp } from 'lucide-react';

const NonAdvisoryNotice: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(() => {
    return sessionStorage.getItem('monitize_notice_collapsed') === 'true';
  });

  const toggle = () => {
    const next = !isCollapsed;
    setIsCollapsed(next);
    sessionStorage.setItem('monitize_notice_collapsed', String(next));
  };

  return (
    <div className="relative w-full mb-12 animate-in fade-in slide-in-from-top-4 duration-500">
      <div className={`bg-primary rounded-[32px] overflow-hidden border border-white/10 shadow-2xl transition-all duration-500 ${isCollapsed ? 'max-h-20' : 'max-h-[500px]'}`}>
        <button 
          onClick={toggle}
          className="w-full px-8 py-6 flex items-center justify-between text-white/90 hover:bg-white/5 transition-colors focus:outline-none"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-2xl bg-accent/20 flex items-center justify-center text-accent">
              <ShieldAlert size={20} />
            </div>
            <span className="text-[11px] font-black uppercase tracking-[0.3em]">Mandatory Regulatory Disclosure</span>
          </div>
          <div className="p-2 bg-white/5 rounded-full">
            {isCollapsed ? <ChevronDown size={18} /> : <ChevronUp size={18} />}
          </div>
        </button>
        
        <div className="px-10 pb-10 space-y-6">
          <div className="h-px bg-white/10 w-full" />
          <p className="text-xs sm:text-sm text-white/50 leading-relaxed font-medium">
            This module is provided strictly for <span className="text-accent font-bold">Educational and Conceptual Awareness</span> purposes. Monitize does not provide investment advice, tax filing guidance, or legal recommendations. 
          </p>
          <div className="p-5 bg-white/5 rounded-2xl border border-white/5">
            <p className="text-[11px] text-white/40 leading-relaxed font-medium italic">
              Mathematical models and AI-assisted explanations are illustrative artifacts and should be verified with a licensed professional before taking action. No data entered in simulators is stored for advisory purposes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NonAdvisoryNotice;
