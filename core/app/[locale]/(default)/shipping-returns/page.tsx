import { AlertCircle, CheckCircle, RefreshCw, Truck } from 'lucide-react';
import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';

interface Props {
  params: Promise<{ locale: string }>;
}

export function generateMetadata(): Metadata {
  return {
    title: 'Shipping & Returns | EPHA Hose Protectors',
    description:
      'Learn about shipping options, delivery times, and return policies for EPHA Hose Protectors orders.',
  };
}

export default async function ShippingReturnsPage({ params }: Props) {
  const { locale } = await params;

  setRequestLocale(locale);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-primary py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 font-heading text-5xl uppercase md:text-6xl">Shipping & Returns</h1>
            <p className="text-white/80">
              Fast shipping and hassle-free returns on all EPHA products
            </p>
          </div>
        </div>
      </section>

      {/* Free Shipping Banner */}
      <section className="bg-accent py-8 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3">
            <Truck className="h-6 w-6" />
            <span className="font-heading text-xl uppercase">
              Free Shipping on Orders Over $500
            </span>
          </div>
        </div>
      </section>

      {/* Shipping Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 flex items-center gap-3">
              <Truck className="h-8 w-8 text-accent" />
              <h2 className="font-heading text-3xl uppercase text-primary">Shipping Information</h2>
            </div>

            <div className="mb-12 grid gap-8 md:grid-cols-2">
              <div className="rounded-xl bg-gray-50 p-8">
                <h3 className="mb-4 font-heading text-xl uppercase text-primary">
                  Order Processing
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    <span>
                      Orders placed <strong>before 12:00 PM EST</strong> are dispatched the same
                      business day
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    <span>
                      Orders placed <strong>after 12:00 PM EST</strong> are dispatched the next
                      business day
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    <span>Processing is Monday through Friday (excluding holidays)</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl bg-gray-50 p-8">
                <h3 className="mb-4 font-heading text-xl uppercase text-primary">
                  Free Shipping Threshold
                </h3>
                <p className="mb-4 text-gray-600">
                  Orders totaling <strong>$500 or more</strong> qualify for free standard shipping
                  within the continental United States.
                </p>
                <p className="text-gray-600">
                  For orders under $500, shipping rates are calculated at checkout based on weight,
                  dimensions, and destination.
                </p>
              </div>
            </div>

            {/* Shipping Options Table */}
            <h3 className="mb-6 font-heading text-xl uppercase text-primary">
              Shipping Options & Transit Times
            </h3>
            <div className="mb-12 overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-4 py-3 text-left font-heading uppercase">Carrier</th>
                    <th className="px-4 py-3 text-left font-heading uppercase">Service</th>
                    <th className="px-4 py-3 text-left font-heading uppercase">Transit Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-white">
                    <td className="px-4 py-3 text-gray-600">UPS</td>
                    <td className="px-4 py-3 text-gray-600">Ground</td>
                    <td className="px-4 py-3 text-gray-600">2-5 Business Days</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-gray-600">UPS</td>
                    <td className="px-4 py-3 text-gray-600">2nd Day Air</td>
                    <td className="px-4 py-3 text-gray-600">2 Business Days</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 text-gray-600">UPS</td>
                    <td className="px-4 py-3 text-gray-600">Next Day Air</td>
                    <td className="px-4 py-3 text-gray-600">1 Business Day</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-gray-600">FedEx</td>
                    <td className="px-4 py-3 text-gray-600">Ground</td>
                    <td className="px-4 py-3 text-gray-600">2-5 Business Days</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 text-gray-600">FedEx</td>
                    <td className="px-4 py-3 text-gray-600">2nd Day</td>
                    <td className="px-4 py-3 text-gray-600">2 Business Days</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-gray-600">FedEx</td>
                    <td className="px-4 py-3 text-gray-600">Priority Overnight</td>
                    <td className="px-4 py-3 text-gray-600">1 Business Day (by 12PM)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Holiday Schedule */}
            <div className="mb-12 rounded-xl border border-amber-200 bg-amber-50 p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-6 w-6 flex-shrink-0 text-amber-600" />
                <div>
                  <h4 className="mb-2 font-heading text-lg uppercase text-primary">
                    Holiday Schedule
                  </h4>
                  <p className="text-gray-600">Our warehouse is closed on the following dates:</p>
                  <ul className="mt-2 space-y-1 text-gray-600">
                    <li>December 24-26 (Christmas)</li>
                    <li>January 1-2 (New Year)</li>
                  </ul>
                  <p className="mt-2 text-gray-600">
                    Orders placed after 12:00 PM EST on December 23 will ship on December 27. Orders
                    placed after 12:00 PM EST on December 31 will ship on January 3.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Returns Policy */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 flex items-center gap-3">
              <RefreshCw className="h-8 w-8 text-accent" />
              <h2 className="font-heading text-3xl uppercase text-primary">Returns Policy</h2>
            </div>

            <div className="mb-12 grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 font-heading text-xl uppercase text-primary">
                  Return Eligibility
                </h3>
                <p className="mb-4 text-gray-600">
                  We accept returns within <strong>30 days</strong> of purchase, provided the
                  following conditions are met:
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    <span>Product is in original, unopened packaging</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    <span>Product is unused and undamaged</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    <span>You have your receipt or proof of purchase</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-4 font-heading text-xl uppercase text-primary">How to Return</h3>
                <ol className="list-inside list-decimal space-y-3 text-gray-600">
                  <li>
                    Contact our customer service team at{' '}
                    <a className="text-accent hover:underline" href="mailto:epha@gtsegroup.com">
                      epha@gtsegroup.com
                    </a>{' '}
                    or call{' '}
                    <a className="text-accent hover:underline" href="tel:1-463-255-9942">
                      1-463-255-9942
                    </a>
                  </li>
                  <li>Specify whether you want an exchange or refund</li>
                  <li>Pack the item securely in its original packaging</li>
                  <li>Ship to our return address (provided by customer service)</li>
                  <li>Allow 5-7 business days for processing once received</li>
                </ol>
              </div>
            </div>

            {/* Important Notes */}
            <div className="rounded-xl bg-white p-8">
              <h3 className="mb-4 font-heading text-xl uppercase text-primary">
                Important Information
              </h3>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="mb-2 font-medium text-gray-800">Return Shipping</h4>
                  <p className="text-sm text-gray-600">
                    Customers are responsible for return shipping costs. We recommend using a
                    trackable shipping method, as we cannot be responsible for items lost in
                    transit.
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 font-medium text-gray-800">Refund Policy</h4>
                  <p className="text-sm text-gray-600">
                    Refunds are processed to the original payment method within 5-7 business days of
                    receiving the returned item. Original shipping charges are non-refundable.
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 font-medium text-gray-800">Exchanges</h4>
                  <p className="text-sm text-gray-600">
                    We're happy to exchange products for different sizes or colors. Contact us to
                    arrange an exchange.
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 font-medium text-gray-800">Damaged Items</h4>
                  <p className="text-sm text-gray-600">
                    If you receive a damaged item, please contact us within 48 hours with photos.
                    We'll arrange a replacement at no additional cost.
                  </p>
                </div>
              </div>
            </div>

            {/* Return Address */}
            <div className="mt-12 text-center">
              <h3 className="mb-4 font-heading text-xl uppercase text-primary">Return Address</h3>
              <div className="inline-block rounded-xl bg-white p-6 shadow-sm">
                <p className="text-gray-600">
                  <strong>GTSE Group Inc</strong>
                  <br />
                  ATTN: Returns Department
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

      {/* Questions Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 font-heading text-3xl uppercase text-primary">Questions?</h2>
            <p className="mb-8 text-gray-600">
              Our customer service team is here to help with any shipping or return questions.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 font-heading uppercase text-white transition-colors hover:bg-accent/90"
                href="tel:1-463-255-9942"
              >
                Call 1-463-255-9942
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 font-heading uppercase text-white transition-colors hover:bg-primary/90"
                href="mailto:epha@gtsegroup.com"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
