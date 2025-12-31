/**
 * EPHA Cable Tie Cross-Sell Configuration
 *
 * Recommends cable ties for hose protector purchases based on:
 * - Color matching (orange HP -> orange CT, black HP -> black CT, yellow HP -> yellow CT)
 * - Size-based recommendations (HP size determines CT length and strength)
 *
 * Excludes counter-display boxes (they already include cable ties)
 */

import { getProductInfo, isHoseProtector, type PackType } from './product-relationships';

export type CableTieColor = 'orange' | 'black' | 'yellow';
export type CableTieLength = '8' | '12' | '14';
export type CableTieStrength = '50' | '120';
export type HoseProtectorSize = '4' | '5' | '6' | '8' | '10' | '12';

export interface CableTieProduct {
  slug: string;
  name: string;
  sku: string;
  color: CableTieColor;
  length: CableTieLength;
  strength: CableTieStrength;
  image: string;
  entityId: number;
  variantId?: number;
  price: number;
}

export interface CableTieRecommendation {
  length: CableTieLength;
  strength: CableTieStrength;
  quantity: string; // e.g., "3 ties" for installation recommendation
}

// Cable tie products from BigCommerce
// Product 115: Black UV Nylon Zip Ties
// Product 219: Orange Nylon Zip Ties
// Product 220: Yellow Nylon Zip Ties
export const CABLE_TIE_PRODUCTS: Record<string, CableTieProduct> = {
  // Black 8" 50lb
  'black-8-50': {
    slug: '/nylon-black-zip-ties',
    name: 'Black Cable Ties 8" x 50lb (Pack of 100)',
    sku: 'CT8-50-B-100',
    color: 'black',
    length: '8',
    strength: '50',
    image:
      'https://cdn11.bigcommerce.com/s-usnceuurb6/products/115/images/377/black_300mm_x_4.8_1_1__25467__01006__91533__81754.1697639951.386.513.jpg?c=1',
    entityId: 115,
    variantId: 137,
    price: 7.99,
  },
  // Black 12" 50lb
  'black-12-50': {
    slug: '/nylon-black-zip-ties',
    name: 'Black Cable Ties 12" x 50lb (Pack of 100)',
    sku: 'CT12-50-B-100',
    color: 'black',
    length: '12',
    strength: '50',
    image:
      'https://cdn11.bigcommerce.com/s-usnceuurb6/products/115/images/377/black_300mm_x_4.8_1_1__25467__01006__91533__81754.1697639951.386.513.jpg?c=1',
    entityId: 115,
    variantId: 139,
    price: 9.99,
  },
  // Black 14" 120lb
  'black-14-120': {
    slug: '/nylon-black-zip-ties',
    name: 'Black Cable Ties 14" x 120lb Heavy Duty (Pack of 100)',
    sku: 'CT14-120-B-100',
    color: 'black',
    length: '14',
    strength: '120',
    image:
      'https://cdn11.bigcommerce.com/s-usnceuurb6/products/115/images/377/black_300mm_x_4.8_1_1__25467__01006__91533__81754.1697639951.386.513.jpg?c=1',
    entityId: 115,
    variantId: 142,
    price: 14.99,
  },

  // Orange 8" 50lb
  'orange-8-50': {
    slug: '/nylon-orange-zip-ties',
    name: 'Orange Cable Ties 8" x 50lb (Pack of 100)',
    sku: 'CT8-50-ORA-100',
    color: 'orange',
    length: '8',
    strength: '50',
    image:
      'https://cdn11.bigcommerce.com/s-usnceuurb6/products/219/images/527/Orange_cable_ties__29651.1698414446.386.513.jpg?c=1',
    entityId: 219,
    variantId: 322,
    price: 8.99,
  },
  // Orange 12" 50lb
  'orange-12-50': {
    slug: '/nylon-orange-zip-ties',
    name: 'Orange Cable Ties 12" x 50lb (Pack of 100)',
    sku: 'CT12-50-ORA-100',
    color: 'orange',
    length: '12',
    strength: '50',
    image:
      'https://cdn11.bigcommerce.com/s-usnceuurb6/products/219/images/527/Orange_cable_ties__29651.1698414446.386.513.jpg?c=1',
    entityId: 219,
    variantId: 323,
    price: 10.99,
  },
  // Orange 14" 120lb
  'orange-14-120': {
    slug: '/nylon-orange-zip-ties',
    name: 'Orange Cable Ties 14" x 120lb Heavy Duty (Pack of 100)',
    sku: 'CT14-120-ORA-100',
    color: 'orange',
    length: '14',
    strength: '120',
    image:
      'https://cdn11.bigcommerce.com/s-usnceuurb6/products/219/images/527/Orange_cable_ties__29651.1698414446.386.513.jpg?c=1',
    entityId: 219,
    variantId: 325,
    price: 15.99,
  },

  // Yellow 8" 50lb
  'yellow-8-50': {
    slug: '/nylon-yellow-zip-ties',
    name: 'Yellow Cable Ties 8" x 50lb (Pack of 100)',
    sku: 'CT8-50-YEL-100',
    color: 'yellow',
    length: '8',
    strength: '50',
    image:
      'https://cdn11.bigcommerce.com/s-usnceuurb6/products/220/images/540/GTSE-20048YEL-SL_Item-Photo-All-100__65413.1697639963.386.513.jpg?c=1',
    entityId: 220,
    variantId: 334,
    price: 8.99,
  },
  // Yellow 12" 50lb
  'yellow-12-50': {
    slug: '/nylon-yellow-zip-ties',
    name: 'Yellow Cable Ties 12" x 50lb (Pack of 100)',
    sku: 'CT12-50-YEL-100',
    color: 'yellow',
    length: '12',
    strength: '50',
    image:
      'https://cdn11.bigcommerce.com/s-usnceuurb6/products/220/images/540/GTSE-20048YEL-SL_Item-Photo-All-100__65413.1697639963.386.513.jpg?c=1',
    entityId: 220,
    variantId: 335,
    price: 10.99,
  },
  // Yellow 14" 120lb
  'yellow-14-120': {
    slug: '/nylon-yellow-zip-ties',
    name: 'Yellow Cable Ties 14" x 120lb Heavy Duty (Pack of 100)',
    sku: 'CT14-120-YEL-100',
    color: 'yellow',
    length: '14',
    strength: '120',
    image:
      'https://cdn11.bigcommerce.com/s-usnceuurb6/products/220/images/540/GTSE-20048YEL-SL_Item-Photo-All-100__65413.1697639963.386.513.jpg?c=1',
    entityId: 220,
    variantId: 337,
    price: 15.99,
  },
};

