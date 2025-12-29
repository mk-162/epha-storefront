import { setRequestLocale } from 'next-intl/server';
import { Button } from "~/components/ui/button";
import {
  Factory,
  AlertTriangle,
  DollarSign,
  ShieldAlert,
  CheckCircle2,
  Thermometer,
  Beaker,
  Clock,
  Wrench,
  FileText,
  Calculator,
  Video,
  User,
  Phone,
  Mail,
  ChevronRight,
  Gauge,
  Cog
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

export default async function ManufacturingIndustry({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const painPoints = [
    { icon: Cog, title: "High-Cycle Operations", desc: "Thousands of cycles daily cause accelerated wear on unprotected hydraulic lines." },
    { icon: Beaker, title: "Chemical Exposure", desc: "Coolants, lubricants, and cleaning agents degrade hose materials rapidly." },
    { icon: Thermometer, title: "Temperature Cycling", desc: "Constant heating and cooling stresses hose materials and connections." },
    { icon: Wrench, title: "Cable Carriers", desc: "Cable tracks create continuous abrasion points that destroy hoses." },
    { icon: Clock, title: "Zero Tolerance Windows", desc: "Production schedules leave no margin for unexpected equipment failures." },
    { icon: Gauge, title: "Lean Pressure", desc: "Just-in-time manufacturing means every minute of downtime cascades." }
  ];

  const solutions = [
    { title: "Withstand High-Cycle Fatigue", desc: "Engineered for millions of flex cycles in press and injection molding operations without degradation." },
    { title: "Resist Chemical Attack", desc: "Proprietary materials resist hydraulic oils, coolants, cleaning solvents, and industrial chemicals." },
    { title: "Handle Extreme Temperatures", desc: "Rated from -40F to 430F, protecting lines near ovens, presses, and cooling systems." },
    { title: "Eliminate Cable Carrier Abrasion", desc: "Purpose-built protection prevents the grinding wear that destroys hoses in cable tracks." },
    { title: "Install During Planned Maintenance", desc: "5-minute installation per location means protection during scheduled PM windows." },
    { title: "Color-Coded for Fast Inspection", desc: "Hi-Vis options make visual inspections faster and damage immediately visible." }
  ];

  const applications = [
    { title: "Hydraulic Press Systems", desc: "Protect high-pressure lines on stamping presses, forming machines, and compaction equipment.", rec: "HP8, HP10 (Black or Hi-Vis Orange)" },
    { title: "CNC Machine Cable Carriers", desc: "Eliminate cable track abrasion on machining centers, lathes, and milling equipment.", rec: "HP4, HP5, HP6 (Black)" },
    { title: "Injection Molding Equipment", desc: "Shield hydraulic and cooling lines from heat cycling and chemical exposure.", rec: "HP6, HP8 (Black or Hi-Vis Yellow)" },
    { title: "Automated Assembly Systems", desc: "Protect pneumatic and hydraulic lines in robotic cells and transfer systems.", rec: "HP4, HP5 (Black or Hi-Vis Orange)" },
    { title: "Process Equipment", desc: "Guard lines on mixers, extruders, conveyors, and material handling systems.", rec: "HP6, HP8 (Black)" },
    { title: "Multi-Hose Bundle Protection", desc: "Consolidate and protect multiple lines running together in cable carriers.", rec: "HP10, HP12 (Black or Hi-Vis Orange)" }
  ];

  const resources = [
    { icon: FileText, text: "Download Manufacturing Guide" },
    { icon: Calculator, text: "Downtime Cost Calculator" },
    { icon: Video, text: "Installation Training" },
    { icon: User, text: "Industrial Account Manager" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <main>
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-slate-900 text-white">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />

          <div className="container relative mx-auto px-4">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 text-sm font-semibold mb-6 uppercase tracking-wider">
                <Factory className="h-4 w-4" /> Manufacturing
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 tracking-tight">
                Zero Unplanned Stops. <br />
                <span className="text-accent">Maximum Production Uptime.</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                When a single hydraulic failure can halt an entire production line and cost tens of thousands per hour, protecting your hoses isn&apos;t maintenance—it&apos;s production insurance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-accent text-slate-900 hover:bg-accent/90 font-bold text-lg h-14 px-8">
                  Get Manufacturing Quote
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold text-lg h-14 px-8">
                  Calculate Downtime Savings
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
                <h2 className="text-3xl font-bold font-heading mb-6 text-slate-900">The True Cost of Unplanned Downtime</h2>
                <p className="text-lg text-slate-600 mb-8">
                  In manufacturing, time is money—literally. When a hydraulic line fails on your press or CNC machine, the costs cascade through your entire operation.
                </p>

                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-8">
                  <h3 className="font-bold text-red-900 mb-4 flex items-center gap-2">
                    <DollarSign className="h-5 w-5" /> Downtime Impact
                  </h3>
                  <ul className="space-y-2 text-red-800">
                    <li className="flex justify-between border-b border-red-100 pb-1">
                      <span>Production line stoppage (per hour)</span>
                      <span className="font-bold">$10,000 - $50,000</span>
                    </li>
                    <li className="flex justify-between border-b border-red-100 pb-1">
                      <span>Emergency repair and parts</span>
                      <span className="font-bold">$2,000 - $15,000</span>
                    </li>
                    <li className="flex justify-between border-b border-red-100 pb-1">
                      <span>Expedited shipping for components</span>
                      <span className="font-bold">$500 - $5,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Overtime labor to recover schedule</span>
                      <span className="font-bold">$5,000 - $25,000</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <ShieldAlert className="h-5 w-5 text-orange-500" /> Cascading Effects
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {["Missed customer deadlines", "Scrap and rework costs", "Quality control issues", "Safety incident risk", "Contract penalties", "Lost future business"].map((item, i) => (
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
                  <div className="text-5xl font-bold text-slate-900">$25,000 - $100,000+</div>
                  <div className="text-red-500 font-medium mt-2">For a single unplanned stop</div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="p-2 bg-slate-100 rounded-lg text-slate-600 font-bold">30%</div>
                      <h4 className="font-bold text-slate-900">Hydraulic-Related Downtime</h4>
                    </div>
                    <p className="text-sm text-slate-500 pl-14">Of all unplanned manufacturing downtime comes from hydraulic system failures.</p>
                  </div>

                  <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="p-2 bg-slate-100 rounded-lg text-slate-600 font-bold">60%</div>
                      <h4 className="font-bold text-slate-900">Preventable Failures</h4>
                    </div>
                    <p className="text-sm text-slate-500 pl-14">Of hydraulic failures are caused by external damage that protection prevents.</p>
                  </div>

                  <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                    <div className="flex items-center gap-4 mb-2">
                      <AlertTriangle className="h-10 w-10 p-2 bg-red-100 text-red-600 rounded-lg" />
                      <h4 className="font-bold text-slate-900">Safety Hazards</h4>
                    </div>
                    <p className="text-sm text-slate-500 pl-14">High-pressure failures create injection injury risks and fire hazards.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-heading mb-12 text-center text-slate-900">What Manufacturing Teams Face Daily</h2>

            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
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
              <h2 className="text-3xl font-bold font-heading mb-4 text-slate-900">Protection Engineered for Manufacturing Demands</h2>
              <p className="text-lg text-slate-600">
                EPHA Hose Protectors deliver exactly what production environments require: durability under extreme conditions, fast installation, and measurable uptime improvement.
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
            <h2 className="text-3xl font-bold font-heading mb-12 text-center">Where Manufacturing Teams Deploy EPHA Protection</h2>

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
                <h2 className="text-3xl font-bold font-heading mb-4 text-slate-900">Calculate Your Production Protection ROI</h2>
                <p className="text-lg text-slate-600">Example: Mid-Size Manufacturing Facility (50 Machines)</p>
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
                      <TableCell className="font-medium">Unplanned Downtime Events</TableCell>
                      <TableCell className="text-slate-500">24 events x $35,000 = $840,000</TableCell>
                      <TableCell className="text-green-700 bg-green-50">4 events x $35,000 = $140,000</TableCell>
                      <TableCell className="text-right font-bold text-slate-900">$700,000</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Emergency Repairs</TableCell>
                      <TableCell className="text-slate-500">24 x $8,000 = $192,000</TableCell>
                      <TableCell className="text-green-700 bg-green-50">4 x $8,000 = $32,000</TableCell>
                      <TableCell className="text-right font-bold text-slate-900">$160,000</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Lost Production Value</TableCell>
                      <TableCell className="text-slate-500">96 hours x $25,000 = $2,400,000</TableCell>
                      <TableCell className="text-green-700 bg-green-50">16 hours x $25,000 = $400,000</TableCell>
                      <TableCell className="text-right font-bold text-slate-900">$2,000,000</TableCell>
                    </TableRow>
                    <TableRow className="bg-slate-50 font-bold">
                      <TableCell>Total Annual Cost</TableCell>
                      <TableCell className="text-red-600">$3,432,000</TableCell>
                      <TableCell className="text-green-700 bg-green-100">$572,000</TableCell>
                      <TableCell className="text-right text-green-700">$2,860,000</TableCell>
                    </TableRow>
                    <TableRow className="bg-slate-100/50">
                      <TableCell colSpan={2} className="text-right font-medium">Protection Investment (50 machines, comprehensive):</TableCell>
                      <TableCell className="font-bold text-slate-900 bg-slate-200/50">$12,500</TableCell>
                      <TableCell className="text-right text-slate-400">-</TableCell>
                    </TableRow>
                    <TableRow className="bg-primary/5 border-t-2 border-primary">
                      <TableCell colSpan={3} className="text-right font-bold text-xl text-primary">Net ROI:</TableCell>
                      <TableCell className="text-right font-bold text-xl text-primary">$9,700,000+</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>

              <div className="text-center">
                <div className="inline-block bg-yellow-50 text-yellow-800 px-4 py-2 rounded-lg font-medium mb-6 border border-yellow-200">
                  ROI Timeline: Protection investment typically recovered after preventing just ONE downtime event
                </div>
                <div>
                  <Button className="font-bold">Calculate Your Facility&apos;s ROI <ChevronRight className="h-4 w-4 ml-1" /></Button>
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
                  <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Automotive Parts Manufacturer: <br /><span className="text-accent">94% Downtime Reduction</span></h2>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-slate-300 mb-2">Challenge</h4>
                      <p className="text-slate-400">High-volume stamping operation experiencing 2-3 hydraulic failures per month, each costing 4+ hours of line stoppage and $40,000+ in losses.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-300 mb-2">Solution</h4>
                      <p className="text-slate-400">Implemented EPHA protection on all hydraulic press lines, cable carriers on CNC equipment, and critical process connections during scheduled maintenance windows.</p>
                    </div>
                  </div>
                </div>

                <div className="p-12 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-slate-900 mb-8">Results After 12 Months</h3>

                  <div className="space-y-6 mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-16 text-center font-bold text-2xl text-green-600">94%</div>
                      <div className="text-slate-600 font-medium">Reduction in hydraulic-related downtime events</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-16 text-center font-bold text-2xl text-green-600">$1.2M</div>
                      <div className="text-slate-600 font-medium">Annual savings in prevented downtime and repairs</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-16 text-center font-bold text-2xl text-green-600">99.2%</div>
                      <div className="text-slate-600 font-medium">Equipment availability (up from 96.8%)</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-16 text-center font-bold text-2xl text-green-600">3 wks</div>
                      <div className="text-slate-600 font-medium">Investment payback period</div>
                    </div>
                  </div>

                  <blockquote className="italic text-slate-600 border-l-4 border-primary pl-4">
                    &quot;We used to accept hydraulic failures as inevitable. EPHA proved they&apos;re preventable. The ROI was immediate and the improvement in OEE has been remarkable.&quot;
                    <footer className="font-bold text-slate-900 mt-2 not-italic">- Plant Maintenance Manager</footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Equipment Packages */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-heading mb-8 text-center text-slate-900">Recommended Equipment Packages</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="border-2 border-slate-100 hover:border-primary/50 transition-colors">
                <CardHeader className="bg-slate-50 border-b border-slate-100 pb-4">
                  <CardTitle>CNC Machine Protection Kit</CardTitle>
                  <CardDescription>Cable Carrier and Spindle Protection</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-2 mb-6 text-sm">
                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 6x HP4 (cable carrier runs)</li>
                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 4x HP5 (coolant lines)</li>
                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 2x HP6 (hydraulic connections)</li>
                  </ul>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-slate-900">$89 <span className="text-sm font-normal text-slate-500">/ machine</span></div>
                    <Button variant="outline" size="sm">Order Protection Kits</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-slate-100 hover:border-primary/50 transition-colors">
                <CardHeader className="bg-slate-50 border-b border-slate-100 pb-4">
                  <CardTitle>Hydraulic Press Kit</CardTitle>
                  <CardDescription>Complete Press Protection Package</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-2 mb-6 text-sm">
                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 4x HP8 (main hydraulic lines)</li>
                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 4x HP6 (cylinder connections)</li>
                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 2x HP10 (bundle protection)</li>
                  </ul>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-slate-900">$145 <span className="text-sm font-normal text-slate-500">/ press</span></div>
                    <Button variant="outline" size="sm">Order Protection Kits</Button>
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
              Ready to Eliminate Unplanned Downtime?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Join manufacturing leaders who&apos;ve turned hydraulic failures from inevitable disruptions into preventable events—and recovered their investment in weeks.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center mb-16">
              <Button size="lg" className="bg-white text-primary hover:bg-slate-100 font-bold text-lg h-14 px-8">
                Get Manufacturing Quote
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold text-lg h-14 px-8">
                Download Guide
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold text-lg h-14 px-8">
                Talk to Industrial Specialist
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
               <div>Trusted by: Automotive suppliers | Aerospace manufacturers | Heavy equipment producers</div>
               <div className="flex gap-6">
                 <span className="flex items-center gap-2 text-white"><Phone className="h-4 w-4" /> 463-255-9942</span>
                 <span className="flex items-center gap-2 text-white"><Mail className="h-4 w-4" /> industrial@epha.com</span>
               </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
