import { Clock, Droplets, LucideIcon, ShieldCheck, Thermometer } from 'lucide-react';

function FeatureCard({
  icon: Icon,
  title,
  desc,
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-lg border border-slate-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/5 text-primary">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-3 font-heading text-xl font-bold uppercase text-primary">{title}</h3>
      <p className="text-sm leading-relaxed text-gray-600">{desc}</p>
    </div>
  );
}

export function ProductFeatureGrid() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            desc="Proprietary material with extreme durability rating outlasts standard protection."
            icon={ShieldCheck}
            title="Abrasion Resistant"
          />
          <FeatureCard
            desc="Impervious to solvents, oils, grease, gasoline, and hydrocarbon fluids."
            icon={Droplets}
            title="Chemical Immunity"
          />
          <FeatureCard
            desc="Operates reliably from -40°F to 430°F (-40°C to 221°C)."
            icon={Thermometer}
            title="Temp Tolerance"
          />
          <FeatureCard
            desc="Install in minutes without equipment disassembly or special tools."
            icon={Clock}
            title="4-Step Install"
          />
        </div>

        {/* Technical Specifications */}
        <div className="mx-auto max-w-4xl rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
          <h3 className="mb-6 border-b border-slate-100 pb-4 font-heading text-2xl font-bold uppercase text-primary">
            Technical Specifications
          </h3>
          <div className="grid gap-x-12 gap-y-4 md:grid-cols-2">
            <div className="flex flex-col">
              <span className="mb-1 text-sm font-bold uppercase tracking-wide text-gray-500">
                Material Composition
              </span>
              <span className="font-medium text-primary">
                Proprietary abrasion and hydrocarbon-resistant compound
              </span>
            </div>
            <div className="flex flex-col">
              <span className="mb-1 text-sm font-bold uppercase tracking-wide text-gray-500">
                Temperature Rating
              </span>
              <span className="font-medium text-primary">-40°F to 430°F (-40°C to 221°C)</span>
            </div>
            <div className="flex flex-col">
              <span className="mb-1 text-sm font-bold uppercase tracking-wide text-gray-500">
                Chemical Resistance
              </span>
              <span className="font-medium text-primary">
                Solvents, oils, grease, gasoline, hydraulic fluids
              </span>
            </div>
            <div className="flex flex-col">
              <span className="mb-1 text-sm font-bold uppercase tracking-wide text-gray-500">
                UV Resistance
              </span>
              <span className="font-medium text-primary">Excellent outdoor durability</span>
            </div>
            <div className="flex flex-col">
              <span className="mb-1 text-sm font-bold uppercase tracking-wide text-gray-500">
                Installation Hardware
              </span>
              <span className="font-medium text-primary">Cable ties included with each unit</span>
            </div>
            <div className="flex flex-col">
              <span className="mb-1 text-sm font-bold uppercase tracking-wide text-gray-500">
                Wear Factor
              </span>
              <span className="font-medium text-primary">Extremely high durability rating</span>
            </div>
            <div className="flex flex-col">
              <span className="mb-1 text-sm font-bold uppercase tracking-wide text-gray-500">
                Color Stability
              </span>
              <span className="font-medium text-primary">
                Maintains visibility in harsh environments
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
