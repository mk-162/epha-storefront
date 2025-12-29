import { setRequestLocale } from 'next-intl/server';
import { Button } from "~/components/ui/button";
import {
  HardHat,
  AlertTriangle,
  DollarSign,
  ShieldAlert,
  CheckCircle2,
  Thermometer,
  Hammer,
  FileText,
  Calculator,
  Video,
  User,
  Phone,
  Mail,
  ChevronRight,
  Gauge,
  Route
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

export default async function ConstructionIndustry({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const painPoints = [
    { icon: Hammer, title: "Extreme Abrasion", desc: "Hoses constantly rubbing against steel, rock, and concrete debris." },
    { icon: Thermometer, title: "Temperature Extremes", desc: "From freezing job sites to engine compartment heat exceeding 200°F." },
    { icon: Gauge, title: "High-Pressure Flex", desc: "Continuous hydraulic cycling under 3,000-5,000 PSI working pressure." },
    { icon: Route, title: "Complex Routing", desc: "Tight bends and multiple contact points on articulating equipment." },
    { icon: ShieldAlert, title: "Safety Hazards", desc: "Catastrophic failures create injury risks and OSHA violations." }
  ];

  const solutions = [
    { title: "Withstand Jobsite Abuse", desc: "Proprietary material resists abrasion from steel, rock, and concrete while handling temperatures from -40°F to 430°F." },
    { title: "Rapid Installation, Zero Downtime", desc: "4-step spiral wrap installation takes minutes per hose—install during shift changes or brief pauses." },
    { title: "Extend Hose Life 3-5x", desc: "Protection at critical wear points dramatically extends the service life of expensive hydraulic assemblies." },
    { title: "High-Visibility Safety Colors", desc: "Orange and yellow options make protected areas visible during inspections and improve safety compliance." },
    { title: "Reduce Inventory Complexity", desc: "Standardized protection program across all equipment simplifies maintenance planning and parts stocking." }
  ];

  const applications = [
    { title: "Excavator Boom Assemblies", desc: "Protect hydraulic lines running along boom, stick, and bucket linkages from abrasion.", rec: "HP8, HP10 (Black or Hi-Vis Orange)" },
    { title: "Loader & Backhoe Systems", desc: "Guard bucket cylinder lines, steering hoses, and transmission cooler connections.", rec: "HP6, HP8 (Hi-Vis Yellow)" },
    { title: "Crane Hydraulics", desc: "Shield outrigger lines, boom extension hoses, and winch hydraulics from wear.", rec: "HP8, HP10 (Hi-Vis Orange)" },
    { title: "Demolition Equipment", desc: "Extreme protection for breaker lines, shear hoses, and crusher hydraulics.", rec: "HP10, HP12 (Black)" },
    { title: "Multi-Hose Bundle Wraps", desc: "Consolidate and protect multiple hydraulic lines running through articulation points.", rec: "HP12, HP14 (Black or Hi-Vis Orange)" },
    { title: "Auxiliary Attachment Lines", desc: "Quick-connect lines for hammers, grapples, thumbs, and specialty attachments.", rec: "HP6, HP8 (Hi-Vis Yellow)" }
  ];

  const resources = [
    { icon: FileText, text: "Download Construction Guide" },
    { icon: Calculator, text: "ROI Calculator" },
    { icon: Video, text: "Installation Videos" },
    { icon: User, text: "Equipment Specialist" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <main>
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-slate-900 text-white">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2076&auto=format&fit=crop')] bg-cover bg-center opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />

          <div className="container relative mx-auto px-4">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 text-sm font-semibold mb-6 uppercase tracking-wider">
                <HardHat className="h-4 w-4" /> Construction & Heavy Equipment
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 tracking-tight">
                Keep Equipment Running. <br />
                <span className="text-accent">Eliminate Hydraulic Failures.</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                When a blown hydraulic line costs $5,000-$50,000 per incident in repairs and lost productivity, hose protection isn&apos;t maintenance—it&apos;s project profitability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-accent text-slate-900 hover:bg-accent/90 font-bold text-lg h-14 px-8">
                  Get Equipment Quote
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold text-lg h-14 px-8">
                  Calculate Savings
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
                <h2 className="text-3xl font-bold font-heading mb-6 text-slate-900">The Real Cost of Construction Hose Failures</h2>
                <p className="text-lg text-slate-600 mb-8">
                  Every contractor knows the pain: An excavator goes down mid-dig, and suddenly you&apos;re watching thousands disappear while crews stand idle.
                </p>

                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-8">
                  <h3 className="font-bold text-red-900 mb-4 flex items-center gap-2">
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
                  <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <ShieldAlert className="h-5 w-5 text-orange-500" /> Indirect Costs
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {["Crew downtime wages", "Project schedule delays", "Liquidated damages", "Rental equipment costs", "Environmental cleanup", "OSHA incident reports"].map((item, i) => (
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
                  <div className="text-5xl font-bold text-slate-900">$5,000 - $50,000+</div>
                  <div className="text-red-500 font-medium mt-2">For a single hydraulic failure</div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="p-2 bg-slate-100 rounded-lg text-slate-600 font-bold">6-12</div>
                      <h4 className="font-bold text-slate-900">Hose Failures Per Machine/Year</h4>
                    </div>
                    <p className="text-sm text-slate-500 pl-14">Average for excavators in demanding applications.</p>
                  </div>

                  <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="p-2 bg-slate-100 rounded-lg text-slate-600 font-bold">80%</div>
                      <h4 className="font-bold text-slate-900">Failures Are Preventable</h4>
                    </div>
                    <p className="text-sm text-slate-500 pl-14">Most failures occur at abrasion and flex points.</p>
                  </div>

                  <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                    <div className="flex items-center gap-4 mb-2">
                      <AlertTriangle className="h-10 w-10 p-2 bg-red-100 text-red-600 rounded-lg" />
                      <h4 className="font-bold text-slate-900">Critical Safety Risks</h4>
                    </div>
                    <p className="text-sm text-slate-500 pl-14">High-pressure injection injuries and fire hazards.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-heading mb-12 text-center text-slate-900">What Construction Teams Face Daily</h2>

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
              <h2 className="text-3xl font-bold font-heading mb-4 text-slate-900">Protection Engineered for Heavy Equipment</h2>
              <p className="text-lg text-slate-600">
                EPHA Hose Protectors deliver exactly what construction demands: extreme durability, fast installation, proven ROI.
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
            <h2 className="text-3xl font-bold font-heading mb-12 text-center">Where Contractors Deploy EPHA Protection</h2>

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
                <h2 className="text-3xl font-bold font-heading mb-4 text-slate-900">Calculate Your Equipment&apos;s Protection ROI</h2>
                <p className="text-lg text-slate-600">Example: 10-Machine Fleet (Excavators &amp; Loaders)</p>
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
                      <TableCell className="font-medium">Hose Failures (8/machine)</TableCell>
                      <TableCell className="text-slate-500">80 x $3,500 = $280,000</TableCell>
                      <TableCell className="text-green-700 bg-green-50">8 x $3,500 = $28,000</TableCell>
                      <TableCell className="text-right font-bold text-slate-900">$252,000</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Crew Downtime</TableCell>
                      <TableCell className="text-slate-500">320 hrs x $450 = $144,000</TableCell>
                      <TableCell className="text-green-700 bg-green-50">32 hrs x $450 = $14,400</TableCell>
                      <TableCell className="text-right font-bold text-slate-900">$129,600</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Project Delays</TableCell>
                      <TableCell className="text-slate-500">Est. schedule impact = $75,000</TableCell>
                      <TableCell className="text-green-700 bg-green-50">Minimal = $7,500</TableCell>
                      <TableCell className="text-right font-bold text-slate-900">$67,500</TableCell>
                    </TableRow>
                    <TableRow className="bg-slate-50 font-bold">
                      <TableCell>Total Annual Cost</TableCell>
                      <TableCell className="text-red-600">$499,000</TableCell>
                      <TableCell className="text-green-700 bg-green-100">$49,900</TableCell>
                      <TableCell className="text-right text-green-700">$449,100</TableCell>
                    </TableRow>
                    <TableRow className="bg-slate-100/50">
                      <TableCell colSpan={2} className="text-right font-medium">Protection Investment (10 machines):</TableCell>
                      <TableCell className="font-bold text-slate-900 bg-slate-200/50">$1,420</TableCell>
                      <TableCell className="text-right text-slate-400">-</TableCell>
                    </TableRow>
                    <TableRow className="bg-primary/5 border-t-2 border-primary">
                      <TableCell colSpan={3} className="text-right font-bold text-xl text-primary">Net ROI:</TableCell>
                      <TableCell className="text-right font-bold text-xl text-primary">$447,680</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>

              <div className="text-center">
                <div className="inline-block bg-yellow-50 text-yellow-800 px-4 py-2 rounded-lg font-medium mb-6 border border-yellow-200">
                  ROI Timeline: Protection investment recovered after first prevented failure
                </div>
                <div>
                  <Button className="font-bold">Calculate Your Equipment&apos;s ROI <ChevronRight className="h-4 w-4 ml-1" /></Button>
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
                  <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Heavy Civil Contractor: <br /><span className="text-accent">92% Failure Reduction</span></h2>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-slate-300 mb-2">Challenge</h4>
                      <p className="text-slate-400">Averaging 10+ hydraulic failures per excavator annually on a major infrastructure project, causing schedule delays and cost overruns.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-300 mb-2">Solution</h4>
                      <p className="text-slate-400">Implemented EPHA protection on all boom, stick, and bucket hydraulics during scheduled service intervals.</p>
                    </div>
                  </div>
                </div>

                <div className="p-12 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-slate-900 mb-8">Results After 12 Months</h3>

                  <div className="space-y-6 mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-16 text-center font-bold text-2xl text-green-600">92%</div>
                      <div className="text-slate-600 font-medium">Reduction in hydraulic failures (10.2 to 0.8 per machine)</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-16 text-center font-bold text-2xl text-green-600">$328k</div>
                      <div className="text-slate-600 font-medium">Savings in repair and downtime costs</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-16 text-center font-bold text-2xl text-green-600">2,400</div>
                      <div className="text-slate-600 font-medium">Additional productive hours recovered</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-16 text-center font-bold text-2xl text-green-600">14d</div>
                      <div className="text-slate-600 font-medium">Investment payback period</div>
                    </div>
                  </div>

                  <blockquote className="italic text-slate-600 border-l-4 border-primary pl-4">
                    &quot;We used to budget for constant hose failures. Now our machines run the entire project without a single hydraulic incident. The ROI is undeniable.&quot;
                    <footer className="font-bold text-slate-900 mt-2 not-italic">- Equipment Manager, Heavy Civil Contractor</footer>
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
                  <CardTitle>Compact Excavator Kit</CardTitle>
                  <CardDescription>Mini &amp; Compact Excavators (0-10 ton)</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-2 mb-6 text-sm">
                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 4x HP6 (boom/stick cylinders)</li>
                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 2x HP8 (bucket cylinder lines)</li>
                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 2x HP5 (auxiliary lines)</li>
                  </ul>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-slate-900">$92 <span className="text-sm font-normal text-slate-500">/ machine</span></div>
                    <Button variant="outline" size="sm">Order Kit</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-slate-100 hover:border-primary/50 transition-colors">
                <CardHeader className="bg-slate-50 border-b border-slate-100 pb-4">
                  <CardTitle>Standard Excavator Kit</CardTitle>
                  <CardDescription>Medium &amp; Large Excavators (10-50 ton)</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-2 mb-6 text-sm">
                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 6x HP8 (boom/stick/bucket lines)</li>
                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 4x HP10 (main hydraulic runs)</li>
                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 2x HP12 (bundle protection)</li>
                  </ul>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-slate-900">$142 <span className="text-sm font-normal text-slate-500">/ machine</span></div>
                    <Button variant="outline" size="sm">Order Kit</Button>
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
              Ready to Eliminate Equipment Downtime?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Join hundreds of contractors who&apos;ve eliminated preventable hydraulic failures and recovered their investment after the first prevented incident.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center mb-16">
              <Button size="lg" className="bg-white text-primary hover:bg-slate-100 font-bold text-lg h-14 px-8">
                Get Equipment Quote
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold text-lg h-14 px-8">
                Download Guide
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold text-lg h-14 px-8">
                Talk to Equipment Specialist
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
               <div>Trusted by: Heavy civil contractors | Demolition companies | Equipment rental fleets</div>
               <div className="flex gap-6">
                 <span className="flex items-center gap-2 text-white"><Phone className="h-4 w-4" /> 463-255-9942</span>
                 <span className="flex items-center gap-2 text-white"><Mail className="h-4 w-4" /> construction@epha.com</span>
               </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
