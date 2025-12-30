import { getFormatter, setRequestLocale } from 'next-intl/server';

import { getSessionCustomerAccessToken } from '~/auth';
import { Comparison, FeaturedProducts, Hero, Industries, ValueProps } from '~/components/epha';
import { FeaturedProduct } from '~/components/epha/featured-products';
import { getPreferredCurrencyCode } from '~/lib/currency';

import { getFeaturedProductsByPath } from './page-data';

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function Home({ params }: Props) {
  const { locale } = await params;

  setRequestLocale(locale);

  const customerAccessToken = await getSessionCustomerAccessToken();
  const currencyCode = await getPreferredCurrencyCode();
  const format = await getFormatter();

  // Fetch hardcoded featured products by path
  const featuredProducts = await getFeaturedProductsByPath(currencyCode, customerAccessToken);

  const transformedProducts: FeaturedProduct[] = featuredProducts.map((product) => {
    // Format price based on available data
    let price: FeaturedProduct['price'] = null;

    if (product.prices) {
      const { price: basePrice, priceRange } = product.prices;

      if (priceRange.min.value !== priceRange.max.value) {
        // Price range
        price = {
          type: 'range',
          minValue: format.number(priceRange.min.value, {
            style: 'currency',
            currency: priceRange.min.currencyCode,
          }),
          maxValue: format.number(priceRange.max.value, {
            style: 'currency',
            currency: priceRange.max.currencyCode,
          }),
        };
      } else {
        // Fixed price
        price = {
          type: 'fixed',
          currentValue: format.number(basePrice.value, {
            style: 'currency',
            currency: basePrice.currencyCode,
          }),
        };
      }
    }

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
