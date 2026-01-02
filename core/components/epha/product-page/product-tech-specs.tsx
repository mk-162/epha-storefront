'use client';

import {
  Beaker,
  Check,
  Flame,
  Gauge,
  Hand,
  Layers,
  Move3d,
  Shield,
  Sparkles,
  Timer,
  Zap,
} from 'lucide-react';
import dynamic from 'next/dynamic';

// Dynamically import 3D viewer to avoid SSR issues
const Model3DViewer = dynamic(
  () => import('~/components/epha/model-3d-viewer').then((mod) => mod.Model3DViewer),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-accent/20 border-t-accent" />
      </div>
    ),
  },
);

const technicalSpecs = [
  {
    category: 'Temperature Performance',
    icon: Flame,
    color: 'from-orange-500 to-red-500',
    specs: [
      { label: 'Operating Range', value: '(-40° to 430° F)', highlight: true },
      { label: 'Continuous Use', value: 'Up to 430°F' },
      { label: 'Peak Tolerance', value: '430°F intermittent' },
    ],
  },
  {
    category: 'Chemical Resistance',
    icon: Beaker,
    color: 'from-emerald-500 to-teal-500',
    specs: [
      { label: 'Hydraulic Fluids', value: 'Excellent', highlight: true },
      { label: 'Petroleum Oils', value: 'Excellent' },
      { label: 'Diesel & Gasoline', value: 'Good' },
      { label: 'Acids & Alkalis', value: 'Good' },
    ],
  },
  {
    category: 'Physical Properties',
    icon: Layers,
    color: 'from-blue-500 to-indigo-500',
    specs: [
      { label: 'Material', value: 'High-Density Polyethylene' },
      { label: 'UV Resistance', value: 'Stabilized for outdoor use', highlight: true },
      { label: 'Flexibility', value: 'Maintains at low temps' },
    ],
  },
  {
    category: 'Installation',
    icon: Hand,
    color: 'from-purple-500 to-pink-500',
    specs: [
      { label: 'Install Time', value: 'Under 5 minutes', highlight: true },
      { label: 'Tools Required', value: 'None' },
      { label: 'Removal', value: 'Fully reusable' },
    ],
  },
];

const keyFeatures = [
  { icon: Shield, label: 'Abrasion Protection', description: 'Prevents wear from contact points' },
  { icon: Zap, label: 'Impact Resistance', description: 'Guards against falling debris' },
  { icon: Gauge, label: 'Pressure Rated', description: 'Safe for high-pressure systems' },
  { icon: Timer, label: '3-5x Life Extension', description: 'Proven in fleet testing' },
  { icon: Sparkles, label: 'Made in USA', description: 'Quality manufacturing standards' },
  { icon: Move3d, label: 'Flexible Wrap', description: 'Conforms to any hose routing' },
];

export function ProductTechSpecs() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-primary py-24">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />
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
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-accent">
            <Move3d className="h-4 w-4" />
            Interactive 3D Model
          </span>
          <h2 className="mb-4 font-heading text-4xl font-black uppercase tracking-tight text-white md:text-5xl lg:text-6xl">
            Technical Specifications
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/60">
            Explore our hose protector in 3D and discover the engineering that makes it the industry
            standard for hydraulic protection.
          </p>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* 3D Viewer Card */}
          <div>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-2 shadow-2xl backdrop-blur-sm">
              {/* Inner glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/10 via-transparent to-transparent" />

              {/* 3D Viewer */}
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900">
                <Model3DViewer className="h-full w-full" modelUrl="/images/hose-protector.glb" />
              </div>

              {/* Feature callouts - first row */}
              <div className="mt-4 grid grid-cols-3 gap-2">
                {keyFeatures.slice(0, 3).map((feature) => {
                  const Icon = feature.icon;

                  return (
                    <div
                      className="group rounded-xl border border-white/10 bg-white/5 p-3 text-center transition-all hover:border-accent/30 hover:bg-white/10"
                      key={feature.label}
                    >
                      <Icon className="mx-auto mb-2 h-5 w-5 text-accent" />
                      <div className="text-xs font-bold text-white">{feature.label}</div>
                    </div>
                  );
                })}
              </div>

              {/* Feature callouts - second row */}
              <div className="mt-2 grid grid-cols-3 gap-2">
                {keyFeatures.slice(3, 6).map((feature) => {
                  const Icon = feature.icon;

                  return (
                    <div
                      className="group rounded-xl border border-white/10 bg-white/5 p-3 text-center transition-all hover:border-accent/30 hover:bg-white/10"
                      key={feature.label}
                    >
                      <Icon className="mx-auto mb-2 h-5 w-5 text-accent" />
                      <div className="text-xs font-bold text-white">{feature.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick stats row */}
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-sm">
                <div className="font-heading text-3xl font-black text-accent">6</div>
                <div className="mt-1 text-xs font-bold uppercase tracking-wider text-white/50">
                  Sizes Available
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-sm">
                <div className="font-heading text-3xl font-black text-white">3</div>
                <div className="mt-1 text-xs font-bold uppercase tracking-wider text-white/50">
                  Color Options
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-sm">
                <div className="font-heading text-3xl font-black text-accent">USA</div>
                <div className="mt-1 text-xs font-bold uppercase tracking-wider text-white/50">
                  Made in America
                </div>
              </div>
            </div>

            {/* Cost savings callout */}
            <div className="mt-6 rounded-2xl border border-accent/20 bg-accent/10 p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-accent/20">
                  <Shield className="h-7 w-7 text-accent" />
                </div>
                <div>
                  <div className="font-heading text-lg font-bold text-white">
                    Prevent $500-5,000+ Repairs
                  </div>
                  <div className="text-sm text-white/60">
                    A $3-5 protector saves thousands in hydraulic failure costs
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Specifications Grid */}
          <div className="space-y-6">
            {technicalSpecs.map((category) => {
              const Icon = category.icon;

              return (
                <div
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/[0.07]"
                  key={category.category}
                >
                  {/* Category header */}
                  <div className="flex items-center gap-4 border-b border-white/10 px-6 py-4">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${category.color}`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-white">
                      {category.category}
                    </h3>
                  </div>

                  {/* Specs list */}
                  <div className="divide-y divide-white/5 px-6">
                    {category.specs.map((spec) => (
                      <div className="flex items-center justify-between py-4" key={spec.label}>
                        <span className="text-white/60">{spec.label}</span>
                        <span
                          className={`font-bold ${spec.highlight ? 'text-accent' : 'text-white'}`}
                        >
                          {spec.highlight && <Check className="mr-1 inline h-4 w-4" />}
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
