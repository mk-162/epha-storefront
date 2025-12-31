'use client';

import { ArrowRight, Mail, Phone, Store } from 'lucide-react';

import { Link } from '~/components/link';
import { Button } from '~/components/ui/button';

export function RetailerCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-accent via-orange-500 to-accent py-20">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Decorative circles */}
      <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Icon */}
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
            <Store className="h-8 w-8 text-white" />
          </div>

          <h2 className="mb-4 font-heading text-4xl font-black uppercase tracking-tight text-white md:text-5xl lg:text-6xl">
            Ready to Stock EPHA?
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-xl text-white/90">
            Join hundreds of dealers across America. Get started with your first order today, or
            contact us for wholesale pricing on larger quantities.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/products">
              <Button
                className="group bg-white px-10 py-7 text-lg font-black uppercase tracking-wider text-accent shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-white/90"
                size="lg"
              >
                <span className="flex items-center gap-2">
                  Shop Counter Displays
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                className="border-2 border-white/30 bg-transparent px-10 py-7 text-lg font-black uppercase tracking-wider text-white transition-all duration-300 hover:bg-white/10"
                size="lg"
                variant="outline"
              >
                Contact for Wholesale
              </Button>
            </Link>
          </div>

          {/* Contact info */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white/80">
            <a
              className="flex items-center gap-2 transition-colors hover:text-white"
              href="tel:+18005551234"
            >
              <Phone className="h-5 w-5" />
              <span className="font-medium">1-800-555-1234</span>
            </a>
            <span className="hidden h-6 w-px bg-white/30 sm:block" />
            <a
              className="flex items-center gap-2 transition-colors hover:text-white"
              href="mailto:sales@ephahose.com"
            >
              <Mail className="h-5 w-5" />
              <span className="font-medium">sales@ephahose.com</span>
            </a>
          </div>

          {/* Trust badge */}
          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-sm">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-white" />
            </span>
            <span className="text-sm font-bold uppercase tracking-wider text-white">
              Made in USA • Free Shipping Over $500 • Same Day Processing
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
