import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { DEFAULT_IMAGE, DEFAULT_SEO, SEO_BY_PATH, SITE_NAME, SITE_URL } from '../seo';

const MAIN_PHONE = '+442071124884';
const MAIN_EMAIL = 'kingsandqueens.dcl@gmail.com';

function setMeta(selector: string, attr: 'name' | 'property', key: string, content: string) {
  let meta = document.head.querySelector<HTMLMetaElement>(selector);
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attr, key);
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
}

function setCanonical(url: string) {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', url);
}

function localBusinessSchema(url: string, image: string) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['LocalBusiness', 'DryCleaningOrLaundry'],
        '@id': `${SITE_URL}/#business`,
        name: 'Kings & Queens Dry Cleaning & Laundrette',
        url: SITE_URL,
        logo: `${SITE_URL}/knqlogo.svg`,
        image,
        telephone: MAIN_PHONE,
        email: MAIN_EMAIL,
        priceRange: '££',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '221 Waterloo Road',
          addressLocality: 'London',
          postalCode: 'SE1 8XH',
          addressCountry: 'GB',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 51.499,
          longitude: -0.1098,
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '08:00',
            closes: '20:00',
          },
        ],
        areaServed: [
          'Waterloo',
          'Lambeth',
          'Southwark',
          'Westminster',
          'London Bridge',
          'City of London',
          'All London postcodes',
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Dry cleaning and laundry services',
          itemListElement: [
            'Dry Cleaning',
            'Laundry & Service Wash',
            'Shirt Service',
            'Wedding Dress Cleaning',
            'Alterations',
            'Shoe Cleaning',
            'Curtains & Household Laundry',
            'Private Clients Programme',
          ].map((name) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name,
            },
          })),
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        name: SITE_NAME,
        url: SITE_URL,
        publisher: {
          '@id': `${SITE_URL}/#business`,
        },
      },
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: document.title,
        isPartOf: {
          '@id': `${SITE_URL}/#website`,
        },
        about: {
          '@id': `${SITE_URL}/#business`,
        },
      },
    ],
  };
}

export default function SeoManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = SEO_BY_PATH[pathname] || DEFAULT_SEO;
    const url = `${SITE_URL}${seo.path === '/' ? '' : seo.path}`;
    const image = seo.image || DEFAULT_IMAGE;

    document.title = seo.title;
    setMeta('meta[name="description"]', 'name', 'description', seo.description);
    setMeta('meta[name="keywords"]', 'name', 'keywords', seo.keywords);
    setMeta('meta[name="robots"]', 'name', 'robots', 'index, follow, max-image-preview:large');
    setMeta('meta[name="author"]', 'name', 'author', 'Kings & Queens Dry Cleaning');
    setMeta('meta[name="geo.region"]', 'name', 'geo.region', 'GB-LND');
    setMeta('meta[name="geo.placename"]', 'name', 'geo.placename', 'Waterloo, London');
    setMeta('meta[name="geo.position"]', 'name', 'geo.position', '51.499;-0.1098');
    setMeta('meta[name="ICBM"]', 'name', 'ICBM', '51.499, -0.1098');
    setCanonical(url);

    setMeta('meta[property="og:type"]', 'property', 'og:type', 'website');
    setMeta('meta[property="og:site_name"]', 'property', 'og:site_name', SITE_NAME);
    setMeta('meta[property="og:title"]', 'property', 'og:title', seo.title);
    setMeta('meta[property="og:description"]', 'property', 'og:description', seo.description);
    setMeta('meta[property="og:url"]', 'property', 'og:url', url);
    setMeta('meta[property="og:image"]', 'property', 'og:image', image);
    setMeta('meta[property="og:image:alt"]', 'property', 'og:image:alt', `${SITE_NAME} in Waterloo, London`);
    setMeta('meta[property="og:locale"]', 'property', 'og:locale', 'en_GB');

    setMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', seo.title);
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', seo.description);
    setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', image);
    setMeta('meta[name="twitter:image:alt"]', 'name', 'twitter:image:alt', `${SITE_NAME} in Waterloo, London`);

    let schema = document.head.querySelector<HTMLScriptElement>('#knq-local-business-schema');
    if (!schema) {
      schema = document.createElement('script');
      schema.id = 'knq-local-business-schema';
      schema.type = 'application/ld+json';
      document.head.appendChild(schema);
    }
    schema.textContent = JSON.stringify(localBusinessSchema(url, image));
  }, [pathname]);

  return null;
}

