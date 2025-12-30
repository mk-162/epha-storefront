import { Award, Factory, ShieldCheck, Star, Truck, Users } from 'lucide-react';

export function ProductTrust() {
  const stats = [
    { icon: Users, value: '1,000+', label: 'Fleet Managers Trust Us' },
    { icon: Factory, value: 'USA', label: 'Made in America' },
    { icon: ShieldCheck, value: '85%', label: 'Reduction in Downtime' },
    { icon: Award, value: '10+', label: 'Years in Industry' },
  ];

  return (
    <section className="bg-primary py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="mb-2 font-heading text-2xl font-bold uppercase md:text-3xl">
            Trusted by Industry Leaders
          </h2>
          <p className="text-white/70">Join thousands of operations that rely on EPHA protection</p>
        </div>

        <div className="mb-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div className="text-center" key={stat.label}>
              <stat.icon className="mx-auto mb-3 h-8 w-8 text-accent" />
              <div className="font-heading text-3xl font-bold">{stat.value}</div>
              <div className="text-sm text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Customer testimonial */}
        <div className="mx-auto max-w-3xl rounded-xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm">
          <div className="mb-4 flex justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star className="h-5 w-5 fill-accent text-accent" key={i} />
            ))}
          </div>
          <blockquote className="mb-4 text-lg italic text-white/90">
            &ldquo;We used to replace hydraulic lines every 3 months. With EPHA protectors,
            we&apos;re going over a year on the same hoses. The ROI was immediate.&rdquo;
          </blockquote>
          <div className="font-bold">Mike Thompson</div>
          <div className="text-sm text-white/60">Fleet Maintenance Manager, Midwest Logistics</div>
        </div>

        {/* Guarantee badges */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-8 border-t border-white/10 pt-8">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-6 w-6 text-accent" />
            <span className="text-sm font-bold uppercase tracking-wide">Quality Guaranteed</span>
          </div>
          <div className="flex items-center gap-2">
            <Truck className="h-6 w-6 text-accent" />
            <span className="text-sm font-bold uppercase tracking-wide">Free Shipping $500+</span>
          </div>
          <div className="flex items-center gap-2">
            <Factory className="h-6 w-6 text-accent" />
            <span className="text-sm font-bold uppercase tracking-wide">Made in USA</span>
          </div>
        </div>
      </div>
    </section>
  );
}
