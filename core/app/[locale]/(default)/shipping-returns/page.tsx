import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { Truck, Package, Clock, RefreshCw, AlertCircle, CheckCircle } from 'lucide-react';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Shipping & Returns | EPHA Hose Protectors',
    description: 'Learn about shipping options, delivery times, and return policies for EPHA Hose Protectors orders.',
  };
}

export default async function ShippingReturnsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-5xl md:text-6xl uppercase mb-4">
              Shipping & Returns
            </h1>
            <p className="text-white/80">
              Fast shipping and hassle-free returns on all EPHA products
            </p>
          </div>
        </div>
      </section>

      {/* Free Shipping Banner */}
      <section className="py-8 bg-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3">
            <Truck className="w-6 h-6" />
            <span className="font-heading text-xl uppercase">
              Free Shipping on Orders Over $500
            </span>
          </div>
        </div>
      </section>

      {/* Shipping Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Truck className="w-8 h-8 text-accent" />
              <h2 className="font-heading text-3xl uppercase text-primary">
                Shipping Information
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="font-heading text-xl uppercase text-primary mb-4">
                  Order Processing
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Orders placed <strong>before 12:00 PM EST</strong> are dispatched the same business day</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Orders placed <strong>after 12:00 PM EST</strong> are dispatched the next business day</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Processing is Monday through Friday (excluding holidays)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="font-heading text-xl uppercase text-primary mb-4">
                  Free Shipping Threshold
                </h3>
                <p className="text-gray-600 mb-4">
                  Orders totaling <strong>$500 or more</strong> qualify for free standard shipping
                  within the continental United States.
                </p>
                <p className="text-gray-600">
                  For orders under $500, shipping rates are calculated at checkout based on
                  weight, dimensions, and destination.
                </p>
              </div>
            </div>

            {/* Shipping Options Table */}
            <h3 className="font-heading text-xl uppercase text-primary mb-6">
              Shipping Options & Transit Times
            </h3>
            <div className="overflow-x-auto mb-12">
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
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-12">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                <div>
                  <h4 className="font-heading text-lg uppercase text-primary mb-2">
                    Holiday Schedule
                  </h4>
                  <p className="text-gray-600">
                    Our warehouse is closed on the following dates:
                  </p>
                  <ul className="text-gray-600 mt-2 space-y-1">
                    <li>December 24-26 (Christmas)</li>
                    <li>January 1-2 (New Year)</li>
                  </ul>
                  <p className="text-gray-600 mt-2">
                    Orders placed after 12:00 PM EST on December 23 will ship on December 27.
                    Orders placed after 12:00 PM EST on December 31 will ship on January 3.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Returns Policy */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <RefreshCw className="w-8 h-8 text-accent" />
              <h2 className="font-heading text-3xl uppercase text-primary">
                Returns Policy
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="font-heading text-xl uppercase text-primary mb-4">
                  Return Eligibility
                </h3>
                <p className="text-gray-600 mb-4">
                  We accept returns within <strong>30 days</strong> of purchase, provided the following
                  conditions are met:
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Product is in original, unopened packaging</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Product is unused and undamaged</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>You have your receipt or proof of purchase</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-heading text-xl uppercase text-primary mb-4">
                  How to Return
                </h3>
                <ol className="space-y-3 text-gray-600 list-decimal list-inside">
                  <li>Contact our customer service team at{' '}
                    <a href="mailto:epha@gtsegroup.com" className="text-accent hover:underline">
                      epha@gtsegroup.com
                    </a>{' '}
                    or call{' '}
                    <a href="tel:1-463-255-9942" className="text-accent hover:underline">
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
            <div className="bg-white rounded-xl p-8">
              <h3 className="font-heading text-xl uppercase text-primary mb-4">
                Important Information
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Return Shipping</h4>
                  <p className="text-gray-600 text-sm">
                    Customers are responsible for return shipping costs. We recommend using a
                    trackable shipping method, as we cannot be responsible for items lost in transit.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Refund Policy</h4>
                  <p className="text-gray-600 text-sm">
                    Refunds are processed to the original payment method within 5-7 business days
                    of receiving the returned item. Original shipping charges are non-refundable.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Exchanges</h4>
                  <p className="text-gray-600 text-sm">
                    We're happy to exchange products for different sizes or colors. Contact us to
                    arrange an exchange.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Damaged Items</h4>
                  <p className="text-gray-600 text-sm">
                    If you receive a damaged item, please contact us within 48 hours with photos.
                    We'll arrange a replacement at no additional cost.
                  </p>
                </div>
              </div>
            </div>

            {/* Return Address */}
            <div className="mt-12 text-center">
              <h3 className="font-heading text-xl uppercase text-primary mb-4">
                Return Address
              </h3>
              <div className="inline-block bg-white rounded-xl p-6 shadow-sm">
                <p className="text-gray-600">
                  <strong>GTSE Group Inc</strong><br />
                  ATTN: Returns Department<br />
                  4101 S High School Rd<br />
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
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl uppercase text-primary mb-4">
              Questions?
            </h2>
            <p className="text-gray-600 mb-8">
              Our customer service team is here to help with any shipping or return questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:1-463-255-9942"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent/90 text-white font-heading uppercase rounded-full transition-colors"
              >
                Call 1-463-255-9942
              </a>
              <a
                href="mailto:epha@gtsegroup.com"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary/90 text-white font-heading uppercase rounded-full transition-colors"
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