/**
 * Mapping: Hose protector size -> recommended cable tie specifications
 * Based on GTSE installation guide:
 * - 4" HP: 3x 8" cable ties
 * - 5", 6", 8" HP: 2-3x 12" cable ties
 * - 10", 12" HP: 4x 14" 120lb cable ties
 */
export const SIZE_TO_CABLE_TIE_MAP: Record<HoseProtectorSize, CableTieRecommendation[]> = {
  '4': [{ length: '8', strength: '50', quantity: '3 ties per protector' }],
  '5': [{ length: '12', strength: '50', quantity: '2 ties per protector' }],
  '6': [{ length: '12', strength: '50', quantity: '3 ties per protector' }],
  '8': [{ length: '12', strength: '50', quantity: '3 ties per protector' }],
  '10': [
    { length: '12', strength: '50', quantity: '3 ties per protector' },
    { length: '14', strength: '120', quantity: '4 ties per protector (heavy duty)' },
  ],
  '12': [
    { length: '12', strength: '50', quantity: '3 ties per protector' },
    { length: '14', strength: '120', quantity: '4 ties per protector (heavy duty)' },
  ],
};

// Color display names and hex values (matching product-relationships.ts)
export const CABLE_TIE_COLOR_INFO: Record<CableTieColor, { name: string; hex: string }> = {
  orange: { name: 'Orange', hex: '#FF6B00' },
  black: { name: 'Black', hex: '#1a1a1a' },
  yellow: { name: 'Yellow', hex: '#FFD700' },
};

/**
 * Check if a hose protector should show cable tie cross-sell
 * Excludes counter-display boxes and assorted packs (they already include cable ties)
 * @param {string} slug - The product URL slug to check
 * @returns {boolean} True if this product should show cable tie cross-sell
 */
