import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { Button } from '~/components/ui/button';

export interface FeaturedProduct {
  id: string;
  name: string;
  href: string;
  image?: {
    src: string;
    alt: string;
  };
  price?: {
    type: 'sale' | 'range' | 'fixed';
    currentValue?: string;
    previousValue?: string;
    minValue?: string;
    maxValue?: string;
  } | null;
  brand?: string;
  sku?: string;
}

interface FeaturedProductsProps {
  products?: FeaturedProduct[];
}

export function FeaturedProducts({ products = [] }: FeaturedProductsProps) {
  // If no products, show placeholder
  if (products.length === 0) {
    return (
      <section className="bg-secondary/30 py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <h2 className="font-heading text-4xl font-bold uppercase text-primary md:text-5xl">
                Featured Products
              </h2>
              <div className="mt-4 h-1 w-24 bg-accent" />
            </div>
          </div>
          <p className="text-center text-gray-500">No featured products available.</p>
        </div>
      </section>
    );
  }

  const formatPrice = (price: FeaturedProduct['price']) => {
    if (!price) return null;

    if (price.type === 'sale' && price.currentValue) {
      return (
        <div className="flex items-center gap-2">
          <span className="font-bold text-accent">{price.currentValue}</span>
          {price.previousValue ? (
            <span className="text-sm text-gray-400 line-through">{price.previousValue}</span>
          ) : null}
        </div>
      );
    }

    if (price.type === 'range' && price.minValue && price.maxValue) {
      return (
        <span className="font-bold text-gray-900">
          {price.minValue} - {price.maxValue}
        </span>
      );
    }

    if (price.currentValue) {
      return <span className="font-bold text-gray-900">{price.currentValue}</span>;
    }

    return null;
  };

  return (
    <section className="bg-secondary/30 py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="font-heading text-4xl font-bold uppercase text-primary md:text-5xl">
              Featured Products
            </h2>
            <div className="mt-4 h-1 w-24 bg-accent" />
          </div>
          <Link href="/hose-protector">
            <Button
              className="hidden font-bold uppercase tracking-wider text-primary md:block"
              variant="link"
            >
              View All Products &rarr;
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 8).map((product) => (
            <Link
              className="group rounded-lg border border-transparent bg-white p-6 shadow-sm transition-all duration-300 hover:border-accent/20 hover:shadow-xl"
              href={product.href}
              key={product.id}
            >
              <div className="relative mb-6 flex aspect-square items-center justify-center overflow-hidden rounded-md bg-gradient-to-br from-gray-50 to-gray-100">
                {product.image ? (
                  <Image
                    alt={product.image.alt || product.name}
                    className="h-full w-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
                    height={300}
                    src={product.image.src}
                    width={300}
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gray-100">
                    <span className="text-gray-400">No image</span>
                  </div>
                )}
              </div>

              {product.brand ? (
                <p className="mb-1 text-xs font-medium uppercase tracking-wider text-accent">
                  {product.brand}
                </p>
              ) : null}

              <h3 className="mb-2 line-clamp-2 text-lg font-bold text-primary">{product.name}</h3>

              {product.sku ? (
                <p className="mb-2 font-mono text-xs text-gray-400">SKU: {product.sku}</p>
              ) : null}

              <div className="mb-4">{formatPrice(product.price)}</div>

              <div className="w-full rounded-full bg-gray-900 px-4 py-3 text-center text-xs font-bold uppercase tracking-wider text-white transition-colors group-hover:bg-accent">
                View Product
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 text-center md:hidden">
          <Link href="/hose-protector">
            <Button className="font-bold uppercase tracking-wider" variant="outline">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
