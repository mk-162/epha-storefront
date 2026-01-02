import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { NewsletterForm } from './newsletter-form';

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#1A1D29] pb-10 pt-20 text-white">
      <div className="container mx-auto px-4">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Image
                alt="EPHA Inc"
                className="h-16 w-auto object-contain"
                height={64}
                src="/images/epha-logo2.png"
                width={160}
              />
              <Image
                alt="Made in USA"
                className="h-14 w-auto object-contain"
                height={56}
                src="/images/made-in-usa2.png"
                width={56}
              />
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Since 1987, EPHA has been the global leader in hose protection technology. Proudly
              manufactured in the USA, serving industries worldwide.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <div className="flex h-8 w-12 items-center justify-center rounded bg-white/10 text-xs text-gray-500">
                ISO
              </div>
              <div className="flex h-8 w-12 items-center justify-center rounded bg-white/10 text-xs text-gray-500">
                USA
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-gray-300">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {[
                { name: 'Hose Protector', path: '/hose-protector' },
                { name: 'Industries', path: '/industries' },
                { name: 'Blog', path: '/blog' },
                { name: 'About Us', path: '/about' },
                { name: 'Contact', path: '/contact' },
                { name: 'Shipping & Returns', path: '/shipping-returns' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    className="cursor-pointer transition-colors hover:text-accent"
                    href={item.path}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-gray-300">
              Contact
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex flex-col">
                <span className="mb-1 text-xs uppercase text-gray-600">Distribution Center</span>
                <span>
                  GTSE Group Inc
                  <br />
                  4101 S High School Rd
                  <br />
                  Indianapolis, IN 46241
                </span>
              </li>
              <li className="flex flex-col">
                <span className="mb-1 text-xs uppercase text-gray-600">Sales</span>
                <a
                  className="font-bold text-white transition-colors hover:text-accent"
                  href="tel:1-463-255-9942"
                >
                  1-463-255-9942
                </a>
                <a className="text-accent hover:underline" href="mailto:epha@gtsegroup.com">
                  epha@gtsegroup.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-gray-300">
              Stay Informed
            </h4>
            <p className="mb-4 text-xs text-gray-500">
              Get the latest industry reports and maintenance tips.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-gray-600 md:flex-row">
          <p>
            &copy; 2025 EPHA Hose Protectors. All rights reserved. Distributed by GTSE Group Inc.
          </p>
          <div className="flex items-center gap-4">
            <Link className="transition-colors hover:text-accent" href="/privacy-policy">
              Privacy Policy
            </Link>
            <span className="text-gray-700">|</span>
            <Link className="transition-colors hover:text-accent" href="/terms-conditions">
              Terms & Conditions
            </Link>
            <span className="text-gray-700">|</span>
            <Link className="transition-colors hover:text-accent" href="/shipping-returns">
              Shipping & Returns
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
