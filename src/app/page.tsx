'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrioSection from '@/components/TrioSection';
import WorksSection from '@/components/WorksSection';
import FAQSection from '@/components/FAQSection';
import LeadSection from '@/components/LeadSection';
import Footer from '@/components/Footer';

export default function Home() {
  const [selectedLeadTarget, setSelectedLeadTarget] = useState<'all' | 'bayu' | 'fadil' | 'igo'>('all');

  const handleSelectLeadFor = (memberId: 'bayu' | 'fadil' | 'igo') => {
    setSelectedLeadTarget(memberId);
    // Smooth scroll to lead form
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
          <TrioSection onSelectLeadFor={handleSelectLeadFor} />
          <WorksSection onSelectLeadFor={handleSelectLeadFor} />
          <FAQSection />
          <LeadSection
            selectedTarget={selectedLeadTarget}
            setSelectedTarget={setSelectedLeadTarget}
          />
        </main>
      </div>
      <Footer />
    </div>
  );
}
