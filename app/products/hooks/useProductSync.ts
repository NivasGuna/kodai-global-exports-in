import { useState, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function useProductSync() {
  const [activeProductId, setActiveProductId] = useState<string | null>(null);
  const [activeVarietyId, setActiveVarietyId] = useState<string | null>(null);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleSync = () => {
      const hash = window.location.hash.replace('#', '');
      if (!hash) {
        setActiveProductId(null);
        setActiveVarietyId(null);
        return;
      }

      const normalizedHash = hash.toLowerCase();
      setActiveVarietyId(normalizedHash);

      // Map variety-specific hashes to their main product card IDs
      let matchedProductId: string | null = null;

      if (normalizedHash === 'tapioca-starch' || normalizedHash === 'tapioca-starch-food-grade' || normalizedHash === 'tapioca-starch-industrial-grade') {
        matchedProductId = 'tapioca-starch';
      } else if (normalizedHash === 'tapioca-flour') {
        matchedProductId = 'tapioca-flour';
      } else if (['milk-white', 'glassy-nylon', 'mini-nylon', 'sago-sabudana', 'modidana', 'pappads'].includes(normalizedHash)) {
        matchedProductId = 'sago-varieties';
      } else if (normalizedHash === 'robusta' || normalizedHash === 'arabica' || normalizedHash === 'coffee-beans') {
        matchedProductId = 'coffee-beans';
      } else if (normalizedHash === 'clove') {
        matchedProductId = 'clove';
      }

      if (matchedProductId) {
        setActiveProductId(matchedProductId);

        const el = document.getElementById(matchedProductId);
        if (el) {
          requestAnimationFrame(() => {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          });
        }
      } else {
        setActiveProductId(null);
      }
    };

    // Delay slightly to allow full page mounting and DOM rendering
    const timer = setTimeout(handleSync, 100);
    window.addEventListener('hashchange', handleSync);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('hashchange', handleSync);
    };
  }, [pathname, searchParams]);

  // Auto-clear product selection after scroll completes
  useEffect(() => {
    if (activeProductId) {
      const timeout = setTimeout(() => {
        setActiveProductId(null);
        setActiveVarietyId(null);
        window.history.replaceState(null, '', pathname);
      }, 4000);
      return () => clearTimeout(timeout);
    }
  }, [activeProductId, pathname]);

  return {
    activeProductId,
    activeVarietyId,
  };
}
