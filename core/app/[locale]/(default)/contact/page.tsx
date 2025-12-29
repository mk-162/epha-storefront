import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';

import { ContactForm } from './_components/contact-form';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Contact Us | EPHA Hose Protectors',
    description: 'Get in touch with EPHA Hose Protectors. Contact us for product inquiries, bulk orders, distribution partnerships, or technical support.',
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-5xl md:text-6xl uppercase mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Have questions about our hose protectors? Need a bulk quote? Our team is here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-heading text-lg uppercase text-primary mb-2">Phone</h3>
                <a href="tel:1-463-255-9942" className="text-accent hover:underline font-medium">
                  1-463-255-9942
                </a>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-heading text-lg uppercase text-primary mb-2">Email</h3>
                <a href="mailto:epha@gtsegroup.com" className="text-accent hover:underline font-medium">
                  epha@gtsegroup.com
                </a>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-heading text-lg uppercase text-primary mb-2">Hours</h3>
                <p className="text-gray-600 text-sm">
                  Mon - Fri<br />8am - 6pm EST
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-heading text-lg uppercase text-primary mb-2">Address</h3>
                <p className="text-gray-600 text-sm">
                  4101 S High School Rd<br />Indianapolis, IN 46241
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Form */}
              <div className="lg:col-span-3">
                <div className="flex items-center gap-3 mb-6">
                  <MessageSquare className="w-6 h-6 text-accent" />
                  <h2 className="font-heading text-3xl uppercase text-primary">
                    Send Us a Message
                  </h2>
                </div>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and our team will get back to you within 24 hours.
                  For urgent inquiries, please call us directly.
                </p>
                <ContactForm />
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-2">
                <div className="bg-primary rounded-2xl p-8 text-white">
                  <h3 className="font-heading text-2xl uppercase mb-6">Quick Help</h3>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-heading text-lg uppercase text-accent mb-2">
                        Product Inquiries
                      </h4>
                      <p className="text-white/80 text-sm">
                        Need help choosing the right hose protector size? Our team can recommend
                        the perfect solution for your application.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-heading text-lg uppercase text-accent mb-2">
                        Bulk Orders
                      </h4>
                      <p className="text-white/80 text-sm">
                        Looking to order large quantities? We offer volume discounts and can
                        provide custom quotes for fleet operators and distributors.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-heading text-lg uppercase text-accent mb-2">
                        Distribution Partnership
                      </h4>
                      <p className="text-white/80 text-sm">
                        Interested in becoming an EPHA distributor? Contact us to learn about
                        partnership opportunities in your region.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-heading text-lg uppercase text-accent mb-2">
                        Technical Support
                      </h4>
                      <p className="text-white/80 text-sm">
                        Have questions about installation or specifications? Our technical team
                        is happy to assist with any product questions.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-white/20">
                    <p className="text-white/60 text-sm mb-4">Distributed by</p>
                    <div className="font-heading text-xl uppercase">GTSE Group Inc</div>
                    <p className="text-white/80 text-sm mt-2">
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
      <section className="h-80 bg-gray-200 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 font-medium">
              4101 S High School Rd, Indianapolis, IN 46241
            </p>
            <a
              href="https://maps.google.com/?q=4101+S+High+School+Rd+Indianapolis+IN+46241"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-accent hover:underline"
            >
              View on Google Maps
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
