'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ProductType } from '../data/products';
import { ProductSpecificationList } from './ProductSpecificationList';

interface ProductDetailsModalProps {
  productTitle: string;
  activeType: ProductType;
  ui: {
    moreDetails: string;
    specifications: string;
    [key: string]: string;
  };
}

export function ProductDetailsModal({
  productTitle,
  activeType,
  ui,
}: ProductDetailsModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className={cn(
            'group/btn flex items-center justify-between gap-6 rounded-full border p-2 pl-6 transition-all duration-300 w-full sm:w-auto',
            'border-kodai-charcoal/15 text-kodai-dark hover:border-kodai-gold hover:text-kodai-gold cursor-pointer bg-white'
          )}
          aria-label={`View more details for ${productTitle} - ${activeType.label}`}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-kodai-dark group-hover/btn:text-kodai-gold transition-colors">
            {ui.moreDetails}
          </span>
          <div
            className={cn(
              'flex h-10 w-10 items-center justify-center rounded-full border border-kodai-charcoal/15 text-kodai-charcoal transition-all duration-500 group-hover/btn:translate-x-1 group-hover/btn:border-kodai-gold group-hover/btn:text-kodai-gold'
            )}
          >
            <ArrowRight
              size={18}
              className="transition-transform group-hover/btn:translate-x-0.5"
            />
          </div>
        </button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-[650px] rounded-3xl p-6 md:p-8 bg-white z-[60] border border-black/10 shadow-[0_24px_80px_rgba(26,31,46,0.14)] overflow-y-auto max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="font-playfair text-2xl font-semibold text-kodai-dark flex flex-wrap items-center gap-2">
            <span>{productTitle}</span>
            <span className="text-gray-400 font-sans font-light text-xl">/</span>
            <span className="text-kodai-gold font-sans font-semibold text-xl">{activeType.label}</span>
          </DialogTitle>
        </DialogHeader>
        
        <div className="mt-6 space-y-6">
          <div>
            <h4 className="font-bold text-kodai-dark text-sm uppercase tracking-wider mb-2.5">
              Product Overview
            </h4>
            <p className="text-sm leading-7 text-gray-600 font-medium">
              {activeType.overview}
            </p>
          </div>
          
          {activeType.specifications && activeType.specifications.length > 0 && (
            <div>
              <h4 className="font-bold text-kodai-dark text-sm uppercase tracking-wider mb-3">
                {ui.specifications}
              </h4>
              <ProductSpecificationList specifications={activeType.specifications} />
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
