'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { MetricsBand } from '@/components/MetricsBand';
import { WhoWeHelp } from '@/components/WhoWeHelp';
import { PhilosophyPillars } from '@/components/PhilosophyPillars';
import { AdvisorSpotlight } from '@/components/AdvisorSpotlight';
import { WealthCalculator } from '@/components/WealthCalculator';
import { CallbackAndOffice } from '@/components/CallbackAndOffice';
import { FaqSection } from '@/components/FaqSection';
import { Footer } from '@/components/Footer';
import { ConsultationDrawer } from '@/components/ConsultationDrawer';

export function HomePageClient() {
  const [consultationOpen, setConsultationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#252525] flex flex-col selection:bg-[#F1E1A6] selection:text-[#252525]">
      {/* 1 & 2. Top Sticky Notification Bar and Main Navigation */}
      <Navbar onOpenConsultation={() => setConsultationOpen(true)} />

      <main className="flex-1 w-full">
        {/* 3. Hero Section */}
        <HeroSection onOpenConsultation={() => setConsultationOpen(true)} />

        {/* 4. Institutional Scale Metrics Band */}
        <MetricsBand />

        {/* 5. Persona-Based Navigation ("Who We Help") */}
        <WhoWeHelp onOpenConsultation={() => setConsultationOpen(true)} />

        {/* 6. Core Philosophy (The 4 Pillars) */}
        <PhilosophyPillars />

        {/* 7. Advisor Spotlight ("Meet the People Behind Your Future") */}
        <AdvisorSpotlight />

        {/* 8. Interactive Wealth Calculator */}
        <WealthCalculator onOpenConsultation={() => setConsultationOpen(true)} />

        {/* 9. Request a Call Back Form & London Office */}
        <CallbackAndOffice />

        {/* 10. FAQs Section */}
        <FaqSection />
      </main>

      {/* 11. Footer & Compliance Disclosure */}
      <Footer />

      {/* Interactive Consultation Modal Drawer */}
      <ConsultationDrawer
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />
    </div>
  );
}
