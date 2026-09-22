'use client';

import React from 'react';
import { ShieldAlert, Landmark, Phone, Mail, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#F8F5EF] text-[#252525] border-t-2 border-[#CDAB7D]/50">
      {/* Upper Footer: Branding, Links, and Contact */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Brand & London Office (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <span className="font-serif font-bold text-2xl text-[#252525] tracking-tight block">
                Anand Rathi Wealth UK
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-[#B3742D] font-semibold">
                Private Wealth Management • City of London
              </span>
            </div>
            <p className="text-sm text-[#5F5F5F] leading-relaxed max-w-md">
              A disciplined, data-led wealth management practice for families who value institutional-quality oversight, long-term stewardship, and uncompromising accountability.
            </p>
            <div className="pt-2 text-xs text-[#5F5F5F] space-y-2">
              <div className="flex items-center gap-2">
                <Landmark className="w-4 h-4 text-[#B3742D] shrink-0" />
                <span className="text-[#252525] font-medium">Octagon Point, 5 Cheapside, City of London, EC2V 6AA</span>
              </div>
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <a href="tel:+442079460920" className="hover:text-[#B3742D] flex items-center gap-1.5 text-[#5F5F5F] transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#B3742D]" />
                  <span>+44 (0) 20 7946 0920</span>
                </a>
                <span className="text-[#CDAB7D]">|</span>
                <a href="mailto:london@anandrathiwealth.co.uk" className="hover:text-[#B3742D] flex items-center gap-1.5 text-[#5F5F5F] transition-colors">
                  <Mail className="w-3.5 h-3.5 text-[#B3742D]" />
                  <span>london@anandrathiwealth.co.uk</span>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#252525] border-b border-[#CDAB7D]/40 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#5F5F5F]">
              <li><a href="#our-story" className="hover:text-[#B3742D] transition-colors">Our Story</a></li>
              <li><a href="#who-we-help" className="hover:text-[#B3742D] transition-colors">Who We Help</a></li>
              <li><a href="#thought-process" className="hover:text-[#B3742D] transition-colors">Thought Process</a></li>
              <li><a href="#leadership" className="hover:text-[#B3742D] transition-colors">Leadership</a></li>
              <li><a href="#wealth-calculator" className="hover:text-[#B3742D] transition-colors">Wealth Calculator</a></li>
              <li><a href="#faqs" className="hover:text-[#B3742D] transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Col 3: Who We Help (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#252525] border-b border-[#CDAB7D]/40 pb-2">
              Private Client Focus
            </h4>
            <ul className="space-y-2 text-xs text-[#5F5F5F]">
              <li><a href="#who-we-help" className="hover:text-[#B3742D] transition-colors">High-Net-Worth Families</a></li>
              <li><a href="#who-we-help" className="hover:text-[#B3742D] transition-colors">Entrepreneurs & Business Owners</a></li>
              <li><a href="#who-we-help" className="hover:text-[#B3742D] transition-colors">Senior Partners & Executives</a></li>
              <li><a href="#who-we-help" className="hover:text-[#B3742D] transition-colors">Cross-Border & NRI Wealth</a></li>
              <li><a href="#who-we-help" className="hover:text-[#B3742D] transition-colors">Estate & Succession Governance</a></li>
            </ul>
          </div>

          {/* Col 4: Back to top and quick info (2 cols) */}
          <div className="lg:col-span-2 space-y-4 text-right sm:text-left lg:text-right">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#FFFFFF] text-[#252525] border border-[#CDAB7D]/40 text-xs font-bold rounded-sm hover:bg-[#B3742D] hover:text-[#FFFFFF] hover:border-[#B3742D] transition-all cursor-pointer shadow-2xs"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
            <p className="text-[11px] text-[#5F5F5F] leading-tight">
              London Headquarters open Mon–Fri 08:30–18:00 GMT
            </p>
          </div>
        </div>

        {/* MANDATORY RISK DISCLOSURE BANNER */}
        <div className="mt-10 p-5 rounded-sm bg-[#FFFFFF] text-[#252525] border border-[#CDAB7D]/40 shadow-2xs space-y-2">
          <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-[#B3742D]">
            <ShieldAlert className="w-4 h-4 text-[#B3742D] shrink-0" />
            <span>Mandatory FCA Risk & Regulatory Warning</span>
          </div>
          <p className="text-xs leading-relaxed text-[#5F5F5F]">
            <span className="font-bold text-[#252525]">Capital at Risk:</span> Investment values can fall as well as rise, and you may get back less than you originally invested. Past performance is not a reliable indicator of future results. The value of investments and any income derived from them can vary and cannot be guaranteed. Tax treatment depends on individual circumstances and may be subject to future change.
          </p>
        </div>

        {/* REGISTERED DETAILS & COPYRIGHT */}
        <div className="mt-8 pt-6 border-t border-[#CDAB7D]/30 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#5F5F5F]">
          <div className="text-center md:text-left leading-relaxed">
            <p className="text-[#252525] font-medium">
              Anand Rathi Wealth UK Limited is authorised and regulated by the Financial Conduct Authority (FCA Ref: 1033886). Registered in England (Company No: 16223861).
            </p>
            <p className="mt-1 text-[11px] text-[#5F5F5F]">
              Registered Office: Octagon Point, 5 Cheapside, City of London, London, England, EC2V 6AA.
            </p>
          </div>
          <div className="shrink-0 text-center md:text-right text-[11px] text-[#5F5F5F]">
            © {new Date().getFullYear()} Anand Rathi Wealth UK Limited. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
