'use client';

import { Calculator, Check, Loader2 } from 'lucide-react';
import { useState, useTransition } from 'react';

import { addProductToCart } from '~/app/[locale]/(default)/products/_actions/add-to-cart';
import type { Product } from '~/app/[locale]/(default)/products/_data/get-products';
import { Button } from '~/components/ui/button';

// Static specs data for display (dimensions, fit, use cases)
const staticSpecs: Record<string, { dim: string; fit: string; use: string }> = {
  '4"': {
    dim: '2.5" W × 4" L',
    fit: '0.25" - 1.00"',
    use: 'Battery cables, small pneumatic lines',
  },
  '5"': {
    dim: '3.5" W × 5" L',
    fit: '0.75" - 1.25"',
    use: 'Medium hydraulic lines, cable protection',
  },
  '6"': {
    dim: '3.25" W × 6" L',
    fit: '0.75" - 1.25"',
    use: 'Standard hydraulic assemblies, water lines',
  },
  '8"': { dim: '3.5" W × 8" L', fit: '1.00" - 1.50"', use: 'Medium to large hydraulic systems' },
  '10"': {
    dim: '4.5" W × 10" L',
    fit: '1.25" - 2.25"',
    use: 'Large hydraulic assemblies, bundle wraps',
  },
  '12"': { dim: '5" W × 12" L', fit: '1.50" - 2.50"', use: 'Multi-hose bundles, heavy equipment' },
};

const applications = [
  'Hydraulic Lines',
  'Battery Cables',
  'Wiring Harnesses',
  'Brake Systems',
  'Oil & Fuel Lines',
  'Radiator Hoses',
  'Pneumatic Lines',
  'Electrical Conduits',
];

const bulkTiers = [
  { qty: '1-49', discount: 'List Price' },
  { qty: '50-199', discount: '15% Off' },
  { qty: '200-499', discount: '25% Off' },
  { qty: '500+', discount: 'Call for Quote' },
];

interface ProductTableProps {
  products: Product[];
}

