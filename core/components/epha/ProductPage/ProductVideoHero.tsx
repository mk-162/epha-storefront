"use client";

import { Button } from "~/components/ui/button";
import { Truck } from "lucide-react";

export function ProductVideoHero() {
  return (
    <>
      {/* Free Shipping Banner */}
      <div className="bg-accent text-white text-center py-2 text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2">
        <Truck className="h-4 w-4" />
        Free Shipping on Orders Over $500
      </div>

      {/* Hero Section with Video Background */}
      <section className="relative bg-slate-900 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-40 mix-blend-overlay overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/images/generated_videos/3d_rotating_red_hydraulic_hose_protector.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent" />

        <div className="container relative mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-white uppercase leading-none mb-6">
              Stop Hose Failures <br/>
              <span className="text-accent">Before They Stop You</span>
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed mb-8 max-w-2xl">
              Industrial-grade protection that prevents costly equipment downtime and saves thousands in repair costs.
              Built for the harshest conditions, installed in minutes.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(255,107,53,0.3)] hover:shadow-[0_0_30px_rgba(255,107,53,0.5)] transition-all">
                Shop All Products
              </Button>
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10 font-bold uppercase tracking-wider">
                Find a Distributor
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 text-sm font-bold uppercase tracking-wide text-gray-400">
              <span className="flex items-center gap-2"><span className="text-white">Made in USA</span></span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent/50" />
              <span className="flex items-center gap-2"><span className="text-white">-40°F to 430°F</span></span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent/50" />
              <span className="flex items-center gap-2"><span className="text-white">Chemical & Abrasion Resistant</span></span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
