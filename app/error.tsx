'use client';

import React, { useEffect } from 'react';
import { RefreshCcw, Home, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { FadeIn } from '@/components/shared/FadeIn';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="relative isolate min-h-[80vh] flex flex-col items-center justify-center px-6 py-24 sm:py-32 lg:px-8">
      <FadeIn className="text-center">
        <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center border-b border-red-200 text-red-600">
          <AlertCircle size={32} />
        </div>
        <p className="text-base font-bold uppercase tracking-[0.4em] text-red-600">
          Unexpected Error
        </p>
        <h1 className="mt-4 font-playfair text-4xl font-semibold tracking-tight text-kodai-dark sm:text-6xl">
          Something went wrong
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600 max-w-lg mx-auto">
          We encountered an error while trying to display this page. Our technical team has been
          notified.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-full bg-kodai-charcoal px-8 py-4 text-sm font-bold text-white transition-all hover:-translate-y-1 hover:bg-black active:translate-y-0"
          >
            <RefreshCcw size={18} />
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-black/15 px-8 py-4 text-sm font-bold text-kodai-dark transition-all hover:-translate-y-1 hover:border-black/30 active:translate-y-0"
          >
            <Home size={18} />
            Back to Home
          </Link>
        </div>
      </FadeIn>

      <FadeIn delay={0.2} className="mt-16 pt-8 border-t border-black/5 w-full max-w-md">
        <p className="text-center text-sm text-gray-500">
          Persistent issue?
          <Link href="/contact" className="ml-1 text-kodai-green font-bold hover:underline">
            Report a problem
          </Link>
        </p>
      </FadeIn>
    </main>
  );
}
