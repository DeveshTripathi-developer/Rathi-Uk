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
      className="py-16 md:py-24 bg-[#FFFFFF] border-b border-[#CDAB7D]/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F8F5EF] border border-[#CDAB7D]/50 rounded-sm mb-3">
            <span className="text-xs uppercase tracking-widest text-[#B3742D] font-semibold">
              WHO WE HELP
            </span>
          </div>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-[#252525] tracking-tight">
            Tailored Advice for Your Journey
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5F5F5F] leading-relaxed">
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
                    ? 'bg-[#B3742D] text-[#FFFFFF] border-[#B3742D] shadow-xs'
                    : 'bg-[#FFFFFF] text-[#252525] border-[#CDAB7D]/40 hover:bg-[#F8F5EF] hover:text-[#B3742D]'
                }`}
              >
                {persona.title}
              </button>
            );
          })}
        </div>

        {/* Active Persona Banner & 3 Core Pillar Grid Cards */}
        <div className="bg-[#F8F5EF] border border-[#CDAB7D]/40 rounded-sm p-6 sm:p-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#CDAB7D]/30 pb-6 mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#B3742D] font-semibold">
                Strategic Focus Area
              </span>
              <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#252525] mt-1">
                {activePersona.title}
              </h3>
              <p className="text-sm sm:text-base text-[#5F5F5F] mt-1">
                {activePersona.tagline}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs bg-[#FFFFFF] text-[#B3742D] border border-[#CDAB7D]/40 px-3 py-1.5 rounded-sm font-medium shadow-2xs">
                {activePersona.metricsHighlight}
              </span>
              <button
                onClick={onOpenConsultation}
                className="bg-[#B3742D] hover:bg-[#7C4C21] text-[#FFFFFF] text-xs font-semibold px-4 py-2 rounded-sm transition-colors flex items-center gap-1.5 shadow-2xs"
              >
                <span>Discuss Scope</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <p className="text-base text-[#252525] mb-8 leading-relaxed max-w-4xl">
            {activePersona.overview}
          </p>

          {/* 3 Detailed Framework Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Wealth Preservation */}
            <div className="bg-[#FFFFFF] border border-[#CDAB7D]/40 rounded-sm p-6 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-sm bg-[#F8F5EF] flex items-center justify-center mb-4 border border-[#CDAB7D]/40">
                  <Shield className="w-5 h-5 text-[#B3742D]" />
                </div>
                <h4 className="font-serif font-bold text-lg text-[#252525] mb-2">
                  Wealth Preservation Framework
                </h4>
                <p className="text-xs text-[#5F5F5F] mb-4 leading-relaxed">
                  Mitigating downside vulnerability through capital allocation that outpaces real inflation and economic contractions.
                </p>
                <div className="space-y-2 border-t border-[#CDAB7D]/20 pt-3">
                  {activePersona.challenges.map((c, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#252525]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#B3742D] mt-1 shrink-0" />
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 2: Succession & Governance */}
            <div className="bg-[#FFFFFF] border border-[#CDAB7D]/40 rounded-sm p-6 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-sm bg-[#F8F5EF] flex items-center justify-center mb-4 border border-[#CDAB7D]/40">
                  <Sparkles className="w-5 h-5 text-[#B3742D]" />
                </div>
                <h4 className="font-serif font-bold text-lg text-[#252525] mb-2">
                  Succession & Governance Framework
                </h4>
                <p className="text-xs text-[#5F5F5F] mb-4 leading-relaxed">
                  Structuring generational continuity, trust architecture, and smooth transfer with minimal friction and tax leakage.
                </p>
                <div className="space-y-2 border-t border-[#CDAB7D]/20 pt-3">
                  {activePersona.solutions.map((s, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#252525]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B3742D] mt-0.5 shrink-0" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 3: Structured Risk & Deliverables */}
            <div className="bg-[#FFFFFF] border border-[#CDAB7D]/40 rounded-sm p-6 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-sm bg-[#F8F5EF] flex items-center justify-center mb-4 border border-[#CDAB7D]/40">
                  <TrendingUp className="w-5 h-5 text-[#B3742D]" />
                </div>
                <h4 className="font-serif font-bold text-lg text-[#252525] mb-2">
                  Structured Risk & Advisory Mandate
                </h4>
                <p className="text-xs text-[#5F5F5F] mb-4 leading-relaxed">
                  Institutional oversight with concrete portfolio deliverables tailored strictly to FCA compliance parameters.
                </p>
                <div className="space-y-2 border-t border-[#CDAB7D]/20 pt-3">
                  {activePersona.deliverables.map((d, i) => (
                    <div key={i} className="flex items-center justify-between text-xs text-[#252525] p-2 bg-[#F8F5EF] border border-[#CDAB7D]/30 rounded-sm">
                      <span className="font-medium">{d}</span>
                      <span className="text-[#B3742D] font-mono text-[10px]">INCLUDED</span>
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
