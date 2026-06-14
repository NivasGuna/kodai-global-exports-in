import React from 'react';
import Image from 'next/image';
import * as LucideIcons from 'lucide-react';
import {
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  Globe2,
  PackageCheck,
  Quote,
  Sparkles,
} from 'lucide-react';
import { Metadata } from 'next';
import aboutData from './about.json';
import { FormattedText } from '@/components/shared/FormattedText';
import { SectionLabel } from '@/components/shared/SectionLabel';
import { FadeIn } from '@/components/shared/FadeIn';
import { PremiumPageHero } from '@/components/shared/PremiumPageHero';
import { ImageCTA } from '@/components/shared/ImageCTA';

export const metadata: Metadata = aboutData.metadata;

const iconMap: Record<string, React.ElementType> = {
  Award: LucideIcons.Award,
  ShieldCheck: LucideIcons.ShieldCheck,
  Zap: LucideIcons.Zap,
  Handshake: LucideIcons.Handshake,
  Eye: LucideIcons.Eye,
  Leaf: LucideIcons.Leaf,
  Target: LucideIcons.Target,
  Sparkles: LucideIcons.Sparkles,
  CheckCircle2: LucideIcons.CheckCircle2,
};

const exportMarkers = [
  { label: 'Origin', value: 'Tamilnadu, India' },
  { label: 'Product focus', value: 'Tapioca starch, sago and tapioca products' },
  { label: 'Workflow', value: 'Enquiry, documents, packing and dispatch' },
];

