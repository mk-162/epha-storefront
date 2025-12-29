import { Link } from '~/components/link';
import { Image } from '~/components/image';

export function Footer() {
  return (
    <footer className="bg-[#1A1D29] text-white pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Image
                src="/images/epha-logo-usa.png"
                alt="EPHA Inc - Made in USA"
                width={200}
                height={80}
                className="h-20 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Since 1987, EPHA has been the global leader in hose protection technology.
              Proudly manufactured in the USA, serving industries worldwide.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <div className="h-8 w-12 bg-white/10 rounded flex items-center justify-center text-xs text-gray-500">ISO</div>
              <div className="h-8 w-12 bg-white/10 rounded flex items-center justify-center text-xs text-gray-500">USA</div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold uppercase tracking-wider mb-6 text-sm text-gray-300">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {[
                { name: "Products", path: "/products" },
                { name: "Case Studies", path: "/case-study" },
                { name: "Industries", path: "/industries" },
                { name: "Blog", path: "/blog" },
                { name: "About Us", path: "/about" },
                { name: "Contact", path: "/contact" },
                { name: "Shipping & Returns", path: "/shipping-returns" },
              ].map(item => (
                <li key={item.name}>
                  <Link href={item.path} className="hover:text-accent transition-colors cursor-pointer">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold uppercase tracking-wider mb-6 text-sm text-gray-300">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex flex-col">
                <span className="text-xs uppercase text-gray-600 mb-1">Distribution Center</span>
                <span>GTSE Group Inc<br />4101 S High School Rd<br />Indianapolis, IN 46241</span>
              </li>
              <li className="flex flex-col">
                <span className="text-xs uppercase text-gray-600 mb-1">Sales</span>
                <a href="tel:1-463-255-9942" className="text-white font-bold hover:text-accent transition-colors">1-463-255-9942</a>
                <a href="mailto:epha@gtsegroup.com" className="text-accent hover:underline">epha@gtsegroup.com</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold uppercase tracking-wider mb-6 text-sm text-gray-300">Stay Informed</h4>
            <p className="text-xs text-gray-500 mb-4">Get the latest industry reports and maintenance tips.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-white/5 border border-white/10 rounded px-3 py-2 text-sm w-full focus:outline-none focus:border-accent text-white"
              />
              <button className="bg-accent text-white px-4 py-2 rounded text-sm font-bold uppercase hover:bg-accent/90 transition-colors">
                Go
              </button>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>&copy; 2025 EPHA Hose Protectors. All rights reserved. Distributed by GTSE Group Inc.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <span className="text-gray-700">|</span>
            <Link href="/terms-conditions" className="hover:text-accent transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-gray-700">|</span>
            <Link href="/shipping-returns" className="hover:text-accent transition-colors">
              Shipping & Returns
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
