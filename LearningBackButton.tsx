import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { View } from './types';

interface LearningBackButtonProps {
  onNavigate: (view: View, target?: string) => void;
  label?: string;
}

/**
 * LearningBackButton
 * Sticky navigation element for deep learning modules.
 */
const LearningBackButton: React.FC<LearningBackButtonProps> = ({ onNavigate, label = "Back to Learning Hub" }) => {
  return (
    <nav className="sticky top-[73px] z-40 bg-background/80 backdrop-blur-md border-b border-primary/5 px-6 py-4 mb-8 -mx-6 md:-mx-12 lg:-mx-16 flex items-center justify-start">
      <button 
        onClick={() => onNavigate('learn')}
        className="group flex items-center gap-3 text-primary/40 hover:text-accent transition-all focus:outline-none focus:ring-2 focus:ring-accent rounded-lg px-2 py-1"
        aria-label="Return to the main learning page"
      >
        <div className="bg-white border border-primary/5 p-2 rounded-xl group-hover:border-accent/20 shadow-sm transition-colors">
          <ArrowLeft size={16} />
        </div>
        <span className="text-[10px] font-black uppercase tracking-[0.2em]">{label}</span>
      </button>
    </nav>
  );
};

export default LearningBackButton;