const processSteps = [
  {
    number: '01',
    title: 'Requirement review',
    description:
      'We start with product grade, packing size, destination country, quantity, and buyer documentation expectations.',
    icon: ClipboardCheck,
  },
  {
    number: '02',
    title: 'Quality and specification alignment',
    description:
      'Product discussions are kept practical, with clear attention to consistency, handling, and export-ready packing.',
    icon: CheckCircle2,
  },
  {
    number: '03',
    title: 'Documentation readiness',
    description:
      'We prepare the export conversation around invoice, packing, regulatory, and importing-country document needs.',
    icon: FileCheck2,
  },
  {
    number: '04',
    title: 'Shipment coordination',
    description:
      'Communication stays steady from enquiry through dispatch so buyers understand the next action at every stage.',
    icon: PackageCheck,
  },
];

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden pb-24">
      <PremiumPageHero
        variant="about"
        badge={aboutData.hero.badge}
        title={aboutData.hero.title}
        description={aboutData.hero.subtitle}
        trustPoints={aboutData.hero.features}
        imageSrc={aboutData.hero.imageSrc}
        imageAlt={aboutData.hero.imageAlt}
        buttonText={aboutData.hero.buttonText}
        buttonHref={aboutData.hero.buttonHref}

      />

      <section
        className="relative overflow-hidden bg-gradient-to-b from-[#faf6ee] via-[#fbf8f2] to-[#fffdf8] py-24 text-kodai-charcoal sm:py-32"
        id="about-why-choose"
      >
        <div className="relative mx-auto grid max-w-[85rem] grid-cols-1 gap-16 px-4 sm:px-6 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <FadeIn>
              <SectionLabel>{aboutData.whyChooseUs.title}</SectionLabel>
              <h2 className="mt-4 text-balance font-playfair text-3xl font-medium leading-tight text-kodai-charcoal sm:text-4xl lg:text-5xl">
                {aboutData.whyChooseUs.subtitle}
              </h2>
            </FadeIn>

            <FadeIn delay={0.1} className="space-y-6 text-lg leading-relaxed text-gray-600">
              <p>
                <FormattedText
                  text={aboutData.whyChooseUs.description}
                  highlightClassName="font-semibold text-kodai-gold"
                />
              </p>
              <p>{aboutData.whyChooseUs.subDescription}</p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="relative border-l-2 border-kodai-gold py-2 pl-8">
                <Quote size={34} className="mb-5 text-kodai-gold/50" />
                <p className="font-playfair text-xl italic leading-relaxed text-kodai-dark">
                  &ldquo;{aboutData.whyChooseUs.quote}&rdquo;
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3} className="grid grid-cols-1 gap-6 sm:grid-cols-3 pt-4">
              {exportMarkers.map((marker) => (
                <div key={marker.label} className="relative pl-6">
                  <div className="absolute left-0 top-1 h-full w-px bg-gradient-to-b from-kodai-charcoal via-kodai-charcoal/50 to-transparent" />
                  <div className="absolute left-[-3px] top-1 h-1.5 w-1.5 rounded-full bg-kodai-gold" />
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-kodai-charcoal">
                    {marker.label}
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-relaxed text-gray-600">
                    {marker.value}
                  </p>
                </div>
              ))}
            </FadeIn>
          </div>

          <div className="relative lg:ml-auto w-full max-w-lg mx-auto pt-6 pr-6">
            <div className="absolute top-0 right-0 h-full w-full rounded-[2.5rem] border-[3px] border-kodai-gold/30 lg:rounded-[3rem] translate-x-4 -translate-y-4" />
            <FadeIn
              direction="left"
              className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] lg:rounded-[3rem]"
            >
              <Image
                src={aboutData.whyChooseUs.imageSrc}
                alt={aboutData.whyChooseUs.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-[85rem] px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <FadeIn className="lg:sticky lg:top-[calc(var(--kodai-header-height)+3rem)] lg:h-fit text-center lg:text-left">
            <SectionLabel>Export Operating Model</SectionLabel>
            <h2 className="mt-4 font-playfair text-3xl font-medium leading-tight text-kodai-dark sm:text-4xl">
              A clearer way to move from enquiry to shipment
            </h2>
            <p className="mx-auto lg:mx-0 mt-6 max-w-xl text-lg leading-relaxed text-gray-600">
              The .in experience is built around our Indian origin, disciplined sourcing, and
              buyer-first export communication.
            </p>
          </FadeIn>

          <div className="relative space-y-6">
            <div className="absolute left-[39px] top-10 bottom-10 hidden w-px bg-gray-200 sm:block" />
            {processSteps.map((step, index) => {
              return (
                <FadeIn
                  key={step.number}
                  delay={index * 0.1}
                  className="group relative flex flex-col sm:flex-row items-start gap-8 py-4 sm:pl-[24px]"
                >
                  <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-kodai-charcoal text-white shadow-md ring-4 ring-kodai-soft-beige mt-1">
                    <span className="text-[10px] font-bold">{step.number}</span>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-playfair text-xl font-medium text-kodai-charcoal">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-base leading-relaxed text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-[85rem] px-4 sm:px-6 md:px-10">
        <div className="overflow-hidden rounded-[2.5rem] bg-[#faf6ee] shadow-2xl lg:grid lg:grid-cols-2 lg:rounded-[3rem]">
          <div className="relative min-h-[400px] lg:min-h-full overflow-hidden">
            <Image
              src={aboutData.missionVision.bgSrc}
              alt={aboutData.missionVision.bgAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="relative flex flex-col justify-center gap-16 p-10 sm:p-16 lg:p-20 text-kodai-charcoal">
            <FadeIn>
              <div className="flex flex-col gap-5">
                <span className="text-xs font-bold uppercase tracking-[0.28em] text-kodai-gold">
                  Mission
                </span>
                <h3 className="font-playfair text-3xl font-semibold sm:text-4xl">
                  {aboutData.missionVision.mission.title}
                </h3>
                <p className="text-base leading-relaxed text-gray-600">
                  {aboutData.missionVision.mission.description}
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="flex flex-col gap-5">
                <span className="text-xs font-bold uppercase tracking-[0.28em] text-kodai-gold">
                  Vision
                </span>
                <h3 className="font-playfair text-3xl font-semibold sm:text-4xl">
                  {aboutData.missionVision.vision.title}
                </h3>
                <p className="text-base leading-relaxed text-gray-600">
                  {aboutData.missionVision.vision.description}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-[85rem] px-4 sm:px-6 md:px-10" id="about-values">
        <div className="text-center">
          <SectionLabel>{aboutData.values.tagline}</SectionLabel>
          <h2 className="mx-auto mt-4 max-w-4xl font-playfair text-3xl font-medium leading-tight text-kodai-dark sm:text-4xl">
            <FormattedText text={aboutData.values.title} />
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {aboutData.values.items.map((value, index) => {
            const Icon = iconMap[value.icon] || Sparkles;

            return (
              <FadeIn
                key={value.title}
                delay={index * 0.1}
                className="group flex flex-col items-start border-t border-kodai-charcoal/10 pt-8 transition-all duration-300 hover:border-kodai-gold"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#faf6ee] text-kodai-charcoal transition-all duration-300 group-hover:bg-kodai-gold group-hover:text-white">
                  <Icon size={24} />
                </div>
                <h4 className="text-2xl font-bold text-kodai-charcoal">{value.title}</h4>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  {value.description}
                </p>
              </FadeIn>
            );
          })}
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-[85rem] px-4 sm:px-6 md:px-10">
        <div className="overflow-hidden rounded-[3rem] bg-[#faf6ee] shadow-2xl lg:grid lg:grid-cols-[0.8fr_1.2fr]">
          <div className="relative min-h-[400px] lg:min-h-full overflow-hidden">
            <Image
              src={aboutData.mdMessage.imageSrc}
              alt={aboutData.mdMessage.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>

          <div className="relative p-10 sm:p-14 lg:p-20 flex flex-col justify-center text-kodai-charcoal">
            <div className="relative z-10">
              <Quote size={48} className="text-kodai-gold mb-6" />
              <h2 className="font-playfair text-2xl font-medium leading-tight sm:text-3xl">
                <FormattedText
                  text={aboutData.mdMessage.title}
                  highlightClassName="text-kodai-gold italic"
                />
              </h2>
              <div className="mt-8 space-y-6 text-lg leading-relaxed text-gray-600">
                {aboutData.mdMessage.paragraphs.map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </div>
              <div className="mt-10 inline-flex items-center gap-3 border-t border-kodai-charcoal/10 pt-5 text-sm font-semibold">
                <Globe2 size={20} className="text-kodai-gold" />
                Long-term export partnerships from India
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <ImageCTA
          title={aboutData.cta.title}
          description={aboutData.cta.description}
          buttonText={aboutData.cta.button}
          buttonHref={aboutData.cta.href}
          backgroundImage={aboutData.cta.imageSrc}
          imageAlt={aboutData.cta.imageAlt}
          imageClassName="object-center"
        />
      </section>
    </main>
  );
}
