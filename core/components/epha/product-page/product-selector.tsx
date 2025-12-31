'use client';

import { Check, Loader2, Minus, Package, Plus, ShoppingCart, Truck } from 'lucide-react';
import { useState, useTransition } from 'react';

import { addProductToCart } from '~/app/[locale]/(default)/hose-protector/_actions/add-to-cart';
import type { Product } from '~/app/[locale]/(default)/hose-protector/_data/get-products';
import { Image } from '~/components/image';
import { Button } from '~/components/ui/button';

import { CableTieModal } from '../cable-tie-modal';
import { type CableTieProduct, type HoseProtectorSize } from '../cable-tie-relationships';

// Pack types configuration
const packTypes = [
  {
    id: 'counter-display',
    name: 'Counter Display',
    shortName: 'Display Box',
    description: '50 pcs (4"-8") or 15 pcs (10"-12")',
    audience: 'Retailers & Shops',
    icon: Package,
    skuPrefix: 'HP',
    skuSuffix: '-BOX',
  },
  {
    id: 'bulk',
    name: 'Bulk Singles',
    shortName: 'Per Piece',
    description: 'Individual pieces, volume pricing',
    audience: 'Fleet & Volume Buyers',
    icon: ShoppingCart,
    skuPrefix: 'HP',
    skuSuffix: '/1',
  },
  {
    id: 'box-25',
    name: 'Box of 25',
    shortName: 'Box (25)',
    description: '25 pieces per box, 6" extra-wide',
    audience: 'Mid-Volume Orders',
    icon: Package,
    skuPrefix: 'HP12',
    skuSuffix: '-2',
  },
] as const;

// Human-readable size data with clear descriptions
const sizeData: Record<
  string,
  {
    hoseFit: string;
    dimensions: string;
    description: string;
    applications: string[];
    popular?: boolean;
    qtyInBox?: number;
  }
> = {
  '4"': {
    hoseFit: '1/4" to 1"',
    dimensions: '2.5" × 4"',
    description: 'Compact protection for small lines',
    applications: ['Battery cables', 'Pneumatic lines', 'Control cables'],
    qtyInBox: 50,
  },
  '6"': {
    hoseFit: '3/4" to 1-1/4"',
    dimensions: '3.25" × 6"',
    description: 'Most popular size for standard hoses',
    applications: ['Standard hydraulic assemblies', 'Loader arms', 'Boom cylinders'],
    popular: true,
    qtyInBox: 50,
  },
  '8"': {
    hoseFit: '1" to 1-1/2"',
    dimensions: '3.5" × 8"',
    description: 'Extended coverage for larger systems',
    applications: ['Excavator arms', 'Bucket cylinders', 'Heavy-duty lines'],
    popular: true,
    qtyInBox: 50,
  },
  '10"': {
    hoseFit: '1-1/4" to 2-1/4"',
    dimensions: '4.5" × 10"',
    description: 'Large diameter hose protection',
    applications: ['Bundle wraps', 'Main supply lines', 'High-flow systems'],
    qtyInBox: 15,
  },
  '12"': {
    hoseFit: '1-1/2" to 2-1/2"',
    dimensions: '5" × 12"',
    description: 'Maximum protection for heavy equipment',
    applications: ['Multi-hose bundles', 'Mining equipment', 'Large excavators'],
    qtyInBox: 15,
  },
};

type PackTypeId = 'counter-display' | 'bulk' | 'box-25';

