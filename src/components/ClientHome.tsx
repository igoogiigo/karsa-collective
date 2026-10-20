'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrioSection from '@/components/TrioSection';
import WorksSection from '@/components/WorksSection';
import FAQSection from '@/components/FAQSection';
import LeadSection from '@/components/LeadSection';
import Footer from '@/components/Footer';
import { Member, Project } from '@/data/portfolio';

export interface FAQItem {
  _id: string;
  question: string;
  answer: string;
}

interface ClientHomeProps {
  initialData: {
    members: Member[];
    projects: Project[];
    faqs: FAQItem[];
  };
}

export default function ClientHome({ initialData }: ClientHomeProps) {
  const [selectedLeadTarget, setSelectedLeadTarget] = useState<'all' | 'bayu' | 'fadil' | 'igo'>('all');

  const handleSelectLeadFor = (memberId: 'bayu' | 'fadil' | 'igo') => {
    setSelectedLeadTarget(memberId);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#fbfbfa] text-[#141413] selection:bg-neutral-900 selection:text-white flex flex-col justify-between">
      <div>
        <Navbar />
        <main>
          <Hero />
          <TrioSection
            onSelectLeadFor={handleSelectLeadFor}
            initialMembers={initialData.members}
          />
          <WorksSection
            onSelectLeadFor={handleSelectLeadFor}
            initialProjects={initialData.projects}
          />
          <FAQSection initialFaqs={initialData.faqs} />
          <LeadSection
            selectedTarget={selectedLeadTarget}
            setSelectedTarget={setSelectedLeadTarget}
            members={initialData.members}
          />
        </main>
      </div>
      <Footer />
    </div>
  );
}
