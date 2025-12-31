import { getFormatter, setRequestLocale } from 'next-intl/server';

import { getSessionCustomerAccessToken } from '~/auth';
import { client } from '~/client';
import { graphql } from '~/client/graphql';

import { ShopPageClient } from './_components/shop-page-client';

const GET_ALL_PRODUCTS_QUERY = graphql(`
  query GetAllProducts($first: Int!, $after: String) {
    site {
      products(first: $first, after: $after) {
        pageInfo {
          hasNextPage
          endCursor
        }
        edges {
          node {
            entityId
            name
            sku
            path
            brand {
              name
            }
            defaultImage {
              url: urlTemplate(lossy: true)
              altText
            }
            prices {
              price {
                value
                currencyCode
              }
              priceRange {
                min {
                  value
                  currencyCode
                }
                max {
                  value
                  currencyCode
                }
              }
            }
            productOptions(first: 10) {
              edges {
                node {
                  entityId
                  displayName
                  ... on MultipleChoiceOption {
                    values(first: 10) {
                      edges {
                        node {
                          entityId
                          label
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`);

export type ProductCategory = 'hose-protectors' | 'cable-ties' | 'other';

export interface ShopProduct {
  id: string;
  entityId: number;
  name: string;
  sku: string;
  path: string;
  brand?: string;
  image?: {
    src: string;
    alt: string;
  };
  price: {
    type: 'fixed' | 'range';
    value?: string;
    minValue?: string;
    maxValue?: string;
  } | null;
  colors: string[];
  sizes: string[];
  category: ProductCategory;
}

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function ShopPage({ params }: Props) {
  const { locale } = await params;

  setRequestLocale(locale);

  const customerAccessToken = await getSessionCustomerAccessToken();
  const format = await getFormatter();

  // Fetch all products
  const response = await client.fetch({
    document: GET_ALL_PRODUCTS_QUERY,
    variables: { first: 50 },
    fetchOptions: { next: { revalidate: 3600 } },
    customerAccessToken,
  });

  const products: ShopProduct[] = (response.data.site.products.edges ?? []).map((edge) => {
    const node = edge.node;

    // Extract colors and sizes from product options
    const colors: string[] = [];
    const sizes: string[] = [];

    (node.productOptions.edges ?? []).forEach((optEdge) => {
      const opt = optEdge.node;
      const displayName = opt.displayName.toLowerCase();

      if ('values' in opt) {
        const values = (opt.values.edges ?? []).map((v) => v.node.label);

        if (displayName.includes('color') || displayName.includes('colour')) {
          colors.push(...values);
        }

        if (displayName.includes('size') || displayName.includes('length')) {
          sizes.push(...values);
        }
      }
    });

    // Format price
    let price: ShopProduct['price'] = null;

    if (node.prices) {
      const { price: basePrice, priceRange } = node.prices;

      if (priceRange.min.value !== priceRange.max.value) {
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
        price = {
          type: 'fixed',
          value: format.number(basePrice.value, {
            style: 'currency',
            currency: basePrice.currencyCode,
          }),
        };
      }
    }

    // Determine product category based on name/SKU
    const nameLower = node.name.toLowerCase();
    const skuLower = node.sku.toLowerCase();
    let category: ProductCategory = 'other';

    if (
      nameLower.includes('hose protector') ||
      nameLower.includes('spiral wrap') ||
      skuLower.startsWith('hp') ||
      skuLower.startsWith('sph')
    ) {
      category = 'hose-protectors';
    } else if (
      nameLower.includes('cable tie') ||
      nameLower.includes('zip tie') ||
      nameLower.includes('nylon') ||
      skuLower.startsWith('ct')
    ) {
      category = 'cable-ties';
    }

    return {
      id: node.entityId.toString(),
      entityId: node.entityId,
      name: node.name,
      sku: node.sku,
      path: node.path,
      brand: node.brand?.name,
      image: node.defaultImage
        ? {
            src: node.defaultImage.url,
            alt: node.defaultImage.altText,
          }
        : undefined,
      price,
      colors,
      sizes,
      category,
    };
  });

  // Extract unique colors and sizes for filters
  const allColors = [...new Set(products.flatMap((p) => p.colors))].sort();
  const allSizes = [...new Set(products.flatMap((p) => p.sizes))].sort((a, b) => {
    const numA = parseInt(a, 10);
    const numB = parseInt(b, 10);

    if (!Number.isNaN(numA) && !Number.isNaN(numB)) return numA - numB;

    return a.localeCompare(b);
  });

  return (
    <ShopPageClient availableColors={allColors} availableSizes={allSizes} products={products} />
  );
}
