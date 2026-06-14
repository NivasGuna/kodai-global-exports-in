'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { ProductType } from '../data/products';

interface ProductTypeButtonsProps {
  types: ProductType[];
  activeTypeId: string;
  onTypeSelect: (typeId: string) => void;
}

export function ProductTypeButtons({
  types,
  activeTypeId,
  onTypeSelect,
}: ProductTypeButtonsProps) {
  // Ref for the container (can be retained for reference or accessibility if needed)
  const containerRef = React.useRef<HTMLDivElement>(null);

  return (
    <div className="mt-6 w-full">
      <div
        ref={containerRef}
        role="tablist"
        aria-label="Product varieties"
        className="flex flex-wrap items-center gap-2 pb-2"
      >
        {/* Webkit specific styling can be managed via CSS, but scrollbarWidth hides in Firefox */}
        <style dangerouslySetInnerHTML={{
          __html: `
            div::-webkit-scrollbar {
              display: none;
            }
          `
        }} />
        {types.map((type) => {
          const isActive = type.id === activeTypeId;
          return (
            <button
              key={type.id}
              role="tab"
              id={`tab-${type.id}`}
              aria-selected={isActive}
              aria-controls={`panel-${type.id}`}
              onClick={() => onTypeSelect(type.id)}
              className={cn(
                'whitespace-nowrap rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer border',
                'focus:outline-none focus:ring-2 focus:ring-kodai-gold/40 focus:ring-offset-2',
                isActive
                  ? 'bg-kodai-gold border-kodai-gold text-white shadow-md shadow-kodai-gold/10 scale-[1.02]'
                  : 'bg-white border-gray-200 text-gray-600 hover:text-kodai-dark hover:border-gray-300 hover:bg-gray-50'
              )}
            >
              {type.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
