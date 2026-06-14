import React from 'react';
import type { Metadata } from 'next';
import { Inter, Playfair_Display, Geist } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/sonner';
import Script from 'next/script';

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Kodai Global Exports | Tapioca Starch, Sago & Agro Products from India',
    template: '%s | Kodai Global Exports',
  },
  description:
    'Kodai Global Exports supplies export-ready tapioca starch, sago, tapioca flour, and related agro products from Tamilnadu, India with structured documentation and reliable communication.',
  keywords: [
    'Kodai Global Exports',
    'tapioca starch exporter India',
    'sago exporter Tamilnadu',
    'sabudana supplier India',
    'food grade tapioca starch',
    'industrial grade tapioca starch',
    'tapioca flour exporter',
    'agro products exporter India',
    'tapioca products Tamilnadu',
  ],
  authors: [{ name: 'Kodai Global Exports' }],
  creator: 'Kodai Global Exports',
  publisher: 'Kodai Global Exports',
  metadataBase: new URL('https://kodaiglobalexports.in'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Kodai Global Exports | Tapioca Products from India',
    description:
      'Export-ready tapioca starch, sago, and agro products supplied from Tamilnadu, India with clear processes and documentation.',
    url: 'https://kodaiglobalexports.in',
    siteName: 'Kodai Global Exports',
    images: [
      {
        url: '/images/logo.png',
        width: 512,
        height: 512,
        alt: 'Kodai Global Exports Logo',
        type: 'image/png',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Kodai Global Exports | Tapioca Products from India',
    description:
      'Tapioca starch, sago, and related agro products supplied from India for global buyers.',
    images: ['/images/logo.png'],
  },
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
  verification: {},
  category: 'Agro Products & Tapioca Exports',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Kodai Global Exports',
  url: 'https://kodaiglobalexports.in',
  logo: 'https://kodaiglobalexports.in/images/logo.png',
  description: 'Tapioca starch, sago, and agro products export company from India',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Periyakulam',
    addressLocality: 'Theni District',
    addressRegion: 'Tamil Nadu',
    postalCode: '625601',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-9677447233',
    contactType: 'sales',
    email: 'kge@kodaiglobalexports.com',
    areaServed: 'Worldwide',
    availableLanguage: ['English', 'Tamil', 'Multilingual Support'],
  },
  sameAs: [],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        'h-full',
        'antialiased',
        inter.variable,
        playfair.variable,
        'font-sans',
        geist.variable,
      )}
    >
      <head>
        <Script
          id="handle-lang-attribute"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const cookieValue = document.cookie
                  .split('; ')
                  .find((row) => row.startsWith('googtrans='))
                  ?.split('=')[1];
                if (cookieValue) {
                  const lang = cookieValue.split('/').pop();
                  if (lang) {
                    document.documentElement.lang = lang;
                  }
                }
              })();
            `,
          }}
        />
        <Script
          id="json-ld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          id="disable-copy"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('contextmenu', event => event.preventDefault());
              document.addEventListener('copy', event => event.preventDefault());
              document.addEventListener('cut', event => event.preventDefault());
            `,
          }}
        />
        <Script
          id="google-translate-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              function googleTranslateElementInit() {
                new google.translate.TranslateElement({
                  pageLanguage: 'en',
                  layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                  autoDisplay: false
                }, 'google_translate_element');
              }
            `,
          }}
        />
        <Script
          id="google-translate-script"
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
      </head>
      <body
        className="min-h-screen flex flex-col font-sans text-kodai-dark overflow-x-hidden w-full"
        suppressHydrationWarning
      >
        <div id="google_translate_element" style={{ display: 'none' }}></div>
        <style
          dangerouslySetInnerHTML={{
            __html: `
            iframe.goog-te-banner-frame { display: none !important; }
            .goog-te-banner-frame.skiptranslate { display: none !important; }
            body { top: 0px !important; margin-top: 0px !important; }
            html { top: 0px !important; }
            .goog-te-gadget-icon { display: none !important; }
            .goog-te-gadget-simple { background-color: transparent !important; border: none !important; }
            .goog-tooltip { display: none !important; }
            .goog-tooltip:hover { display: none !important; }
            .goog-text-highlight { background-color: transparent !important; border: none !important; box-shadow: none !important; }
            #goog-gt-tt { display: none !important; visibility: hidden !important; }
            .VIpgJd-Zvi9ab-OR9Zq-aZ2w3d { display: none !important; }
            .skiptranslate { display: none !important; }
            .goog-te-spinner-pos { display: none !important; }
          `,
          }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
