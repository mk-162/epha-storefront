'use client';

import {
  ChevronLeft,
  ChevronRight,
  Filter,
  Grid3X3,
  LayoutList,
  Search,
  SlidersHorizontal,
  X,
} from 'lucide-react';
import { useMemo, useState } from 'react';

import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { Button } from '~/components/ui/button';

import type { ProductCategory, ShopProduct } from '../page';

interface ShopPageClientProps {
  products: ShopProduct[];
  availableColors: string[];
  availableSizes: string[];
}

const CATEGORY_LABELS: Record<ProductCategory, string> = {
  'hose-protectors': 'Hose Protectors',
  'cable-ties': 'Cable Ties',
  other: 'Other Products',
};

const CATEGORY_ORDER: ProductCategory[] = ['hose-protectors', 'cable-ties', 'other'];

const PRODUCTS_PER_PAGE = 10;

interface CategoryTabsProps {
  availableCategories: ProductCategory[];
  selectedCategory: ProductCategory | 'all';
  onCategoryChange: (category: ProductCategory | 'all') => void;
}

function CategoryTabs({
  availableCategories,
  selectedCategory,
  onCategoryChange,
}: CategoryTabsProps) {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-1 overflow-x-auto py-1">
          <button
            className={`whitespace-nowrap rounded-t-lg px-6 py-3 text-sm font-bold uppercase tracking-wider transition-colors ${
              selectedCategory === 'all'
                ? 'border-b-2 border-accent bg-slate-50 text-accent'
                : 'text-slate-600 hover:bg-slate-50 hover:text-primary'
            }`}
            onClick={() => onCategoryChange('all')}
            type="button"
          >
            All Products
          </button>
          {availableCategories.map((category) => (
            <button
              className={`whitespace-nowrap rounded-t-lg px-6 py-3 text-sm font-bold uppercase tracking-wider transition-colors ${
                selectedCategory === category
                  ? 'border-b-2 border-accent bg-slate-50 text-accent'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-primary'
              }`}
              key={category}
              onClick={() => onCategoryChange(category)}
              type="button"
            >
              {CATEGORY_LABELS[category]}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ShopPageClient({ products, availableColors, availableSizes }: ShopPageClientProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<'name' | 'price-low' | 'price-high'>('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>(
    'hose-protectors',
  );

  // Get available categories (only those with products)
  const availableCategories = useMemo(() => {
    const categoryCounts = new Map<ProductCategory, number>();

    products.forEach((p) => {
      categoryCounts.set(p.category, (categoryCounts.get(p.category) ?? 0) + 1);
    });

    return CATEGORY_ORDER.filter((cat) => (categoryCounts.get(cat) ?? 0) > 0);
  }, [products]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();

      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.sku.toLowerCase().includes(query) ||
          p.brand?.toLowerCase().includes(query),
      );
    }

    // Color filter
    if (selectedColors.length > 0) {
      result = result.filter((p) => p.colors.some((c) => selectedColors.includes(c)));
    }

    // Size filter
    if (selectedSizes.length > 0) {
      result = result.filter((p) => p.sizes.some((s) => selectedSizes.includes(s)));
    }

    // Filter available sizes displayed in the sidebar UI (handled in render)
    // Here we just filter the products. The UI filter list needs to be restricted too.

    // Sort
    result.sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      }

      // For price sorting, extract numeric value
      const getPrice = (p: ShopProduct) => {
        if (!p.price) return 0;

        if (p.price.type === 'fixed' && p.price.value) {
          return parseFloat(p.price.value.replace(/[^0-9.]/g, ''));
        }

        if (p.price.type === 'range' && p.price.minValue) {
          return parseFloat(p.price.minValue.replace(/[^0-9.]/g, ''));
        }

        return 0;
      };

      const priceA = getPrice(a);
      const priceB = getPrice(b);

      return sortBy === 'price-low' ? priceA - priceB : priceB - priceA;
    });

    return result;
  }, [products, selectedCategory, searchQuery, selectedColors, selectedSizes, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE,
  );

  const toggleColor = (color: string) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color],
    );
    setCurrentPage(1);
  };

  const toggleSize = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size],
    );
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedColors([]);
    setSelectedSizes([]);
    setCurrentPage(1);
  };

  const hasActiveFilters =
    Boolean(searchQuery) || selectedColors.length > 0 || selectedSizes.length > 0;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary py-8 md:py-10">
        {/* Geometric background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <nav className="mb-4 flex items-center gap-2 text-sm text-white/60">
            <Link className="transition-colors hover:text-white" href="/">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Shop</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl font-bold uppercase tracking-wide text-white md:text-5xl">
              Shop Products
            </h1>
            <div className="mt-2 h-1 w-24 bg-accent" />
            <p className="mt-3 text-base text-white/80 md:text-lg">
              Professional-grade hose protection for every application.
            </p>
          </div>

          {/* Stats bar */}
          <div className="mt-6 flex flex-wrap gap-6 border-t border-white/20 pt-5">
            <div>
              <div className="font-heading text-2xl font-bold text-accent">
                {filteredProducts.length}
              </div>
              <div className="text-xs uppercase tracking-wider text-white/60">Products</div>
            </div>
            <div>
              <div className="font-heading text-2xl font-bold text-white">6</div>
              <div className="text-xs uppercase tracking-wider text-white/60">Sizes Available</div>
            </div>
            <div>
              <div className="font-heading text-2xl font-bold text-white">3</div>
              <div className="text-xs uppercase tracking-wider text-white/60">Color Options</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <CategoryTabs
        availableCategories={availableCategories}
        onCategoryChange={(category) => {
          setSelectedCategory(category);
          setCurrentPage(1);
        }}
        selectedCategory={selectedCategory}
      />

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden w-72 shrink-0 lg:block">
            <div className="sticky top-24 space-y-6">
              {/* Search */}
              <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="mb-4 flex items-center gap-2 font-heading text-lg font-bold uppercase text-primary">
                  <Search className="h-5 w-5" />
                  Search
                </h3>
                <div className="relative">
                  <input
                    className="w-full rounded-md border border-slate-200 py-2.5 pl-4 pr-10 text-sm transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setCurrentPage(1);
                    }}
                    placeholder="Search products..."
                    type="text"
                    value={searchQuery}
                  />
                  {searchQuery.length > 0 && (
                    <button
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                      onClick={() => setSearchQuery('')}
                      type="button"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </div>

              {/* Color Filter */}
              {availableColors.length > 0 && (
                <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="mb-4 font-heading text-lg font-bold uppercase text-primary">
                    Color
                  </h3>
                  <div className="space-y-2">
                    {availableColors.map((color) => (
                      <label
                        className="flex cursor-pointer items-center gap-3 rounded-md p-2 transition-colors hover:bg-slate-50"
                        key={color}
                      >
                        <input
                          checked={selectedColors.includes(color)}
                          className="h-4 w-4 rounded border-slate-300 text-accent focus:ring-accent"
                          onChange={() => toggleColor(color)}
                          type="checkbox"
                        />
                        <span className="text-sm text-slate-700">{color}</span>
                        {color.toLowerCase().includes('orange') && (
                          <span className="h-4 w-4 rounded-full bg-orange-500" />
                        )}
                        {color.toLowerCase().includes('black') && (
                          <span className="h-4 w-4 rounded-full bg-slate-900" />
                        )}
                        {color.toLowerCase().includes('yellow') && (
                          <span className="h-4 w-4 rounded-full bg-yellow-400" />
                        )}
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Size Filter */}
              {availableSizes.length > 0 && (
                <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="mb-4 font-heading text-lg font-bold uppercase text-primary">
                    Size
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {availableSizes
                      .filter((size) => {
                        if (selectedCategory === 'hose-protectors') {
                          // Only show HP sizes or purely numeric sizes (often interpreted as inches)
                          return /^\d/.test(size) || size.startsWith('HP');
                        }

                        if (selectedCategory === 'cable-ties') {
                          // Cable tie sizes often include "x" or length indicators like 4", 8"
                          return size.includes('"') || size.includes('x');
                        }

                        return true;
                      })
                      .map((size) => (
                        <button
                          className={`rounded-md border px-3 py-1.5 text-sm font-medium transition-all ${
                            selectedSizes.includes(size)
                              ? 'border-accent bg-accent text-white'
                              : 'border-slate-200 bg-white text-slate-700 hover:border-accent hover:text-accent'
                          }`}
                          key={size}
                          onClick={() => toggleSize(size)}
                          type="button"
                        >
                          {size}
                        </button>
                      ))}
                  </div>
                </div>
              )}

              {/* Clear Filters */}
              {hasActiveFilters && (
                <button
                  className="flex w-full items-center justify-center gap-2 rounded-md border border-slate-200 bg-white py-3 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50"
                  onClick={clearFilters}
                  type="button"
                >
                  <X className="h-4 w-4" />
                  Clear All Filters
                </button>
              )}
            </div>
          </aside>

          {/* Main Product Grid */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-center gap-4">
                {/* Mobile filter toggle */}
                <button
                  className="flex items-center gap-2 rounded-md border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 lg:hidden"
                  onClick={() => setShowFilters(!showFilters)}
                  type="button"
                >
                  <Filter className="h-4 w-4" />
                  Filters
                  {hasActiveFilters && (
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs text-white">
                      {selectedColors.length + selectedSizes.length + (searchQuery ? 1 : 0)}
                    </span>
                  )}
                </button>

                <span className="text-sm text-slate-500">
                  Showing{' '}
                  <span className="font-semibold text-slate-900">
                    {(currentPage - 1) * PRODUCTS_PER_PAGE + 1}-
                    {Math.min(currentPage * PRODUCTS_PER_PAGE, filteredProducts.length)}
                  </span>{' '}
                  of <span className="font-semibold text-slate-900">{filteredProducts.length}</span>{' '}
                  products
                </span>
              </div>

              <div className="flex items-center gap-3">
                {/* Sort */}
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="h-4 w-4 text-slate-400" />
                  <select
                    className="rounded-md border border-slate-200 bg-white py-2 pl-3 pr-8 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                    onChange={(e) => {
                      const value = e.target.value;

                      if (value === 'name' || value === 'price-low' || value === 'price-high') {
                        setSortBy(value);
                      }
                    }}
                    value={sortBy}
                  >
                    <option value="name">Name A-Z</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                  </select>
                </div>

                {/* View mode */}
                <div className="hidden items-center gap-1 rounded-md border border-slate-200 p-1 md:flex">
                  <button
                    className={`rounded p-1.5 transition-colors ${
                      viewMode === 'grid'
                        ? 'bg-primary text-white'
                        : 'text-slate-400 hover:text-slate-600'
                    }`}
                    onClick={() => setViewMode('grid')}
                    type="button"
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </button>
                  <button
                    className={`rounded p-1.5 transition-colors ${
                      viewMode === 'list'
                        ? 'bg-primary text-white'
                        : 'text-slate-400 hover:text-slate-600'
                    }`}
                    onClick={() => setViewMode('list')}
                    type="button"
                  >
                    <LayoutList className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Filters Panel */}
            {showFilters && (
              <div className="mb-6 rounded-lg border border-slate-200 bg-white p-4 shadow-sm lg:hidden">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-heading text-lg font-bold uppercase text-primary">Filters</h3>
                  <button
                    className="text-slate-400 hover:text-slate-600"
                    onClick={() => setShowFilters(false)}
                    type="button"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Search */}
                <div className="mb-4">
                  <input
                    className="w-full rounded-md border border-slate-200 py-2.5 pl-4 pr-10 text-sm focus:border-accent focus:outline-none"
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setCurrentPage(1);
                    }}
                    placeholder="Search products..."
                    type="text"
                    value={searchQuery}
                  />
                </div>

                {/* Colors */}
                {availableColors.length > 0 && (
                  <div className="mb-4">
                    <h4 className="mb-2 text-sm font-semibold text-slate-700">Color</h4>
                    <div className="flex flex-wrap gap-2">
                      {availableColors.map((color) => (
                        <button
                          className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${
                            selectedColors.includes(color)
                              ? 'bg-accent text-white'
                              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                          }`}
                          key={color}
                          onClick={() => toggleColor(color)}
                          type="button"
                        >
                          {color}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Sizes */}
                {availableSizes.length > 0 && (
                  <div className="mb-4">
                    <h4 className="mb-2 text-sm font-semibold text-slate-700">Size</h4>
                    <div className="flex flex-wrap gap-2">
                      {availableSizes.map((size) => (
                        <button
                          className={`rounded-md border px-3 py-1 text-xs font-medium transition-all ${
                            selectedSizes.includes(size)
                              ? 'border-accent bg-accent text-white'
                              : 'border-slate-200 text-slate-700 hover:border-accent'
                          }`}
                          key={size}
                          onClick={() => toggleSize(size)}
                          type="button"
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {hasActiveFilters && (
                  <button
                    className="w-full rounded-md border border-slate-200 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50"
                    onClick={clearFilters}
                    type="button"
                  >
                    Clear All Filters
                  </button>
                )}
              </div>
            )}

            {/* Active Filters Pills */}
            {hasActiveFilters && (
              <div className="mb-6 flex flex-wrap items-center gap-2">
                <span className="text-sm text-slate-500">Active filters:</span>
                {searchQuery.length > 0 && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                    &ldquo;{searchQuery}&rdquo;
                    <button
                      className="ml-1 hover:text-accent"
                      onClick={() => setSearchQuery('')}
                      type="button"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                )}
                {selectedColors.map((color) => (
                  <span
                    className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-3 py-1 text-sm text-accent"
                    key={color}
                  >
                    {color}
                    <button
                      className="ml-1 hover:text-primary"
                      onClick={() => toggleColor(color)}
                      type="button"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ))}
                {selectedSizes.map((size) => (
                  <span
                    className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700"
                    key={size}
                  >
                    {size}
                    <button
                      className="ml-1 hover:text-accent"
                      onClick={() => toggleSize(size)}
                      type="button"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ))}
              </div>
            )}

            {/* Product Grid */}
            {paginatedProducts.length > 0 ? (
              <div
                className={
                  viewMode === 'grid'
                    ? 'grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3'
                    : 'space-y-4'
                }
              >
                {paginatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} viewMode={viewMode} />
                ))}
              </div>
            ) : (
              <div className="rounded-lg border border-slate-200 bg-white py-16 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
                  <Search className="h-8 w-8 text-slate-400" />
                </div>
                <h3 className="mb-2 font-heading text-xl font-bold uppercase text-primary">
                  No Products Found
                </h3>
                <p className="mb-4 text-slate-500">Try adjusting your filters or search terms.</p>
                <Button onClick={clearFilters} variant="outline">
                  Clear Filters
                </Button>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-10 flex items-center justify-center gap-2">
                <button
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-slate-600 transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  type="button"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    className={`flex h-10 w-10 items-center justify-center rounded-md font-bold transition-colors ${
                      page === currentPage
                        ? 'bg-primary text-white'
                        : 'border border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    type="button"
                  >
                    {page}
                  </button>
                ))}

                <button
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-slate-600 transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  type="button"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-slate-200 bg-slate-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold uppercase text-primary md:text-4xl">
            Need Help Choosing?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-slate-600">
            Our experts can help you find the right protection for your specific application. Get
            personalized recommendations for your fleet.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button className="bg-accent font-bold uppercase tracking-wider text-white hover:bg-accent/90">
                Contact Sales
              </Button>
            </Link>
            <Link href="/hose-protector">
              <Button
                className="border-primary font-bold uppercase tracking-wider text-primary hover:bg-primary hover:text-white"
                variant="outline"
              >
                View Size Guide
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

interface ProductCardProps {
  product: ShopProduct;
  viewMode: 'grid' | 'list';
}

function ProductCard({ product, viewMode }: ProductCardProps) {
  if (viewMode === 'list') {
    return (
      <Link
        className="group flex gap-6 rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition-all hover:border-accent/30 hover:shadow-lg"
        href={product.path}
      >
        <div className="h-32 w-32 shrink-0 overflow-hidden rounded-md bg-gradient-to-br from-slate-50 to-slate-100">
          {product.image ? (
            <Image
              alt={product.image.alt || product.name}
              className="h-full w-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
              height={128}
              src={product.image.src}
              width={128}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <span className="text-sm text-slate-400">No image</span>
            </div>
          )}
        </div>
        <div className="flex flex-1 flex-col justify-center">
          {product.brand && product.brand.toUpperCase() !== 'GTSE' ? (
            <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-accent">
              {product.brand}
            </p>
          ) : null}
          <h3 className="mb-2 font-heading text-xl font-bold uppercase text-primary transition-colors group-hover:text-accent">
            {product.name}
          </h3>
          {product.sku ? (
            <p className="mb-2 font-mono text-xs text-slate-400">SKU: {product.sku}</p>
          ) : null}
          <div className="flex items-center gap-4">
            <span className="text-lg font-bold text-slate-900">
              {product.price?.type === 'range'
                ? `${product.price.minValue} - ${product.price.maxValue}`
                : product.price?.value || 'Contact for price'}
            </span>
            <span className="rounded-full bg-primary px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white transition-colors group-hover:bg-accent">
              View Details
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      className="group flex flex-col rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-accent/30 hover:shadow-xl"
      href={product.path}
    >
      <div className="relative mb-5 aspect-square overflow-hidden rounded-md bg-gradient-to-br from-slate-50 to-slate-100">
        {product.image ? (
          <Image
            alt={product.image.alt || product.name}
            className="h-full w-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
            height={300}
            src={product.image.src}
            width={300}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-slate-400">No image</span>
          </div>
        )}
        {/* Quick view overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-primary/0 transition-all duration-300 group-hover:bg-primary/10">
          <span className="translate-y-4 rounded-full bg-white px-4 py-2 text-sm font-bold uppercase tracking-wider text-primary opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            Quick View
          </span>
        </div>
      </div>

      {product.brand && product.brand.toUpperCase() !== 'GTSE' ? (
        <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-accent">
          {product.brand}
        </p>
      ) : null}

      <h3 className="mb-2 line-clamp-2 font-heading text-lg font-bold uppercase text-primary transition-colors group-hover:text-accent">
        {product.name}
      </h3>

      {product.sku ? (
        <p className="mb-3 font-mono text-xs text-slate-400">SKU: {product.sku}</p>
      ) : null}

      <div className="mt-auto">
        <div className="mb-4 text-lg font-bold text-slate-900">
          {product.price?.type === 'range'
            ? `${product.price.minValue} - ${product.price.maxValue}`
            : product.price?.value || 'Contact for price'}
        </div>

        <div className="w-full rounded-full bg-slate-900 py-3 text-center text-xs font-bold uppercase tracking-wider text-white transition-colors group-hover:bg-accent">
          View Product
        </div>
      </div>
    </Link>
  );
}
