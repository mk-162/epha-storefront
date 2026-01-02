# Reviews.io Integration Plan for EPHA

## Overview

This document outlines the complete implementation plan for integrating Reviews.io product reviews into the EPHA Catalyst e-commerce site, replacing the existing BigCommerce native reviews system.

### Scope Summary

| Feature | Decision |
|---------|----------|
| Display reviews | Yes - custom UI |
| Review submission | No - handled by BigCommerce/Reviews.io |
| Review invitations | No - handled by BigCommerce |
| Widget vs Custom | Custom API implementation |
| BigCommerce reviews | Replace entirely |
| Product matching | By SKU |
| Schema.org markup | Yes (server-side) |
| Category pages | Show aggregate rating |

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                        EPHA Catalyst                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────────┐  │
│  │ Product Page │    │ Category Page│    │ Schema.org JSON  │  │
│  │              │    │              │    │                  │  │
│  │ - Reviews    │    │ - Star Rating│    │ - AggregateRating│  │
│  │ - Avg Rating │    │ - Review Cnt │    │ - Review Items   │  │
│  │ - Pagination │    │              │    │                  │  │
│  └──────┬───────┘    └──────┬───────┘    └────────┬─────────┘  │
│         │                   │                     │             │
│         └───────────────────┼─────────────────────┘             │
│                             │                                   │
│                    ┌────────▼────────┐                          │
│                    │ Reviews.io      │                          │
│                    │ Service Layer   │                          │
│                    │                 │                          │
│                    │ - getReviews()  │                          │
│                    │ - getRating()   │                          │
│                    │ - caching       │                          │
│                    └────────┬────────┘                          │
│                             │                                   │
└─────────────────────────────┼───────────────────────────────────┘
                              │
                    ┌─────────▼─────────┐
                    │   Reviews.io API  │
                    │                   │
                    │ GET /product/review│
                    │ ?store=X&sku=Y    │
                    └───────────────────┘
```

---

## Environment Variables

Add to `.env.local`:

```bash
# Reviews.io API Configuration
REVIEWS_IO_STORE_ID=your-store-id
REVIEWS_IO_API_KEY=your-api-key
```

Add to `.env.example` for documentation:

```bash
# Reviews.io API Configuration (optional - enables product reviews)
REVIEWS_IO_STORE_ID=
REVIEWS_IO_API_KEY=
```

---

## Files to Create

### 1. Reviews.io Service Layer

**`core/lib/reviews-io/index.ts`**

```typescript
// Main service for Reviews.io API interactions
// - Fetches product reviews by SKU
// - Fetches aggregate ratings
// - Handles caching (1 hour TTL)
// - Error handling with graceful fallbacks

export interface ReviewsIoReview {
  id: string;
  rating: number;
  title: string;
  review: string;
  author: string;
  date: string;
  dateISO: string;
}

export interface ReviewsIoSummary {
  averageRating: number;
  totalReviews: number;
}

export interface ReviewsIoResponse {
  reviews: ReviewsIoReview[];
  summary: ReviewsIoSummary;
  pagination: {
    currentPage: number;
    totalPages: number;
    perPage: number;
  };
}

export async function getProductReviews(sku: string, page?: number): Promise<ReviewsIoResponse>
export async function getProductRatingSummary(sku: string): Promise<ReviewsIoSummary>
```

### 2. Reviews.io Types

**`core/lib/reviews-io/types.ts`**

```typescript
// TypeScript interfaces for Reviews.io API responses
// Based on actual API response structure
```

### 3. Reviews.io Cache Adapter

**`core/lib/reviews-io/cache.ts`**

```typescript
// Caching layer using existing KV store infrastructure
// - Cache reviews for 1 hour
// - Cache rating summaries for 30 minutes
// - Cache invalidation on demand
```

---

## Files to Modify

### 1. Product Page - Enable Reviews

**`core/app/[locale]/(default)/product/[slug]/page.tsx`**

Changes:
- Line 91-92: Change `reviewsEnabled` and `showRating` to `true` (conditionally based on Reviews.io config)
- Add Reviews.io data fetching
- Replace BigCommerce reviews query with Reviews.io API call
- Update structured data to use Reviews.io data

```typescript
// Before
const reviewsEnabled = false;
const showRating = false;

