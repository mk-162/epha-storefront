import {
  ArrowRight,
  Building2,
  Check,
  DollarSign,
  Droplets,
  Factory,
  Flag,
  HardHat,
  Leaf,
  LucideIcon,
  Mail,
  Phone,
  ShieldCheck,
  Target,
  Thermometer,
  Truck,
  Wrench,
  Zap,
} from 'lucide-react';
import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { ReactNode } from 'react';

import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { Button } from '~/components/ui/button';

interface Props {
  params: Promise<{ locale: string }>;
}

export function generateMetadata(): Metadata {
  return {
    title: 'Industries We Serve | EPHA Hose Protectors',
    description:
      'EPHA Hose Protectors serve fleet, construction, manufacturing, automotive, municipal, and agricultural industries with specialized hose protection solutions.',
  };
}

const industries = [
  {
    id: 'fleet',
    title: 'Fleet & Transportation',
    icon: Truck,
    image:
      'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop',
    headline: 'Protect Critical Systems. Maximize Uptime.',
    description:
      'From long-haul trucking to municipal transit, keep your fleet running with protection designed for constant vibration, extreme weather, and 24/7 operations.',
    applications: [
      'Hydraulic brake lines',
      'Air brake systems',
      'Fuel line protection',
      'Battery cable guards',
    ],
    roi: 'Up to 85% downtime reduction',
  },
  {
    id: 'construction',
    title: 'Construction & Heavy Equipment',
    icon: HardHat,
    image:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2089&auto=format&fit=crop',
    headline: 'Built for the Toughest Jobsites.',
    description:
      "Extreme temperatures, abrasive materials, and punishing conditions demand protection that won't quit. EPHA delivers jobsite-proven durability.",
    applications: [
      'Excavator hydraulics',
      'Loader systems',
      'Crane assemblies',
      'Multi-hose bundles',
    ],
    roi: 'Prevent $5K-$50K+ per failure',
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing & Industrial',
    icon: Factory,
    image:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
    headline: 'Reduce Downtime. Extend Maintenance Cycles.',
    description:
      "Production equipment can't afford unplanned stops. Protect your hydraulic systems, pneumatic lines, and critical assemblies from wear and chemical exposure.",
    applications: [
      'Production line hydraulics',
      'Pneumatic systems',
      'Robotic assembly lines',
      'Material handling equipment',
    ],
    roi: '3-5x longer hose life',
  },
  {
    id: 'automotive',
    title: 'Automotive & Repair',
    icon: Wrench,
    image:
      'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=2070&auto=format&fit=crop',
    headline: 'Professional-Grade Protection for Every Service.',
    description:
      'Deliver superior repairs and preventative maintenance with protection solutions trusted by dealerships and independent shops nationwide.',
    applications: [
      'Hydraulic lift systems',
      'Transmission lines',
      'Power steering assemblies',
      'A/C and cooling systems',
    ],
    roi: 'Fewer comebacks, happier customers',
  },
  {
    id: 'municipal',
    title: 'Municipal & Government',
    icon: Building2,
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop',
    headline: 'Protect Taxpayer Assets. Ensure Service Reliability.',
    description:
      'Public works departments, emergency services, and government fleets need maximum equipment uptime to serve communities effectively and responsibly.',
    applications: [
      'Refuse collection vehicles',
      'Snow removal equipment',
      'Emergency response vehicles',
      'Public transit systems',
    ],
    roi: 'Extended service life, reduced emergency repairs',
  },
  {
    id: 'agricultural',
    title: 'Agricultural Equipment',
    icon: Leaf,
    image:
      'https://images.unsplash.com/photo-1532634922-8fe0b757fb13?q=80&w=2072&auto=format&fit=crop',
    headline: 'Harvest Protection. Season After Season.',
    description:
      "When planting and harvest windows are narrow, equipment failure isn't an option. Protect your investment from field debris, chemicals, and weather extremes.",
    applications: [
      'Combine hydraulics',
      'Tractor systems',
      'Irrigation equipment',
      'Spray rig assemblies',
    ],
    roi: 'Equipment ready when you need it most',
  },
];

const benefits = [
  {
    icon: Zap,
    title: 'Fast Installation',
    desc: '5-minute installation means minimal service interruption',
  },
  {
    icon: Thermometer,
    title: 'Extreme Performance',
    desc: '-40°F to 430°F temperature range handles any climate',
  },
  {
    icon: Droplets,
    title: 'Chemical Immunity',
    desc: 'Resists oils, solvents, grease, gasoline, and hydraulic fluids',
  },
  {
    icon: Flag,
    title: 'American Quality',
    desc: 'Manufactured in the USA with rigorous quality control',
  },
  {
    icon: DollarSign,
    title: 'Proven ROI',
    desc: '$3.90-$10.70 investment prevents $100s-$1,000s in failures',
  },
  {
    icon: Target,
    title: 'Right-Sized Solutions',
    desc: '7 sizes fit virtually any application from 0.25" to 2.50" OD',
  },
];

