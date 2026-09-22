import React from 'react';
import { DollarSign, Users, Award, ShieldCheck } from 'lucide-react';

export function MetricsBand() {
  const metrics = [
    {
      id: 'aum-metric',
      stat: '$11.16B+',
      label: 'Global Assets Overseen',
      sublabel: 'Institutional-grade custody & fiduciary mandates',
      icon: DollarSign,
    },
    {
      id: 'families-metric',
      stat: '13,941+',
      label: 'High-Net-Worth Client Families',
      sublabel: 'Multi-generational relationships built on trust',
      icon: Users,
    },
    {
      id: 'heritage-metric',
      stat: '30+ Years',
      label: 'Global Track Record & Heritage',
      sublabel: 'Proven resilience through market cycles',
      icon: Award,
    },
    {
      id: 'regulatory-metric',
      stat: 'FCA Regulated',
      label: 'Authorised UK Entity',
      sublabel: 'FCA Reference Number: 1033886',
      icon: ShieldCheck,
    },
  ];

  return (
    <section
      aria-label="Institutional Scale Metrics"
      className="w-full bg-[#F8F5EF] border-y border-[#CDAB7D]/40 py-10 sm:py-14"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#CDAB7D]/40">
          {metrics.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                id={item.id}
                className={`flex flex-col justify-center py-6 sm:py-2 px-4 sm:px-6 lg:px-8 ${
                  index !== 0 ? 'sm:pl-6 lg:pl-8' : ''
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-sm bg-[#FFFFFF] border border-[#CDAB7D]/50 flex items-center justify-center shrink-0 shadow-xs">
                    <IconComponent className="w-4 h-4 text-[#B3742D]" />
                  </div>
                  <span className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-[#B3742D] tracking-tight">
                    {item.stat}
                  </span>
                </div>
                <h3 className="font-semibold text-sm text-[#252525] uppercase tracking-wider">
                  {item.label}
                </h3>
                <p className="text-xs text-[#5F5F5F] mt-1 leading-relaxed">
                  {item.sublabel}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
