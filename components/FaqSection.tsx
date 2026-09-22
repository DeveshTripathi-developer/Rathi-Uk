'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck } from 'lucide-react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    id: 'fca-regulation',
    question: 'How is Anand Rathi Wealth UK regulated, and what client protections apply?',
    answer:
      'Anand Rathi Wealth UK Limited is authorised and regulated by the Financial Conduct Authority (FCA Reference Number: 1033886) to conduct designated investment business in the United Kingdom. Eligible retail deposits and custody assets are safeguarded under UK regulatory client money rules and the Financial Services Compensation Scheme (FSCS) subject to statutory limits.',
  },
  {
    id: 'custody-arrangements',
    question: 'Where are client investment assets and securities held in custody?',
    answer:
      'Anand Rathi Wealth UK maintains an uncompromised open-architecture model. Client assets are held in segregated, ring-fenced nominee accounts with tier-one UK institutional custodians and clearing platforms. We never commingle client capital with firm operational assets.',
  },
  {
    id: 'minimum-portfolio',
    question: 'What is your typical investment portfolio threshold for private clients?',
    answer:
      'Our bespoke private wealth stewardship is designed for high-net-worth families, senior partners, business owners, and global citizens with liquid investable capital typically starting from £250,000 up to £10M+. We also cater to family offices with consolidated multi-asset mandates.',
  },
  {
    id: 'cross-border-nri',
    question: 'Do you provide guidance for Non-Resident Indians (NRIs) and international assets?',
    answer:
      'Yes. Drawing on our global group heritage spanning over 30 years and $11.16B+ in overseen assets, we offer specialized cross-border asset coordination. We help clients navigate UK-India Double Taxation Avoidance Agreements (DTAA), remittance guidelines, and succession structuring under evolving UK non-dom regulations.',
  },
  {
    id: 'fee-structure',
    question: 'How are fees structured, and do you receive third-party product commissions?',
    answer:
      'We operate on a strictly transparent, fee-only fiduciary model. We do not accept hidden commissions, retrocessions, or inducements from fund houses or product providers. Our fees are fully disclosed upfront as an agreed percentage of assets under management, ensuring zero conflict of interest.',
  },
];

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>('fca-regulation');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-16 md:py-24 bg-[#FFFFFF] border-b border-[#CDAB7D]/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F8F5EF] border border-[#CDAB7D]/50 rounded-sm mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#B3742D]" />
            <span className="text-xs uppercase tracking-widest text-[#B3742D] font-semibold">
              TRANSPARENCY & GOVERNANCE
            </span>
          </div>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-[#252525] tracking-tight">
            Frequently Addressed Questions
          </h2>
          <p className="mt-3 text-base text-[#5F5F5F] leading-relaxed">
            Clear, unambiguous insights into our regulatory oversight, asset custody, and fiduciary protocols.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className="bg-[#FFFFFF] border border-[#CDAB7D]/40 rounded-sm transition-all duration-200 shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif font-bold text-base sm:text-lg text-[#252525]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-sm flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-[#B3742D] text-[#FFFFFF] rotate-180'
                        : 'bg-[#F8F5EF] text-[#B3742D] border border-[#CDAB7D]/30'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-sm text-[#5F5F5F] leading-relaxed border-t border-[#CDAB7D]/20 pt-4">
                    <p>{faq.answer}</p>
                    <div className="mt-3 flex items-center gap-1.5 text-xs text-[#B3742D] font-medium">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>FCA Compliance Standard Verified</span>
                    </div>
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
