import { setRequestLocale } from 'next-intl/server';
import { Button } from "~/components/ui/button";
import {
  Truck,
  AlertTriangle,
  DollarSign,
  ShieldAlert,
  CheckCircle2,
  Wind,
  Droplets,
  FileText,
  Calculator,
  Video,
  User,
  Phone,
  Mail,
  ChevronRight
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "~/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function FleetIndustry({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const painPoints = [
    { icon: AlertTriangle, title: "Constant Vibration", desc: "Relentless wear on unprotected lines rubbing against frames." },
    { icon: Wind, title: "Extreme Weather", desc: "From -20°F to 120°F, temp cycling degrades rubber faster." },
    { icon: Droplets, title: "Multiple Failure Points", desc: "Dozens of vulnerable lines: hydraulic, air, fuel, DEF." },
    { icon: FileText, title: "Regulatory Pressure", desc: "DOT inspections mean any leak can sideline vehicles." },
    { icon: DollarSign, title: "Budget Constraints", desc: "Must maximize uptime while controlling maintenance costs." }
  ];

  const solutions = [
    { title: "Install Without Vehicle Downtime", desc: "4-step installation takes 5 minutes per location—no lift time required, no vehicle disassembly." },
    { title: "Withstand Highway Conditions", desc: "Proprietary material handles constant vibration, temperature extremes (-40°F to 430°F), and chemical exposure." },
    { title: "Protect Critical Safety Systems", desc: "Guard brake lines, air brake assemblies, ABS sensors, and fuel systems against failures." },
    { title: "High-Visibility Options", desc: "Orange and yellow colors make inspections easier and demonstrate proactive maintenance." },
    { title: "Scale Across Fleet", desc: "Standardized protection program across all vehicles reduces inventory complexity." }
  ];

  const applications = [
    { title: "Hydraulic Brake Systems", desc: "Protect master cylinder lines, wheel cylinder assemblies, and ABS connections.", rec: "HP5, HP6 (Black or Hi-Vis Yellow)" },
    { title: "Air Brake Lines", desc: "Shield pneumatic lines running along chassis rails from vibration damage.", rec: "HP6, HP8 (Hi-Vis Orange)" },
    { title: "Fuel System Protection", desc: "Guard fuel lines, DEF lines, and return lines from abrasion at mounting points.", rec: "HP5, HP6 (Black)" },
    { title: "Battery Cable Guards", desc: "Prevent shorts and fire hazards from battery cable chafing against metal chassis.", rec: "HP4, HP5 (Black or Hi-Vis Yellow)" },
    { title: "Multi-Line Bundle Wraps", desc: "Consolidate and protect multiple lines running together along frame rails.", rec: "HP10, HP12 (Black or Hi-Vis Orange)" },
    { title: "Transmission Cooler Lines", desc: "Protect vulnerable cooler lines from road debris impact and vibration wear.", rec: "HP6, HP8 (Black)" }
  ];

  const resources = [
    { icon: FileText, text: "Download Fleet Protection Guide" },
    { icon: Calculator, text: "ROI Calculator" },
    { icon: Video, text: "Training Videos" },
    { icon: User, text: "Fleet Account Manager" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <main>
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-slate-900 text-white">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />

          <div className="container relative mx-auto px-4">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 text-sm font-semibold mb-6 uppercase tracking-wider">
                <Truck className="h-4 w-4" /> Fleet & Transportation
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 tracking-tight">
                Keep Your Fleet Moving. <br />
                <span className="text-accent">Eliminate Costly Roadside Failures.</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                When every vehicle off the road costs hundreds per hour in lost revenue and customer dissatisfaction, hydraulic and fuel line protection isn&apos;t optional—it&apos;s essential fleet management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-accent text-slate-900 hover:bg-accent/90 font-bold text-lg h-14 px-8">
                  Get Fleet Quote
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold text-lg h-14 px-8">
                  Calculate ROI
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* The Challenge Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold font-heading mb-6 text-slate-900">The Hidden Costs of Fleet Hose Failures</h2>
                <p className="text-lg text-slate-600 mb-8">
                  Every fleet manager knows the nightmare: A driver calls from the roadside with a hydraulic leak. What follows is a cascade of costs.
                </p>

                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-8">
                  <h3 className="font-bold text-red-900 mb-4 flex items-center gap-2">
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
                  <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <ShieldAlert className="h-5 w-5 text-orange-500" /> Indirect Costs
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {["Missed deliveries", "Driver downtime wages", "Expedited parts shipping", "Damage to customer relationships", "Safety violations", "Potential fines"].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                        <div className="h-1.5 w-1.5 rounded-full bg-orange-400" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <div className="text-center mb-8">
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">Total Impact Per Incident</div>
                  <div className="text-5xl font-bold text-slate-900">$5,000 - $15,000+</div>
                  <div className="text-red-500 font-medium mt-2">For a single vehicle failure</div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="p-2 bg-slate-100 rounded-lg text-slate-600 font-bold">3-5</div>
                      <h4 className="font-bold text-slate-900">Preventable Failures Per Year</h4>
                    </div>
                    <p className="text-sm text-slate-500 pl-14">Average fleet experience per vehicle annually.</p>
                  </div>

                  <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="p-2 bg-slate-100 rounded-lg text-slate-600 font-bold">3-5x</div>
                      <h4 className="font-bold text-slate-900">Faster Failure Rate</h4>
                    </div>
                    <p className="text-sm text-slate-500 pl-14">Unprotected hoses fail faster in vibration environments.</p>
                  </div>

                  <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                    <div className="flex items-center gap-4 mb-2">
                      <AlertTriangle className="h-10 w-10 p-2 bg-red-100 text-red-600 rounded-lg" />
                      <h4 className="font-bold text-slate-900">Critical Safety Hazards</h4>
                    </div>
                    <p className="text-sm text-slate-500 pl-14">Brake line failures create immediate safety risks and violations.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-heading mb-12 text-center text-slate-900">What Fleet Managers Face Daily</h2>

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              {painPoints.map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:border-primary/20 transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EPHA Solution */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold font-heading mb-4 text-slate-900">Protection Engineered for Fleet Operations</h2>
              <p className="text-lg text-slate-600">
                EPHA Hose Protectors deliver exactly what fleet maintenance demands: fast installation, proven durability, measurable ROI.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {solutions.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="shrink-0 mt-1">
                    <CheckCircle2 className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-1">{item.title}</h3>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-heading mb-12 text-center">Where Fleet Managers Deploy EPHA Protection</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {applications.map((app, i) => (
                <Card key={i} className="bg-white/5 border-white/10 text-white hover:bg-white/10 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-lg text-accent">{app.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 mb-4 h-12">{app.desc}</p>
                    <div className="text-sm font-bold text-white/80 bg-white/5 p-3 rounded border border-white/10">
                      Recommended: <span className="text-white">{app.rec}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ROI Calculator */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold font-heading mb-4 text-slate-900">Calculate Your Fleet&apos;s Protection ROI</h2>
                <p className="text-lg text-slate-600">Example: 50-Vehicle Fleet</p>
              </div>

              <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm mb-8">
                <Table>
                  <TableHeader className="bg-slate-50">
                    <TableRow>
                      <TableHead className="w-[200px] font-bold text-slate-900">Cost Category</TableHead>
                      <TableHead className="font-bold text-slate-900">Without Protection</TableHead>
                      <TableHead className="font-bold text-slate-900 text-green-700 bg-green-50">With EPHA Protection</TableHead>
                      <TableHead className="font-bold text-slate-900 text-right">Annual Savings</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Hose Failures (3/vehicle)</TableCell>
                      <TableCell className="text-slate-500">150 × $2,000 = $300,000</TableCell>
                      <TableCell className="text-green-700 bg-green-50">30 × $2,000 = $60,000</TableCell>
                      <TableCell className="text-right font-bold text-slate-900">$240,000</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Emergency Service</TableCell>
                      <TableCell className="text-slate-500">150 × $800 = $120,000</TableCell>
                      <TableCell className="text-green-700 bg-green-50">30 × $800 = $24,000</TableCell>
                      <TableCell className="text-right font-bold text-slate-900">$96,000</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Downtime Hours</TableCell>
                      <TableCell className="text-slate-500">600 × $150 = $90,000</TableCell>
                      <TableCell className="text-green-700 bg-green-50">120 × $150 = $18,000</TableCell>
                      <TableCell className="text-right font-bold text-slate-900">$72,000</TableCell>
                    </TableRow>
                    <TableRow className="bg-slate-50 font-bold">
                      <TableCell>Total Annual Cost</TableCell>
                      <TableCell className="text-red-600">$510,000</TableCell>
                      <TableCell className="text-green-700 bg-green-100">$102,000</TableCell>
                      <TableCell className="text-right text-green-700">$408,000</TableCell>
                    </TableRow>
                    <TableRow className="bg-slate-100/50">
                      <TableCell colSpan={2} className="text-right font-medium">Protection Investment (50 vehicles):</TableCell>
                      <TableCell className="font-bold text-slate-900 bg-slate-200/50">$7,500</TableCell>
                      <TableCell className="text-right text-slate-400">—</TableCell>
                    </TableRow>
                    <TableRow className="bg-primary/5 border-t-2 border-primary">
                      <TableCell colSpan={3} className="text-right font-bold text-xl text-primary">Net ROI:</TableCell>
                      <TableCell className="text-right font-bold text-xl text-primary">$400,500</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>

              <div className="text-center">
                <div className="inline-block bg-yellow-50 text-yellow-800 px-4 py-2 rounded-lg font-medium mb-6 border border-yellow-200">
                  ROI Timeline: Protection investment recovered in first 2-3 prevented failures
                </div>
                <div>
                  <Button className="font-bold">Calculate Your Fleet&apos;s ROI <ChevronRight className="h-4 w-4 ml-1" /></Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
              <div className="grid md:grid-cols-2">
                <div className="bg-slate-900 p-12 text-white flex flex-col justify-center">
                  <div className="uppercase tracking-widest text-sm font-bold text-accent mb-4">Case Study</div>
                  <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Regional Trucking Company: <br /><span className="text-accent">85% Downtime Reduction</span></h2>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-slate-300 mb-2">Challenge</h4>
                      <p className="text-slate-400">Experiencing 4-5 hydraulic brake line failures per vehicle per year, costing $180,000+ annually.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-300 mb-2">Solution</h4>
                      <p className="text-slate-400">Implemented EPHA protection program during annual PM service on brake systems, air lines, and battery cables.</p>
                    </div>
                  </div>
                </div>

                <div className="p-12 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-slate-900 mb-8">Results After 12 Months</h3>

                  <div className="space-y-6 mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-16 text-center font-bold text-2xl text-green-600">85%</div>
                      <div className="text-slate-600 font-medium">Reduction in brake line failures (4.5 → 0.7 per vehicle)</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-16 text-center font-bold text-2xl text-green-600">$156k</div>
                      <div className="text-slate-600 font-medium">Savings in repair and downtime costs</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-16 text-center font-bold text-2xl text-green-600">0</div>
                      <div className="text-slate-600 font-medium">DOT violations for brake system leaks</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-16 text-center font-bold text-2xl text-green-600">35d</div>
                      <div className="text-slate-600 font-medium">Investment payback period</div>
                    </div>
                  </div>

                  <blockquote className="italic text-slate-600 border-l-4 border-primary pl-4">
                    &quot;The math is simple. A $6 protector prevents a $2,000 failure. We&apos;ve standardized EPHA across the entire fleet.&quot;
                    <footer className="font-bold text-slate-900 mt-2 not-italic">— Fleet Maintenance Director</footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fleet Kits */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-heading mb-8 text-center text-slate-900">Recommended Fleet Kits</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="border-2 border-slate-100 hover:border-primary/50 transition-colors">
                <CardHeader className="bg-slate-50 border-b border-slate-100 pb-4">
                  <CardTitle>Light-Duty/Medium-Duty Trucks</CardTitle>
                  <CardDescription>Starter Kit Configuration</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-2 mb-6 text-sm">
                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 4× HP5 (brake lines, fuel lines)</li>
                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 2× HP6 (air brake systems)</li>
                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 2× HP4 (battery cables)</li>
                  </ul>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-slate-900">$48 <span className="text-sm font-normal text-slate-500">/ vehicle</span></div>
                    <Button variant="outline" size="sm">Order Fleet Kits</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-slate-100 hover:border-primary/50 transition-colors">
                <CardHeader className="bg-slate-50 border-b border-slate-100 pb-4">
                  <CardTitle>Heavy-Duty/Class 8 Trucks</CardTitle>
                  <CardDescription>Comprehensive Protection</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-2 mb-6 text-sm">
                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 4× HP6 (brake assemblies)</li>
                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 4× HP8 (air brake chassis runs)</li>
                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 2× HP10 (bundle protection)</li>
                  </ul>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-slate-900">$78 <span className="text-sm font-normal text-slate-500">/ vehicle</span></div>
                    <Button variant="outline" size="sm">Order Fleet Kits</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Resources & CTA */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-white">
              Ready to Reduce Your Fleet&apos;s Downtime?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Join hundreds of fleet managers who&apos;ve eliminated preventable hose failures and recovered their investment in weeks, not months.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center mb-16">
              <Button size="lg" className="bg-white text-primary hover:bg-slate-100 font-bold text-lg h-14 px-8">
                Get Fleet Quote
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold text-lg h-14 px-8">
                Download Guide
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold text-lg h-14 px-8">
                Talk to Fleet Specialist
              </Button>
            </div>

            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto text-left">
              {resources.map((res, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/10 p-4 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors cursor-pointer">
                  <res.icon className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium text-white">{res.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm">
               <div>Trusted by: Regional trucking companies | National LTL carriers | Refrigerated transport</div>
               <div className="flex gap-6">
                 <span className="flex items-center gap-2 text-white"><Phone className="h-4 w-4" /> 463-255-9942</span>
                 <span className="flex items-center gap-2 text-white"><Mail className="h-4 w-4" /> fleets@epha.com</span>
               </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
