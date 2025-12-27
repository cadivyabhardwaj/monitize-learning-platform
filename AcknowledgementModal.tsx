
import React from 'react';
import { X, ShieldCheck, Download, Calendar, Target, Info, Award } from 'lucide-react';
import { BRAND_NAME, ACKNOWLEDGEMENT_STRINGS } from './constants';

interface AcknowledgementModalProps {
  userName: string;
  moduleName: string;
  level: number;
  onClose: () => void;
}

/**
 * AcknowledgementModal
 * 
 * Updated to handle vertical overflow gracefully.
 * Uses a scrollable overlay and max-height constraints to prevent UI locking.
 */
const AcknowledgementModal = ({ userName, moduleName, level, onClose }: AcknowledgementModalProps) => {
  const firstName = userName ? userName.split(' ')[0] : 'Member';
  const levelDescription = (ACKNOWLEDGEMENT_STRINGS.LEVEL_MAP as any)[level] || "completed educational learning.";
  const date = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <div className="fixed inset-0 z-[200] flex items-start justify-center p-4 sm:p-6 bg-primary/60 backdrop-blur-md overflow-y-auto animate-in fade-in duration-300">
      {/* Container for the modal card - adds top/bottom margin for scrolling space */}
      <div className="my-auto w-full max-w-2xl py-8">
        <div 
          className="bg-white w-full rounded-[32px] sm:rounded-[40px] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.3)] border border-primary/5 overflow-hidden animate-in zoom-in-95 duration-500" 
          role="dialog" 
          aria-labelledby="modal-title"
        >
          {/* Header Bar - Fixed height */}
          <div className="bg-[#F8FAFC] px-6 sm:px-8 py-4 flex justify-between items-center border-b border-primary/5 sticky top-0 z-10">
            <div className="flex items-center gap-2 text-primary/30">
              <ShieldCheck size={16} />
              <span className="text-[10px] font-black uppercase tracking-widest">Internal Awareness Record</span>
            </div>
            <button 
              onClick={onClose} 
              className="p-2 hover:bg-primary/5 rounded-full text-primary/40 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
              aria-label="Close acknowledgement"
            >
              <X size={20} />
            </button>
          </div>

          {/* Main Content Area */}
          <div className="p-8 sm:p-12 lg:p-16 text-center">
            <div className="mb-8 flex justify-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                <Award size={32} />
              </div>
            </div>
            
            <h2 id="modal-title" className="text-xl lg:text-2xl font-poppins font-bold text-primary mb-10 sm:mb-12">
              {ACKNOWLEDGEMENT_STRINGS.GLOBAL_HEADER}
            </h2>

            <div className="space-y-6 sm:space-y-8 mb-10 sm:mb-12">
              <p className="text-xs sm:text-sm text-primary/40 font-bold uppercase tracking-widest">This acknowledges that</p>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-primary tracking-tight px-2">{firstName}</h3>
              <p className="text-sm text-primary/60 max-w-md mx-auto leading-relaxed font-medium italic">
                has {levelDescription} within the <br />
                <span className="text-primary font-bold not-italic">"{moduleName}"</span> framework on the {BRAND_NAME} platform.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-8 py-8 sm:py-10 border-t border-primary/5 mb-8 sm:mb-10">
              <div className="text-left">
                <p className="text-[9px] font-bold text-primary/30 uppercase tracking-widest mb-1 flex items-center gap-1">
                  <Calendar size={10} /> Review Date
                </p>
                <p className="text-xs font-bold text-primary">{date}</p>
              </div>
              <div className="text-right">
                <p className="text-[9px] font-bold text-primary/30 uppercase tracking-widest mb-1 flex items-center justify-end gap-1">
                  <Target size={10} /> Progress
                </p>
                <p className="text-xs font-bold text-accent">Lvl {level} Milestone</p>
              </div>
            </div>

            <div className="bg-[#F8FAFC] p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-primary/5 space-y-3 sm:space-y-4">
               <div className="flex items-center justify-center gap-2 text-primary/40">
                  <Info size={14} /><span className="text-[9px] font-black uppercase tracking-[0.2em]">Safety & Scope</span>
               </div>
               <p className="text-[10px] text-primary/50 leading-relaxed font-medium italic">
                 {ACKNOWLEDGEMENT_STRINGS.SCOPE_NOTE}
               </p>
            </div>
          </div>

          {/* Footer Actions - Responsive stack/row */}
          <div className="px-8 sm:px-12 pb-10 sm:pb-12 pt-2 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button 
              onClick={onClose} 
              className="flex-1 bg-primary text-white py-4 sm:py-5 rounded-2xl font-bold text-sm hover:bg-primary/90 transition-all shadow-xl shadow-primary/10"
            >
              Proceed to Next Module
            </button>
            <button 
              disabled 
              className="flex-1 bg-[#F5F7FA] border border-primary/5 text-primary/20 py-4 sm:py-5 rounded-2xl font-bold text-sm flex items-center justify-center gap-3 cursor-not-allowed"
            >
              <Download size={18} />
              <span>Download Record</span>
            </button>
          </div>

          {/* Persistent Legal Strip */}
          <div className="bg-red-50/50 border-t border-red-100 py-3 px-6 sm:px-8 text-center">
             <p className="text-[9px] text-red-900/40 uppercase tracking-tighter font-black">
               {ACKNOWLEDGEMENT_STRINGS.DISCLAIMER}
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcknowledgementModal;