const featureItems = [
  { title: 'Application-Matched Sizing', desc: 'Right protection for your equipment types' },
  { title: 'Environment-Tested Performance', desc: 'Proven in your operating conditions' },
  { title: 'Industry-Specific ROI', desc: 'Cost savings calculated for your operations' },
  { title: 'Regulatory Compliance', desc: 'Safety standards your industry demands' },
];

const testimonials = [
  {
    quote:
      "We've reduced hydraulic line failures by 85% since implementing EPHA protectors across our 200-vehicle fleet. The ROI was immediate.",
    role: 'Fleet Maintenance Director',
    company: 'Regional Trucking Company',
  },
  {
    quote:
      'In construction, every hour of downtime costs us thousands. EPHA protectors are a no-brainer investment that pays for itself the first time it prevents a hose failure.',
    role: 'Equipment Manager',
    company: 'National Construction Contractor',
  },
  {
    quote:
      "Our production lines can't afford unplanned stops. EPHA protection has extended our hydraulic hose life by 4x and virtually eliminated emergency repairs.",
    role: 'Maintenance Supervisor',
    company: 'Manufacturing Plant',
  },
];

const comparisonData = [
  {
    challenge: 'Vibration Damage',
    fleet: 3,
    construction: 2,
    manufacturing: 2,
    automotive: 1,
    municipal: 2,
  },
  {
    challenge: 'Temperature Extremes',
    fleet: 2,
    construction: 3,
    manufacturing: 1,
    automotive: 1,
    municipal: 3,
  },
  {
    challenge: 'Chemical Exposure',
    fleet: 2,
    construction: 1,
    manufacturing: 3,
    automotive: 2,
    municipal: 2,
  },
  {
    challenge: 'Abrasion/Rubbing',
    fleet: 3,
    construction: 3,
    manufacturing: 2,
    automotive: 2,
    municipal: 3,
  },
  {
    challenge: 'Bundle Protection',
    fleet: 2,
    construction: 3,
    manufacturing: 2,
    automotive: 1,
    municipal: 2,
  },
];

function renderChecks(count: number): ReactNode {
  return (
    <div className="flex justify-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Check className="h-4 w-4 font-bold text-primary" key={i} strokeWidth={4} />
      ))}
    </div>
  );
}

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex items-start gap-3 rounded-lg border border-slate-100 bg-slate-50 p-4">
      <ShieldCheck className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
      <div>
        <h4 className="font-bold text-slate-900">{title}</h4>
        <p className="text-sm text-slate-600">{desc}</p>
      </div>
    </div>
  );
}

function TestimonialCard({
  quote,
  role,
  company,
}: {
  quote: string;
  role: string;
  company: string;
}) {
  return (
    <div className="flex flex-col rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
      <blockquote className="mb-6 flex-1 italic text-slate-600">&quot;{quote}&quot;</blockquote>
      <div className="border-t border-slate-100 pt-4">
        <div className="font-bold text-slate-900">{role}</div>
        <div className="text-sm text-slate-500">{company}</div>
      </div>
    </div>
  );
}

function BenefitCard({
  icon: IconComponent,
  title,
  desc,
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10">
      <div className="shrink-0 text-accent">
        <IconComponent className="h-8 w-8" />
      </div>
      <div>
        <h3 className="mb-2 text-lg font-bold">{title}</h3>
        <p className="text-sm leading-relaxed text-slate-300">{desc}</p>
      </div>
    </div>
  );
}

