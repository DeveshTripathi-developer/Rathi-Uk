'use client';

import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Building,
  Shield,
} from 'lucide-react';

export function CallbackAndOffice() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    portfolio: '£500k–£1M',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [protocolRef, setProtocolRef] = useState('849201');

  const portfolioOptions = [
    '<£250k',
    '£250k–£500k',
    '£500k–£1M',
    '>£1M',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Generate reference code safely upon event action
    const refCode = String(Math.floor(100000 + Math.random() * 900000));
    setProtocolRef(refCode);

    // Simulate realistic processing
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section
      id="request-callback"
      aria-label="Contact and London Office"
      className="py-16 md:py-24 bg-[#EAD397] border-b border-[#CDAC82]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFFFFF] border border-[#CDAC82] rounded-sm mb-3">
            <span className="text-xs uppercase tracking-widest text-[#AF7535] font-semibold">
              START A CONVERSATION
            </span>
          </div>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-[#AF7535] tracking-tight">
            Request a Private Consultation
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#AF7535]">
            Arrange an exploratory dialogue with our City of London private wealth team. Discretion assured.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#FFFFFF] border border-[#CDAC82] rounded-sm p-6 sm:p-8 lg:p-10 shadow-sm">
            {isSubmitted ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#EAD397] border-2 border-[#AF7535] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8 text-[#AF7535]" />
                </div>
                <h3 className="font-serif font-bold text-2xl text-[#AF7535]">
                  Callback Request Confirmed
                </h3>
                <p className="text-sm text-[#AF7535] max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold">{formData.name || 'valued client'}</span>. An Anand Rathi private wealth advisor will contact you at <span className="font-semibold">{formData.phone || formData.email}</span> within one business hour.
                </p>
                <div className="p-3 bg-[#EAD397] bg-opacity-40 border border-[#CDAC82] rounded-sm text-xs text-[#AF7535] max-w-md mx-auto">
                  Selected Portfolio Bracket: <span className="font-bold">{formData.portfolio}</span> • Fiduciary Protocol Reference: #ARW-{protocolRef}
                </div>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        portfolio: '£500k–£1M',
                        notes: '',
                      });
                    }}
                    className="border border-[#CDAC82] hover:bg-[#EAD397] text-[#AF7535] text-xs font-semibold px-5 py-2.5 rounded-sm transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" id="callback-form">
                <div className="border-b border-[#EAD397] pb-3 mb-2">
                  <span className="font-serif font-bold text-lg text-[#AF7535]">
                    Direct Callback Request
                  </span>
                  <p className="text-xs text-[#AF7535] opacity-80 mt-0.5">
                    All discussions are held under strict FCA confidentiality protocols.
                  </p>
                </div>

                {/* Name */}
                <div>
                  <label htmlFor="callback-name" className="block text-xs font-semibold uppercase tracking-wider text-[#AF7535] mb-1.5">
                    Full Name *
                  </label>
                  <input
                    id="callback-name"
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Lord / Lady / Dr. / Mr. Alistair Vance"
                    className="w-full px-3.5 py-2.5 bg-[#FFFFFF] border border-[#CDAC82] rounded-sm text-sm text-[#AF7535] placeholder-[#CDAC82] focus:outline-none focus:border-[#AF7535] focus:ring-1 focus:ring-[#AF7535]"
                  />
                </div>

                {/* Email and Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="callback-email" className="block text-xs font-semibold uppercase tracking-wider text-[#AF7535] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      id="callback-email"
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alistair@domain.com"
                      className="w-full px-3.5 py-2.5 bg-[#FFFFFF] border border-[#CDAC82] rounded-sm text-sm text-[#AF7535] placeholder-[#CDAC82] focus:outline-none focus:border-[#AF7535] focus:ring-1 focus:ring-[#AF7535]"
                    />
                  </div>
                  <div>
                    <label htmlFor="callback-phone" className="block text-xs font-semibold uppercase tracking-wider text-[#AF7535] mb-1.5">
                      Telephone (UK or International) *
                    </label>
                    <input
                      id="callback-phone"
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+44 20 7000 0000"
                      className="w-full px-3.5 py-2.5 bg-[#FFFFFF] border border-[#CDAC82] rounded-sm text-sm text-[#AF7535] placeholder-[#CDAC82] focus:outline-none focus:border-[#AF7535] focus:ring-1 focus:ring-[#AF7535]"
                    />
                  </div>
                </div>

                {/* Portfolio Investment Selector (<£250k, £250k–£500k, £500k–£1M, >£1M) */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#AF7535] mb-2">
                    Approximate Liquid Portfolio Value *
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {portfolioOptions.map((option) => {
                      const isSelected = formData.portfolio === option;
                      return (
                        <button
                          key={option}
                          type="button"
                          id={`portfolio-opt-${option.replace(/[^a-zA-Z0-9]/g, '')}`}
                          onClick={() => setFormData({ ...formData, portfolio: option })}
                          className={`py-2.5 px-3 rounded-sm text-xs font-bold transition-all border text-center cursor-pointer ${
                            isSelected
                              ? 'bg-[#AF7535] text-[#FFFFFF] border-[#AF7535] shadow-xs'
                              : 'bg-[#FFFFFF] text-[#AF7535] border-[#CDAC82] hover:bg-[#EAD397]'
                          }`}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Optional Message */}
                <div>
                  <label htmlFor="callback-notes" className="block text-xs font-semibold uppercase tracking-wider text-[#AF7535] mb-1.5">
                    Key Priorities or Areas of Interest (Optional)
                  </label>
                  <textarea
                    id="callback-notes"
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="e.g. Succession planning, IHT mitigation, cross-border remittance, business sale liquidity."
                    className="w-full px-3.5 py-2.5 bg-[#FFFFFF] border border-[#CDAC82] rounded-sm text-sm text-[#AF7535] placeholder-[#CDAC82] focus:outline-none focus:border-[#AF7535] focus:ring-1 focus:ring-[#AF7535]"
                  />
                </div>

                {/* Privacy check */}
                <div className="flex items-start gap-2 pt-1 text-xs text-[#AF7535]">
                  <Shield className="w-4 h-4 text-[#C9A66B] shrink-0 mt-0.5" />
                  <span className="leading-tight text-[11px]">
                    We treat your personal data in strict compliance with the UK Data Protection Act & GDPR. Your details are never disclosed to third-party brokers.
                  </span>
                </div>

                {/* Submit button (#AF7535 solid) */}
                <button
                  type="submit"
                  disabled={isLoading}
                  id="submit-callback-request-btn"
                  className="w-full bg-[#AF7535] hover:bg-[#C9A66B] text-[#FFFFFF] font-bold text-sm py-3.5 rounded-sm transition-all duration-200 shadow-sm flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#AF7535]"
                >
                  {isLoading ? (
                    <span>Registering Inquiry...</span>
                  ) : (
                    <>
                      <span>Submit Callback Request</span>
                      <Send className="w-4 h-4 text-[#FFFFFF]" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Card: London Office Details (5 cols) */}
          <div className="lg:col-span-5 bg-[#FFFFFF] border border-[#CDAC82] rounded-sm p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-[#EAD397] pb-4">
              <div className="flex items-center gap-2 mb-1">
                <Building className="w-4 h-4 text-[#AF7535]" />
                <span className="text-xs uppercase font-mono tracking-widest text-[#C9A66B] font-bold">
                  HEADQUARTERS
                </span>
              </div>
              <h3 className="font-serif font-bold text-2xl text-[#AF7535]">
                City of London Office
              </h3>
              <p className="text-xs text-[#AF7535] opacity-90 mt-1">
                Anand Rathi Wealth UK Limited
              </p>
            </div>

            {/* Address */}
            <div className="space-y-4 text-sm text-[#AF7535]">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-sm bg-[#EAD397] border border-[#CDAC82] shrink-0">
                  <MapPin className="w-4 h-4 text-[#AF7535]" />
                </div>
                <div>
                  <div className="font-bold">Octagon Point, 5 Cheapside</div>
                  <div className="text-xs">City of London, EC2V 6AA</div>
                  <div className="text-xs text-[#C9A66B] font-medium mt-0.5">
                    United Kingdom
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-sm bg-[#EAD397] border border-[#CDAC82] shrink-0">
                  <Phone className="w-4 h-4 text-[#AF7535]" />
                </div>
                <div>
                  <div className="font-bold">Telephone Inquiries</div>
                  <a href="tel:+442079460920" className="text-xs hover:underline block">
                    +44 (0) 20 7946 0920
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-sm bg-[#EAD397] border border-[#CDAC82] shrink-0">
                  <Mail className="w-4 h-4 text-[#AF7535]" />
                </div>
                <div>
                  <div className="font-bold">Electronic Dispatch</div>
                  <a href="mailto:london@anandrathiwealth.co.uk" className="text-xs hover:underline block">
                    london@anandrathiwealth.co.uk
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-sm bg-[#EAD397] border border-[#CDAC82] shrink-0">
                  <Clock className="w-4 h-4 text-[#AF7535]" />
                </div>
                <div>
                  <div className="font-bold">Office Hours</div>
                  <div className="text-xs">Monday – Friday: 08:30 – 18:00 GMT</div>
                  <div className="text-xs text-[#C9A66B]">Private consultations by appointment</div>
                </div>
              </div>
            </div>

            {/* Tube & Commuter Directions */}
            <div className="p-4 bg-[#EAD397] bg-opacity-40 border border-[#CDAC82] rounded-sm space-y-2 text-xs text-[#AF7535]">
              <div className="font-bold uppercase tracking-wider text-[11px] text-[#AF7535]">
                Nearest Underground Stations
              </div>
              <div className="flex flex-wrap gap-2 text-[11px]">
                <span className="bg-[#FFFFFF] border border-[#CDAC82] px-2 py-0.5 rounded-sm font-medium">
                  St Paul’s (Central) — 1 min walk
                </span>
                <span className="bg-[#FFFFFF] border border-[#CDAC82] px-2 py-0.5 rounded-sm font-medium">
                  Bank (Central/Northern/DLR) — 4 min walk
                </span>
                <span className="bg-[#FFFFFF] border border-[#CDAC82] px-2 py-0.5 rounded-sm font-medium">
                  Mansion House (District/Circle) — 3 min walk
                </span>
              </div>
            </div>

            {/* Regulatory Reference Box */}
            <div className="border-t border-[#CDAC82] pt-4 text-[11px] text-[#AF7535] space-y-1">
              <div><span className="font-bold">FCA Reference:</span> 1033886</div>
              <div><span className="font-bold">Company Number:</span> 16223861</div>
              <div><span className="font-bold">Fiduciary Jurisdiction:</span> England & Wales</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
