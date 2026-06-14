import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Star, StarHalf, ArrowRight, Quote } from 'lucide-react';
import faqList from './faq.json';
import reviews from './reviews.json';
import pageContent from './content.json';
import { FormattedText } from '@/components/shared/FormattedText';
import { FadeIn } from '@/components/shared/FadeIn';
import { PremiumPageHero } from '@/components/shared/PremiumPageHero';
import { ImageCTA } from '@/components/shared/ImageCTA';

export const metadata = pageContent.metadata;

export default function Page() {
  return (
    <main className="pb-24">
      <PremiumPageHero
        variant="faq"
        badge={pageContent.hero.badge}
        title={pageContent.hero.title}
        description={pageContent.hero.subtitle}
        trustPoints={pageContent.hero.highlights}
        imageSrc={pageContent.hero.imageSrc}
        imageAlt={pageContent.hero.imageAlt}
        buttonText={pageContent.hero.buttonText}
        buttonHref={pageContent.hero.buttonHref}
      />

      <section
        id="faq-list"
        className="mx-auto mt-12 scroll-mt-32 max-w-[85rem] px-4 sm:px-6 md:px-10"
      >
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="lg:sticky lg:top-[calc(var(--kodai-header-height)+2rem)] h-fit">
            <div className="relative min-h-[520px] overflow-hidden rounded-[2.5rem] text-white shadow-2xl">
              <Image
                src={pageContent.contact.imageSrc}
                alt={pageContent.contact.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              <div className="relative z-10 flex min-h-[520px] flex-col items-start justify-end p-8 sm:p-12">
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-kodai-gold">
                  {pageContent.contact.tagline}
                </p>
                <p className="mt-3 font-playfair text-3xl font-medium leading-tight text-white sm:text-4xl">
                  {pageContent.contact.title}
                </p>
                <p className="mt-4 text-base leading-8 text-white/90">
                  {pageContent.contact.description}
                </p>
                <a
                  href="/contact"
                  className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-kodai-gold px-8 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-xl transition-all hover:-translate-y-1 hover:bg-kodai-gold/90"
                >
                  {pageContent.contact.buttonText} <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </aside>

          <div className="space-y-8 lg:pl-4 border-t border-kodai-charcoal/15 pt-8 sm:pt-10 lg:pt-12 lg:border-t-0">
            <FadeIn>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-kodai-gold">
                {pageContent.faq.tagline}
              </span>
              <h2 className="mt-4 font-playfair text-3xl font-medium text-kodai-charcoal sm:text-4xl">
                {pageContent.faq.title}
              </h2>
            </FadeIn>

            <Accordion type="single" collapsible className="w-full flex flex-col gap-4">
              {faqList.map((item, index) => (
                <FadeIn key={index} delay={index * 0.05} className="h-auto">
                  <AccordionItem
                    value={`item-${index}`}
                    className="group border border-gray-100 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all overflow-hidden data-[state=open]:ring-2 data-[state=open]:ring-kodai-gold/20 data-[state=open]:shadow-lg"
                  >
                    <AccordionTrigger className="py-6 px-6 sm:px-8 text-left text-lg font-semibold text-kodai-charcoal hover:no-underline sm:text-xl transition-all group-data-[state=open]:bg-kodai-soft-beige/30">
                      <span className="flex items-center gap-6">
                        <span className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-kodai-light text-sm font-bold text-kodai-gold group-data-[state=open]:bg-kodai-gold group-data-[state=open]:text-white transition-colors">
                          {(index + 1).toString().padStart(2, '0')}
                        </span>
                        <span className="leading-snug">{item.question}</span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-8 px-6 sm:px-8 pt-2 sm:pl-[5.5rem] text-base leading-relaxed text-gray-600 whitespace-pre-line h-auto bg-white">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                </FadeIn>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-[85rem] px-4 sm:px-6 md:px-10">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-kodai-green">
            {pageContent.reviews.tagline}
          </span>
          <h2 className="mx-auto mt-4 max-w-4xl font-playfair text-3xl font-medium leading-tight text-kodai-charcoal sm:text-4xl">
            <FormattedText text={pageContent.reviews.title} highlightClassName="text-kodai-gold italic" />
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {reviews.map((review, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] bg-white p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-kodai-charcoal/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:border-kodai-gold/20">
                <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#fdfcf9] z-0" />
                
                {/* Background decorative quote */}
                <Quote size={120} strokeWidth={1} className="absolute -right-4 -top-4 text-kodai-gold/5 z-0 rotate-12 transition-transform duration-700 group-hover:rotate-0 group-hover:scale-110 group-hover:text-kodai-gold/10" />
                
                <div className="relative z-10">
                  <div className="flex gap-1 mb-8">
                    {[...Array(5)].map((_, i) => {
                      const isFull = review.rating >= i + 1;
                      const isHalf = !isFull && review.rating >= i + 0.5;
                      
                      if (isHalf) {
                        return (
                          <div key={i} className="relative flex h-4 w-4 items-center justify-center">
                            <Star size={16} className="absolute text-gray-200" />
                            <StarHalf size={16} className="absolute fill-kodai-gold text-kodai-gold" />
                          </div>
                        );
                      }
                      
                      return (
                        <Star 
                          key={i} 
                          size={16} 
                          className={isFull ? "fill-kodai-gold text-kodai-gold" : "text-gray-200"} 
                        />
                      );
                    })}
                  </div>
                  
                  <p className="text-lg sm:text-xl leading-relaxed text-kodai-charcoal font-playfair italic">
                    &ldquo;{review.comment}&rdquo;
                  </p>
                </div>

                <div className="relative z-10 mt-10 flex items-center gap-4 border-t border-kodai-charcoal/5 pt-6">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-kodai-dark text-sm font-bold tracking-wider text-kodai-gold shadow-inner">
                    {review.name.split(' ').map((n: string) => n[0]).join('').substring(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-kodai-charcoal">
                      {review.name}
                    </h3>
                    <p className="mt-0.5 text-[11px] font-bold uppercase tracking-widest text-kodai-gold/80">
                      {review.role}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <ImageCTA
          title={pageContent.cta.title}
          description={pageContent.cta.description}
          buttonText={pageContent.cta.buttonText}
          buttonHref={pageContent.cta.buttonHref}
          backgroundImage={pageContent.cta.imageSrc}
          imageAlt={pageContent.cta.imageAlt}
          imageClassName="object-center"
        />
      </section>
    </main>
  );
}