export function shouldShowCableTieCrossSell(slug: string): boolean {
  if (!isHoseProtector(slug)) {
    return false;
  }

  const productInfo = getProductInfo(slug);

  if (!productInfo) {
    return false;
  }

  // Exclude counter-display and assorted-60 (they include cable ties)
  const excludedPackTypes: PackType[] = ['counter-display', 'assorted-60'];

  return !excludedPackTypes.includes(productInfo.packType);
}

/**
 * Get the hose protector color as a cable tie color
 * @param {string} slug - The product URL slug
 * @returns {CableTieColor | null} The cable tie color matching the hose protector, or null if not found
 */
export function getHoseProtectorCableTieColor(slug: string): CableTieColor | null {
  const productInfo = getProductInfo(slug);

  if (!productInfo) {
    return null;
  }

  // ProductColor and CableTieColor are the same values
  // Use type-safe lookup to avoid type assertions
  const colorMap: Record<string, CableTieColor> = {
    orange: 'orange',
    black: 'black',
    yellow: 'yellow',
  };

  return colorMap[productInfo.color] ?? null;
}

// Default cable tie recommendations for when size is not specified
const DEFAULT_CABLE_TIE_SPECS: CableTieRecommendation[] = [
  { length: '8', strength: '50', quantity: '' },
  { length: '12', strength: '50', quantity: '' },
];

// Default recommendations with installation notes
const DEFAULT_CABLE_TIE_SPECS_WITH_NOTES: CableTieRecommendation[] = [
  { length: '8', strength: '50', quantity: 'For smaller protectors' },
];

/**
 * Get recommended cable ties for a hose protector
 * Returns cable ties matching the HP color and appropriate for the HP size
 * @param {string} hoseProtectorSlug - The URL slug of the hose protector product
 * @param {HoseProtectorSize} [hoseProtectorSize] - Optional size of the hose protector for specific recommendations
 * @returns {CableTieProduct[]} Array of recommended cable tie products
 */
export function getRecommendedCableTies(
  hoseProtectorSlug: string,
  hoseProtectorSize?: HoseProtectorSize,
): CableTieProduct[] {
  const color = getHoseProtectorCableTieColor(hoseProtectorSlug);

  if (!color) {
    return [];
  }

  // Default to common sizes if no specific size provided
  // For single/bulk products, we recommend the most common sizes
  const sizes = hoseProtectorSize
    ? SIZE_TO_CABLE_TIE_MAP[hoseProtectorSize]
    : DEFAULT_CABLE_TIE_SPECS;

  // Find matching cable ties using array methods
  return sizes
    .map((spec) => {
      const key = `${color}-${spec.length}-${spec.strength}`;

      return CABLE_TIE_PRODUCTS[key];
    })
    .filter((cableTie): cableTie is CableTieProduct => cableTie !== undefined);
}

/**
 * Get cable tie recommendations with installation details
 * @param {string} hoseProtectorSlug - The URL slug of the hose protector product
 * @param {HoseProtectorSize} [hoseProtectorSize] - Optional size of the hose protector for specific recommendations
 * @returns {Array} Array of cable tie products with installation notes
 */
export function getCableTieRecommendationsWithDetails(
  hoseProtectorSlug: string,
  hoseProtectorSize?: HoseProtectorSize,
): Array<CableTieProduct & { installationNote: string }> {
  const color = getHoseProtectorCableTieColor(hoseProtectorSlug);

  if (!color) {
    return [];
  }

  const sizes = hoseProtectorSize
    ? SIZE_TO_CABLE_TIE_MAP[hoseProtectorSize]
    : DEFAULT_CABLE_TIE_SPECS_WITH_NOTES;

  // Find matching cable ties with installation notes using array methods
  return sizes
    .map((spec) => {
      const key = `${color}-${spec.length}-${spec.strength}`;
      const cableTie = CABLE_TIE_PRODUCTS[key];

      if (!cableTie) {
        return null;
      }

      return {
        ...cableTie,
        installationNote: spec.quantity,
      };
    })
    .filter((item): item is CableTieProduct & { installationNote: string } => item !== null);
}
