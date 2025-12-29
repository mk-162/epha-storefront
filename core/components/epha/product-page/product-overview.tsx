import { Image } from '~/components/image';

export function ProductOverview() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-bold uppercase text-primary">
              The EPHA Solution
            </div>
            <h2 className="mb-6 font-heading text-4xl font-bold uppercase text-primary md:text-5xl">
              Engineered Wear Shields
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              EPHA Hose Protectors wrap around your critical hydraulic lines, cables, and hoses to
              prevent damage before it happens. Our proprietary material withstands the toughest
              industrial environments while providing quick, tool-free installation.
            </p>

            <div className="mb-8 rounded-lg border border-slate-200 bg-slate-50 p-6">
              <h3 className="mb-4 font-bold uppercase text-primary">The Cost of Failure</h3>
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

            <div className="font-heading text-4xl font-bold text-accent">
              85% Reduction{' '}
              <span className="ml-2 font-sans text-lg font-normal normal-case text-gray-500">
                in downtime through preventative maintenance
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="flex aspect-square items-center justify-center overflow-hidden rounded-2xl bg-slate-100 p-8">
              <Image
                alt="EPHA Hose Protector"
                className="h-full w-full object-contain mix-blend-multiply transition-transform duration-500 hover:scale-105"
                height={500}
                src="/images/generated_images/red_industrial_hose_protector_product_shot.png"
                width={500}
              />
            </div>
            {/* Floating Feature Cards */}
            <div className="absolute -bottom-6 -left-6 max-w-[200px] rounded-lg border border-slate-100 bg-white p-4 shadow-xl">
              <div className="mb-1 font-bold text-primary">Precision Fit</div>
              <div className="text-xs text-gray-500">
                7 sizes accommodate 0.25&quot; to 2.50&quot; hose diameters
              </div>
            </div>
            <div className="absolute -right-6 top-10 max-w-[200px] rounded-lg border border-slate-100 bg-white p-4 shadow-xl">
              <div className="mb-1 font-bold text-primary">Install in Minutes</div>
              <div className="text-xs text-gray-500">
                No tools required. No equipment disassembly.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
