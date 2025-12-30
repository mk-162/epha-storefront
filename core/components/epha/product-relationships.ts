/**
 * EPHA Product Relationships Configuration
 *
 * Defines smart relationships between products based on:
 * - Color variants (same pack type, different colors)
 * - Pack size variants (same color, different quantities)
 */

export type ProductColor = 'orange' | 'black' | 'yellow';
export type PackType = 'counter-display' | 'single' | 'box-25' | 'assorted-60';

export interface ProductInfo {
  slug: string;
  name: string;
  color: ProductColor;
  packType: PackType;
  image: string;
}

// All hose protector products mapped by slug
export const HOSE_PROTECTOR_PRODUCTS: Record<string, ProductInfo> = {
  // Orange products
  '/orange-hose-protectors-counter-display-box': {
    slug: '/orange-hose-protectors-counter-display-box',
    name: 'Orange Hose Protectors - Counter Display Box',
    color: 'orange',
    packType: 'counter-display',
    image:
      'https://cdn11.bigcommerce.com/s-usnceuurb6/products/431/images/868/HPO-BOX__45149.1733924127.386.513.png?c=1',
  },
  '/orange-hose-protector-pack-of-1': {
    slug: '/orange-hose-protector-pack-of-1',
    name: 'Orange Hose Protector (Bulk Pricing)',
    color: 'orange',
    packType: 'single',
    image:
      'https://cdn11.bigcommerce.com/s-usnceuurb6/products/434/images/875/HPO_1__49987.1733924243.386.513.png?c=1',
  },
  '/orange-hose-protectors-6-inch-box-of-25': {
    slug: '/orange-hose-protectors-6-inch-box-of-25',
    name: 'Extra Wide 6" Orange Hose Protectors (Box of 25)',
    color: 'orange',
    packType: 'box-25',
    image:
      'https://cdn11.bigcommerce.com/s-usnceuurb6/products/439/images/883/HP12O-25__39002.1733924744.386.513.png?c=1',
  },
  '/epha-assorted-60-orange-hose-protectors-counter-display-box-w-zip-ties': {
    slug: '/epha-assorted-60-orange-hose-protectors-counter-display-box-w-zip-ties',
    name: 'Assorted 60 Orange Hose Protectors - Counter Display Box',
    color: 'orange',
    packType: 'assorted-60',
    image:
      'https://cdn11.bigcommerce.com/s-usnceuurb6/products/443/images/893/HPO-BOX__45149.1733924127.1280.1280__00179.1736518968.386.513.png?c=1',
  },

  // Black products
  '/black-hose-protectors-counter-display-box': {
    slug: '/black-hose-protectors-counter-display-box',
    name: 'Black Hose Protectors - Counter Display Box',
    color: 'black',
    packType: 'counter-display',
    image:
      'https://cdn11.bigcommerce.com/s-usnceuurb6/products/432/images/870/HPB-BOX__47555.1733924143.386.513.png?c=1',
  },
  '/black-hose-protector-pack-of-1': {
    slug: '/black-hose-protector-pack-of-1',
    name: 'Black Hose Protector (Bulk Pricing)',
    color: 'black',
    packType: 'single',
    image:
      'https://cdn11.bigcommerce.com/s-usnceuurb6/products/435/images/874/HPB_1__83220.1733924241.386.513.png?c=1',
  },
  '/black-hose-protectors-6-inch-box-of-25': {
    slug: '/black-hose-protectors-6-inch-box-of-25',
    name: 'Extra Wide 6" Black Hose Protectors (Box of 25)',
    color: 'black',
    packType: 'box-25',
    image:
      'https://cdn11.bigcommerce.com/s-usnceuurb6/products/440/images/892/HP12B-25__24189.1734546366.386.513.png?c=1',
  },

  // Yellow products
  '/yellow-hose-protectors-counter-display-box': {
    slug: '/yellow-hose-protectors-counter-display-box',
    name: 'Yellow Hose Protectors - Counter Display Box',
    color: 'yellow',
    packType: 'counter-display',
    image:
      'https://cdn11.bigcommerce.com/s-usnceuurb6/products/433/images/871/HPY-BOX__05300.1733924152.386.513.png?c=1',
  },
  '/yellow-hose-protector-pack-of-1': {
    slug: '/yellow-hose-protector-pack-of-1',
    name: 'Yellow Hose Protector (Bulk Pricing)',
    color: 'yellow',
    packType: 'single',
    image:
      'https://cdn11.bigcommerce.com/s-usnceuurb6/products/436/images/873/HPY_1__58656.1733924239.386.513.png?c=1',
  },
  '/yellow-hose-protectors-6-inch-box-of-25': {
    slug: '/yellow-hose-protectors-6-inch-box-of-25',
    name: 'Extra Wide 6" Yellow Hose Protectors (Box of 25)',
    color: 'yellow',
    packType: 'box-25',
    image:
      'https://cdn11.bigcommerce.com/s-usnceuurb6/products/441/images/890/HP12Y-25__81677.1734546342.386.513.png?c=1',
  },
};

