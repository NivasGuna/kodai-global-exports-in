'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, Leaf, ChevronDown } from 'lucide-react';
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
} from '@/components/ui/menubar';
import navbarContent from './navbar.json';
import LanguageSwitcher from '@/components/LanguageSwitcher';

interface NavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
  scrolled?: boolean;
  onClick?: () => void;
}

const linkBase =
  'relative px-3 py-2.5 text-[15px] font-bold transition-all duration-300 lg:px-5 after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:transition-transform lg:after:left-5 lg:after:right-5';

function DesktopNavLink({ href, label, isActive, scrolled, onClick }: NavLinkProps) {
  const activeColor = scrolled 
    ? 'text-kodai-charcoal after:bg-kodai-charcoal after:scale-x-100' 
    : 'text-white after:bg-white after:scale-x-100 drop-shadow-md';
  const idleColor = scrolled 
    ? 'text-kodai-charcoal hover:text-kodai-charcoal hover:after:scale-x-100 after:bg-kodai-charcoal' 
    : 'text-white/90 hover:text-white hover:after:scale-x-100 after:bg-white drop-shadow-md';

  return (
    <Link
      href={href}
      aria-current={isActive ? 'page' : undefined}
      className={`${linkBase} ${isActive ? activeColor : idleColor}`}
      onClick={onClick}
    >
      {label}
    </Link>
  );
}

function MobileNavLink({ href, label, isActive, onClick }: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={isActive ? 'page' : undefined}
      className={`flex items-center justify-between rounded-2xl border px-4 py-3 text-sm font-medium transition-all duration-300 ${
        isActive
          ? 'border-kodai-charcoal/25 text-kodai-charcoal'
          : 'border-kodai-charcoal/10 text-kodai-charcoal/65 hover:border-kodai-charcoal/20 hover:text-kodai-charcoal'
      }`}
    >
      <span>{label}</span>
      {isActive && <Leaf size={15} className="text-kodai-charcoal" />}
    </Link>
  );
}

import { useNavbar } from './hooks/useNavbar';