export default async function IndustriesPage({ params }: Props) {
  const { locale } = await params;

  setRequestLocale(locale);

  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 py-24 text-white md:py-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />

        <div className="container relative mx-auto max-w-4xl px-4 text-center">
          <h1 className="mb-6 font-heading text-4xl font-bold uppercase tracking-tight md:text-6xl">
            Protection Built for Your Industry
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-slate-300 md:text-2xl">
            From construction sites to manufacturing floors, from highway fleets to municipal
            yards—EPHA Hose Protectors deliver industry-specific solutions that prevent downtime.
          </p>
          <p className="mx-auto max-w-2xl text-slate-400">
            Every industry faces unique challenges. Extreme temperatures. Harsh chemicals. Constant
            vibration. Abrasive environments. EPHA understands your operational realities and
            delivers protection that performs where you work.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <h2 className="mb-6 font-heading text-3xl font-bold uppercase text-slate-900">
              Why Industry-Specific Protection Matters
            </h2>
            <p className="mb-10 text-lg text-slate-600">
              Generic solutions don&apos;t cut it when equipment failure costs thousands per hour.
              EPHA Hose Protectors are engineered to handle the specific hazards your industry
              faces:
            </p>

            <div className="grid gap-6 text-left md:grid-cols-2">
              {featureItems.map((item) => (
                <FeatureCard desc={item.desc} key={item.title} title={item.title} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-heading text-3xl font-bold uppercase text-slate-900">
              Select Your Industry to Learn More
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => {
              const IconComponent = industry.icon;

              return (
                <div
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  key={industry.id}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      alt={industry.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      fill
                      src={industry.image}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-3 text-white">
                      <div className="rounded-lg bg-primary p-2">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <h3 className="font-heading text-lg font-bold">{industry.title}</h3>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h4 className="mb-3 text-lg font-bold text-slate-900">{industry.headline}</h4>
                    <p className="mb-6 flex-1 text-sm text-slate-600">{industry.description}</p>

                    <div className="mb-6 rounded-lg border border-slate-100 bg-slate-50 p-4">
                      <div className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                        Key Applications
                      </div>
                      <ul className="space-y-1">
                        {industry.applications.map((app, i) => (
                          <li className="flex items-center gap-2 text-sm text-slate-700" key={i}>
                            <div className="h-1 w-1 rounded-full bg-primary" />
                            {app}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6 flex items-center gap-2 rounded-lg border border-green-100 bg-green-50 p-3 text-sm font-medium text-green-700">
                      <DollarSign className="h-4 w-4" />
                      {industry.roi}
                    </div>

                    <Link href={`/industries/${industry.id}`}>
                      <Button
                        className="w-full justify-between transition-colors group-hover:bg-primary group-hover:text-white"
                        variant="outline"
                      >
                        Learn More{' '}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cross Industry Benefits */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center font-heading text-3xl font-bold uppercase">
            No Matter Your Industry, EPHA Delivers
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <BenefitCard
                desc={benefit.desc}
                icon={benefit.icon}
                key={benefit.title}
                title={benefit.title}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center font-heading text-3xl font-bold uppercase text-slate-900">
            Find Your Industry&apos;s Specific Challenges
          </h2>

          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="w-[200px] p-4 text-left font-bold text-slate-900">Challenge</th>
                  <th className="p-4 text-center font-bold text-slate-900">Fleet</th>
                  <th className="p-4 text-center font-bold text-slate-900">Construction</th>
                  <th className="p-4 text-center font-bold text-slate-900">Manufacturing</th>
                  <th className="p-4 text-center font-bold text-slate-900">Automotive</th>
                  <th className="p-4 text-center font-bold text-slate-900">Municipal</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row) => (
                  <tr className="border-t border-slate-100" key={row.challenge}>
                    <td className="bg-slate-50/50 p-4 font-medium text-slate-700">
                      {row.challenge}
                    </td>
                    <td className="p-4 text-center">{renderChecks(row.fleet)}</td>
                    <td className="p-4 text-center">{renderChecks(row.construction)}</td>
                    <td className="p-4 text-center">{renderChecks(row.manufacturing)}</td>
                    <td className="p-4 text-center">{renderChecks(row.automotive)}</td>
                    <td className="p-4 text-center">{renderChecks(row.municipal)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center font-heading text-3xl font-bold uppercase text-slate-900">
            Trusted Across Industries
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                company={testimonial.company}
                key={testimonial.role}
                quote={testimonial.quote}
                role={testimonial.role}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 font-heading text-3xl font-bold uppercase text-white md:text-4xl">
            Ready to Protect Your Industry&apos;s Equipment?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-xl text-white/90">
            Explore industry-specific solutions, calculate your ROI, and discover why over 1,000
            professionals trust EPHA to keep their operations running.
          </p>

          <div className="mb-12 flex flex-col justify-center gap-4 md:flex-row">
            <Link href="/hose-protector">
              <Button
                className="h-14 bg-white px-8 text-lg font-bold text-primary hover:bg-slate-100"
                size="lg"
              >
                Shop Hose Protectors
              </Button>
            </Link>
            <Link href="/about">
              <Button
                className="h-14 border-white px-8 text-lg font-bold text-white hover:bg-white/10"
                size="lg"
                variant="outline"
              >
                Learn About EPHA
              </Button>
            </Link>
            <Link href="/retailers">
              <Button
                className="h-14 border-white px-8 text-lg font-bold text-white hover:bg-white/10"
                size="lg"
                variant="outline"
              >
                Find a Retailer
              </Button>
            </Link>
          </div>

          <div className="bg-primary-foreground/10 inline-block rounded-xl border border-white/20 p-6 backdrop-blur-sm">
            <h3 className="mb-2 font-bold text-white">
              Questions about your specific application?
            </h3>
            <p className="mb-4 text-sm text-white/80">
              Our team includes professionals with real-world experience in your industry.
            </p>
            <div className="flex flex-col justify-center gap-6 font-medium text-white md:flex-row">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                <span>463-255-9942</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                <span>sales@epha.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
