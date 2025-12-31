import { ArrowRight, Building2, Factory, HardHat, Leaf, Truck, Wrench } from 'lucide-react';

import { Link } from '~/components/link';
import { Button } from '~/components/ui/button';

const industries = [
  {
    id: 'fleet',
    title: 'Fleet & Transportation',
    icon: Truck,
    image:
      'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop',
    description: 'Keep your fleet running with protection designed for constant vibration and 24/7 operations.',
  },
  {
    id: 'construction',
    title: 'Construction',
    icon: HardHat,
    image:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2089&auto=format&fit=crop',
    description: 'Jobsite-proven durability for excavators, dozers, and heavy equipment.',
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    icon: Factory,
    image:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
    description: 'Reduce downtime and extend maintenance cycles for production equipment.',
  },
  {
    id: 'automotive',
    title: 'Automotive & Repair',
    icon: Wrench,
    image:
      'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=2070&auto=format&fit=crop',
    description: 'Professional-grade protection trusted by dealerships and shops nationwide.',
  },
  {
    id: 'municipal',
    title: 'Municipal & Government',
    icon: Building2,
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop',
    description: 'Protect taxpayer assets and ensure service reliability for public fleets.',
  },
  {
    id: 'agricultural',
    title: 'Agricultural',
    icon: Leaf,
    image:
      'https://images.unsplash.com/photo-1532634922-8fe0b757fb13?q=80&w=2072&auto=format&fit=crop',
    description: 'Harvest protection for combines, tractors, and irrigation equipment.',
  },
];

function IndustryCard({
  industry,
  variant = 'standard',
}: {
  industry: (typeof industries)[0];
  variant?: 'large' | 'standard' | 'wide';
}) {
  const Icon = industry.icon;

  if (variant === 'large') {
    return (
      <Link
        className="group relative min-h-[280px] overflow-hidden rounded-2xl md:col-span-2 md:row-span-2"
        href={`/industries/${industry.id}`}
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url('${industry.image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6 md:p-8">
          <div className="mb-3 flex items-center gap-3">
            <div className="rounded-lg bg-primary p-2">
              <Icon className="h-5 w-5 text-white" />
            </div>
            <h3 className="font-heading text-2xl font-bold uppercase text-white md:text-3xl">
              {industry.title}
            </h3>
          </div>
          <p className="max-w-md text-gray-300 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
            {industry.description}
          </p>
        </div>
      </Link>
    );
  }

  if (variant === 'wide') {
    return (
      <Link
        className="group relative min-h-[180px] overflow-hidden rounded-2xl md:col-span-2"
        href={`/industries/${industry.id}`}
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url('${industry.image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-0 left-0 p-5">
          <div className="flex items-center gap-2">
            <Icon className="h-4 w-4 text-primary" />
            <h3 className="font-heading text-xl font-bold uppercase text-white">
              {industry.title}
            </h3>
          </div>
          <p className="mt-2 max-w-md text-sm text-gray-300 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
            {industry.description}
          </p>
        </div>
      </Link>
    );
  }

  return (
    <Link
      className="group relative min-h-[180px] overflow-hidden rounded-2xl md:col-span-1"
      href={`/industries/${industry.id}`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url('${industry.image}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      <div className="absolute bottom-0 left-0 p-5">
        <div className="flex items-center gap-2">
          <Icon className="h-4 w-4 text-primary" />
          <h3 className="font-heading text-xl font-bold uppercase text-white">{industry.title}</h3>
        </div>
      </div>
    </Link>
  );
}

export function Industries() {
  const [fleet, construction, manufacturing, automotive, municipal, agricultural] = industries;

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-heading text-4xl font-bold uppercase text-primary md:text-5xl">
            Industries We Serve
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Trusted by fleet managers and equipment operators across the toughest sectors.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
          <IndustryCard industry={fleet} variant="large" />
          <IndustryCard industry={construction} />
          <IndustryCard industry={manufacturing} />
          <IndustryCard industry={automotive} />
          <IndustryCard industry={municipal} />
          <IndustryCard industry={agricultural} variant="wide" />
        </div>

        {/* View All Link */}
        <div className="mt-10 text-center">
          <Link href="/industries">
            <Button className="group" size="lg" variant="outline">
              View All Industries
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
