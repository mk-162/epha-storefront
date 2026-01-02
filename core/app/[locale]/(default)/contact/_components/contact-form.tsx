'use client';

import { AlertCircle, CheckCircle, Clock, Loader2, Mail, MapPin, Phone, Truck } from 'lucide-react';
import { useActionState } from 'react';

import { Link } from '~/components/link';

import { ContactFormState, submitContactForm } from '../_actions/submit-contact';

const initialState: ContactFormState = {};

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

  return (
    <>
      {/* Hero Banner */}
      <div className="bg-slate-900 py-16 text-white">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h1 className="mb-6 font-heading text-4xl font-black uppercase md:text-5xl">
            Get in Touch
          </h1>
          <p className="mb-8 text-xl text-slate-300 md:text-2xl">
            Expert hose protection advice from our Indianapolis-based team. We&apos;re here to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              className="rounded-full bg-accent px-8 py-3 font-bold text-white transition-colors hover:bg-accent/90"
              href="#contact-form"
            >
              Send a Message
            </a>
            <a
              className="rounded-full bg-white/10 px-8 py-3 font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              href="tel:1-463-255-9942"
            >
              1-463-255-9942
            </a>
          </div>
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="container mx-auto px-4 py-16">
        <div className="mb-20 grid items-start gap-12 md:grid-cols-2">
          {/* Left Column - Contact Info */}
          <div>
            <h2 className="mb-6 font-heading text-3xl font-bold uppercase text-slate-900">
              How Can We Help?
            </h2>
            <p className="mb-8 text-lg text-slate-600">
              Our hose protection specialists are ready to assist with product recommendations, bulk
              orders, distribution partnerships, and any technical questions you may have.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="h-fit rounded-lg bg-accent/10 p-3">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Phone</h3>
                  <a
                    className="my-1 block text-xl font-bold text-accent hover:underline"
                    href="tel:1-463-255-9942"
                  >
                    1-463-255-9942
                  </a>
                  <p className="text-slate-600">
                    Speak directly with our team for expert advice on product sizing, installation,
                    and bulk orders.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="h-fit rounded-lg bg-accent/10 p-3">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Email</h3>
                  <a
                    className="my-1 block text-xl font-bold text-accent hover:underline"
                    href="mailto:epha@gtsegroup.com"
                  >
                    epha@gtsegroup.com
                  </a>
                  <p className="text-slate-600">
                    For product inquiries, bulk orders, or distribution partnerships. We aim to
                    respond within the same business day.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="h-fit rounded-lg bg-blue-100 p-3">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Business Hours</h3>
                  <p className="text-slate-600">
                    <strong className="text-slate-900">Monday - Friday:</strong> 8:00 AM - 5:00 PM
                    EST
                    <br />
                    <strong className="text-slate-900">Saturday - Sunday:</strong> Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Bulk Order CTA */}
            <div className="mt-8 rounded-xl border border-accent/20 bg-accent/5 p-6">
              <div className="mb-3 flex items-center gap-2">
                <Truck className="h-5 w-5 text-accent" />
                <h3 className="text-lg font-bold text-slate-900">Need Bulk Pricing?</h3>
              </div>
              <p className="mb-4 text-slate-600">
                Fleet managers and distributors get competitive volume pricing. Contact us for
                custom quotes on orders of 100+ units.
              </p>
              <Link
                className="inline-block rounded-lg bg-accent px-6 py-2 font-bold text-white transition-colors hover:bg-accent/90"
                href="/retailers"
              >
                Become a Dealer
              </Link>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div
            className="h-fit rounded-xl border border-slate-200 bg-white p-8 shadow-lg"
            id="contact-form"
          >
            <h2 className="mb-6 font-heading text-2xl font-bold uppercase text-slate-900">
              Send us a Message
            </h2>

            {state.success ? (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <CheckCircle className="mb-4 h-16 w-16 text-green-500" />
                <h3 className="mb-2 text-xl font-bold text-slate-900">Message Sent!</h3>
                <p className="text-slate-600">{state.message}</p>
              </div>
            ) : (
              <form action={formAction} className="space-y-4">
                {Boolean(state.message) && state.success === false && (
                  <div className="flex items-start gap-3 rounded-md border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                    <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span>{state.message}</span>
                  </div>
                )}

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700" htmlFor="name">
                      Full Name *
                    </label>
                    <input
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/20"
                      id="name"
                      name="name"
                      required
                      type="text"
                    />
                    {state.errors?.name && (
                      <p className="mt-1 text-sm text-red-500">{state.errors.name[0]}</p>
                    )}
                  </div>
                  <div>
                    <label
                      className="mb-1 block text-sm font-medium text-slate-700"
                      htmlFor="company"
                    >
                      Company Name
                    </label>
                    <input
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/20"
                      id="company"
                      name="company"
                      type="text"
                    />
                    {state.errors?.company && (
                      <p className="mt-1 text-sm text-red-500">{state.errors.company[0]}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700" htmlFor="email">
                    Email Address *
                  </label>
                  <input
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/20"
                    id="email"
                    name="email"
                    required
                    type="email"
                  />
                  {state.errors?.email && (
                    <p className="mt-1 text-sm text-red-500">{state.errors.email[0]}</p>
                  )}
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700" htmlFor="phone">
                    Phone Number (Optional)
                  </label>
                  <input
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/20"
                    id="phone"
                    name="phone"
                    type="tel"
                  />
                </div>

                <div>
                  <label
                    className="mb-1 block text-sm font-medium text-slate-700"
                    htmlFor="subject"
                  >
                    Subject *
                  </label>
                  <select
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/20"
                    id="subject"
                    name="subject"
                    required
                  >
                    <option value="">Select a subject...</option>
                    <option value="product-inquiry">Product Inquiry</option>
                    <option value="bulk-order">Bulk Order Quote</option>
                    <option value="distribution">Distribution Partnership</option>
                    <option value="technical">Technical Support</option>
                    <option value="returns">Returns & Refunds</option>
                    <option value="other">Other</option>
                  </select>
                  {state.errors?.subject && (
                    <p className="mt-1 text-sm text-red-500">{state.errors.subject[0]}</p>
                  )}
                </div>

                <div>
                  <label
                    className="mb-1 block text-sm font-medium text-slate-700"
                    htmlFor="message"
                  >
                    Message *
                  </label>
                  <textarea
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/20"
                    id="message"
                    name="message"
                    placeholder="How can we help you today?"
                    required
                    rows={5}
                  />
                  {state.errors?.message && (
                    <p className="mt-1 text-sm text-red-500">{state.errors.message[0]}</p>
                  )}
                </div>

                <button
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent py-4 font-bold text-white shadow-md transition-colors hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-50"
                  disabled={isPending}
                  type="submit"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Company Info Banner */}
        <div className="rounded-xl border border-accent/10 bg-accent/5 p-8 text-center">
          <h3 className="mb-4 font-heading text-xl font-bold uppercase text-slate-900">
            Company Information
          </h3>
          <div className="grid gap-4 text-sm md:grid-cols-3">
            <div>
              <span className="block text-slate-500">Brand</span>
              <span className="font-semibold text-slate-900">EPHA Hose Protectors</span>
            </div>
            <div>
              <span className="block text-slate-500">Parent Company</span>
              <span className="font-semibold text-slate-900">GTSE Group Inc</span>
            </div>
            <div>
              <span className="block text-slate-500">Country</span>
              <span className="font-semibold text-slate-900">Made in USA</span>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-center text-sm text-slate-500">
          <MapPin className="h-4 w-4" />
          <span>4101 S High School Rd | Indianapolis, IN 46241 | USA</span>
        </div>
      </div>
    </>
  );
}
