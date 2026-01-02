import {
  AlertTriangle,
  Calculator,
  Calendar,
  CheckCircle2,
  ChevronRight,
  CloudRain,
  DollarSign,
  Droplets,
  FileText,
  Mail,
  MapPin,
  Phone,
  ShieldAlert,
  Thermometer,
  Tractor,
  User,
  Video,
  Zap,
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

export default async function AgriculturalIndustry({ params }: Props) {
  const { locale } = await params;

  setRequestLocale(locale);

  const painPoints = [
    {
      icon: AlertTriangle,
      title: 'Catastrophic Timing Risk',
      desc: 'A single hydraulic failure during a 7-14 day harvest window can mean thousands in lost crops.',
    },
    {
      icon: Droplets,
      title: 'Extreme Debris Environments',
      desc: 'Dust, chaff, stalks, and crop residue create constant abrasion on unprotected hoses.',
    },
    {
      icon: ShieldAlert,
      title: 'Chemical Exposure',
      desc: 'Fertilizers, pesticides, and herbicides degrade rubber compounds faster than normal use.',
    },
    {
      icon: Thermometer,
      title: 'Temperature Extremes',
      desc: 'From freezing spring mornings to 100°F+ harvest days, thermal cycling accelerates wear.',
    },
    {
      icon: Zap,
      title: 'High-Cycle Flex Points',
      desc: 'Continuous movement of headers, arms, and implements creates repetitive stress failures.',
    },
    {
      icon: MapPin,
      title: 'Remote Locations',
      desc: 'Fields miles from shops mean hours of downtime waiting for parts and service.',
    },
    {
      icon: DollarSign,
      title: 'Massive Capital Investment',
      desc: '$500,000+ combines and tractors demand protection to maximize equipment lifespan.',
    },
    {
      icon: CloudRain,
      title: 'Weather Dependency',
      desc: 'Narrow optimal windows mean every hour of uptime is critical during planting and harvest.',
    },
  ];

  const solutions = [
    {
      title: 'Install During Off-Season Maintenance',
      desc: 'Simple installation during winter service prep means equipment is ready when the season starts—no field downtime required.',
    },
    {
      title: 'Survive Extreme Debris Conditions',
      desc: 'Proprietary material handles constant abrasion from crop residue, dust, and debris that destroys unprotected hoses.',
    },
    {
      title: 'Resist Agricultural Chemicals',
      desc: 'Chemical-resistant formulation withstands exposure to fertilizers, herbicides, pesticides, and hydraulic fluid contamination.',
    },
    {
      title: 'Handle Temperature Extremes',
      desc: 'Rated for (-40° to 430° F), protecting lines through frost, heat, and everything between.',
    },
    {
      title: 'Protect High-Value Harvest Equipment',
      desc: 'Guard critical combine, sprayer, and planter hydraulics that cost $500-$2,000+ to repair in-season.',
    },
  ];

  const applications = [
    {
      title: 'Combine Harvester Systems',
      desc: 'Protect header lift cylinders, unloading auger hydraulics, separator systems, and engine cooling lines.',
      rec: 'HP6, HP8, HP10 (Black or Hi-Vis Orange)',
    },
    {
      title: 'Tractor Hydraulic Systems',
      desc: 'Shield 3-point hitch lines, loader hydraulics, remote valve connections, and power steering systems.',
      rec: 'HP5, HP6, HP8 (Black)',
    },
    {
      title: 'Planter & Drill Systems',
      desc: 'Guard row unit hydraulics, seed meter drives, down-force systems, and marker arm lines.',
      rec: 'HP4, HP5, HP6 (Black or Hi-Vis Yellow)',
    },
    {
      title: 'Sprayer & Application Equipment',
      desc: 'Protect boom hydraulics, product lines, rinse systems, and steering cylinders on self-propelled units.',
      rec: 'HP6, HP8 (Chemical-Resistant Black)',
    },
    {
      title: 'Hay & Forage Equipment',
      desc: 'Shield baler hydraulics, wrapper systems, mower conditioner lines, and rake lift cylinders.',
      rec: 'HP5, HP6 (Black)',
    },
    {
      title: 'Irrigation System Equipment',
      desc: 'Protect pivot hydraulics, pump connections, and center pivot drive systems from wear and UV damage.',
      rec: 'HP6, HP8, HP10 (Black)',
    },
  ];

  const equipmentKits = [
    {
      name: 'Combine Harvester Kit',
      price: '$118',
      desc: 'Complete header, auger, and separator protection',
      items: [
        '6× HP8 (header cylinders)',
        '4× HP6 (auger hydraulics)',
        '4× HP10 (separator systems)',
      ],
    },
    {
      name: 'Tractor Protection Kit',
      price: '$88',
      desc: 'Full hydraulic system coverage',
      items: ['4× HP6 (3-point hitch)', '4× HP5 (loader lines)', '4× HP8 (remote connections)'],
    },
    {
      name: 'Planter/Drill Kit',
      price: '$84',
      desc: 'Row unit and seed system protection',
      items: ['8× HP4 (row unit lines)', '4× HP5 (down-force)', '2× HP6 (marker arms)'],
    },
    {
      name: 'Sprayer Protection Kit',
      price: '$102',
      desc: 'Boom and application coverage',
      items: ['6× HP8 (boom hydraulics)', '4× HP6 (steering)', '4× HP5 (product lines)'],
    },
    {
      name: 'Hay & Forage Kit',
      price: '$76',
      desc: 'Baler and mower protection',
      items: ['4× HP6 (baler hydraulics)', '4× HP5 (wrapper lines)', '4× HP5 (mower lines)'],
    },
    {
      name: 'Complete Farm Bundle',
      price: '$686',
      desc: 'All 5 kits + bonus inventory',
      items: [
        'All equipment kits included',
        '24× spare protectors assorted',
        'Priority harvest season support',
      ],
    },
  ];

  const preSeasonTimeline = [
    {
      month: 'January-February',
      task: 'Assess Equipment',
      desc: 'Complete inventory of all hydraulic systems and wear points during winter downtime.',
    },
    {
      month: 'March',
      task: 'Install Protection',
      desc: 'Apply EPHA protectors during spring maintenance before field work begins.',
    },
    {
      month: 'April-May',
      task: 'Planting Season',
      desc: 'Equipment protected and ready for intensive planting operations.',
    },
    {
      month: 'June-August',
      task: 'Growing Season',
      desc: 'Sprayer and irrigation equipment running with full protection.',
    },
    {
      month: 'September-November',
      task: 'Harvest Season',
      desc: 'Combines, grain carts, and trucks protected during critical harvest window.',
    },
    {
      month: 'December',
      task: 'Season Review',
      desc: 'Document results, plan next year&apos;s protection program expansion.',
    },
  ];

  const resources = [
    { icon: FileText, text: 'Download Farm Equipment Guide' },
    { icon: Calculator, text: 'ROI Calculator' },
    { icon: Video, text: 'Installation Videos' },
    { icon: User, text: 'Ag Equipment Specialist' },
  ];

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-slate-900 py-24 text-white md:py-32">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />

          <div className="container relative mx-auto px-4">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-sm font-semibold uppercase tracking-wider text-accent">
                <Tractor className="h-4 w-4" /> Agricultural Equipment
              </div>
              <h1 className="mb-6 font-heading text-4xl font-bold tracking-tight md:text-6xl">
                Harvest Protection. <br />
                <span className="text-accent">When Timing Is Everything.</span>
              </h1>
              <p className="mb-8 max-w-2xl text-xl leading-relaxed text-slate-300">
                When a hydraulic failure during harvest can cost $10,000+ per day in lost crops and
                repair costs, protecting your equipment isn&apos;t optional—it&apos;s essential farm
                management.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild
                  className="h-14 bg-accent px-8 text-lg font-bold text-slate-900 hover:bg-accent/90"
                  size="lg"
                >
                  <Link href="/contact">Get Farm Equipment Quote</Link>
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
                  The True Cost of Agricultural Equipment Failures
                </h2>
                <p className="mb-8 text-lg text-slate-600">
                  Every farmer knows the nightmare scenario: Your combine goes down on day three of
                  a seven-day harvest window. What follows is a cascade of costs that extends far
                  beyond the repair bill.
                </p>

                <div className="mb-8 rounded-r-lg border-l-4 border-red-500 bg-red-50 p-6">
                  <h3 className="mb-4 flex items-center gap-2 font-bold text-red-900">
                    <DollarSign className="h-5 w-5" /> Critical Failure Costs
                  </h3>
                  <ul className="space-y-2 text-red-800">
                    <li className="flex justify-between border-b border-red-100 pb-1">
                      <span>Emergency field service call</span>
                      <span className="font-bold">$500 - $1,500</span>
                    </li>
                    <li className="flex justify-between border-b border-red-100 pb-1">
                      <span>Replacement hose and fittings</span>
                      <span className="font-bold">$300 - $1,200</span>
                    </li>
                    <li className="flex justify-between border-b border-red-100 pb-1">
                      <span>Lost harvest time (per day)</span>
                      <span className="font-bold">$5,000 - $15,000+</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Crop quality degradation</span>
                      <span className="font-bold">$2,000 - $10,000+</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-4 flex items-center gap-2 font-bold text-slate-900">
                    <ShieldAlert className="h-5 w-5 text-orange-500" /> Hidden Costs
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      'Expedited parts shipping',
                      'Custom harvester fees',
                      'Grain moisture penalties',
                      'Missed market windows',
                      'Labor overtime costs',
                      'Secondary equipment damage',
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
                    Total Impact Per Critical Failure
                  </div>
                  <div className="text-5xl font-bold text-slate-900">$10,000 - $100,000+</div>
                  <div className="mt-2 font-medium text-red-500">
                    Depending on timing and crop value
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
                    <div className="mb-2 flex items-center gap-4">
                      <div className="rounded-lg bg-slate-100 p-2 font-bold text-slate-600">
                        7-14
                      </div>
                      <h4 className="font-bold text-slate-900">Day Harvest Windows</h4>
                    </div>
                    <p className="pl-14 text-sm text-slate-500">
                      Optimal harvest periods that cannot be extended.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
                    <div className="mb-2 flex items-center gap-4">
                      <div className="rounded-lg bg-slate-100 p-2 font-bold text-slate-600">
                        35-40%
                      </div>
                      <h4 className="font-bold text-slate-900">Preventable Downtime</h4>
                    </div>
                    <p className="pl-14 text-sm text-slate-500">
                      Equipment failures caused by hose abrasion and wear.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
                    <div className="mb-2 flex items-center gap-4">
                      <AlertTriangle className="h-10 w-10 rounded-lg bg-red-100 p-2 text-red-600" />
                      <h4 className="font-bold text-slate-900">Cascading Failures</h4>
                    </div>
                    <p className="pl-14 text-sm text-slate-500">
                      One hydraulic leak can contaminate crops and cause secondary damage.
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
              The Unique Challenges of Agricultural Equipment
            </h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
                Protection Engineered for Agriculture
              </h2>
              <p className="text-lg text-slate-600">
                EPHA Hose Protectors deliver what farmers and ranchers demand: proven durability in
                the harshest conditions, simple installation, and protection that pays for itself
                with a single prevented failure.
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
              Agricultural Equipment Applications
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
                  Calculate Your Farm&apos;s Protection ROI
                </h2>
                <p className="text-lg text-slate-600">Example: 1,800-Acre Corn/Soybean Operation</p>
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
                      <TableCell className="font-medium">Harvest Downtime Events</TableCell>
                      <TableCell className="text-slate-500">3 events × $15,000 = $45,000</TableCell>
                      <TableCell className="bg-green-50 text-green-700">
                        0.5 events × $15,000 = $7,500
                      </TableCell>
                      <TableCell className="text-right font-bold text-slate-900">$37,500</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Planting Season Repairs</TableCell>
                      <TableCell className="text-slate-500">
                        2 failures × $8,000 = $16,000
                      </TableCell>
                      <TableCell className="bg-green-50 text-green-700">
                        0.3 failures × $8,000 = $2,400
                      </TableCell>
                      <TableCell className="text-right font-bold text-slate-900">$13,600</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Sprayer/Application Issues</TableCell>
                      <TableCell className="text-slate-500">4 repairs × $3,000 = $12,000</TableCell>
                      <TableCell className="bg-green-50 text-green-700">
                        0.8 repairs × $3,000 = $2,400
                      </TableCell>
                      <TableCell className="text-right font-bold text-slate-900">$9,600</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Off-Season Repairs</TableCell>
                      <TableCell className="text-slate-500">6 repairs × $2,500 = $15,000</TableCell>
                      <TableCell className="bg-green-50 text-green-700">
                        1.5 repairs × $2,500 = $3,750
                      </TableCell>
                      <TableCell className="text-right font-bold text-slate-900">$11,250</TableCell>
                    </TableRow>
                    <TableRow className="bg-slate-50 font-bold">
                      <TableCell>Total Annual Cost</TableCell>
                      <TableCell className="text-red-600">$88,000</TableCell>
                      <TableCell className="bg-green-100 text-green-700">$16,050</TableCell>
                      <TableCell className="text-right text-green-700">$71,950</TableCell>
                    </TableRow>
                    <TableRow className="bg-slate-100/50">
                      <TableCell className="text-right font-medium" colSpan={2}>
                        Complete Farm Protection Investment:
                      </TableCell>
                      <TableCell className="bg-slate-200/50 font-bold text-slate-900">
                        $686
                      </TableCell>
                      <TableCell className="text-right text-slate-400">—</TableCell>
                    </TableRow>
                    <TableRow className="border-t-2 border-primary bg-primary/5">
                      <TableCell className="text-right text-xl font-bold text-primary" colSpan={3}>
                        Net Annual Savings:
                      </TableCell>
                      <TableCell className="text-right text-xl font-bold text-primary">
                        $122,700
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>

              <div className="text-center">
                <div className="mb-6 inline-block rounded-lg border border-yellow-200 bg-yellow-50 px-4 py-2 font-medium text-yellow-800">
                  ROI Timeline: Protection investment recovered with first prevented failure
                </div>
                <div>
                  <Button asChild className="font-bold">
                    <Link href="/contact">
                      Calculate Your Farm&apos;s ROI <ChevronRight className="ml-1 h-4 w-4" />
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
                    1,800-Acre Corn/Soybean Operation: <br />
                    <span className="text-accent">Zero Critical Failures</span>
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <h4 className="mb-2 font-bold text-slate-300">Challenge</h4>
                      <p className="text-slate-400">
                        Family operation experiencing 2-3 critical harvest failures per year,
                        costing $40,000+ annually and requiring emergency custom harvesting
                        services.
                      </p>
                    </div>
                    <div>
                      <h4 className="mb-2 font-bold text-slate-300">Solution</h4>
                      <p className="text-slate-400">
                        Implemented complete EPHA protection program on all equipment during winter
                        maintenance: 2 combines, 4 tractors, planter, sprayer, and grain cart.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-center p-12">
                  <h3 className="mb-8 text-2xl font-bold text-slate-900">
                    Results After 2 Harvest Seasons
                  </h3>

                  <div className="mb-8 space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 text-center text-2xl font-bold text-green-600">0</div>
                      <div className="font-medium text-slate-600">
                        Critical failures during harvest windows
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-16 text-center text-2xl font-bold text-green-600">$67k</div>
                      <div className="font-medium text-slate-600">
                        Estimated savings over two seasons
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-16 text-center text-2xl font-bold text-green-600">100%</div>
                      <div className="font-medium text-slate-600">
                        Harvest completion without custom hiring
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-16 text-center text-2xl font-bold text-green-600">
                        3 hrs
                      </div>
                      <div className="font-medium text-slate-600">
                        Total installation time for entire fleet
                      </div>
                    </div>
                  </div>

                  <blockquote className="border-l-4 border-primary pl-4 italic text-slate-600">
                    &quot;We used to dread every harvest, waiting for something to break. Now our
                    equipment runs like it should. The peace of mind alone is worth it, but the
                    savings are real too.&quot;
                    <footer className="mt-2 font-bold not-italic text-slate-900">
                      — Third-Generation Farm Owner, Iowa
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Equipment Kits */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-4 text-center font-heading text-3xl font-bold text-slate-900">
              Agricultural Equipment Packages
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-slate-600">
              Pre-configured protection kits designed for specific agricultural equipment. Each kit
              includes all protectors needed for complete coverage.
            </p>

            <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
              {equipmentKits.map((kit, i) => (
                <Card
                  className={`border-2 transition-colors ${kit.name === 'Complete Farm Bundle' ? 'border-primary bg-primary/5' : 'border-slate-100 hover:border-primary/50'}`}
                  key={i}
                >
                  <CardHeader
                    className={`border-b pb-4 ${kit.name === 'Complete Farm Bundle' ? 'border-primary/20 bg-primary/10' : 'border-slate-100 bg-slate-50'}`}
                  >
                    <CardTitle
                      className={kit.name === 'Complete Farm Bundle' ? 'text-primary' : ''}
                    >
                      {kit.name}
                    </CardTitle>
                    <CardDescription>{kit.desc}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ul className="mb-6 space-y-2 text-sm">
                      {kit.items.map((item, j) => (
                        <li className="flex gap-2" key={j}>
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" /> {item}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-slate-900">{kit.price}</div>
                      <Button
                        size="sm"
                        variant={kit.name === 'Complete Farm Bundle' ? 'default' : 'outline'}
                      >
                        {kit.name === 'Complete Farm Bundle' ? 'Best Value' : 'Order Kit'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pre-Season Program Timeline */}
        <section className="bg-slate-50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-4 text-center font-heading text-3xl font-bold text-slate-900">
              Pre-Season Protection Program
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-slate-600">
              The best time to protect your equipment is before the season starts. Follow this
              timeline for maximum protection with zero field downtime.
            </p>

            <div className="mx-auto max-w-4xl">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute bottom-0 left-4 top-0 w-0.5 transform bg-primary/20 md:left-1/2 md:-translate-x-1/2" />

                {preSeasonTimeline.map((item, i) => (
                  <div
                    className={`relative mb-8 flex items-start gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                    key={i}
                  >
                    <div
                      className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'} hidden md:block`}
                    >
                      <div className="inline-block max-w-sm rounded-xl border border-slate-100 bg-white p-6 shadow-sm">
                        <div className="mb-2 flex items-center justify-end gap-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span className="font-bold text-primary">{item.month}</span>
                        </div>
                        <h4 className="mb-1 font-bold text-slate-900">{item.task}</h4>
                        <p className="text-sm text-slate-600">{item.desc}</p>
                      </div>
                    </div>

                    {/* Center dot */}
                    <div className="absolute left-4 mt-6 h-4 w-4 transform rounded-full bg-primary ring-4 ring-white md:left-1/2 md:-translate-x-1/2" />

                    <div className="flex-1 pl-12 md:hidden md:pl-0">
                      <div className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm">
                        <div className="mb-2 flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span className="font-bold text-primary">{item.month}</span>
                        </div>
                        <h4 className="mb-1 font-bold text-slate-900">{item.task}</h4>
                        <p className="text-sm text-slate-600">{item.desc}</p>
                      </div>
                    </div>

                    <div className="hidden flex-1 md:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Resources & CTA */}
        <section className="bg-primary py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6 font-heading text-3xl font-bold text-white md:text-4xl">
              Ready to Protect Your Harvest?
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-xl text-white/90">
              Join farmers across the country who&apos;ve eliminated preventable equipment failures
              and protected their most critical operating windows.
            </p>

            <div className="mb-16 flex flex-col justify-center gap-4 md:flex-row">
              <Button
                asChild
                className="h-14 bg-white px-8 text-lg font-bold text-primary hover:bg-slate-100"
                size="lg"
              >
                <Link href="/contact">Get Farm Equipment Quote</Link>
              </Button>
              <Button
                asChild
                className="h-14 border-white px-8 text-lg font-bold text-white hover:bg-white/10"
                size="lg"
                variant="outline"
              >
                <Link href="/contact">Download Equipment Guide</Link>
              </Button>
              <Button
                asChild
                className="h-14 border-white px-8 text-lg font-bold text-white hover:bg-white/10"
                size="lg"
                variant="outline"
              >
                <Link href="/contact">Talk to Ag Specialist</Link>
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
                Trusted by: Family farms | Large-scale operations | Equipment dealers | Co-ops
              </div>
              <div className="flex gap-6">
                <span className="flex items-center gap-2 text-white">
                  <Phone className="h-4 w-4" /> 463-255-9942
                </span>
                <span className="flex items-center gap-2 text-white">
                  <Mail className="h-4 w-4" /> agriculture@epha.com
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
