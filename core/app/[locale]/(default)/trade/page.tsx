import { ArrowRight, Building2, CheckCircle, FileText, ShieldCheck } from 'lucide-react';
import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';

import { Button } from '~/components/ui/button';
import { Card, CardContent } from '~/components/ui/card';

interface Props {
    params: Promise<{ locale: string }>;
}

export function generateMetadata(): Metadata {
    return {
        title: 'Trade Credit Account | EPHA Hose Protectors',
        description: 'Apply for an EPHA Trade Credit Account to enjoy net terms, volume pricing, and dedicated support.',
    };
}

export default async function TradePage({ params }: Props) {
    const { locale } = await params;

    setRequestLocale(locale);

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-primary py-20 text-white">
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <div className="container relative z-10 mx-auto px-4">
                    <div className="mx-auto max-w-4xl text-center">
                        <h1 className="mb-6 font-heading text-5xl font-bold uppercase tracking-tight md:text-6xl">
                            Apply for a <span className="text-accent">Trade Account</span>
                        </h1>
                        <p className="mb-8 text-xl text-white/80 md:text-2xl">
                            Get net terms, personalized pricing, and priority support for your business.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button asChild className="h-14 bg-accent px-8 text-lg font-bold uppercase text-white hover:bg-accent/90" size="lg">
                                <a href="#application-form">Start Application</a>
                            </Button>
                            <Button asChild className="h-14 border-white px-8 text-lg font-bold uppercase text-white hover:bg-white/10" size="lg" variant="outline">
                                <a href="/contact">Talk to Sales</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 font-heading text-3xl font-bold uppercase text-primary">Why Open a Trade Account?</h2>
                        <div className="mx-auto h-1 w-20 bg-accent" />
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        {[
                            {
                                icon: ShieldCheck,
                                title: '30-Day Net Terms',
                                desc: 'Optimize your cash flow with standard 30-day payment terms on all orders.'
                            },
                            {
                                icon: Building2,
                                title: 'Volume Pricing',
                                desc: 'Access tiered pricing structures designed for high-volume users and distributors.'
                            },
                            {
                                icon: FileText,
                                title: 'Streamlined Invoicing',
                                desc: 'Consolidated billing and easy access to purchase history for your accounting team.'
                            }
                        ].map((benefit, i) => (
                            <Card className="border-slate-100 transition-all hover:border-accent/30 hover:shadow-xl" key={i}>
                                <CardContent className="pt-8 text-center">
                                    <div className="mb-6 flex justify-center">
                                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/5 text-primary">
                                            <benefit.icon className="h-8 w-8" />
                                        </div>
                                    </div>
                                    <h3 className="mb-3 font-heading text-xl font-bold text-primary uppercase">{benefit.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Form Section */}
            <section className="bg-slate-50 py-20" id="application-form">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
                        <div className="bg-primary px-8 py-10 text-white">
                            <h2 className="mb-2 font-heading text-2xl font-bold uppercase tracking-wide">Credit Application</h2>
                            <p className="text-white/60">Complete the form below and our team will review your application within 24-48 hours.</p>
                        </div>

                        <form className="p-8 md:p-12">
                            <div className="grid gap-6 md:grid-cols-2">
                                {/* Company Info */}
                                <div className="col-span-2">
                                    <h3 className="mb-4 flex items-center gap-2 font-bold uppercase text-primary italic">
                                        <span className="h-5 w-1 bg-accent" /> Company Information
                                    </h3>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Legal Company Name</label>
                                    <input className="w-full rounded border border-slate-200 px-4 py-3 text-sm focus:border-accent focus:outline-none" required type="text" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Tax ID / VAT Number</label>
                                    <input className="w-full rounded border border-slate-200 px-4 py-3 text-sm focus:border-accent focus:outline-none" required type="text" />
                                </div>
                                <div className="col-span-2 space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Registered Address</label>
                                    <input className="w-full rounded border border-slate-200 px-4 py-3 text-sm focus:border-accent focus:outline-none" required type="text" />
                                </div>

                                {/* Contact Info */}
                                <div className="col-span-2 mt-4">
                                    <h3 className="mb-4 flex items-center gap-2 font-bold uppercase text-primary italic">
                                        <span className="h-5 w-1 bg-accent" /> Primary Contact
                                    </h3>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Full Name</label>
                                    <input className="w-full rounded border border-slate-200 px-4 py-3 text-sm focus:border-accent focus:outline-none" required type="text" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Job Title</label>
                                    <input className="w-full rounded border border-slate-200 px-4 py-3 text-sm focus:border-accent focus:outline-none" required type="text" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Business Email</label>
                                    <input className="w-full rounded border border-slate-200 px-4 py-3 text-sm focus:border-accent focus:outline-none" required type="email" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Phone Number</label>
                                    <input className="w-full rounded border border-slate-200 px-4 py-3 text-sm focus:border-accent focus:outline-none" required type="tel" />
                                </div>

                                <div className="col-span-2 mt-8">
                                    <div className="flex items-start gap-3 rounded-lg bg-slate-50 p-4">
                                        <input className="mt-1 h-4 w-4 rounded border-slate-300 text-accent focus:ring-accent" required type="checkbox" />
                                        <p className="text-xs text-slate-500 leading-relaxed">
                                            I certify that the information provided above is true and correct and that I am authorized to enter into a credit agreement on behalf of the company. I agree to EPHA&apos;s <a className="text-accent underline" href="/terms-conditions">Terms of Credit</a>.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-span-2 mt-6">
                                    <Button className="h-14 w-full bg-primary text-lg font-bold uppercase tracking-widest text-white hover:bg-slate-900" type="submit">
                                        Submit Application <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* Trust Quote */}
            <section className="py-20 text-center">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-2xl">
                        <CheckCircle className="mx-auto mb-6 h-12 w-12 text-accent" />
                        <blockquote className="mb-6 font-heading text-2xl font-medium text-primary italic">
                            &ldquo;Transitioning to a trade account with EPHA was seamless. It has simplified our procurement process and allowed us to scale our protection program across multiple facilities.&rdquo;
                        </blockquote>
                        <p className="font-bold uppercase tracking-wider text-slate-500">— Director of Operations, Global Logistics Fleet</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
