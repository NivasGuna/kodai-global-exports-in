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
    badge: 'text-[#f6dc96] tracking-[0.3em] font-bold',
    title: 'text-white',
    titleHighlight:
      'text-transparent bg-clip-text bg-gradient-to-r from-[#f6dc96] to-white font-black',
    titleClasses:
      'text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-[-0.025em] leading-[0.9] drop-shadow-2xl',
    description: 'text-white/95 drop-shadow-md',
    trust: 'text-white drop-shadow-md',
    icon: 'text-[#f6dc96]',
    button:
      'group relative overflow-hidden bg-gradient-to-r from-[#c5a059] to-[#f6dc96] text-white drop-shadow-sm shadow-[0_8px_30px_rgba(197,160,89,0.3)] hover:shadow-[0_8px_40px_rgba(246,220,150,0.5)] border-none',
  },
  faq: {
    image: 'object-center lg:object-[78%_center]',
    badge: 'text-[#f6dc96] tracking-[0.3em] font-bold',
    title: 'text-white',
    titleHighlight:
      'text-transparent bg-clip-text bg-gradient-to-r from-[#f6dc96] to-white font-black',
    titleClasses:
      'text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-[-0.025em] leading-[0.9] drop-shadow-2xl',
    description: 'text-white/95 drop-shadow-md',
    trust: 'text-white drop-shadow-md',
    icon: 'text-[#f6dc96]',
    button:
      'group relative overflow-hidden bg-gradient-to-r from-[#c5a059] to-[#f6dc96] text-white drop-shadow-sm shadow-[0_8px_30px_rgba(197,160,89,0.3)] hover:shadow-[0_8px_40px_rgba(246,220,150,0.5)] border-none',
  },
  contact: {
    image: 'object-center lg:object-[78%_center]',
    badge: 'text-[#f6dc96] tracking-[0.3em] font-bold',
    title: 'text-white',
    titleHighlight:
      'text-transparent bg-clip-text bg-gradient-to-r from-[#f6dc96] to-white font-black',
    titleClasses:
      'text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-[-0.025em] leading-[0.9] drop-shadow-2xl',
    description: 'text-white/95 drop-shadow-md',
    trust: 'text-white drop-shadow-md',
    icon: 'text-[#f6dc96]',
    button:
      'group relative overflow-hidden bg-gradient-to-r from-[#c5a059] to-[#f6dc96] text-white drop-shadow-sm shadow-[0_8px_30px_rgba(197,160,89,0.3)] hover:shadow-[0_8px_40px_rgba(246,220,150,0.5)] border-none',
  },
} satisfies Record<
  HeroVariant,
  {
    image: string;
    badge: string;
    title: string;
    titleHighlight: string;
    titleClasses: string;
    description: string;
    trust: string;
    icon: string;
    button: string;
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
      </div>

      {/* Dark overlay for readability on mobile - darkened significantly */}
      <div className="absolute inset-0 z-[5] bg-black/60 md:hidden" />
      <div className="absolute inset-0 z-[5] bg-gradient-to-t from-black/80 via-black/40 to-transparent md:hidden" />

      {/* Gradient overlay for readability on desktop - widened and darkened */}
      <div className="absolute inset-y-0 left-0 z-[5] hidden w-full bg-gradient-to-r from-black/50 to-transparent md:block md:w-[85%] lg:w-[75%]" />

      {/* Content left aligned */}
      <div className="absolute inset-0 z-10 flex items-center justify-start text-left">
        <div className="w-full px-4 sm:px-6 md:px-10 mt-20">
          <div className="mx-auto max-w-[85rem] flex flex-col items-start">
            <div className="w-full max-w-5xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-1.5 backdrop-blur-md shadow-lg">
                <div className="h-1.5 w-1.5 rounded-full bg-[#f6dc96]"></div>
                <p className={cn('font-quicksand text-[0.72rem] uppercase', theme.badge)}>
                  {badge}
                </p>
              </div>
              <h1
                className={cn(
                  'mt-3 text-balance break-normal font-quicksand leading-6',
                  variant === 'about' ? 'max-w-4xl' : 'max-w-5xl',
                  theme.title,
                  theme.titleClasses,
                )}
              >
                <FormattedText text={title} highlightClassName={theme.titleHighlight} />
              </h1>
              <p
                className={cn(
                  'font-nunito-sans mt-4 text-base leading-7 sm:text-lg sm:leading-8',
                  variant === 'about' ? 'max-w-xl' : 'max-w-2xl',
                  theme.description,
                )}
              >
                {description}
              </p>

              <div className="mt-8 flex flex-col items-start gap-5">
                <div className="flex flex-wrap justify-start gap-x-5 gap-y-4">
                  {trustPoints.map((point) => (
                    <span
                      key={point}
                      className={cn(
                        'inline-flex items-center gap-2 border-b border-white/35 pb-1 text-sm font-medium tracking-[0.02em] sm:text-base',
                        theme.trust,
                      )}
                    >
                      <CheckCircle2 size={16} className={cn(theme.icon ?? 'text-kodai-gold')} />
                      {point}
                    </span>
                  ))}
                </div>
                <Link
                  href={buttonHref}
                  className={cn(
                    'inline-flex w-fit items-center gap-2 rounded-full px-8 py-3.5 text-[0.8rem] font-extrabold uppercase tracking-[0.2em] transition-all hover:-translate-y-1',
                    theme.button,
                  )}
                >
                  <span className="relative z-10">{buttonText}</span>
                  <ArrowRight
                    size={18}
                    className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                  />
                  <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#f6dc96] to-[#c5a059] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
