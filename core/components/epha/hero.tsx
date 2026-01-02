'use client';

import { ArrowRight, Clock, PlayCircle, Thermometer, TrendingDown } from 'lucide-react';

import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { Button } from '~/components/ui/button';

export function Hero() {
  return (
    <section className="relative min-h-[500px] w-full overflow-hidden bg-slate-900">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          alt="EPHA dragster with hose protection"
          className="object-cover object-center"
          fill
          priority
          src="/images/epha-drag-racing.jpg"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />

      <div className="container relative mx-auto grid h-full items-end gap-8 px-4 py-16 lg:grid-cols-2">
        <div className="space-y-4">
          <h1 className="font-heading text-4xl font-bold uppercase leading-[0.9] text-white drop-shadow-xl md:text-5xl lg:text-6xl">
            The <span className="text-accent">$8 Solution</span> <br />
            That Prevents <br />
            $47,500 Failures
          </h1>

          <p className="max-w-xl text-base font-light leading-relaxed text-gray-200 md:text-lg">
            Industrial-grade hose protection that installs in 4 minutes and prevents 85% of costly
            equipment breakdowns.
          </p>

          <div className="flex flex-wrap gap-3 pt-3">
            <Link href="/shop">
              <Button
                className="rounded-sm bg-accent px-6 py-4 text-base font-bold uppercase tracking-wider text-white shadow-lg transition-all hover:translate-y-[-2px] hover:bg-accent/90"
                size="lg"
              >
                Shop Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>

            <Button
              className="rounded-sm border-2 border-white px-6 py-4 text-base font-bold uppercase tracking-wider text-white backdrop-blur-sm hover:bg-white/10 hover:text-white"
              size="lg"
              variant="outline"
            >
              <PlayCircle className="mr-2 h-4 w-4" />
              Watch Demo
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-8 md:grid-cols-4">
            <TrustBadge icon={USFlagIcon} label="Made in USA" />
            <TrustBadge icon={Thermometer} label="(-40° to 430° F)" />
            <TrustBadge icon={Clock} label="4-Minute Install" />
            <TrustBadge icon={TrendingDown} label="85% Fewer Failures" />
          </div>
        </div>

        {/* Comparison Image with CSS Overlays */}
        <div className="relative mx-auto w-full max-w-md aspect-square overflow-hidden rounded-lg border border-white/20 shadow-2xl lg:mx-0 lg:block lg:max-w-none">
          <Image
            alt="Hose Protector Comparison"
            className="object-cover"
            fill
            src="/images/hero-comparison.png"
          />
          {/* Text Overlays */}
          <div className="absolute inset-0 flex flex-col justify-between p-6 bg-black/5">
            <div className="text-center mt-2">
              <h2 className="font-heading text-3xl font-black uppercase leading-none text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.9)] md:text-5xl">
                Which would you <br /> rather pay?
              </h2>
            </div>

            <div className="flex justify-between items-end mb-2 px-2">
              <div className="text-left">
                <div className="font-heading text-7xl font-black text-[#ff4d00] drop-shadow-[0_4px_4px_rgba(0,0,0,0.9)] md:text-8xl">
                  $4.50
                </div>
              </div>
              <div className="text-right">
                <div className="font-heading text-7xl font-black text-[#ff4d00] drop-shadow-[0_4px_4px_rgba(0,0,0,0.9)] md:text-8xl">
                  $300
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function USFlagIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect height="14" rx="2" width="18" x="3" y="5" />
      <line x1="3" x2="21" y1="10" y2="10" />
      <line x1="3" x2="21" y1="15" y2="15" />
      <path d="M3 5h8v7H3z" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TrustBadge({
  icon: Icon,
  label,
}: {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
}) {
  return (
    <div className="group flex cursor-default flex-col items-center gap-2">
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition-all group-hover:border-accent group-hover:bg-accent">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <span className="text-center text-xs font-bold uppercase leading-tight tracking-wide text-white">
        {label}
      </span>
    </div>
  );
}
