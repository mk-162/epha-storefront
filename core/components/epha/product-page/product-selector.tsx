'use client';

import { Check, Loader2, Minus, Package, Plus, ShoppingCart, Truck } from 'lucide-react';
import { useState, useTransition } from 'react';

import { addProductToCart } from '~/app/[locale]/(default)/products/_actions/add-to-cart';
import type { Product } from '~/app/[locale]/(default)/products/_data/get-products';
import { Image } from '~/components/image';
import { Button } from '~/components/ui/button';

// Size data with applications
const sizeData: Record<
  string,
  {
    hoseFit: string;
    dimensions: string;
    idealFor: string;
    popular?: boolean;
  }
> = {
  '4"': {
    hoseFit: '0.25" - 1.00"',
    dimensions: '2.5" × 4"',
    idealFor: 'Battery cables, small pneumatic lines',
  },
  '5"': {
    hoseFit: '0.75" - 1.25"',
    dimensions: '3.5" × 5"',
    idealFor: 'Medium hydraulic lines',
  },
  '6"': {
    hoseFit: '0.75" - 1.25"',
    dimensions: '3.25" × 6"',
    idealFor: 'Standard hydraulic assemblies',
    popular: true,
  },
  '8"': {
    hoseFit: '1.00" - 1.50"',
    dimensions: '3.5" × 8"',
    idealFor: 'Medium-large hydraulic systems',
    popular: true,
  },
  '10"': {
    hoseFit: '1.25" - 2.25"',
    dimensions: '4.5" × 10"',
    idealFor: 'Large assemblies, bundle wraps',
  },
  '12"': {
    hoseFit: '1.50" - 2.50"',
    dimensions: '5" × 12"',
    idealFor: 'Multi-hose bundles, heavy equipment',
  },
};

const colorOptions = [
  { name: 'Safety Orange', value: 'orange', hex: '#FF6B35', description: 'High visibility' },
  { name: 'Black', value: 'black', hex: '#1a1a1a', description: 'Low profile' },
  { name: 'Yellow', value: 'yellow', hex: '#FCD34D', description: 'Maximum visibility' },
];

interface ProductSelectorProps {
  products: Product[];
}

