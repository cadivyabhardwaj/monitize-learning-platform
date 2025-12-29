import React, { useState } from 'react';
import { Search, MapPin, Award, Star, ShieldCheck, Mail, Phone, ExternalLink, ArrowLeft, Filter, Users, Globe, History, Briefcase } from 'lucide-react';
import { View } from './types';

interface Expert {
  id: string;
  name: string;
  profession: 'CA' | 'CS' | 'CFA' | 'Legal' | 'Consultant';
  location: string;
  specialization: string[];
  experience: string;
  verified: boolean;
}

const EXPERT_DATA: Expert[] = [
  { id: '1', name: 'Rohan Mehta', profession: 'CA', location: 'Mumbai', specialization: ['Tax Scrutiny', 'GST Compliance'], experience: '12 Years', verified: true },
  { id: '2', name: 'Priya Iyer', profession: 'Legal', location: 'Chennai', specialization: ['Real Estate Law', 'Estate Planning'], experience: '8 Years', verified: true },
  { id: '3', name: 'Anil Kapoor', profession: 'CFA', location: 'Delhi', specialization: ['Portfolio Strategy', 'Risk Management'], experience: '15 Years', verified: true },
  { id: '4', name: 'Sanya Gupta', profession: 'CS', location: 'Bangalore', specialization: ['ROC Filings', 'Pvt Ltd Setup'], experience: '6 Years', verified: true },
  { id: '5', name: 'Vikram Singh', profession: 'CA', location: 'Pune', specialization: ['MSME Funding', 'Internal Audit'], experience: '10 Years', verified: true },
];

const ExpertDirectory = ({ onNavigate }: { onNavigate: (view: View, target?: string) => void }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const professions = ['All', 'CA', 'CS', 'CFA', 'Legal', 'Consultant'];

  const filteredExperts = EXPERT_DATA.filter(expert => {
    const matchesSearch = expert.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         expert.specialization.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesFilter = activeFilter === 'All' || expert.profession === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="pt-32 pb-24 px-6 bg-[#F8FAFC] min-h-screen">
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={() => onNavigate('services')}
          className="flex items-center space-x-2 text-primary/40 hover:text-primary mb-12 font-bold text-xs uppercase tracking-widest transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Back to Charter</span>
        </button>

        <header className="mb-16">
          <div className="inline-flex items-center space-x-2 text-accent font-bold text-[10px] uppercase tracking-[0.3em] mb-6">
            <Users size={14} />
            <span>Expert Discovery Gateway</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-poppins font-bold text-primary mb-6">Verified Independent Professionals</h1>
          <p className="text-primary/60 text-lg max-w-2xl font-medium leading-relaxed">
            Connect with vetted experts for personalized advisory and statutory execution. Monitize does not participate in engagements or outcomes.
          </p>
        </header>

        {/* Search and Filters */}
        <div className="bg-white p-6 rounded-[32px] border border-primary/5 shadow-sm mb-12 flex flex-col md:flex-row gap-6 items-center">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-primary/20" size={20} />
            <input 
              type="text" 
              placeholder="Search by name or specialization (e.g. GST)..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#F5F7FA] border-none rounded-2xl pl-14 pr-6 py-5 text-sm font-medium focus:ring-2 focus:ring-accent outline-none transition-all"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto no-scrollbar w-full md:w-auto pb-2 md:pb-0">
            {professions.map(prof => (
              <button 
                key={prof}
                onClick={() => setActiveFilter(prof)}
                className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest border transition-all ${activeFilter === prof ? 'bg-primary border-primary text-white shadow-lg' : 'bg-white border-primary/5 text-primary/40 hover:bg-primary/5'}`}
              >
                {prof}
              </button>
            ))}
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExperts.map(expert => (
            <article key={expert.id} className="bg-white rounded-[40px] p-8 border border-primary/5 shadow-sm hover:shadow-xl transition-all group relative overflow-hidden">
              <div className="flex justify-between items-start mb-8">
                 <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary/20 group-hover:scale-105 transition-transform group-hover:text-accent">
                   <Briefcase size={32} />
                 </div>
                 {expert.verified && (
                   <div className="flex items-center gap-1.5 px-3 py-1 bg-accent/10 rounded-full text-accent font-black text-[9px] uppercase tracking-widest border border-accent/10">
                     <ShieldCheck size={12} />
                     <span>Verified</span>
                   </div>
                 )}
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-1">{expert.name}</h3>
                <div className="flex items-center gap-2 text-primary/40 text-[10px] font-bold uppercase tracking-widest">
                  <Award size={12} className="text-accent" />
                  <span>{expert.profession} • {expert.experience} Experience</span>
                </div>
              </div>

              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-3">
                  <MapPin size={14} className="text-primary/20 mt-1" />
                  <span className="text-xs text-primary/60 font-medium">{expert.location}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {expert.specialization.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-[#F5F7FA] text-primary/40 rounded-lg text-[10px] font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t border-primary/5 flex gap-3">
                <button className="flex-1 bg-primary text-white py-4 rounded-2xl font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
                  <Mail size={14} /> Contact
                </button>
                <button className="p-4 bg-primary/5 text-primary/40 rounded-2xl hover:bg-primary/10 transition-all">
                  <ExternalLink size={18} />
                </button>
              </div>

              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </article>
          ))}
        </div>

        {filteredExperts.length === 0 && (
          <div className="text-center py-32 space-y-6">
             <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto text-primary/20">
               <Search size={32} />
             </div>
             <p className="text-primary/40 font-bold uppercase tracking-[0.2em]">No experts matched your search criteria</p>
             <button onClick={() => {setSearchTerm(''); setActiveFilter('All');}} className="text-accent font-bold text-xs underline">Clear all filters</button>
          </div>
        )}

        {/* Directory Disclaimer */}
        <div className="mt-24 p-10 bg-[#0B1C2D] rounded-[48px] text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-sm font-black uppercase tracking-[0.3em] text-accent mb-6 flex items-center gap-3">
                <History size={18} />
                Directory Governance
              </h4>
              <p className="text-white/50 text-xs leading-relaxed italic font-medium">
                The experts listed here are independent practitioners. Monitize validates credentials at the time of listing but does not guarantee performance, advise on fees, or act as an intermediary in professional disputes. All engagements are direct between the user and the expert.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl space-y-4">
              <div className="flex items-center gap-3">
                <Globe size={20} className="text-accent" />
                <h5 className="font-bold text-sm">Pan-India Network</h5>
              </div>
              <p className="text-[11px] text-white/40 leading-relaxed font-medium">
                Our network covers practitioners specialized in various regional tax jurisdictions and high-growth hubs across India.
              </p>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-accent/5 opacity-50" />
        </div>
      </div>
    </div>
  );
};

export default ExpertDirectory;