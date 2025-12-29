import { Clock, Mail, MapPin, MessageSquare, Phone } from 'lucide-react';
import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';

import { ContactForm } from './_components/contact-form';

interface Props {
  params: Promise<{ locale: string }>;
}

export function generateMetadata(): Metadata {
  return {
    title: 'Contact Us | EPHA Hose Protectors',
    description:
      'Get in touch with EPHA Hose Protectors. Contact us for product inquiries, bulk orders, distribution partnerships, or technical support.',
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;

  setRequestLocale(locale);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-primary py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 font-heading text-5xl uppercase md:text-6xl">Contact Us</h1>
            <p className="text-xl leading-relaxed text-white/80">
              Have questions about our hose protectors? Need a bulk quote? Our team is here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 md:grid-cols-4">
              <div className="rounded-xl bg-white p-6 text-center shadow-sm">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-2 font-heading text-lg uppercase text-primary">Phone</h3>
                <a className="font-medium text-accent hover:underline" href="tel:1-463-255-9942">
                  1-463-255-9942
                </a>
              </div>

              <div className="rounded-xl bg-white p-6 text-center shadow-sm">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-2 font-heading text-lg uppercase text-primary">Email</h3>
                <a
                  className="font-medium text-accent hover:underline"
                  href="mailto:epha@gtsegroup.com"
                >
                  epha@gtsegroup.com
                </a>
              </div>

              <div className="rounded-xl bg-white p-6 text-center shadow-sm">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-2 font-heading text-lg uppercase text-primary">Hours</h3>
                <p className="text-sm text-gray-600">
                  Mon - Fri
                  <br />
                  8am - 6pm EST
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 text-center shadow-sm">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-2 font-heading text-lg uppercase text-primary">Address</h3>
                <p className="text-sm text-gray-600">
                  4101 S High School Rd
                  <br />
                  Indianapolis, IN 46241
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-5">
              {/* Form */}
              <div className="lg:col-span-3">
                <div className="mb-6 flex items-center gap-3">
                  <MessageSquare className="h-6 w-6 text-accent" />
                  <h2 className="font-heading text-3xl uppercase text-primary">
                    Send Us a Message
                  </h2>
                </div>
                <p className="mb-8 text-gray-600">
                  Fill out the form below and our team will get back to you within 24 hours. For
                  urgent inquiries, please call us directly.
                </p>
                <ContactForm />
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-2">
                <div className="rounded-2xl bg-primary p-8 text-white">
                  <h3 className="mb-6 font-heading text-2xl uppercase">Quick Help</h3>

                  <div className="space-y-6">
                    <div>
                      <h4 className="mb-2 font-heading text-lg uppercase text-accent">
                        Product Inquiries
                      </h4>
                      <p className="text-sm text-white/80">
                        Need help choosing the right hose protector size? Our team can recommend the
                        perfect solution for your application.
                      </p>
                    </div>

                    <div>
                      <h4 className="mb-2 font-heading text-lg uppercase text-accent">
                        Bulk Orders
                      </h4>
                      <p className="text-sm text-white/80">
                        Looking to order large quantities? We offer volume discounts and can provide
                        custom quotes for fleet operators and distributors.
                      </p>
                    </div>

                    <div>
                      <h4 className="mb-2 font-heading text-lg uppercase text-accent">
                        Distribution Partnership
                      </h4>
                      <p className="text-sm text-white/80">
                        Interested in becoming an EPHA distributor? Contact us to learn about
                        partnership opportunities in your region.
                      </p>
                    </div>

                    <div>
                      <h4 className="mb-2 font-heading text-lg uppercase text-accent">
                        Technical Support
                      </h4>
                      <p className="text-sm text-white/80">
                        Have questions about installation or specifications? Our technical team is
                        happy to assist with any product questions.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 border-t border-white/20 pt-8">
                    <p className="mb-4 text-sm text-white/60">Distributed by</p>
                    <div className="font-heading text-xl uppercase">GTSE Group Inc</div>
                    <p className="mt-2 text-sm text-white/80">
                      Your trusted partner for industrial consumables and hose protection solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (placeholder) */}
      <section className="relative h-80 bg-gray-200">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="mx-auto mb-4 h-12 w-12 text-gray-400" />
            <p className="font-medium text-gray-500">
              4101 S High School Rd, Indianapolis, IN 46241
            </p>
            <a
              className="mt-4 inline-flex items-center gap-2 text-accent hover:underline"
              href="https://maps.google.com/?q=4101+S+High+School+Rd+Indianapolis+IN+46241"
              rel="noopener noreferrer"
              target="_blank"
            >
              View on Google Maps
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
