
import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Share2, Check, LogIn, LogOut, User } from 'lucide-react';
import { BRAND_NAME } from './constants';
import { View } from './types';

interface NavbarProps {
  isAuthenticated: boolean;
  onAuthToggle: () => void;
  onNavigate: (view: View, subTarget?: string) => void;
  currentView: string;
}

const Navbar = ({ isAuthenticated, onAuthToggle, onNavigate, currentView }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState('EN');
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleShare = async () => {
    const shareData = {
      title: `${BRAND_NAME} | Financial Clarity`,
      text: 'Check out MONITIZE - Financial Education and Planning for India.',
      url: window.location.href,
    };

    if (navigator.share && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.debug('Share cancelled or failed:', err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy link:', err);
      }
    }
  };

  const handleNavigate = (view: View, subTarget?: string) => {
    onNavigate(view, subTarget);
    setIsOpen(false);
  };

  const commonItems = [
    { label: 'Learn', action: () => handleNavigate('learn') },
    { label: 'Tools', action: () => handleNavigate('tools') },
    { label: 'AI Lab', action: () => handleNavigate('ai-lab') },
    { label: 'Services', action: () => handleNavigate('services') },
    { label: 'About', action: () => handleNavigate('about') }
  ];

  const menuItems = isAuthenticated 
    ? [{ label: 'Dashboard', action: () => handleNavigate('home') }, ...commonItems]
    : [{ label: 'Home', action: () => handleNavigate('home') }, ...commonItems];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B1C2D] border-b border-white/10 px-6 py-4">
      <nav className="max-w-7xl mx-auto flex justify-between items-center" aria-label="Main Navigation">
        <div 
          className="flex items-center space-x-2 cursor-pointer" 
          onClick={() => handleNavigate('home')}
        >
          <div className="w-8 h-8 bg-[#1FA67A] rounded-md flex items-center justify-center font-poppins font-bold text-white">M</div>
          <span className="text-white font-poppins font-bold text-xl tracking-tight">{BRAND_NAME}</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {menuItems.map((item) => {
              const isActive = (item.label.toLowerCase() === currentView || (item.label === 'Dashboard' && currentView === 'home') || (item.label === 'AI Lab' && currentView === 'ai-lab'));
              return (
                <li key={item.label}>
                  <button 
                    onClick={item.action}
                    className={`text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#1FA67A] focus:ring-offset-2 focus:ring-offset-[#0B1C2D] rounded-sm px-1 ${
                      isActive 
                      ? 'text-accent' 
                      : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
          
          <div className="flex items-center space-x-4 border-l border-white/10 pl-8">
             <button 
              onClick={handleShare}
              className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg transition-all duration-300 ${isCopied ? 'bg-[#1FA67A] text-white' : 'text-white/60 hover:text-white hover:bg-white/5'}`}
              aria-label="Share platform link"
            >
              {isCopied ? <Check size={14} /> : <Share2 size={14} />}
              <span className="text-[10px] font-bold uppercase tracking-widest">{isCopied ? 'Link Copied' : 'Share'}</span>
            </button>

             <button 
              onClick={() => setLang(lang === 'EN' ? 'HI' : 'EN')}
              className="flex items-center space-x-1 text-white/60 hover:text-white text-xs font-bold transition-all"
            >
              <Globe size={14} />
              <span>{lang}</span>
            </button>

            <button 
              onClick={onAuthToggle}
              className={`flex items-center space-x-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all focus:ring-2 focus:ring-offset-2 focus:ring-[#1FA67A] focus:outline-none ${
                isAuthenticated 
                ? 'bg-white/10 text-white hover:bg-white/20 border border-white/10' 
                : 'bg-[#1FA67A] text-white hover:bg-[#1a8d67]'
              }`}
            >
              {isAuthenticated ? (
                <><LogOut size={16} /><span>Sign Out</span></>
              ) : (
                <><LogIn size={16} /><span>Login</span></>
              )}
            </button>
            
            {isAuthenticated && (
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#1FA67A]">
                <User size={20} />
              </div>
            )}
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center space-x-4 lg:hidden">
          <button onClick={onAuthToggle} className="text-white/60">
            {isAuthenticated ? <LogOut size={24} /> : <LogIn size={24} />}
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-white"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[73px] bg-[#0B1C2D] z-40 p-6 flex flex-col space-y-4 animate-in fade-in slide-in-from-top-4 duration-300 overflow-y-auto">
          <ul className="flex flex-col space-y-2">
            {menuItems.map((item) => (
              <li key={item.label}>
                <button 
                  onClick={item.action}
                  className={`text-xl py-4 border-b border-white/5 block w-full text-left transition-colors ${
                    (item.label.toLowerCase() === currentView || (item.label === 'Dashboard' && currentView === 'home') || (item.label === 'AI Lab' && currentView === 'ai-lab'))
                    ? 'text-accent'
                    : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="pt-6 space-y-4">
             <button 
              onClick={() => { setLang(lang === 'EN' ? 'HI' : 'EN'); setIsOpen(false); }}
              className="w-full flex items-center justify-center space-x-2 text-white/60 py-3 border border-white/10 rounded-xl"
            >
              <Globe size={18} />
              <span className="font-bold">Switch to {lang === 'EN' ? 'Hindi' : 'English'}</span>
            </button>
            <button 
              onClick={() => { onAuthToggle(); setIsOpen(false); }}
              className="w-full bg-[#1FA67A] text-white px-6 py-4 rounded-xl text-center font-semibold text-lg"
            >
              {isAuthenticated ? 'Sign Out' : 'Get Started'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
