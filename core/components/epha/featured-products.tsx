import { Image } from '~/components/image';
import { Button } from '~/components/ui/button';

function getImageFilter(idx: number): string {
  if (idx === 1 || idx === 3) return 'brightness-50 grayscale';
  if (idx === 2) return 'hue-rotate-45 brightness-125';

  return '';
}

export function FeaturedProducts() {
  const products = [
    {
      name: 'Kase Protector',
      code: 'LEA9R RO8E',
      desc: '2 Inch Heavy Duty - For Extreme Abrasion',
      color: 'bg-red-600',
    },
    {
      name: 'Hose Protector',
      code: 'LEA9A R08E',
      desc: '2 Inch Heavy Duty - For Extreme Abrasion',
      color: 'bg-black',
    },
    {
      name: 'Kase Protector',
      code: 'LEA9A R08E',
      desc: '2 Inch Heavy Duty - For Extreme Abrasion',
      color: 'bg-yellow-400',
    },
    {
      name: 'Kase Protector',
      code: 'LEB1A R08E',
      desc: '2 Inch Heavy Duty - For Extreme Abrasion',
      color: 'bg-slate-800',
    },
  ];

  return (
    <section className="bg-secondary/30 py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="font-heading text-4xl font-bold uppercase text-primary md:text-5xl">
              Featured Products
            </h2>
            <div className="mt-4 h-1 w-24 bg-accent" />
          </div>
          <Button
            className="hidden font-bold uppercase tracking-wider text-primary md:block"
            variant="link"
          >
            View All Products &rarr;
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, idx) => (
            <div
              className="group rounded-lg border border-transparent bg-white p-6 shadow-sm transition-all duration-300 hover:border-accent/20 hover:shadow-xl"
              key={idx}
            >
              <div className="relative mb-6 flex aspect-square items-center justify-center overflow-hidden rounded-md bg-gradient-to-br from-gray-50 to-gray-100">
                <Image
                  alt={product.name}
                  className={`w-4/5 object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110 ${getImageFilter(idx)}`}
                  height={200}
                  src="/images/generated_images/red_industrial_hose_protector_product_shot.png"
                  width={200}
                />
                {/* Simulated color variant badge */}
                <div
                  className={`absolute right-4 top-4 h-4 w-4 rounded-full ${product.color} shadow-md ring-2 ring-white`}
                />
              </div>

              <h3 className="mb-1 text-lg font-bold text-primary">{product.name}</h3>
              <p className="mb-2 font-mono text-xs text-gray-400">{product.code}</p>
              <p className="mb-4 text-sm text-gray-600">{product.desc}</p>

              <Button className="w-full bg-gray-900 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-accent hover:text-white">
                View Specs
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
