import { useState, useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { isSamePageProductHash, pushProductHash } from '@/lib/productNavigation';

export function useNavbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | undefined>(undefined);
  const [scrolled, setScrolled] = useState(false);
  const menuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleMouseEnter = (menu: string) => {
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current);
      menuTimeoutRef.current = null;
    }
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
    menuTimeoutRef.current = setTimeout(() => {
      setActiveMenu(undefined);
      menuTimeoutRef.current = null;
    }, 100);
  };

  useEffect(() => {
    return () => {
      if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
    };
  }, []);

  const isActiveLink = (href: string) => {
    if (!pathname) return false;
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const handleProductClick = (e: React.MouseEvent | React.KeyboardEvent, href: string) => {
    const targetUrl = new URL(href, window.location.origin);
    const targetPath = targetUrl.pathname;

    if (isSamePageProductHash(href, pathname)) {
      e.preventDefault();
      pushProductHash(href);
      setActiveMenu(undefined);
      setMenuOpen(false);
      return;
    }

    if (pathname === targetPath) {
      e.preventDefault();
      setActiveMenu(undefined);
      setMenuOpen(false);
      window.history.pushState(null, '', `${targetUrl.pathname}${targetUrl.search}`);
      window.dispatchEvent(new Event('hashchange'));
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    e.preventDefault();
    setActiveMenu(undefined);
    setMenuOpen(false);
    router.push(href);
  };

  return {
    pathname,
    menuOpen,
    setMenuOpen,
    activeMenu,
    setActiveMenu,
    scrolled,
    handleMouseEnter,
    handleMouseLeave,
    isActiveLink,
    handleProductClick,
  };
}
