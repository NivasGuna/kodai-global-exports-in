'use client';

import * as React from 'react';
import { Award } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Product } from '../data/products';
import { ProductCarousel } from './ProductCarousel';
import { ProductTypeButtons } from './ProductTypeButtons';
import { ProductDetailsModal } from './ProductDetailsModal';

interface ProductCardRowProps {
  product: Product;
  isHashActive: boolean;
  activeVarietyId: string | null;
  ui: {
    moreDetails: string;
    selected: string;
    premiumGrade: string;
    specifications: string;
    [key: string]: string;
  };
}

export function ProductCardRow({ product, isHashActive, activeVarietyId, ui }: ProductCardRowProps) {
  // Local state for tracking active variety index
  const [activeTypeIndex, setActiveTypeIndex] = React.useState(0);

  // Sync state if index becomes out of bounds
  React.useEffect(() => {
    if (activeTypeIndex >= product.types.length) {
      setActiveTypeIndex(0);
    }
  }, [product.types.length, activeTypeIndex]);

  // Sync card active variety type index with activeVarietyId prop
  React.useEffect(() => {
    if (!activeVarietyId) return;

    const normalizedVariety = activeVarietyId.toLowerCase();
    const targetIndex = product.types.findIndex(
      (type) =>
        type.id === normalizedVariety ||
        `${product.id}-${type.id}` === normalizedVariety
    );

    if (targetIndex !== -1) {
      setActiveTypeIndex(targetIndex);
    }
  }, [activeVarietyId, product.id, product.types]);

  const activeType = product.types[activeTypeIndex] || product.types[0];

  const handleTypeSelect = (typeId: string) => {
    const targetIndex = product.types.findIndex((t) => t.id === typeId);
    if (targetIndex !== -1) {
      setActiveTypeIndex(targetIndex);
    }
  };

  return (
    <div
      id={product.id}
      className={cn(
        'group relative flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12 bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-gray-100 transition-all duration-500 shadow-sm hover:shadow-xl scroll-mt-32',
        'lg:min-h-[460px] lg:h-[460px]',
        isHashActive && 'ring-2 ring-kodai-gold shadow-lg'
      )}
    >
      {/* Left side: Product Content & Variety Selectors */}
      <div className="order-2 lg:order-1 w-full lg:w-[52%] lg:self-stretch flex flex-col justify-between">
        <div>
          {/* Quality Badge */}
          <div className="flex items-center gap-2 text-kodai-gold animate-fade-in">
            <Award size={18} />
            <span className="text-xs font-bold uppercase tracking-[0.22em]">
              {isHashActive ? ui.selected : ui.premiumGrade}
            </span>
          </div>

          {/* Product Title */}
          <h3 className="mt-4 font-playfair text-3xl font-semibold text-kodai-charcoal">
            {product.title}
          </h3>

          {/* Description */}
          <p className="mt-4 text-base leading-relaxed text-gray-600 font-medium">
            {product.shortDescription}
          </p>

          {/* Variety Type Buttons */}
          {product.types.length > 0 && (
            <ProductTypeButtons
              types={product.types}
              activeTypeId={activeType.id}
              onTypeSelect={handleTypeSelect}
            />
          )}
        </div>

        {/* Action Button (Details Modal) */}
        <div className="mt-8 pt-4 border-t border-gray-100/50">
          <ProductDetailsModal
            productTitle={product.title}
            activeType={activeType}
            ui={ui}
          />
        </div>
      </div>

      {/* Right side: Image Carousel (Image first on mobile) */}
      <div className="order-1 lg:order-2 w-full lg:w-[42%] flex-shrink-0 aspect-[4/3] rounded-2xl overflow-hidden relative bg-gray-50 border border-gray-100 shadow-inner">
        <ProductCarousel
          images={product.types.map((t) => t.image)}
          name={product.title}
          activeIndex={activeTypeIndex}
          onIndexChange={setActiveTypeIndex}
        />
      </div>
    </div>
  );
}
