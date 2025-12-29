import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '~/components/link';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Terms & Conditions | EPHA Hose Protectors',
    description: 'Read the terms and conditions for using the EPHA Hose Protectors website and purchasing our products.',
  };
}

export default async function TermsConditionsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-5xl md:text-6xl uppercase mb-4">
              Terms & Conditions
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
              Please read these Terms and Conditions carefully before using the EPHA Hose Protectors
              website or purchasing our products. By accessing our website or making a purchase,
              you agree to be bound by these terms.
            </p>

            <h2 className="font-heading text-2xl uppercase text-primary mt-12 mb-4">
              General Terms
            </h2>
            <p className="text-gray-600 mb-4">
              This website is operated by GTSE Group Inc, the official distributor of EPHA products.
              Throughout the site, the terms "we", "us", and "our" refer to GTSE Group Inc. We reserve
              the right to refuse service to anyone for any reason at any time.
            </p>
            <p className="text-gray-600 mb-4">
              By using our website, you represent that you are of legal age in your jurisdiction
              and that you will not use our products for any illegal or unauthorized purpose.
            </p>

            <h2 className="font-heading text-2xl uppercase text-primary mt-12 mb-4">
              Products and Pricing
            </h2>
            <p className="text-gray-600 mb-4">
              We strive to display our products and their colors as accurately as possible on our
              website. However, we cannot guarantee that your computer monitor's display will be
              completely accurate.
            </p>
            <p className="text-gray-600 mb-4">
              Prices for our products are subject to change without notice. We reserve the right
              to modify or discontinue any product at any time without prior notice. We shall not
              be liable to you or any third party for any modification, price change, suspension,
              or discontinuance of any product.
            </p>
            <p className="text-gray-600 mb-4">
              Certain products may be available exclusively online through our website. These products
              may have limited quantities, and returns are subject to our{' '}
              <Link href="/shipping-returns" className="text-accent hover:underline">
                Shipping & Returns Policy
              </Link>.
            </p>

            <h2 className="font-heading text-2xl uppercase text-primary mt-12 mb-4">
              Orders and Payment
            </h2>
            <p className="text-gray-600 mb-4">
              We reserve the right to refuse any order you place with us. We may, at our sole
              discretion, limit or cancel quantities purchased per person, per household, or per order.
            </p>
            <p className="text-gray-600 mb-4">
              You agree to provide current, complete, and accurate purchase and account information
              for all purchases made on our website. You agree to promptly update your account and
              other information so that we can complete your transactions and contact you as needed.
            </p>

            <h2 className="font-heading text-2xl uppercase text-primary mt-12 mb-4">
              Resale Restrictions
            </h2>
            <p className="text-gray-600 mb-4">
              Products purchased from our website may not be resold on Amazon or eBay marketplaces
              without prior written authorization. Violation of this policy may result in account
              termination and legal action.
            </p>

            <h2 className="font-heading text-2xl uppercase text-primary mt-12 mb-4">
              Shipping and Returns
            </h2>
            <p className="text-gray-600 mb-4">
              For detailed information about shipping, delivery times, and our return policy, please
              visit our{' '}
              <Link href="/shipping-returns" className="text-accent hover:underline">
                Shipping & Returns
              </Link>{' '}
              page.
            </p>

            <h2 className="font-heading text-2xl uppercase text-primary mt-12 mb-4">
              Accuracy of Information
            </h2>
            <p className="text-gray-600 mb-4">
              We are not responsible if information made available on this site is not accurate,
              complete, or current. The material on this site is provided for general information
              only and should not be relied upon as the sole basis for making decisions.
            </p>
            <p className="text-gray-600 mb-4">
              We undertake no obligation to update, amend, or clarify information on the website,
              except as required by law. No specified update date indicates that all information
              has been modified or updated.
            </p>

            <h2 className="font-heading text-2xl uppercase text-primary mt-12 mb-4">
              Disclaimer of Warranties
            </h2>
            <p className="text-gray-600 mb-4">
              Our services and products are provided "as is" and "as available" without any
              representations or warranties of any kind, express or implied. We do not guarantee
              that our website will be uninterrupted, secure, or error-free.
            </p>
            <p className="text-gray-600 mb-4">
              We do not warrant that the results obtained from the use of our products will be
              accurate or reliable, or that any defects in the service will be corrected.
            </p>

            <h2 className="font-heading text-2xl uppercase text-primary mt-12 mb-4">
              Limitation of Liability
            </h2>
            <p className="text-gray-600 mb-4">
              In no event shall GTSE Group Inc, our directors, officers, employees, affiliates,
              agents, contractors, suppliers, or licensors be liable for any injury, loss, claim,
              or any direct, indirect, incidental, punitive, special, or consequential damages of
              any kind, including but not limited to lost profits, lost revenue, lost data, or
              similar damages.
            </p>

            <h2 className="font-heading text-2xl uppercase text-primary mt-12 mb-4">
              Indemnification
            </h2>
            <p className="text-gray-600 mb-4">
              You agree to indemnify, defend, and hold harmless GTSE Group Inc and our subsidiaries,
              affiliates, partners, officers, directors, agents, and employees from any claim or
              demand, including reasonable attorneys' fees, made by any third party due to or arising
              out of your breach of these Terms, your violation of any law, or your violation of the
              rights of a third party.
            </p>

            <h2 className="font-heading text-2xl uppercase text-primary mt-12 mb-4">
              Governing Law
            </h2>
            <p className="text-gray-600 mb-4">
              These Terms and Conditions shall be governed by and construed in accordance with the
              laws of the United States and the State of Indiana, without regard to its conflict
              of law provisions.
            </p>

            <h2 className="font-heading text-2xl uppercase text-primary mt-12 mb-4">
              Changes to Terms
            </h2>
            <p className="text-gray-600 mb-4">
              We reserve the right to update or modify these Terms and Conditions at any time
              without prior notice. Changes will be effective immediately upon posting to the
              website. Your continued use of the website following any changes constitutes
              acceptance of those changes.
            </p>

            <h2 className="font-heading text-2xl uppercase text-primary mt-12 mb-4">
              Contact Information
            </h2>
            <p className="text-gray-600 mb-4">
              Questions about the Terms and Conditions should be sent to us:
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
