'use client';

import React from 'react';
import { Scale, FileText, BarChart3, Eye } from 'lucide-react';

export function PhilosophyPillars() {
  const pillars = [
    {
      id: 'fearless-counsel',
      number: '01',
      title: 'Fearless Counsel',
      summary: 'Honest, unbiased financial advice without fear.',
      description:
        'We speak the unvarnished truth about risk, costs, and market expectations. We do not sell proprietary products or chase speculative fads. Our recommendations are uncompromised and solely aligned with your family’s balance sheet.',
      icon: Scale,
    },
    {
      id: 'simplified-reporting',
      number: '02',
      title: 'Simplified Reporting',
      summary: 'Crystal-clear visibility into holdings, returns, and net fees.',
      description:
        'HNW portfolios suffer from deliberate industry opacity. We deliver unified, plain-English performance audits that strip out jargon and highlight net returns after every basis point of cost.',
      icon: FileText,
    },
    {
      id: 'data-led-discipline',
      number: '03',
      title: 'Data-Led Discipline',
      summary: 'Mathematical rigor over emotional market timing.',
      description:
        'Every allocation decision is validated by extensive historical modeling, mathematical risk budgeting, and probability analyses. We eliminate emotional guesswork from wealth stewardship.',
      icon: BarChart3,
    },
    {
      id: 'skin-in-the-game',
      number: '04',
      title: 'Complete Transparency',
      summary: 'Zero hidden trailing fees, zero product placement kickbacks.',
      description:
        'Our fiduciary model aligns entirely with client capital preservation and growth. We operate with radical openness regarding counterparty custody, execution costs, and regulatory compliance.',
      icon: Eye,
    },
  ];

  return (
    <section
      id="thought-process"
      className="py-16 md:py-24 bg-[#FFFFFF] border-b border-[#EAD397] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EAD397] border border-[#CDAC82] rounded-sm mb-3">
            <span className="text-xs uppercase tracking-widest text-[#AF7535] font-semibold">
              OUR THOUGHT PROCESS
            </span>
          </div>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-[#AF7535] tracking-tight">
            Values That Create Trust
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#AF7535] leading-relaxed">
            Our guiding ethos is built on institutional rigor, fiduciary independence, and direct human accountability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={pillar.id}
                id={`pillar-${pillar.id}`}
                className="bg-[#FFFFFF] border border-[#CDAC82] rounded-sm p-6 sm:p-7 shadow-sm hover:border-[#AF7535] hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#EAD397]">
                    <div className="w-12 h-12 rounded-sm bg-[#EAD397] flex items-center justify-center border border-[#CDAC82] group-hover:bg-[#C9A66B] transition-colors">
                      <IconComponent className="w-6 h-6 text-[#AF7535] group-hover:text-[#FFFFFF] transition-colors" />
                    </div>
                    <span className="font-mono font-bold text-xs tracking-widest text-[#C9A66B]">
                      PILLAR {pillar.number}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-xl text-[#AF7535] mb-2">
                    {pillar.title}
                  </h3>

                  <p className="text-sm font-semibold text-[#C9A66B] mb-3">
                    {pillar.summary}
                  </p>

                  <p className="text-xs text-[#AF7535] leading-relaxed opacity-90">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#EAD397] flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#AF7535]" />
                  <span className="text-[11px] uppercase tracking-wider text-[#AF7535] font-medium">
                    Fiduciary Standard
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
