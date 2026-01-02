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
      bulkPricing {
        ... on BulkPricingFixedPriceDiscount {
          minimumQuantity
          maximumQuantity
          price
        }
        ... on BulkPricingPercentageDiscount {
          minimumQuantity
          maximumQuantity
          percentOff
        }
        ... on BulkPricingRelativePriceDiscount {
          minimumQuantity
          maximumQuantity
          priceAdjustment
        }
      }
    }
  }
`);
