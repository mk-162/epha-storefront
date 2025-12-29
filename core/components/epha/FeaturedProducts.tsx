import Image from "next/image";
import { Button } from "~/components/ui/button";

export function FeaturedProducts() {
  const products = [
    { name: "Kase Protector", code: "LEA9R RO8E", desc: "2 Inch Heavy Duty - For Extreme Abrasion", color: "bg-red-600" },
    { name: "Hose Protector", code: "LEA9A R08E", desc: "2 Inch Heavy Duty - For Extreme Abrasion", color: "bg-black" },
    { name: "Kase Protector", code: "LEA9A R08E", desc: "2 Inch Heavy Duty - For Extreme Abrasion", color: "bg-yellow-400" },
    { name: "Kase Protector", code: "LEB1A R08E", desc: "2 Inch Heavy Duty - For Extreme Abrasion", color: "bg-slate-800" },
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary font-heading uppercase">Featured Products</h2>
            <div className="h-1 w-24 bg-accent mt-4"></div>
          </div>
          <Button variant="link" className="text-primary font-bold uppercase tracking-wider hidden md:block">
            View All Products &rarr;
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, idx) => (
            <div key={idx} className="group bg-white rounded-lg p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-accent/20">
              <div className="aspect-square mb-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-md flex items-center justify-center overflow-hidden relative">
                <Image
                  src="/images/generated_images/red_industrial_hose_protector_product_shot.png"
                  alt={product.name}
                  width={200}
                  height={200}
                  className={`w-4/5 object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110 ${idx === 1 ? 'grayscale brightness-50' : idx === 2 ? 'hue-rotate-45 brightness-125' : idx === 3 ? 'grayscale brightness-50' : ''}`}
                />
                {/* Simulated color variant badge */}
                <div className={`absolute top-4 right-4 h-4 w-4 rounded-full ${product.color} ring-2 ring-white shadow-md`} />
              </div>

              <h3 className="font-bold text-lg text-primary mb-1">{product.name}</h3>
              <p className="text-xs font-mono text-gray-400 mb-2">{product.code}</p>
              <p className="text-sm text-gray-600 mb-4">{product.desc}</p>

              <Button className="w-full bg-gray-900 text-white hover:bg-accent hover:text-white transition-colors uppercase font-bold text-xs tracking-wider">
                View Specs
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
