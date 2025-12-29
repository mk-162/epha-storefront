import { setRequestLocale } from 'next-intl/server';
import { Button } from "~/components/ui/button";
import {
  Wrench,
  AlertTriangle,
  DollarSign,
  Clock,
  Star,
  TrendingDown,
  Car,
  Truck,
  Battery,
  Fuel,
  Cog,
  Package,
  CheckCircle2,
  FileText,
  Calculator,
  Video,
  User,
  Phone,
  Mail,
  ChevronRight,
  MessageSquare,
  Target,
  BookOpen,
  Gift,
  Shield
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

export default async function AutomotiveIndustry({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const painPoints = [
    { icon: AlertTriangle, title: "Repeat Failure Cycle", desc: "Same hose fails again within months, eroding customer trust and your reputation." },
    { icon: TrendingDown, title: "Competitive Pressure", desc: "Race-to-bottom pricing makes differentiation through quality impossible." },
    { icon: Clock, title: "Limited Installation Time", desc: "Tight schedules mean corners get cut on proper hose protection." },
    { icon: Star, title: "Online Review Vulnerability", desc: "One comeback can generate a devastating 1-star review that costs thousands in lost business." },
    { icon: DollarSign, title: "Parts Markup Pressure", desc: "Customers price-shop parts online, squeezing your profit margins." },
    { icon: Car, title: "Vehicle Variety Challenges", desc: "Every make and model presents unique routing and protection challenges." }
  ];

  const solutions = [
    { title: "Eliminate Comebacks", desc: "Proprietary material withstands vibration, heat (-40F to 430F), and abrasion that destroys unprotected hoses." },
    { title: "5-Minute Installation", desc: "Snap-on design means protection adds minimal time to any repair - no special tools required." },
    { title: "Create Premium Service Tier", desc: "Differentiate from competitors with a \"Protected Repair\" upsell that justifies higher labor rates." },
    { title: "Build Customer Loyalty", desc: "Customers remember the shop that fixed it RIGHT - generating referrals and repeat business." },
    { title: "Reduce Warranty Claims", desc: "Protection prevents the abrasion failures that lead to warranty disputes and lost revenue." }
  ];

  const applications = [
    { icon: Cog, title: "Hydraulic Brake Line Replacement", desc: "Guard new brake lines at all frame contact points. Prevents the vibration wear that causes 60% of brake line comebacks.", pitch: "\"For $12 more, we protect your new brake lines from the vibration wear that causes most failures. This is how we guarantee the repair.\"" },
    { icon: Truck, title: "Heavy Equipment Hydraulic Service", desc: "Protect high-pressure hydraulic lines on lifts, loaders, and service equipment from catastrophic abrasion failure.", pitch: "\"These protectors prevent the $3,000 cleanup and downtime from a hydraulic blowout. They pay for themselves on the first prevented failure.\"" },
    { icon: Battery, title: "Battery Cable Protection", desc: "Prevent electrical shorts and fire hazards from battery cables rubbing against engine components and body panels.", pitch: "\"Battery cable shorts cause vehicle fires. For $8, we eliminate that risk completely.\"" },
    { icon: Fuel, title: "Fuel Line & Cooling System", desc: "Shield fuel lines and coolant hoses at routing points where engine vibration causes premature wear.", pitch: "\"This protector prevents the fuel leak that could leave you stranded - or worse. It is a small investment for major peace of mind.\"" },
    { icon: Car, title: "Fleet Vehicle Service", desc: "Standardize protection across company vehicles, delivery vans, and service fleets to reduce repeat service calls.", pitch: "\"We can protect all high-wear points across your fleet for about $25 per vehicle. Most fleet managers see 3-5x ROI in the first year.\"" },
    { icon: Package, title: "Bundle Protection for Multi-Hose Jobs", desc: "When replacing multiple lines, bundle protection demonstrates thorough service and maximizes ticket value.", pitch: "\"Since we are replacing three lines anyway, adding protection to all of them is just $20 more and prevents any of them from failing early.\"" }
  ];

  const objections = [
    { objection: "That seems expensive for just a protector.", response: "\"I understand. But consider: a comeback costs you $2,000-$10,000 between the repair, rental car, and the 1-star review. This $8 protector eliminates that risk entirely. It is actually the cheapest insurance we offer.\"" },
    { objection: "The original hose did not have that.", response: "\"Exactly - and that is why it failed. The factory accountants saved $3 per vehicle, and you just paid $400 for the result. We fix the engineering oversight they created.\"" },
    { objection: "I have never heard of this before.", response: "\"Most shops have not - yet. But the ones who have adopted it are seeing 80%+ reduction in comebacks. We are actually ahead of the industry curve on this one.\"" },
    { objection: "Just fix it like it was.", response: "\"I can absolutely do that. But I want you to know: this hose failed because of abrasion at this wear point. Without protection, statistics say it will fail again in 18-24 months. The protector extends that to 5+ years. Your call, but I wanted you to have the option.\"" }
  ];

  const serviceWriterPractices = [
    "Present protection BEFORE giving the base repair quote - it frames the conversation around quality, not just price.",
    "Use visual aids - show the customer the worn area on their failed hose.",
    "Offer protection on EVERY hose job - make it standard procedure, not an afterthought.",
    "Track comeback rates before and after - data sells the program internally.",
    "Include protection in your \"best\" repair option on three-tier estimates."
  ];

  const resources = [
    { icon: FileText, text: "Download Automotive Protection Guide" },
    { icon: Calculator, text: "ROI Calculator" },
    { icon: Video, text: "Installation Training Videos" },
    { icon: User, text: "Automotive Account Manager" }
  ];

  const marketingTemplates = [
    { title: "Customer Email Template", desc: "Follow-up email explaining the protection you installed and its benefits." },
    { title: "Invoice Line Item Language", desc: "Professional descriptions for adding protection to customer invoices." },
    { title: "Social Media Posts", desc: "Before/after content showing protected vs. unprotected hose failures." },
    { title: "Counter Card/POS Display", desc: "Point-of-sale materials explaining protection benefits to waiting customers." },
    { title: "Technician Training Script", desc: "5-minute training for techs on identifying protection opportunities." }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <main>
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-slate-900 text-white">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />

          <div className="container relative mx-auto px-4">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 text-sm font-semibold mb-6 uppercase tracking-wider">
                <Wrench className="h-4 w-4" /> Automotive Service
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 tracking-tight">
                Fix It Right. <br />
                <span className="text-accent">Protect Your Reputation.</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                Every comeback costs you $2,000-$10,000 in repairs, reputation damage, and lost customers. EPHA Hose Protectors eliminate the root cause of hose failures - turning one-time fixes into lifetime customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-accent text-slate-900 hover:bg-accent/90 font-bold text-lg h-14 px-8">
                  Get Shop Quote
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
                <h2 className="text-3xl font-bold font-heading mb-6 text-slate-900">The True Cost of Comebacks</h2>
                <p className="text-lg text-slate-600 mb-8">
                  That brake line you replaced last month? When the customer returns with the same failure, the real costs start adding up fast.
                </p>

                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-8">
                  <h3 className="font-bold text-red-900 mb-4 flex items-center gap-2">
                    <DollarSign className="h-5 w-5" /> Direct Comeback Costs
                  </h3>
                  <ul className="space-y-2 text-red-800">
                    <li className="flex justify-between border-b border-red-100 pb-1">
                      <span>Free repair labor (2-4 hours)</span>
                      <span className="font-bold">$200 - $500</span>
                    </li>
                    <li className="flex justify-between border-b border-red-100 pb-1">
                      <span>Replacement parts (at cost)</span>
                      <span className="font-bold">$50 - $300</span>
                    </li>
                    <li className="flex justify-between border-b border-red-100 pb-1">
                      <span>Rental car/loaner vehicle</span>
                      <span className="font-bold">$50 - $150</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Lost opportunity (bay occupied)</span>
                      <span className="font-bold">$200 - $400</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Star className="h-5 w-5 text-orange-500" /> Reputation Damage
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {["1-star online review", "Lost referrals (3-5 per customer)", "Customer lifetime value lost", "Staff morale impact", "Warranty dispute time", "Competitor gains customer"].map((item, i) => (
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
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">Total Comeback Cost</div>
                  <div className="text-5xl font-bold text-slate-900">$2,000 - $10,000+</div>
                  <div className="text-red-500 font-medium mt-2">Per comeback incident</div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="p-2 bg-slate-100 rounded-lg text-slate-600 font-bold">15-20%</div>
                      <h4 className="font-bold text-slate-900">Hose Job Comeback Rate</h4>
                    </div>
                    <p className="text-sm text-slate-500 pl-14">Industry average for unprotected hose replacements.</p>
                  </div>

                  <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="p-2 bg-slate-100 rounded-lg text-slate-600 font-bold">12-18%</div>
                      <h4 className="font-bold text-slate-900">Industry Comeback Rate</h4>
                    </div>
                    <p className="text-sm text-slate-500 pl-14">Overall comeback rate across all automotive repairs.</p>
                  </div>

                  <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                    <div className="flex items-center gap-4 mb-2">
                      <AlertTriangle className="h-10 w-10 p-2 bg-red-100 text-red-600 rounded-lg" />
                      <h4 className="font-bold text-slate-900">Root Cause: Abrasion</h4>
                    </div>
                    <p className="text-sm text-slate-500 pl-14">80%+ of hose failures are caused by vibration and abrasion at contact points.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-heading mb-12 text-center text-slate-900">What Automotive Shops Face Daily</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <h2 className="text-3xl font-bold font-heading mb-4 text-slate-900">The EPHA Solution for Automotive Shops</h2>
              <p className="text-lg text-slate-600">
                Transform comebacks into customer loyalty with protection that prevents the failures other shops just keep repeating.
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
            <h2 className="text-3xl font-bold font-heading mb-4 text-center">Applications with Sales Pitches</h2>
            <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">Each application includes a proven sales pitch your service writers can use today.</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {applications.map((app, i) => (
                <Card key={i} className="bg-white/5 border-white/10 text-white hover:bg-white/10 transition-colors">
                  <CardHeader>
                    <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center text-accent mb-2">
                      <app.icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg text-accent">{app.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 mb-4">{app.desc}</p>
                    <div className="text-sm text-white/90 bg-white/5 p-3 rounded border border-white/10 italic">
                      {app.pitch}
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
                <h2 className="text-3xl font-bold font-heading mb-4 text-slate-900">Calculate Your Shop&apos;s ROI</h2>
                <p className="text-lg text-slate-600">Example: 500 Hose Jobs Annually</p>
              </div>

              <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm mb-8">
                <Table>
                  <TableHeader className="bg-slate-50">
                    <TableRow>
                      <TableHead className="w-[200px] font-bold text-slate-900">Metric</TableHead>
                      <TableHead className="font-bold text-slate-900">Without Protection</TableHead>
                      <TableHead className="font-bold text-slate-900 text-green-700 bg-green-50">With EPHA Protection</TableHead>
                      <TableHead className="font-bold text-slate-900 text-right">Annual Benefit</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Comeback Rate</TableCell>
                      <TableCell className="text-slate-500">15% (75 comebacks)</TableCell>
                      <TableCell className="text-green-700 bg-green-50">2% (10 comebacks)</TableCell>
                      <TableCell className="text-right font-bold text-slate-900">65 prevented</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Comeback Costs</TableCell>
                      <TableCell className="text-slate-500">75 x $2,000 = $150,000</TableCell>
                      <TableCell className="text-green-700 bg-green-50">10 x $2,000 = $20,000</TableCell>
                      <TableCell className="text-right font-bold text-slate-900">$130,000</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Protection Upsell Revenue</TableCell>
                      <TableCell className="text-slate-500">$0</TableCell>
                      <TableCell className="text-green-700 bg-green-50">500 x $12 = $6,000</TableCell>
                      <TableCell className="text-right font-bold text-slate-900">$6,000</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Customer Retention Value</TableCell>
                      <TableCell className="text-slate-500">Lost customers from comebacks</TableCell>
                      <TableCell className="text-green-700 bg-green-50">65 retained x $360 LTV</TableCell>
                      <TableCell className="text-right font-bold text-slate-900">$23,400</TableCell>
                    </TableRow>
                    <TableRow className="bg-slate-50 font-bold">
                      <TableCell>Protection Investment</TableCell>
                      <TableCell className="text-slate-500">$0</TableCell>
                      <TableCell className="text-slate-900 bg-slate-100">500 x $4 cost = $2,000</TableCell>
                      <TableCell className="text-right text-slate-500">($2,000)</TableCell>
                    </TableRow>
                    <TableRow className="bg-primary/5 border-t-2 border-primary">
                      <TableCell colSpan={3} className="text-right font-bold text-xl text-primary">Total Annual Benefit:</TableCell>
                      <TableCell className="text-right font-bold text-xl text-primary">$159,600</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>

              <div className="text-center">
                <div className="inline-block bg-yellow-50 text-yellow-800 px-4 py-2 rounded-lg font-medium mb-6 border border-yellow-200">
                  ROI Timeline: Protection investment recovered after preventing just ONE comeback
                </div>
                <div>
                  <Button className="font-bold">Calculate Your Shop&apos;s ROI <ChevronRight className="h-4 w-4 ml-1" /></Button>
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
                  <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Independent Truck &amp; Equipment Service: <br /><span className="text-accent">Zero Comebacks</span></h2>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-slate-300 mb-2">Challenge</h4>
                      <p className="text-slate-400">Experiencing 12-15% comeback rate on hydraulic hose repairs, costing $40,000+ annually in warranty work and lost customers.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-300 mb-2">Solution</h4>
                      <p className="text-slate-400">Implemented EPHA protection as standard on all brake line, hydraulic, and battery cable repairs with $10-15 upsell.</p>
                    </div>
                  </div>
                </div>

                <div className="p-12 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-slate-900 mb-8">Results After 12 Months</h3>

                  <div className="space-y-6 mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-16 text-center font-bold text-2xl text-green-600">0</div>
                      <div className="text-slate-600 font-medium">Comebacks on protected hose repairs</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-16 text-center font-bold text-2xl text-green-600">$42k</div>
                      <div className="text-slate-600 font-medium">Saved in warranty and comeback costs</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-16 text-center font-bold text-2xl text-green-600">$18k</div>
                      <div className="text-slate-600 font-medium">Additional revenue from protection upsells</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-16 text-center font-bold text-2xl text-green-600">4.9</div>
                      <div className="text-slate-600 font-medium">Star rating (up from 4.2)</div>
                    </div>
                  </div>

                  <blockquote className="italic text-slate-600 border-l-4 border-primary pl-4">
                    &quot;We went from dreading brake line jobs to actively marketing them. Zero comebacks in a year speaks for itself. Our customers now specifically request the &apos;protected repair&apos; option.&quot;
                    <footer className="font-bold text-slate-900 mt-2 not-italic">- Shop Owner, Independent Truck &amp; Equipment Service</footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sales & Service Integration */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold font-heading mb-4 text-slate-900">Sales &amp; Service Integration</h2>
                <p className="text-lg text-slate-600">Everything your team needs to sell protection confidently.</p>
              </div>

              {/* The 3-Sentence Sell */}
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <MessageSquare className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-bold text-slate-900">The 3-Sentence Sell</h3>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-4">
                  <p className="text-lg text-slate-700"><span className="font-bold text-primary">1.</span> &quot;This hose failed because it was rubbing against [frame/bracket/engine component].&quot;</p>
                  <p className="text-lg text-slate-700"><span className="font-bold text-primary">2.</span> &quot;Without protection, the new hose will fail the same way in 18-24 months.&quot;</p>
                  <p className="text-lg text-slate-700"><span className="font-bold text-primary">3.</span> &quot;For $12, we can install a protector that eliminates this wear point and extends the life to 5+ years. Want me to include it?&quot;</p>
                </div>
              </div>

              {/* Objection Handling */}
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-bold text-slate-900">Objection Handling Scripts</h3>
                </div>
                <div className="space-y-4">
                  {objections.map((item, i) => (
                    <div key={i} className="bg-white p-5 rounded-xl border border-slate-200">
                      <p className="font-bold text-red-600 mb-2">Customer: {item.objection}</p>
                      <p className="text-slate-700"><span className="font-bold text-green-600">Response:</span> {item.response}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Writer Best Practices */}
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-3 mb-6">
                  <BookOpen className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-bold text-slate-900">Service Writer Best Practices</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {serviceWriterPractices.map((practice, i) => (
                    <div key={i} className="flex gap-3 bg-white p-4 rounded-xl border border-slate-200">
                      <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <p className="text-slate-700">{practice}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Shop Starter Kits */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-heading mb-8 text-center text-slate-900">Service Shop Starter Kits</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="border-2 border-slate-100 hover:border-primary/50 transition-colors">
                <CardHeader className="bg-slate-50 border-b border-slate-100 pb-4">
                  <CardTitle>General Automotive Kit</CardTitle>
                  <CardDescription>For passenger vehicles and light trucks</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-2 mb-6 text-sm">
                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 10x HP4 (brake lines, small hoses)</li>
                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 10x HP5 (fuel lines, power steering)</li>
                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 5x HP6 (cooler lines, larger hoses)</li>
                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> Installation guide and sales scripts</li>
                  </ul>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-slate-900">$225</div>
                    <Button variant="outline" size="sm">Order Kit</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/50 hover:border-primary transition-colors relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold">Most Popular</div>
                <CardHeader className="bg-primary/5 border-b border-primary/20 pb-4">
                  <CardTitle>Heavy Equipment Kit</CardTitle>
                  <CardDescription>For trucks, equipment, and hydraulic service</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-2 mb-6 text-sm">
                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 10x HP6 (hydraulic lines)</li>
                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 10x HP8 (large hydraulic, air brake)</li>
                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 5x HP10 (bundle protection)</li>
                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> Hi-Vis Orange option available</li>
                  </ul>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-slate-900">$270</div>
                    <Button size="sm">Order Kit</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-slate-100 hover:border-primary/50 transition-colors">
                <CardHeader className="bg-slate-50 border-b border-slate-100 pb-4">
                  <CardTitle>Fleet Service Kit</CardTitle>
                  <CardDescription>For shops serving commercial fleets</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-2 mb-6 text-sm">
                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 15x HP5 (brake and fuel lines)</li>
                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 10x HP6 (air brake systems)</li>
                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 5x HP8 (battery cables, bundles)</li>
                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> Fleet pricing documentation</li>
                  </ul>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-slate-900">$300</div>
                    <Button variant="outline" size="sm">Order Kit</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Marketing & Resources */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold font-heading mb-4 text-slate-900">Marketing &amp; Resources</h2>
                <p className="text-lg text-slate-600">Ready-to-use templates and materials to promote protection to your customers.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {marketingTemplates.map((template, i) => (
                  <Card key={i} className="border border-slate-200 hover:border-primary/30 transition-colors">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
                          <Gift className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-900 mb-1">{template.title}</h3>
                          <p className="text-sm text-slate-600">{template.desc}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Button variant="outline" className="font-bold">
                  <FileText className="h-4 w-4 mr-2" /> Download All Templates
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Resources & CTA */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-white">
              Ready to Eliminate Comebacks?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Join hundreds of automotive shops that have transformed their hose repair business from a liability into a profit center.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center mb-16">
              <Button size="lg" className="bg-white text-primary hover:bg-slate-100 font-bold text-lg h-14 px-8">
                Get Shop Quote
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold text-lg h-14 px-8">
                Download Guide
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold text-lg h-14 px-8">
                Talk to Specialist
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
               <div>Trusted by: Independent repair shops | Dealership service departments | Specialty automotive | Fleet service centers</div>
               <div className="flex gap-6">
                 <span className="flex items-center gap-2 text-white"><Phone className="h-4 w-4" /> 463-255-9942</span>
                 <span className="flex items-center gap-2 text-white"><Mail className="h-4 w-4" /> automotive@epha.com</span>
               </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
