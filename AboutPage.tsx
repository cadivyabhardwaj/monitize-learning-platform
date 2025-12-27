
import React from 'react';
import { Target, Users, Briefcase, Mail, ShieldCheck, Scale, Eye, ArrowRight, Info } from 'lucide-react';
import { BRAND_NAME } from './constants';
import { View } from './types';

/**
 * AboutPage Component
 * 
 * A mission-critical page designed for long-term credibility.
 * Adheres to strict neutrality and regulator-safe content standards.
 */
// Fix: Updated onNavigate prop type to include optional subTarget argument to maintain consistency with the routing function signature.
const AboutPage = ({ onNavigate }: { onNavigate: (view: View, subTarget?: string) => void }) => {
  return (
    <div className="animate-in fade-in duration-700 bg-background">
      
      {/* 1️⃣ OUR VISION SECTION */}
      <section 
        className="pt-40 pb-24 lg:pt-56 lg:pb-32 bg-white px-6"
        aria-labelledby="vision-title"
      >
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 text-accent font-bold text-[10px] uppercase tracking-[0.3em] mb-8">
            <Target size={14} aria-hidden="true" />
            <span>Core Foundation</span>
          </div>
          <h1 id="vision-title" className="text-4xl lg:text-6xl font-poppins font-bold text-primary mb-12 leading-tight">
            Clarity Over <br />
            <span className="text-accent">Complexity.</span>
          </h1>
          <div className="prose prose-lg text-primary/70 leading-relaxed space-y-8 max-w-none">
            <p>
              The Indian financial landscape is marked by profound structural depth. Between evolving GST laws, shifting direct tax regimes, and the rapid digitization of assets, the modern participant is often overwhelmed by an inertia of information.
            </p>
            <p className="font-semibold text-primary">
              {BRAND_NAME} was established to serve as a neutral bridge. We do not provide financial advice, nor do we manage portfolios. We provide the conceptual infrastructure required for every Indian to understand the mechanics of their own financial journey.
            </p>
            <p>
              Our vision is rooted in education. We believe that when complexity is simplified through logic and transparency, the result is not just knowledge—it is the dignity of informed action.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-24 border-t border-primary/5 pt-16">
            {[
              { 
                icon: <Eye className="text-accent" />, 
                title: "Neutrality", 
                desc: "We operate without conflict of interest. Our frameworks are built to educate, not to sell financial products." 
              },
              { 
                icon: <ShieldCheck className="text-accent" />, 
                title: "Transparency", 
                desc: "Every tool and module is aligned with verified Indian regulatory standards, citing sources where applicable." 
              },
              { 
                icon: <Scale className="text-accent" />, 
                title: "Responsibility", 
                desc: "We prioritize accuracy and data sovereignty, ensuring a safe environment for financial exploration." 
              }
            ].map((principle, idx) => (
              <div key={idx} className="space-y-4">
                <div className="bg-background w-12 h-12 rounded-xl flex items-center justify-center" aria-hidden="true">
                  {principle.icon}
                </div>
                <h3 className="font-bold text-primary text-sm uppercase tracking-wider">{principle.title}</h3>
                <p className="text-xs text-primary/60 leading-relaxed">{principle.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2️⃣ THE TEAM SECTION */}
      <section 
        className="py-24 lg:py-32 bg-background px-6"
        aria-labelledby="team-title"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div className="lg:sticky lg:top-40">
              <div className="inline-flex items-center space-x-2 text-accent font-bold text-[10px] uppercase tracking-[0.3em] mb-6">
                <Users size={14} aria-hidden="true" />
                <span>The Architecture Team</span>
              </div>
              <h2 id="team-title" className="text-3xl lg:text-4xl font-poppins font-bold text-primary mb-8">
                A Multidisciplinary Collective.
              </h2>
              <p className="text-primary/60 text-lg leading-relaxed mb-8">
                Trust in a financial platform is built through the precision of its systems. {BRAND_NAME} is built by a team that bridges the gap between high-level tax expertise, secure software engineering, and educational design.
              </p>
              <p className="text-primary/60 text-lg leading-relaxed">
                We focus on collective responsibility. By combining these distinct domains, we ensure that our tools are not just technologically sound, but conceptually accurate according to the latest Indian Finance Acts.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { 
                  title: "Tax Logic & Compliance", 
                  desc: "Specialists in translating the nuances of Indian Direct and Indirect Tax laws into structured, machine-readable logic." 
                },
                { 
                  title: "Product Systems Engineering", 
                  desc: "Architects focused on data integrity, security, and building precision simulators for various financial milestones." 
                },
                { 
                  title: "Educational Content Design", 
                  desc: "Instructional designers dedicated to simplifying jargon into accessible, retention-focused financial modules." 
                },
                { 
                  title: "Privacy & Sovereignty", 
                  desc: "A dedicated function ensuring compliance with the DPDP Act and maintaining the highest standards of user confidentiality." 
                }
              ].map((role, idx) => (
                <div key={idx} className="bg-white p-10 rounded-[40px] border border-primary/5 shadow-sm">
                  <h4 className="font-bold text-primary mb-4 flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                    {role.title}
                  </h4>
                  <p className="text-sm text-primary/50 leading-relaxed">{role.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3️⃣ CAREERS SECTION */}
      <section 
        className="py-24 lg:py-32 bg-white px-6"
        aria-labelledby="careers-title"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 text-accent font-bold text-[10px] uppercase tracking-[0.3em] mb-6">
            <Briefcase size={14} aria-hidden="true" />
            <span>Join the Mission</span>
          </div>
          <h2 id="careers-title" className="text-3xl lg:text-4xl font-poppins font-bold text-primary mb-8">
            Responsibility Over Velocity.
          </h2>
          <p className="text-primary/60 text-lg leading-relaxed mb-12">
            Working at {BRAND_NAME} requires a specific mindset. We value precision over speed, and ethical reasoning over "hustle." We seek individuals who understand the gravity of financial information and the responsibility that comes with delivering it to thousands of households.
          </p>

          <div className="grid md:grid-cols-2 gap-8 text-left mb-16">
            <div className="p-8 bg-background rounded-3xl border border-primary/5">
              <h4 className="font-bold text-primary mb-4">Who Should Apply?</h4>
              <ul className="space-y-3 text-sm text-primary/60">
                <li className="flex items-start gap-2">
                   <div className="mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0"></div>
                   <span>Professionals with a deep respect for Indian financial laws.</span>
                </li>
                <li className="flex items-start gap-2">
                   <div className="mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0"></div>
                   <span>Engineers who prioritize data security and absolute accuracy.</span>
                </li>
                <li className="flex items-start gap-2">
                   <div className="mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0"></div>
                   <span>Educators who can solve for clarity without adding bias.</span>
                </li>
              </ul>
            </div>
            <div className="p-8 bg-background rounded-3xl border border-primary/5 flex flex-col justify-center">
              <h4 className="font-bold text-primary mb-2">Ongoing Talent Mapping</h4>
              <p className="text-sm text-primary/50 mb-6">We open specific roles periodically as the platform grows. We are always interested in meeting ethical thinkers.</p>
              <a 
                href="mailto:mission@monitize.in" 
                className="inline-flex items-center justify-center space-x-3 bg-primary text-white px-8 py-4 rounded-2xl font-bold text-sm hover:bg-primary/90 transition-all shadow-xl shadow-primary/10"
              >
                <Mail size={18} />
                <span>Write to our Talent Team</span>
              </a>
            </div>
          </div>

          <div className="p-6 bg-accent/5 rounded-2xl border border-accent/10 flex items-center justify-center gap-3">
             <Info size={18} className="text-accent" />
             <p className="text-[10px] font-bold text-accent uppercase tracking-widest">Monitize is an equal opportunity institution built for longevity.</p>
          </div>
        </div>
      </section>

      {/* FINAL NAVIGATION */}
      <section className="py-24 bg-primary text-white px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-poppins font-bold mb-8 italic text-white/90">"Education is the most sustainable asset."</h2>
          <button 
            onClick={() => onNavigate('home')}
            className="group inline-flex items-center space-x-3 text-accent font-bold text-[10px] uppercase tracking-[0.4em] hover:text-white transition-colors"
          >
            <span>Return to Mission Dashboard</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
