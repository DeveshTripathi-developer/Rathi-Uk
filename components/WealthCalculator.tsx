'use client';

import React, { useState, useMemo } from 'react';
import { Calculator, TrendingUp, Sparkles, ArrowRight, Info, PieChart } from 'lucide-react';

interface WealthCalculatorProps {
  onOpenConsultation: () => void;
}

type MandateType = 'conservative' | 'balanced' | 'growth';

interface MandateConfig {
  id: MandateType;
  title: string;
  rate: number;
  description: string;
  allocation: string;
}

const MANDATES: MandateConfig[] = [
  {
    id: 'conservative',
    title: 'Conservative Mandate',
    rate: 0.055,
    description: 'Capital preservation focused; fixed-income bias with high quality sovereign & corporate credit.',
    allocation: '70% Debt / Credit • 30% Equities',
  },
  {
    id: 'balanced',
    title: 'Balanced Mandate',
    rate: 0.082,
    description: 'Disciplined multi-asset approach balancing capital appreciation with measured volatility controls.',
    allocation: '55% Equities • 40% Fixed Income • 5% Real Assets',
  },
  {
    id: 'growth',
    title: 'Growth Mandate',
    rate: 0.105,
    description: 'Long-term equity compounding for multi-decade horizons and generational wealth expansion.',
    allocation: '85% Global Equities • 15% Alternatives',
  },
];

