'use client';

import { Suspense } from 'react';
import { Leaf, CheckCircle2 } from 'lucide-react';
import { FormattedText } from '@/components/shared/FormattedText';
import { HeroCarousel } from '@/components/shared/HeroCarousel';
import { SectionLabel } from '@/components/shared/SectionLabel';
import { FadeIn } from '@/components/shared/FadeIn';
import { ImageCTA } from '@/components/shared/ImageCTA';
import productsData from './products.json';
import { useProductSync } from './hooks/useProductSync';
import { ProductCardRow } from './components/ProductCardRow';
import { products } from './data/products';
import Link from 'next/link';

function ProductsContent() {
  const { activeProductId, activeVarietyId } = useProductSync();

  return (
    <main className="pb-24 bg-white">
      {/* 1. Products Hero Section */}
      <HeroCarousel
        slides={productsData.hero.slides}
        highlights={productsData.hero.features}
        variant="product"
      />

      {/* 2. Product Rows Section */}
      <section className="mx-auto mt-24 max-w-[85rem] px-4 sm:px-6 md:px-10">
        <FadeIn className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <SectionLabel>{productsData.range.tagline}</SectionLabel>
            <h2 className="mt-3 font-playfair text-3xl font-medium text-kodai-dark sm:text-4xl">
              {productsData.range.title}
            </h2>
          </div>
        </FadeIn>

        {/* Product Cards List */}
        <div className="mt-14 flex flex-col gap-12 sm:gap-16">
          {products.map((product) => (
            <FadeIn key={product.id} className="w-full">
              <ProductCardRow
                product={product}
                isHashActive={activeProductId === product.id}
                activeVarietyId={activeVarietyId}
                ui={productsData.ui}
              />
            </FadeIn>
          ))}

          {/* Custom Requirements Banner */}
          <FadeIn className="w-full">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 md:p-12 text-left bg-[#faf6ee]/60 rounded-3xl border border-kodai-charcoal/5 shadow-sm">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 max-w-3xl">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white text-kodai-gold shadow-sm border border-gray-100/50">
                  <Leaf size={28} />
                </div>
                <div>
                  <h3 className="font-playfair text-2xl font-semibold text-kodai-charcoal">
                    {productsData.soon.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600 font-medium">
                    {productsData.soon.description}
                  </p>
                </div>
              </div>
              <Link
                href="/contact"
                className="shrink-0 inline-flex items-center justify-center px-6 py-3 rounded-full bg-kodai-charcoal text-white hover:bg-kodai-gold text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-kodai-gold/50"
              >
                Discuss Requirements →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 4. Quality / Export Highlights Section */}
      <section className="mx-auto mt-32 max-w-[85rem] px-4 sm:px-6 md:px-10">
        <div className="text-center">
          <SectionLabel>{productsData.qualityHighlights.tagline}</SectionLabel>
          <h2 className="mx-auto mt-4 max-w-3xl font-playfair text-3xl font-medium text-kodai-dark sm:text-4xl">
            <FormattedText text={productsData.qualityHighlights.title} />
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-500">
            {productsData.qualityHighlights.subtitle}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {productsData.qualityHighlights.items.map(
            (highlight: { title: string; description: string }, index: number) => (
              <FadeIn key={highlight.title} delay={index * 0.1}>
                <div className="group h-full bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#faf6ee] text-kodai-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-kodai-charcoal mb-3">{highlight.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{highlight.description}</p>
                </div>
              </FadeIn>
            ),
          )}
        </div>
      </section>

      {/* 5. CTA Section */}
      <div className="mb-20">
        <ImageCTA
          badge="Bulk Supply"
          title="Ready to source premium quality?"
          description="Contact us today for product specifications, pricing, and sample requests. We ensure a seamless export experience."
          buttonText={productsData.range.ctaText}
          buttonHref="/contact"
          backgroundImage="/images/product-cta.webp"
          imageAlt="Export ready products packaging"
        />
      </div>
    </main>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={null}>
      <ProductsContent />
    </Suspense>
  );
}
