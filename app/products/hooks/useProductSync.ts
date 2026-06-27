import { useState, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { products } from '../data/products';

type ProductHashTarget = {
  productId: string;
  typeId: string | null;
};

function normalizeHash(hash: string) {
  try {
    return decodeURIComponent(hash).trim().toLowerCase();
  } catch {
    return hash.trim().toLowerCase();
  }
}

function resolveProductHash(hash: string): ProductHashTarget | null {
  const normalizedHash = normalizeHash(hash);

  if (!normalizedHash) {
    return null;
  }

  for (const product of products) {
    if (product.id === normalizedHash) {
      return {
        productId: product.id,
        typeId: product.types[0]?.id ?? null,
      };
    }

    const matchedType = product.types.find(
      (type) =>
        type.id === normalizedHash ||
        `${product.id}-${type.id}` === normalizedHash
    );

    if (matchedType) {
      return {
        productId: product.id,
        typeId: matchedType.id,
      };
    }
  }

  return null;
}

export function useProductSync() {
  const [activeProductId, setActiveProductId] = useState<string | null>(null);
  const [activeVarietyId, setActiveVarietyId] = useState<string | null>(null);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleSync = () => {
      const hash = window.location.hash.replace(/^#/, '');
      const target = resolveProductHash(hash);

      if (!target) {
        setActiveProductId(null);
        setActiveVarietyId(null);
        return;
      }

      setActiveProductId(target.productId);
      setActiveVarietyId(target.typeId);

      const el = document.getElementById(target.productId);
      if (el) {
        requestAnimationFrame(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      }
    };

    // Delay slightly to allow full page mounting and DOM rendering
    const timer = setTimeout(handleSync, 100);
    window.addEventListener('hashchange', handleSync);
    window.addEventListener('popstate', handleSync);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('hashchange', handleSync);
      window.removeEventListener('popstate', handleSync);
    };
  }, [pathname, searchParams]);

  // Clear only the temporary card highlight after scroll completes.
  useEffect(() => {
    if (activeProductId) {
      const timeout = setTimeout(() => {
        setActiveProductId(null);
        setActiveVarietyId(null);
      }, 4000);
      return () => clearTimeout(timeout);
    }
  }, [activeProductId, activeVarietyId]);

  return {
    activeProductId,
    activeVarietyId,
  };
}