const colorOptions: Array<{
  name: string;
  value: string;
  code: string;
  hex: string;
  description: string;
  images: Record<PackTypeId, string>;
}> = [
  {
    name: 'Safety Orange',
    value: 'orange',
    code: 'O',
    hex: '#FF6B35',
    description: 'High visibility for safety compliance',
    images: {
      'counter-display':
        'https://cdn11.bigcommerce.com/s-usnceuurb6/products/431/images/868/HPO-BOX__45149.1733924127.386.513.png?c=1',
      bulk: 'https://cdn11.bigcommerce.com/s-usnceuurb6/products/434/images/875/HPO_1__49987.1733924243.386.513.png?c=1',
      'box-25':
        'https://cdn11.bigcommerce.com/s-usnceuurb6/products/439/images/883/HP12O-25__39002.1733924744.386.513.png?c=1',
    },
  },
  {
    name: 'Black',
    value: 'black',
    code: 'B',
    hex: '#1a1a1a',
    description: 'Professional low-profile appearance',
    images: {
      'counter-display':
        'https://cdn11.bigcommerce.com/s-usnceuurb6/products/432/images/870/HPB-BOX__47555.1733924143.386.513.png?c=1',
      bulk: 'https://cdn11.bigcommerce.com/s-usnceuurb6/products/435/images/874/HPB_1__83220.1733924241.386.513.png?c=1',
      'box-25':
        'https://cdn11.bigcommerce.com/s-usnceuurb6/products/440/images/885/HP12B-25__52594.1733924779.386.513.png?c=1',
    },
  },
  {
    name: 'Yellow',
    value: 'yellow',
    code: 'Y',
    hex: '#FCD34D',
    description: 'Maximum visibility for hazard areas',
    images: {
      'counter-display':
        'https://cdn11.bigcommerce.com/s-usnceuurb6/products/433/images/871/HPY-BOX__05300.1733924152.386.513.png?c=1',
      bulk: 'https://cdn11.bigcommerce.com/s-usnceuurb6/products/436/images/873/HPY_1__58656.1733924239.386.513.png?c=1',
      'box-25':
        'https://cdn11.bigcommerce.com/s-usnceuurb6/products/441/images/887/HP12Y-25__31206.1733924811.386.513.png?c=1',
    },
  },
];

interface ProductSelectorProps {
  products: Product[];
}

