import { graphql } from '../graphql';

export const PricingFragment = graphql(`
  fragment PricingFragment on Product {
    prices(currencyCode: $currencyCode) {
      price {
        value
        currencyCode
      }
      basePrice {
        value
        currencyCode
      }
      retailPrice {
        value
        currencyCode
      }
      salePrice {
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
      bulkPricingRules {
        ... on BulkPricingFixedPriceRule {
          quantityMin
          quantityMax
          price {
            value
            currencyCode
          }
        }
        ... on BulkPricingPercentageDiscountRule {
          quantityMin
          quantityMax
          percentage
        }
        ... on BulkPricingRelativePriceRule {
          quantityMin
          quantityMax
          price {
            value
            currencyCode
          }
        }
      }
    }
  }
`);
