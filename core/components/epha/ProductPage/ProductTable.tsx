"use client";

import { useState, useTransition } from "react";
import { Button } from "~/components/ui/button";
import { Calculator, Check, Loader2 } from "lucide-react";
import { addProductToCart } from "~/app/[locale]/(default)/products/_actions/add-to-cart";
import type { Product } from "~/app/[locale]/(default)/products/_data/get-products";

// Static specs data for display (dimensions, fit, use cases)
const staticSpecs: Record<string, { dim: string; fit: string; use: string }> = {
  '4"': { dim: '2.5" W × 4" L', fit: '0.25" - 1.00"', use: "Battery cables, small pneumatic lines" },
  '5"': { dim: '3.5" W × 5" L', fit: '0.75" - 1.25"', use: "Medium hydraulic lines, cable protection" },
  '6"': { dim: '3.25" W × 6" L', fit: '0.75" - 1.25"', use: "Standard hydraulic assemblies, water lines" },
  '8"': { dim: '3.5" W × 8" L', fit: '1.00" - 1.50"', use: "Medium to large hydraulic systems" },
  '10"': { dim: '4.5" W × 10" L', fit: '1.25" - 2.25"', use: "Large hydraulic assemblies, bundle wraps" },
  '12"': { dim: '5" W × 12" L', fit: '1.50" - 2.50"', use: "Multi-hose bundles, heavy equipment" },
};

const applications = [
  "Hydraulic Lines", "Battery Cables", "Wiring Harnesses", "Brake Systems",
  "Oil & Fuel Lines", "Radiator Hoses", "Pneumatic Lines", "Electrical Conduits"
];

const bulkTiers = [
  { qty: "1-49", discount: "List Price" },
  { qty: "50-199", discount: "15% Off" },
  { qty: "200-499", discount: "25% Off" },
  { qty: "500+", discount: "Call for Quote" },
];

interface ProductTableProps {
  products: Product[];
}

