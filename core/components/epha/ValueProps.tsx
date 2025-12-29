import { Clock, DollarSign, ShieldCheck } from 'lucide-react';

import { Card, CardContent } from '~/components/ui/card';

export function ValueProps() {
  const props = [
    {
      icon: DollarSign,
      title: 'Reduce Downtime Costs',
      description:
        'Hydraulic failure costs an average of $2,500 per hour in downtime. EPHA protectors eliminate 85% of these incidents.',
    },
    {
      icon: Clock,
      title: 'Install in Minutes',
      description:
        'No need to disconnect hoses. Our patented snap-on design allows for installation in under 4 minutes per line.',
    },
    {
      icon: ShieldCheck,
      title: 'Extreme Durability',
      description:
        'Engineered to withstand temperatures from -40°F to 430°F and resist abrasion, UV rays, and chemical exposure.',
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {props.map((prop, idx) => (
            <Card
              className="border-none shadow-none transition-shadow duration-300 hover:shadow-xl"
              key={idx}
            >
              <CardContent className="pt-6 text-center md:text-left">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-primary/5 text-primary">
                  <prop.icon className="h-8 w-8" />
                </div>
                <h3 className="mb-3 font-heading text-2xl font-bold uppercase text-primary">
                  {prop.title}
                </h3>
                <p className="leading-relaxed text-gray-600">{prop.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
