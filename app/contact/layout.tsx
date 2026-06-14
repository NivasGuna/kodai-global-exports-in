import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Kodai Global Exports',
  description:
    'Contact Kodai Global Exports for tapioca starch, sago, and agro product export enquiries. Located in Theni District, Tamilnadu, India. Email: kge@kodaiglobalexports.com, Phone: +91 9677447233.',
  keywords: [
    'contact Kodai Global Exports',
    'tapioca starch enquiry',
    'sago export inquiry',
    'agro product exporter contact',
    'tapioca products India',
    'Kodai Global Exports phone',
  ],
  openGraph: {
    title: 'Contact Us | Kodai Global Exports',
    description:
      'Get in touch for tapioca starch, sago, and agro product export enquiries from India.',
    type: 'website',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
