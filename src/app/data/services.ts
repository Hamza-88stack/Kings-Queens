export interface PricingService {
  id: string;
  title: string;
  subtitle?: string;
  price: number | string;
  category: string;
}

export interface ServicePricingItem {
  item: string;
  price: number | string;
}

export interface ServiceDetail {
  id: number;
  slug: string;
  num: string;
  badge?: string;
  title: string;
  titleLead: string;
  titleEm: string;
  img: string;
  p1: string;
  p2: string;
  list: string[];
  priceLabel: string;
  priceVal: string;
  priceSub: string;
  pricing: ServicePricingItem[];
}

const LUXURY_DRY_CLEANING_IMAGE = '/images/luxury-dry-cleaning-hero.jpg';
const LUXURY_SHIRT_SERVICE_IMAGE = '/images/luxury-shirt-service.jpg';
const PRIVATE_WARDROBE_IMAGE = '/images/private-clients-wardrobe.jpg';
const LUXURY_LEATHER_CARE_IMAGE = '/images/luxury-leather-care.jpg';

export const ALL_PRICING_SERVICES: PricingService[] = [
  { id: '1', title: 'Shirt on Hanger', subtitle: 'Dry Clean', price: 5.00, category: 'Dry Cleaning/Shirts' },
  { id: '2', title: 'Shirt Folded', subtitle: 'Dry Clean', price: 5.00, category: 'Dry Cleaning/Shirts' },
  { id: '3', title: 'Suits', subtitle: 'Dry Clean', price: 16.99, category: 'Dry Cleaning/Shirts' },
  { id: '4', title: 'Trousers/Skirt', subtitle: 'Dry Clean', price: 11.99, category: 'Dry Cleaning/Shirts' },
  { id: '5', title: 'Knitwear', subtitle: 'Dry Clean', price: 10.99, category: 'Dry Cleaning/Shirts' },
  { id: '6', title: 'Raincoat', subtitle: 'Dry Clean', price: 24.00, category: 'Dry Cleaning/Shirts' },
  { id: '7', title: 'Coat', subtitle: 'Dry Clean', price: 25.00, category: 'Dry Cleaning/Shirts' },
  { id: '8', title: 'Tie', subtitle: 'Dry Clean', price: 3.00, category: 'Dry Cleaning/Shirts' },
  { id: '40', title: 'Dress Shirt', subtitle: '5 or more - FROM: £3 each', price: 5.00, category: 'Dry Cleaning/Shirts' },
  { id: '9', title: 'Jacket', subtitle: 'Suede & Leather', price: 85.99, category: 'Suede & Leather' },
  { id: '10', title: 'Skirt', subtitle: 'Suede & Leather', price: 52.99, category: 'Suede & Leather' },
  { id: '11', title: 'Coat', subtitle: 'Suede & Leather', price: 120.99, category: 'Suede & Leather' },
  { id: '12', title: 'Dress', subtitle: 'Suede & Leather', price: 89.99, category: 'Suede & Leather' },
  { id: '13', title: 'Dress', subtitle: 'Silk/Linen/Velvet', price: 26.00, category: 'Silk/Linen/Velvet' },
  { id: '14', title: 'Skirt', subtitle: 'Silk/Linen/Velvet', price: 12.99, category: 'Silk/Linen/Velvet' },
  { id: '15', title: 'Blouse', subtitle: 'Silk/Linen/Velvet', price: 11.99, category: 'Silk/Linen/Velvet' },
  { id: '16', title: 'Wedding Dresses', subtitle: 'Silk/Linen/Velvet', price: 100.00, category: 'Silk/Linen/Velvet' },
  { id: '17', title: 'Pillowcase', subtitle: 'Laundry', price: 3.50, category: 'Laundry' },
  { id: '18', title: 'Double Sheet', subtitle: 'Laundry', price: 10.00, category: 'Laundry' },
  { id: '19', title: 'Double Duvet Cover', subtitle: 'Laundry', price: 13.50, category: 'Laundry' },
  { id: '20', title: 'Single Duvet', subtitle: 'Laundry', price: 18.99, category: 'Laundry' },
  { id: '21', title: 'Double Duvet', subtitle: 'Laundry', price: 25.00, category: 'Laundry' },
  { id: '22', title: 'King/Queen Duvet', subtitle: 'Laundry', price: 35.00, category: 'Laundry' },
  { id: '23', title: 'Blanket', subtitle: 'from', price: 15.99, category: 'Laundry' },
  { id: '24', title: 'Towels', subtitle: 'Laundry', price: 5.00, category: 'Laundry' },
  { id: '41', title: 'Wash, Dry & Fold', subtitle: 'per bucket', price: '£35-45', category: 'Laundry' },
  { id: '25', title: 'Small', subtitle: 'Service Wash', price: 26.00, category: 'Service Washes' },
  { id: '26', title: 'Medium', subtitle: 'Service Wash', price: 30.00, category: 'Service Washes' },
  { id: '27', title: 'Large', subtitle: 'Service Wash', price: 35.00, category: 'Service Washes' },
  { id: '28', title: 'X-Large', subtitle: 'Service Wash', price: 50.00, category: 'Service Washes' },
  { id: '29', title: 'Deep Clean', subtitle: 'Trainers/Sneakers', price: 25.00, category: 'Trainers/Sneakers' },
  { id: '30', title: 'Restoration', subtitle: 'Trainers/Sneakers', price: 50.00, category: 'Trainers/Sneakers' },
  { id: '31', title: 'Trouser Shorten/Lengthen', subtitle: 'Repairs & Alterations', price: 20.00, category: 'Repairs & Alterations' },
  { id: '32', title: 'Skirt Shorten/Lengthen', subtitle: 'Repairs & Alterations', price: 20.00, category: 'Repairs & Alterations' },
  { id: '33', title: 'Trouser/Skirt New Zip', subtitle: 'Repairs & Alterations', price: 22.50, category: 'Repairs & Alterations' },
  { id: '34', title: 'Shirt Shorten Sleeve', subtitle: 'Repairs & Alterations', price: 22.00, category: 'Repairs & Alterations' },
  { id: '35', title: 'Jacket Sleeve Short/Long', subtitle: 'Repairs & Alterations', price: 49.50, category: 'Repairs & Alterations' },
  { id: '36', title: 'Trouser Waist In', subtitle: 'Repairs & Alterations', price: 27.50, category: 'Repairs & Alterations' },
  { id: '37', title: 'Dress Sleeve Short/Long', subtitle: 'Repairs & Alterations', price: 38.50, category: 'Repairs & Alterations' },
  { id: '38', title: 'Skirt Waist In', subtitle: 'Repairs & Alterations', price: 27.50, category: 'Repairs & Alterations' },
  { id: '39', title: 'Coat Sleeve Short/Long', subtitle: 'Repairs & Alterations', price: 55.00, category: 'Repairs & Alterations' },
];

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    id: 1,
    slug: 'dry-cleaning',
    num: 'I',
    badge: 'Most Popular',
    title: 'Dry Cleaning',
    titleLead: 'Professional',
    titleEm: 'Dry Cleaning',
    img: LUXURY_DRY_CLEANING_IMAGE,
    p1: 'Professional solvent cleaning for suits, dresses, coats and all garments requiring special care. Every item is inspected, stain-treated and cleaned with careful fabric-safe methods.',
    p2: 'Garments are hand-finished, pressed and packaged neatly for return. It is the core Kings & Queens service for everyday polish and delicate wardrobe care.',
    list: ['Suits, blazers and formal wear', 'Dresses, coats and knitwear', 'Delicate fabric handling', 'Stain treatment and spotting', 'Eco-friendly cleaning process', 'Premium pressing and hand finishing'],
    priceLabel: 'From',
    priceVal: '£16.99',
    priceSub: 'per suit',
    pricing: [
      { item: "Men's Suit (2-piece)", price: 18.99 },
      { item: "Men's Suit (3-piece)", price: 24.99 },
      { item: "Women's Dress", price: 16.99 },
      { item: "Blazer/Sport Coat", price: 12.99 },
      { item: "Overcoat/Topcoat", price: 22.99 },
      { item: "Pants/Trousers", price: 8.99 },
      { item: "Skirt", price: 9.99 },
      { item: "Blouse/Shirt", price: 7.99 },
      { item: "Tie", price: 4.99 },
      { item: "Sweater", price: 11.99 },
    ],
  },
  {
    id: 2,
    slug: 'shirt-service',
    num: 'II',
    badge: 'Express Available',
    title: 'Shirt Service',
    titleLead: 'Expert',
    titleEm: 'Shirt Service',
    img: LUXURY_SHIRT_SERVICE_IMAGE,
    p1: 'Beautifully laundered and crisply pressed shirts, returned on hangers or folded to your preference.',
    p2: 'Collars and cuffs receive extra attention before each shirt is finished, packed and returned ready to wear.',
    list: ['Shirts on hangers or folded', 'Collar and cuff treatment', 'Crisp pressing', 'Protective finishing', 'Volume pricing for 5+ shirts', 'Collection and delivery available'],
    priceLabel: 'From',
    priceVal: '£5.00',
    priceSub: 'per shirt',
    pricing: [
      { item: 'Shirt on Hanger', price: 5.00 },
      { item: 'Shirt Folded', price: 5.00 },
      { item: 'Dress Shirt (5 or more - FROM: £3 each)', price: 5.00 },
    ],
  },
  {
    id: 3,
    slug: 'laundry-service-wash',
    num: 'III',
    badge: 'Best Value',
    title: 'Laundry & Service Wash',
    titleLead: 'Laundry &',
    titleEm: 'Service Wash',
    img: LUXURY_SHIRT_SERVICE_IMAGE,
    p1: 'Complete wash, dry and fold service with professional laundering and pressing for weekly laundry, linens and household loads.',
    p2: 'Service washes are priced by load size, collected from your door and returned fresh, folded and ready to put away.',
    list: ['Wash, dry and fold', 'Small to X-Large service washes', 'Duvets, sheets and towels', 'Premium detergents', 'Neat folding and packaging', 'Ideal for regular household laundry'],
    priceLabel: 'From',
    priceVal: '£26',
    priceSub: 'per load',
    pricing: [
      { item: 'Small Service Wash', price: 26.00 },
      { item: 'Medium Service Wash', price: 30.00 },
      { item: 'Large Service Wash', price: 35.00 },
      { item: 'X-Large Service Wash', price: 50.00 },
      { item: 'Wash, Dry & Fold (per bucket)', price: '£35-45' },
      { item: 'Pillowcase', price: 3.50 },
      { item: 'Double Sheet', price: 10.00 },
      { item: 'Double Duvet Cover', price: 13.50 },
      { item: 'Single Duvet', price: 18.99 },
      { item: 'Double Duvet', price: 25.00 },
      { item: 'King/Queen Duvet', price: 35.00 },
      { item: 'Blanket', price: 15.99 },
      { item: 'Towels', price: 5.00 },
    ],
  },
  {
    id: 4,
    slug: 'wedding-dress',
    num: 'IV',
    badge: 'Specialist',
    title: 'Couture & Wedding Dresses',
    titleLead: 'Couture &',
    titleEm: 'Wedding Dresses',
    img: PRIVATE_WARDROBE_IMAGE,
    p1: 'Specialist cleaning, stain removal, restoration and preservation for garments that matter most.',
    p2: 'From wedding dresses to embellished couture, each item is assessed individually and treated with delicate methods suited to its fabric and construction.',
    list: ['Wedding dresses', 'Silk, linen and velvet', 'Beaded and embellished garments', 'Stain removal', 'Restoration and preservation', 'Careful hand finishing'],
    priceLabel: 'From',
    priceVal: '£100',
    priceSub: 'wedding dress',
    pricing: [
      { item: 'Dress - Silk/Linen/Velvet', price: 26.00 },
      { item: 'Skirt - Silk/Linen/Velvet', price: 12.99 },
      { item: 'Blouse - Silk/Linen/Velvet', price: 11.99 },
      { item: 'Wedding Dresses', price: 100.00 },
    ],
  },
  {
    id: 5,
    slug: 'shoe-cleaning',
    num: 'V',
    title: 'Shoe Cleaning',
    titleLead: 'Shoe',
    titleEm: 'Cleaning',
    img: LUXURY_LEATHER_CARE_IMAGE,
    p1: 'Professional restoration for trainers, leather shoes and luxury footwear.',
    p2: 'We clean, refresh and restore shoes with specialist care for everyday trainers and finer footwear.',
    list: ['Trainer deep clean', 'Trainer restoration', 'Leather care', 'Suede-safe handling', 'Odour refresh', 'Footwear revival'],
    priceLabel: 'From',
    priceVal: '£25',
    priceSub: 'per pair',
    pricing: [
      { item: 'Deep Clean - Trainers/Sneakers', price: 25.00 },
      { item: 'Restoration - Trainers/Sneakers', price: 50.00 },
    ],
  },
  {
    id: 6,
    slug: 'alterations',
    num: 'VI',
    title: 'Alterations & Tailoring',
    titleLead: 'Alterations &',
    titleEm: 'Tailoring',
    img: LUXURY_DRY_CLEANING_IMAGE,
    p1: 'Expert tailoring to ensure every garment fits perfectly and reflects your style.',
    p2: 'From simple hems to sleeve adjustments and zip replacements, our alteration service extends the life of your wardrobe.',
    list: ['Trouser and skirt hems', 'Zip replacements', 'Sleeve adjustments', 'Waist adjustments', 'Coat sleeve work', 'Professional garment repairs'],
    priceLabel: 'From',
    priceVal: '£20',
    priceSub: 'per alteration',
    pricing: [
      { item: 'Trouser Shorten/Lengthen', price: 20.00 },
      { item: 'Skirt Shorten/Lengthen', price: 20.00 },
      { item: 'Trouser/Skirt New Zip', price: 22.50 },
      { item: 'Shirt Shorten Sleeve', price: 22.00 },
      { item: 'Jacket Sleeve Short/Long', price: 49.50 },
      { item: 'Trouser Waist In', price: 27.50 },
      { item: 'Dress Sleeve Short/Long', price: 38.50 },
      { item: 'Skirt Waist In', price: 27.50 },
      { item: 'Coat Sleeve Short/Long', price: 55.00 },
    ],
  },
  {
    id: 7,
    slug: 'curtains-household',
    num: 'VII',
    badge: 'Collection Available',
    title: 'Curtains & Household',
    titleLead: 'Curtains &',
    titleEm: 'Household',
    img: PRIVATE_WARDROBE_IMAGE,
    p1: 'Duvets, bed linen, curtains and textiles cleaned and returned ready to use.',
    p2: 'Household textiles are washed, pressed or steamed as appropriate and handled carefully from collection to delivery.',
    list: ['Duvets and blankets', 'Bed linen', 'Pillowcases and towels', 'Curtains and panels', 'Tablecloths', 'Bulky item care'],
    priceLabel: 'From',
    priceVal: '£3.50',
    priceSub: 'per item',
    pricing: [
      { item: 'Pillowcase', price: 3.50 },
      { item: 'Double Sheet', price: 10.00 },
      { item: 'Double Duvet Cover', price: 13.50 },
      { item: 'Single Duvet', price: 18.99 },
      { item: 'Double Duvet', price: 25.00 },
      { item: 'King/Queen Duvet', price: 35.00 },
      { item: 'Blanket', price: 15.99 },
      { item: 'Towels', price: 5.00 },
    ],
  },
  {
    id: 8,
    slug: 'hotels-business',
    num: 'VIII',
    badge: 'Business',
    title: 'Hotels & Business',
    titleLead: 'Hotels &',
    titleEm: 'Business',
    img: LUXURY_SHIRT_SERVICE_IMAGE,
    p1: 'Bespoke laundry contracts for hotels, Airbnb hosts and corporate clients.',
    p2: 'We support hospitality and business customers with consistent quality, reliable turnaround and account-level scheduling.',
    list: ['Hotel linen and towels', 'Airbnb and short-let laundry', 'Corporate workwear', 'Scheduled collection', 'Volume-based pricing', 'Dedicated business support'],
    priceLabel: 'Custom',
    priceVal: 'Bespoke',
    priceSub: 'pricing',
    pricing: [
      { item: 'Bed Sheet Set (Twin)', price: 8.99 },
      { item: 'Bed Sheet Set (Queen/King)', price: 11.99 },
      { item: 'Pillowcase (pair)', price: 4.99 },
      { item: 'Bath Towel', price: 3.99 },
      { item: 'Hand Towel', price: 2.99 },
      { item: 'Washcloth', price: 1.99 },
      { item: 'Duvet Cover', price: 12.99 },
      { item: 'Complete Room Linen Set', price: 24.99 },
      { item: 'Express Service (same day)', price: 15.99 },
      { item: 'Bulk Discount (20+ items)', price: '20% off' },
    ],
  },
];

