
import React, { useState, useEffect, useCallback } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import SEOHelmet from './SEOHelmet';
import SkipLink from './SkipLink';
import LoggedOutHome from './LoggedOutHome';
import LoggedInHome from './LoggedInHome';
import LearnPage from './LearnPage';
import ToolsPage from './ToolsPage';
import AboutPage from './AboutPage';
import ServicesPage from './ServicesPage';
import AuthPage from './AuthPage';
import MarketBasicsPage from './MarketBasicsPage';
import TaxFundamentalsPage from './TaxFundamentalsPage';
import PFBasicsPage from './PFBasicsPage';
import BusinessBasicsPage from './BusinessBasicsPage';
import AILabPage from './AILabPage';
import Footer from './Footer';
import ChatbotComponent from './ChatbotComponent';
import { View, User, AuthState } from './types';

export default function App() {
  const [auth, setAuth] = useState<AuthState>({ isAuthenticated: false, user: null });
  const navigate = useNavigate();
  const location = useLocation();

  // Unified scroll management for all route changes
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [location.pathname, location.hash, location.search]);

  const handleLogin = (user: User) => {
    setAuth({ isAuthenticated: true, user });
    navigate('/');
  };

  const navigateTo = useCallback((view: View, subTarget?: string) => {
    let path = `/${view === 'home' ? '' : view}`;
    
    if (view === 'tools' && subTarget && !subTarget.startsWith('?')) {
      path = `/tools?tool=${subTarget}`;
    } else if (subTarget && subTarget.startsWith('#')) {
      // Handle same-page section anchors
      if (location.pathname === path) {
        const id = subTarget.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        return;
      }
      path = `${path}${subTarget}`;
    } else if (subTarget) {
      path = `${path}${subTarget}`;
    }

    // Force top scroll even if on same path
    if (location.pathname + location.search === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(path);
    }
  }, [navigate, location]);

  const currentView = location.pathname === '/' ? 'home' : location.pathname.replace('/', '') as View;

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      <SEOHelmet />
      <SkipLink />
      <Navbar 
        isAuthenticated={auth.isAuthenticated} 
        onAuthToggle={auth.isAuthenticated ? () => setAuth({isAuthenticated:false, user:null}) : () => navigate('/auth?tab=login')} 
        onNavigate={navigateTo}
        currentView={currentView}
      />
      <main id="main-content" role="main" tabIndex={-1} className="outline-none min-h-screen">
        <Routes>
          <Route path="/" element={auth.isAuthenticated && auth.user ? <LoggedInHome user={auth.user} onNavigate={navigateTo} /> : <LoggedOutHome onNavigate={navigateTo} />} />
          <Route path="/learn" element={<LearnPage isAuthenticated={auth.isAuthenticated} onNavigate={navigateTo} />} />
          <Route path="/tools" element={<ToolsPage isAuthenticated={auth.isAuthenticated} onNavigate={navigateTo} />} />
          <Route path="/about" element={<AboutPage onNavigate={navigateTo} />} />
          <Route path="/services" element={<ServicesPage onNavigate={navigateTo} />} />
          <Route path="/auth" element={<AuthPage onLoginSuccess={handleLogin} />} />
          <Route path="/market-basics" element={<MarketBasicsPage onNavigate={navigateTo} />} />
          <Route path="/tax-fundamentals" element={<TaxFundamentalsPage onNavigate={navigateTo} />} />
          <Route path="/pf-basics" element={<PFBasicsPage onNavigate={navigateTo} />} />
          <Route path="/business-basics" element={<BusinessBasicsPage onNavigate={navigateTo} />} />
          <Route path="/ai-lab" element={<AILabPage onNavigate={navigateTo} />} />
        </Routes>
      </main>
      <Footer onNavigate={navigateTo} />
      <ChatbotComponent />
    </div>
  );
}
