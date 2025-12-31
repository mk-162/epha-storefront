'use client';

import { Check, Package, ShoppingCart, Truck } from 'lucide-react';

import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { Button } from '~/components/ui/button';

const counterDisplayProducts = [
  {
    id: 431,
    name: 'Orange Counter Display',
    sku: 'HPO-BOX',
    color: 'Safety Orange',
    colorHex: '#FF6B35',
    image:
      'https://cdn11.bigcommerce.com/s-usnceuurb6/products/431/images/868/HPO-BOX__45149.1733924127.386.513.png?c=1',
    description: 'High-visibility orange for safety-conscious customers',
    sizes: ['4"', '5"', '6"', '8"', '10"', '12"'],
    qtySmall: 50,
    qtyLarge: 15,
    path: '/orange-hose-protectors-counter-display-box',
    popular: true,
  },
  {
    id: 432,
    name: 'Black Counter Display',
    sku: 'HPB-BOX',
    color: 'Professional Black',
    colorHex: '#1a1a1a',
    image:
      'https://cdn11.bigcommerce.com/s-usnceuurb6/products/432/images/870/HPB-BOX__47555.1733924143.386.513.png?c=1',
    description: 'Low-profile black for a professional appearance',
    sizes: ['4"', '5"', '6"', '8"', '10"', '12"'],
    qtySmall: 50,
    qtyLarge: 15,
    path: '/black-hose-protectors-counter-display-box',
    popular: false,
  },
  {
    id: 433,
    name: 'Yellow Counter Display',
    sku: 'HPY-BOX',
    color: 'Caution Yellow',
    colorHex: '#FCD34D',
    image:
      'https://cdn11.bigcommerce.com/s-usnceuurb6/products/433/images/871/HPY-BOX__05300.1733924152.386.513.png?c=1',
    description: 'Maximum visibility for hazard areas',
    sizes: ['4"', '5"', '6"', '8"', '10"', '12"'],
    qtySmall: 50,
    qtyLarge: 15,
    path: '/yellow-hose-protectors-counter-display-box',
    popular: false,
  },
];

const productFeatures = [
  '50 protectors per box (4"-8" sizes)',
  '15 protectors per box (10"-12" sizes)',
  'Zip ties included in every box',
  'Eye-catching counter display packaging',
  '6 size variants available',
  'Made in USA quality',
];

export function RetailerProducts() {
  return (
    <section className="bg-slate-50 py-24" id="retailer-products">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary">
            <Package className="h-4 w-4" />
            Counter Display Boxes
          </span>
          <h2 className="mb-4 font-heading text-4xl font-black uppercase tracking-tight text-slate-900 md:text-5xl">
            Ready-to-Sell Product
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Each Counter Display Box is designed to catch attention at the point of sale. Stock all
            three colors to give your customers options.
          </p>
        </div>

        {/* Products Grid */}
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-3">
            {counterDisplayProducts.map((product) => (
              <div
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/10"
                key={product.id}
              >
                {/* Popular badge */}
                {product.popular && (
                  <div className="absolute left-4 top-4 z-10 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                    Best Seller
                  </div>
                )}

                {/* Image */}
                <div className="relative aspect-square bg-gradient-to-br from-slate-100 to-slate-50 p-8">
                  <Image
                    alt={product.name}
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    src={product.image}
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Color indicator */}
                  <div className="mb-3 flex items-center gap-2">
                    <div
                      className="h-4 w-4 rounded-full border-2 border-white shadow-sm"
                      style={{ backgroundColor: product.colorHex }}
                    />
                    <span className="text-sm font-bold text-slate-600">{product.color}</span>
                  </div>

                  <h3 className="mb-2 font-heading text-xl font-bold uppercase tracking-wide text-slate-900">
                    {product.name}
                  </h3>

                  <p className="mb-4 text-sm text-slate-500">{product.description}</p>

                  {/* Sizes available */}
                  <div className="mb-4">
                    <div className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                      Available Sizes
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map((size) => (
                        <span
                          className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
                          key={size}
                        >
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Quantities */}
                  <div className="mb-6 rounded-xl bg-slate-50 p-4">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="font-heading text-2xl font-black text-primary">
                          {product.qtySmall}
                        </div>
                        <div className="text-xs text-slate-500">pcs (4"-8")</div>
                      </div>
                      <div>
                        <div className="font-heading text-2xl font-black text-primary">
                          {product.qtyLarge}
                        </div>
                        <div className="text-xs text-slate-500">pcs (10"-12")</div>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link href={product.path}>
                    <Button className="w-full bg-primary py-6 font-bold uppercase tracking-wider text-white transition-all hover:bg-primary/90">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      View Product
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Features list */}
          <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-8">
            <h3 className="mb-6 text-center font-heading text-xl font-bold uppercase tracking-wide text-slate-900">
              What's Included in Every Counter Display
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {productFeatures.map((feature) => (
                <div className="flex items-center gap-3" key={feature}>
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-sm font-medium text-slate-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Wholesale CTA */}
          <div className="mt-8 rounded-2xl bg-gradient-to-r from-primary to-slate-800 p-8 text-center text-white">
            <div className="flex items-center justify-center gap-3">
              <Truck className="h-6 w-6 text-accent" />
              <span className="font-heading text-lg font-bold uppercase tracking-wide">
                Need Larger Quantities?
              </span>
            </div>
            <p className="mx-auto mt-2 max-w-xl text-white/70">
              Contact us for wholesale pricing on bulk orders. We offer competitive dealer pricing
              and fast shipping across the USA.
            </p>
            <Link href="/contact">
              <Button className="mt-4 bg-accent px-8 py-6 font-bold uppercase tracking-wider text-white hover:bg-accent/90">
                Request Wholesale Pricing
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