export function ProductTable({ products }: ProductTableProps) {
  const [isPending, startTransition] = useTransition();
  const [addingVariantId, setAddingVariantId] = useState<number | null>(null);

  // Find the Orange bulk product (has individual variants by size)
  const bulkProduct = products.find((p) => p.sku === 'HPO/1' || p.name.includes('Bulk'));

  // Get all variants from all products and sort by size
  const allVariants = products
    .flatMap((p) =>
      p.variants.map((v) => ({
        ...v,
        productEntityId: p.entityId,
        optionId: p.optionId,
        productName: p.name,
      })),
    )
    .filter((v) => v.size);

  // Remove duplicates by size, keeping lowest price
  const uniqueVariants = Object.values(
    allVariants.reduce<Record<string, (typeof allVariants)[0]>>((acc, v) => {
      if (!acc[v.size] || v.price < acc[v.size].price) {
        acc[v.size] = v;
      }

      return acc;
    }, {}),
  ).sort((a, b) => {
    const sizeA = parseInt(a.size);
    const sizeB = parseInt(b.size);

    return sizeA - sizeB;
  });

  const handleAddToCart = async (productEntityId: number, variantEntityId: number) => {
    setAddingVariantId(variantEntityId);
    startTransition(async () => {
      try {
        await addProductToCart(productEntityId, variantEntityId, 1);
      } finally {
        setAddingVariantId(null);
      }
    });
  };

  // Calculate price range
  const prices = uniqueVariants.map((v) => v.price).filter((p) => p > 0);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 font-heading text-4xl font-bold uppercase text-primary">
            Complete Product Line
          </h2>
          <p className="text-gray-600">
            Professional sizes for every application. Available in Black, High-Visibility Orange,
            and Yellow.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Product Table */}
          <div className="lg:col-span-2">
            <div className="overflow-x-auto rounded-lg border border-slate-200 shadow-sm">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-slate-200 bg-slate-50 font-bold uppercase tracking-wider text-primary">
                  <tr>
                    <th className="p-4">Size</th>
                    <th className="p-4">Specs</th>
                    <th className="p-4">Application</th>
                    <th className="p-4 text-right">Unit Price</th>
                    <th className="p-4" />
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {uniqueVariants.map((variant) => {
                    const specs = staticSpecs[variant.size] || { dim: '-', fit: '-', use: '-' };
                    const isAdding = addingVariantId === variant.entityId;

                    return (
                      <tr
                        className="group transition-colors hover:bg-slate-50/50"
                        key={variant.entityId}
                      >
                        <td className="p-4 align-middle font-bold text-primary">
                          HP{variant.size.replace('"', '')}
                        </td>
                        <td className="p-4 align-middle font-mono text-xs text-gray-600">
                          <div className="font-bold">{specs.fit} OD</div>
                          <div>{specs.dim}</div>
                        </td>
                        <td className="p-4 align-middle text-xs text-gray-600">{specs.use}</td>
                        <td className="p-4 text-right align-middle text-lg font-bold text-primary">
                          ${variant.price.toFixed(2)}
                        </td>
                        <td className="p-4 text-right align-middle">
                          <Button
                            className="bg-accent font-bold uppercase tracking-wider text-white hover:bg-accent/90"
                            disabled={isPending && isAdding}
                            onClick={() =>
                              handleAddToCart(variant.productEntityId, variant.entityId)
                            }
                            size="sm"
                          >
                            {isAdding ? (
                              <>
                                <Loader2 className="mr-1 h-4 w-4 animate-spin" />
                                Adding...
                              </>
                            ) : (
                              'Buy Now'
                            )}
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {uniqueVariants.length === 0 && (
              <div className="py-12 text-center text-gray-500">
                <p>Loading products from store...</p>
              </div>
            )}
          </div>

          {/* Bulk Pricing Sidebar */}
          <div className="space-y-6 lg:col-span-1">
            <div className="rounded-lg border border-slate-700 bg-slate-900 p-6 text-white shadow-lg">
              <h3 className="mb-4 flex items-center gap-2 font-heading text-xl font-bold uppercase">
                <Calculator className="h-5 w-5 text-accent" />
                Bulk Volume Pricing
              </h3>
              <div className="space-y-3">
                {bulkTiers.map((tier, idx) => (
                  <div
                    className="flex items-center justify-between border-b border-white/10 py-2 last:border-0"
                    key={idx}
                  >
                    <span className="text-gray-300">{tier.qty} units</span>
                    <span className={`font-bold ${idx === 0 ? 'text-gray-400' : 'text-accent'}`}>
                      {tier.discount}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 border-t border-white/10 pt-4 text-center text-xs text-gray-400">
                <p>Discounts applied automatically at checkout.</p>
                <p className="mt-1">Free shipping on orders over $500.</p>
              </div>
            </div>

            <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 text-center">
              <h4 className="mb-2 font-bold uppercase text-primary">Need a Custom Quote?</h4>
              <p className="mb-4 text-sm text-gray-600">
                For orders over 500 units or distributor inquiries.
              </p>
              <Button
                className="w-full border-primary font-bold uppercase tracking-wider text-primary hover:bg-primary hover:text-white"
                variant="outline"
              >
                Request Quote
              </Button>
            </div>
          </div>
        </div>

        <div className="relative mt-12 grid gap-8 overflow-hidden rounded-2xl bg-slate-900 p-8 text-white md:grid-cols-2 md:p-12 lg:grid-cols-3">
          <div className="relative z-10">
            <h3 className="mb-4 font-heading text-3xl font-bold uppercase">What You Can Protect</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              {applications.map((app) => (
                <div className="flex items-center gap-2 text-gray-300" key={app}>
                  <Check className="h-4 w-4 text-accent" />
                  {app}
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <h3 className="mb-4 font-heading text-2xl font-bold uppercase">
              Why Maintenance Pros Choose EPHA
            </h3>
            <div className="space-y-4">
              <div className="flex items-end justify-between border-b border-white/10 pb-2">
                <span className="text-gray-400">Investment</span>
                <span className="font-bold text-accent">
                  ${minPrice.toFixed(2)} - ${maxPrice.toFixed(2)}
                </span>
              </div>
              <div className="flex items-end justify-between border-b border-white/10 pb-2">
                <span className="text-gray-400">Prevents</span>
                <span className="font-bold text-white">$100s - $1,000s</span>
              </div>
              <div className="flex items-end justify-between border-b border-white/10 pb-2">
                <span className="text-gray-400">Installation</span>
                <span className="font-bold text-white">5 Minutes</span>
              </div>
              <div className="pt-2 text-center font-bold uppercase tracking-wide text-accent">
                Result: Hoses Last 3-5x Longer
              </div>
            </div>
          </div>

          <div className="relative z-10 rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <h3 className="mb-4 font-heading text-2xl font-bold uppercase">
              Installation That Won&apos;t Slow You Down
            </h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">
                  1
                </span>
                <span>Select the right size protector for your hose diameter</span>
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">
                  2
                </span>
                <span>Wrap around the wear point or vulnerable area</span>
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">
                  3
                </span>
                <span>Secure with included cable ties through protective grooves</span>
              </li>
              <li className="flex items-center gap-3 pt-2 font-bold text-white">
                <Check className="h-5 w-5 text-accent" />
                <span>Done - Return equipment to service immediately</span>
              </li>
            </ul>
            <div className="mt-4 border-t border-white/10 pt-4 text-center text-xs font-bold uppercase tracking-wide text-gray-400">
              No tools. No disassembly. No downtime.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
