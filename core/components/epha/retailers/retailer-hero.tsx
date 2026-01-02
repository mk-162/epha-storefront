'use client';

import { ArrowRight, DollarSign, Store, TrendingUp, Users } from 'lucide-react';

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
    <section className="relative overflow-hidden py-20 lg:py-28">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <Image
          alt="EPHA Hose Protectors for Retailers"
          className="object-cover"
          fill
          priority
          sizes="100vw"
          src="/images/epha-drag-racing.jpg"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60" />
      </div>

      {/* Accent glow effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-accent/10 blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-primary/20 blur-[150px]" />
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
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            {/* Main image container - clean, industrial style */}
            <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/20 shadow-2xl">
              <Image
                alt="EPHA Counter Display in Auto Parts Store"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                src="/images/epha-counter-display.jpg"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              {/* Bottom label */}
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="mb-1 text-xs font-bold uppercase tracking-wider text-accent">
                  Point of Sale Ready
                </div>
                <div className="font-heading text-xl font-bold uppercase text-white md:text-2xl">
                  Counter Display Box
                </div>
              </div>
            </div>

            {/* USA Badge - positioned top right */}
            <div className="absolute -right-3 -top-3 rounded-xl border border-white/20 bg-slate-900 px-4 py-3 shadow-2xl md:-right-6 md:-top-6">
              <div className="text-center">
                <div className="font-heading text-2xl font-black text-accent md:text-3xl">USA</div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-white/60">
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
