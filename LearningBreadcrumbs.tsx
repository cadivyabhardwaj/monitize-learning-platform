import React from 'react';
import { ChevronRight } from 'lucide-react';

interface LearningBreadcrumbsProps {
  category: string;
  moduleTitle: string;
  levelTitle?: string;
  onNavigateToHub: () => void;
}

const LearningBreadcrumbs: React.FC<LearningBreadcrumbsProps> = ({ category, moduleTitle, levelTitle, onNavigateToHub }) => {
  return (
    <div className="flex flex-wrap items-center gap-2 mb-8 text-[10px] font-bold uppercase tracking-widest text-primary/30">
      <button 
        onClick={onNavigateToHub}
        className="hover:text-accent transition-colors"
      >
        Learning Hub
      </button>
      <ChevronRight size={10} className="opacity-30" />
      <span className="text-primary/60">{category}</span>
      <ChevronRight size={10} className="opacity-30" />
      <span className="text-primary/80">{moduleTitle}</span>
      {levelTitle && (
        <>
          <ChevronRight size={10} className="opacity-30" />
          <span className="text-accent">{levelTitle}</span>
        </>
      )}
    </div>
  );
};

export default LearningBreadcrumbs;