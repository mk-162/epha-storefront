'use client';

import { AlertTriangle, Check, Link2, Package, ShoppingCart, Wrench } from 'lucide-react';

import { Image } from '~/components/image';
import { Link } from '~/components/link';

import {
  CABLE_TIE_COLOR_INFO,
  type CableTieProduct,
  getCableTieRecommendationsWithDetails,
  getRecommendedCableTies,
  type HoseProtectorSize,
  shouldShowCableTieCrossSell,
} from './cable-tie-relationships';

interface CableTieCrossSellProps {
  hoseProtectorSlug: string;
  hoseProtectorSize?: HoseProtectorSize;
  variant?: 'product-page' | 'cart';
}

function CableTieCard({
  product,
  installationNote,
  variant = 'product-page',
  isPrimary = false,
}: {
  product: CableTieProduct;
  installationNote?: string;
  variant?: 'product-page' | 'cart';
  isPrimary?: boolean;
}) {
  const isCompact = variant === 'cart';
  const colorInfo = CABLE_TIE_COLOR_INFO[product.color];

  if (isCompact) {
    return (
      <Link
        className="group flex items-center gap-3 rounded-lg border-2 border-gray-200 bg-white p-3 transition-all hover:border-orange-400 hover:shadow-md"
        href={product.slug}
      >
        <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-md bg-gray-50">
          <Image
            alt={product.name}
            className="h-full w-full object-contain"
            height={56}
            src={product.image}
            width={56}
          />
        </div>
        <div className="min-w-0 flex-1">
          <div className="mb-1 flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: colorInfo.hex }} />
            <span className="text-xs font-semibold text-gray-600">
              {product.length}" x {product.strength}lb
            </span>
          </div>
          <p className="truncate text-sm font-medium text-gray-900 group-hover:text-orange-600">
            Pack of 100
          </p>
        </div>
        <ShoppingCart className="h-4 w-4 flex-shrink-0 text-gray-400 transition-colors group-hover:text-orange-500" />
      </Link>
    );
  }

  return (
    <Link
      className={`group relative flex flex-col overflow-hidden rounded-xl border-2 bg-white transition-all duration-300 hover:shadow-xl ${
        isPrimary
          ? 'border-orange-400 ring-2 ring-orange-100'
          : 'border-gray-200 hover:border-orange-300'
      }`}
      href={product.slug}
    >
      {/* Recommended badge for primary */}
      {isPrimary && (
        <div className="absolute right-0 top-0 z-10">
          <div className="flex items-center gap-1 rounded-bl-lg bg-orange-500 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow-md">
            <Check className="h-3 w-3" />
            Best Match
          </div>
        </div>
      )}

      {/* Product image with color accent */}
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 p-6">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            background: `radial-gradient(circle at 30% 30%, ${colorInfo.hex} 0%, transparent 60%)`,
          }}
        />
        <Image
          alt={product.name}
          className="relative h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
          height={200}
          src={product.image}
          width={200}
        />
      </div>

      {/* Product info */}
      <div className="flex flex-1 flex-col p-4">
        {/* Specs row */}
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span
            className="flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold text-white shadow-sm"
            style={{ backgroundColor: colorInfo.hex }}
          >
            {colorInfo.name.charAt(0)}
          </span>
          <span className="rounded-md bg-gray-900 px-2 py-0.5 text-xs font-bold text-white">
            {product.length}" × {product.strength}lb
          </span>
          <span className="rounded-md bg-gray-100 px-2 py-0.5 text-xs font-semibold text-gray-600">
            100 Pack
          </span>
        </div>

        {/* Title */}
        <h4 className="mb-2 text-sm font-bold leading-tight text-gray-900 transition-colors group-hover:text-orange-600">
          {colorInfo.name} Cable Ties
        </h4>

        {/* Installation note */}
        {installationNote ? (
          <p className="mb-3 flex items-center gap-1.5 text-xs text-gray-500">
            <Wrench className="h-3 w-3" />
            {installationNote}
          </p>
        ) : null}

        {/* CTA */}
        <div className="mt-auto">
          <div className="flex items-center justify-between rounded-lg bg-orange-50 px-3 py-2 transition-colors group-hover:bg-orange-100">
            <span className="text-sm font-bold text-orange-700">Add to Order</span>
            <ShoppingCart className="h-4 w-4 text-orange-600" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export function CableTieCrossSell({
  hoseProtectorSlug,
  hoseProtectorSize,
  variant = 'product-page',
}: CableTieCrossSellProps) {
  if (!shouldShowCableTieCrossSell(hoseProtectorSlug)) {
    return null;
  }

  const isCompact = variant === 'cart';

  const recommendationsWithDetails = hoseProtectorSize
    ? getCableTieRecommendationsWithDetails(hoseProtectorSlug, hoseProtectorSize)
    : [];

  const basicRecommendations = !hoseProtectorSize ? getRecommendedCableTies(hoseProtectorSlug) : [];

  if (recommendationsWithDetails.length === 0 && basicRecommendations.length === 0) {
    return null;
  }

  // Cart variant - compact design
  if (isCompact) {
    return (
      <div className="overflow-hidden rounded-xl border-2 border-amber-300 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="flex items-center gap-2 border-b border-amber-200 bg-amber-100/50 px-4 py-2.5">
          <AlertTriangle className="h-4 w-4 text-amber-600" />
          <span className="text-sm font-bold text-amber-800">
            Cable Ties Required for Installation
          </span>
        </div>
        <div className="space-y-2 p-4">
          {recommendationsWithDetails.length > 0
            ? recommendationsWithDetails.map((rec) => (
                <CableTieCard
                  installationNote={rec.installationNote}
                  key={rec.sku}
                  product={rec}
                  variant="cart"
                />
              ))
            : basicRecommendations.map((rec) => (
                <CableTieCard key={rec.sku} product={rec} variant="cart" />
              ))}
        </div>
      </div>
    );
  }

  // Product page variant - full design
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.343 0L13.857 8.485 15.272 9.9l9.9-9.9h-2.83zM32 0l-3.486 3.485-1.415-1.414L30.172 0H32zM0 5.373l.828-.83 1.415 1.415L0 8.2V5.374zm0 5.656l.828-.829 5.657 5.657-1.414 1.414L0 11.03v2.828zm0 5.657l.828-.828 9.9 9.9-1.414 1.414L0 16.686v2.828z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="container relative mx-auto px-4">
        {/* Header section */}
        <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex-1">
            {/* Alert badge */}
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-amber-500/20 px-4 py-2 text-amber-400 ring-1 ring-amber-500/30">
              <AlertTriangle className="h-4 w-4" />
              <span className="text-sm font-bold uppercase tracking-wide">
                Required for Installation
              </span>
            </div>

            <h3 className="mb-2 text-2xl font-black tracking-tight text-white sm:text-3xl">
              Complete Your Installation
            </h3>
            <p className="max-w-xl text-base text-slate-400">
              Hose protectors require cable ties to secure them in place. We recommend{' '}
              <strong className="text-white">black cable ties</strong> for maximum strength and UV
              resistance.
            </p>
          </div>

          {/* UV resistant badge */}
          <div className="flex-shrink-0">
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-dashed border-slate-500 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-300">
              <div className="h-3 w-3 rounded-full bg-slate-800 ring-2 ring-white" />
              <span>UV Resistant</span>
              <Check className="h-3.5 w-3.5" />
            </div>
          </div>
        </div>

        {/* Why you need this section */}
        <div className="mb-8 grid gap-4 sm:grid-cols-3">
          <div className="flex items-start gap-3 rounded-lg bg-white/5 p-4 backdrop-blur-sm">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-orange-500/20">
              <Link2 className="h-5 w-5 text-orange-400" />
            </div>
            <div>
              <h4 className="font-bold text-white">Secure Fit</h4>
              <p className="text-sm text-slate-400">
                Cable ties lock protectors in place, preventing slippage under vibration
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-lg bg-white/5 p-4 backdrop-blur-sm">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-orange-500/20">
              <Package className="h-5 w-5 text-orange-400" />
            </div>
            <div>
              <h4 className="font-bold text-white">Right Size</h4>
              <p className="text-sm text-slate-400">
                Pre-matched to your protector size for perfect installation every time
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-lg bg-white/5 p-4 backdrop-blur-sm">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-orange-500/20">
              <Wrench className="h-5 w-5 text-orange-400" />
            </div>
            <div>
              <h4 className="font-bold text-white">Easy Install</h4>
              <p className="text-sm text-slate-400">
                3-4 ties per protector, install in under 4 minutes per hose line
              </p>
            </div>
          </div>
        </div>

        {/* Product cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {recommendationsWithDetails.length > 0
            ? recommendationsWithDetails.map((rec, index) => (
                <CableTieCard
                  installationNote={rec.installationNote}
                  isPrimary={index === 0}
                  key={rec.sku}
                  product={rec}
                  variant="product-page"
                />
              ))
            : basicRecommendations.map((rec, index) => (
                <CableTieCard
                  isPrimary={index === 0}
                  key={rec.sku}
                  product={rec}
                  variant="product-page"
                />
              ))}
        </div>

        {/* Installation tip */}
        <div className="mt-8 rounded-xl border border-slate-700 bg-slate-800/50 p-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-500/20">
              <Wrench className="h-6 w-6 text-orange-400" />
            </div>
            <div className="flex-1">
              <h4 className="mb-1 font-bold text-white">Pro Installation Tip</h4>
              <p className="text-sm text-slate-400">
                For outdoor equipment exposed to UV, our{' '}
                <strong className="text-white">black cable ties</strong> are UV-stabilized for
                maximum longevity. Use pliers to tighten the final pull for a secure,
                vibration-resistant fit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