// After
const reviewsEnabled = Boolean(process.env.REVIEWS_IO_STORE_ID);
const showRating = Boolean(process.env.REVIEWS_IO_STORE_ID);
```

### 2. Reviews Component - Use Reviews.io Data

**`core/app/[locale]/(default)/product/[slug]/_components/reviews.tsx`**

Changes:
- Replace GraphQL ReviewsQuery with Reviews.io API call
- Update data transformation to match existing Review interface
- Keep existing UI components (they're already well-designed)

### 3. Product Schema - Reviews.io Data

**`core/app/[locale]/(default)/product/[slug]/_components/product-schema/index.tsx`**

Changes:
- Include Reviews.io reviews in AggregateRating schema
- Add individual Review items for rich snippets

### 4. Product Card Fragment - Add Rating

**`core/components/product-card/fragment.ts`**

Changes:
- Ensure SKU is included in product card data for rating lookups

### 5. Category/Collection Pages - Show Ratings

**`core/app/[locale]/(default)/category/[slug]/page.tsx`** (and similar)

Changes:
- Fetch rating summaries for displayed products
- Pass rating data to ProductCard components

### 6. Product Card Component - Display Rating

**`core/vibes/soul/primitives/product-card/index.tsx`**

Changes:
- Add optional `rating` and `reviewCount` props
- Display star rating when available

---

## Implementation Phases

### Phase 1: Foundation (Core Infrastructure)

**Tasks:**
1. Create Reviews.io service layer (`core/lib/reviews-io/`)
2. Add environment variables
3. Implement API fetching with error handling
4. Add caching layer using existing KV infrastructure
5. Create TypeScript types for API responses

**Files:**
- `core/lib/reviews-io/index.ts` (new)
- `core/lib/reviews-io/types.ts` (new)
- `core/lib/reviews-io/cache.ts` (new)
- `.env.example` (modify)

### Phase 2: Product Page Reviews

**Tasks:**
1. Enable reviews on product pages
2. Fetch reviews from Reviews.io by product SKU
3. Transform Reviews.io data to existing Review interface
4. Display reviews using existing UI components
5. Implement pagination

**Files:**
- `core/app/[locale]/(default)/product/[slug]/page.tsx` (modify)
- `core/app/[locale]/(default)/product/[slug]/_components/reviews.tsx` (modify)
- `core/app/[locale]/(default)/product/[slug]/page-data.ts` (modify)

### Phase 3: Schema.org Structured Data

**Tasks:**
1. Update product schema to include Reviews.io data
2. Add AggregateRating with average and count
3. Add individual Review items (first 5-10 reviews)
4. Validate with Google Rich Results Test

**Files:**
- `core/app/[locale]/(default)/product/[slug]/_components/product-schema/index.tsx` (modify)
- `core/app/[locale]/(default)/product/[slug]/_components/product-schema/fragment.ts` (modify)

### Phase 4: Category Page Ratings

**Tasks:**
1. Batch fetch rating summaries for products on category pages
2. Add rating display to ProductCard component
3. Optimize with parallel fetching and caching

**Files:**
- `core/vibes/soul/primitives/product-card/index.tsx` (modify)
- `core/components/product-card/index.tsx` (modify)
- `core/app/[locale]/(default)/category/[slug]/page.tsx` (modify)

### Phase 5: Testing & Polish

**Tasks:**
1. Test with real Reviews.io data
2. Handle edge cases (no reviews, API errors, rate limits)
3. Verify schema.org markup in Google tools
4. Performance optimization (caching tuning)
5. Mobile responsiveness verification

---

## API Integration Details

### Endpoint

```
GET https://api.reviews.io/product/review
```

### Headers

```
store: {REVIEWS_IO_STORE_ID}
apikey: {REVIEWS_IO_API_KEY}
```

### Query Parameters

| Parameter | Required | Description |
|-----------|----------|-------------|
| `store` | Yes | Store identifier |
| `sku` | Yes | Product SKU |
| `per_page` | No | Reviews per page (default: 15) |
| `page` | No | Page number for pagination |
| `order` | No | Sort order (newest, oldest, rating_high, rating_low) |

### Example Request

```typescript
const response = await fetch(
  `https://api.reviews.io/product/review?store=${storeId}&sku=${encodeURIComponent(sku)}&per_page=10&page=1`,
  {
    headers: {
      'store': process.env.REVIEWS_IO_STORE_ID,
      'apikey': process.env.REVIEWS_IO_API_KEY,
    },
    next: { revalidate: 3600 } // Cache for 1 hour
  }
);
```

### Expected Response Structure

```json
{
  "store": "example-store",
  "sku": "HPO-001",
  "stats": {
    "average": 4.7,
    "count": 124
  },
  "reviews": [
    {
      "store_review_id": "12345",
      "rating": 5,
      "title": "Great product!",
      "review": "These hose protectors saved my hydraulic lines...",
      "reviewer": {
        "first_name": "John",
        "last_name": "D.",
        "verified_buyer": true
      },
      "date_created": "2024-12-15T10:30:00Z"
    }
  ],
  "per_page": 10,
  "current_page": 1,
  "total_pages": 13
}
```

---

## Data Transformation

### Reviews.io → EPHA Review Interface

```typescript
// Existing EPHA Review interface (keep unchanged)
interface Review {
  id: string;
  rating: number;
  review: string;
  name: string;
  date: string;
}

