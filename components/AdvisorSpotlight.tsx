'use client';

import React, { useState } from 'react';
import { ADVISORS, Advisor } from '@/lib/data';
import { UserCheck, X, Quote, ChevronRight, Award, CheckCircle } from 'lucide-react';

export function AdvisorSpotlight() {
  const [selectedAdvisor, setSelectedAdvisor] = useState<Advisor | null>(null);

  return (
    <section
      id="leadership"
      className="py-16 md:py-24 bg-[#FFFFFF] border-b border-[#CDAB7D]/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F8F5EF] border border-[#CDAB7D]/50 rounded-sm mb-3">
            <span className="text-xs uppercase tracking-widest text-[#B3742D] font-semibold">
              EXECUTIVE LEADERSHIP
            </span>
          </div>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-[#252525] tracking-tight">
            Meet the People Behind Your Future
          </h2>
          <p className="mt-3 text-lg font-medium text-[#B3742D]">
            Experienced Stewardship Across Decades
          </p>
          <p className="mt-2 text-sm sm:text-base text-[#5F5F5F] max-w-2xl mx-auto leading-relaxed">
            Institutional governance led by industry veterans whose fiduciary philosophies have shaped capital markets and safeguarded family wealth across multiple generations.
          </p>
        </div>

        {/* 4 Advisor Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ADVISORS.map((advisor) => (
            <div
              key={advisor.id}
              id={`advisor-card-${advisor.id}`}
              className="bg-[#FFFFFF] border border-[#CDAB7D]/40 rounded-sm overflow-hidden shadow-xs hover:border-[#B3742D] transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Advisor Graphic Avatar Block */}
                <div className="h-48 bg-[#F8F5EF] border-b border-[#CDAB7D]/40 relative flex flex-col items-center justify-center p-4 text-center overflow-hidden">
                  <div className="w-20 h-20 rounded-full bg-[#FFFFFF] border-2 border-[#B3742D] flex items-center justify-center shadow-inner mb-3">
                    <UserCheck className="w-10 h-10 text-[#B3742D]" />
                  </div>
                  <span className="text-xs uppercase font-mono tracking-widest text-[#252525] font-semibold bg-[#FFFFFF] px-2.5 py-0.5 rounded-sm border border-[#CDAB7D]/40">
                    {advisor.role}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="font-serif font-bold text-xl text-[#252525] mb-1">
                    {advisor.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#B3742D] mb-3">
                    {advisor.title}
                  </p>
                  <p className="text-xs text-[#5F5F5F] line-clamp-3 leading-relaxed mb-4">
                    {advisor.bioSummary}
                  </p>

                  <div className="border-t border-[#CDAB7D]/20 pt-3 mb-2">
                    <div className="flex items-center gap-1.5 text-[11px] text-[#5F5F5F] font-medium">
                      <Award className="w-3.5 h-3.5 text-[#B3742D] shrink-0" />
                      <span>{advisor.experience}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Action: "Read Full Bio" button */}
              <div className="px-6 pb-6 pt-2">
                <button
                  onClick={() => setSelectedAdvisor(advisor)}
                  id={`read-bio-${advisor.id}`}
                  className="w-full text-left font-semibold text-sm text-[#252525] hover:text-[#B3742D] py-2 border-t border-[#CDAB7D]/30 flex items-center justify-between transition-colors cursor-pointer group-hover:border-[#B3742D]"
                >
                  <span>Read Full Bio</span>
                  <ChevronRight className="w-4 h-4 text-[#B3742D] group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Full Bio Modal Drawer */}
      {selectedAdvisor && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-advisor-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#252525]/80 backdrop-blur-xs"
        >
          <div className="bg-[#FFFFFF] border-2 border-[#CDAB7D]/60 w-full max-w-2xl rounded-sm shadow-2xl overflow-hidden max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="bg-[#252525] text-[#FFFFFF] px-6 py-4 flex items-center justify-between border-b border-[#CDAB7D]/40">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#F8F5EF] text-[#B3742D] flex items-center justify-center font-serif font-bold text-base border border-[#CDAB7D]/40">
                  {selectedAdvisor.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div>
                  <h3 id="modal-advisor-title" className="font-serif font-bold text-xl text-[#FFFFFF]">
                    {selectedAdvisor.name}
                  </h3>
                  <p className="text-xs text-[#CDAB7D]">
                    {selectedAdvisor.role} • {selectedAdvisor.title}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedAdvisor(null)}
                aria-label="Close Advisor Bio Modal"
                className="text-[#CDAB7D] hover:text-[#FFFFFF] p-1.5 rounded-sm hover:bg-[#333333] transition-colors focus:outline-none"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-[#252525]">
              {/* Quote Block */}
              <div className="bg-[#F8F5EF] border border-[#CDAB7D]/40 p-4 rounded-sm relative">
                <Quote className="w-5 h-5 text-[#B3742D] opacity-60 mb-1" />
                <p className="italic text-sm text-[#252525] font-serif leading-relaxed">
                  “{selectedAdvisor.quote}”
                </p>
              </div>

              {/* Bio Paragraphs */}
              <div className="space-y-3">
                <h4 className="font-serif font-bold text-base text-[#252525]">
                  Career Trajectory & Institutional Experience
                </h4>
                {selectedAdvisor.fullBio.map((paragraph, index) => (
                  <p key={index} className="text-sm leading-relaxed text-[#5F5F5F]">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Focus Areas */}
              <div className="border-t border-[#CDAB7D]/30 pt-4">
                <h4 className="font-serif font-bold text-sm text-[#252525] mb-3">
                  Core Fiduciary Focus Areas
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedAdvisor.focusAreas.map((area, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-2 bg-[#F8F5EF] border border-[#CDAB7D]/30 rounded-sm text-xs text-[#252525]"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-[#B3742D] shrink-0" />
                      <span className="font-medium">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-[#FFFFFF] border-t border-[#CDAB7D]/30 px-6 py-4 flex items-center justify-end">
              <button
                onClick={() => setSelectedAdvisor(null)}
                className="bg-[#B3742D] hover:bg-[#7C4C21] text-[#FFFFFF] text-xs font-semibold px-5 py-2.5 rounded-sm transition-colors shadow-xs"
              >
                Close Biography
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
