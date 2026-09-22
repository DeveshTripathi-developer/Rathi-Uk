'use client';

import React from 'react';
import { ShieldAlert, Landmark, Phone, Mail, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#AF7535] text-[#EAD397] border-t-2 border-[#CDAC82]">
      {/* Upper Footer: Branding, Links, and Contact */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Brand & London Office (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <span className="font-serif font-bold text-2xl text-[#FFFFFF] tracking-tight block">
                Anand Rathi Wealth UK
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-[#EAD397] font-medium">
                Private Wealth Management • City of London
              </span>
            </div>
            <p className="text-sm text-[#EAD397] leading-relaxed max-w-md opacity-90">
              A disciplined, data-led wealth management practice for families who value institutional-quality oversight, long-term stewardship, and uncompromising accountability.
            </p>
            <div className="pt-2 text-xs text-[#CDAC82] space-y-1">
              <div className="flex items-center gap-2">
                <Landmark className="w-3.5 h-3.5 text-[#EAD397]" />
                <span className="text-[#EAD397]">Octagon Point, 5 Cheapside, City of London, EC2V 6AA</span>
              </div>
              <div className="flex items-center gap-4 pt-1">
                <a href="tel:+442079460920" className="hover:text-[#FFFFFF] flex items-center gap-1.5 text-[#EAD397]">
                  <Phone className="w-3 h-3 text-[#EAD397]" />
                  +44 (0) 20 7946 0920
                </a>
                <span className="text-[#CDAC82]">|</span>
                <a href="mailto:london@anandrathiwealth.co.uk" className="hover:text-[#FFFFFF] flex items-center gap-1.5 text-[#EAD397]">
                  <Mail className="w-3 h-3 text-[#EAD397]" />
                  london@anandrathiwealth.co.uk
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#FFFFFF] border-b border-[#CDAC82] pb-2">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#EAD397]">
              <li><a href="#our-story" className="hover:text-[#FFFFFF] transition-colors">Our Story</a></li>
              <li><a href="#who-we-help" className="hover:text-[#FFFFFF] transition-colors">Who We Help</a></li>
              <li><a href="#thought-process" className="hover:text-[#FFFFFF] transition-colors">Thought Process</a></li>
              <li><a href="#leadership" className="hover:text-[#FFFFFF] transition-colors">Leadership</a></li>
              <li><a href="#wealth-calculator" className="hover:text-[#FFFFFF] transition-colors">Wealth Calculator</a></li>
              <li><a href="#faqs" className="hover:text-[#FFFFFF] transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Col 3: Who We Help (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#FFFFFF] border-b border-[#CDAC82] pb-2">
              Private Client Focus
            </h4>
            <ul className="space-y-2 text-xs text-[#EAD397]">
              <li><a href="#who-we-help" className="hover:text-[#FFFFFF] transition-colors">High-Net-Worth Families</a></li>
              <li><a href="#who-we-help" className="hover:text-[#FFFFFF] transition-colors">Entrepreneurs & Business Owners</a></li>
              <li><a href="#who-we-help" className="hover:text-[#FFFFFF] transition-colors">Senior Partners & Executives</a></li>
              <li><a href="#who-we-help" className="hover:text-[#FFFFFF] transition-colors">Cross-Border & NRI Wealth</a></li>
              <li><a href="#who-we-help" className="hover:text-[#FFFFFF] transition-colors">Estate & Succession Governance</a></li>
            </ul>
          </div>

          {/* Col 4: Back to top and quick info (2 cols) */}
          <div className="lg:col-span-2 space-y-4 text-right sm:text-left lg:text-right">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#EAD397] text-[#AF7535] text-xs font-bold rounded-sm hover:bg-[#FFFFFF] transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
            <p className="text-[11px] text-[#CDAC82] leading-tight">
              London Headquarters open Mon–Fri 08:30–18:00 GMT
            </p>
          </div>
        </div>

        {/* MANDATORY RISK DISCLOSURE BANNER */}
        <div className="mt-10 p-5 rounded-sm bg-[#FFFFFF] text-[#AF7535] border border-[#CDAC82] space-y-2">
          <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-[#AF7535]">
            <ShieldAlert className="w-4 h-4 text-[#C9A66B] shrink-0" />
            <span>Mandatory FCA Risk & Regulatory Warning</span>
          </div>
          <p className="text-xs leading-relaxed font-medium">
            <span className="font-bold">Capital at Risk:</span> Investment values can fall as well as rise, and you may get back less than you originally invested. Past performance is not a reliable indicator of future results. The value of investments and any income derived from them can vary and cannot be guaranteed. Tax treatment depends on individual circumstances and may be subject to future change.
          </p>
        </div>

        {/* REGISTERED DETAILS & COPYRIGHT */}
        <div className="mt-8 pt-6 border-t border-[#CDAC82] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#CDAC82]">
          <div className="text-center md:text-left leading-relaxed">
            <p className="text-[#EAD397]">
              Anand Rathi Wealth UK Limited is authorised and regulated by the Financial Conduct Authority (FCA Ref: 1033886). Registered in England (Company No: 16223861).
            </p>
            <p className="mt-1 text-[11px] text-[#CDAC82]">
              Registered Office: Octagon Point, 5 Cheapside, City of London, London, England, EC2V 6AA.
            </p>
          </div>
          <div className="shrink-0 text-center md:text-right text-[11px] text-[#CDAC82]">
            © {new Date().getFullYear()} Anand Rathi Wealth UK Limited. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
