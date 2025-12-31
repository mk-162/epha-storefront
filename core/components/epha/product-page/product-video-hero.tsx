'use client';

import { Truck } from 'lucide-react';
import dynamic from 'next/dynamic';

const Model3DViewer = dynamic(
  () => import('~/components/epha/model-3d-viewer').then((mod) => mod.Model3DViewer),
  { ssr: false },
);

import { Button } from '~/components/ui/button';

export function ProductVideoHero() {
  return (
    <>
      {/* Free Shipping Banner */}
      <div className="flex items-center justify-center gap-2 bg-accent py-2 text-center text-sm font-bold uppercase tracking-wider text-white">
        <Truck className="h-4 w-4" />
        Free Shipping on Orders Over $500
      </div>

      {/* Hero Section with Video Background */}
      <section className="relative overflow-hidden bg-slate-900 py-20 lg:py-32">
        <div className="absolute inset-0 overflow-hidden opacity-40 mix-blend-overlay">
          <video autoPlay className="h-full w-full object-cover" loop muted playsInline>
            <source
              src="/images/generated_videos/3d_rotating_red_hydraulic_hose_protector.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent" />

        <div className="container relative mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
            {/* Left Column - Text Content */}
            <div>
              <h1 className="mb-6 font-heading text-5xl font-bold uppercase leading-none text-white md:text-7xl">
                Stop Hose Failures <br />
                <span className="text-accent">Before They Stop You</span>
              </h1>
              <p className="mb-8 max-w-2xl text-xl font-light leading-relaxed text-gray-300">
                Industrial-grade protection that prevents costly equipment downtime and saves
                thousands in repair costs. Built for the harshest conditions, installed in minutes.
              </p>

              <div className="mb-12 flex flex-wrap gap-4">
                <Button
                  className="bg-accent font-bold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(255,107,53,0.3)] transition-all hover:bg-accent/90 hover:shadow-[0_0_30px_rgba(255,107,53,0.5)]"
                  size="lg"
                >
                  Shop All Products
                </Button>
                <Button
                  className="border-white font-bold uppercase tracking-wider text-white hover:bg-white/10"
                  size="lg"
                  variant="outline"
                >
                  Find a Distributor
                </Button>
              </div>

              <div className="flex flex-wrap gap-6 text-sm font-bold uppercase tracking-wide text-gray-400">
                <span className="flex items-center gap-2">
                  <span className="text-white">Made in USA</span>
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-accent/50" />
                <span className="flex items-center gap-2">
                  <span className="text-white">-40°F to 430°F</span>
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-accent/50" />
                <span className="flex items-center gap-2">
                  <span className="text-white">Chemical & Abrasion Resistant</span>
                </span>
              </div>
            </div>

            {/* Right Column - 3D Model Viewer */}
            <div className="flex h-[400px] items-center justify-center lg:h-[500px]">
              <Model3DViewer className="h-full w-full" modelUrl="/images/hose-protector.glb" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
