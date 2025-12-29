import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '~/components/link';
import { Shield, Award, Users, Truck, CheckCircle } from 'lucide-react';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'About EPHA Hose Protectors | Industrial Protection Solutions',
    description: 'Learn about EPHA Hose Protectors - the industry leader in hydraulic hose and cable protection. Made in USA quality, serving fleet, construction, and industrial markets.',
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-5xl md:text-6xl uppercase mb-6">
              About EPHA
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Industry-leading hose protection solutions designed to prevent wear, reduce downtime,
              and extend equipment life across fleet, construction, and industrial applications.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-heading text-4xl uppercase text-primary mb-6">
                  Our Story
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  EPHA Hose Protectors was founded with a simple mission: to provide the highest quality
                  hose and cable protection solutions for industries that depend on their equipment running
                  smoothly every day.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  We recognized that hydraulic hose failures, cable damage, and equipment wear were costing
                  businesses thousands in repairs, replacements, and downtime. Our patented spiral-wrap
                  design was engineered to solve these problems once and for all.
                </p>
                <p className="text-lg text-gray-600">
                  Today, EPHA products protect equipment across the United States in fleet operations,
                  construction sites, manufacturing facilities, and countless other demanding environments.
                </p>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-heading text-accent">10+</div>
                      <div className="text-sm text-gray-600 mt-1">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-heading text-accent">1000+</div>
                      <div className="text-sm text-gray-600 mt-1">Happy Customers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-heading text-accent">7</div>
                      <div className="text-sm text-gray-600 mt-1">Product Sizes</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-heading text-accent">USA</div>
                      <div className="text-sm text-gray-600 mt-1">Made Quality</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl uppercase text-primary mb-4">
                Our Values
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Everything we do is guided by our commitment to quality, customer satisfaction,
                and innovation in industrial protection.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-heading text-2xl uppercase text-primary mb-3">Quality First</h3>
                <p className="text-gray-600">
                  We never compromise on materials or manufacturing. Every EPHA product is built to
                  withstand the toughest industrial conditions.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-heading text-2xl uppercase text-primary mb-3">Customer Focus</h3>
                <p className="text-gray-600">
                  Your success is our success. We work closely with customers to understand their
                  needs and deliver solutions that exceed expectations.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <Award className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-heading text-2xl uppercase text-primary mb-3">Innovation</h3>
                <p className="text-gray-600">
                  Our patented spiral-wrap design and continuous R&D ensure we stay at the forefront
                  of hose protection technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why EPHA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl uppercase text-primary mb-4">
                Why Choose EPHA?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-heading text-xl uppercase text-primary mb-2">
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
                  <CheckCircle className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-heading text-xl uppercase text-primary mb-2">
                    Temperature Extreme Rated
                  </h4>
                  <p className="text-gray-600">
                    Designed to perform in extreme temperatures from -40°F to +275°F,
                    suitable for any environment.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-heading text-xl uppercase text-primary mb-2">
                    Easy Installation
                  </h4>
                  <p className="text-gray-600">
                    Spiral-wrap design allows installation without disconnecting hoses or cables -
                    saving time and money.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-heading text-xl uppercase text-primary mb-2">
                    Made in USA
                  </h4>
                  <p className="text-gray-600">
                    Proudly manufactured in the United States with strict quality control
                    at every step of production.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-heading text-xl uppercase text-primary mb-2">
                    Multiple Sizes Available
                  </h4>
                  <p className="text-gray-600">
                    Seven sizes from HP4 to HP12 cover hose diameters from 0.25" to 4.00"
                    for any application.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-heading text-xl uppercase text-primary mb-2">
                    Bulk Pricing Available
                  </h4>
                  <p className="text-gray-600">
                    Volume discounts for fleet operators and distributors make protection
                    affordable at scale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Distribution Partner Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Truck className="w-8 h-8 text-accent" />
            </div>
            <h2 className="font-heading text-4xl uppercase mb-6">
              Official Distribution Partner
            </h2>
            <p className="text-xl text-white/80 mb-8">
              EPHA products are officially distributed by GTSE Group Inc., ensuring fast shipping,
              excellent customer service, and industry-leading stock levels across the United States.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent/90 text-white font-heading uppercase rounded-full transition-colors"
              >
                Shop Products
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-heading uppercase rounded-full transition-colors"
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
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-4xl uppercase text-primary mb-4">
                Get In Touch
              </h2>
              <p className="text-lg text-gray-600">
                Have questions about EPHA products? Our team is here to help.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="font-heading text-xl uppercase text-primary mb-2">Phone</div>
                <a href="tel:1-463-255-9942" className="text-accent hover:underline text-lg">
                  1-463-255-9942
                </a>
                <p className="text-sm text-gray-500 mt-1">Mon-Fri 8am - 6pm EST</p>
              </div>
              <div>
                <div className="font-heading text-xl uppercase text-primary mb-2">Email</div>
                <a href="mailto:epha@gtsegroup.com" className="text-accent hover:underline text-lg">
                  epha@gtsegroup.com
                </a>
                <p className="text-sm text-gray-500 mt-1">We respond within 24 hours</p>
              </div>
              <div>
                <div className="font-heading text-xl uppercase text-primary mb-2">Address</div>
                <p className="text-gray-600">
                  GTSE Group Inc<br />
                  4101 S High School Rd<br />
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
