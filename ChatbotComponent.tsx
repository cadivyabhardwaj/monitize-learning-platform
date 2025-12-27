
import React, { useState, useRef, useEffect } from 'react';
import { X, MessageCircle, Info, ArrowRight, Sparkles, HelpCircle } from 'lucide-react';
import { gemini } from './geminiService';
import { ChatMessage } from './types';

/**
 * ChatbotComponent
 * 
 * Re-imagined for premium interactivity and presentable output.
 * Fixed close button hit-area and reinforced symbol-free UI.
 */
const ChatbotComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const quickQueries = [
    "Section 80C Logic",
    "New vs Old Tax Regime",
    "SIP Compounding Basics",
    "GST for Freelancers"
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

    const response = await gemini.askFinancialQuestion(textToSend);
    const modelMsg: ChatMessage = { role: 'model', text: response };
    setChat(prev => [...prev, modelMsg]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]" role="complementary" aria-label="Monitize Assistant">
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-[#1FA67A] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all animate-bounce flex items-center justify-center border-4 border-white/20"
          aria-label="Launch Monitize Assistant"
        >
          <MessageCircle size={28} aria-hidden="true" />
        </button>
      )}
      
      {isOpen && (
        <div className="bg-white w-[380px] h-[600px] rounded-[32px] shadow-2xl border border-primary/5 flex flex-col overflow-hidden animate-in zoom-in-95 duration-300">
          {/* Enhanced Header - Fixed Close Button Layering */}
          <div className="bg-[#0B1C2D] p-5 flex justify-between items-center relative overflow-hidden">
            <div className="flex items-center space-x-3 relative z-10">
              <div className="relative">
                <div className="w-10 h-10 bg-[#1FA67A]/20 rounded-xl flex items-center justify-center">
                  <Sparkles size={20} className="text-[#1FA67A]" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-accent border-2 border-[#0B1C2D] rounded-full animate-pulse"></div>
              </div>
              <div>
                <h2 className="text-white font-bold text-sm tracking-tight">Monitize Assistant</h2>
                <div className="flex items-center gap-1.5">
                  <div className="w-1 h-1 rounded-full bg-accent/50"></div>
                  <p className="text-[9px] text-white/40 uppercase font-bold tracking-[0.1em]">Educational Mentor Active</p>
                </div>
              </div>
            </div>
            
            {/* Added relative z-20 to ensure it's above any decorative blurs */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }} 
              className="relative z-20 text-white/40 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
              aria-label="Close Chat"
            >
              <X size={20} aria-hidden="true" />
            </button>

            {/* Added pointer-events-none to prevent interception */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl pointer-events-none z-0"></div>
          </div>
          
          {/* Chat Area */}
          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-5 space-y-6 bg-[#F8FAFC] scroll-smooth"
            aria-live="polite"
          >
            {chat.length === 0 && (
              <div className="h-full flex flex-col justify-center items-center text-center px-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="w-16 h-16 bg-white rounded-3xl shadow-sm border border-primary/5 flex items-center justify-center text-accent mb-6">
                  <HelpCircle size={32} />
                </div>
                <h3 className="text-primary font-bold text-lg mb-2">Welcome to Monitize</h3>
                <p className="text-primary/60 text-sm leading-relaxed mb-8">
                  I'm here to simplify Indian financial concepts for you. What shall we explore today?
                </p>
                
                <div className="grid grid-cols-2 gap-2 w-full">
                  {quickQueries.map((query, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSend(query)}
                      className="text-[10px] font-bold text-primary/50 bg-white border border-primary/5 py-3 px-2 rounded-xl hover:border-accent hover:text-accent transition-all text-center uppercase tracking-tight"
                    >
                      {query}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {chat.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-[22px] text-[13px] leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                  ? 'bg-[#1FA67A] text-white rounded-br-none font-medium' 
                  : 'bg-white text-primary/80 border border-primary/5 rounded-bl-none font-normal'
                }`}>
                  <div className="whitespace-pre-wrap">
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
            
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-[22px] rounded-bl-none border border-primary/5 shadow-sm">
                  <div className="flex space-x-1.5 items-center">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce delay-150"></div>
                    <div className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce delay-300"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Interactive Input Area */}
          <div className="p-5 bg-white border-t border-primary/5 shadow-[0_-10px_20px_-5px_rgba(0,0,0,0.02)]">
            <div className="flex items-center space-x-2">
              <input 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                type="text" 
                placeholder="Ask about taxes, GST, or SIP..." 
                className="flex-1 bg-[#F1F5F9] border-none rounded-2xl px-5 py-3.5 text-sm font-medium focus:ring-2 focus:ring-accent outline-none transition-all placeholder:text-primary/20"
                aria-label="Input field for financial queries"
              />
              <button 
                type="button"
                onClick={() => handleSend()}
                disabled={loading || !message.trim()}
                className="bg-[#0B1C2D] text-white p-3.5 rounded-2xl disabled:opacity-20 hover:bg-primary/90 transition-all shadow-lg flex items-center justify-center"
                aria-label="Send Query"
              >
                <ArrowRight size={20} aria-hidden="true" />
              </button>
            </div>
            <div className="mt-4 flex items-center justify-center space-x-2">
              <Info size={10} className="text-primary/20" />
              <p className="text-[9px] text-primary/30 uppercase font-black tracking-[0.2em]">Institutional Educational Framework</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatbotComponent;
