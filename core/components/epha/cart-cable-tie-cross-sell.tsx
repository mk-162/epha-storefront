'use client';

import { useMemo } from 'react';

import { CableTieCrossSell } from './cable-tie-cross-sell';
import { shouldShowCableTieCrossSell } from './cable-tie-relationships';

interface CartLineItem {
  href?: string;
  productEntityId: number;
}

interface CartCableTieCrossSellProps {
  lineItems: CartLineItem[];
}

/**
 * Cart-specific wrapper for cable tie cross-sell
 * Filters cart items to find hose protectors and shows relevant cable tie recommendations
 * @returns {JSX.Element | null} JSX element or null if no hose protectors found in cart
 */
export function CartCableTieCrossSell({ lineItems }: CartCableTieCrossSellProps) {
  // Find unique hose protectors in the cart that should show cross-sell
  const hoseProtectorSlugs = useMemo(() => {
    const validItems = lineItems.filter(
      (item): item is CartLineItem & { href: string } =>
        typeof item.href === 'string' && shouldShowCableTieCrossSell(item.href),
    );

    const slugs = validItems.map((item) => item.href);

    // Return unique slugs
    return [...new Set(slugs)];
  }, [lineItems]);

  // Show cross-sell for the first hose protector found
  // (to avoid overwhelming the cart page with multiple cross-sell sections)
  const primarySlug = hoseProtectorSlugs[0];

  if (!primarySlug) {
    return null;
  }

  return (
    <div className="mx-auto mb-8 max-w-4xl px-4">
      <CableTieCrossSell hoseProtectorSlug={primarySlug} variant="cart" />
    </div>
  );
}
