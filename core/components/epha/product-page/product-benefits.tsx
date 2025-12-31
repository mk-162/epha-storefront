import { Clock, DollarSign, Shield, Wrench } from 'lucide-react';

export function ProductBenefits() {
  const benefits = [
    {
      icon: DollarSign,
      stat: '$5,000+',
      label: 'Saved Per Incident',
      description: 'Prevent costly equipment downtime and emergency repairs',
    },
    {
      icon: Clock,
      stat: '3-5x',
      label: 'Longer Hose Life',
      description: 'Extend replacement cycles dramatically',
    },
    {
      icon: Wrench,
      stat: '5 min',
      label: 'Installation Time',
      description: 'No tools or disassembly required',
    },
    {
      icon: Shield,
      stat: '430°F',
      label: 'Max Temperature',
      description: 'Withstands extreme industrial conditions',
    },
  ];

  return (
    <section className="border-y border-slate-200 bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div
              className="group relative overflow-hidden rounded-xl border border-slate-100 bg-gradient-to-br from-slate-50 to-white p-6 transition-all hover:border-accent/20 hover:shadow-lg"
              key={benefit.label}
            >
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-accent/10 group-hover:text-accent">
                <benefit.icon className="h-6 w-6" />
              </div>
              <div className="mb-1 font-heading text-3xl font-bold text-primary">
                {benefit.stat}
              </div>
              <div className="mb-2 font-bold uppercase tracking-wide text-accent">
                {benefit.label}
              </div>
              <p className="text-sm text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
