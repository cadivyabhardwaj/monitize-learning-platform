
import React from 'react';
import { BRAND_NAME, COMPLIANCE } from './constants';
import { View } from './types';

interface FooterProps {
  onNavigate: (view: View, subTarget?: string) => void;
}

const Footer = ({ onNavigate }: FooterProps) => (
  <footer className="bg-white pt-24 pb-12 border-t border-[#F5F7FA] px-6" role="contentinfo">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-16">
        <div className="col-span-2 lg:col-span-1">
          <div 
            className="flex items-center space-x-2 mb-6 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <div className="w-8 h-8 bg-[#1FA67A] rounded-md flex items-center justify-center font-poppins font-bold text-white">M</div>
            <span className="text-primary font-poppins font-bold text-xl tracking-tight">{BRAND_NAME}</span>
          </div>
          <p className="text-primary/50 text-sm leading-relaxed mb-6">
            Simplifying finance for the Indian professional. Education-first, trust-driven.
          </p>
        </div>
        <div>
          <h5 className="font-bold text-primary mb-6">About</h5>
          <ul className="space-y-4 text-primary/60 text-sm">
            <li><button onClick={() => onNavigate('about')} className="hover:text-accent transition-colors">Our Vision</button></li>
            <li><button onClick={() => onNavigate('about')} className="hover:text-accent transition-colors">The Team</button></li>
            <li><button onClick={() => onNavigate('about')} className="hover:text-accent transition-colors">Careers</button></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-primary mb-6">Platform</h5>
          <ul className="space-y-4 text-primary/60 text-sm">
            <li><button onClick={() => onNavigate('services')} className="hover:text-accent transition-colors">Services Overview</button></li>
            <li><button onClick={() => onNavigate('learn')} className="hover:text-accent transition-colors">Learning Paths</button></li>
            <li><button onClick={() => onNavigate('tools')} className="hover:text-accent transition-colors">Planning Tools</button></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-primary mb-6">Learn</h5>
          <ul className="space-y-4 text-primary/60 text-sm">
            <li><button onClick={() => onNavigate('learn')} className="hover:text-accent transition-colors">Personal Finance</button></li>
            <li><button onClick={() => onNavigate('learn')} className="hover:text-accent transition-colors">Tax Laws</button></li>
            <li><button onClick={() => onNavigate('learn')} className="hover:text-accent transition-colors">Market Basics</button></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-primary mb-6">Support</h5>
          <ul className="space-y-4 text-primary/60 text-sm">
            <li><button onClick={() => onNavigate('home')} className="hover:text-accent transition-colors">Contact Us</button></li>
            <li><button onClick={() => onNavigate('home')} className="hover:text-accent transition-colors">Privacy Policy</button></li>
            <li><button onClick={() => onNavigate('home')} className="hover:text-accent transition-colors">Terms of Use</button></li>
          </ul>
        </div>
      </div>
      <div className="pt-12 border-t border-[#F5F7FA] flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-primary/40 text-sm font-medium">
        <p>© {new Date().getFullYear()} {BRAND_NAME} | {COMPLIANCE.FOOTER_TAGLINE}</p>
        <div className="flex items-center space-x-6">
           <span className="flex items-center space-x-1">
             <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true"></span>
             <span>ISO 27001 Certified</span>
           </span>
           <span className="flex items-center space-x-1">
             <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true"></span>
             <span>SSL Secured</span>
           </span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
