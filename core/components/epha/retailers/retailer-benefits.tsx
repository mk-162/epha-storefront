'use client';

import {
  Award,
  Beaker,
  DollarSign,
  Flame,
  RefreshCw,
  Shield,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react';

const businessBenefits = [
  {
    icon: TrendingUp,
    title: 'High Profit Margins',
    description: 'Competitive wholesale pricing with 40%+ margins on retail sales.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: RefreshCw,
    title: 'Repeat Business',
    description: 'Consumable product that brings customers back when they need more.',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    icon: Award,
    title: 'Made in USA',
    description: 'Quality American manufacturing that customers trust and prefer.',
    color: 'from-red-500 to-rose-500',
  },
  {
    icon: Users,
    title: 'Easy to Sell',
    description: 'Equipment operators already know they need hose protection.',
    color: 'from-purple-500 to-violet-500',
  },
];

const productBenefits = [
  {
    icon: Flame,
    title: 'Extreme Temperature Range',
    description: '-40°F to 430°F operating range for any application.',
    stat: '-40° to 430°F',
  },
  {
    icon: Beaker,
    title: 'Chemical Resistant',
    description: 'Impervious to oils, fuels, hydraulic fluids, and solvents.',
    stat: '100%',
  },
  {
    icon: Shield,
    title: 'Abrasion Protection',
    description: 'Prevents hose wear and extends equipment life 3-5x.',
    stat: '3-5x',
  },
  {
    icon: Zap,
    title: 'Quick Installation',
    description: 'No tools required. Installs in under 5 minutes.',
    stat: '5 min',
  },
];

export function RetailerBenefits() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4">
        {/* Business Benefits */}
        <div className="mb-20">
          <div className="mb-12 text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-xs font-bold uppercase tracking-widest text-green-700">
              <DollarSign className="h-4 w-4" />
              Business Benefits
            </span>
            <h2 className="mb-4 font-heading text-4xl font-black uppercase tracking-tight text-slate-900 md:text-5xl">
              Why Dealers Love EPHA
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              EPHA Hose Protectors are a proven seller with strong margins and natural repeat
              business.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-4">
            {businessBenefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/10"
                >
                  <div
                    className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${benefit.color} shadow-lg transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="mb-2 font-heading text-lg font-bold uppercase tracking-wide text-slate-900">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-slate-500">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Product Benefits - What to tell your customers */}
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-primary to-slate-900 p-8 md:p-12">
          <div className="mb-12 text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-accent">
              <Sparkles className="h-4 w-4" />
              Selling Points
            </span>
            <h2 className="mb-4 font-heading text-3xl font-black uppercase tracking-tight text-white md:text-4xl">
              What to Tell Your Customers
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-white/60">
              EPHA products practically sell themselves. Here are the key features customers care
              about.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {productBenefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-accent/30 hover:bg-white/10"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <div className="font-heading text-2xl font-black text-accent">
                      {benefit.stat}
                    </div>
                  </div>
                  <h3 className="mb-2 font-bold text-white">{benefit.title}</h3>
                  <p className="text-sm text-white/60">{benefit.description}</p>
                </div>
              );
            })}
          </div>

          {/* Protection message */}
          <div className="mt-8 rounded-xl border border-accent/20 bg-accent/10 p-6 text-center">
            <p className="text-lg font-medium text-white">
              <span className="font-bold text-accent">The bottom line:</span> A $3-5 hose protector
              prevents $500-5,000+ repair bills. Hydraulic hose failures cause expensive downtime,
              fluid cleanup, and emergency repairs. That's an easy sell for any equipment owner.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
