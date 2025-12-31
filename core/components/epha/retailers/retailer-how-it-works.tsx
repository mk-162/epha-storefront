'use client';

import { ArrowRight, DollarSign, Package, Store } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Package,
    title: 'Order Counter Displays',
    description:
      'Choose from Orange, Black, or Yellow counter display boxes. Each box contains 50 hose protectors (or 15 for larger sizes) with zip ties included.',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    number: '02',
    icon: Store,
    title: 'Display at Point of Sale',
    description:
      'Place the eye-catching counter display near your register or in your equipment section. The professional packaging sells itself to walk-in customers.',
    color: 'from-accent to-orange-500',
  },
  {
    number: '03',
    icon: DollarSign,
    title: 'Earn Repeat Profits',
    description:
      'Equipment operators come back for more. Hose protectors are a consumable product with built-in repeat business. High margins, easy sales.',
    color: 'from-green-500 to-emerald-500',
  },
];

export function RetailerHowItWorks() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-primary to-slate-900 py-24">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[150px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-primary/20 blur-[150px]" />
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
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container relative mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-accent">
            Simple Process
          </span>
          <h2 className="mb-4 font-heading text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
            How It Works
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/60">
            Becoming an EPHA dealer is straightforward. No complicated contracts, no minimum orders,
            just quality products that sell.
          </p>
        </div>

        {/* Steps */}
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div className="relative" key={step.number}>
                  {/* Connector line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-1/2 top-16 hidden h-px w-full -translate-x-1/2 md:block">
                      <div className="h-full w-full bg-gradient-to-r from-white/20 via-accent/40 to-white/20" />
                      <ArrowRight className="absolute -right-3 top-1/2 h-6 w-6 -translate-y-1/2 text-accent/60" />
                    </div>
                  )}

                  <div className="relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-accent/30 hover:bg-white/10">
                    {/* Step number */}
                    <div className="absolute -top-4 left-6 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 px-3 py-1 text-sm font-bold text-white/40">
                      Step {step.number}
                    </div>

                    {/* Icon */}
                    <div
                      className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${step.color}`}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>

                    <h3 className="mb-3 font-heading text-xl font-bold uppercase tracking-wide text-white">
                      {step.title}
                    </h3>

                    <p className="text-white/60">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom stat */}
        <div className="mx-auto mt-16 max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm">
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <div className="font-heading text-4xl font-black text-accent">$0</div>
              <div className="mt-1 text-sm font-bold uppercase tracking-wider text-white/50">
                Minimum Order
              </div>
            </div>
            <div>
              <div className="font-heading text-4xl font-black text-white">Same Day</div>
              <div className="mt-1 text-sm font-bold uppercase tracking-wider text-white/50">
                Order Processing
              </div>
            </div>
            <div>
              <div className="font-heading text-4xl font-black text-accent">Free Ship</div>
              <div className="mt-1 text-sm font-bold uppercase tracking-wider text-white/50">
                Orders Over $500
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
