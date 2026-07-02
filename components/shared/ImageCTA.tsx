import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ImageCTAProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  backgroundImage: string;
  imageAlt?: string;
  badge?: string;
  className?: string;
  contentClassName?: string;
  imageClassName?: string;
}

export function ImageCTA({
  title,
  description,
  buttonText,
  buttonHref,
  secondaryButtonText,
  secondaryButtonHref,
  backgroundImage,
  imageAlt = '',
  badge = 'Kodai Global Exports',
  className,
  contentClassName,
  imageClassName,
}: ImageCTAProps) {
  return (
    <div className="mx-auto max-w-[85rem] px-4 sm:px-6 md:px-10 py-10">
      <section
        className={cn(
          'relative isolate overflow-hidden rounded-[2.5rem] shadow-2xl lg:rounded-[3rem]',
          className,
        )}
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt={imageAlt}
            fill
            sizes="100vw"
            className={cn('object-cover', imageClassName)}
          />
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        {/* Content */}
        <div
          className={cn(
            'relative z-10 mx-auto flex min-h-[400px] items-center justify-center text-center px-6 py-16 sm:min-h-[450px] sm:px-10 lg:px-16',
            contentClassName,
          )}
        >
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-kodai-gold text-center">
              {badge}
            </p>
            <h3 className="mt-4 font-playfair text-3xl font-medium leading-tight text-white text-center sm:text-4xl lg:text-5xl">
              {title}
            </h3>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/80 text-center sm:text-lg">
              {description}
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href={buttonHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-kodai-charcoal shadow-lg transition-all hover:-translate-y-1 hover:bg-white/95 hover:shadow-xl"
              >
                {buttonText}
                <ArrowRight size={17} />
              </Link>
              {secondaryButtonText && secondaryButtonHref && (
                <Link
                  href={secondaryButtonHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:-translate-y-1 hover:border-white/70 hover:bg-white/10"
                >
                  {secondaryButtonText}
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
