'use client';

import React, { useState } from 'react';
import {
  X,
  ShieldCheck,
  Calendar,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Building,
  Lock,
} from 'lucide-react';

interface ConsultationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ConsultationDrawer({ isOpen, onClose }: ConsultationDrawerProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState({
    portfolioBracket: '£500k–£1M',
    objective: 'Wealth Preservation & Long-Term Compounding',
    fullName: '',
    email: '',
    phone: '',
    meetingFormat: 'Octagon Point, City of London (In-Person)',
    timeline: 'Within 7 Business Days',
    consentFCA: true,
  });
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const portfolioBrackets = [
    '<£250k',
    '£250k–£500k',
    '£500k–£1M',
    '£1M–£5M',
    '£5M–£10M+',
  ];

  const objectives = [
    'Wealth Preservation & Long-Term Compounding',
    'Inheritance Tax (IHT) & Generational Succession',
    'Business Sale / Pre-Liquidity Structuring',
    'Cross-Border / Non-Resident Indian Wealth Alignment',
    'Executive Equity & Pension Allowance Optimization',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  const resetAndClose = () => {
    setIsSuccess(false);
    setStep(1);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-drawer-title"
      className="fixed inset-0 z-50 overflow-hidden bg-[#252525]/60 backdrop-blur-xs flex justify-end"
    >
      <div className="w-full max-w-xl bg-[#FFFFFF] border-l-2 border-[#CDAB7D]/40 h-full shadow-2xl flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300">
        {/* Drawer Header */}
        <div className="bg-[#252525] text-[#FFFFFF] px-6 py-5 border-b border-[#CDAB7D]/40 flex items-center justify-between">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#B3742D]" />
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#B3742D] font-semibold">
                CONFIDENTIAL FIDUCIARY INTAKE
              </span>
            </div>
            <h3 id="consultation-drawer-title" className="font-serif font-bold text-xl text-[#FFFFFF]">
              Book Private Consultation
            </h3>
            <p className="text-xs text-stone-300">
              Anand Rathi Wealth UK Limited • City of London
            </p>
          </div>
          <button
            onClick={resetAndClose}
            aria-label="Close Consultation Drawer"
            className="text-stone-300 hover:text-[#FFFFFF] p-1.5 rounded-sm hover:bg-[#FFFFFF]/10 transition-colors focus:outline-none cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Step Indicator */}
        {!isSuccess && (
          <div className="bg-[#F8F5EF] border-b border-[#CDAB7D]/30 px-6 py-3 flex items-center justify-between text-xs">
            <div className={`flex items-center gap-1.5 ${step >= 1 ? 'text-[#252525] font-bold' : 'text-[#5F5F5F]'}`}>
              <span className="w-5 h-5 rounded-full bg-[#B3742D] text-[#FFFFFF] flex items-center justify-center text-[10px] font-bold">1</span>
              <span>Portfolio Tier</span>
            </div>
            <span className="text-[#CDAB7D]">→</span>
            <div className={`flex items-center gap-1.5 ${step >= 2 ? 'text-[#252525] font-bold' : 'text-[#5F5F5F]'}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${step >= 2 ? 'bg-[#B3742D] text-[#FFFFFF]' : 'bg-[#CDAB7D]/30 text-[#5F5F5F]'}`}>2</span>
              <span>Contact Details</span>
            </div>
            <span className="text-[#CDAB7D]">→</span>
            <div className={`flex items-center gap-1.5 ${step >= 3 ? 'text-[#252525] font-bold' : 'text-[#5F5F5F]'}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${step >= 3 ? 'bg-[#B3742D] text-[#FFFFFF]' : 'bg-[#CDAB7D]/30 text-[#5F5F5F]'}`}>3</span>
              <span>FCA Consent</span>
            </div>
          </div>
        )}

        {/* Drawer Body */}
        <div className="p-6 sm:p-8 flex-1">
          {isSuccess ? (
            <div className="py-10 text-center space-y-5">
              <div className="w-16 h-16 rounded-full bg-[#F8F5EF] border-2 border-[#B3742D] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8 text-[#B3742D]" />
              </div>
              <h4 className="font-serif font-bold text-2xl text-[#252525]">
                Consultation Reserved
              </h4>
              <p className="text-sm text-[#5F5F5F] leading-relaxed max-w-md mx-auto">
                Thank you, <span className="font-semibold text-[#252525]">{formData.fullName || 'Client'}</span>. Your private consultation request has been registered under our London office schedule.
              </p>

              <div className="p-4 bg-[#F8F5EF] border border-[#CDAB7D]/30 rounded-sm text-left text-xs text-[#252525] space-y-2 max-w-md mx-auto">
                <div className="flex justify-between border-b border-[#CDAB7D]/20 pb-1.5">
                  <span className="font-medium text-[#5F5F5F]">Portfolio Tier:</span>
                  <span className="font-bold text-[#252525]">{formData.portfolioBracket}</span>
                </div>
                <div className="flex justify-between border-b border-[#CDAB7D]/20 pb-1.5">
                  <span className="font-medium text-[#5F5F5F]">Primary Focus:</span>
                  <span className="font-bold text-[#252525] truncate max-w-[200px]">{formData.objective}</span>
                </div>
                <div className="flex justify-between border-b border-[#CDAB7D]/20 pb-1.5">
                  <span className="font-medium text-[#5F5F5F]">Format:</span>
                  <span className="font-bold text-[#252525]">{formData.meetingFormat.split('(')[0]}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-[#5F5F5F]">FCA Compliance Status:</span>
                  <span className="text-[#B3742D] font-bold">FCA Ref 1033886 Verified</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={resetAndClose}
                  className="bg-[#B3742D] hover:bg-[#7C4C21] text-[#FFFFFF] text-xs font-semibold px-6 py-3 rounded-sm transition-colors shadow-xs cursor-pointer"
                >
                  Return to Anand Rathi Wealth UK
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* STEP 1: Portfolio Bracket & Objective */}
              {step === 1 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div>
                    <h4 className="font-serif font-bold text-lg text-[#252525] mb-1">
                      Select Liquid Asset Tier
                    </h4>
                    <p className="text-xs text-[#5F5F5F] mb-3">
                      Allows us to assign the appropriate fiduciary partner and risk team.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {portfolioBrackets.map((bracket) => {
                        const isSelected = formData.portfolioBracket === bracket;
                        return (
                          <button
                            key={bracket}
                            type="button"
                            onClick={() => setFormData({ ...formData, portfolioBracket: bracket })}
                            className={`p-3 rounded-sm text-left border transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-[#B3742D] text-[#FFFFFF] border-[#B3742D] shadow-xs'
                                : 'bg-[#FFFFFF] text-[#252525] border-[#CDAB7D]/40 hover:bg-[#F8F5EF] hover:border-[#B3742D]'
                            }`}
                          >
                            <span className="font-serif font-bold text-sm block">{bracket}</span>
                            <span className={`text-[10px] block ${isSelected ? 'text-[#FFFFFF]/90' : 'text-[#5F5F5F]'}`}>
                              Liquid Investable Assets
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-serif font-bold text-lg text-[#252525] mb-1">
                      Primary Strategic Objective
                    </h4>
                    <p className="text-xs text-[#5F5F5F] mb-3">
                      Select your foremost financial governance focus.
                    </p>
                    <div className="space-y-2">
                      {objectives.map((obj) => {
                        const isSelected = formData.objective === obj;
                        return (
                          <button
                            key={obj}
                            type="button"
                            onClick={() => setFormData({ ...formData, objective: obj })}
                            className={`w-full p-3 rounded-sm text-left border transition-all text-xs font-semibold cursor-pointer ${
                              isSelected
                                ? 'bg-[#F8F5EF] border-[#B3742D] text-[#252525] ring-1 ring-[#B3742D]'
                                : 'bg-[#FFFFFF] border-[#CDAB7D]/40 text-[#5F5F5F] hover:bg-[#F8F5EF] hover:text-[#252525]'
                            }`}
                          >
                            {obj}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: Contact Details & Format */}
              {step === 2 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <h4 className="font-serif font-bold text-lg text-[#252525] mb-1">
                    Your Contact & Scheduling Details
                  </h4>
                  <p className="text-xs text-[#5F5F5F] mb-3">
                    Strict confidentiality under FCA UK guidelines.
                  </p>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#252525] mb-1">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Alistair Sterling"
                      className="w-full px-3.5 py-2.5 bg-[#FFFFFF] border border-[#CDAB7D]/40 rounded-sm text-sm text-[#252525] placeholder-[#5F5F5F]/60 focus:outline-none focus:border-[#B3742D] focus:ring-1 focus:ring-[#B3742D]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#252525] mb-1">
                        Email Address *
                      </label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="a.sterling@family.com"
                        className="w-full px-3.5 py-2.5 bg-[#FFFFFF] border border-[#CDAB7D]/40 rounded-sm text-sm text-[#252525] placeholder-[#5F5F5F]/60 focus:outline-none focus:border-[#B3742D] focus:ring-1 focus:ring-[#B3742D]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#252525] mb-1">
                        Phone Number *
                      </label>
                      <input
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+44 20 7000 1234"
                        className="w-full px-3.5 py-2.5 bg-[#FFFFFF] border border-[#CDAB7D]/40 rounded-sm text-sm text-[#252525] placeholder-[#5F5F5F]/60 focus:outline-none focus:border-[#B3742D] focus:ring-1 focus:ring-[#B3742D]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#252525] mb-1">
                      Preferred Consultation Format
                    </label>
                    <select
                      value={formData.meetingFormat}
                      onChange={(e) => setFormData({ ...formData, meetingFormat: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#FFFFFF] border border-[#CDAB7D]/40 rounded-sm text-sm text-[#252525] focus:outline-none focus:border-[#B3742D] focus:ring-1 focus:ring-[#B3742D]"
                    >
                      <option value="Octagon Point, City of London (In-Person)">
                        Octagon Point, City of London (In-Person Private Suite)
                      </option>
                      <option value="Encrypted Video Conference (Virtual)">
                        Encrypted Video Conference (Virtual / Secure Link)
                      </option>
                      <option value="Direct Private Telephone Call">
                        Direct Private Telephone Call
                      </option>
                    </select>
                  </div>
                </div>
              )}

              {/* STEP 3: Review & FCA Consent */}
              {step === 3 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <h4 className="font-serif font-bold text-lg text-[#252525] mb-1">
                    Review & Regulatory Verification
                  </h4>
                  <p className="text-xs text-[#5F5F5F] mb-3">
                    Please verify your consultation parameters.
                  </p>

                  <div className="p-4 bg-[#F8F5EF] border border-[#CDAB7D]/30 rounded-sm space-y-2 text-xs text-[#252525]">
                    <div><span className="font-semibold text-[#5F5F5F]">Candidate:</span> {formData.fullName || 'Not provided'}</div>
                    <div><span className="font-semibold text-[#5F5F5F]">Contact:</span> {formData.email} • {formData.phone}</div>
                    <div><span className="font-semibold text-[#5F5F5F]">Portfolio Bracket:</span> <span className="text-[#B3742D] font-bold">{formData.portfolioBracket}</span></div>
                    <div><span className="font-semibold text-[#5F5F5F]">Objective:</span> {formData.objective}</div>
                    <div><span className="font-semibold text-[#5F5F5F]">Format:</span> {formData.meetingFormat}</div>
                  </div>

                  <div className="p-3.5 bg-[#FFFFFF] border border-[#CDAB7D]/40 rounded-sm flex items-start gap-3">
                    <input
                      id="fca-consent-check"
                      type="checkbox"
                      checked={formData.consentFCA}
                      onChange={(e) => setFormData({ ...formData, consentFCA: e.target.checked })}
                      className="mt-1 accent-[#B3742D]"
                    />
                    <label htmlFor="fca-consent-check" className="text-xs text-[#5F5F5F] leading-relaxed cursor-pointer">
                      I consent to Anand Rathi Wealth UK Limited contacting me regarding wealth stewardship under FCA Reference 1033886 and GDPR guidelines.
                    </label>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#CDAB7D]/30 flex items-center justify-between gap-3">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep((step - 1) as 1 | 2)}
                    className="border border-[#CDAB7D]/40 hover:bg-[#F8F5EF] text-[#252525] text-xs font-semibold px-4 py-2.5 rounded-sm transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>
                ) : (
                  <div />
                )}

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={() => {
                      if (step === 2 && (!formData.fullName || !formData.email || !formData.phone)) {
                        alert('Please complete all required fields.');
                        return;
                      }
                      setStep((step + 1) as 2 | 3);
                    }}
                    className="bg-[#B3742D] hover:bg-[#7C4C21] text-[#FFFFFF] text-xs font-semibold px-5 py-2.5 rounded-sm transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <span>Proceed</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={!formData.consentFCA}
                    className="bg-[#B3742D] hover:bg-[#7C4C21] disabled:opacity-50 text-[#FFFFFF] text-xs font-bold px-6 py-2.5 rounded-sm transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <span>Confirm Consultation</span>
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </form>
          )}
        </div>

        {/* Drawer Footer */}
        <div className="bg-[#F8F5EF] border-t border-[#CDAB7D]/30 px-6 py-3 flex items-center justify-between text-[11px] text-[#5F5F5F]">
          <span className="flex items-center gap-1">
            <Lock className="w-3.5 h-3.5 text-[#B3742D]" />
            256-Bit SSL Encrypted
          </span>
          <span>FCA Ref: 1033886</span>
        </div>
      </div>
    </div>
  );
}
