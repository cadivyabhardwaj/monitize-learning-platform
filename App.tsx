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
import AILabPage from './AILabPage';
import LearningModuleRunner from './LearningModuleRunner';
import ExpertDirectory from './ExpertDirectory';
import Footer from './Footer';
import ChatbotComponent from './ChatbotComponent';
import { View, User, AuthState } from './types';

export default function App() {
  const [auth, setAuth] = useState<AuthState>({ isAuthenticated: false, user: null });
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 100);
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
      // Handle legacy paths by redirecting to module runner
      if (['market-basics', 'tax-fundamentals', 'pf-basics'].includes(view)) {
         const moduleIdMap: Record<string, string> = {
           'pf-basics': 'pf-foundations',
           'tax-fundamentals': 'tax-fundamentals',
           'market-basics': 'market-investing-basics'
         };
         path = `/learn/${moduleIdMap[view] || view}`;
      } else if (view === 'services' && subTarget === 'directory') {
         path = '/services/directory';
      } else {
         path = `${path}${subTarget}`;
      }
    }

    if (location.pathname + location.search === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(path);
    }
  }, [navigate, location]);

  const currentView = location.pathname === '/' ? 'home' : location.pathname.split('/')[1] as View;

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
          <Route path="/learn/:moduleId" element={<LearningModuleRunner user={auth.user} onNavigate={navigateTo} />} />
          <Route path="/tools" element={<ToolsPage isAuthenticated={auth.isAuthenticated} onNavigate={navigateTo} />} />
          <Route path="/about" element={<AboutPage onNavigate={navigateTo} />} />
          <Route path="/services" element={<ServicesPage onNavigate={navigateTo} />} />
          <Route path="/services/directory" element={<ExpertDirectory onNavigate={navigateTo} />} />
          <Route path="/auth" element={<AuthPage onLoginSuccess={handleLogin} />} />
          <Route path="/ai-lab" element={<AILabPage onNavigate={navigateTo} />} />
        </Routes>
      </main>
      <Footer onNavigate={navigateTo} />
      <ChatbotComponent />
    </div>
  );
}