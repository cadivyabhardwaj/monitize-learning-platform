
import React from 'react';
import Hero from './Hero';
import { TrustSection, AboutSection, ProcessSection, OfferingsSection } from './HomeSections';
import ToolsSection from './ToolsSection';
import { ServicesCompliance, Disclaimer, FinalCTA } from './ComplianceSections';
import { View } from './types';

/**
 * LoggedOutHome
 * 
 * Public homepage for Monitize. Focuses on trust-building, 
 * financial education pillars, and introductory tools.
 */
const LoggedOutHome = ({ onNavigate }: { onNavigate: (view: View, subTarget?: string) => void }) => (
  <div className="animate-in fade-in duration-700" role="region" aria-label="Monitize Public Homepage Overview">
    <Hero onNavigate={onNavigate} />
    <TrustSection />
    <AboutSection />
    <ProcessSection onNavigate={onNavigate} />
    <OfferingsSection onNavigate={onNavigate} />
    <ToolsSection onNavigate={onNavigate} />
    
    <ServicesCompliance />
    <Disclaimer />
    <FinalCTA onNavigate={onNavigate} />
  </div>
);

export default LoggedOutHome;