// Transformation function
function transformReviewsIoReview(review: ReviewsIoApiReview): Review {
  return {
    id: review.store_review_id,
    rating: review.rating,
    review: review.review || review.title || '',
    name: review.reviewer?.first_name
      ? `${review.reviewer.first_name} ${review.reviewer.last_name || ''}`.trim()
      : 'Anonymous',
    date: formatDate(review.date_created),
  };
}
```

---

## Caching Strategy

| Data Type | TTL | Key Pattern |
|-----------|-----|-------------|
| Product Reviews | 1 hour | `reviews-io:reviews:{sku}:{page}` |
| Rating Summary | 30 minutes | `reviews-io:summary:{sku}` |
| Batch Ratings | 30 minutes | `reviews-io:batch:{hash}` |

### Cache Implementation

Uses existing KV store infrastructure (`core/lib/kv/`):
- Vercel KV on production
- Upstash Redis if configured
- In-memory fallback for development

---

## Schema.org Structured Data

### Product with AggregateRating

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "EPHA Orange Hose Protector - 1\" ID",
  "sku": "HPO-100",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "reviewCount": "124",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "John D."
      },
      "datePublished": "2024-12-15",
      "reviewBody": "These hose protectors saved my hydraulic lines..."
    }
  ]
}
```

---

## Error Handling

### Graceful Degradation

```typescript
async function getProductReviews(sku: string): Promise<ReviewsIoResponse | null> {
  try {
    // Check if Reviews.io is configured
    if (!process.env.REVIEWS_IO_STORE_ID || !process.env.REVIEWS_IO_API_KEY) {
      return null; // Silently disable reviews
    }

    const response = await fetchReviewsIoApi(sku);
    return response;
  } catch (error) {
    console.error('[Reviews.io] Failed to fetch reviews:', error);
    return null; // Show product page without reviews
  }
}
```

### Fallback UI States

1. **No API credentials**: Hide reviews section entirely
2. **API error**: Show "Reviews temporarily unavailable"
3. **No reviews for product**: Show "Be the first to review this product"
4. **Rate limited**: Serve cached data or hide section

---

## Performance Considerations

### Parallel Fetching

For category pages with multiple products:

```typescript
// Batch fetch ratings in parallel
const ratings = await Promise.all(
  products.map(product =>
    getProductRatingSummary(product.sku).catch(() => null)
  )
);
```

### Streaming

Product page reviews can use React Suspense:

```typescript
const streamableReviews = Streamable.from(async () => {
  const reviewsData = await getProductReviews(product.sku);
  return transformReviews(reviewsData);
});
```

### ISR (Incremental Static Regeneration)

```typescript
// In fetch options
{ next: { revalidate: 3600 } } // Revalidate every hour
```

---

## Testing Checklist

### Unit Tests
- [ ] Reviews.io API client fetches correctly
- [ ] Data transformation produces correct format
- [ ] Caching stores and retrieves data
- [ ] Error handling returns appropriate fallbacks

### Integration Tests
- [ ] Product page displays reviews from Reviews.io
- [ ] Pagination works correctly
- [ ] Category page shows star ratings
- [ ] Schema.org markup validates in Google tool

### Manual Testing
- [ ] Reviews display on all product types
- [ ] Mobile layout is correct
- [ ] Loading states appear properly
- [ ] Error states display gracefully
- [ ] No console errors

### SEO Validation
- [ ] Google Rich Results Test passes
- [ ] Schema.org Validator shows no errors
- [ ] Review snippets appear in search (may take time)

---

## Rollout Plan

### Step 1: Development
- Implement all phases in development environment
- Test with real Reviews.io credentials
- Verify all functionality

### Step 2: Staging
- Deploy to preview/staging environment
- QA testing
- Performance benchmarking

### Step 3: Production
- Add environment variables to Vercel
- Deploy to production
- Monitor for errors
- Validate schema in Google Search Console

### Step 4: Post-Launch
- Monitor cache hit rates
- Check API usage/rate limits
- Gather user feedback
- Iterate on UI if needed

---

## Estimated Effort

| Phase | Effort |
|-------|--------|
| Phase 1: Foundation | 2-3 hours |
| Phase 2: Product Page Reviews | 3-4 hours |
| Phase 3: Schema.org | 1-2 hours |
| Phase 4: Category Page Ratings | 2-3 hours |
| Phase 5: Testing & Polish | 2-3 hours |
| **Total** | **10-15 hours** |

---

## Questions to Resolve Before Implementation

1. **Reviews.io Store ID**: What is the exact store ID to use?
2. **API Key**: Confirm API key is available and has correct permissions
3. **SKU Format**: Are product SKUs in BigCommerce identical to Reviews.io SKUs?
4. **Rate Limits**: What are the API rate limits on your Reviews.io plan?
5. **Existing Reviews**: Are there already reviews in Reviews.io for EPHA products?

---

## Appendix: Reference Files

### Existing Review Components (to reuse)
- `core/vibes/soul/sections/reviews/index.tsx` - Review list UI
- `core/vibes/soul/primitives/rating/index.tsx` - Star rating display
- `core/vibes/soul/sections/reviews/review-form.tsx` - Review form (not needed)

### Existing Patterns to Follow
- `core/lib/kv/` - Caching infrastructure
- `core/client/index.ts` - API client patterns
- `core/app/[locale]/(default)/contact/_actions/submit-contact.ts` - Server action patterns
