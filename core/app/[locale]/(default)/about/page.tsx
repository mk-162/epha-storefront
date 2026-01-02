import { Award, CheckCircle, Shield, Truck, Users } from 'lucide-react';
import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';

import { Link } from '~/components/link';

interface Props {
  params: Promise<{ locale: string }>;
}

export function generateMetadata(): Metadata {
  return {
    title: 'About EPHA Hose Protectors | Industrial Protection Solutions',
    description:
      'Learn about EPHA Hose Protectors - the industry leader in hydraulic hose and cable protection. Made in USA quality, serving fleet, construction, and industrial markets.',
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;

  setRequestLocale(locale);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-primary py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 font-heading text-5xl uppercase md:text-6xl">About EPHA</h1>
            <p className="text-xl leading-relaxed text-white/80">
              Industry-leading hose protection solutions designed to prevent wear, reduce downtime,
              and extend equipment life across fleet, construction, and industrial applications.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <h2 className="mb-6 font-heading text-4xl uppercase text-primary">Our Story</h2>
                <p className="mb-4 text-lg text-gray-600">
                  EPHA Hose Protectors was founded with a simple mission: to provide the highest
                  quality hose and cable protection solutions for industries that depend on their
                  equipment running smoothly every day.
                </p>
                <p className="mb-4 text-lg text-gray-600">
                  We recognized that hydraulic hose failures, cable damage, and equipment wear were
                  costing businesses thousands in repairs, replacements, and downtime. Our Easy
                  strap-on design was engineered to solve these problems once and for all.
                </p>
                <p className="text-lg text-gray-600">
                  Today, EPHA products protect equipment across the United States in fleet
                  operations, construction sites, manufacturing facilities, and countless other
                  demanding environments.
                </p>
              </div>
              <div className="relative">
                <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 p-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="font-heading text-4xl text-accent">Since 1987</div>
                      <div className="mt-1 text-sm text-gray-600">Global Leader</div>
                    </div>
                    <div className="text-center">
                      <div className="font-heading text-4xl text-accent">1000+</div>
                      <div className="mt-1 text-sm text-gray-600">Happy Customers</div>
                    </div>
                    <div className="text-center">
                      <div className="font-heading text-4xl text-accent">7</div>
                      <div className="mt-1 text-sm text-gray-600">Product Sizes</div>
                    </div>
                    <div className="text-center">
                      <div className="font-heading text-4xl text-accent">USA</div>
                      <div className="mt-1 text-sm text-gray-600">Made Quality</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-heading text-4xl uppercase text-primary">Our Values</h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-600">
                Everything we do is guided by our commitment to quality, customer satisfaction, and
                innovation in industrial protection.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
                  <Shield className="h-7 w-7 text-accent" />
                </div>
                <h3 className="mb-3 font-heading text-2xl uppercase text-primary">Quality First</h3>
                <p className="text-gray-600">
                  We never compromise on materials or manufacturing. Every EPHA product is built to
                  withstand the toughest industrial conditions.
                </p>
              </div>

              <div className="rounded-xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
                  <Users className="h-7 w-7 text-accent" />
                </div>
                <h3 className="mb-3 font-heading text-2xl uppercase text-primary">
                  Customer Focus
                </h3>
                <p className="text-gray-600">
                  Your success is our success. We work closely with customers to understand their
                  needs and deliver solutions that exceed expectations.
                </p>
              </div>

              <div className="rounded-xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
                  <Award className="h-7 w-7 text-accent" />
                </div>
                <h3 className="mb-3 font-heading text-2xl uppercase text-primary">
                  Easy strap-on design
                </h3>
                <p className="text-gray-600">
                  Our Easy strap-on design and continuous R&D ensure we stay at the forefront of
                  hose protection technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why EPHA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-heading text-4xl uppercase text-primary">
                Why Choose EPHA?
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="mb-2 font-heading text-xl uppercase text-primary">
                    Chemical & Abrasion Resistant
                  </h4>
                  <p className="text-gray-600">
                    Our protectors resist hydraulic fluids, oils, chemicals, and physical abrasion
                    for long-lasting performance.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="mb-2 font-heading text-xl uppercase text-primary">
                    Temperature Extreme Rated
                  </h4>
                  <p className="text-gray-600">
                    Designed to perform in extreme temperatures from (-40° to 430° F), suitable for
                    any environment.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="mb-2 font-heading text-xl uppercase text-primary">
                    Easy Installation
                  </h4>
                  <p className="text-gray-600">
                    Easy strap-on design allows installation without disconnecting hoses or cables -
                    saving time and money.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="mb-2 font-heading text-xl uppercase text-primary">Made in USA</h4>
                  <p className="text-gray-600">
                    Proudly manufactured in the United States with strict quality control at every
                    step of production.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="mb-2 font-heading text-xl uppercase text-primary">
                    Multiple Sizes Available
                  </h4>
                  <p className="text-gray-600">
                    Seven sizes from HP4 to HP12 cover hose diameters from 0.25" to 4.00" for any
                    application.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="mb-2 font-heading text-xl uppercase text-primary">
                    Bulk Pricing Available
                  </h4>
                  <p className="text-gray-600">
                    Volume discounts for fleet operators and distributors make protection affordable
                    at scale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Distribution Partner Section */}
      <section className="bg-primary py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
              <Truck className="h-8 w-8 text-accent" />
            </div>
            <h2 className="mb-6 font-heading text-4xl uppercase">Official Distribution Partner</h2>
            <p className="mb-8 text-xl text-white/80">
              EPHA products are officially distributed by GTSE Group Inc., ensuring fast shipping,
              excellent customer service, and industry-leading stock levels across the United
              States.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 font-heading uppercase text-white transition-colors hover:bg-accent/90"
                href="/hose-protector"
              >
                Shop Products
              </Link>
              <Link
                className="inline-flex items-center justify-center rounded-full bg-white/10 px-8 py-4 font-heading uppercase text-white transition-colors hover:bg-white/20"
                href="/contact"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-heading text-4xl uppercase text-primary">Get In Touch</h2>
              <p className="text-lg text-gray-600">
                Have questions about EPHA products? Our team is here to help.
              </p>
            </div>

            <div className="grid gap-8 text-center md:grid-cols-3">
              <div>
                <div className="mb-2 font-heading text-xl uppercase text-primary">Phone</div>
                <a className="text-lg text-accent hover:underline" href="tel:1-463-255-9942">
                  1-463-255-9942
                </a>
                <p className="mt-1 text-sm text-gray-500">Mon-Fri 8am - 6pm EST</p>
              </div>
              <div>
                <div className="mb-2 font-heading text-xl uppercase text-primary">Email</div>
                <a className="text-lg text-accent hover:underline" href="mailto:epha@gtsegroup.com">
                  epha@gtsegroup.com
                </a>
                <p className="mt-1 text-sm text-gray-500">We respond within 24 hours</p>
              </div>
              <div>
                <div className="mb-2 font-heading text-xl uppercase text-primary">Address</div>
                <p className="text-gray-600">
                  GTSE Group Inc
                  <br />
                  4101 S High School Rd
                  <br />
                  Indianapolis, IN 46241
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
