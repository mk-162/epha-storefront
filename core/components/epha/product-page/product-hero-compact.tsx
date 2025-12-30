'use client';

import { ArrowDown, Shield, Thermometer, Zap } from 'lucide-react';

import { Button } from '~/components/ui/button';

export function ProductHeroCompact() {
  const scrollToProducts = () => {
    document.getElementById('product-selector')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-primary py-12 lg:py-16">
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Urgency badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-bold uppercase tracking-wider text-accent">
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
            Prevent $5,000+ Downtime Incidents
          </div>

          <h1 className="mb-4 font-heading text-4xl font-bold uppercase leading-tight text-white md:text-5xl lg:text-6xl">
            Hydraulic Hose Protection
            <span className="block text-accent">That Pays for Itself</span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
            Install in 5 minutes. Extend hose life 3-5x. No tools required.
          </p>

          {/* Key stats row */}
          <div className="mb-8 flex flex-wrap items-center justify-center gap-6 text-white lg:gap-10">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-accent" />
              <span className="text-sm font-bold uppercase tracking-wide">-40°F to 430°F</span>
            </div>
            <div className="hidden h-6 w-px bg-white/20 sm:block" />
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-accent" />
              <span className="text-sm font-bold uppercase tracking-wide">Chemical Resistant</span>
            </div>
            <div className="hidden h-6 w-px bg-white/20 sm:block" />
            <div className="flex items-center gap-2">
              <Thermometer className="h-5 w-5 text-accent" />
              <span className="text-sm font-bold uppercase tracking-wide">Made in USA</span>
            </div>
          </div>

          <Button
            className="group bg-accent px-8 py-6 text-lg font-bold uppercase tracking-wider text-white shadow-lg shadow-accent/30 transition-all hover:bg-accent/90 hover:shadow-xl hover:shadow-accent/40"
            onClick={scrollToProducts}
            size="lg"
          >
            Shop Now - From $3.25/unit
            <ArrowDown className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
