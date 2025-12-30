'use client';

import { Image } from '~/components/image';
import { Link } from '~/components/link';

import {
  COLOR_INFO,
  getColorVariants,
  getOtherPackSizes,
  getProductInfo,
  isHoseProtector,
  PACK_TYPE_INFO,
  ProductInfo,
} from './product-relationships';

interface RelatedProductsProps {
  currentSlug: string;
}

function ProductCard({ product }: { product: ProductInfo }) {
  const colorInfo = COLOR_INFO[product.color];
  const packInfo = PACK_TYPE_INFO[product.packType];

  return (
    <Link
      className="group flex flex-col rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-accent hover:shadow-lg"
      href={product.slug}
    >
      <div className="relative mb-4 aspect-square overflow-hidden rounded-md bg-gray-50">
        <Image
          alt={product.name}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
          height={200}
          src={product.image}
          width={200}
        />
      </div>
      <div className="mb-2 flex items-center gap-2">
        <span
          className="h-4 w-4 rounded-full border border-gray-300"
          style={{ backgroundColor: colorInfo.hex }}
          title={colorInfo.name}
        />
        <span className="text-xs font-medium text-gray-500">{packInfo.shortName}</span>
      </div>
      <h4 className="line-clamp-2 text-sm font-semibold text-primary transition-colors group-hover:text-accent">
        {product.name}
      </h4>
    </Link>
  );
}

function ColorSwatchLink({ product }: { product: ProductInfo }) {
  const colorInfo = COLOR_INFO[product.color];

  return (
    <Link
      className="group flex flex-col items-center gap-2"
      href={product.slug}
      title={`View in ${colorInfo.name}`}
    >
      <span
        className="h-10 w-10 rounded-full border-2 border-gray-300 transition-all group-hover:scale-110 group-hover:border-accent group-hover:shadow-lg"
        style={{ backgroundColor: colorInfo.hex }}
      />
      <span className="text-xs font-medium text-gray-600 group-hover:text-accent">
        {colorInfo.name}
      </span>
    </Link>
  );
}

export function RelatedProducts({ currentSlug }: RelatedProductsProps) {
  // Check if this product has relationships
  if (!isHoseProtector(currentSlug)) {
    return null;
  }

  const currentProduct = getProductInfo(currentSlug);
  const otherPackSizes = getOtherPackSizes(currentSlug);
  const colorVariants = getColorVariants(currentSlug);

  if (!currentProduct) {
    return null;
  }

  const hasPackSizes = otherPackSizes.length > 0;
  const hasColorVariants = colorVariants.length > 0;

  if (!hasPackSizes && !hasColorVariants) {
    return null;
  }

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Color Variants Section - Show as swatches */}
        {hasColorVariants && (
          <div className="mb-10">
            <h3 className="mb-4 text-lg font-bold text-primary">Also Available in Other Colors</h3>
            <div className="flex items-center gap-6">
              {/* Current color (highlighted) */}
              <div className="flex flex-col items-center gap-2">
                <span
                  className="h-10 w-10 rounded-full border-2 border-accent ring-2 ring-accent ring-offset-2"
                  style={{ backgroundColor: COLOR_INFO[currentProduct.color].hex }}
                />
                <span className="text-xs font-bold text-accent">
                  {COLOR_INFO[currentProduct.color].name}
                </span>
              </div>
              {/* Other colors */}
              {colorVariants.map((product) => (
                <ColorSwatchLink key={product.slug} product={product} />
              ))}
            </div>
          </div>
        )}

        {/* Other Pack Sizes Section */}
        {hasPackSizes && (
          <div>
            <h3 className="mb-4 text-lg font-bold text-primary">
              Other Pack Sizes in {COLOR_INFO[currentProduct.color].name}
            </h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {otherPackSizes.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
