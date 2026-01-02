'use client';

import { ArrowDown, Flame, Shield, Sparkles, Zap } from 'lucide-react';

import { Image } from '~/components/image';
import { Button } from '~/components/ui/button';

// Feature annotation positions (distributed evenly around image)
const featureAnnotations = [
  {
    id: 'temp',
    icon: Flame,
    label: '(-40° to 430° F)',
    description: 'Extreme temperature range',
    position: { top: '8%', left: '5%' },
    lineAngle: 45,
  },
  {
    id: 'install',
    icon: Sparkles,
    label: '5-Min Install',
    description: 'No tools required',
    position: { top: '8%', right: '5%' },
    lineAngle: -45,
  },
  {
    id: 'chemical',
    icon: Zap,
    label: 'Chemical Resistant',
    description: 'Oils, fuels & hydraulic fluids',
    position: { bottom: '12%', left: '5%' },
    lineAngle: -45,
  },
  {
    id: 'abrasion',
    icon: Shield,
    label: 'Abrasion Guard',
    description: '3-5x longer hose life',
    position: { bottom: '12%', right: '5%' },
    lineAngle: 45,
  },
];

export function ProductHeroCompact() {
  const scrollToProducts = () => {
    document.getElementById('product-selector')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-primary to-slate-900 py-16 lg:py-24">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-[0.03]">
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

      {/* Accent glow */}
      <div className="absolute right-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/2 rounded-full bg-accent/10 blur-[150px]" />

      <div className="container relative mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            {/* Trust badge */}
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-accent/30 bg-accent/10 px-5 py-2.5 backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
              </span>
              <span className="text-sm font-bold uppercase tracking-widest text-accent">
                Prevent $5,000+ Downtime
              </span>
            </div>

            <h1 className="mb-6 font-heading text-4xl font-black uppercase leading-[0.95] tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl">
              Hydraulic Hose
              <span className="mt-2 block bg-gradient-to-r from-accent via-orange-400 to-accent bg-clip-text text-transparent">
                Protection
              </span>
            </h1>

            <p className="mx-auto mb-8 max-w-xl text-lg leading-relaxed text-white/70 lg:mx-0 lg:text-xl">
              Industrial-grade Hose Protectors that extend equipment life and eliminate costly
              hydraulic failures. Trusted by 500+ fleet operators.
            </p>

            {/* Stats row */}
            <div className="mb-10 flex flex-wrap items-center justify-center gap-8 lg:justify-start">
              <div className="text-center">
                <div className="font-heading text-3xl font-black text-accent">3-5x</div>
                <div className="text-xs font-bold uppercase tracking-wider text-white/50">
                  Longer Life
                </div>
              </div>
              <div className="h-12 w-px bg-white/10" />
              <div className="text-center">
                <div className="font-heading text-3xl font-black text-white">500+</div>
                <div className="text-xs font-bold uppercase tracking-wider text-white/50">
                  Fleet Customers
                </div>
              </div>
              <div className="h-12 w-px bg-white/10" />
              <div className="text-center">
                <div className="font-heading text-3xl font-black text-white">USA</div>
                <div className="text-xs font-bold uppercase tracking-wider text-white/50">
                  Made in America
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <Button
                className="group relative overflow-hidden bg-accent px-10 py-7 text-lg font-black uppercase tracking-wider text-white shadow-2xl shadow-accent/40 transition-all duration-300 hover:scale-105 hover:shadow-accent/60"
                onClick={scrollToProducts}
                size="lg"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Shop Now
                  <ArrowDown className="h-5 w-5 transition-transform group-hover:translate-y-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-accent opacity-0 transition-opacity group-hover:opacity-100" />
              </Button>
              <span className="text-sm font-bold text-white/40">From $3.25/unit</span>
            </div>
          </div>

          {/* Annotated Product Image */}
          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            {/* Main product image container */}
            <div className="relative">
              {/* Glowing ring effect */}
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent/30 via-transparent to-accent/20 blur-xl" />

              {/* Image container */}
              <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 backdrop-blur-sm lg:aspect-[4/3]">
                <Image
                  alt="EPHA Orange Hose Protector - Industrial Grade Spiral Guard"
                  className="object-contain drop-shadow-2xl"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  src="https://cdn11.bigcommerce.com/s-usnceuurb6/images/stencil/1920w/products/434/875/HPO_1__49987.1733924243.png?compression=lossy"
                />
              </div>

              {/* Feature annotations */}
              {featureAnnotations.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div
                    className="absolute hidden lg:block"
                    key={feature.id}
                    style={{
                      ...feature.position,
                      animationDelay: `${index * 150}ms`,
                    }}
                  >
                    <div
                      className="animate-fade-in group relative"
                      style={{ animationDelay: `${index * 200 + 500}ms` }}
                    >
                      {/* Connector line */}
                      <div
                        className="absolute left-1/2 top-1/2 h-12 w-px origin-top bg-gradient-to-b from-accent/60 to-transparent"
                        style={{
                          transform: `rotate(${feature.lineAngle}deg)`,
                        }}
                      />

                      {/* Annotation card */}
                      <div className="relative flex items-center gap-3 rounded-xl border border-white/10 bg-slate-900/90 px-4 py-3 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-accent/50 hover:bg-slate-800/90">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/20">
                          <Icon className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-white">{feature.label}</div>
                          <div className="text-xs text-white/50">{feature.description}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile feature badges */}
            <div className="mt-6 flex flex-wrap justify-center gap-3 lg:hidden">
              {featureAnnotations.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    className="flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/80 px-4 py-2 backdrop-blur-sm"
                    key={feature.id}
                  >
                    <Icon className="h-4 w-4 text-accent" />
                    <span className="text-xs font-bold text-white">{feature.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
