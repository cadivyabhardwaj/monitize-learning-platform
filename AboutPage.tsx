
import React from 'react';
import { Target, Users, Briefcase, Mail, ShieldCheck, Scale, Eye, ArrowRight, Info } from 'lucide-react';
import { BRAND_NAME } from './constants';
import { View } from './types';

interface AboutPageProps {
  onNavigate: (view: View, subTarget?: string) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="animate-in fade-in duration-700 bg-background overflow-x-hidden">
      
      {/* 1. VISION SECTION */}
      <section className="pt-48 pb-24 bg-surface px-6 md:px-12" role="region" aria-labelledby="vision-heading">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          <div className="inline-flex items-center space-x-2 text-accent font-bold text-[10px] uppercase tracking-widest mb-8">
            <Target size={14} aria-hidden="true" />
            <span>Foundational Intent</span>
          </div>
          <h1 id="vision-heading" className="text-4xl lg:text-6xl font-poppins font-bold text-primary mb-12 leading-tight">
            Clarity Over <br />
            <span className="text-accent">Complexity.</span>
          </h1>
          <div className="text-base lg:text-lg text-primary/70 leading-relaxed space-y-8 max-w-none font-medium text-left">
            <p>
              The Indian financial landscape is marked by profound structural depth. Between evolving GST laws, shifting direct tax regimes, and the rapid digitization of assets, the modern participant is often overwhelmed.
            </p>
            <p className="font-bold text-primary">
              {BRAND_NAME} was established to serve as a neutral bridge. We do not provide financial advice, nor do we manage portfolios.
            </p>
            <p>
              Our vision is rooted in education. We believe that when complexity is simplified through logic, the result is the dignity of informed action.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24 border-t border-primary/5 pt-16 text-left">
            {[
              { icon: <Eye size={20} className="text-accent" />, title: "Neutrality", desc: "We operate without conflict of interest. Built to educate, not to sell." },
              { icon: <ShieldCheck size={20} className="text-accent" />, title: "Transparency", desc: "Every tool is aligned with verified Indian regulatory standards." },
              { icon: <Scale size={20} className="text-accent" />, title: "Responsibility", desc: "We prioritize data sovereignty and accuracy in exploration." }
            ].map((principle, idx) => (
              <div key={idx} className="space-y-4">
                <div className="bg-background w-12 h-12 rounded-2xl flex items-center justify-center shrink-0">{principle.icon}</div>
                <h2 className="font-bold text-primary text-[11px] uppercase tracking-widest">{principle.title}</h2>
                <p className="text-xs text-primary/50 leading-relaxed font-medium">{principle.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. THE TEAM SECTION */}
      <section className="py-24 bg-background px-6 md:px-12" role="region" aria-labelledby="team-heading">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="lg:sticky lg:top-32 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 text-accent font-bold text-[10px] uppercase tracking-widest mb-6">
                <Users size={14} aria-hidden="true" />
                <span>Platform Governance</span>
              </div>
              <h2 id="team-heading" className="text-3xl lg:text-4xl font-poppins font-bold text-primary mb-8">A Multidisciplinary Collective.</h2>
              <p className="text-primary/60 text-lg leading-relaxed mb-12 font-medium max-w-lg mx-auto lg:mx-0">
                Trust is built through precision. {BRAND_NAME} is built by a team bridging the gap between tax expertise, software engineering, and educational design.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
              {[
                { title: "Tax Logic", desc: "Translating Indian Tax laws into machine-readable logic." },
                { title: "Systems Engineering", desc: "Architects focused on secure financial simulators." },
                { title: "Education Design", desc: "Instructional designers simplifying technical jargon." },
                { title: "Privacy/DPDP", desc: "Ensuring compliance and user confidentiality." }
              ].map((role, idx) => (
                <article key={idx} className="bg-surface p-10 rounded-[32px] border border-primary/5 shadow-sm transition-transform hover:-translate-y-1">
                  <h3 className="font-bold text-primary text-lg mb-4 flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
                    {role.title}
                  </h3>
                  <p className="text-sm text-primary/50 leading-relaxed font-medium">{role.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL NAVIGATION */}
      <nav className="py-24 bg-primary text-white px-6 text-center" aria-label="Bottom Site Navigation">
        <div className="max-w-2xl mx-auto">
          <p className="text-2xl font-poppins font-bold mb-12 italic text-white/90">"Financial dignity begins with understanding."</p>
          <button 
            onClick={() => onNavigate('home')}
            className="h-14 group inline-flex items-center justify-center space-x-6 text-accent font-bold text-[11px] uppercase tracking-widest hover:text-white transition-all px-8 border border-accent/20 rounded-xl"
          >
            <span>Return to Mission Dashboard</span>
            <ArrowRight size={18} className="hidden sm:block group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </nav>

    </div>
  );
};

export default AboutPage;
