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
      className="w-full bg-[#EAD397] border-y border-[#CDAC82] py-10 sm:py-14"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#CDAC82]">
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
                  <div className="w-8 h-8 rounded-sm bg-[#FFFFFF] border border-[#CDAC82] flex items-center justify-center shrink-0">
                    <IconComponent className="w-4 h-4 text-[#AF7535]" />
                  </div>
                  <span className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-[#AF7535] tracking-tight">
                    {item.stat}
                  </span>
                </div>
                <h3 className="font-semibold text-sm text-[#AF7535] uppercase tracking-wider">
                  {item.label}
                </h3>
                <p className="text-xs text-[#AF7535] mt-1 opacity-80">
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
