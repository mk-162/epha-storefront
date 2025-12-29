import { ShieldCheck, Thermometer, Droplets, Clock, LucideIcon } from "lucide-react";

function FeatureCard({ icon: Icon, title, desc }: { icon: LucideIcon, title: string, desc: string }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
      <div className="h-12 w-12 bg-primary/5 text-primary rounded-lg flex items-center justify-center mb-6">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="font-heading text-xl font-bold text-primary uppercase mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed text-sm">{desc}</p>
    </div>
  );
}

export function ProductFeatureGrid() {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <FeatureCard
            icon={ShieldCheck}
            title="Abrasion Resistant"
            desc="Proprietary material with extreme durability rating outlasts standard protection."
          />
          <FeatureCard
            icon={Droplets}
            title="Chemical Immunity"
            desc="Impervious to solvents, oils, grease, gasoline, and hydrocarbon fluids."
          />
          <FeatureCard
            icon={Thermometer}
            title="Temp Tolerance"
            desc="Operates reliably from -40°F to 430°F (-40°C to 221°C)."
          />
          <FeatureCard
            icon={Clock}
            title="4-Step Install"
            desc="Install in minutes without equipment disassembly or special tools."
          />
        </div>

        {/* Technical Specifications */}
        <div className="bg-white border border-slate-200 rounded-lg p-8 max-w-4xl mx-auto shadow-sm">
          <h3 className="font-heading text-2xl font-bold text-primary uppercase mb-6 border-b border-slate-100 pb-4">Technical Specifications</h3>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
            <div className="flex flex-col">
              <span className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-1">Material Composition</span>
              <span className="text-primary font-medium">Proprietary abrasion and hydrocarbon-resistant compound</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-1">Temperature Rating</span>
              <span className="text-primary font-medium">-40°F to 430°F (-40°C to 221°C)</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-1">Chemical Resistance</span>
              <span className="text-primary font-medium">Solvents, oils, grease, gasoline, hydraulic fluids</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-1">UV Resistance</span>
              <span className="text-primary font-medium">Excellent outdoor durability</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-1">Installation Hardware</span>
              <span className="text-primary font-medium">Cable ties included with each unit</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-1">Wear Factor</span>
              <span className="text-primary font-medium">Extremely high durability rating</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-1">Color Stability</span>
              <span className="text-primary font-medium">Maintains visibility in harsh environments</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
