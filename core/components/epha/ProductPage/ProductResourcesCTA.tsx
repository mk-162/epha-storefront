import { Calculator, FileText, Phone, Video } from 'lucide-react';

import { Button } from '~/components/ui/button';

export function ProductResourcesCTA() {
  const resources = [
    { icon: FileText, label: 'Datasheets' },
    { icon: Video, label: 'Install Videos' },
    { icon: Calculator, label: 'ROI Calculator' },
    { icon: Phone, label: 'Tech Support' },
  ];

  return (
    <section className="bg-primary py-20 text-center text-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 grid max-w-5xl gap-6 md:grid-cols-4">
          {resources.map((resource) => (
            <div
              className="cursor-pointer rounded-lg border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10"
              key={resource.label}
            >
              <resource.icon className="mx-auto mb-3 h-8 w-8 text-accent" />
              <div className="text-sm font-bold uppercase tracking-wide">{resource.label}</div>
            </div>
          ))}
        </div>

        <h2 className="mb-6 font-heading text-4xl font-bold uppercase md:text-6xl">
          Stop Replacing. <span className="text-accent">Start Protecting.</span>
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-xl text-blue-200">
          Join over 1,000 fleet managers and industrial operations who trust EPHA to keep their
          equipment running.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button
            className="bg-accent font-bold uppercase tracking-wider text-white hover:bg-accent/90"
            size="lg"
          >
            Get a Quote
          </Button>
          <Button
            className="border-white font-bold uppercase tracking-wider text-white hover:bg-white/10"
            size="lg"
            variant="outline"
          >
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
}
