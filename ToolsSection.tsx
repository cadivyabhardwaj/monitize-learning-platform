
import React from 'react';
import { ArrowRight, Sparkles, ChevronRight } from 'lucide-react';
import { TOOLS_PREVIEW, TOOLS_LIST } from './constants';
import { View } from './types';

interface ToolsSectionProps {
  onNavigate: (view: View, subTarget?: string) => void;
}

/**
 * ToolsSection
 * 
 * Public-facing preview of the platform's mathematical simulators.
 * Calibrated for Indian statutory frameworks.
 */
const ToolsSection = ({ onNavigate }: ToolsSectionProps) => {
  /**
   * handleToolClick
   * Navigates to the tools page with the specific tool ID pre-selected.
   */
  const handleToolClick = (toolName: string) => {
    // Find matching ID from constants to ensure deep-linking works
    const tool = TOOLS_LIST.find(t => t.name === toolName);
    if (tool) {
      onNavigate('tools', tool.id);
    } else {
      onNavigate('tools');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, toolName: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToolClick(toolName);
    }
  };

  return (
    <section id="tools-overview" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto bg-[#0B1C2D] rounded-[40px] p-8 lg:p-16 relative overflow-hidden">
        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl lg:text-4xl font-poppins font-bold text-white mb-6">Mathematical Simulators for Indian Frameworks</h3>
            <p className="text-white/60 mb-8 max-w-md">
              Neutral planning utilities calibrated for Indian income slabs and statutory tax laws. These tools provide mathematical estimations strictly for conceptual learning and scenario modeling purposes.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={() => onNavigate('tools')}
                type="button" 
                className="bg-[#1FA67A] hover:bg-[#1a8d67] text-white px-8 py-4 rounded-xl font-semibold transition-all focus:ring-2 focus:ring-offset-2 focus:ring-[#1FA67A] focus:outline-none"
              >
                Access All Planning Utilities
              </button>
              <button 
                onClick={() => onNavigate('ai-lab')}
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold border border-white/10 flex items-center justify-center space-x-2 transition-all focus:ring-2 focus:ring-white outline-none"
              >
                <Sparkles size={18} />
                <span>Auxiliary AI Lab (BETA)</span>
              </button>
            </div>
          </div>
          <div className="grid gap-4">
            {TOOLS_PREVIEW.map((tool, idx) => (
              <div 
                key={idx} 
                onClick={() => handleToolClick(tool.name)}
                onKeyDown={(e) => handleKeyDown(e, tool.name)}
                className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center justify-between group hover:bg-white/10 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#1FA67A]" 
                role="button" 
                tabIndex={0}
                aria-label={`Open ${tool.name}`}
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-[#1FA67A] p-2 rounded-lg text-white" aria-hidden="true">{tool.icon}</div>
                  <div>
                    <h5 className="text-white font-medium">{tool.name}</h5>
                    <div className="flex items-center space-x-2">
                      <span className="text-white/40 text-[10px] uppercase font-bold tracking-widest">{tool.category}</span>
                      <span className="w-1 h-1 rounded-full bg-white/20"></span>
                      <span className="text-accent text-[10px] font-bold uppercase tracking-wider">Run Estimation</span>
                    </div>
                  </div>
                </div>
                <ChevronRight className="text-white/20 group-hover:text-[#1FA67A] group-hover:translate-x-1 transition-all" size={20} aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#1FA67A]/20 blur-[100px]" aria-hidden="true"></div>
      </div>
    </section>
  );
};

export default ToolsSection;