export function ProductSelector({ products }: ProductSelectorProps) {
  const [selectedSize, setSelectedSize] = useState<string>('6"');
  const [selectedColor, setSelectedColor] = useState<string>('orange');
  const [quantity, setQuantity] = useState(10);
  const [isPending, startTransition] = useTransition();
  const [addedToCart, setAddedToCart] = useState(false);

  // Get all variants from products
  const allVariants = products.flatMap((p) =>
    p.variants.map((v) => ({
      ...v,
      productEntityId: p.entityId,
      productImage: p.image,
    })),
  );

  // Get unique sizes with their variants
  const sizeVariants = Object.entries(sizeData).map(([size, data]) => {
    const variant = allVariants.find((v) => v.size === size);
    return {
      size,
      ...data,
      variant,
      price: variant?.price || 0,
    };
  });

  const selectedVariant = sizeVariants.find((s) => s.size === selectedSize);
  const unitPrice = selectedVariant?.price || 0;
  const totalPrice = unitPrice * quantity;

  // Calculate bulk discount
  const getDiscount = (qty: number) => {
    if (qty >= 200) return 0.25;
    if (qty >= 50) return 0.15;
    return 0;
  };

  const discount = getDiscount(quantity);
  const discountedTotal = totalPrice * (1 - discount);

  const handleAddToCart = () => {
    const variant = selectedVariant?.variant;
    if (!variant) return;

    startTransition(async () => {
      try {
        await addProductToCart(variant.productEntityId, variant.entityId, quantity);
        setAddedToCart(true);
        setTimeout(() => setAddedToCart(false), 3000);
      } catch (error) {
        console.error('Failed to add to cart:', error);
      }
    });
  };

  return (
    <section className="bg-slate-50 py-16" id="product-selector">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <h2 className="mb-2 font-heading text-3xl font-bold uppercase text-primary md:text-4xl">
            Choose Your Protection
          </h2>
          <p className="text-gray-600">Select size, color, and quantity. Add to cart in seconds.</p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
            <div className="grid lg:grid-cols-5">
              {/* Left: Size Selection */}
              <div className="border-b border-slate-200 p-6 lg:col-span-3 lg:border-b-0 lg:border-r">
                <h3 className="mb-4 flex items-center gap-2 font-heading text-lg font-bold uppercase text-primary">
                  <Package className="h-5 w-5 text-accent" />
                  1. Select Size
                </h3>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {sizeVariants.map((item) => (
                    <button
                      className={`relative rounded-lg border-2 p-4 text-left transition-all ${
                        selectedSize === item.size
                          ? 'border-accent bg-accent/5 ring-2 ring-accent/20'
                          : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                      }`}
                      key={item.size}
                      onClick={() => setSelectedSize(item.size)}
                      type="button"
                    >
                      {item.popular && (
                        <span className="absolute -top-2 right-2 rounded-full bg-accent px-2 py-0.5 text-[10px] font-bold uppercase text-white">
                          Popular
                        </span>
                      )}
                      <div className="mb-1 font-heading text-2xl font-bold text-primary">
                        HP{item.size.replace('"', '')}
                      </div>
                      <div className="mb-2 font-mono text-xs text-gray-500">{item.hoseFit} OD</div>
                      <div className="text-lg font-bold text-accent">
                        ${item.price.toFixed(2)}
                        <span className="text-sm font-normal text-gray-400">/ea</span>
                      </div>
                      {selectedSize === item.size && (
                        <div className="absolute right-2 top-1/2 -translate-y-1/2">
                          <Check className="h-5 w-5 text-accent" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>

                {/* Selected size details */}
                {selectedVariant && (
                  <div className="mt-4 flex items-center gap-4 rounded-lg bg-slate-100 p-4">
                    {selectedVariant.variant?.productImage && (
                      <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-white p-2">
                        <Image
                          alt="Product"
                          className="h-full w-full object-contain"
                          height={64}
                          src={selectedVariant.variant.productImage.url}
                          width={64}
                        />
                      </div>
                    )}
                    <div>
                      <div className="font-bold text-primary">
                        HP{selectedVariant.size.replace('"', '')} Hose Protector
                      </div>
                      <div className="text-sm text-gray-600">
                        Fits {selectedVariant.hoseFit} hose OD | {selectedVariant.dimensions}
                      </div>
                      <div className="text-sm text-gray-500">{selectedVariant.idealFor}</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Right: Color, Quantity, Add to Cart */}
              <div className="flex flex-col p-6 lg:col-span-2">
                {/* Color Selection */}
                <div className="mb-6">
                  <h3 className="mb-3 font-heading text-lg font-bold uppercase text-primary">
                    2. Select Color
                  </h3>
                  <div className="flex gap-3">
                    {colorOptions.map((color) => (
                      <button
                        className={`group relative flex flex-col items-center gap-1 rounded-lg border-2 p-3 transition-all ${
                          selectedColor === color.value
                            ? 'border-primary bg-primary/5'
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                        key={color.value}
                        onClick={() => setSelectedColor(color.value)}
                        type="button"
                      >
                        <div
                          className="h-8 w-8 rounded-full border-2 border-white shadow-md"
                          style={{ backgroundColor: color.hex }}
                        />
                        <span className="text-xs font-medium text-gray-700">{color.name}</span>
                        {selectedColor === color.value && (
                          <Check className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-primary p-0.5 text-white" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div className="mb-6">
                  <h3 className="mb-3 font-heading text-lg font-bold uppercase text-primary">
                    3. Quantity
                  </h3>
                  <div className="flex items-center gap-3">
                    <button
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 bg-white text-gray-600 transition-colors hover:bg-slate-100 disabled:opacity-50"
                      disabled={quantity <= 1}
                      onClick={() => setQuantity((q) => Math.max(1, q - 10))}
                      type="button"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <input
                      className="h-10 w-20 rounded-lg border border-slate-300 text-center font-bold text-primary"
                      min="1"
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value, 10) || 1))}
                      type="number"
                      value={quantity}
                    />
                    <button
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 bg-white text-gray-600 transition-colors hover:bg-slate-100"
                      onClick={() => setQuantity((q) => q + 10)}
                      type="button"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Bulk discount indicator */}
                  {discount > 0 && (
                    <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                      <Check className="h-3 w-3" />
                      {Math.round(discount * 100)}% bulk discount applied!
                    </div>
                  )}
                  {quantity < 50 && (
                    <div className="mt-2 text-xs text-gray-500">
                      Order 50+ for 15% off, 200+ for 25% off
                    </div>
                  )}
                </div>

                {/* Price Summary */}
                <div className="mb-6 flex-1 rounded-lg bg-slate-900 p-4 text-white">
                  <div className="mb-3 flex items-center justify-between text-sm">
                    <span className="text-gray-400">
                      {quantity} × ${unitPrice.toFixed(2)}
                    </span>
                    {discount > 0 && (
                      <span className="text-gray-400 line-through">${totalPrice.toFixed(2)}</span>
                    )}
                  </div>
                  <div className="flex items-end justify-between">
                    <span className="text-sm font-bold uppercase tracking-wide text-gray-400">
                      Total
                    </span>
                    <span className="font-heading text-3xl font-bold text-accent">
                      ${discountedTotal.toFixed(2)}
                    </span>
                  </div>
                  {discount > 0 && (
                    <div className="mt-1 text-right text-xs text-green-400">
                      You save ${(totalPrice - discountedTotal).toFixed(2)}
                    </div>
                  )}
                </div>

                {/* Add to Cart Button */}
                <Button
                  className={`w-full py-6 text-lg font-bold uppercase tracking-wider transition-all ${
                    addedToCart
                      ? 'bg-green-600 hover:bg-green-700'
                      : 'bg-accent shadow-lg shadow-accent/30 hover:bg-accent/90 hover:shadow-xl hover:shadow-accent/40'
                  }`}
                  disabled={isPending || !selectedVariant?.variant}
                  onClick={handleAddToCart}
                  size="lg"
                >
                  {isPending && (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Adding...
                    </>
                  )}
                  {!isPending && addedToCart && (
                    <>
                      <Check className="mr-2 h-5 w-5" />
                      Added to Cart!
                    </>
                  )}
                  {!isPending && !addedToCart && (
                    <>
                      <ShoppingCart className="mr-2 h-5 w-5" />
                      Add to Cart
                    </>
                  )}
                </Button>

                {/* Trust signals */}
                <div className="mt-4 flex items-center justify-center gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Truck className="h-4 w-4" />
                    Free shipping $500+
                  </span>
                  <span className="h-3 w-px bg-gray-300" />
                  <span>Same-day dispatch</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
