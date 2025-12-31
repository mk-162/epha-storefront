'use client';

import { AlertTriangle, Check, Link2, ShoppingCart, X } from 'lucide-react';
import { useEffect, useState, useTransition } from 'react';

import { Image } from '~/components/image';
import { Button } from '~/components/ui/button';

import {
  CABLE_TIE_COLOR_INFO,
  CABLE_TIE_PRODUCTS,
  type CableTieColor,
  type CableTieProduct,
  type HoseProtectorSize,
  SIZE_TO_CABLE_TIE_MAP,
} from './cable-tie-relationships';

interface CableTieModalProps {
  isOpen: boolean;
  onClose: () => void;
  hoseProtectorColor: CableTieColor;
  hoseProtectorSize?: HoseProtectorSize;
  hoseProtectorQuantity: number;
  onAddCableTies?: (product: CableTieProduct, quantity: number) => Promise<void>;
}

export function CableTieModal({
  isOpen,
  onClose,
  hoseProtectorColor,
  hoseProtectorSize,
  hoseProtectorQuantity,
  onAddCableTies,
}: CableTieModalProps) {
  const [selectedProduct, setSelectedProduct] = useState<CableTieProduct | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isPending, startTransition] = useTransition();
  const [addedToCart, setAddedToCart] = useState(false);

  const colorInfo = CABLE_TIE_COLOR_INFO[hoseProtectorColor];

  // Get recommended cable ties based on color and size
  const getRecommendedProducts = (): CableTieProduct[] => {
    const recommendations: CableTieProduct[] = [];

    if (hoseProtectorSize && SIZE_TO_CABLE_TIE_MAP[hoseProtectorSize]) {
      // Get size-specific recommendations
      SIZE_TO_CABLE_TIE_MAP[hoseProtectorSize].forEach((spec) => {
        const key = `${hoseProtectorColor}-${spec.length}-${spec.strength}`;
        const product = CABLE_TIE_PRODUCTS[key];

        if (product) {
          recommendations.push(product);
        }
      });
    } else {
      // Default: show 8" and 12" for the color
      const defaultSizes = ['8-50', '12-50'];

      defaultSizes.forEach((size) => {
        const key = `${hoseProtectorColor}-${size}`;
        const product = CABLE_TIE_PRODUCTS[key];

        if (product) {
          recommendations.push(product);
        }
      });
    }

    return recommendations;
  };

  const recommendedProducts = getRecommendedProducts();

  // Calculate recommended quantity based on hose protector quantity
  const getRecommendedQuantity = (): number => {
    if (!hoseProtectorSize) return 1;
    const tiesPerProtector =
      hoseProtectorSize === '4' ? 3 : hoseProtectorSize === '10' || hoseProtectorSize === '12' ? 4 : 3;
    const totalTiesNeeded = hoseProtectorQuantity * tiesPerProtector;
    // Each pack has 100, so calculate packs needed (minimum 1)

    return Math.max(1, Math.ceil(totalTiesNeeded / 100));
  };

  // Set initial selected product and quantity
  useEffect(() => {
    if (isOpen && recommendedProducts.length > 0) {
      setSelectedProduct(recommendedProducts[0] || null);
      setQuantity(getRecommendedQuantity());
      setAddedToCart(false);
    }
  }, [isOpen, hoseProtectorColor, hoseProtectorSize]);

  const handleAddToCart = () => {
    if (!selectedProduct || !onAddCableTies) return;

    startTransition(async () => {
      try {
        await onAddCableTies(selectedProduct, quantity);
        setAddedToCart(true);
        setTimeout(() => {
          onClose();
        }, 1500);
      } catch (error) {
        console.error('Failed to add cable ties:', error);
      }
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        onKeyDown={(e) => e.key === 'Escape' && onClose()}
        role="button"
        tabIndex={0}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg animate-in fade-in zoom-in-95 duration-200">
        <div className="overflow-hidden rounded-2xl bg-white shadow-2xl">
          {/* Header with warning */}
          <div className="relative bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-4">
            <button
              className="absolute right-4 top-4 rounded-full bg-white/20 p-1.5 text-white transition-colors hover:bg-white/30"
              onClick={onClose}
            >
              <X className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                <AlertTriangle className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-black uppercase tracking-wide text-white">
                  Don&apos;t Forget!
                </h2>
                <p className="text-sm text-white/90">
                  Cable ties required for installation
                </p>
              </div>
            </div>
          </div>

          {/* Color match indicator */}
          <div className="flex items-center justify-center gap-2 border-b border-gray-100 bg-gray-50 py-3">
            <div
              className="h-4 w-4 rounded-full ring-2 ring-white shadow"
              style={{ backgroundColor: colorInfo.hex }}
            />
            <span className="text-sm font-semibold text-gray-700">
              {colorInfo.name} cable ties to match your protectors
            </span>
            <Check className="h-4 w-4 text-green-500" />
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Why you need this */}
            <div className="mb-6 flex items-start gap-3 rounded-xl bg-blue-50 p-4">
              <Link2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
              <div className="text-sm text-blue-800">
                <strong>Secure installation requires 3-4 cable ties per protector.</strong> We&apos;ve
                pre-selected the right size and color to match your order.
              </div>
            </div>

            {/* Product selection */}
            <div className="mb-6 space-y-3">
              {recommendedProducts.map((product) => {
                const isSelected = selectedProduct?.sku === product.sku;

                return (
                  <button
                    className={`flex w-full items-center gap-4 rounded-xl border-2 p-4 text-left transition-all ${
                      isSelected
                        ? 'border-orange-400 bg-orange-50 shadow-md'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                    key={product.sku}
                    onClick={() => setSelectedProduct(product)}
                  >
                    <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
                      <Image
                        alt={product.name}
                        className="h-full w-full object-contain"
                        height={64}
                        src={product.image}
                        width={64}
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="mb-1 flex items-center gap-2">
                        <span
                          className="flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold text-white"
                          style={{ backgroundColor: colorInfo.hex }}
                        >
                          {colorInfo.name.charAt(0)}
                        </span>
                        <span className="rounded bg-gray-900 px-2 py-0.5 text-xs font-bold text-white">
                          {product.length}" × {product.strength}lb
                        </span>
                      </div>
                      <p className="truncate font-semibold text-gray-900">
                        {colorInfo.name} Cable Ties
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-orange-600">${product.price.toFixed(2)}</span>
                        <span className="text-sm text-gray-500">/ pack of 100</span>
                      </div>
                    </div>
                    <div
                      className={`flex h-6 w-6 items-center justify-center rounded-full border-2 ${
                        isSelected
                          ? 'border-orange-500 bg-orange-500 text-white'
                          : 'border-gray-300'
                      }`}
                    >
                      {isSelected && <Check className="h-4 w-4" />}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Quantity selector */}
            <div className="mb-6 rounded-xl bg-gray-50 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-semibold text-gray-900">Quantity</span>
                  <p className="text-xs text-gray-500">
                    {quantity} pack{quantity > 1 ? 's' : ''} = {quantity * 100} ties
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 bg-white text-gray-600 hover:bg-gray-50 disabled:opacity-50"
                    disabled={quantity <= 1}
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  >
                    -
                  </button>
                  <span className="w-12 text-center text-xl font-bold text-gray-900">{quantity}</span>
                  <button
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 bg-white text-gray-600 hover:bg-gray-50"
                    onClick={() => setQuantity((q) => q + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              {selectedProduct && (
                <div className="mt-3 flex items-center justify-between border-t border-gray-200 pt-3">
                  <span className="text-sm font-medium text-gray-600">Total</span>
                  <span className="text-xl font-black text-orange-600">
                    ${(selectedProduct.price * quantity).toFixed(2)}
                  </span>
                </div>
              )}
            </div>

            {/* Action buttons */}
            <div className="flex gap-3">
              <Button
                className="flex-1 py-6 text-base"
                onClick={onClose}
                variant="secondary"
              >
                No Thanks
              </Button>
              <Button
                className={`flex-1 py-6 text-base font-bold ${
                  addedToCart
                    ? 'bg-green-600 hover:bg-green-700'
                    : 'bg-orange-500 hover:bg-orange-600'
                }`}
                disabled={isPending || !selectedProduct}
                onClick={handleAddToCart}
              >
                {isPending ? (
                  'Adding...'
                ) : addedToCart ? (
                  <>
                    <Check className="mr-2 h-5 w-5" />
                    Added!
                  </>
                ) : (
                  <>
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Add Cable Ties
                  </>
                )}
              </Button>
            </div>

            {/* Skip hint */}
            <p className="mt-4 text-center text-xs text-gray-400">
              You can also find cable ties on the product page below
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
