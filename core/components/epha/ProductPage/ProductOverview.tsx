import Image from "next/image";

export function ProductOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-bold uppercase mb-6">
              The EPHA Solution
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary uppercase mb-6">
              Engineered Wear Shields
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              EPHA Hose Protectors wrap around your critical hydraulic lines, cables, and hoses to prevent damage before it happens.
              Our proprietary material withstands the toughest industrial environments while providing quick, tool-free installation.
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-8">
              <h3 className="font-bold text-primary uppercase mb-4">The Cost of Failure</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-red-700">
                  <span className="h-2 w-2 rounded-full bg-red-600" />
                  $5,000-$50,000+ in downtime per incident
                </li>
                <li className="flex items-center gap-3 text-red-700">
                  <span className="h-2 w-2 rounded-full bg-red-600" />
                  3-5x faster hose replacement cycles
                </li>
                <li className="flex items-center gap-3 text-red-700">
                  <span className="h-2 w-2 rounded-full bg-red-600" />
                  Safety hazards from hydraulic leaks
                </li>
              </ul>
            </div>

            <div className="text-4xl font-heading font-bold text-accent">
              85% Reduction <span className="text-lg text-gray-500 font-sans font-normal normal-case ml-2">in downtime through preventative maintenance</span>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-slate-100 rounded-2xl overflow-hidden p-8 flex items-center justify-center">
              <Image
                src="/images/generated_images/red_industrial_hose_protector_product_shot.png"
                alt="EPHA Hose Protector"
                width={500}
                height={500}
                className="w-full h-full object-contain mix-blend-multiply hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Floating Feature Cards */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl border border-slate-100 max-w-[200px]">
              <div className="font-bold text-primary mb-1">Precision Fit</div>
              <div className="text-xs text-gray-500">7 sizes accommodate 0.25&quot; to 2.50&quot; hose diameters</div>
            </div>
            <div className="absolute top-10 -right-6 bg-white p-4 rounded-lg shadow-xl border border-slate-100 max-w-[200px]">
              <div className="font-bold text-primary mb-1">Install in Minutes</div>
              <div className="text-xs text-gray-500">No tools required. No equipment disassembly.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
