import { setRequestLocale } from 'next-intl/server';

import {
  ProductVideoHero,
  ProductOverview,
  ProductFeatureGrid,
  ProductTable,
  ProductResourcesCTA
} from '~/components/epha/ProductPage';
import { getHoseProtectors } from './_data/get-products';

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function ProductsPage({ params }: Props) {
  const { locale } = await params;

  setRequestLocale(locale);

  const products = await getHoseProtectors();

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <ProductVideoHero />
      <ProductOverview />
      <ProductFeatureGrid />
      <ProductTable products={products} />
      <ProductResourcesCTA />
    </div>
  );
}