// Color display names and hex values for swatches
export const COLOR_INFO: Record<ProductColor, { name: string; hex: string }> = {
  orange: { name: 'Orange', hex: '#FF6B00' },
  black: { name: 'Black', hex: '#1a1a1a' },
  yellow: { name: 'Yellow', hex: '#FFD700' },
};

// Pack type display names
export const PACK_TYPE_INFO: Record<PackType, { name: string; shortName: string }> = {
  'counter-display': { name: 'Counter Display Box (50 pcs)', shortName: 'Box of 50' },
  single: { name: 'Single / Bulk Pricing', shortName: 'Single' },
  'box-25': { name: 'Box of 25 Pieces', shortName: 'Box of 25' },
  'assorted-60': { name: 'Assorted Box (60 pcs)', shortName: 'Assorted 60' },
};

/**
 * Get other pack sizes for the same color
 * (e.g., if viewing Orange Counter Display, returns Orange Single and Orange Box of 25)
 * @param {string} currentSlug - The current product's URL slug
 * @returns {ProductInfo[]} Array of related products with different pack sizes in the same color
 */
export function getOtherPackSizes(currentSlug: string): ProductInfo[] {
  const currentProduct = HOSE_PROTECTOR_PRODUCTS[currentSlug];

  if (!currentProduct) {
    return [];
  }

  return Object.values(HOSE_PROTECTOR_PRODUCTS).filter(
    (product) => product.color === currentProduct.color && product.slug !== currentSlug,
  );
}

/**
 * Get same pack type in different colors
 * (e.g., if viewing Orange Counter Display, returns Black and Yellow Counter Display)
 * @param {string} currentSlug - The current product's URL slug
 * @returns {ProductInfo[]} Array of same pack type products in different colors
 */
export function getColorVariants(currentSlug: string): ProductInfo[] {
  const currentProduct = HOSE_PROTECTOR_PRODUCTS[currentSlug];

  if (!currentProduct) {
    return [];
  }

  return Object.values(HOSE_PROTECTOR_PRODUCTS).filter(
    (product) => product.packType === currentProduct.packType && product.slug !== currentSlug,
  );
}

/**
 * Check if a product slug is a hose protector (has relationships)
 * @param {string} slug - The product's URL slug to check
 * @returns {boolean} True if the product is a hose protector with relationships
 */
export function isHoseProtector(slug: string): boolean {
  return slug in HOSE_PROTECTOR_PRODUCTS;
}

/**
 * Get the current product info
 * @param {string} slug - The product's URL slug
 * @returns {ProductInfo | null} The product info or null if not found
 */
export function getProductInfo(slug: string): ProductInfo | null {
  return HOSE_PROTECTOR_PRODUCTS[slug] || null;
}
