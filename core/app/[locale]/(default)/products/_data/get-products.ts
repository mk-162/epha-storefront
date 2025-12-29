import { client } from '~/client';
import { graphql } from '~/client/graphql';

const GET_PRODUCTS_QUERY = graphql(`
  query GetHoseProtectors {
    site {
      products(first: 20) {
        edges {
          node {
            entityId
            name
            sku
            path
            prices {
              price {
                value
                currencyCode
              }
              priceRange {
                min {
                  value
                }
                max {
                  value
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
            variants(first: 20) {
              edges {
                node {
                  entityId
                  sku
                  prices {
                    price {
                      value
                    }
                  }
                  options(first: 5) {
                    edges {
                      node {
                        entityId
                        displayName
                        values(first: 5) {
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
    }
  }
`);

export interface ProductVariant {
  entityId: number;
  sku: string;
  price: number;
  size: string;
}

export interface Product {
  entityId: number;
  name: string;
  sku: string;
  path: string;
  basePrice: number;
  priceRange: { min: number; max: number } | null;
  optionId: number | null;
  variants: ProductVariant[];
}

export async function getHoseProtectors(): Promise<Product[]> {
  const response = await client.fetch({
    document: GET_PRODUCTS_QUERY,
    fetchOptions: { next: { revalidate: 3600 } },
  });

  const products = response.data.site.products.edges
    .map((edge) => {
      const node = edge.node;

      // Get the "Hose size" option ID if it exists
      const sizeOption = node.productOptions.edges.find(
        (opt) => opt.node.displayName === 'Hose size',
      );

      const variants: ProductVariant[] = node.variants.edges.map((v) => {
        const variant = v.node;
        const sizeValue = variant.options.edges
          .flatMap((o) => o.node.values.edges)
          .find((val) => val.node.label)?.node;

        return {
          entityId: variant.entityId,
          sku: variant.sku,
          price: variant.prices?.price.value ?? 0,
          size: sizeValue?.label ?? '',
        };
      });

      return {
        entityId: node.entityId,
        name: node.name,
        sku: node.sku,
        path: node.path,
        basePrice: node.prices?.price.value ?? 0,
        priceRange: node.prices?.priceRange
          ? {
              min: node.prices.priceRange.min.value,
              max: node.prices.priceRange.max.value,
            }
          : null,
        optionId: sizeOption ? sizeOption.node.entityId : null,
        variants,
      };
    })
    .filter((p) => p.name.toLowerCase().includes('hose protector'));

  return products;
}