export default function Navbar() {
  const {
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
  } = useNavbar();

  const desktopBefore = navbarContent.navLinks.slice(0, 2); // Home, About
  const desktopAfter = navbarContent.navLinks.slice(2); // FAQ & Reviews, Contact

  const mobileLinksBeforeProducts = navbarContent.navLinks.slice(0, 2); // Home, About
  const mobileLinksAfterProducts = navbarContent.navLinks.slice(2); // FAQ & Reviews, Contact

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? 'border-b border-kodai-charcoal/10 bg-[#fffdf8]/95 backdrop-blur-2xl'
          : 'bg-transparent'
      }`}
    >
      {scrolled && (
        <div className="absolute inset-x-0 top-0 h-px bg-kodai-charcoal/10" />
      )}

      <div className="mx-auto flex h-[var(--kodai-header-height)] max-w-[85rem] items-center justify-between px-4 sm:px-6 md:px-10">
        <Link
          href="/"
          className="group flex items-center gap-3.5 transition-opacity duration-300 hover:opacity-90"
        >
          <div className="relative flex h-11 w-11 flex-none items-center justify-center rounded-full bg-white p-3 shadow-sm transition-all duration-500 group-hover:scale-105 sm:h-18 sm:w-18">
            <Image
              src="/images/logo.png"
              alt="Kodai Global logo"
              width={54}
              height={54}
              className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className={`font-playfair text-[20px] font-bold tracking-tight sm:text-[24px] ${scrolled ? 'text-kodai-charcoal' : 'text-white drop-shadow-md'}`}>
              KODAI
            </span>
            <span
              className={`mt-1 font-sans text-[9px] font-bold tracking-[0.35em] uppercase sm:text-[10px] ${scrolled ? 'text-kodai-charcoal/70' : 'text-white/90 drop-shadow-md'}`}
            >
              GLOBAL EXPORTS
            </span>
          </div>
        </Link>

        <nav className="ml-auto hidden items-center gap-1 md:flex">
          {desktopBefore.map(({ label, href }) => (
            <DesktopNavLink key={href} href={href} label={label} isActive={isActiveLink(href)} scrolled={scrolled} />
          ))}

          <Menubar
            value={activeMenu}
            onValueChange={setActiveMenu}
            className="h-auto rounded-full border-0 bg-transparent p-0 shadow-none"
          >
            <MenubarMenu value="products">
              <MenubarTrigger
                onMouseEnter={() => handleMouseEnter('products')}
                onMouseLeave={handleMouseLeave}
                aria-current={pathname?.startsWith('/products') ? 'page' : undefined}
                className={`${linkBase} flex items-center gap-1.5 outline-none ${
                  pathname?.startsWith('/products')
                    ? (scrolled ? 'text-kodai-charcoal after:scale-x-100 after:bg-kodai-charcoal' : 'text-white after:scale-x-100 after:bg-white drop-shadow-md')
                    : activeMenu === 'products'
                      ? (scrolled ? 'text-kodai-charcoal after:scale-x-100 after:bg-kodai-charcoal' : 'text-white after:scale-x-100 after:bg-white drop-shadow-md')
                      : (scrolled ? 'text-kodai-charcoal hover:text-kodai-charcoal hover:after:scale-x-100 after:bg-kodai-charcoal' : 'text-white/90 hover:text-white hover:after:scale-x-100 after:bg-white drop-shadow-md')
                }`}
              >
                {navbarContent.productsMenu.title}
                <ChevronDown
                  size={13}
                  className={`transition-transform duration-300 ${activeMenu === 'products' ? 'rotate-180' : ''}`}
                />
              </MenubarTrigger>

              <MenubarContent
                onMouseEnter={() => handleMouseEnter('products')}
                onMouseLeave={handleMouseLeave}
                align="start"
                sideOffset={2}
                className="w-72 rounded-2xl border border-white/[0.08] bg-[#0f1623]/98 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.40)] backdrop-blur-xl"
              >
                <div className="flex flex-col gap-1">
                  <MenubarItem
                    asChild
                    className="cursor-pointer rounded-xl px-4 py-3 focus:bg-white/8 focus:text-white"
                  >
                    <Link
                      href="/products"
                      onClick={(e) => handleProductClick(e, '/products')}
                      className="text-sm font-semibold text-white/90"
                    >
                      {navbarContent.productsMenu.viewAll}
                    </Link>
                  </MenubarItem>

                  <MenubarSeparator className="mx-2 bg-white/[0.07]" />

                  {navbarContent.productCategories.map((category) => (
                    <MenubarSub key={category.title}>
                      <MenubarSubTrigger className="cursor-pointer rounded-xl px-4 py-3 text-sm font-medium text-white/65 outline-none hover:text-white focus:bg-white/8 focus:text-white data-[state=open]:bg-white/8 data-[state=open]:text-white">
                        {category.title}
                      </MenubarSubTrigger>
                      <MenubarSubContent
                        sideOffset={12}
                        alignOffset={4}
                        onMouseEnter={() => handleMouseEnter('products')}
                        onMouseLeave={handleMouseLeave}
                        className="w-72 rounded-2xl border border-white/[0.08] bg-[#0f1623]/98 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.40)] backdrop-blur-xl"
                      >
                        {category.links.map((item) => (
                          <MenubarItem
                            key={item.href}
                            asChild
                            className="cursor-pointer rounded-xl px-4 py-3 focus:bg-white/8 focus:text-white"
                          >
                            <Link
                              href={item.href}
                              onClick={(e) => handleProductClick(e, item.href)}
                              className="text-sm font-medium text-white/65"
                            >
                              {item.label}
                            </Link>
                          </MenubarItem>
                        ))}
                      </MenubarSubContent>
                    </MenubarSub>
                  ))}
                </div>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>

          {desktopAfter.map(({ label, href }) => (
            <DesktopNavLink key={href} href={href} label={label} isActive={isActiveLink(href)} scrolled={scrolled} />
          ))}

          <div className="ml-2 border-l border-kodai-charcoal/10 pl-2">
            <LanguageSwitcher scrolled={scrolled} />
          </div>
        </nav>

        <div className="flex items-center gap-1.5 md:hidden">
          <LanguageSwitcher scrolled={scrolled} />
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className={`inline-flex h-10 w-10 flex-none flex-shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
              scrolled || menuOpen
                ? 'border-kodai-charcoal/15 text-kodai-charcoal hover:border-kodai-charcoal/30'
                : 'border-white/30 text-white hover:border-white shadow-sm'
            }`}
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>

      {/* ─── Mobile menu ─── */}
      {menuOpen && (
        <div className="border-t border-kodai-charcoal/10 bg-[#fffdf8]/98 px-4 py-4 backdrop-blur-2xl md:hidden">
          <div className="mx-auto max-w-[85rem] space-y-2">
            {/* Links BEFORE products (Home, About) */}
            {mobileLinksBeforeProducts.map(({ label, href }) => (
              <MobileNavLink
                key={href}
                href={href}
                label={label}
                isActive={isActiveLink(href)}
                onClick={() => setMenuOpen(false)}
              />
            ))}

            {/* Products section (3rd position) */}
            <div className="rounded-2xl border border-kodai-charcoal/10 px-4 py-3">
              <Link
                href="/products"
                onClick={(e) => handleProductClick(e, '/products')}
                className="block text-sm font-semibold uppercase tracking-[0.12em] text-kodai-charcoal"
              >
                {navbarContent.productsMenu.title}
              </Link>
              <div className="mt-3 rounded-xl border border-kodai-charcoal/10 p-3">
                <Link
                  href="/products"
                  onClick={(e) => handleProductClick(e, '/products')}
                  className="block text-[11px] font-bold uppercase tracking-[0.22em] text-kodai-charcoal/70 transition-colors hover:text-kodai-charcoal"
                >
                  {navbarContent.productsMenu.viewAll}
                </Link>
                <div className="mt-4 space-y-4">
                  {navbarContent.productCategories.map((category) => (
                    <div key={category.title} className="space-y-1">
                      <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-kodai-charcoal/40">
                        {category.title}
                      </p>
                      <div className="mt-2 space-y-1">
                        {category.links.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={(e) => handleProductClick(e, item.href)}
                            className="block rounded-xl px-3 py-2 text-sm font-medium text-kodai-charcoal/65 transition-colors hover:text-kodai-charcoal"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Links AFTER products (FAQ & Reviews, Contact) */}
            {mobileLinksAfterProducts.map(({ label, href }) => (
              <MobileNavLink
                key={href}
                href={href}
                label={label}
                isActive={isActiveLink(href)}
                onClick={() => setMenuOpen(false)}
              />
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
