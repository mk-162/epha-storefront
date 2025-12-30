import { ArrowRight, Calculator, Phone } from 'lucide-react';

import { Link } from '~/components/link';
import { Button } from '~/components/ui/button';

export function ProductVolumeCTA() {
  const pricingTiers = [
    { qty: '1-49 units', price: 'List Price', highlight: false },
    { qty: '50-199 units', price: '15% Off', highlight: true },
    { qty: '200-499 units', price: '25% Off', highlight: true },
    { qty: '500+ units', price: 'Call for Quote', highlight: false },
  ];

  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Volume Pricing */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-2 text-sm font-bold uppercase tracking-wider text-accent">
                <Calculator className="h-4 w-4" />
                Volume Pricing
              </div>
              <h2 className="mb-6 font-heading text-3xl font-bold uppercase md:text-4xl">
                Save More When You
                <span className="block text-accent">Buy in Bulk</span>
              </h2>

              <div className="space-y-3">
                {pricingTiers.map((tier) => (
                  <div
                    className={`flex items-center justify-between rounded-lg border p-4 ${
                      tier.highlight
                        ? 'border-accent/30 bg-accent/10'
                        : 'border-white/10 bg-white/5'
                    }`}
                    key={tier.qty}
                  >
                    <span className="text-gray-300">{tier.qty}</span>
                    <span className={`font-bold ${tier.highlight ? 'text-accent' : 'text-white'}`}>
                      {tier.price}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-sm text-gray-400">
                Discounts applied automatically at checkout. Free shipping on all orders over $500.
              </p>
            </div>

            {/* Contact CTA */}
            <div className="flex flex-col justify-center rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm lg:p-10">
              <h3 className="mb-4 font-heading text-2xl font-bold uppercase">
                Need a Custom Quote?
              </h3>
              <p className="mb-6 text-gray-300">
                For large orders, distributor accounts, or custom requirements, our team is ready to
                help.
              </p>

              <div className="space-y-4">
                <Link href="/contact">
                  <Button
                    className="w-full bg-accent py-6 font-bold uppercase tracking-wider text-white hover:bg-accent/90"
                    size="lg"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Contact Sales
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <div className="text-center text-sm text-gray-400">
                  <span>Or call us directly: </span>
                  <a className="font-bold text-white hover:text-accent" href="tel:1-800-555-0123">
                    1-800-555-0123
                  </a>
                </div>
              </div>

              <div className="mt-8 border-t border-white/10 pt-6">
                <div className="text-sm font-bold uppercase tracking-wide text-gray-400">
                  Trusted by
                </div>
                <div className="mt-3 flex flex-wrap gap-4 text-xs text-gray-500">
                  <span>Fleet Operators</span>
                  <span>|</span>
                  <span>Construction Companies</span>
                  <span>|</span>
                  <span>Manufacturing Plants</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
