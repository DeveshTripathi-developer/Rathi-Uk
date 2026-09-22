'use client';

import React from 'react';
import Link from 'next/link';
import { Landmark, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#AF7535] flex flex-col items-center justify-center p-6 text-center">
      <div className="w-16 h-16 rounded-sm bg-[#EAD397] border border-[#CDAC82] flex items-center justify-center mb-6">
        <Landmark className="w-8 h-8 text-[#AF7535]" />
      </div>

      <span className="text-xs uppercase font-mono tracking-widest text-[#C9A66B] mb-2 font-semibold">
        Error 404 • Page Not Found
      </span>

      <h1 className="font-serif font-bold text-3xl sm:text-4xl text-[#AF7535] mb-4">
        Page Not Found
      </h1>

      <p className="text-sm text-[#AF7535] max-w-md mb-8 leading-relaxed">
        The requested resource could not be found. Please return to the Anand Rathi Wealth UK homepage or contact our London office.
      </p>

      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 bg-[#AF7535] text-[#FFFFFF] font-semibold text-sm rounded-sm hover:bg-[#C9A66B] transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Homepage</span>
      </Link>
    </div>
  );
}
