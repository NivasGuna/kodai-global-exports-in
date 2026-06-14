import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Kodai Global Exports',
    short_name: 'Kodai Global',
    description: 'Tapioca Starch, Sago & Agro Products from India',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2d7a4f',
    icons: [
      {
        src: '/icon.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  };
}
