import { Button } from "~/components/ui/button";
import { FileText, Calculator, Video, Phone } from "lucide-react";

export function ProductResourcesCTA() {
  const resources = [
    { icon: FileText, label: "Datasheets" },
    { icon: Video, label: "Install Videos" },
    { icon: Calculator, label: "ROI Calculator" },
    { icon: Phone, label: "Tech Support" },
  ];

  return (
    <section className="py-20 bg-primary text-white text-center">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-6 mb-16 max-w-5xl mx-auto">
          {resources.map((resource) => (
            <div key={resource.label} className="bg-white/5 hover:bg-white/10 transition-colors rounded-lg p-6 cursor-pointer border border-white/10">
              <resource.icon className="h-8 w-8 mx-auto mb-3 text-accent" />
              <div className="font-bold uppercase tracking-wide text-sm">{resource.label}</div>
            </div>
          ))}
        </div>

        <h2 className="font-heading text-4xl md:text-6xl font-bold uppercase mb-6">
          Stop Replacing. <span className="text-accent">Start Protecting.</span>
        </h2>
        <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
          Join over 1,000 fleet managers and industrial operations who trust EPHA to keep their equipment running.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold uppercase tracking-wider">
            Get a Quote
          </Button>
          <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10 font-bold uppercase tracking-wider">
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
}
