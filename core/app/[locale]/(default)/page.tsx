import { removeEdgesAndNodes } from '@bigcommerce/catalyst-client';
import { getFormatter, setRequestLocale } from 'next-intl/server';

import { getSessionCustomerAccessToken } from '~/auth';
import { Comparison, FeaturedProducts, Hero, Industries, ValueProps } from '~/components/epha';
import { FeaturedProduct } from '~/components/epha/featured-products';
import { pricesTransformer } from '~/data-transformers/prices-transformer';
import { getPreferredCurrencyCode } from '~/lib/currency';

import { getPageData } from './page-data';

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function Home({ params }: Props) {
  const { locale } = await params;

  setRequestLocale(locale);

  const customerAccessToken = await getSessionCustomerAccessToken();
  const currencyCode = await getPreferredCurrencyCode();
  const format = await getFormatter();

  const data = await getPageData(currencyCode, customerAccessToken);

  // Transform featured products for display
  const featuredProductsData = removeEdgesAndNodes(data.site.featuredProducts);

  const transformedProducts: FeaturedProduct[] = featuredProductsData.map((product) => {
    const priceData = pricesTransformer(product.prices, format);

    // Handle different price formats from the transformer
    let price: FeaturedProduct['price'] = null;

    if (priceData) {
      if (typeof priceData === 'string') {
        price = { type: 'fixed', currentValue: priceData };
      } else if (priceData.type === 'sale') {
        price = {
          type: 'sale',
          currentValue: priceData.currentValue,
          previousValue: priceData.previousValue,
        };
      } else {
        // priceData.type === 'range'
        price = {
          type: 'range',
          minValue: priceData.minValue,
          maxValue: priceData.maxValue,
        };
      }
    }

    // Get SKU from first variant if available
    const variants = removeEdgesAndNodes(product.variants);
    const sku = variants[0]?.sku;

    return {
      id: product.entityId.toString(),
      name: product.name,
      href: product.path,
      image: product.defaultImage
        ? {
            src: product.defaultImage.url,
            alt: product.defaultImage.altText,
          }
        : undefined,
      price,
      brand: product.brand?.name,
      sku,
    };
  });

  return (
    <>
      <Hero />
      <ValueProps />
      <FeaturedProducts products={transformedProducts} />
      <Comparison />
      <Industries />
    </>
  );
}
