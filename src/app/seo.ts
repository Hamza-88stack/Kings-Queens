export const SITE_URL = 'https://kq-laundry-new-design.vercel.app';
export const SITE_NAME = 'Kings & Queens Dry Cleaning';
export const DEFAULT_IMAGE = `${SITE_URL}/images/luxury-dry-cleaning-hero.jpg`;

export type SeoConfig = {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords: string;
};

export const SEO_BY_PATH: Record<string, SeoConfig> = {
  '/': {
    title: 'Kings & Queens Dry Cleaning London | Laundry Collection & Delivery',
    description:
      'Premium dry cleaning, laundry, shirt service, alterations and private garment care from 221 Waterloo Road, London SE1. Free collection and delivery across London.',
    path: '/',
    image: `${SITE_URL}/images/knq-storefront-elite.jpg`,
    keywords:
      'dry cleaning London, laundry service London, Waterloo dry cleaners, Kings and Queens Dry Cleaning, dry cleaners SE1, laundry collection London',
  },
  '/services': {
    title: 'Dry Cleaning & Laundry Services London | Kings & Queens',
    description:
      'Explore professional dry cleaning, service wash, shirt laundry, wedding dress cleaning, alterations, shoe cleaning and household textile care in London.',
    path: '/services',
    keywords:
      'dry cleaning services London, service wash London, shirt laundry London, wedding dress cleaning London, alterations London, shoe cleaning London',
  },
  '/pricing': {
    title: 'Dry Cleaning & Laundry Prices London | Kings & Queens',
    description:
      'View Kings & Queens pricing for dry cleaning, laundry, wash and fold, shirts, duvets, trainers and alterations with London collection and delivery.',
    path: '/pricing',
    keywords:
      'dry cleaning prices London, laundry prices London, wash and fold prices, shirt laundry prices, Kings Queens pricing',
  },
  '/private-clients': {
    title: 'Private Clients Dry Cleaning London | Discreet Wardrobe Care',
    description:
      'Discreet private client garment care for principals, estate managers, butlers, PAs and high-value wardrobes, with direct contacts and priority handling.',
    path: '/private-clients',
    image: `${SITE_URL}/images/private-clients-wardrobe.jpg`,
    keywords:
      'private dry cleaning London, private laundry service, estate laundry London, couture garment care London, discreet dry cleaning',
  },
  '/about': {
    title: 'About Kings & Queens Dry Cleaning | Waterloo SE1 London',
    description:
      'Learn about Kings & Queens Dry Cleaning and Laundrette, serving Waterloo and London for over 15 years from 221 Waterloo Road, SE1.',
    path: '/about',
    image: `${SITE_URL}/images/knq-storefront-elite.jpg`,
    keywords:
      'about Kings Queens Dry Cleaning, Waterloo dry cleaners, 221 Waterloo Road, dry cleaner SE1, London laundrette',
  },
  '/contact': {
    title: 'Contact Kings & Queens Dry Cleaning | Book Collection London',
    description:
      'Contact Kings & Queens Dry Cleaning at 221 Waterloo Road, London SE1. Call, WhatsApp or book dry cleaning and laundry collection online.',
    path: '/contact',
    image: `${SITE_URL}/images/knq-storefront-elite.jpg`,
    keywords:
      'contact dry cleaners London, book laundry collection London, Kings Queens Waterloo contact, dry cleaning pickup London',
  },
  '/service/order': {
    title: 'Book Dry Cleaning Collection London | Kings & Queens',
    description:
      'Book dry cleaning, laundry, shirt service, household cleaning and alterations collection with Kings & Queens in London.',
    path: '/service/order',
    keywords:
      'book dry cleaning London, laundry collection booking, dry cleaning pickup, Kings Queens order',
  },
};

export const DEFAULT_SEO = SEO_BY_PATH['/'];

