import {
  AlertTriangle,
  Calculator,
  CheckCircle2,
  ChevronRight,
  DollarSign,
  FileText,
  Gauge,
  Hammer,
  HardHat,
  Mail,
  Phone,
  Route,
  ShieldAlert,
  Thermometer,
  User,
  Video,
} from 'lucide-react';
import { setRequestLocale } from 'next-intl/server';

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

export default async function ConstructionIndustry({ params }: Props) {
  const { locale } = await params;

  setRequestLocale(locale);

  const painPoints = [
    {
      icon: Hammer,
      title: 'Extreme Abrasion',
      desc: 'Hoses constantly rubbing against steel, rock, and concrete debris.',
    },
    {
      icon: Thermometer,
      title: 'Temperature Extremes',
      desc: 'From freezing job sites to engine compartment heat exceeding 200°F.',
    },
    {
      icon: Gauge,
      title: 'High-Pressure Flex',
      desc: 'Continuous hydraulic cycling under 3,000-5,000 PSI working pressure.',
    },
    {
      icon: Route,
      title: 'Complex Routing',
      desc: 'Tight bends and multiple contact points on articulating equipment.',
    },
    {
      icon: ShieldAlert,
      title: 'Safety Hazards',
      desc: 'Catastrophic failures create injury risks and OSHA violations.',
    },
  ];

  const solutions = [
    {
      title: 'Withstand Jobsite Abuse',
      desc: 'Proprietary material resists abrasion from steel, rock, and concrete while handling temperatures from -40°F to 430°F.',
    },
    {
      title: 'Rapid Installation, Zero Downtime',
      desc: '4-step spiral wrap installation takes minutes per hose—install during shift changes or brief pauses.',
    },
    {
      title: 'Extend Hose Life 3-5x',
      desc: 'Protection at critical wear points dramatically extends the service life of expensive hydraulic assemblies.',
    },
    {
      title: 'High-Visibility Safety Colors',
      desc: 'Orange and yellow options make protected areas visible during inspections and improve safety compliance.',
    },
    {
      title: 'Reduce Inventory Complexity',
      desc: 'Standardized protection program across all equipment simplifies maintenance planning and parts stocking.',
    },
  ];

  const applications = [
    {
      title: 'Excavator Boom Assemblies',
      desc: 'Protect hydraulic lines running along boom, stick, and bucket linkages from abrasion.',
      rec: 'HP8, HP10 (Black or Hi-Vis Orange)',
    },
    {
      title: 'Loader & Backhoe Systems',
      desc: 'Guard bucket cylinder lines, steering hoses, and transmission cooler connections.',
      rec: 'HP6, HP8 (Hi-Vis Yellow)',
    },
    {
      title: 'Crane Hydraulics',
      desc: 'Shield outrigger lines, boom extension hoses, and winch hydraulics from wear.',
      rec: 'HP8, HP10 (Hi-Vis Orange)',
    },
    {
      title: 'Demolition Equipment',
      desc: 'Extreme protection for breaker lines, shear hoses, and crusher hydraulics.',
      rec: 'HP10, HP12 (Black)',
    },
    {
      title: 'Multi-Hose Bundle Wraps',
      desc: 'Consolidate and protect multiple hydraulic lines running through articulation points.',
      rec: 'HP12, HP14 (Black or Hi-Vis Orange)',
    },
    {
      title: 'Auxiliary Attachment Lines',
      desc: 'Quick-connect lines for hammers, grapples, thumbs, and specialty attachments.',
      rec: 'HP6, HP8 (Hi-Vis Yellow)',
    },
  ];

  const resources = [
    { icon: FileText, text: 'Download Construction Guide' },
    { icon: Calculator, text: 'ROI Calculator' },
    { icon: Video, text: 'Installation Videos' },
    { icon: User, text: 'Equipment Specialist' },
  ];

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-slate-900 py-24 text-white md:py-32">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2076&auto=format&fit=crop')] bg-cover bg-center opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />

          <div className="container relative mx-auto px-4">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-sm font-semibold uppercase tracking-wider text-accent">
                <HardHat className="h-4 w-4" /> Construction & Heavy Equipment
              </div>
              <h1 className="mb-6 font-heading text-4xl font-bold tracking-tight md:text-6xl">
                Keep Equipment Running. <br />
                <span className="text-accent">Eliminate Hydraulic Failures.</span>
              </h1>
              <p className="mb-8 max-w-2xl text-xl leading-relaxed text-slate-300">
                When a blown hydraulic line costs $5,000-$50,000 per incident in repairs and lost
                productivity, hose protection isn&apos;t maintenance—it&apos;s project
                profitability.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  className="h-14 bg-accent px-8 text-lg font-bold text-slate-900 hover:bg-accent/90"
                  size="lg"
                >
                  Get Equipment Quote
                </Button>
                <Button
                  className="h-14 border-white px-8 text-lg font-bold text-white hover:bg-white/10"
                  size="lg"
                  variant="outline"
                >
                  Calculate Savings
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
                  The Real Cost of Construction Hose Failures
                </h2>
                <p className="mb-8 text-lg text-slate-600">
                  Every contractor knows the pain: An excavator goes down mid-dig, and suddenly
                  you&apos;re watching thousands disappear while crews stand idle.
                </p>

                <div className="mb-8 rounded-r-lg border-l-4 border-red-500 bg-red-50 p-6">
                  <h3 className="mb-4 flex items-center gap-2 font-bold text-red-900">
                    <DollarSign className="h-5 w-5" /> Direct Costs
                  </h3>
                  <ul className="space-y-2 text-red-800">
                    <li className="flex justify-between border-b border-red-100 pb-1">
                      <span>Emergency field service call</span>
                      <span className="font-bold">$1,500 - $5,000</span>
                    </li>
                    <li className="flex justify-between border-b border-red-100 pb-1">
                      <span>Hydraulic hose and fittings</span>
                      <span className="font-bold">$500 - $2,500</span>
                    </li>
                    <li className="flex justify-between border-b border-red-100 pb-1">
                      <span>Hydraulic fluid replacement</span>
                      <span className="font-bold">$300 - $1,200</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Equipment transport if needed</span>
                      <span className="font-bold">$800 - $3,000</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-4 flex items-center gap-2 font-bold text-slate-900">
                    <ShieldAlert className="h-5 w-5 text-orange-500" /> Indirect Costs
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      'Crew downtime wages',
                      'Project schedule delays',
                      'Liquidated damages',
                      'Rental equipment costs',
                      'Environmental cleanup',
                      'OSHA incident reports',
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
                  <div className="text-5xl font-bold text-slate-900">$5,000 - $50,000+</div>
                  <div className="mt-2 font-medium text-red-500">
                    For a single hydraulic failure
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
                    <div className="mb-2 flex items-center gap-4">
                      <div className="rounded-lg bg-slate-100 p-2 font-bold text-slate-600">
                        6-12
                      </div>
                      <h4 className="font-bold text-slate-900">Hose Failures Per Machine/Year</h4>
                    </div>
                    <p className="pl-14 text-sm text-slate-500">
                      Average for excavators in demanding applications.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
                    <div className="mb-2 flex items-center gap-4">
                      <div className="rounded-lg bg-slate-100 p-2 font-bold text-slate-600">
                        80%
                      </div>
                      <h4 className="font-bold text-slate-900">Failures Are Preventable</h4>
                    </div>
                    <p className="pl-14 text-sm text-slate-500">
                      Most failures occur at abrasion and flex points.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
                    <div className="mb-2 flex items-center gap-4">
                      <AlertTriangle className="h-10 w-10 rounded-lg bg-red-100 p-2 text-red-600" />
                      <h4 className="font-bold text-slate-900">Critical Safety Risks</h4>
                    </div>
                    <p className="pl-14 text-sm text-slate-500">
                      High-pressure injection injuries and fire hazards.
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
              What Construction Teams Face Daily
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
                Protection Engineered for Heavy Equipment
              </h2>
              <p className="text-lg text-slate-600">
                EPHA Hose Protectors deliver exactly what construction demands: extreme durability,
                fast installation, proven ROI.
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
              Where Contractors Deploy EPHA Protection
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
                  Calculate Your Equipment&apos;s Protection ROI
                </h2>
                <p className="text-lg text-slate-600">
                  Example: 10-Machine Fleet (Excavators &amp; Loaders)
                </p>
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
                      <TableCell className="font-medium">Hose Failures (8/machine)</TableCell>
                      <TableCell className="text-slate-500">80 x $3,500 = $280,000</TableCell>
                      <TableCell className="bg-green-50 text-green-700">
                        8 x $3,500 = $28,000
                      </TableCell>
                      <TableCell className="text-right font-bold text-slate-900">
                        $252,000
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Crew Downtime</TableCell>
                      <TableCell className="text-slate-500">320 hrs x $450 = $144,000</TableCell>
                      <TableCell className="bg-green-50 text-green-700">
                        32 hrs x $450 = $14,400
                      </TableCell>
                      <TableCell className="text-right font-bold text-slate-900">
                        $129,600
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Project Delays</TableCell>
                      <TableCell className="text-slate-500">
                        Est. schedule impact = $75,000
                      </TableCell>
                      <TableCell className="bg-green-50 text-green-700">Minimal = $7,500</TableCell>
                      <TableCell className="text-right font-bold text-slate-900">$67,500</TableCell>
                    </TableRow>
                    <TableRow className="bg-slate-50 font-bold">
                      <TableCell>Total Annual Cost</TableCell>
                      <TableCell className="text-red-600">$499,000</TableCell>
                      <TableCell className="bg-green-100 text-green-700">$49,900</TableCell>
                      <TableCell className="text-right text-green-700">$449,100</TableCell>
                    </TableRow>
                    <TableRow className="bg-slate-100/50">
                      <TableCell className="text-right font-medium" colSpan={2}>
                        Protection Investment (10 machines):
                      </TableCell>
                      <TableCell className="bg-slate-200/50 font-bold text-slate-900">
                        $1,420
                      </TableCell>
                      <TableCell className="text-right text-slate-400">-</TableCell>
                    </TableRow>
                    <TableRow className="border-t-2 border-primary bg-primary/5">
                      <TableCell className="text-right text-xl font-bold text-primary" colSpan={3}>
                        Net ROI:
                      </TableCell>
                      <TableCell className="text-right text-xl font-bold text-primary">
                        $447,680
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>

              <div className="text-center">
                <div className="mb-6 inline-block rounded-lg border border-yellow-200 bg-yellow-50 px-4 py-2 font-medium text-yellow-800">
                  ROI Timeline: Protection investment recovered after first prevented failure
                </div>
                <div>
                  <Button className="font-bold">
                    Calculate Your Equipment&apos;s ROI <ChevronRight className="ml-1 h-4 w-4" />
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
                    Heavy Civil Contractor: <br />
                    <span className="text-accent">92% Failure Reduction</span>
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <h4 className="mb-2 font-bold text-slate-300">Challenge</h4>
                      <p className="text-slate-400">
                        Averaging 10+ hydraulic failures per excavator annually on a major
                        infrastructure project, causing schedule delays and cost overruns.
                      </p>
                    </div>
                    <div>
                      <h4 className="mb-2 font-bold text-slate-300">Solution</h4>
                      <p className="text-slate-400">
                        Implemented EPHA protection on all boom, stick, and bucket hydraulics during
                        scheduled service intervals.
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
                      <div className="w-16 text-center text-2xl font-bold text-green-600">92%</div>
                      <div className="font-medium text-slate-600">
                        Reduction in hydraulic failures (10.2 to 0.8 per machine)
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-16 text-center text-2xl font-bold text-green-600">
                        $328k
                      </div>
                      <div className="font-medium text-slate-600">
                        Savings in repair and downtime costs
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-16 text-center text-2xl font-bold text-green-600">
                        2,400
                      </div>
                      <div className="font-medium text-slate-600">
                        Additional productive hours recovered
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-16 text-center text-2xl font-bold text-green-600">14d</div>
                      <div className="font-medium text-slate-600">Investment payback period</div>
                    </div>
                  </div>

                  <blockquote className="border-l-4 border-primary pl-4 italic text-slate-600">
                    &quot;We used to budget for constant hose failures. Now our machines run the
                    entire project without a single hydraulic incident. The ROI is undeniable.&quot;
                    <footer className="mt-2 font-bold not-italic text-slate-900">
                      - Equipment Manager, Heavy Civil Contractor
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Equipment Packages */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center font-heading text-3xl font-bold text-slate-900">
              Recommended Equipment Packages
            </h2>
            <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
              <Card className="border-2 border-slate-100 transition-colors hover:border-primary/50">
                <CardHeader className="border-b border-slate-100 bg-slate-50 pb-4">
                  <CardTitle>Compact Excavator Kit</CardTitle>
                  <CardDescription>Mini &amp; Compact Excavators (0-10 ton)</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="mb-6 space-y-2 text-sm">
                    <li className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600" /> 4x HP6 (boom/stick
                      cylinders)
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600" /> 2x HP8 (bucket
                      cylinder lines)
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600" /> 2x HP5 (auxiliary
                      lines)
                    </li>
                  </ul>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-slate-900">
                      $92 <span className="text-sm font-normal text-slate-500">/ machine</span>
                    </div>
                    <Button size="sm" variant="outline">
                      Order Kit
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-slate-100 transition-colors hover:border-primary/50">
                <CardHeader className="border-b border-slate-100 bg-slate-50 pb-4">
                  <CardTitle>Standard Excavator Kit</CardTitle>
                  <CardDescription>Medium &amp; Large Excavators (10-50 ton)</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="mb-6 space-y-2 text-sm">
                    <li className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600" /> 6x HP8
                      (boom/stick/bucket lines)
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600" /> 4x HP10 (main
                      hydraulic runs)
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600" /> 2x HP12 (bundle
                      protection)
                    </li>
                  </ul>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-slate-900">
                      $142 <span className="text-sm font-normal text-slate-500">/ machine</span>
                    </div>
                    <Button size="sm" variant="outline">
                      Order Kit
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
              Ready to Eliminate Equipment Downtime?
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-xl text-white/90">
              Join hundreds of contractors who&apos;ve eliminated preventable hydraulic failures and
              recovered their investment after the first prevented incident.
            </p>

            <div className="mb-16 flex flex-col justify-center gap-4 md:flex-row">
              <Button
                className="h-14 bg-white px-8 text-lg font-bold text-primary hover:bg-slate-100"
                size="lg"
              >
                Get Equipment Quote
              </Button>
              <Button
                className="h-14 border-white px-8 text-lg font-bold text-white hover:bg-white/10"
                size="lg"
                variant="outline"
              >
                Download Guide
              </Button>
              <Button
                className="h-14 border-white px-8 text-lg font-bold text-white hover:bg-white/10"
                size="lg"
                variant="outline"
              >
                Talk to Equipment Specialist
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
                Trusted by: Heavy civil contractors | Demolition companies | Equipment rental fleets
              </div>
              <div className="flex gap-6">
                <span className="flex items-center gap-2 text-white">
                  <Phone className="h-4 w-4" /> 463-255-9942
                </span>
                <span className="flex items-center gap-2 text-white">
                  <Mail className="h-4 w-4" /> construction@epha.com
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
