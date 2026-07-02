'use client';

import * as React from 'react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { HeroBackground } from './HeroBackground';
import { FormattedText } from './FormattedText';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { CheckCircle2, FileCheck2, ShieldCheck, LucideIcon, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useCarousel } from './hooks/useCarousel';

interface Slide {
  badge: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  cta?: {
    label: string;
    href: string;
  };
}

interface HeroCarouselProps {
  slides: Slide[];
  highlights: string[];
  variant?: 'default' | 'product';
}

const introIcons: LucideIcon[] = [CheckCircle2, FileCheck2, ShieldCheck];

export function HeroCarousel({ slides, highlights, variant = 'default' }: HeroCarouselProps) {
  const { api, setApi, current } = useCarousel(4000);
  const activeSlide = slides[current] || slides[0];
  const isProduct = variant === 'product';

  return (
    <section className="relative isolate h-[100dvh] overflow-hidden bg-kodai-charcoal">
      {/* Carousel background */}
      <Carousel
        setApi={setApi}
        className="absolute inset-0 h-full w-full"
        opts={{ loop: true, duration: 45 }}
      >
        <CarouselContent className="-ml-0">
          {slides.map((slide, index) => (
            <CarouselItem
              key={index}
              className="relative h-[100dvh] overflow-hidden pl-0 [transform:translateZ(0)]"
            >
              <div className="absolute inset-0">
                <HeroBackground
                  src={slide.imageSrc}
                  alt={slide.imageAlt}
                  priority={index === 0}
                  eager
                  imageClassName="object-cover object-[75%_center] md:object-center"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Dark overlay for better text readability on mobile - darkened significantly */}
      <div className="absolute inset-0 z-10 bg-black/60 md:hidden" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent md:hidden" />

      <div className="absolute inset-0 z-20">
        <div className="relative flex h-full w-full items-center justify-center px-4 pt-20 sm:px-6 sm:pt-24 md:px-10 md:justify-start md:pt-20">
          <div className="mx-auto flex w-full max-w-[85rem] flex-col items-start sm:items-start">
            <div
              className={cn(
                'w-full max-w-[42rem] p-0 sm:p-0 lg:max-w-[46rem]',
                isProduct ? 'md:max-w-[41rem]' : 'md:max-w-[42rem]',
              )}
            >
              <div className="flex flex-col items-start">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-1.5 backdrop-blur-md shadow-lg">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#f6dc96]"></div>
                  <p className="font-quicksand text-[0.72rem] font-bold uppercase tracking-[0.35em] text-[#f6dc96] sm:text-[0.74rem]">
                    {activeSlide.badge}
                  </p>
                </div>
                <h1 className="mt-4 max-w-4xl break-normal font-quicksand text-[2.05rem] font-black leading-[1.02] tracking-[-0.02em] text-white drop-shadow-2xl sm:mt-5 sm:text-5xl sm:leading-[1.05] lg:text-6xl xl:text-7xl">
                  <FormattedText
                    text={activeSlide.title}
                    highlightClassName="text-transparent bg-clip-text bg-gradient-to-r from-[#f6dc96] to-white font-black"
                  />
                </h1>
                <p className="mt-4 max-w-2xl text-[0.95rem] leading-7 text-white/95 drop-shadow-md sm:mt-6 sm:text-lg sm:leading-8">
                  {activeSlide.subtitle}
                </p>
              </div>

              <div className="mt-7 flex flex-col items-start gap-5 sm:mt-10 sm:gap-8">
                <div className="flex flex-wrap justify-start gap-x-2.5 gap-y-2.5 sm:gap-x-4 sm:gap-y-3">
                  {highlights.map((item, hIdx) => {
                    const Icon = introIcons[hIdx] || CheckCircle2;
                    return (
                      <div
                        key={item}
                        className="inline-flex items-center gap-2 border-b border-white/35 pb-1 text-sm font-medium tracking-[0.02em] text-white/95 sm:text-base"
                      >
                        <Icon size={16} className="text-[#f6dc96]" />
                        <span>{item}</span>
                      </div>
                    );
                  })}
                </div>
                {activeSlide.cta && (
                  <Link
                    href={activeSlide.cta.href}
                    className="group relative overflow-hidden inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-[#c5a059] to-[#f6dc96] px-8 py-3.5 text-[0.8rem] font-extrabold uppercase tracking-[0.2em] text-white drop-shadow-sm shadow-[0_8px_30px_rgba(197,160,89,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(246,220,150,0.5)] sm:px-9 sm:py-4"
                  >
                    <span className="relative z-10">{activeSlide.cta.label}</span>
                    <ArrowRight
                      size={18}
                      className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                    />
                    <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#f6dc96] to-[#c5a059] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-30 hidden justify-center gap-6 lg:flex">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => api?.scrollTo(i)}
            className="group relative flex h-10 w-10 items-center justify-center"
            aria-label={`Go to slide ${i + 1}`}
          >
            <svg className="absolute inset-0 h-full w-full -rotate-90 scale-125">
              <circle
                cx="20"
                cy="20"
                r="18"
                stroke="white"
                strokeWidth="1.5"
                fill="transparent"
                className={cn(
                  'opacity-35 transition-opacity duration-300',
                  current === i && 'opacity-60',
                )}
              />
              {current === i && (
                <motion.circle
                  cx="20"
                  cy="20"
                  r="18"
                  stroke="white"
                  strokeWidth="2.5"
                  fill="transparent"
                  strokeDasharray="113"
                  initial={{ strokeDashoffset: 113 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 4, ease: 'linear' }}
                />
              )}
            </svg>
            <span
              className={cn(
                'h-2 w-2 rounded-full bg-white transition-all duration-300 shadow-sm',
                current === i ? 'scale-100 opacity-100' : 'scale-100 opacity-40',
              )}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
