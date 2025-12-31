'use client';

import { ArrowRight, DollarSign, Package, Store, TrendingUp, Users } from 'lucide-react';

import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { Button } from '~/components/ui/button';

const stats = [
  { icon: Store, value: '500+', label: 'Active Dealers' },
  { icon: TrendingUp, value: '40%+', label: 'Profit Margins' },
  { icon: Users, value: '100K+', label: 'End Users Served' },
];

export function RetailerHero() {
  const scrollToProducts = () => {
    document.getElementById('retailer-products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-primary to-slate-900 py-20 lg:py-28">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-accent/10 blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-primary/20 blur-[150px]" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-accent/30 bg-accent/10 px-5 py-2.5 backdrop-blur-sm">
              <DollarSign className="h-4 w-4 text-accent" />
              <span className="text-sm font-bold uppercase tracking-widest text-accent">
                Become a Dealer
              </span>
            </div>

            <h1 className="mb-6 font-heading text-4xl font-black uppercase leading-[0.95] tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl">
              Stock EPHA in
              <span className="mt-2 block bg-gradient-to-r from-accent via-orange-400 to-accent bg-clip-text text-transparent">
                Your Shop
              </span>
            </h1>

            <p className="mx-auto mb-8 max-w-xl text-lg leading-relaxed text-white/70 lg:mx-0 lg:text-xl">
              Join 500+ equipment dealers, auto parts stores, and industrial suppliers making easy
              profits with EPHA Counter Display Boxes. Ready-to-sell product that customers ask for
              by name.
            </p>

            {/* Stats */}
            <div className="mb-10 flex flex-wrap items-center justify-center gap-8 lg:justify-start">
              {stats.map((stat, index) => {
                const Icon = stat.icon;

                return (
                  <div className="flex items-center gap-3" key={stat.label}>
                    {index > 0 && <div className="h-12 w-px bg-white/10" />}
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <div className="text-left">
                      <div className="font-heading text-2xl font-black text-white">
                        {stat.value}
                      </div>
                      <div className="text-xs font-bold uppercase tracking-wider text-white/50">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <Button
                className="group relative overflow-hidden bg-accent px-10 py-7 text-lg font-black uppercase tracking-wider text-white shadow-2xl shadow-accent/40 transition-all duration-300 hover:scale-105 hover:shadow-accent/60"
                onClick={scrollToProducts}
                size="lg"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Counter Displays
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-accent opacity-0 transition-opacity group-hover:opacity-100" />
              </Button>
              <Link
                className="text-sm font-bold text-white/60 transition-colors hover:text-accent"
                href="/contact"
              >
                Contact for Wholesale Pricing →
              </Link>
            </div>
          </div>

          {/* Counter Display Image */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            {/* Glow effect */}
            <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-accent/30 via-transparent to-accent/20 blur-2xl" />

            {/* Main image container */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 backdrop-blur-sm">
              {/* Counter Display Box Image */}
              <div className="relative aspect-square">
                <Image
                  alt="EPHA Counter Display Box - 50 Hose Protectors"
                  className="object-contain drop-shadow-2xl"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  src="https://cdn11.bigcommerce.com/s-usnceuurb6/products/431/images/868/HPO-BOX__45149.1733924127.386.513.png?c=1"
                />
              </div>

              {/* Feature badges */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                  <Package className="mx-auto mb-2 h-6 w-6 text-accent" />
                  <div className="text-sm font-bold text-white">50 Units/Box</div>
                  <div className="text-xs text-white/50">Ready to sell</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                  <Store className="mx-auto mb-2 h-6 w-6 text-accent" />
                  <div className="text-sm font-bold text-white">Counter Display</div>
                  <div className="text-xs text-white/50">Eye-catching</div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -right-4 -top-4 rounded-2xl border border-white/20 bg-gradient-to-br from-slate-800 to-slate-900 p-4 shadow-2xl lg:-right-8 lg:-top-8">
              <div className="text-center">
                <div className="font-heading text-3xl font-black text-accent">USA</div>
                <div className="text-xs font-bold uppercase tracking-wider text-white/60">
                  Made in America
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