export function WealthCalculator({ onOpenConsultation }: WealthCalculatorProps) {
  const [initialInvestment, setInitialInvestment] = useState<number>(1000000); // £1,000,000 default
  const [annualContribution, setAnnualContribution] = useState<number>(50000); // £50,000
  const [years, setYears] = useState<number>(15);
  const [selectedMandate, setSelectedMandate] = useState<MandateType>('balanced');

  const currentMandate = MANDATES.find((m) => m.id === selectedMandate) || MANDATES[1];

  // Mathematical Calculation
  const calculation = useMemo(() => {
    const r = currentMandate.rate;
    const P = initialInvestment;
    const PMT = annualContribution;
    const n = years;

    // Future value of lump sum: P * (1 + r)^n
    const fvPrincipal = P * Math.pow(1 + r, n);
    // Future value of annuity: PMT * [((1 + r)^n - 1) / r]
    const fvContributions = PMT > 0 ? (PMT * (Math.pow(1 + r, n) - 1)) / r : 0;
    const totalProjected = fvPrincipal + fvContributions;
    const totalInvested = P + PMT * n;
    const totalGrowth = totalProjected - totalInvested;

    // Timeline milestones
    const milestones = [5, 10, 15, 20, 25, 30]
      .filter((yr) => yr <= Math.max(years, 10))
      .map((yr) => {
        const valPrincipal = P * Math.pow(1 + r, yr);
        const valContrib = PMT > 0 ? (PMT * (Math.pow(1 + r, yr) - 1)) / r : 0;
        return {
          year: yr,
          invested: P + PMT * yr,
          projected: Math.round(valPrincipal + valContrib),
        };
      });

    return {
      totalProjected: Math.round(totalProjected),
      totalInvested: Math.round(totalInvested),
      totalGrowth: Math.round(totalGrowth),
      growthMultiple: (totalProjected / totalInvested).toFixed(2),
      milestones,
    };
  }, [initialInvestment, annualContribution, years, currentMandate]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section
      id="wealth-calculator"
      className="py-16 md:py-24 bg-[#FFFFFF] border-b border-[#EAD397]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EAD397] border border-[#CDAC82] rounded-sm mb-3">
            <Calculator className="w-3.5 h-3.5 text-[#AF7535]" />
            <span className="text-xs uppercase tracking-widest text-[#AF7535] font-semibold">
              INTERACTIVE MODELLING
            </span>
          </div>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-[#AF7535] tracking-tight">
            Wealth Growth & Projection Engine
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#AF7535] opacity-90 leading-relaxed">
            Examine how disciplined, data-backed asset allocation compounds private family capital over 5 to 30 year horizons under distinct risk mandates.
          </p>
        </div>

        {/* Calculator Main Layout */}
        <div className="bg-[#EAD397] border border-[#CDAC82] rounded-sm p-6 sm:p-8 lg:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Controls Column (5 cols) */}
            <div className="lg:col-span-6 bg-[#FFFFFF] border border-[#CDAC82] rounded-sm p-6 sm:p-7 space-y-6">
              <div className="border-b border-[#EAD397] pb-4 flex items-center justify-between">
                <span className="font-serif font-bold text-lg text-[#AF7535]">
                  Portfolio Assumptions
                </span>
                <span className="text-xs font-mono text-[#C9A66B]">
                  FCA-Aligned Model
                </span>
              </div>

              {/* Input 1: Initial Liquid Portfolio */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <label htmlFor="initial-inv-slider" className="font-semibold text-[#AF7535]">
                    Initial Investable Capital
                  </label>
                  <span className="font-mono font-bold text-sm text-[#AF7535]">
                    {formatCurrency(initialInvestment)}
                  </span>
                </div>
                <input
                  id="initial-inv-slider"
                  type="range"
                  min="250000"
                  max="10000000"
                  step="50000"
                  value={initialInvestment}
                  onChange={(e) => setInitialInvestment(Number(e.target.value))}
                  className="w-full accent-[#AF7535] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-[#CDAC82]">
                  <span>£250,000</span>
                  <span>£5,000,000</span>
                  <span>£10,000,000+</span>
                </div>
              </div>

              {/* Input 2: Annual Capital Addition */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <label htmlFor="annual-contrib-slider" className="font-semibold text-[#AF7535]">
                    Annual Reinvestment / Surplus
                  </label>
                  <span className="font-mono font-bold text-sm text-[#AF7535]">
                    {formatCurrency(annualContribution)}
                  </span>
                </div>
                <input
                  id="annual-contrib-slider"
                  type="range"
                  min="0"
                  max="500000"
                  step="10000"
                  value={annualContribution}
                  onChange={(e) => setAnnualContribution(Number(e.target.value))}
                  className="w-full accent-[#AF7535] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-[#CDAC82]">
                  <span>£0 (None)</span>
                  <span>£250,000</span>
                  <span>£500,000 / yr</span>
                </div>
              </div>

              {/* Input 3: Horizon (Years) */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <label htmlFor="horizon-slider" className="font-semibold text-[#AF7535]">
                    Stewardship Horizon
                  </label>
                  <span className="font-mono font-bold text-sm text-[#AF7535]">
                    {years} Years
                  </span>
                </div>
                <input
                  id="horizon-slider"
                  type="range"
                  min="5"
                  max="30"
                  step="1"
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full accent-[#AF7535] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-[#CDAC82]">
                  <span>5 Years</span>
                  <span>15 Years</span>
                  <span>30 Years</span>
                </div>
              </div>

              {/* Mandate Selector (3 Options) */}
              <div className="space-y-2 pt-2 border-t border-[#EAD397]">
                <label className="block text-xs font-semibold text-[#AF7535]">
                  Select Risk & Return Mandate
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {MANDATES.map((m) => {
                    const isSelected = selectedMandate === m.id;
                    return (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => setSelectedMandate(m.id)}
                        className={`p-2.5 rounded-sm text-left border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#C9A66B] text-[#FFFFFF] border-[#C9A66B] shadow-xs'
                            : 'bg-[#FFFFFF] text-[#AF7535] border-[#CDAC82] hover:bg-[#EAD397]'
                        }`}
                      >
                        <div className="text-[11px] font-bold truncate">{m.title.split(' ')[0]}</div>
                        <div className="text-xs font-mono font-bold mt-0.5">
                          {(m.rate * 100).toFixed(1)}% p.a.
                        </div>
                      </button>
                    );
                  })}
                </div>
                <div className="p-3 bg-[#EAD397] bg-opacity-40 border border-[#CDAC82] rounded-sm text-[11px] text-[#AF7535] space-y-1 mt-2">
                  <p className="font-semibold">{currentMandate.title} ({(currentMandate.rate * 100).toFixed(1)}% Annualized)</p>
                  <p className="text-[11px] opacity-90">{currentMandate.description}</p>
                  <p className="text-[10px] font-mono text-[#C9A66B] pt-1">Allocation: {currentMandate.allocation}</p>
                </div>
              </div>
            </div>

            {/* Right Output & Projection Cards (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              {/* Primary Metric Card */}
              <div className="bg-[#FFFFFF] border-2 border-[#AF7535] rounded-sm p-6 sm:p-7 shadow-md">
                <div className="flex items-center justify-between border-b border-[#EAD397] pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#C9A66B]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#AF7535]">
                      Projected Portfolio Value at Year {years}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[#C9A66B] font-semibold bg-[#EAD397] px-2 py-0.5 rounded-sm">
                    {calculation.growthMultiple}x Multiple
                  </span>
                </div>

                <div className="font-serif font-black text-3xl sm:text-4xl lg:text-5xl text-[#AF7535] tracking-tight">
                  {formatCurrency(calculation.totalProjected)}
                </div>

                {/* Breakdown bars */}
                <div className="mt-6 pt-4 border-t border-[#EAD397] grid grid-cols-2 gap-4">
                  <div className="p-3 bg-[#EAD397] bg-opacity-30 border border-[#CDAC82] rounded-sm">
                    <div className="text-[11px] text-[#AF7535] font-semibold">Total Net Contributed</div>
                    <div className="text-base font-serif font-bold text-[#AF7535] mt-0.5">
                      {formatCurrency(calculation.totalInvested)}
                    </div>
                  </div>

                  <div className="p-3 bg-[#AF7535] text-[#FFFFFF] rounded-sm">
                    <div className="text-[11px] text-[#EAD397] font-semibold">Compound Growth Added</div>
                    <div className="text-base font-serif font-bold text-[#FFFFFF] mt-0.5">
                      +{formatCurrency(calculation.totalGrowth)}
                    </div>
                  </div>
                </div>

                {/* Milestone Progression Table */}
                <div className="mt-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#AF7535] mb-2 flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-[#C9A66B]" />
                    <span>Projected Milestones</span>
                  </div>
                  <div className="border border-[#CDAC82] rounded-sm overflow-hidden text-xs">
                    <div className="grid grid-cols-3 bg-[#EAD397] p-2 font-semibold text-[#AF7535] border-b border-[#CDAC82]">
                      <span>Horizon</span>
                      <span>Invested</span>
                      <span className="text-right">Projected Value</span>
                    </div>
                    {calculation.milestones.slice(0, 4).map((m) => (
                      <div
                        key={m.year}
                        className="grid grid-cols-3 p-2 border-b border-[#EAD397] last:border-b-0 text-[#AF7535] hover:bg-[#EAD397] hover:bg-opacity-20 transition-colors"
                      >
                        <span className="font-medium">Year {m.year}</span>
                        <span>{formatCurrency(m.invested)}</span>
                        <span className="text-right font-serif font-bold text-[#AF7535]">
                          {formatCurrency(m.projected)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Action */}
                <div className="mt-6 pt-4 border-t border-[#EAD397] flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5 text-[11px] text-[#AF7535]">
                    <Info className="w-3.5 h-3.5 text-[#C9A66B] shrink-0" />
                    <span>Model excludes tax exemptions. Custom simulation available.</span>
                  </div>
                  <button
                    onClick={onOpenConsultation}
                    className="w-full sm:w-auto bg-[#AF7535] hover:bg-[#C9A66B] text-[#FFFFFF] text-xs font-semibold px-4 py-2.5 rounded-sm transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <span>Request Bespoke Run</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Regulatory Risk Disclaimer for Model */}
              <div className="p-3.5 bg-[#FFFFFF] border border-[#CDAC82] rounded-sm text-[11px] text-[#AF7535] leading-relaxed">
                <span className="font-bold">Illustrative Modeling Only:</span> Projected figures are based on mathematical compounded return assumptions and do not guarantee future performance. Capital is at risk. Actual investment returns will fluctuate according to market conditions and personal tax residency.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