export const SERVICE_PRICE_GROUPS = [
  {
    name: 'Dry Cleaning/Shirts',
    from: '£3.00',
    items: [
      ['Shirt on Hanger', '£5.00'],
      ['Shirt Folded', '£5.00'],
      ['Suits', '£16.99'],
      ['Trousers/Skirt', '£11.99'],
      ['Knitwear', '£10.99'],
      ['Tie', '£3.00'],
    ],
  },
  {
    name: 'Laundry & Service Washes',
    from: '£3.50',
    items: [
      ['Pillowcase', '£3.50'],
      ['Double Sheet', '£10.00'],
      ['Double Duvet Cover', '£13.50'],
      ['Single Duvet', '£18.99'],
      ['Wash, Dry & Fold', '£35-45'],
      ['Service Washes', '£26-50'],
    ],
  },
  {
    name: 'Specialist Garments',
    from: '£11.99',
    items: [
      ['Suede & Leather Jacket', '£85.99'],
      ['Suede & Leather Coat', '£120.99'],
      ['Silk/Linen/Velvet Dress', '£26.00'],
      ['Silk/Linen/Velvet Blouse', '£11.99'],
      ['Wedding Dresses', '£100.00'],
    ],
  },
  {
    name: 'Repairs & Alterations',
    from: '£20.00',
    items: [
      ['Trouser Shorten/Lengthen', '£20.00'],
      ['Skirt Shorten/Lengthen', '£20.00'],
      ['Trouser/Skirt New Zip', '£22.50'],
      ['Shirt Shorten Sleeve', '£22.00'],
      ['Jacket Sleeve Short/Long', '£49.50'],
      ['Coat Sleeve Short/Long', '£55.00'],
    ],
  },
];
