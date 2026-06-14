import type { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle2, Globe2, ShieldCheck, FileCheck2 } from 'lucide-react';
import homeContent from './home.json';
import { FormattedText } from '@/components/shared/FormattedText';
import { HeroCarousel } from '@/components/shared/HeroCarousel';
import { SectionLabel } from '@/components/shared/SectionLabel';
import { FadeIn } from '@/components/shared/FadeIn';
import { VideoSection } from './VideoSection';
import { ImageCTA } from '@/components/shared/ImageCTA';

export const metadata: Metadata = homeContent.metadata;

const introIcons = [CheckCircle2, FileCheck2, ShieldCheck];

export default function HomePage() {
  return (
    <main className="pb-24">
      <HeroCarousel slides={homeContent.hero.slides} highlights={homeContent.intro.highlights} />

      <section className="mx-auto mt-12 max-w-[85rem] px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <FadeIn
            direction="right"
            className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] shadow-2xl lg:aspect-auto lg:h-[650px]"
          >
            <Image
              src={homeContent.intro.imageSrc}
              alt={homeContent.intro.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </FadeIn>

          <div className="space-y-7">
            <FadeIn delay={0.2}>
              <SectionLabel>{homeContent.intro.tagline}</SectionLabel>
              <h2 className="mt-3 max-w-4xl font-playfair text-3xl font-medium text-kodai-charcoal sm:text-4xl lg:text-5xl leading-tight">
                <FormattedText text={homeContent.intro.title} />
              </h2>
            </FadeIn>

            <div className="space-y-5 text-base leading-8 text-gray-600 sm:text-lg">
              {homeContent.intro.paragraphs.map((paragraph, idx) => (
                <FadeIn key={paragraph} delay={0.3 + idx * 0.1}>
                  <p>{paragraph}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {homeContent.intro.highlights.map((item, index) => {
            const Icon = introIcons[index] || CheckCircle2;
            return (
              <FadeIn key={item} delay={index * 0.1} className="group flex flex-col items-start">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#faf6ee] text-kodai-charcoal transition-all duration-300 group-hover:bg-kodai-gold group-hover:text-white">
                  <Icon size={24} />
                </div>
                <h3 className="mt-6 text-lg font-bold text-kodai-charcoal">{item}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {homeContent.intro.featureDescription}
                </p>
              </FadeIn>
            );
          })}
        </div>
      </section>

      <section className="mt-24 bg-[#faf6ee] py-20 sm:py-28">
        <div className="mx-auto max-w-[85rem] px-4 sm:px-6 md:px-10">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <FadeIn className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.28em] text-kodai-gold">
                {homeContent.markets.tagline}
              </span>
              <h2 className="mt-4 font-playfair text-3xl font-medium sm:text-4xl text-kodai-charcoal">
                <FormattedText
                  text={homeContent.markets.title}
                  highlightClassName="text-kodai-dark italic"
                />
              </h2>
              <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
                {homeContent.markets.description}
              </p>
            </FadeIn>

            <FadeIn delay={0.2} className="flex-none">
              <div className="flex flex-wrap gap-3 lg:max-w-md lg:justify-end">
                {homeContent.markets.countries.map((country) => (
                  <div
                    key={country}
                    className="flex items-center gap-2 border-b border-kodai-charcoal/20 px-1 py-2.5 text-sm font-medium transition-colors hover:border-kodai-charcoal text-kodai-charcoal"
                  >
                    <Globe2 size={16} className="text-kodai-gold" />
                    <span>{country}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          <FadeIn
            delay={0.3}
            className="mt-20 overflow-hidden rounded-[2.5rem] shadow-xl bg-white/30 backdrop-blur-sm"
          >
            <Image
              src="/images/kodaiglobal_markets_map.png"
              alt={homeContent.markets.mapAlt}
              width={1600}
              height={900}
              sizes="100vw"
              className="h-auto w-full object-cover opacity-80 mix-blend-multiply"
            />
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-[85rem] px-4 sm:px-6 md:px-10">
        <div className="flex flex-col items-center text-center">
          <SectionLabel>{homeContent.certifications.tagline}</SectionLabel>
          <h2 className="mx-auto mt-4 max-w-4xl font-playfair text-3xl font-medium text-kodai-charcoal sm:text-4xl leading-tight">
            <FormattedText text={homeContent.certifications.title} />
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-6">
          {homeContent.certifications.logos.map((logo, index) => (
            <FadeIn
              key={logo.name}
              delay={index * 0.1}
              className="group relative flex aspect-square w-full flex-col items-center justify-center bg-transparent p-6 text-center transition-all duration-300"
            >
              <div className="relative h-20 w-20 transition-transform duration-500 group-hover:scale-110 mb-4">
                <Image
                  src={logo.imageSrc}
                  alt={logo.imageAlt}
                  fill
                  sizes="120px"
                  className="object-contain"
                />
              </div>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-kodai-dark">
                {logo.name}
              </p>
            </FadeIn>
          ))}
        </div>
      </section>

      <VideoSection />

      <section className="mt-24">
        <ImageCTA
          title={homeContent.cta.title}
          description={homeContent.cta.description}
          buttonText={homeContent.cta.primary.label}
          buttonHref={homeContent.cta.primary.href}
          secondaryButtonText={homeContent.cta.secondary.label}
          secondaryButtonHref={homeContent.cta.secondary.href}
          backgroundImage="/images/home-cta.webp"
          imageAlt="Global trade shipping containers"
          badge="Export Enquiries"
        />
      </section>
    </main>
  );
}
