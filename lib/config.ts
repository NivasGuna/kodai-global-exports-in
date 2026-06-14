export const BRAND_CONFIG = {
  name: 'Kodai Global Exports',
  category: 'Agro Products & Tapioca Exports',
  primaryProduct: 'Tapioca Starch, Sago & Tapioca Products',
  location: 'Kodai Global Exports \nPeriyakulam, Theni District - 625601, Tamilnadu, India.',
  email: 'kge@kodaiglobalexports.com',
  tagline: 'Quality • Clarity • Reliable Exports',
};

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  images?: string[];
  featured: boolean;
  varieties?: string[];
  specifications: { label: string; value: string }[];
  applications: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: 'tapioca-starch',
    name: 'Tapioca Starch',
    description:
      'Food-grade tapioca starch is widely used in food applications for its smooth texture, neutral taste, and excellent thickening and binding properties. Industrial-grade tapioca starch is used in non-food applications requiring stable viscosity and bonding strength.',
    image: '/images/tapioca-starch.png',
    images: ['/images/tapioca-starch.png', '/images/tapioca-starch-food-grade.png', '/images/tapioca-starch-industrial-grade.png'],
    featured: true,
    varieties: ['Food Grade', 'Industrial Grade'],
    specifications: [
      { label: 'Grades', value: 'Food Grade, Industrial Grade' },
      { label: 'Appearance', value: 'Fine white powder' },
      { label: 'Packing Options', value: '25 kg, 50 kg export bags' },
      { label: 'Origin', value: 'India' },
    ],
    applications: ['Food processing', 'Bakery and snacks', 'Paper and board industry', 'Textile sizing'],
  },
  {
    id: 'tapioca-flour',
    name: 'Tapioca Flour',
    description:
      'Tapioca flour is a finely milled cassava product valued for its light texture and versatility. It is commonly used in baking, snacks, and gluten-free food preparations.',
    image: '/images/tapioca-flour.png',
    images: ['/images/tapioca-flour.png', '/images/tapioca-flour-food-grade.png'],
    featured: false,
    varieties: ['Food Grade'],
    specifications: [
      { label: 'Grade', value: 'Food Grade' },
      { label: 'Appearance', value: 'Fine white flour' },
      { label: 'Packing Options', value: '25 kg, 50 kg export bags' },
      { label: 'Origin', value: 'India' },
    ],
    applications: ['Bakery', 'Snacks', 'Gluten-free cooking', 'Food manufacturing'],
  },
  {
    id: 'sago-varieties',
    name: 'Sago Varieties',
    description:
      'Our sago varieties include high-quality options like Glassy Nylon, Milk White, and traditional Sabudana. We offer premium tapioca pearls designed for uniform size, clean appearance, and excellent cooking consistency.',
    image: '/images/sago-sabudana.png',
    images: ['/images/sago-sabudana.png', '/images/glassy-nylon.png', '/images/milk-white.png', '/images/mini-nylon.png', '/images/modidana.png', '/images/pappads.png'],
    featured: true,
    varieties: ['Milk White', 'Glassy Nylon', 'Mini Nylon', 'Sago / Sabudana', 'Modidana', 'Pappads'],
    specifications: [
      { label: 'Type', value: 'Tapioca pearl varieties' },
      { label: 'Packing Options', value: 'Retail and bulk packing on request' },
      { label: 'Supply', value: 'Bulk export and distribution' },
      { label: 'Origin', value: 'India' },
    ],
    applications: ['Food markets', 'Wholesale supply', 'Retail repacking', 'Export markets'],
  },
  {
    id: 'coffee-beans',
    name: 'Coffee Beans',
    description:
      'Premium coffee beans sourced for export quality. Our Robusta and Arabica varieties are selected for their distinct flavor profiles, consistent grading, and reliable supply.',
    image: '/images/arabica.png',
    images: ['/images/arabica.png', '/images/robusta.png'],
    featured: true,
    varieties: ['Robusta', 'Arabica'],
    specifications: [
      { label: 'Type', value: 'Coffee Beans' },
      { label: 'Varieties', value: 'Robusta, Arabica' },
      { label: 'Packing Options', value: 'Jute bags, customized export packing' },
      { label: 'Origin', value: 'India' },
    ],
    applications: ['Coffee roasters', 'Wholesale distribution', 'Export markets'],
  },
  {
    id: 'clove',
    name: 'Clove',
    description:
      'High-quality cloves sourced for export. Valued for their strong aroma and flavor, our cloves are carefully selected to meet international standards for food and industrial applications.',
    image: '/images/clove.png',
    images: ['/images/clove.png'],
    featured: false,
    varieties: ['Clove'],
    specifications: [
      { label: 'Type', value: 'Whole Spices' },
      { label: 'Quality', value: 'Premium export grade' },
      { label: 'Packing Options', value: 'Standard export packing' },
      { label: 'Origin', value: 'India' },
    ],
    applications: ['Food processing', 'Spice blends', 'Essential oils extraction', 'Wholesale'],
  },
];
