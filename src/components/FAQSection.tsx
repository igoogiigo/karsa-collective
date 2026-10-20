'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface FAQItem {
  _id: string;
  question: string;
  answer: string;
}

interface FAQProps {
  initialFaqs: FAQItem[];
}

export default function FAQSection({ initialFaqs }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = initialFaqs;

  return (
    <section id="faq" className="py-24 border-b border-black/[0.06] bg-[#fbfbfa]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-medium block mb-3">
            [ 03 / Frequently Asked Questions ]
          </span>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-[#141413]">
            Pertanyaan yang <span className="font-semibold">Sering Diajukan</span>
          </h2>
          <p className="mt-3 text-sm text-neutral-600 max-w-lg mx-auto">
            Semua hal yang perlu Anda ketahui tentang cara kerja dan kolaborasi bersama kami.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq._id}
                className="rounded-2xl border border-black/[0.06] bg-white overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-neutral-50/60 transition-colors"
                >
                  <span className="text-base font-semibold text-[#141413] tracking-tight">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-neutral-900 text-white' : 'text-neutral-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-neutral-600 leading-relaxed border-t border-black/[0.03] pt-4 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
