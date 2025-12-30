import { Car, Factory, Home, Mail, MapPin, Shield, Tractor, Truck, Wrench } from 'lucide-react';

import { isLoggedIn } from '~/auth';
import { getHeaderCartData, removeCartItem, updateCartItemQuantity } from '~/components/cart';
import { Footer, Navigation } from '~/components/epha';
import { Link } from '~/components/link';

const categories = [
  {
    name: 'Construction',
    href: '/industries/construction',
    icon: Wrench,
    description: 'Heavy-duty safety equipment',
  },
  {
    name: 'Manufacturing',
    href: '/industries/manufacturing',
    icon: Factory,
    description: 'Industrial safety solutions',
  },
  {
    name: 'Fleet & DOT',
    href: '/industries/fleet',
    icon: Truck,
    description: 'DOT compliance products',
  },
  {
    name: 'Automotive',
    href: '/industries/automotive',
    icon: Car,
    description: 'Workshop safety gear',
  },
  {
    name: 'Agricultural',
    href: '/industries/agricultural',
    icon: Tractor,
    description: 'Farm safety equipment',
  },
  {
    name: 'All Products',
    href: '/products',
    icon: Shield,
    description: 'Browse full catalog',
  },
];

export default async function NotFound() {
  const cartData = await getHeaderCartData();
  const userLoggedIn = await isLoggedIn();

  return (
    <>
      <Navigation
        cartCount={cartData.itemCount}
        cartItems={cartData.items}
        cartSubtotal={cartData.subtotal}
        isLoggedIn={userLoggedIn}
        removeItemAction={removeCartItem}
        updateQuantityAction={updateCartItemQuantity}
      />

      <main className="flex-1">
        {/* Hero 404 Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-16 md:py-24">
          {/* Decorative background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[hsl(16,100%,60%)]/5" />
            <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[hsl(210,100%,18%)]/5" />
          </div>

          <div className="container relative mx-auto px-4 text-center">
            {/* Bouncing Icon */}
            <div className="mb-6 inline-flex animate-bounce">
              <div className="rounded-full bg-[hsl(16,100%,60%)]/10 p-4">
                <MapPin className="h-12 w-12 text-[hsl(16,100%,60%)]" strokeWidth={1.5} />
              </div>
            </div>

            {/* 404 Text */}
            <h1 className="mb-4 font-heading text-[120px] font-bold leading-none tracking-tight text-[hsl(210,100%,18%)] md:text-[180px]">
              404
            </h1>

            {/* Subheading */}
            <h2 className="mb-4 font-heading text-2xl uppercase tracking-wide text-[hsl(210,100%,18%)] md:text-3xl">
              Oops! We can&apos;t seem to find that page
            </h2>

            {/* Description */}
            <p className="mx-auto mb-8 max-w-xl text-lg text-gray-600">
              The page you&apos;re looking for might have been removed, had its name changed, or is
              temporarily unavailable.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                className="inline-flex items-center gap-2 rounded-full bg-[hsl(210,100%,18%)] px-8 py-4 font-semibold text-white transition-all hover:bg-[hsl(210,100%,25%)] hover:shadow-lg"
                href="/"
              >
                <Home className="h-5 w-5" />
                Back to Homepage
              </Link>
              <Link
                className="inline-flex items-center gap-2 rounded-full border-2 border-[hsl(210,100%,18%)] bg-transparent px-8 py-4 font-semibold text-[hsl(210,100%,18%)] transition-all hover:bg-[hsl(210,100%,18%)] hover:text-white"
                href="/contact"
              >
                <Mail className="h-5 w-5" />
                Contact Support
              </Link>
            </div>
          </div>
        </section>

        {/* Shop by Category Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="mb-10 text-center">
              <h2 className="mb-2 font-heading text-3xl uppercase tracking-wide text-[hsl(210,100%,18%)] md:text-4xl">
                Shop By Industry
              </h2>
              <div className="mx-auto h-1 w-16 rounded-full bg-[hsl(16,100%,60%)]" />
            </div>

            {/* Category Grid */}
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
              {categories.map((category) => {
                const Icon = category.icon;

                return (
                  <Link
                    className="group flex flex-col items-center rounded-lg border border-gray-200 bg-white p-6 text-center transition-all duration-300 hover:border-[hsl(16,100%,60%)] hover:shadow-lg"
                    href={category.href}
                    key={category.name}
                  >
                    <div className="mb-4 rounded-full bg-slate-100 p-4 transition-colors group-hover:bg-[hsl(16,100%,60%)]/10">
                      <Icon className="h-8 w-8 text-[hsl(210,100%,18%)] transition-colors group-hover:text-[hsl(16,100%,60%)]" />
                    </div>
                    <h3 className="mb-1 font-heading text-lg uppercase tracking-wide text-[hsl(210,100%,18%)]">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-500">{category.description}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
