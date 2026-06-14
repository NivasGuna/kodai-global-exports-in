'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Volume2 } from 'lucide-react';
import { SectionLabel } from '@/components/shared/SectionLabel';
import { FormattedText } from '@/components/shared/FormattedText';
import { FadeIn } from '@/components/shared/FadeIn';

export function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (videoRef.current) {
            if (entry.isIntersecting) {
              videoRef.current.play().catch(() => {
                // Autoplay blocked, handled gracefully
              });
            } else {
              videoRef.current.pause();
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleUnmute = () => {
    setIsMuted(false);
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play().catch(() => {});
    }
  };

  return (
    <section className="mx-auto mt-24 max-w-[85rem] px-4 sm:px-6 md:px-10">
      <div className="text-center mb-12">
        <SectionLabel>Our Facilities</SectionLabel>
        <h2 className="mx-auto mt-4 max-w-4xl font-playfair text-3xl font-medium text-kodai-dark sm:text-4xl">
          <FormattedText
            text="Experience our {production process}"
            highlightClassName="text-kodai-green italic"
          />
        </h2>
      </div>

      <FadeIn delay={0.2} className="relative mx-auto max-w-5xl">
        <div
          ref={containerRef}
          className="group relative overflow-hidden bg-kodai-dark rounded-2xl"
        >
          <video
            ref={videoRef}
            src="/videos/kodaiglobal.mp4"
            className="w-full aspect-video object-cover transition-transform duration-700"
            playsInline
            loop
            muted={isMuted}
            autoPlay
            controls={!isMuted}
          />

          {isMuted && (
            <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/30 transition-opacity duration-300">
              <button
                onClick={handleUnmute}
                className="flex items-center gap-3 rounded-full bg-white/90 px-6 py-3 text-sm font-bold text-kodai-charcoal backdrop-blur-md transition-transform hover:scale-105 hover:bg-white"
              >
                <Volume2 size={20} />
                <span>Tap to Unmute</span>
              </button>
            </div>
          )}
        </div>
      </FadeIn>
    </section>
  );
}