export function ProductSelector({ products }: ProductSelectorProps) {
  const [selectedPackType, setSelectedPackType] = useState<PackTypeId>('bulk');
  const [selectedSize, setSelectedSize] = useState<string>('6"');
  const [selectedColor, setSelectedColor] = useState<string>('orange');
  const [quantity, setQuantity] = useState(10);
  const [isPending, startTransition] = useTransition();
  const [addedToCart, setAddedToCart] = useState(false);
  const [showCableTieModal, setShowCableTieModal] = useState(false);

  // Get all variants from products
  const allVariants = products.flatMap((p) =>
    p.variants.map((v) => ({
      ...v,
      productEntityId: p.entityId,
      productImage: p.image,
      productName: p.name,
    })),
  );

  // Get available sizes for current pack type
  // - Counter Display & Bulk: 5 sizes (4", 6", 8", 10", 12")
  // - Box of 25: Only 6" extra-wide
  const availableSizes = selectedPackType === 'box-25' ? ['6"'] : Object.keys(sizeData);

  // Reset size if switching to box-25 and size isn't 6"
  if (selectedPackType === 'box-25' && selectedSize !== '6"') {
    setSelectedSize('6"');
  }

  // Get unique sizes with their variants
  const sizeVariants = availableSizes.map((size) => {
    const data = sizeData[size];
    const variant = allVariants.find((v) => v.size === size);

    return {
      size,
      ...data,
      variant,
      price: variant?.price || 0,
    };
  });

  const selectedVariant = sizeVariants.find((s) => s.size === selectedSize);
  const selectedColorData = colorOptions.find((c) => c.value === selectedColor);
  const selectedPackTypeData = packTypes.find((p) => p.id === selectedPackType);

  // Get the right image for selected pack type and color
  const currentImage = selectedColorData?.images[selectedPackType] || '';

  const unitPrice = selectedVariant?.price || 0;
  const totalPrice = unitPrice * quantity;

  // Calculate bulk discount (only for bulk singles)
  const getDiscount = (qty: number) => {
    if (selectedPackType !== 'bulk') return 0;
    if (qty >= 200) return 0.25;
    if (qty >= 50) return 0.15;

    return 0;
  };

  const getPriceUnit = (packType: PackTypeId, qtyInBox?: number) => {
    if (packType === 'counter-display') return `/ box of ${qtyInBox}`;
    if (packType === 'box-25') return '/ box of 25';

    return '/ea';
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

        // Show cable tie modal for non-counter-display products (they don't include cable ties)
        if (selectedPackType !== 'counter-display') {
          setTimeout(() => {
            setShowCableTieModal(true);
            setAddedToCart(false);
          }, 800);
        } else {
          setTimeout(() => setAddedToCart(false), 3000);
        }
      } catch (error) {
        console.error('Failed to add to cart:', error);
      }
    });
  };

  // Handler for adding cable ties from modal
  const handleAddCableTies = async (product: CableTieProduct, qty: number) => {
    await addProductToCart(product.entityId, product.variantId || product.entityId, qty);
  };

  // Convert selected size to HoseProtectorSize type
  const getHoseProtectorSize = (): HoseProtectorSize | undefined => {
    const sizeNum = selectedSize.replace('"', '');
    const validSizes: HoseProtectorSize[] = ['4', '5', '6', '8', '10', '12'];
    const matchedSize = validSizes.find((size) => size === sizeNum);

    return matchedSize;
  };

  return (
    <section className="relative bg-slate-50 py-20" id="product-selector">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4">
        {/* Section Header */}
        <div className="mb-8 text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
            Quick Order
          </span>
          <h2 className="mb-3 font-heading text-4xl font-black uppercase tracking-tight text-slate-900 md:text-5xl">
            Choose Your Protection
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Select your pack type, size, and color. Volume discounts available on bulk orders.
          </p>
        </div>

        {/* Pack Type Tabs */}
        <div className="mx-auto mb-8 max-w-4xl">
          <div className="flex flex-wrap justify-center gap-3">
            {packTypes.map((packType) => {
              const Icon = packType.icon;
              const isSelected = selectedPackType === packType.id;

              return (
                <button
                  className={`group flex items-center gap-3 rounded-2xl border-2 px-6 py-4 text-left transition-all duration-300 ${
                    isSelected
                      ? 'border-accent bg-accent text-white shadow-lg shadow-accent/30'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:shadow-md'
                  }`}
                  key={packType.id}
                  onClick={() => setSelectedPackType(packType.id)}
                >
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                      isSelected ? 'bg-white/20' : 'bg-slate-100 group-hover:bg-slate-200'
                    }`}
                  >
                    <Icon className={`h-5 w-5 ${isSelected ? 'text-white' : 'text-slate-600'}`} />
                  </div>
                  <div>
                    <div
                      className={`font-heading text-sm font-bold uppercase tracking-wide ${
                        isSelected ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {packType.name}
                    </div>
                    <div className={`text-xs ${isSelected ? 'text-white/80' : 'text-slate-500'}`}>
                      {packType.description}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Pack type info */}
          <div className="mt-4 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-200/50 px-4 py-2 text-sm text-slate-600">
              <span className="font-medium">Best for:</span>
              <span className="font-bold text-primary">{selectedPackTypeData?.audience}</span>
            </span>
          </div>
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-200/50">
            <div className="grid lg:grid-cols-3">
              {/* Left: Size Selection */}
              <div className="border-b border-slate-200 p-8 lg:col-span-2 lg:border-b-0 lg:border-r">
                <div className="mb-6 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary font-heading text-sm font-bold text-white">
                    1
                  </span>
                  <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-slate-900">
                    Select Size
                  </h3>
                  {selectedPackType === 'box-25' && (
                    <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">
                      Extra-wide 6" only
                    </span>
                  )}
                </div>

                <div
                  className={`grid gap-4 ${
                    selectedPackType === 'box-25'
                      ? 'max-w-md sm:grid-cols-1'
                      : 'sm:grid-cols-2 xl:grid-cols-3'
                  }`}
                >
                  {sizeVariants.map((item) => (
                    <button
                      className={`group relative overflow-hidden rounded-2xl border-2 p-5 text-left transition-all duration-300 ${
                        selectedSize === item.size
                          ? 'border-accent bg-accent/5 shadow-lg shadow-accent/10'
                          : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50 hover:shadow-md'
                      }`}
                      key={item.size}
                      onClick={() => setSelectedSize(item.size)}
                      type="button"
                    >
                      {item.popular && selectedPackType !== 'box-25' && (
                        <span className="absolute -right-8 top-3 rotate-45 bg-accent px-10 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
                          Popular
                        </span>
                      )}

                      <div className="flex items-start gap-4">
                        {/* Thumbnail */}
                        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-slate-100">
                          <Image
                            alt={`HP${item.size.replace('"', '')} Hose Protector`}
                            className="object-contain p-2"
                            fill
                            sizes="64px"
                            src={currentImage}
                          />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="mb-1 flex items-center gap-2">
                            <span className="font-heading text-2xl font-black text-slate-900">
                              HP {item.size.replace('"', '')} inch
                            </span>
                            {selectedSize === item.size && (
                              <Check className="h-5 w-5 text-accent" />
                            )}
                          </div>
                          <div className="mb-2 text-sm font-medium text-slate-500">
                            Fits {item.hoseFit} hose OD
                          </div>
                          <div className="flex items-baseline gap-2">
                            <span className="text-xl font-bold text-accent">
                              ${item.price.toFixed(2)}
                            </span>
                            <span className="text-sm font-normal text-slate-400">
                              {getPriceUnit(selectedPackType, item.qtyInBox)}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Expanded info on selection */}
                      {selectedSize === item.size && (
                        <div className="mt-4 border-t border-accent/20 pt-4">
                          <p className="mb-2 text-sm font-medium text-slate-700">
                            {item.description}
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {item.applications?.map((app) => (
                              <span
                                className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
                                key={app}
                              >
                                {app}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Right: Color, Quantity, Add to Cart */}
              <div className="flex flex-col p-8">
                {/* Color Selection */}
                <div className="mb-8">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary font-heading text-sm font-bold text-white">
                      2
                    </span>
                    <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-slate-900">
                      Select Color
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {colorOptions.map((color) => (
                      <button
                        className={`group flex w-full items-center gap-4 rounded-xl border-2 p-4 text-left transition-all duration-300 ${
                          selectedColor === color.value
                            ? 'border-primary bg-primary/5 shadow-md'
                            : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                        }`}
                        key={color.value}
                        onClick={() => setSelectedColor(color.value)}
                        type="button"
                      >
                        {/* Color thumbnail */}
                        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-slate-100">
                          <Image
                            alt={color.name}
                            className="object-contain p-1"
                            fill
                            sizes="56px"
                            src={color.images[selectedPackType]}
                          />
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <div
                              className="h-4 w-4 rounded-full border-2 border-white shadow-sm"
                              style={{ backgroundColor: color.hex }}
                            />
                            <span className="font-bold text-slate-900">{color.name}</span>
                          </div>
                          <span className="text-sm text-slate-500">{color.description}</span>
                        </div>

                        {selectedColor === color.value && (
                          <Check className="h-5 w-5 shrink-0 text-primary" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div className="mb-8">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary font-heading text-sm font-bold text-white">
                      3
                    </span>
                    <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-slate-900">
                      Quantity
                    </h3>
                  </div>

                  <div className="flex items-center gap-4">
                    <button
                      className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-slate-200 bg-white text-slate-600 transition-all hover:border-slate-300 hover:bg-slate-50 disabled:opacity-50"
                      disabled={quantity <= 1}
                      onClick={() =>
                        setQuantity((q) => Math.max(1, q - (selectedPackType === 'bulk' ? 10 : 1)))
                      }
                      type="button"
                    >
                      <Minus className="h-5 w-5" />
                    </button>
                    <input
                      className="h-12 w-24 rounded-xl border-2 border-slate-200 text-center font-heading text-xl font-bold text-slate-900 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      min="1"
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value, 10) || 1))}
                      type="number"
                      value={quantity}
                    />
                    <button
                      className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-slate-200 bg-white text-slate-600 transition-all hover:border-slate-300 hover:bg-slate-50"
                      onClick={() => setQuantity((q) => q + (selectedPackType === 'bulk' ? 10 : 1))}
                      type="button"
                    >
                      <Plus className="h-5 w-5" />
                    </button>
                  </div>

                  {/* Bulk discount indicator - only for bulk singles */}
                  {selectedPackType === 'bulk' && (
                    <div className="mt-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 p-4">
                      {discount > 0 ? (
                        <div className="flex items-center gap-2">
                          <Check className="h-5 w-5 text-green-600" />
                          <span className="font-bold text-green-700">
                            {Math.round(discount * 100)}% bulk discount applied!
                          </span>
                        </div>
                      ) : (
                        <div className="text-sm text-slate-600">
                          <span className="font-semibold text-green-700">Save more:</span> Order 50+
                          for 15% off, 200+ for 25% off
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Price Summary */}
                <div className="mb-6 flex-1 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 text-white">
                  {/* Selected product preview */}
                  <div className="mb-4 flex items-center gap-4 border-b border-white/10 pb-4">
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-white/10">
                      <Image
                        alt="Selected product"
                        className="object-contain p-2"
                        fill
                        sizes="64px"
                        src={currentImage}
                      />
                    </div>
                    <div>
                      <div className="font-bold">
                        HP {selectedSize.replace('"', '')} inch - {selectedColorData?.name}
                      </div>
                      <div className="text-sm text-white/60">
                        {selectedPackTypeData?.shortName} × {quantity}
                      </div>
                    </div>
                  </div>

                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-white/60">Subtotal</span>
                    <span className={discount > 0 ? 'text-white/40 line-through' : ''}>
                      ${totalPrice.toFixed(2)}
                    </span>
                  </div>
                  {discount > 0 && (
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="text-green-400">Bulk Discount</span>
                      <span className="text-green-400">
                        -${(totalPrice - discountedTotal).toFixed(2)}
                      </span>
                    </div>
                  )}
                  <div className="flex items-end justify-between border-t border-white/10 pt-4">
                    <span className="text-sm font-bold uppercase tracking-wider text-white/60">
                      Total
                    </span>
                    <span className="font-heading text-4xl font-black text-accent">
                      ${discountedTotal.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <Button
                  className={`w-full py-7 text-lg font-black uppercase tracking-wider transition-all duration-300 ${
                    addedToCart
                      ? 'bg-green-600 shadow-lg shadow-green-600/30 hover:bg-green-700'
                      : 'bg-accent shadow-xl shadow-accent/40 hover:scale-[1.02] hover:bg-accent/90 hover:shadow-2xl hover:shadow-accent/50'
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
                <div className="mt-6 flex items-center justify-center gap-6 text-sm text-slate-500">
                  <span className="flex items-center gap-2">
                    <Truck className="h-4 w-4 text-accent" />
                    Free shipping $500+
                  </span>
                  <span className="h-4 w-px bg-slate-200" />
                  <span>Same-day dispatch</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cable Tie Recommendation Modal */}
      <CableTieModal
        hoseProtectorQuantity={quantity}
        hoseProtectorSize={getHoseProtectorSize()}
        isOpen={showCableTieModal}
        onAddCableTies={handleAddCableTies}
        onClose={() => setShowCableTieModal(false)}
      />
    </section>
  );
}
