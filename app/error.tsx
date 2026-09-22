'use client';

import React from 'react';
import { ShieldAlert, RotateCcw } from 'lucide-react';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#AF7535] flex flex-col items-center justify-center p-6 text-center">
      <div className="w-16 h-16 rounded-sm bg-[#EAD397] border border-[#CDAC82] flex items-center justify-center mb-6">
        <ShieldAlert className="w-8 h-8 text-[#C9A66B]" />
      </div>

      <span className="text-xs uppercase font-mono tracking-widest text-[#C9A66B] mb-2 font-semibold">
        System Notice
      </span>

      <h1 className="font-serif font-bold text-3xl sm:text-4xl text-[#AF7535] mb-4">
        An Unexpected Error Occurred
      </h1>

      <p className="text-sm text-[#AF7535] max-w-md mb-8 leading-relaxed">
        Our wealth portal encountered an unexpected issue. Your session data remains completely safe.
      </p>

      <button
        onClick={() => reset()}
        className="inline-flex items-center gap-2 px-6 py-3 bg-[#AF7535] text-[#FFFFFF] font-semibold text-sm rounded-sm hover:bg-[#C9A66B] transition-colors cursor-pointer"
      >
        <RotateCcw className="w-4 h-4" />
        <span>Try Again</span>
      </button>
    </div>
  );
}
