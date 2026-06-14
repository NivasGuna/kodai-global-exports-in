'use client';

import * as React from 'react';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import { Product } from '@/lib/config';
import { Badge } from '@/components/ui/badge';
import { FadeIn } from '@/components/shared/FadeIn';

interface MainProductCarouselProps {
  products: Product[];
}

export function MainProductCarousel({ products }: MainProductCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="relative w-full py-12">
      <Carousel
        setApi={setApi}
        className="w-full max-w-[90rem] mx-auto px-4 sm:px-6 md:px-10"
        opts={{
          align: 'start',
          loop: true,
        }}
      >
        <CarouselContent className="-ml-4 md:-ml-6 lg:-ml-8">
          {products.map((product, index) => (
            <CarouselItem key={product.id} className="pl-4 md:pl-6 lg:pl-8 basis-full md:basis-1/2 lg:basis-1/3">
              <FadeIn delay={index * 0.1} className="h-full">
                <div className="group relative overflow-hidden rounded-2xl bg-white shadow-md border border-kodai-charcoal/10 h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                  <div className="flex flex-col flex-grow p-6 md:p-8">
                    <h3 className="text-2xl font-playfair font-semibold text-kodai-charcoal">{product.name}</h3>
                    {product.varieties && product.varieties.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {product.varieties.slice(0, 3).map((variety) => (
                          <Badge key={variety} variant="secondary" className="bg-kodai-light text-kodai-charcoal border-none">
                            {variety}
                          </Badge>
                        ))}
                        {product.varieties.length > 3 && (
                          <Badge variant="secondary" className="bg-kodai-light text-kodai-charcoal border-none">
                            +{product.varieties.length - 3} more
                          </Badge>
                        )}
                      </div>
                    )}
                    <p className="mt-4 text-gray-600 line-clamp-3 text-sm leading-relaxed">
                      {product.description}
                    </p>
                    <div className="mt-auto pt-6">
                      <button 
                        onClick={() => {
                          const element = document.getElementById(product.id);
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                        className="text-sm font-bold uppercase tracking-widest text-kodai-gold hover:text-kodai-charcoal transition-colors"
                      >
                        View Details →
                      </button>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious className="absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 bg-white text-kodai-charcoal hover:bg-kodai-gold hover:text-white border-none shadow-lg h-12 w-12" />
          <CarouselNext className="absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 bg-white text-kodai-charcoal hover:bg-kodai-gold hover:text-white border-none shadow-lg h-12 w-12" />
        </div>
      </Carousel>

      {/* Dots Navigation for Mobile/Tablet */}
      <div className="mt-8 flex justify-center gap-2 md:hidden">
        {products.map((_, i) => (
          <button
            key={i}
            onClick={() => api?.scrollTo(i)}
            className={cn(
              'h-2 w-2 rounded-full transition-all duration-300',
              current === i
                ? 'w-6 bg-kodai-gold'
                : 'bg-gray-300 hover:bg-gray-400',
            )}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
