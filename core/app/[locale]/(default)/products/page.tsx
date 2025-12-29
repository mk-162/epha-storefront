import { setRequestLocale } from 'next-intl/server';

import {
  ProductFeatureGrid,
  ProductOverview,
  ProductResourcesCTA,
  ProductTable,
  ProductVideoHero,
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
      <ProductVideoHero />
      <ProductOverview />
      <ProductFeatureGrid />
      <ProductTable products={products} />
      <ProductResourcesCTA />
    </div>
  );
}
