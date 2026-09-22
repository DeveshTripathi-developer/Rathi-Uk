'use client';

import React, { useState } from 'react';
import { ShieldCheck, Menu, X, PhoneCall, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export function Navbar({ onOpenConsultation }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Our Story', href: '#our-story' },
    { label: 'Who We Help', href: '#who-we-help' },
    { label: 'Thought Process', href: '#thought-process' },
    { label: 'Leadership', href: '#leadership' },
    { label: 'Wealth Calculator', href: '#wealth-calculator' },
    { label: 'FAQs', href: '#faqs' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full shadow-xs">
      {/* 1. TOP STICKY NOTIFICATION BAR */}
      <aside aria-label="Regulatory Notice" className="w-full bg-[#F8F5EF] text-[#252525] py-2 px-4 text-xs md:text-sm tracking-wide border-b border-[#CDAB7D]/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 mx-auto md:mx-0">
            <ShieldCheck className="w-4 h-4 text-[#B3742D] shrink-0" />
            <span className="font-medium text-[#252525] text-center md:text-left">
              Authorised and Regulated by the Financial Conduct Authority (FCA Reference: 1033886)
            </span>
          </div>
          <div className="hidden lg:flex items-center gap-6 text-xs text-[#5F5F5F]">
            <span>Octagon Point, 5 Cheapside, City of London</span>
            <span className="text-[#CDAB7D]">|</span>
            <a
              href="tel:+442079460920"
              className="hover:text-[#B3742D] transition-colors flex items-center gap-1 text-[#5F5F5F]"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#B3742D]" />
              +44 (0) 20 7946 0920
            </a>
          </div>
        </div>
      </aside>

      {/* 2. MAIN NAVIGATION HEADER */}
      <nav aria-label="Main Navigation" className="w-full bg-[#FFFFFF] border-b border-[#CDAB7D]/30 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex flex-col group focus:outline-none"
            id="nav-logo"
          >
            <span className="font-serif font-bold text-xl sm:text-2xl text-[#252525] tracking-tight group-hover:text-[#B3742D] transition-colors">
              Anand Rathi Wealth UK
            </span>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#5F5F5F] font-medium">
              Private Wealth Management • City of London
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#252525] hover:text-[#B3742D] transition-colors relative py-1 focus:outline-none"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={onOpenConsultation}
              id="header-book-consultation-btn"
              className="bg-[#B3742D] hover:bg-[#7C4C21] text-[#FFFFFF] text-sm font-semibold px-5 py-2.5 rounded-sm transition-all duration-200 shadow-xs flex items-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#B3742D]"
            >
              <span>Book a Consultation</span>
              <ChevronRight className="w-4 h-4 text-[#FFFFFF]" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenConsultation}
              className="bg-[#B3742D] text-[#FFFFFF] text-xs font-semibold px-3 py-1.5 rounded-sm"
            >
              Consult
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#252525] hover:text-[#B3742D] focus:outline-none"
              aria-label="Toggle Navigation Menu"
              id="mobile-nav-toggle-btn"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#252525]" /> : <Menu className="w-6 h-6 text-[#252525]" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FFFFFF] border-t border-[#CDAB7D]/30 px-6 py-5 shadow-lg">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-[#252525] hover:text-[#B3742D] py-1 border-b border-[#F8F5EF]"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="w-full bg-[#B3742D] hover:bg-[#7C4C21] text-[#FFFFFF] font-semibold py-3 rounded-sm transition-colors text-center text-sm shadow-xs"
                >
                  Book a Consultation
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
