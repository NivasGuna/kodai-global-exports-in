import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { FormattedText } from './FormattedText';

type HeroVariant = 'about' | 'faq' | 'contact';

interface PremiumPageHeroProps {
  variant: HeroVariant;
  badge: string;
  title: string;
  description: string;
  trustPoints: string[];
  imageSrc: string;
  imageAlt: string;
  buttonText: string;
  buttonHref: string;
}

const heroTheme = {
  about: {
    image: 'object-center lg:object-[78%_center]',
  },
  faq: {
    image: 'object-center lg:object-[78%_center]',
  },
  contact: {
    image: 'object-center lg:object-[78%_center]',
  },
} satisfies Record<
  HeroVariant,
  {
    image: string;
  }
>;

export function PremiumPageHero({
  variant,
  badge,
  title,
  description,
  trustPoints,
  imageSrc,
  imageAlt,
  buttonText,
  buttonHref,
}: PremiumPageHeroProps) {
  const theme = heroTheme[variant];

  return (
    <section className="relative isolate h-[100dvh] overflow-hidden bg-kodai-charcoal">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="100vw"
          priority
          className={cn('object-cover', theme.image)}
        />
        {/* No gradient overlays over the image as requested */}
      </div>

      {/* Content left aligned */}
      <div className="absolute inset-0 z-10 flex items-center justify-start text-left">
        <div className="w-full px-4 sm:px-6 md:px-10 mt-20">
          <div className="mx-auto max-w-[85rem] flex flex-col items-start">
            <div className="max-w-4xl flex flex-col items-start">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-kodai-gold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                {badge}
              </p>
              <h1 className="mt-4 max-w-5xl text-balance break-words font-playfair text-4xl font-medium leading-[1.15] text-white sm:text-5xl lg:text-6xl xl:text-7xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
                <FormattedText text={title} highlightClassName="italic text-white" />
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-white/95 sm:text-lg sm:leading-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                {description}
              </p>
            </div>

            <div className="mt-10 flex flex-col items-start gap-6">
              <div className="flex flex-wrap justify-start gap-x-6 gap-y-3">
                {trustPoints.map((point) => (
                  <span
                    key={point}
                    className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
                  >
                    <CheckCircle2 size={16} className="text-kodai-gold" />
                    {point}
                  </span>
                ))}
              </div>
              <Link
                href={buttonHref}
                className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-kodai-charcoal shadow-lg transition-all hover:-translate-y-1 hover:bg-white/95 hover:shadow-xl"
              >
                {buttonText}
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
