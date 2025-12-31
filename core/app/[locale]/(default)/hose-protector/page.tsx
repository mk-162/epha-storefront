import { Truck } from 'lucide-react';
import { setRequestLocale } from 'next-intl/server';

import {
  ProductBenefits,
  ProductHeroCompact,
  ProductSelector,
  ProductTechSpecs,
  ProductTrust,
  ProductVolumeCTA,
} from '~/components/epha/product-page';

import { getHoseProtectors } from './_data/get-products';

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function ProductsPage({ params }: Props) {
  const { locale } = await params;

  setRequestLocale(locale);

  const products = await getHoseProtectors();

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Free Shipping Banner */}
      <div className="flex items-center justify-center gap-2 bg-accent py-2.5 text-center text-sm font-bold uppercase tracking-wider text-white">
        <Truck className="h-4 w-4" />
        Free Shipping on Orders Over $500
      </div>

      {/* Compact Hero - Gets users to products fast */}
      <ProductHeroCompact />

      {/* THE MAIN EVENT: Product Selector - Above the fold */}
      <ProductSelector products={products} />

      {/* Benefits - Quick value props */}
      <ProductBenefits />

      {/* Technical Specs with 3D Model Viewer */}
      <ProductTechSpecs />

      {/* Social Proof */}
      <ProductTrust />

      {/* Volume Pricing CTA */}
      <ProductVolumeCTA />
    </div>
  );
}
