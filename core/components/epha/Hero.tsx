"use client";

import Image from "next/image";
import { Button } from "~/components/ui/button";
import { ArrowRight, Thermometer, Clock, TrendingDown, PlayCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[500px] w-full overflow-hidden bg-slate-900">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/generated_images/excavator_at_golden_hour_with_red_hose_protectors.png"
          alt="Excavator with EPHA hose protectors"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />

      <div className="container relative mx-auto h-full grid lg:grid-cols-2 gap-8 items-center px-4 py-16">
        <div className="space-y-4">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase leading-[0.9] drop-shadow-xl">
            The <span className="text-accent">$8 Solution</span> <br />
            That Prevents <br />
            $47,500 Failures
          </h1>

          <p className="max-w-xl text-base md:text-lg text-gray-200 font-light leading-relaxed">
            Industrial-grade hose protection that installs in 4 minutes and
            prevents 85% of costly equipment breakdowns.
          </p>

          <div className="flex flex-wrap gap-3 pt-3">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white font-bold text-base px-6 py-4 rounded-sm uppercase tracking-wider shadow-lg hover:translate-y-[-2px] transition-all"
            >
              Shop Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white/10 hover:text-white font-bold text-base px-6 py-4 rounded-sm uppercase tracking-wider backdrop-blur-sm"
            >
              <PlayCircle className="mr-2 h-4 w-4" />
              Watch Demo
            </Button>
          </div>

          <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <TrustBadge icon={USFlagIcon} label="Made in USA" />
            <TrustBadge icon={Thermometer} label="-40°F to 430°F" />
            <TrustBadge icon={Clock} label="4-Minute Install" />
            <TrustBadge icon={TrendingDown} label="85% Fewer Failures" />
          </div>
        </div>

        {/* 2x2 Image Grid */}
        <div className="hidden lg:grid grid-cols-2 gap-3">
          <UseCaseImage src="/images/generated_images/hose_protector_on_semi-truck_hydraulic_line.png" label="Trucking Fleets" />
          <UseCaseImage src="/images/generated_images/hose_protector_in_manufacturing_plant.png" label="Manufacturing" />
          <UseCaseImage src="/images/generated_images/hose_protector_in_auto_repair_shop.png" label="Auto Repair" />
          <UseCaseImage src="/images/generated_images/hose_protector_on_agricultural_tractor.png" label="Agriculture" />
        </div>
      </div>
    </section>
  );
}

function UseCaseImage({ src, label }: { src: string, label: string }) {
  return (
    <div className="relative group overflow-hidden rounded-lg aspect-square border border-white/20 shadow-2xl">
      <Image
        src={src}
        alt={label}
        fill
        className="object-cover hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />
      <div className="absolute bottom-0 inset-x-0 p-3">
        <div className="text-accent text-[10px] font-bold uppercase tracking-wider mb-0.5">Industry</div>
        <div className="text-white font-heading text-lg font-bold uppercase leading-none">{label}</div>
      </div>
    </div>
  )
}

function USFlagIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <line x1="3" x2="21" y1="10" y2="10" />
      <line x1="3" x2="21" y1="15" y2="15" />
      <path d="M3 5h8v7H3z" fill="currentColor" stroke="none" />
    </svg>
  )
}

function TrustBadge({ icon: Icon, label }: { icon: React.ComponentType<React.SVGProps<SVGSVGElement>>, label: string }) {
  return (
    <div className="flex flex-col items-center gap-2 group cursor-default">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 border border-white/20 backdrop-blur-md transition-all group-hover:bg-accent group-hover:border-accent">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <span className="text-xs font-bold text-white uppercase tracking-wide text-center leading-tight">{label}</span>
    </div>
  );
}
