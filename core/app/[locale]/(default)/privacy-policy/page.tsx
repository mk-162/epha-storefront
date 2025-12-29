import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Privacy Policy | EPHA Hose Protectors',
    description: 'Read our privacy policy to understand how EPHA Hose Protectors collects, uses, and protects your personal information.',
  };
}

export default async function PrivacyPolicyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-5xl md:text-6xl uppercase mb-4">
              Privacy Policy
            </h1>
            <p className="text-white/80">
              Last updated: January 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="lead text-xl text-gray-600 mb-8">
              This Privacy Policy describes how EPHA Hose Protectors (distributed by GTSE Group Inc.)
              collects, uses, and shares your personal information when you visit our website or
              make a purchase.
            </p>

            <h2 className="font-heading text-2xl uppercase text-primary mt-12 mb-4">
              Information We Collect
            </h2>
            <p className="text-gray-600 mb-4">
              We collect personal information directly from you, including:
            </p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>Basic contact details including your name, address, phone number, and email</li>
              <li>Order information including products purchased, shipping details, and payment information</li>
              <li>Account information if you create an account with us</li>
              <li>Communications you send to us, including customer service inquiries</li>
            </ul>
            <p className="text-gray-600 mb-4">
              We also automatically collect certain information when you visit our website:
            </p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>Device information (browser type, operating system, device type)</li>
              <li>Usage data (pages visited, time spent on site, referring website)</li>
              <li>Location information (country, region, city based on IP address)</li>
            </ul>

            <h2 className="font-heading text-2xl uppercase text-primary mt-12 mb-4">
              How We Use Your Information
            </h2>
            <p className="text-gray-600 mb-4">
              We use the information we collect to:
            </p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>Process and fulfill your orders</li>
              <li>Communicate with you about your orders and account</li>
              <li>Provide customer support</li>
              <li>Send marketing and promotional communications (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Detect and prevent fraud</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="font-heading text-2xl uppercase text-primary mt-12 mb-4">
              Cookies and Tracking Technologies
            </h2>
            <p className="text-gray-600 mb-4">
              Our website uses cookies and similar tracking technologies to improve functionality
              and analyze site usage. Cookies are small text files stored on your device that help
              us recognize you and remember your preferences.
            </p>
            <p className="text-gray-600 mb-4">
              You can adjust your browser settings to reject cookies, though this may impact
              some features of our website.
            </p>

            <h2 className="font-heading text-2xl uppercase text-primary mt-12 mb-4">
              Sharing Your Information
            </h2>
            <p className="text-gray-600 mb-4">
              We may share your information with:
            </p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>Service providers who perform services on our behalf (payment processing,
                shipping, data analytics, customer support, cloud storage)</li>
              <li>Business partners with your consent</li>
              <li>Law enforcement or government agencies when required by law</li>
              <li>Other parties in connection with a merger, acquisition, or sale of assets</li>
            </ul>
            <p className="text-gray-600 mb-4">
              We do not sell your personal information to third parties.
            </p>

            <h2 className="font-heading text-2xl uppercase text-primary mt-12 mb-4">
              Your Rights
            </h2>
            <p className="text-gray-600 mb-4">
              Depending on your location, you may have certain rights regarding your personal
              information, including:
            </p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>The right to access and know what personal data we hold about you</li>
              <li>The right to request deletion of your personal information</li>
              <li>The right to correct inaccurate information</li>
              <li>The right to receive and transfer your personal information</li>
              <li>The right to opt out of marketing communications</li>
              <li>The right to opt out of the sale/sharing of personal information or targeted advertising</li>
            </ul>

            <h2 className="font-heading text-2xl uppercase text-primary mt-12 mb-4">
              Data Security
            </h2>
            <p className="text-gray-600 mb-4">
              We implement appropriate technical and organizational measures to protect your
              personal information against unauthorized access, alteration, disclosure, or
              destruction. However, no method of transmission over the Internet is 100% secure.
            </p>

            <h2 className="font-heading text-2xl uppercase text-primary mt-12 mb-4">
              Data Retention
            </h2>
            <p className="text-gray-600 mb-4">
              We retain your personal information for as long as necessary to fulfill the
              purposes for which it was collected, including to satisfy legal, accounting,
              or reporting requirements.
            </p>

            <h2 className="font-heading text-2xl uppercase text-primary mt-12 mb-4">
              Children's Privacy
            </h2>
            <p className="text-gray-600 mb-4">
              Our website is not intended for children under 13 years of age. We do not
              knowingly collect personal information from children under 13.
            </p>

            <h2 className="font-heading text-2xl uppercase text-primary mt-12 mb-4">
              Changes to This Policy
            </h2>
            <p className="text-gray-600 mb-4">
              We may update this Privacy Policy from time to time. We will notify you of
              any changes by posting the new Privacy Policy on this page and updating the
              "Last updated" date.
            </p>

            <h2 className="font-heading text-2xl uppercase text-primary mt-12 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about this Privacy Policy or wish to exercise your
              privacy rights, please contact us:
            </p>
            <div className="bg-gray-50 rounded-xl p-6 mt-4">
              <p className="text-gray-600 mb-2">
                <strong>GTSE Group Inc</strong><br />
                4101 S High School Rd<br />
                Indianapolis, IN 46241
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Phone:</strong>{' '}
                <a href="tel:1-463-255-9942" className="text-accent hover:underline">
                  1-463-255-9942
                </a>
              </p>
              <p className="text-gray-600">
                <strong>Email:</strong>{' '}
                <a href="mailto:epha@gtsegroup.com" className="text-accent hover:underline">
                  epha@gtsegroup.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
