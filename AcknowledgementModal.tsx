import React, { useEffect, useRef } from 'react';
/* Fixed: Added CheckCircle to imports */
import { X, ShieldCheck, CheckCircle, Download, Calendar, Target, Info, Award, ArrowRight, Grid } from 'lucide-react';
import { BRAND_NAME, ACKNOWLEDGEMENT_STRINGS } from './constants';

interface AcknowledgementModalProps {
  userName: string;
  moduleName: string;
  level: number;
  onClose: () => void;
}

/**
 * AcknowledgementModal
 * Refined for high-impact completion UX with navigation context.
 */
const AcknowledgementModal: React.FC<AcknowledgementModalProps> = ({ 
  userName, 
  moduleName, 
  level, 
  onClose 
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const levelKey = level as keyof typeof ACKNOWLEDGEMENT_STRINGS.LEVEL_MAP;
  const levelDescription = ACKNOWLEDGEMENT_STRINGS.LEVEL_MAP[levelKey] || "completed educational learning.";
  
  const firstName = userName ? userName.split(' ')[0] : 'Member';
  const date = new Date().toLocaleDateString('en-IN', { 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric' 
  });

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (e.shiftKey && document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalStyle;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 bg-primary/90 backdrop-blur-md animate-in fade-in duration-300"
      role="presentation"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div 
        ref={modalRef}
        className="relative bg-white w-full max-w-2xl max-h-[90vh] rounded-[48px] shadow-2xl border border-primary/5 flex flex-col overflow-hidden animate-in zoom-in-95 duration-500" 
        role="dialog" 
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="bg-[#F8FAFC] px-10 py-6 flex justify-between items-center border-b border-primary/5 sticky top-0 z-20">
          <div className="flex items-center gap-3 text-accent font-black text-[10px] uppercase tracking-widest">
            <Award size={18} />
            <span>Learning Achievement Logged</span>
          </div>
          <button 
            ref={closeButtonRef}
            onClick={onClose} 
            className="p-2 hover:bg-primary/5 rounded-full text-primary/40 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label="Close acknowledgement"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-10 sm:p-16 text-center custom-scrollbar space-y-12">
          <div className="flex justify-center relative">
            <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center text-accent animate-pulse" aria-hidden="true">
              <ShieldCheck size={48} />
            </div>
            <div className="absolute -bottom-2 right-1/2 translate-x-12 bg-primary text-white p-2 rounded-xl shadow-lg">
               <CheckCircle size={20} className="text-accent" />
            </div>
          </div>
          
          <div className="space-y-4">
            <h2 id="modal-title" className="text-2xl font-poppins font-bold text-primary tracking-tight">
              {ACKNOWLEDGEMENT_STRINGS.GLOBAL_HEADER}
            </h2>
            <p className="text-[11px] text-primary/40 font-bold uppercase tracking-[0.4em]">Milestone Record</p>
          </div>

          <div className="space-y-6">
            <h3 className="text-4xl sm:text-5xl font-poppins font-bold text-primary tracking-tight leading-none">
              {firstName}
            </h3>
            <p className="text-base text-primary/60 max-w-md mx-auto leading-relaxed font-medium italic">
              has {levelDescription} within the <br />
              <span className="text-primary font-bold not-italic border-b-2 border-accent/20">"{moduleName}"</span> framework.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 py-8 border-y border-primary/5">
            <div className="text-left space-y-1">
              <p className="text-[9px] font-black text-primary/30 uppercase tracking-widest flex items-center gap-2">
                <Calendar size={12} /> Log Date
              </p>
              <p className="text-sm font-bold text-primary">{date}</p>
            </div>
            <div className="text-right space-y-1">
              <p className="text-[9px] font-black text-primary/30 uppercase tracking-widest flex items-center justify-end gap-2">
                <Target size={12} /> Framework
              </p>
              <p className="text-sm font-bold text-accent">Tier {level} Milestone</p>
            </div>
          </div>

          <div className="bg-[#F8FAFC] p-8 rounded-[32px] border border-primary/5 space-y-4 shadow-inner">
             <div className="flex items-center justify-center gap-2 text-primary/30">
                <Info size={14} aria-hidden="true" />
                <span className="text-[9px] font-black uppercase tracking-[0.2em]">Institutional Notice</span>
             </div>
             <p className="text-[10px] text-primary/50 leading-relaxed font-medium italic">
               {ACKNOWLEDGEMENT_STRINGS.SCOPE_NOTE}
             </p>
          </div>
        </div>

        <div className="px-10 py-10 bg-white border-t border-primary/5 flex flex-col gap-4">
          <button 
            onClick={onClose} 
            className="w-full h-16 bg-primary text-white rounded-2xl font-bold text-sm hover:bg-primary/90 transition-all shadow-2xl shadow-primary/10 flex items-center justify-center gap-3 group"
          >
            <Grid size={18} />
            <span>Return to Learning Hub</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              disabled 
              className="flex-1 h-14 bg-[#F5F7FA] border border-primary/5 text-primary/20 rounded-2xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-3 cursor-not-allowed grayscale"
            >
              <Download size={16} />
              <span>Save Record</span>
            </button>
          </div>
        </div>

        <div className="bg-red-50/50 border-t border-red-100 py-3 px-10 text-center">
           <p className="text-[9px] text-red-900/60 uppercase tracking-widest font-black">
             {ACKNOWLEDGEMENT_STRINGS.DISCLAIMER}
           </p>
        </div>
      </div>
    </div>
  );
};

export default AcknowledgementModal;