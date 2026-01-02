import {
  AlertTriangle,
  Calculator,
  CheckCircle2,
  ChevronRight,
  DollarSign,
  Droplets,
  FileText,
  Mail,
  Phone,
  ShieldAlert,
  Truck,
  User,
  Video,
  Wind,
} from 'lucide-react';
import { setRequestLocale } from 'next-intl/server';

import { Link } from '~/components/link';
import { Button } from '~/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui/table';

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function FleetIndustry({ params }: Props) {
  const { locale } = await params;

  setRequestLocale(locale);

  const painPoints = [
    {
      icon: AlertTriangle,
      title: 'Constant Vibration',
      desc: 'Relentless wear on unprotected lines rubbing against frames.',
    },
    {
      icon: Wind,
      title: 'Extreme Weather',
      desc: 'From -20°F to 120°F, temp cycling degrades rubber faster.',
    },
    {
      icon: Droplets,
      title: 'Multiple Failure Points',
      desc: 'Dozens of vulnerable lines: hydraulic, air, fuel, DEF.',
    },
    {
      icon: FileText,
      title: 'Regulatory Pressure',
      desc: 'DOT inspections mean any leak can sideline vehicles.',
    },
    {
      icon: DollarSign,
      title: 'Budget Constraints',
      desc: 'Must maximize uptime while controlling maintenance costs.',
    },
  ];

  const solutions = [
    {
      title: 'Install Without Vehicle Downtime',
      desc: '4-step installation takes 5 minutes per location—no lift time required, no vehicle disassembly.',
    },
    {
      title: 'Withstand Highway Conditions',
      desc: 'Proprietary material handles constant vibration, temperature extremes ((-40° to 430° F)), and chemical exposure.',
    },
    {
      title: 'Protect Critical Safety Systems',
      desc: 'Guard brake lines, air brake assemblies, ABS sensors, and fuel systems against failures.',
    },
    {
      title: 'High-Visibility Options',
      desc: 'Orange and yellow colors make inspections easier and demonstrate proactive maintenance.',
    },
    {
      title: 'Scale Across Fleet',
      desc: 'Standardized protection program across all vehicles reduces inventory complexity.',
    },
  ];

  const applications = [
    {
      title: 'Hydraulic Brake Systems',
      desc: 'Protect master cylinder lines, wheel cylinder assemblies, and ABS connections.',
      rec: 'HP5, HP6 (Black or Hi-Vis Yellow)',
    },
    {
      title: 'Air Brake Lines',
      desc: 'Shield pneumatic lines running along chassis rails from vibration damage.',
      rec: 'HP6, HP8 (Hi-Vis Orange)',
    },
    {
      title: 'Fuel System Protection',
      desc: 'Guard fuel lines, DEF lines, and return lines from abrasion at mounting points.',
      rec: 'HP5, HP6 (Black)',
    },
    {
      title: 'Battery Cable Guards',
      desc: 'Prevent shorts and fire hazards from battery cable chafing against metal chassis.',
      rec: 'HP4, HP5 (Black or Hi-Vis Yellow)',
    },
    {
      title: 'Multi-Line Bundle Wraps',
      desc: 'Consolidate and protect multiple lines running together along frame rails.',
      rec: 'HP10, HP12 (Black or Hi-Vis Orange)',
    },
    {
      title: 'Transmission Cooler Lines',
      desc: 'Protect vulnerable cooler lines from road debris impact and vibration wear.',
      rec: 'HP6, HP8 (Black)',
    },
  ];

  const resources = [
    { icon: FileText, text: 'Download Fleet Protection Guide' },
    { icon: Calculator, text: 'ROI Calculator' },
    { icon: Video, text: 'Training Videos' },
    { icon: User, text: 'Fleet Account Manager' },
  ];

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-slate-900 py-24 text-white md:py-32">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />

          <div className="container relative mx-auto px-4">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-sm font-semibold uppercase tracking-wider text-accent">
                <Truck className="h-4 w-4" /> Fleet & Transportation
              </div>
              <h1 className="mb-6 font-heading text-4xl font-bold tracking-tight md:text-6xl">
                Keep Your Fleet Moving. <br />
                <span className="text-accent">Eliminate Costly Roadside Failures.</span>
              </h1>
              <p className="mb-8 max-w-2xl text-xl leading-relaxed text-slate-300">
                When every vehicle off the road costs hundreds per hour in lost revenue and customer
                dissatisfaction, hydraulic and fuel line protection isn&apos;t optional—it&apos;s
                essential fleet management.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild
                  className="h-14 bg-accent px-8 text-lg font-bold text-slate-900 hover:bg-accent/90"
                  size="lg"
                >
                  <Link href="/contact">Get Fleet Quote</Link>
                </Button>
                <Button
                  asChild
                  className="h-14 border-white px-8 text-lg font-bold text-white hover:bg-white/10"
                  size="lg"
                  variant="outline"
                >
                  <Link href="/contact">Calculate ROI</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* The Challenge Section */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <div>
                <h2 className="mb-6 font-heading text-3xl font-bold text-slate-900">
                  The Hidden Costs of Fleet Hose Failures
                </h2>
                <p className="mb-8 text-lg text-slate-600">
                  Every fleet manager knows the nightmare: A driver calls from the roadside with a
                  hydraulic leak. What follows is a cascade of costs.
                </p>

                <div className="mb-8 rounded-r-lg border-l-4 border-red-500 bg-red-50 p-6">
                  <h3 className="mb-4 flex items-center gap-2 font-bold text-red-900">
                    <DollarSign className="h-5 w-5" /> Direct Costs
                  </h3>
                  <ul className="space-y-2 text-red-800">
                    <li className="flex justify-between border-b border-red-100 pb-1">
                      <span>Emergency roadside service</span>
                      <span className="font-bold">$500 - $2,000</span>
                    </li>
                    <li className="flex justify-between border-b border-red-100 pb-1">
                      <span>Replacement hose and fittings</span>
                      <span className="font-bold">$200 - $800</span>
                    </li>
                    <li className="flex justify-between border-b border-red-100 pb-1">
                      <span>Towing to repair facility</span>
                      <span className="font-bold">$150 - $500</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Skilled technician labor (4-8 hrs)</span>
                      <span className="font-bold">$400 - $1,000</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-4 flex items-center gap-2 font-bold text-slate-900">
                    <ShieldAlert className="h-5 w-5 text-orange-500" /> Indirect Costs
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      'Missed deliveries',
                      'Driver downtime wages',
                      'Expedited parts shipping',
                      'Damage to customer relationships',
                      'Safety violations',
                      'Potential fines',
                    ].map((item, i) => (
                      <div className="flex items-center gap-2 text-sm text-slate-600" key={i}>
                        <div className="h-1.5 w-1.5 rounded-full bg-orange-400" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-8">
                <div className="mb-8 text-center">
                  <div className="mb-2 text-sm font-bold uppercase tracking-widest text-slate-500">
                    Total Impact Per Incident
                  </div>
                  <div className="text-5xl font-bold text-slate-900">$5,000 - $15,000+</div>
                  <div className="mt-2 font-medium text-red-500">For a single vehicle failure</div>
                </div>

                <div className="space-y-6">
                  <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
                    <div className="mb-2 flex items-center gap-4">
                      <div className="rounded-lg bg-slate-100 p-2 font-bold text-slate-600">
                        3-5
                      </div>
                      <h4 className="font-bold text-slate-900">Preventable Failures Per Year</h4>
                    </div>
                    <p className="pl-14 text-sm text-slate-500">
                      Average fleet experience per vehicle annually.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
                    <div className="mb-2 flex items-center gap-4">
                      <div className="rounded-lg bg-slate-100 p-2 font-bold text-slate-600">
                        3-5x
                      </div>
                      <h4 className="font-bold text-slate-900">Faster Failure Rate</h4>
                    </div>
                    <p className="pl-14 text-sm text-slate-500">
                      Unprotected hoses fail faster in vibration environments.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
                    <div className="mb-2 flex items-center gap-4">
                      <AlertTriangle className="h-10 w-10 rounded-lg bg-red-100 p-2 text-red-600" />
                      <h4 className="font-bold text-slate-900">Critical Safety Hazards</h4>
                    </div>
                    <p className="pl-14 text-sm text-slate-500">
                      Brake line failures create immediate safety risks and violations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="bg-slate-50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center font-heading text-3xl font-bold text-slate-900">
              What Fleet Managers Face Daily
            </h2>

            <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
              {painPoints.map((item, i) => (
                <div
                  className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm transition-colors hover:border-primary/20"
                  key={i}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 font-bold text-slate-900">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EPHA Solution */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <h2 className="mb-4 font-heading text-3xl font-bold text-slate-900">
                Protection Engineered for Fleet Operations
              </h2>
              <p className="text-lg text-slate-600">
                EPHA Hose Protectors deliver exactly what fleet maintenance demands: fast
                installation, proven durability, measurable ROI.
              </p>
            </div>

            <div className="mb-16 grid gap-8 md:grid-cols-2">
              {solutions.map((item, i) => (
                <div className="flex gap-4" key={i}>
                  <div className="mt-1 shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-bold text-slate-900">{item.title}</h3>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="bg-slate-900 py-20 text-white">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center font-heading text-3xl font-bold">
              Where Fleet Managers Deploy EPHA Protection
            </h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {applications.map((app, i) => (
                <Card
                  className="border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10"
                  key={i}
                >
                  <CardHeader>
                    <CardTitle className="text-lg text-accent">{app.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 h-12 text-slate-300">{app.desc}</p>
                    <div className="rounded border border-white/10 bg-white/5 p-3 text-sm font-bold text-white/80">
                      Recommended: <span className="text-white">{app.rec}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ROI Calculator */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-10 text-center">
                <h2 className="mb-4 font-heading text-3xl font-bold text-slate-900">
                  Calculate Your Fleet&apos;s Protection ROI
                </h2>
                <p className="text-lg text-slate-600">Example: 50-Vehicle Fleet</p>
              </div>

              <div className="mb-8 overflow-hidden rounded-xl border border-slate-200 shadow-sm">
                <Table>
                  <TableHeader className="bg-slate-50">
                    <TableRow>
                      <TableHead className="w-[200px] font-bold text-slate-900">
                        Cost Category
                      </TableHead>
                      <TableHead className="font-bold text-slate-900">Without Protection</TableHead>
                      <TableHead className="bg-green-50 font-bold text-green-700 text-slate-900">
                        With EPHA Protection
                      </TableHead>
                      <TableHead className="text-right font-bold text-slate-900">
                        Annual Savings
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Hose Failures (3/vehicle)</TableCell>
                      <TableCell className="text-slate-500">150 × $2,000 = $300,000</TableCell>
                      <TableCell className="bg-green-50 text-green-700">
                        30 × $2,000 = $60,000
                      </TableCell>
                      <TableCell className="text-right font-bold text-slate-900">
                        $240,000
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Emergency Service</TableCell>
                      <TableCell className="text-slate-500">150 × $800 = $120,000</TableCell>
                      <TableCell className="bg-green-50 text-green-700">
                        30 × $800 = $24,000
                      </TableCell>
                      <TableCell className="text-right font-bold text-slate-900">$96,000</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Downtime Hours</TableCell>
                      <TableCell className="text-slate-500">600 × $150 = $90,000</TableCell>
                      <TableCell className="bg-green-50 text-green-700">
                        120 × $150 = $18,000
                      </TableCell>
                      <TableCell className="text-right font-bold text-slate-900">$72,000</TableCell>
                    </TableRow>
                    <TableRow className="bg-slate-50 font-bold">
                      <TableCell>Total Annual Cost</TableCell>
                      <TableCell className="text-red-600">$510,000</TableCell>
                      <TableCell className="bg-green-100 text-green-700">$102,000</TableCell>
                      <TableCell className="text-right text-green-700">$408,000</TableCell>
                    </TableRow>
                    <TableRow className="bg-slate-100/50">
                      <TableCell className="text-right font-medium" colSpan={2}>
                        Protection Investment (50 vehicles):
                      </TableCell>
                      <TableCell className="bg-slate-200/50 font-bold text-slate-900">
                        $7,500
                      </TableCell>
                      <TableCell className="text-right text-slate-400">—</TableCell>
                    </TableRow>
                    <TableRow className="border-t-2 border-primary bg-primary/5">
                      <TableCell className="text-right text-xl font-bold text-primary" colSpan={3}>
                        Net ROI:
                      </TableCell>
                      <TableCell className="text-right text-xl font-bold text-primary">
                        $400,500
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>

              <div className="text-center">
                <div className="mb-6 inline-block rounded-lg border border-yellow-200 bg-yellow-50 px-4 py-2 font-medium text-yellow-800">
                  ROI Timeline: Protection investment recovered in first 2-3 prevented failures
                </div>
                <div>
                  <Button asChild className="font-bold">
                    <Link href="/contact">
                      Calculate Your Fleet&apos;s ROI <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="bg-slate-50 py-20">
          <div className="container mx-auto px-4">
            <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-xl">
              <div className="grid md:grid-cols-2">
                <div className="flex flex-col justify-center bg-slate-900 p-12 text-white">
                  <div className="mb-4 text-sm font-bold uppercase tracking-widest text-accent">
                    Case Study
                  </div>
                  <h2 className="mb-6 font-heading text-3xl font-bold md:text-4xl">
                    Regional Trucking Company: <br />
                    <span className="text-accent">85% Downtime Reduction</span>
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <h4 className="mb-2 font-bold text-slate-300">Challenge</h4>
                      <p className="text-slate-400">
                        Experiencing 4-5 hydraulic brake line failures per vehicle per year, costing
                        $180,000+ annually.
                      </p>
                    </div>
                    <div>
                      <h4 className="mb-2 font-bold text-slate-300">Solution</h4>
                      <p className="text-slate-400">
                        Implemented EPHA protection program during annual PM service on brake
                        systems, air lines, and battery cables.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-center p-12">
                  <h3 className="mb-8 text-2xl font-bold text-slate-900">
                    Results After 12 Months
                  </h3>

                  <div className="mb-8 space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 text-center text-2xl font-bold text-green-600">85%</div>
                      <div className="font-medium text-slate-600">
                        Reduction in brake line failures (4.5 → 0.7 per vehicle)
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-16 text-center text-2xl font-bold text-green-600">
                        $156k
                      </div>
                      <div className="font-medium text-slate-600">
                        Savings in repair and downtime costs
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-16 text-center text-2xl font-bold text-green-600">0</div>
                      <div className="font-medium text-slate-600">
                        DOT violations for brake system leaks
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-16 text-center text-2xl font-bold text-green-600">35d</div>
                      <div className="font-medium text-slate-600">Investment payback period</div>
                    </div>
                  </div>

                  <blockquote className="border-l-4 border-primary pl-4 italic text-slate-600">
                    &quot;The math is simple. A $6 protector prevents a $2,000 failure. We&apos;ve
                    standardized EPHA across the entire fleet.&quot;
                    <footer className="mt-2 font-bold not-italic text-slate-900">
                      — Fleet Maintenance Director
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fleet Kits */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center font-heading text-3xl font-bold text-slate-900">
              Recommended Fleet Kits
            </h2>
            <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
              <Card className="border-2 border-slate-100 transition-colors hover:border-primary/50">
                <CardHeader className="border-b border-slate-100 bg-slate-50 pb-4">
                  <CardTitle>Light-Duty/Medium-Duty Trucks</CardTitle>
                  <CardDescription>Starter Kit Configuration</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="mb-6 space-y-2 text-sm">
                    <li className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600" /> 4× HP5 (brake
                      lines, fuel lines)
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600" /> 2× HP6 (air brake
                      systems)
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600" /> 2× HP4 (battery
                      cables)
                    </li>
                  </ul>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-slate-900">
                      $48 <span className="text-sm font-normal text-slate-500">/ vehicle</span>
                    </div>
                    <Button size="sm" variant="outline">
                      Order Fleet Kits
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-slate-100 transition-colors hover:border-primary/50">
                <CardHeader className="border-b border-slate-100 bg-slate-50 pb-4">
                  <CardTitle>Heavy-Duty/Class 8 Trucks</CardTitle>
                  <CardDescription>Comprehensive Protection</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="mb-6 space-y-2 text-sm">
                    <li className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600" /> 4× HP6 (brake
                      assemblies)
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600" /> 4× HP8 (air brake
                      chassis runs)
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600" /> 2× HP10 (bundle
                      protection)
                    </li>
                  </ul>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-slate-900">
                      $78 <span className="text-sm font-normal text-slate-500">/ vehicle</span>
                    </div>
                    <Button size="sm" variant="outline">
                      Order Fleet Kits
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Resources & CTA */}
        <section className="bg-primary py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6 font-heading text-3xl font-bold text-white md:text-4xl">
              Ready to Reduce Your Fleet&apos;s Downtime?
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-xl text-white/90">
              Join hundreds of fleet managers who&apos;ve eliminated preventable hose failures and
              recovered their investment in weeks, not months.
            </p>

            <div className="mb-16 flex flex-col justify-center gap-4 md:flex-row">
              <Button
                asChild
                className="h-14 bg-white px-8 text-lg font-bold text-primary hover:bg-slate-100"
                size="lg"
              >
                <Link href="/contact">Get Fleet Quote</Link>
              </Button>
              <Button
                asChild
                className="h-14 border-white px-8 text-lg font-bold text-white hover:bg-white/10"
                size="lg"
                variant="outline"
              >
                <Link href="/contact">Download Guide</Link>
              </Button>
              <Button
                asChild
                className="h-14 border-white px-8 text-lg font-bold text-white hover:bg-white/10"
                size="lg"
                variant="outline"
              >
                <Link href="/contact">Talk to Fleet Specialist</Link>
              </Button>
            </div>

            <div className="mx-auto grid max-w-5xl gap-6 text-left md:grid-cols-4">
              {resources.map((res, i) => (
                <div
                  className="flex cursor-pointer items-center gap-3 rounded-lg bg-white/10 p-4 backdrop-blur-sm transition-colors hover:bg-white/20"
                  key={i}
                >
                  <res.icon className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium text-white">{res.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-8 text-sm text-white/60 md:flex-row">
              <div>
                Trusted by: Regional trucking companies | National LTL carriers | Refrigerated
                transport
              </div>
              <div className="flex gap-6">
                <span className="flex items-center gap-2 text-white">
                  <Phone className="h-4 w-4" /> 463-255-9942
                </span>
                <span className="flex items-center gap-2 text-white">
                  <Mail className="h-4 w-4" /> fleets@epha.com
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
