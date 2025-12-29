
import React, { useState, useRef, useEffect } from 'react';
import { 
  X, MessageCircle, Info, ArrowRight, Sparkles, HelpCircle, 
  RefreshCcw, BookOpen, Calculator, ShieldCheck, History,
  Zap, MessageSquare, Send, ChevronRight, Gavel, Lock
} from 'lucide-react';
import { gemini } from './geminiService';
import { ChatMessage } from './types';

/**
 * ChatbotComponent - Refined Guided Concierge
 * 
 * An interactive mentor for the Monitize ecosystem.
 * Focused on conversational discovery and conceptual clarity.
 */
const ChatbotComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Categorized suggestions for a richer "first impression"
  const welcomePrompts = [
    { 
      title: "Tax Logic", 
      query: "Explain 80C vs 80D logic", 
      icon: <Gavel size={16} />, 
      desc: "Heads of Income & Regimes" 
    },
    { 
      title: "Market Basics", 
      query: "What is Volatility vs Permanent Loss?", 
      icon: <Zap size={16} />, 
      desc: "Ecosystem awareness" 
    },
    { 
      title: "MSME Guide", 
      query: "GST thresholds for freelancers", 
      icon: <ShieldCheck size={16} />, 
      desc: "Compliance & Readiness" 
    },
    { 
      title: "Wealth Prep", 
      query: "How does inflation impact my cash flow?", 
      icon: <History size={16} />, 
      desc: "Foundational personal finance" 
    }
  ];

  // Persistent quick chips for ongoing conversation context
  const quickChips = [
    "New Regime Rules",
    "SIP Compounding",
    "Emergency Fund Logic",
    "LTCG Nuances",
    "Demat Safeguards"
  ];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chat, loading]);

  const handleSend = async (customText?: string) => {
    const textToSend = customText || message;
    if (!textToSend.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: textToSend };
    setChat(prev => [...prev, userMsg]);
    setMessage('');
    setLoading(true);

    try {
      const response = await gemini.askFinancialQuestion(textToSend);
      const modelMsg: ChatMessage = { role: 'model', text: response };
      setChat(prev => [...prev, modelMsg]);
    } catch (error) {
      const errorMsg: ChatMessage = { role: 'model', text: "I'm currently recalibrating my knowledge base. Please try your query in a few moments." };
      setChat(prev => [...prev, errorMsg]);
    } finally {
      setLoading(false);
    }
  };

  const resetChat = () => {
    setChat([]);
    setMessage('');
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]" role="complementary" aria-label="Monitize Assistant">
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-[#1FA67A] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all group flex items-center justify-center border-4 border-white/20"
          aria-label="Launch Monitize Assistant"
        >
          <MessageSquare size={28} className="group-hover:rotate-12 transition-transform" aria-hidden="true" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent border-2 border-white rounded-full"></div>
        </button>
      )}
      
      {isOpen && (
        <div className="bg-white w-[400px] h-[640px] rounded-[40px] shadow-[0_32px_64px_-16px_rgba(11,28,45,0.25)] border border-primary/5 flex flex-col overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-8 duration-300">
          
          {/* PREMIUM CONCIERGE HEADER */}
          <div className="bg-[#0B1C2D] px-6 py-6 flex justify-between items-center relative overflow-hidden shrink-0">
            <div className="flex items-center space-x-4 relative z-10">
              <div className="relative">
                <div className="w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center border border-white/10">
                  <Sparkles size={24} className="text-accent" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-accent border-2 border-[#0B1C2D] rounded-full animate-pulse"></div>
              </div>
              <div>
                <h2 className="text-white font-poppins font-bold text-sm tracking-tight">Monitize Mentor</h2>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <div className="w-1 h-1 rounded-full bg-accent"></div>
                  <p className="text-[9px] text-white/40 uppercase font-black tracking-widest">Active Educational Concierge</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-1 relative z-20">
              <button 
                onClick={resetChat}
                className="p-2 text-white/20 hover:text-white transition-colors hover:bg-white/5 rounded-full"
                title="Clear Conversation"
              >
                <RefreshCcw size={16} />
              </button>
              <button 
                onClick={() => setIsOpen(false)} 
                className="p-2 text-white/40 hover:text-white transition-colors hover:bg-white/5 rounded-full"
                aria-label="Minimize Chat"
              >
                <X size={20} />
              </button>
            </div>

            <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-full blur-[60px] pointer-events-none z-0"></div>
          </div>
          
          {/* CHAT JOURNEY AREA */}
          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-6 space-y-8 bg-[#F8FAFC] scroll-smooth no-scrollbar"
            aria-live="polite"
          >
            {chat.length === 0 && (
              <div className="h-full flex flex-col justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                <div className="mb-10 text-center">
                  <div className="w-14 h-14 bg-white rounded-3xl shadow-sm border border-primary/5 flex items-center justify-center text-accent mx-auto mb-6">
                    <HelpCircle size={28} />
                  </div>
                  <h3 className="text-primary font-poppins font-bold text-xl mb-3">Clarity on Demand</h3>
                  <p className="text-primary/40 text-sm leading-relaxed px-4">
                    I'm your interactive bridge to the Indian financial landscape. Choose a track below to begin exploring.
                  </p>
                </div>
                
                <div className="grid gap-3 px-2">
                  {welcomePrompts.map((p, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSend(p.query)}
                      className="group p-5 bg-white border border-primary/5 rounded-[24px] hover:border-accent hover:shadow-lg hover:shadow-accent/5 transition-all text-left flex items-center gap-4 focus:ring-2 focus:ring-accent outline-none"
                    >
                      <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-primary/40 group-hover:text-accent group-hover:bg-accent/5 transition-colors shrink-0">
                        {p.icon}
                      </div>
                      <div className="flex-1 overflow-hidden">
                        <p className="text-[10px] font-black text-accent uppercase tracking-widest mb-0.5">{p.title}</p>
                        <p className="text-xs font-bold text-primary truncate group-hover:text-primary transition-colors">{p.desc}</p>
                      </div>
                      <ChevronRight size={14} className="text-primary/10 group-hover:text-accent transition-all group-hover:translate-x-1" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {chat.map((msg, i) => (
              <div 
                key={i} 
                className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'} animate-in fade-in slide-in-from-bottom-2 duration-500`}
              >
                <div className={`max-w-[90%] p-5 rounded-[28px] text-[13.5px] leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                  ? 'bg-primary text-white rounded-br-none font-medium' 
                  : 'bg-white text-primary/80 border border-primary/5 rounded-bl-none font-normal'
                }`}>
                  <div className="whitespace-pre-wrap">
                    {msg.text}
                  </div>
                </div>
                <p className="text-[9px] font-black text-primary/10 uppercase tracking-widest mt-2 px-2">
                  {msg.role === 'user' ? 'Member' : 'Monitize Intelligence'}
                </p>
              </div>
            ))}
            
            {loading && (
              <div className="flex flex-col items-start animate-pulse">
                <div className="bg-white p-5 rounded-[28px] rounded-bl-none border border-primary/5 shadow-sm">
                  <div className="flex space-x-1.5 items-center px-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce delay-150"></div>
                    <div className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce delay-300"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* INTERACTIVE ACTION LAYER */}
          <div className="bg-white border-t border-primary/5 p-6 space-y-4 shadow-[0_-16px_32px_-16px_rgba(0,0,0,0.05)]">
            
            {/* Quick Context Chips */}
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1 -mx-2 px-2">
               {quickChips.map((chip, idx) => (
                 <button 
                  key={idx}
                  onClick={() => handleSend(chip)}
                  className="whitespace-nowrap px-4 py-2 bg-primary/5 border border-primary/5 rounded-full text-[10px] font-bold text-primary/40 hover:bg-accent/5 hover:text-accent hover:border-accent/20 transition-all uppercase tracking-widest"
                 >
                   {chip}
                 </button>
               ))}
            </div>

            <div className="flex items-center space-x-3">
              <div className="flex-1 relative group">
                <input 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  type="text" 
                  placeholder="Ask about Indian financial logic..." 
                  className="w-full bg-[#F5F7FA] border-none rounded-2xl pl-6 pr-6 py-4 text-sm font-medium focus:ring-2 focus:ring-accent outline-none transition-all placeholder:text-primary/20"
                  aria-label="Financial query input"
                />
              </div>
              <button 
                type="button"
                onClick={() => handleSend()}
                disabled={loading || !message.trim()}
                className="bg-[#0B1C2D] text-white p-4 rounded-2xl disabled:opacity-20 hover:bg-primary transition-all shadow-xl shadow-primary/10 flex items-center justify-center group"
                aria-label="Send Message"
              >
                <Send size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

            <div className="flex items-center justify-center gap-4 opacity-30 pt-1">
               <div className="flex items-center gap-1.5">
                 <ShieldCheck size={10} />
                 <span className="text-[8px] font-black uppercase tracking-[0.2em]">Verified Logic</span>
               </div>
               <div className="w-1 h-1 bg-primary/20 rounded-full"></div>
               <div className="flex items-center gap-1.5">
                 {/* Correct: Lock icon now imported from lucide-react */}
                 <Lock size={10} />
                 <span className="text-[8px] font-black uppercase tracking-[0.2em]">Non-Advisory</span>
               </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatbotComponent;
