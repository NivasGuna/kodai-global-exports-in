'use client';

import * as React from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

interface ProductCarouselProps {
  images: string[];
  name: string;
  activeIndex: number;
  onIndexChange: (index: number) => void;
}

export function ProductCarousel({
  images,
  name,
  activeIndex,
  onIndexChange,
}: ProductCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>();

  // Scroll carousel when external activeIndex changes (variety button clicked)
  React.useEffect(() => {
    if (!api) return;
    if (api.selectedScrollSnap() !== activeIndex) {
      requestAnimationFrame(() => {
        api.scrollTo(activeIndex);
      });
    }
  }, [api, activeIndex]);

  // Notify parent component when carousel index changes (via swipe or arrow clicks)
  React.useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      const currentIndex = api.selectedScrollSnap();
      onIndexChange(currentIndex);
    };

    api.on('select', onSelect);

    return () => {
      api.off('select', onSelect);
    };
  }, [api, onIndexChange]);

  return (
    <div className="relative h-full w-full group/carousel select-none">
      <Carousel
        setApi={setApi}
        className="h-full w-full [&>[data-slot='carousel-content']]:h-full"
        opts={{
          loop: false,
          duration: 35,
        }}
      >
        <CarouselContent className="h-full -ml-0">
          {images.map((img, idx) => (
            <CarouselItem key={idx} className="relative h-full w-full pl-0">
              <Image
                src={img}
                alt={`${name} variety ${idx + 1}`}
                fill
                priority={idx === 0}
                className="object-cover transition-transform duration-700 hover:scale-102"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        {images.length > 1 && (
          <>
            <CarouselPrevious
              className={cn(
                'absolute bottom-4 right-15 top-auto left-auto translate-y-0 h-9 w-9',
                'bg-white/90 backdrop-blur-sm hover:bg-kodai-gold text-kodai-charcoal hover:text-white',
                'border-none shadow-lg z-30 transition-all duration-300'
              )}
              aria-label="Previous variety"
            />
            <CarouselNext
              className={cn(
                'absolute bottom-4 right-4 top-auto left-auto translate-y-0 h-9 w-9',
                'bg-white/90 backdrop-blur-sm hover:bg-kodai-gold text-kodai-charcoal hover:text-white',
                'border-none shadow-lg z-30 transition-all duration-300'
              )}
              aria-label="Next variety"
            />
          </>
        )}
      </Carousel>
    </div>
  );
}
