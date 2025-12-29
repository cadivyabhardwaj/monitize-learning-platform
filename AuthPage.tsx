import React, { useState } from 'react';
/* Fixed: Ensure correct hooks are imported from react-router-dom */
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Mail, User, Lock, CheckCircle2, ShieldCheck, ChevronRight, Info, AlertCircle } from 'lucide-react';
import { BRAND_NAME } from './constants';
import { User as UserType, UserCategory, ExperienceLevel } from './types';

interface AuthPageProps {
  onLoginSuccess: (user: UserType) => void;
}

const AuthPage = ({ onLoginSuccess }: AuthPageProps) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const initialTab = searchParams.get('tab') === 'login' ? 'login' : 'signup';
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>(initialTab);
  const [signUpStep, setSignUpStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    category: '' as UserCategory,
    interests: [] as string[],
    experience: 'beginner' as ExperienceLevel,
    consent: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest) 
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    /* Fixed: Corrected progress object literal to strictly match User interface */
    setTimeout(() => {
      onLoginSuccess({
        id: 'u_' + Date.now(),
        fullName: 'Arjun Sharma',
        email: formData.email || 'member@monitize.in',
        progress: {
          completedModuleIds: [],
          levelProgress: {}
        }
      });
      setLoading(false);
    }, 1000);
  };

  const handleSignUpComplete = () => {
    setLoading(true);
    /* Fixed: Corrected progress object literal to strictly match User interface */
    setTimeout(() => {
      onLoginSuccess({
        id: 'u_' + Date.now(),
        fullName: formData.fullName,
        email: formData.email,
        profile: {
          category: formData.category,
          interests: formData.interests,
          experience: formData.experience
        },
        progress: {
          completedModuleIds: [],
          levelProgress: {}
        }
      });
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-background flex items-center justify-center">
      <div className="max-w-xl w-full">
        <div className="text-center mb-10">
          <div onClick={() => navigate('/')} className="flex items-center justify-center space-x-2 mb-6 cursor-pointer group">
            <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center font-poppins font-bold text-white text-xl shadow-lg transition-transform group-hover:scale-105">M</div>
            <span className="text-primary font-poppins font-bold text-2xl tracking-tight">{BRAND_NAME}</span>
          </div>
          <h1 className="text-2xl font-poppins font-bold text-primary mb-2">
            {activeTab === 'login' ? 'Institutional Login' : 'Begin Your Educational Journey'}
          </h1>
          <p className="text-primary/50 text-sm font-medium">
            {activeTab === 'login' 
              ? 'Resume your learning progress and simulations.' 
              : 'Access neutral frameworks for financial clarity.'}
          </p>
        </div>

        <div className="bg-white rounded-[40px] shadow-2xl border border-primary/5 overflow-hidden">
          <div className="flex border-b border-primary/5 p-2 gap-2 bg-[#F8FAFC]">
            <button 
              onClick={() => { setActiveTab('signup'); setSignUpStep(1); }}
              className={`flex-1 py-4 rounded-3xl font-bold text-sm transition-all ${activeTab === 'signup' ? 'bg-white text-accent shadow-sm' : 'text-primary/40 hover:text-primary/60'}`}
            >
              Start Learning
            </button>
            <button 
              onClick={() => setActiveTab('login')}
              className={`flex-1 py-4 rounded-3xl font-bold text-sm transition-all ${activeTab === 'login' ? 'bg-white text-accent shadow-sm' : 'text-primary/40 hover:text-primary/60'}`}
            >
              Sign In
            </button>
          </div>

          <div className="p-8 lg:p-12">
            {activeTab === 'login' ? (
              <form onSubmit={handleLogin} className="space-y-6 animate-in fade-in duration-300">
                <div className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-bold text-primary/40 uppercase tracking-widest mb-2 ml-1">Member Email</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/20" size={18} />
                      <input type="email" required name="email" value={formData.email} onChange={handleInputChange} placeholder="name@email.com" className="w-full bg-[#F5F7FA] border-none rounded-2xl pl-12 pr-6 py-4 text-sm font-medium focus:ring-2 focus:ring-accent outline-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-primary/40 uppercase tracking-widest mb-2 ml-1">Password</label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/20" size={18} />
                      <input type="password" required name="password" value={formData.password} onChange={handleInputChange} placeholder="••••••••" className="w-full bg-[#F5F7FA] border-none rounded-2xl pl-12 pr-6 py-4 text-sm font-medium focus:ring-2 focus:ring-accent outline-none" />
                    </div>
                  </div>
                </div>
                <button type="submit" disabled={loading} className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-sm shadow-xl shadow-primary/10 hover:bg-primary/90 transition-all flex items-center justify-center space-x-2 disabled:opacity-50">
                  {loading ? <span>Authenticating...</span> : <><ShieldCheck size={18} /><span>Secure Sign In</span></>}
                </button>
              </form>
            ) : (
              <div className="space-y-8 animate-in fade-in duration-300">
                {/* Step Indicator */}
                <div className="flex items-center justify-between px-2">
                  {[1, 2, 3].map(step => (
                    <div key={step} className="flex items-center flex-1 last:flex-none">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${signUpStep >= step ? 'bg-accent text-white shadow-lg' : 'bg-primary/5 text-primary/30'}`}>
                        {signUpStep > step ? <CheckCircle2 size={16} /> : step}
                      </div>
                      {step < 3 && <div className={`flex-1 h-0.5 mx-2 rounded-full ${signUpStep > step ? 'bg-accent' : 'bg-primary/5'}`}></div>}
                    </div>
                  ))}
                </div>

                {signUpStep === 1 && (
                  <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
                    <div>
                      <h2 className="text-xl font-bold text-primary mb-2">Member Identity</h2>
                      <p className="text-xs text-primary/50 font-medium">For completion acknowledgements and progress persistence.</p>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-[10px] font-bold text-primary/40 uppercase tracking-widest mb-2 ml-1">Full Name</label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/20" size={18} />
                          <input name="fullName" value={formData.fullName} onChange={handleInputChange} type="text" required placeholder="Arjun Sharma" className="w-full bg-[#F5F7FA] border-none rounded-2xl pl-12 pr-6 py-4 text-sm font-medium focus:ring-2 focus:ring-accent outline-none" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-primary/40 uppercase tracking-widest mb-2 ml-1">Email Address</label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/20" size={18} />
                          <input name="email" value={formData.email} onChange={handleInputChange} type="email" required placeholder="name@email.com" className="w-full bg-[#F5F7FA] border-none rounded-2xl pl-12 pr-6 py-4 text-sm font-medium focus:ring-2 focus:ring-accent outline-none" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-primary/40 uppercase tracking-widest mb-2 ml-1">Set Password</label>
                        <div className="relative">
                          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/20" size={18} />
                          <input name="password" value={formData.password} onChange={handleInputChange} type="password" required placeholder="Min 8 characters" className="w-full bg-[#F5F7FA] border-none rounded-2xl pl-12 pr-6 py-4 text-sm font-medium focus:ring-2 focus:ring-accent outline-none" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {signUpStep === 2 && (
                  <div className="space-y-8 animate-in slide-in-from-right-4 duration-300">
                    <div>
                      <h2 className="text-xl font-bold text-primary mb-2">Learning Context</h2>
                      <p className="text-xs text-primary/50 font-medium">Used to personalize your educational milestones.</p>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-[10px] font-bold text-primary/40 uppercase tracking-widest mb-3 ml-1">I am a...</label>
                        <div className="grid grid-cols-2 gap-3">
                          {['Individual', 'Professional', 'Business Owner', 'Student'].map((cat) => (
                            <button key={cat} onClick={() => setFormData({...formData, category: cat.toLowerCase().replace(' ', '') as UserCategory})} className={`p-4 rounded-2xl border text-xs font-bold transition-all text-left flex items-center justify-between ${formData.category === cat.toLowerCase().replace(' ', '') ? 'bg-accent/5 border-accent text-accent' : 'bg-white border-primary/5 text-primary/60 hover:border-primary/20'}`}>
                              <span>{cat}</span>
                              {formData.category === cat.toLowerCase().replace(' ', '') && <CheckCircle2 size={14} />}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-primary/40 uppercase tracking-widest mb-3 ml-1">Learning Interests</label>
                        <div className="flex flex-wrap gap-2">
                          {['Taxes', 'Markets', 'Compliance', 'Personal Finance'].map((interest) => (
                            <button key={interest} onClick={() => handleInterestToggle(interest)} className={`px-4 py-2 rounded-full border text-[10px] font-bold uppercase tracking-wider transition-all ${formData.interests.includes(interest) ? 'bg-primary text-white border-primary' : 'bg-[#F5F7FA] border-transparent text-primary/40 hover:bg-primary/5'}`}>
                              {interest}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {signUpStep === 3 && (
                  <div className="space-y-8 animate-in slide-in-from-right-4 duration-300">
                    <div>
                      <h2 className="text-xl font-bold text-primary mb-2">Consent & Boundaries</h2>
                      <p className="text-xs text-primary/50 font-medium">Monitize is a non-advisory platform.</p>
                    </div>
                    <div className="space-y-6">
                      <div className="p-5 bg-accent/5 border border-accent/10 rounded-2xl flex items-start gap-4">
                        <Info className="text-accent shrink-0 mt-0.5" size={20} />
                        <p className="text-[11px] text-primary/70 leading-relaxed font-medium italic">
                          I understand that Monitize provides strictly educational content and non-advisory simulations. I retain full responsibility for my financial decisions.
                        </p>
                      </div>
                      <label className="flex items-start gap-3 cursor-pointer group px-1">
                        <input type="checkbox" checked={formData.consent} onChange={(e) => setFormData({...formData, consent: e.target.checked})} className="mt-1 rounded border-primary/10 text-accent focus:ring-accent w-4 h-4" />
                        <span className="text-[11px] text-primary/60 leading-snug font-medium">
                          I agree to the <button className="text-accent font-bold hover:underline">Terms of Use</button> and acknowledge the <button className="text-accent font-bold hover:underline">Data Privacy Policy</button> compliant with DPDP Act 2023.
                        </span>
                      </label>
                    </div>
                  </div>
                )}

                <div className="flex gap-4">
                  {signUpStep > 1 && (
                    <button onClick={() => setSignUpStep(signUpStep - 1)} className="flex-1 bg-[#F5F7FA] text-primary/40 py-5 rounded-2xl font-bold text-sm hover:bg-primary/5 transition-all">Back</button>
                  )}
                  <button 
                    onClick={() => signUpStep < 3 ? setSignUpStep(signUpStep + 1) : handleSignUpComplete()}
                    disabled={loading || (signUpStep === 1 && (!formData.fullName || !formData.email || !formData.password)) || (signUpStep === 3 && !formData.consent)}
                    className="flex-[2] bg-accent text-white py-5 rounded-2xl font-bold text-sm shadow-xl shadow-accent/20 hover:bg-accent/90 transition-all flex items-center justify-center gap-2 disabled:opacity-30"
                  >
                    {loading ? <span>Initializing Workspace...</span> : <><span>{signUpStep === 3 ? 'Finalize Account' : 'Continue'}</span><ChevronRight size={18} /></>}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center space-x-3 opacity-40">
          <AlertCircle size={14} />
          <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary">Regulator-Safe Educational Infrastructure</p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;