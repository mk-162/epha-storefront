import {
  AlertTriangle,
  Ambulance,
  Award,
  Building2,
  Bus,
  Calculator,
  CheckCircle2,
  ChevronRight,
  Clock,
  DollarSign,
  Droplets,
  FileText,
  Mail,
  Phone,
  Shield,
  ShieldAlert,
  Snowflake,
  Target,
  Trash2,
  TreePine,
  User,
  Users,
  Video,
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

export default async function MunicipalIndustry({ params }: Props) {
  const { locale } = await params;

  setRequestLocale(locale);

  const painPoints = [
    {
      icon: Snowflake,
      title: 'Extreme Seasonal Demands',
      desc: 'Snow plows and salt spreaders face brutal winter conditions that accelerate equipment wear.',
    },
    {
      icon: Clock,
      title: 'High-Intensity Usage Cycles',
      desc: 'Equipment runs 24/7 during emergencies and critical service periods.',
    },
    {
      icon: ShieldAlert,
      title: 'Critical Service Equipment',
      desc: 'Failure of emergency or essential service vehicles directly impacts public safety.',
    },
    {
      icon: DollarSign,
      title: 'Budget Justification Required',
      desc: 'Every expenditure must demonstrate clear taxpayer value and ROI.',
    },
    {
      icon: Target,
      title: 'Long Equipment Service Life',
      desc: 'Municipal vehicles often serve 10-20 years, requiring extended protection.',
    },
    {
      icon: Users,
      title: 'Public Accountability',
      desc: 'Service failures are highly visible and affect community trust.',
    },
  ];

  const solutions = [
    {
      title: 'Extend Equipment Service Life',
      desc: 'Protect critical systems on vehicles designed for 10-20 year service life, maximizing taxpayer investment.',
    },
    {
      title: 'Maintain Emergency Readiness',
      desc: 'Ensure snow plows, fire apparatus, and emergency vehicles are ready when the public needs them most.',
    },
    {
      title: 'Reduce Maintenance Costs',
      desc: 'Prevent expensive hydraulic and brake system failures that strain municipal maintenance budgets.',
    },
    {
      title: 'Simplify Budget Justification',
      desc: 'Clear ROI documentation makes it easy to justify protection investments to councils and administrators.',
    },
    {
      title: 'Install During Regular PM Service',
      desc: 'No special equipment or extended downtime needed. Protection installs in minutes during routine maintenance.',
    },
  ];

  const applications = [
    {
      icon: Snowflake,
      title: 'Snow Removal Equipment',
      desc: 'Protect plow hydraulics, spreader systems, and salt-exposed components from extreme winter conditions.',
      rec: 'HP6, HP8 (Hi-Vis Orange)',
    },
    {
      icon: Trash2,
      title: 'Refuse Collection Vehicles',
      desc: 'Guard compactor hydraulics, lift arm systems, and brake lines from constant stress and debris.',
      rec: 'HP8, HP10 (Black or Hi-Vis Orange)',
    },
    {
      icon: Ambulance,
      title: 'Emergency Response Vehicles',
      desc: 'Ensure ambulance, fire, and rescue vehicle reliability with protected brake and hydraulic systems.',
      rec: 'HP5, HP6 (Hi-Vis Yellow)',
    },
    {
      icon: Bus,
      title: 'Public Transit Systems',
      desc: 'Protect bus brake systems, door hydraulics, and wheelchair lift components for passenger safety.',
      rec: 'HP6, HP8 (Black)',
    },
    {
      icon: TreePine,
      title: 'Parks & Public Works',
      desc: 'Extend life of mowers, utility vehicles, and maintenance equipment used across municipal properties.',
      rec: 'HP5, HP6 (Black or Hi-Vis Orange)',
    },
    {
      icon: Droplets,
      title: 'Water & Sewer Equipment',
      desc: 'Protect vacuum trucks, jetter systems, and pump equipment from corrosive environments.',
      rec: 'HP8, HP10 (Black)',
    },
  ];

  const rolloutPhases = [
    {
      phase: 'Phase 1',
      title: 'Assessment & Priority Identification',
      desc: 'Inventory fleet, identify highest-risk equipment, and prioritize based on failure history and criticality.',
      duration: '2-4 weeks',
    },
    {
      phase: 'Phase 2',
      title: 'Pilot Program',
      desc: 'Deploy protection on 10-15 high-priority vehicles to validate installation process and track initial results.',
      duration: '30-60 days',
    },
    {
      phase: 'Phase 3',
      title: 'Full Fleet Deployment',
      desc: 'Roll out protection across entire municipal fleet during scheduled PM services.',
      duration: '3-6 months',
    },
    {
      phase: 'Phase 4',
      title: 'Documentation & Reporting',
      desc: 'Track failure rates, maintenance costs, and ROI for budget reporting and council presentations.',
      duration: 'Ongoing',
    },
    {
      phase: 'Phase 5',
      title: 'Annual Review & Optimization',
      desc: 'Evaluate program effectiveness, update protection standards, and plan for new equipment.',
      duration: 'Annual',
    },
  ];

  const equipmentPackages = [
    {
      title: 'Snow Plow Kit',
      price: '$98',
      desc: 'Complete protection for plow hydraulics and salt-exposed systems',
      items: ['4x HP8 (plow hydraulics)', '4x HP6 (spreader lines)', '2x HP10 (bundle protection)'],
    },
    {
      title: 'Refuse Truck Kit',
      price: '$118',
      desc: 'Heavy-duty protection for compactor and lift systems',
      items: [
        '4x HP10 (compactor hydraulics)',
        '4x HP8 (lift arm lines)',
        '2x HP6 (brake assemblies)',
      ],
    },
    {
      title: 'Emergency Vehicle Kit',
      price: '$76',
      desc: 'Critical system protection for response vehicles',
      items: ['4x HP6 (brake systems)', '4x HP5 (fuel and DEF lines)', '2x HP4 (battery cables)'],
    },
    {
      title: 'Public Works Kit',
      price: '$88',
      desc: 'Versatile protection for utility and maintenance vehicles',
      items: ['4x HP6 (hydraulic systems)', '4x HP8 (PTO lines)', '2x HP5 (fuel systems)'],
    },
  ];

  const resources = [
    { icon: FileText, text: 'Download Municipal Fleet Guide' },
    { icon: Calculator, text: 'Budget Planning Calculator' },
    { icon: Video, text: 'Training Videos' },
    { icon: User, text: 'Municipal Account Manager' },
  ];

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-slate-900 py-24 text-white md:py-32">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />

          <div className="container relative mx-auto px-4">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-sm font-semibold uppercase tracking-wider text-accent">
                <Building2 className="h-4 w-4" /> Municipal & Government
              </div>
              <h1 className="mb-6 font-heading text-4xl font-bold tracking-tight md:text-6xl">
                Protect Taxpayer Assets. <br />
                <span className="text-accent">Ensure Public Service Reliability.</span>
              </h1>
              <p className="mb-8 max-w-2xl text-xl leading-relaxed text-slate-300">
                When citizens expect 100% reliability from snow removal, emergency response, and
                essential services, equipment protection isn&apos;t optional—it&apos;s your
                responsibility to taxpayers.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild
                  className="h-14 bg-accent px-8 text-lg font-bold text-slate-900 hover:bg-accent/90"
                  size="lg"
                >
                  <Link href="/contact">Get Municipal Quote</Link>
                </Button>
                <Button
                  asChild
                  className="h-14 border-white px-8 text-lg font-bold text-white hover:bg-white/10"
                  size="lg"
                  variant="outline"
                >
                  <Link href="/contact">Calculate Taxpayer Savings</Link>
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
                  The True Cost of Municipal Equipment Failures
                </h2>
                <p className="mb-8 text-lg text-slate-600">
                  When a snow plow breaks down during a storm or a refuse truck fails mid-route, the
                  costs extend far beyond repairs. Public services stop, citizens complain, and
                  council members start asking questions.
                </p>

                <div className="mb-8 rounded-r-lg border-l-4 border-red-500 bg-red-50 p-6">
                  <h3 className="mb-4 flex items-center gap-2 font-bold text-red-900">
                    <DollarSign className="h-5 w-5" /> Direct Costs Per Incident
                  </h3>
                  <ul className="space-y-2 text-red-800">
                    <li className="flex justify-between border-b border-red-100 pb-1">
                      <span>Emergency repair service</span>
                      <span className="font-bold">$1,500 - $5,000</span>
                    </li>
                    <li className="flex justify-between border-b border-red-100 pb-1">
                      <span>Replacement parts and components</span>
                      <span className="font-bold">$500 - $3,000</span>
                    </li>
                    <li className="flex justify-between border-b border-red-100 pb-1">
                      <span>Towing heavy municipal equipment</span>
                      <span className="font-bold">$500 - $2,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Technician labor (8-16 hrs)</span>
                      <span className="font-bold">$800 - $2,000</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-4 flex items-center gap-2 font-bold text-slate-900">
                    <ShieldAlert className="h-5 w-5 text-orange-500" /> Public Impact Costs
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      'Delayed snow removal',
                      'Missed refuse collection',
                      'Emergency response delays',
                      'Citizen complaints',
                      'Council scrutiny',
                      'Media attention',
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
                  <div className="text-5xl font-bold text-slate-900">$5,000 - $25,000+</div>
                  <div className="mt-2 font-medium text-red-500">
                    For a single equipment failure
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
                    <div className="mb-2 flex items-center gap-4">
                      <div className="rounded-lg bg-slate-100 p-2 font-bold text-slate-600">
                        100%
                      </div>
                      <h4 className="font-bold text-slate-900">Public Reliability Expected</h4>
                    </div>
                    <p className="pl-14 text-sm text-slate-500">
                      Citizens expect essential services to work every time, without exception.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
                    <div className="mb-2 flex items-center gap-4">
                      <div className="rounded-lg bg-slate-100 p-2 font-bold text-slate-600">
                        10-20yr
                      </div>
                      <h4 className="font-bold text-slate-900">Equipment Service Life</h4>
                    </div>
                    <p className="pl-14 text-sm text-slate-500">
                      Municipal vehicles must perform reliably for decades to justify taxpayer
                      investment.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
                    <div className="mb-2 flex items-center gap-4">
                      <AlertTriangle className="h-10 w-10 rounded-lg bg-red-100 p-2 text-red-600" />
                      <h4 className="font-bold text-slate-900">Critical Service Impact</h4>
                    </div>
                    <p className="pl-14 text-sm text-slate-500">
                      Equipment failures during emergencies can endanger public safety.
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
              Challenges Municipal Fleet Managers Face
            </h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                EPHA Solution for Municipal Operations
              </h2>
              <p className="text-lg text-slate-600">
                Purpose-built protection that extends equipment life, ensures service reliability,
                and delivers clear taxpayer value.
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
              Municipal Fleet Applications
            </h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {applications.map((app, i) => (
                <Card
                  className="border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10"
                  key={i}
                >
                  <CardHeader>
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20 text-accent">
                      <app.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg text-accent">{app.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 h-16 text-slate-300">{app.desc}</p>
                    <div className="rounded border border-white/10 bg-white/5 p-3 text-sm font-bold text-white/80">
                      Recommended: <span className="text-white">{app.rec}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Taxpayer Value Calculation */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <div className="mb-10 text-center">
                <h2 className="mb-4 font-heading text-3xl font-bold text-slate-900">
                  Taxpayer Value Calculation
                </h2>
                <p className="text-lg text-slate-600">Example: 80-Vehicle Municipal Fleet</p>
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
                      <TableCell className="font-medium">Equipment Failures (4/vehicle)</TableCell>
                      <TableCell className="text-slate-500">320 x $3,500 = $1,120,000</TableCell>
                      <TableCell className="bg-green-50 text-green-700">
                        64 x $3,500 = $224,000
                      </TableCell>
                      <TableCell className="text-right font-bold text-slate-900">
                        $896,000
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Emergency Service Calls</TableCell>
                      <TableCell className="text-slate-500">320 x $1,200 = $384,000</TableCell>
                      <TableCell className="bg-green-50 text-green-700">
                        64 x $1,200 = $76,800
                      </TableCell>
                      <TableCell className="text-right font-bold text-slate-900">
                        $307,200
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Service Disruption Costs</TableCell>
                      <TableCell className="text-slate-500">Significant public impact</TableCell>
                      <TableCell className="bg-green-50 text-green-700">
                        Minimal disruption
                      </TableCell>
                      <TableCell className="text-right font-bold text-slate-900">
                        Immeasurable
                      </TableCell>
                    </TableRow>
                    <TableRow className="bg-slate-50 font-bold">
                      <TableCell>Total Annual Cost</TableCell>
                      <TableCell className="text-red-600">$1,504,000</TableCell>
                      <TableCell className="bg-green-100 text-green-700">$300,800</TableCell>
                      <TableCell className="text-right text-green-700">$1,203,200</TableCell>
                    </TableRow>
                    <TableRow className="bg-slate-100/50">
                      <TableCell className="text-right font-medium" colSpan={2}>
                        Protection Investment (80 vehicles):
                      </TableCell>
                      <TableCell className="bg-slate-200/50 font-bold text-slate-900">
                        $36,000
                      </TableCell>
                      <TableCell className="text-right text-slate-400">-</TableCell>
                    </TableRow>
                    <TableRow className="border-t-2 border-primary bg-primary/5">
                      <TableCell className="text-right text-xl font-bold text-primary" colSpan={3}>
                        Net Taxpayer Savings:
                      </TableCell>
                      <TableCell className="text-right text-xl font-bold text-primary">
                        $1,167,200
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>

              <div className="text-center">
                <div className="mb-6 inline-block rounded-lg border border-yellow-200 bg-yellow-50 px-4 py-2 font-medium text-yellow-800">
                  ROI Timeline: Protection investment recovered within first budget quarter
                </div>
                <div>
                  <Button asChild className="font-bold">
                    <Link href="/contact">
                      Calculate Your Municipality&apos;s Savings{' '}
                      <ChevronRight className="ml-1 h-4 w-4" />
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
                    County Public Works: <br />
                    <span className="text-accent">$890K Annual Savings</span>
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <h4 className="mb-2 font-bold text-slate-300">Challenge</h4>
                      <p className="text-slate-400">
                        A county public works department with 95 vehicles faced recurring hydraulic
                        and brake failures, especially during winter operations. Annual maintenance
                        costs exceeded $1.2M with frequent service disruptions.
                      </p>
                    </div>
                    <div>
                      <h4 className="mb-2 font-bold text-slate-300">Solution</h4>
                      <p className="text-slate-400">
                        Implemented comprehensive EPHA protection program on all snow removal,
                        refuse, and utility vehicles during scheduled maintenance cycles.
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
                      <div className="w-16 text-center text-2xl font-bold text-green-600">78%</div>
                      <div className="font-medium text-slate-600">
                        Reduction in hydraulic system failures
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-16 text-center text-2xl font-bold text-green-600">
                        $890k
                      </div>
                      <div className="font-medium text-slate-600">
                        Annual savings in maintenance and downtime costs
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-16 text-center text-2xl font-bold text-green-600">0</div>
                      <div className="font-medium text-slate-600">
                        Snow removal delays due to equipment failure
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-16 text-center text-2xl font-bold text-green-600">42d</div>
                      <div className="font-medium text-slate-600">Investment payback period</div>
                    </div>
                  </div>

                  <blockquote className="border-l-4 border-primary pl-4 italic text-slate-600">
                    &quot;We presented the ROI to the county board and received unanimous approval.
                    The protection program paid for itself before the first snow season ended.&quot;
                    <footer className="mt-2 font-bold not-italic text-slate-900">
                      - Public Works Director
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Municipal Fleet Protection Program Rollout */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12 text-center">
                <h2 className="mb-4 font-heading text-3xl font-bold text-slate-900">
                  Municipal Fleet Protection Program Rollout
                </h2>
                <p className="text-lg text-slate-600">
                  A proven implementation framework for government fleet operations
                </p>
              </div>

              <div className="space-y-6">
                {rolloutPhases.map((phase, i) => (
                  <div className="flex items-start gap-6" key={i}>
                    <div className="w-24 shrink-0 text-center">
                      <div className="mb-1 rounded-full bg-primary px-3 py-1 text-sm font-bold text-white">
                        {phase.phase}
                      </div>
                      <div className="text-xs text-slate-500">{phase.duration}</div>
                    </div>
                    <div className="flex-1 rounded-xl border border-slate-100 bg-slate-50 p-6">
                      <h3 className="mb-2 font-bold text-slate-900">{phase.title}</h3>
                      <p className="text-sm text-slate-600">{phase.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Equipment Packages */}
        <section className="bg-slate-50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center font-heading text-3xl font-bold text-slate-900">
              Municipal Equipment Packages
            </h2>
            <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
              {equipmentPackages.map((pkg, i) => (
                <Card
                  className="border-2 border-slate-100 transition-colors hover:border-primary/50"
                  key={i}
                >
                  <CardHeader className="border-b border-slate-200 bg-slate-100 pb-4">
                    <CardTitle className="text-lg">{pkg.title}</CardTitle>
                    <CardDescription>{pkg.desc}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ul className="mb-6 space-y-2 text-sm">
                      {pkg.items.map((item, j) => (
                        <li className="flex gap-2" key={j}>
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-slate-900">
                        {pkg.price}{' '}
                        <span className="text-sm font-normal text-slate-500">/ vehicle</span>
                      </div>
                    </div>
                    <Button className="mt-4 w-full" size="sm" variant="outline">
                      Order Package
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Procurement & Contract Support */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12 text-center">
                <h2 className="mb-4 font-heading text-3xl font-bold text-slate-900">
                  Procurement & Contract Support
                </h2>
                <p className="text-lg text-slate-600">
                  We understand government purchasing requirements and make procurement simple.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-3">
                <div className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <FileText className="h-8 w-8" />
                  </div>
                  <h3 className="mb-2 font-bold text-slate-900">Cooperative Contracts</h3>
                  <p className="text-sm text-slate-600">
                    Available through major cooperative purchasing programs for streamlined
                    procurement.
                  </p>
                </div>
                <div className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Shield className="h-8 w-8" />
                  </div>
                  <h3 className="mb-2 font-bold text-slate-900">Compliance Documentation</h3>
                  <p className="text-sm text-slate-600">
                    Full documentation packages for safety compliance, specifications, and budget
                    justification.
                  </p>
                </div>
                <div className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Award className="h-8 w-8" />
                  </div>
                  <h3 className="mb-2 font-bold text-slate-900">ROI Reporting</h3>
                  <p className="text-sm text-slate-600">
                    Detailed tracking and reporting tools to demonstrate value to councils and
                    administrators.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resources & CTA */}
        <section className="bg-primary py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6 font-heading text-3xl font-bold text-white md:text-4xl">
              Ready to Protect Taxpayer Investments?
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-xl text-white/90">
              Join municipalities across the country that have reduced equipment failures, cut
              maintenance costs, and improved service reliability with EPHA protection.
            </p>

            <div className="mb-16 flex flex-col justify-center gap-4 md:flex-row">
              <Button
                asChild
                className="h-14 bg-white px-8 text-lg font-bold text-primary hover:bg-slate-100"
                size="lg"
              >
                <Link href="/contact">Get Municipal Quote</Link>
              </Button>
              <Button
                asChild
                className="h-14 border-white px-8 text-lg font-bold text-white hover:bg-white/10"
                size="lg"
                variant="outline"
              >
                <Link href="/contact">Download Budget Guide</Link>
              </Button>
              <Button
                asChild
                className="h-14 border-white px-8 text-lg font-bold text-white hover:bg-white/10"
                size="lg"
                variant="outline"
              >
                <Link href="/contact">Talk to Municipal Specialist</Link>
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
                Trusted by: County public works | City maintenance departments | Transit authorities
              </div>
              <div className="flex gap-6">
                <span className="flex items-center gap-2 text-white">
                  <Phone className="h-4 w-4" /> 463-255-9942
                </span>
                <span className="flex items-center gap-2 text-white">
                  <Mail className="h-4 w-4" /> municipal@epha.com
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