export function ProductTable({ products }: ProductTableProps) {
  const [isPending, startTransition] = useTransition();
  const [addingVariantId, setAddingVariantId] = useState<number | null>(null);

  // Find the Orange bulk product (has individual variants by size)
  const bulkProduct = products.find(p => p.sku === "HPO/1" || p.name.includes("Bulk"));

  // Get all variants from all products and sort by size
  const allVariants = products.flatMap(p => p.variants.map(v => ({
    ...v,
    productEntityId: p.entityId,
    optionId: p.optionId,
    productName: p.name,
  }))).filter(v => v.size);

  // Remove duplicates by size, keeping lowest price
  const uniqueVariants = Object.values(
    allVariants.reduce((acc, v) => {
      if (!acc[v.size] || v.price < acc[v.size].price) {
        acc[v.size] = v;
      }
      return acc;
    }, {} as Record<string, typeof allVariants[0]>)
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
  const prices = uniqueVariants.map(v => v.price).filter(p => p > 0);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-4xl font-bold text-primary uppercase mb-4">Complete Product Line</h2>
          <p className="text-gray-600">Professional sizes for every application. Available in Black, High-Visibility Orange, and Yellow.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Product Table */}
          <div className="lg:col-span-2">
            <div className="overflow-x-auto rounded-lg border border-slate-200 shadow-sm">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 text-primary uppercase font-bold tracking-wider border-b border-slate-200">
                  <tr>
                    <th className="p-4">Size</th>
                    <th className="p-4">Specs</th>
                    <th className="p-4">Application</th>
                    <th className="p-4 text-right">Unit Price</th>
                    <th className="p-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {uniqueVariants.map((variant) => {
                    const specs = staticSpecs[variant.size] || { dim: '-', fit: '-', use: '-' };
                    const isAdding = addingVariantId === variant.entityId;

                    return (
                      <tr key={variant.entityId} className="hover:bg-slate-50/50 transition-colors group">
                        <td className="p-4 font-bold text-primary align-middle">HP{variant.size.replace('"', '')}</td>
                        <td className="p-4 text-gray-600 font-mono text-xs align-middle">
                          <div className="font-bold">{specs.fit} OD</div>
                          <div>{specs.dim}</div>
                        </td>
                        <td className="p-4 text-gray-600 text-xs align-middle">{specs.use}</td>
                        <td className="p-4 text-right font-bold text-lg text-primary align-middle">
                          ${variant.price.toFixed(2)}
                        </td>
                        <td className="p-4 text-right align-middle">
                          <Button
                            size="sm"
                            className="bg-accent hover:bg-accent/90 text-white font-bold uppercase tracking-wider"
                            onClick={() => handleAddToCart(variant.productEntityId, variant.entityId)}
                            disabled={isPending && isAdding}
                          >
                            {isAdding ? (
                              <>
                                <Loader2 className="h-4 w-4 animate-spin mr-1" />
                                Adding...
                              </>
                            ) : (
                              "Buy Now"
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
              <div className="text-center py-12 text-gray-500">
                <p>Loading products from store...</p>
              </div>
            )}
          </div>

          {/* Bulk Pricing Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-slate-900 text-white rounded-lg p-6 shadow-lg border border-slate-700">
              <h3 className="font-heading text-xl font-bold uppercase mb-4 flex items-center gap-2">
                <Calculator className="h-5 w-5 text-accent" />
                Bulk Volume Pricing
              </h3>
              <div className="space-y-3">
                {bulkTiers.map((tier, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2 border-b border-white/10 last:border-0">
                    <span className="text-gray-300">{tier.qty} units</span>
                    <span className={`font-bold ${idx === 0 ? 'text-gray-400' : 'text-accent'}`}>{tier.discount}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-xs text-center text-gray-400">
                <p>Discounts applied automatically at checkout.</p>
                <p className="mt-1">Free shipping on orders over $500.</p>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 text-center">
              <h4 className="font-bold text-primary uppercase mb-2">Need a Custom Quote?</h4>
              <p className="text-sm text-gray-600 mb-4">For orders over 500 units or distributor inquiries.</p>
              <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white font-bold uppercase tracking-wider">
                Request Quote
              </Button>
            </div>
          </div>
        </div>


        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8 bg-slate-900 rounded-2xl p-8 md:p-12 text-white overflow-hidden relative">
          <div className="relative z-10">
            <h3 className="font-heading text-3xl font-bold uppercase mb-4">What You Can Protect</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              {applications.map((app) => (
                <div key={app} className="flex items-center gap-2 text-gray-300">
                  <Check className="h-4 w-4 text-accent" />
                  {app}
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <h3 className="font-heading text-2xl font-bold uppercase mb-4">Why Maintenance Pros Choose EPHA</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-end border-b border-white/10 pb-2">
                <span className="text-gray-400">Investment</span>
                <span className="font-bold text-accent">
                  ${minPrice.toFixed(2)} - ${maxPrice.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between items-end border-b border-white/10 pb-2">
                <span className="text-gray-400">Prevents</span>
                <span className="font-bold text-white">$100s - $1,000s</span>
              </div>
              <div className="flex justify-between items-end border-b border-white/10 pb-2">
                <span className="text-gray-400">Installation</span>
                <span className="font-bold text-white">5 Minutes</span>
              </div>
              <div className="pt-2 text-center font-bold text-accent uppercase tracking-wide">
                Result: Hoses Last 3-5x Longer
              </div>
            </div>
          </div>

          <div className="relative z-10 bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <h3 className="font-heading text-2xl font-bold uppercase mb-4">Installation That Won&apos;t Slow You Down</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex gap-3">
                <span className="h-6 w-6 rounded-full bg-accent flex items-center justify-center text-white font-bold text-xs shrink-0">1</span>
                <span>Select the right size protector for your hose diameter</span>
              </li>
              <li className="flex gap-3">
                <span className="h-6 w-6 rounded-full bg-accent flex items-center justify-center text-white font-bold text-xs shrink-0">2</span>
                <span>Wrap around the wear point or vulnerable area</span>
              </li>
              <li className="flex gap-3">
                <span className="h-6 w-6 rounded-full bg-accent flex items-center justify-center text-white font-bold text-xs shrink-0">3</span>
                <span>Secure with included cable ties through protective grooves</span>
              </li>
              <li className="flex gap-3 items-center text-white font-bold pt-2">
                <Check className="h-5 w-5 text-accent" />
                <span>Done - Return equipment to service immediately</span>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-white/10 text-xs text-center font-bold text-gray-400 uppercase tracking-wide">
              No tools. No disassembly. No downtime.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
