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
}

const introIcons: LucideIcon[] = [CheckCircle2, FileCheck2, ShieldCheck];

export function HeroCarousel({ slides, highlights }: HeroCarouselProps) {
  const { api, setApi, current } = useCarousel(4000);
  const activeSlide = slides[current] || slides[0];

  return (
    <section className="relative isolate h-[100dvh] overflow-hidden bg-kodai-charcoal">
      {/* Carousel background */}
      <Carousel setApi={setApi} className="absolute inset-0 h-full w-full" opts={{ loop: true, duration: 45 }}>
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
                  imageClassName="object-cover object-center"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* No gradient overlays over the image as requested */}

      {/* Content left aligned */}
      <div className="absolute inset-0 z-20 flex items-center justify-start text-left">
        <div className="w-full px-4 sm:px-6 md:px-10 mt-20">
          <div className="mx-auto max-w-[85rem] flex flex-col items-start">
            <div className="max-w-4xl flex flex-col items-start">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-kodai-gold">
                {activeSlide.badge}
              </p>
              <h1 className="mt-4 max-w-5xl font-playfair text-4xl font-medium leading-[1.15] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                <FormattedText
                  text={activeSlide.title}
                  highlightClassName="italic text-white"
                />
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-white/95 sm:text-lg sm:leading-8">
                {activeSlide.subtitle}
              </p>
            </div>

            <div className="mt-10 flex flex-col items-start gap-8">
              <div className="flex flex-wrap justify-start gap-x-6 gap-y-3">
                {highlights.map((item, hIdx) => {
                  const Icon = introIcons[hIdx] || CheckCircle2;
                  return (
                    <div
                      key={item}
                      className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-white"
                    >
                      <Icon size={16} className="text-kodai-gold" />
                      <span>{item}</span>
                    </div>
                  );
                })}
              </div>
              {activeSlide.cta && (
                <Link
                  href={activeSlide.cta.href}
                  className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-kodai-charcoal shadow-lg transition-all hover:-translate-y-1 hover:bg-white/95 hover:shadow-xl"
                >
                  <span>{activeSlide.cta.label}</span>
                  <ArrowRight size={18} />
                </Link>
              )}
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
                current === i ? 'scale-100 opacity-100' : 'scale-100 opacity-40'
              )}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
