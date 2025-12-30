import { cache } from 'react';

import { client } from '~/client';
import { graphql } from '~/client/graphql';
import { revalidate } from '~/client/revalidate-target';
import { FeaturedProductsCarouselFragment } from '~/components/featured-products-carousel/fragment';
import { FeaturedProductsListFragment } from '~/components/featured-products-list/fragment';
import { FooterFragment, FooterSectionsFragment } from '~/components/footer/fragment';
import { CurrencyCode, HeaderFragment, HeaderLinksFragment } from '~/components/header/fragment';

export const LayoutQuery = graphql(
  `
    query LayoutQuery {
      site {
        ...HeaderFragment
        ...FooterFragment
      }
    }
  `,
  [HeaderFragment, FooterFragment],
);

const GiftCertificatesEnabledFragment = graphql(`
  fragment GiftCertificatesEnabledFragment on Settings {
    giftCertificates(currencyCode: $currencyCode) {
      isEnabled
    }
  }
`);

export const GetLinksAndSectionsQuery = graphql(
  `
    query GetLinksAndSectionsQuery($currencyCode: currencyCode) {
      site {
        settings {
          ...GiftCertificatesEnabledFragment
        }
        ...HeaderLinksFragment
        ...FooterSectionsFragment
      }
    }
  `,
  [HeaderLinksFragment, FooterSectionsFragment, GiftCertificatesEnabledFragment],
);

const HomePageQuery = graphql(
  `
    query HomePageQuery($currencyCode: currencyCode) {
      site {
        featuredProducts(first: 12) {
          edges {
            node {
              ...FeaturedProductsListFragment
            }
          }
        }
        newestProducts(first: 12) {
          edges {
            node {
              ...FeaturedProductsCarouselFragment
            }
          }
        }
        settings {
          inventory {
            defaultOutOfStockMessage
            showOutOfStockMessage
            showBackorderMessage
          }
          newsletter {
            showNewsletterSignup
          }
        }
      }
    }
  `,
  [FeaturedProductsCarouselFragment, FeaturedProductsListFragment],
);

// Query to fetch specific products by path for Featured Products section
// Simplified to reduce API complexity score (limit: 10000)
const FeaturedProductsByPathQuery = graphql(
  `
    query FeaturedProductsByPathQuery($currencyCode: currencyCode) {
      site {
        orangeBox: route(path: "/orange-hose-protectors-counter-display-box") {
          node {
            ... on Product {
              entityId
              name
              path
              defaultImage {
                altText
                url: urlTemplate(lossy: true)
              }
              brand {
                name
              }
              prices(currencyCode: $currencyCode) {
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
            }
          }
        }
        blackBox: route(path: "/black-hose-protectors-counter-display-box") {
          node {
            ... on Product {
              entityId
              name
              path
              defaultImage {
                altText
                url: urlTemplate(lossy: true)
              }
              brand {
                name
              }
              prices(currencyCode: $currencyCode) {
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
            }
          }
        }
        yellowBox: route(path: "/yellow-hose-protectors-counter-display-box") {
          node {
            ... on Product {
              entityId
              name
              path
              defaultImage {
                altText
                url: urlTemplate(lossy: true)
              }
              brand {
                name
              }
              prices(currencyCode: $currencyCode) {
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
            }
          }
        }
        orangeSingle: route(path: "/orange-hose-protector-pack-of-1") {
          node {
            ... on Product {
              entityId
              name
              path
              defaultImage {
                altText
                url: urlTemplate(lossy: true)
              }
              brand {
                name
              }
              prices(currencyCode: $currencyCode) {
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
            }
          }
        }
      }
    }
  `,
  [],
);

// Type for the product data from route queries
export interface FeaturedProductData {
  entityId: number;
  name: string;
  path: string;
  defaultImage: { altText: string; url: string } | null;
  brand: { name: string } | null;
  prices: {
    price: { value: number; currencyCode: string };
    priceRange: {
      min: { value: number; currencyCode: string };
      max: { value: number; currencyCode: string };
    };
  } | null;
}

export const getPageData = cache(
  async (currencyCode?: CurrencyCode, customerAccessToken?: string) => {
    const { data } = await client.fetch({
      document: HomePageQuery,
      customerAccessToken,
      variables: { currencyCode },
      fetchOptions: customerAccessToken ? { cache: 'no-store' } : { next: { revalidate } },
    });

    return data;
  },
);

export const getFeaturedProductsByPath = cache(
  async (
    currencyCode?: CurrencyCode,
    customerAccessToken?: string,
  ): Promise<FeaturedProductData[]> => {
    const { data } = await client.fetch({
      document: FeaturedProductsByPathQuery,
      customerAccessToken,
      variables: { currencyCode },
      fetchOptions: customerAccessToken ? { cache: 'no-store' } : { next: { revalidate } },
    });

    // Extract products from route responses, filtering out any that didn't resolve
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const extractProduct = (route: { node?: any } | null): FeaturedProductData | null => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const node = route?.node;

      if (!node || !('entityId' in node)) {
        return null;
      }

      return {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        entityId: node.entityId,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        name: node.name,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        path: node.path,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        defaultImage: node.defaultImage,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        brand: node.brand,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        prices: node.prices,
      };
    };

    const products: FeaturedProductData[] = [
      extractProduct(data.site.orangeBox),
      extractProduct(data.site.blackBox),
      extractProduct(data.site.yellowBox),
      extractProduct(data.site.orangeSingle),
    ].filter((p): p is FeaturedProductData => p !== null);

    return products;
  },
);
