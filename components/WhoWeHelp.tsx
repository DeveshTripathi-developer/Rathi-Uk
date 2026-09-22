'use client';

import React, { useState } from 'react';
import { PERSONAS } from '@/lib/data';
import { Shield, Sparkles, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';

interface WhoWeHelpProps {
  onOpenConsultation: () => void;
}

export function WhoWeHelp({ onOpenConsultation }: WhoWeHelpProps) {
  const [activeTab, setActiveTab] = useState<string>('hnw-families');

  const activePersona = PERSONAS.find((p) => p.id === activeTab) || PERSONAS[0];

  return (
    <section
      id="who-we-help"
      className="py-16 md:py-24 bg-[#FFFFFF] border-b border-[#EAD397]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EAD397] border border-[#CDAC82] rounded-sm mb-3">
            <span className="text-xs uppercase tracking-widest text-[#AF7535] font-semibold">
              WHO WE HELP
            </span>
          </div>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-[#AF7535] tracking-tight">
            Tailored Advice for Your Journey
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#AF7535] leading-relaxed">
            Every wealth journey possesses distinct complexities. We apply bespoke risk-budgeted strategies designed specifically for UK high-net-worth individuals, business founders, senior partners, and cross-border families.
          </p>
        </div>

        {/* 4 Interactive Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {PERSONAS.map((persona) => {
            const isActive = activeTab === persona.id;
            return (
              <button
                key={persona.id}
                id={`tab-${persona.id}`}
                onClick={() => setActiveTab(persona.id)}
                className={`px-4 sm:px-6 py-3 rounded-sm text-sm font-semibold transition-all duration-200 cursor-pointer border ${
                  isActive
                    ? 'bg-[#C9A66B] text-[#FFFFFF] border-[#C9A66B] shadow-sm'
                    : 'bg-[#FFFFFF] text-[#AF7535] border-[#CDAC82] hover:bg-[#EAD397]'
                }`}
              >
                {persona.title}
              </button>
            );
          })}
        </div>

        {/* Active Persona Banner & 3 Core Pillar Grid Cards (#FFFFFF cards with 1px #EAD397 border) */}
        <div className="bg-[#EAD397] border border-[#CDAC82] rounded-sm p-6 sm:p-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#CDAC82] pb-6 mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#AF7535] font-semibold">
                Strategic Focus Area
              </span>
              <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#AF7535] mt-1">
                {activePersona.title}
              </h3>
              <p className="text-sm sm:text-base text-[#AF7535] mt-1">
                {activePersona.tagline}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs bg-[#FFFFFF] text-[#AF7535] border border-[#CDAC82] px-3 py-1.5 rounded-sm font-medium">
                {activePersona.metricsHighlight}
              </span>
              <button
                onClick={onOpenConsultation}
                className="bg-[#AF7535] hover:bg-[#C9A66B] text-[#FFFFFF] text-xs font-semibold px-4 py-2 rounded-sm transition-colors flex items-center gap-1.5"
              >
                <span>Discuss Scope</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <p className="text-base text-[#AF7535] mb-8 leading-relaxed max-w-4xl">
            {activePersona.overview}
          </p>

          {/* 3 Detailed Framework Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Wealth Preservation */}
            <div className="bg-[#FFFFFF] border border-[#EAD397] rounded-sm p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-sm bg-[#EAD397] flex items-center justify-center mb-4 border border-[#CDAC82]">
                  <Shield className="w-5 h-5 text-[#AF7535]" />
                </div>
                <h4 className="font-serif font-bold text-lg text-[#AF7535] mb-2">
                  Wealth Preservation Framework
                </h4>
                <p className="text-xs text-[#AF7535] opacity-90 mb-4 leading-relaxed">
                  Mitigating downside vulnerability through capital allocation that outpaces real inflation and economic contractions.
                </p>
                <div className="space-y-2 border-t border-[#EAD397] pt-3">
                  {activePersona.challenges.map((c, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#AF7535]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C9A66B] mt-1 shrink-0" />
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 2: Succession & Governance */}
            <div className="bg-[#FFFFFF] border border-[#EAD397] rounded-sm p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-sm bg-[#EAD397] flex items-center justify-center mb-4 border border-[#CDAC82]">
                  <Sparkles className="w-5 h-5 text-[#AF7535]" />
                </div>
                <h4 className="font-serif font-bold text-lg text-[#AF7535] mb-2">
                  Succession & Governance Framework
                </h4>
                <p className="text-xs text-[#AF7535] opacity-90 mb-4 leading-relaxed">
                  Structuring generational continuity, trust architecture, and smooth transfer with minimal friction and tax leakage.
                </p>
                <div className="space-y-2 border-t border-[#EAD397] pt-3">
                  {activePersona.solutions.map((s, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#AF7535]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A66B] mt-0.5 shrink-0" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 3: Structured Risk & Deliverables */}
            <div className="bg-[#FFFFFF] border border-[#EAD397] rounded-sm p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-sm bg-[#EAD397] flex items-center justify-center mb-4 border border-[#CDAC82]">
                  <TrendingUp className="w-5 h-5 text-[#AF7535]" />
                </div>
                <h4 className="font-serif font-bold text-lg text-[#AF7535] mb-2">
                  Structured Risk & Advisory Mandate
                </h4>
                <p className="text-xs text-[#AF7535] opacity-90 mb-4 leading-relaxed">
                  Institutional oversight with concrete portfolio deliverables tailored strictly to FCA compliance parameters.
                </p>
                <div className="space-y-2 border-t border-[#EAD397] pt-3">
                  {activePersona.deliverables.map((d, i) => (
                    <div key={i} className="flex items-center justify-between text-xs text-[#AF7535] p-2 bg-[#EAD397] bg-opacity-30 rounded-sm">
                      <span className="font-medium">{d}</span>
                      <span className="text-[#C9A66B] font-mono text-[10px]">INCLUDED</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
