'use client';

import React from 'react';
import { ArrowRight, Building2, Landmark, Compass, ShieldCheck } from 'lucide-react';

interface HeroSectionProps {
  onOpenConsultation: () => void;
}

export function HeroSection({ onOpenConsultation }: HeroSectionProps) {
  return (
    <section
      id="our-story"
      className="relative bg-[#FFFFFF] pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden border-b border-[#CDAB7D]/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-[#F8F5EF] border border-[#CDAB7D]/50">
              <div className="w-1.5 h-1.5 rounded-full bg-[#B3742D]" />
              <span className="text-xs uppercase tracking-widest text-[#B3742D] font-semibold">
                ANAND RATHI WEALTH UK
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-[#252525] leading-[1.12] tracking-tight">
              Private Wealth.{' '}
              <span className="italic font-normal block sm:inline text-[#B3742D]">
                Uncomplicated.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-[#5F5F5F] leading-relaxed max-w-2xl font-light">
              A disciplined, data-led wealth management approach for families who value institutional-quality oversight, long-term stewardship, and uncompromising accountability in the UK.
            </p>

            {/* Dual CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenConsultation}
                id="hero-schedule-btn"
                className="bg-[#B3742D] hover:bg-[#7C4C21] text-[#FFFFFF] font-semibold text-base px-7 py-3.5 rounded-sm shadow-xs transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#B3742D]"
              >
                <span>Schedule Private Consultation</span>
                <ArrowRight className="w-4 h-4 text-[#FFFFFF]" />
              </button>

              <a
                href="#thought-process"
                id="hero-explore-philosophy-btn"
                className="border border-[#CDAB7D] hover:border-[#B3742D] hover:bg-[#F8F5EF] text-[#252525] font-semibold text-base px-7 py-3.5 rounded-sm transition-all duration-200 text-center flex items-center justify-center gap-2"
              >
                <span>Explore Our Philosophy</span>
              </a>
            </div>

            {/* Micro Trust Proof */}
            <div className="pt-6 border-t border-[#CDAB7D]/30 flex flex-wrap items-center gap-6 text-xs text-[#5F5F5F]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#B3742D]" />
                <span>FCA Authorised (Ref: 1033886)</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#B3742D]" />
                <span>City of London Presence</span>
              </div>
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#B3742D]" />
                <span>Zero Conflict Fiduciary Mandate</span>
              </div>
            </div>
          </div>

          {/* Right Visual Block */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer frame with warm border */}
              <div className="relative rounded-sm border-2 border-[#CDAB7D]/60 p-4 bg-[#FFFFFF] shadow-sm">
                {/* Inner architectural visual frame */}
                <div className="relative bg-[#F8F5EF] border border-[#CDAB7D]/40 p-6 sm:p-8 rounded-sm overflow-hidden text-[#252525]">
                  <div className="space-y-6">
                    {/* Header badge */}
                    <div className="flex items-center justify-between border-b border-[#CDAB7D]/40 pb-4">
                      <div className="flex items-center gap-2">
                        <Landmark className="w-5 h-5 text-[#B3742D]" />
                        <span className="font-serif font-bold text-sm tracking-wide text-[#252525]">
                          City of London Office
                        </span>
                      </div>
                      <span className="text-xs uppercase font-mono font-bold tracking-wider text-[#B3742D]">
                        EC2V 6AA
                      </span>
                    </div>

                    {/* St Paul's Architectural Motif */}
                    <div className="relative h-44 rounded-sm border border-[#CDAB7D]/40 bg-[#FFFFFF] p-4 flex flex-col justify-between overflow-hidden shadow-xs">
                      <div className="flex items-center justify-between z-10 text-xs">
                        <span className="text-[#252525] font-semibold">Octagon Point • 5 Cheapside</span>
                        <span className="text-[#5F5F5F] font-mono text-[10px]">51.5138° N, 0.0934° W</span>
                      </div>

                      {/* City skyline illustration */}
                      <svg
                        className="absolute inset-0 w-full h-full opacity-30 text-[#B3742D]"
                        viewBox="0 0 400 160"
                        fill="none"
                        stroke="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* Ground line */}
                        <line x1="0" y1="140" x2="400" y2="140" strokeWidth="1.5" />

                        {/* St Paul's Cathedral Dome Motif */}
                        <path
                          d="M120 140 V100 H140 V75 Q160 50 180 75 V100 H200 V140"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M150 75 Q160 40 170 75"
                          strokeWidth="1.5"
                        />
                        <line x1="160" y1="40" x2="160" y2="28" strokeWidth="1.5" />
                        <line x1="156" y1="32" x2="164" y2="32" strokeWidth="1.5" />

                        {/* Columns under dome */}
                        <line x1="148" y1="85" x2="148" y2="100" strokeWidth="1" />
                        <line x1="156" y1="85" x2="156" y2="100" strokeWidth="1" />
                        <line x1="164" y1="85" x2="164" y2="100" strokeWidth="1" />
                        <line x1="172" y1="85" x2="172" y2="100" strokeWidth="1" />

                        {/* Modern City of London Angular Architecture */}
                        <path
                          d="M210 140 V60 L260 40 L290 60 V140"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />
                        <line x1="260" y1="40" x2="260" y2="140" strokeWidth="1" strokeDasharray="4 2" />
                        <line x1="210" y1="80" x2="290" y2="75" strokeWidth="1" strokeDasharray="3 2" />
                        <line x1="210" y1="100" x2="290" y2="95" strokeWidth="1" strokeDasharray="3 2" />

                        {/* Financial District Spire */}
                        <polygon points="320,120 335,15 350,120" strokeWidth="1.2" />
                        <line x1="335" y1="15" x2="335" y2="5" stroke="#B3742D" strokeWidth="1.5" />
                      </svg>

                      {/* Coordinates & Footprint bar */}
                      <div className="flex items-center justify-between text-[11px] border-t border-[#CDAB7D]/30 pt-2 z-10 text-[#5F5F5F]">
                        <span className="font-semibold text-[#252525]">Bespoke London Private Wealth Office</span>
                        <span className="text-[#B3742D] font-medium">In-Person & Hybrid</span>
                      </div>
                    </div>

                    {/* Institutional quote box */}
                    <div className="bg-[#FFFFFF] border border-[#CDAB7D]/30 p-3.5 rounded-sm">
                      <p className="text-xs text-[#5F5F5F] italic leading-relaxed">
                        “Operating from the historic heart of London finance, delivering unbiased stewardship with zero conflict of interest.”
                      </p>
                    </div>
                  </div>
                </div>

                {/* Corner ornamental accents */}
                <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-[#B3742D]" />
                <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-[#B3742D]" />
                <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-[#B3742D]" />
                <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-[#B3742D]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
